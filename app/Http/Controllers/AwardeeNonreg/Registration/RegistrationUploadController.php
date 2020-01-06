<?php

namespace App\Http\Controllers\AwardeeNonreg\Registration;

use App;
use App\Http\Controllers\Controller;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class RegistrationUploadController extends Controller
{
    public function authorized(Request $request)
    {
        $RegisterExist = App\AwardeeNonregScholarship::where([
            'awardee_nonreg_id' => $request->id,
            'registration_code' => $request->registration_code,
            'scholarship_id' => $request->scholarship_id,
        ])->exists();
        if (!$RegisterExist) {
            return response()->json(['error' => 'Unauthorized', 'message' => 'You are not allowed to access this page'], 401);
        }

    }
    public function index(Request $request)
    {

        $file = null;
        $filesInFolder = Storage::files("registration/nonreg/{$request->scholarship_id}/{$request->id}/{$request->folder}");
        if (count($filesInFolder) > 0) {
            $files = pathinfo($filesInFolder[0]);
            $dirname = $files['dirname'];
            $basename = $files['basename'];
            $file['size'] = Storage::size($dirname . '/' . $basename);
            $file['name'] = $basename;
            $file['date'] = Carbon::createFromTimestamp(Storage::lastModified($dirname . '/' . $basename))->format('d-M-y');
            return $file;

        }
        return response()->json(['status' => 'File not found'], 200);

    }
    public function show(Request $request, $id)
    {

        if (!($this->registrantAuthenticate($id, $request->registration_code, $request->scholarship_id))) {
            return response()->json(['error' => 'Unauthorized', 'message' => 'You are not allowed to access this page'], 401);
        }

        $newpathToFile = Storage::disk('local')->getDriver()->getAdapter()->applyPathPrefix("registration/nonreg/$request->scholarship_id/{$id}/{$request->folder}/{$request->filename}");
        return response()->file($newpathToFile);

    }
    public function store(Request $request)
    {
        if (!($this->registrantAuthenticate($request->id, $request->registration_code, $request->scholarship_id))) {
            return response()->json(['error' => 'Unauthorized', 'message' => 'You are not allowed to access this page'], 401);
        }
        $this->validate($request, [
            'file' => 'mimes:jpeg,png,pdf|max:1024',
        ]);

        $save = $request->file('file')->storeAs("registration/nonreg/$request->scholarship_id/{$request->id}/{$request->folder}", $request->file('file')->getClientOriginalName());

        $cv = Storage::files("registration/nonreg/{$request->scholarship_id}/{$request->id}/cv");
        $siakng = Storage::files("registration/nonreg/{$request->scholarship_id}/{$request->id}/siakng");
        $proposal = Storage::files("registration/nonreg/{$request->scholarship_id}/{$request->id}/proposal");
        $sktmb = Storage::files("registration/nonreg/{$request->scholarship_id}/{$request->id}/sktmb");

        if ($cv && $siakng && $proposal && $sktmb) {
            $data = App\AwardeeNonregScholarship::where([
                'awardee_nonreg_id' => $request->id,
                'scholarship_id' => $request->scholarship_id,
            ])->first();
            $data->status = "SUBMITTED";
            $data->save();
        }

        return response()->json(['status' => 'File Succesfuly Uploaded'], 200);

    }
    public function destroy(Request $request, $id)
    {
        if (!($this->registrantAuthenticate($id, $request->registration_code, $request->scholarship_id))) {
            return response()->json(['error' => 'Unauthorized', 'message' => 'You are not allowed to access this page'], 401);
        }

        if (Storage::delete("registration/nonreg/$request->scholarship_id/{$id}/{$request->folder}/{$request->filename}")) {
            $data = App\AwardeePeriod::where([
                'awardee_nonreg_id' => $id,
                'scholarship_id' => $request->scholarship_id,
            ])->first();
            if ($data->status == "SUBMITTED") {
                # code...
                $data->status = "IN PROGRESS";
                $data->save();
            }
            return response()->json(['status' => 'File Deleted'], 200);
        }
    }

    public function registrantAuthenticate($id, $registration_code, $scholarship_id)
    {
        $RegisterExist = App\AwardeeNonregScholarship::where([
            'awardee_nonreg_id' => $id,
            'registration_code' => $registration_code,
            'scholarship_id' => $scholarship_id,
        ])->exists();
        return $RegisterExist;
    }
}
