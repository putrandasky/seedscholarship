<?php

namespace App\Http\Controllers\Awardee\Registration;

use App;
use App\Http\Controllers\Controller;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class RegistrationUploadController extends Controller
{
    public function authorized(Request $request)
    {
        $RegisterExist = App\Awardee::whereHas('awardeePeriods', function ($query) use ($request) {
            $query->where('registration_code', '=', $request->registration_code);
        })
            ->where([
                'email' => $request->email,
                'id' => $request->id,
            ])->exists();
        if (!$RegisterExist) {
            return response()->json(['error' => 'Unauthorized', 'message' => 'You are not allowed to access this page'], 401);
        }
    }
    public function index(Request $request)
    {

        $file = null;
        $filesInFolder = Storage::files("registration/awardee/{$request->period_id}/{$request->id}/{$request->folder}");
        if (count($filesInFolder) > 0) {
            # code...
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
        if (!($this->registrantAuthenticate($id, $request->registration_code, $request->period_id))) {
            return response()->json(['error' => 'Unauthorized', 'message' => 'You are not allowed to access this page'], 401);
        }

        $newpathToFile = Storage::disk('local')->getDriver()->getAdapter()->applyPathPrefix("registration/awardee/{$request->period_id}/{$id}/{$request->folder}/{$request->filename}");
        return response()->file($newpathToFile);

    }
    public function store(Request $request)
    {
        if (!($this->registrantAuthenticate($request->id, $request->registration_code, $request->period_id))) {
            return response()->json(['error' => 'Unauthorized', 'message' => 'You are not allowed to access this page'], 401);
        }

        $save = $request->file('file')->storeAs("registration/awardee/{$request->period_id}/{$request->id}/{$request->folder}", $request->file('file')->getClientOriginalName());
        return response()->json(['status' => 'File Succesfuly Uploaded'], 200);

    }
    public function destroy(Request $request, $id)
    {
        if (!($this->registrantAuthenticate($id, $request->registration_code, $request->period_id))) {
            return response()->json(['error' => 'Unauthorized', 'message' => 'You are not allowed to access this page'], 401);
        }
        if (Storage::delete("registration/awardee/{$request->period_id}/{$id}/{$request->folder}/{$request->filename}")) {
            # code...
            return response()->json(['status' => 'File Deleted Successfuly'], 200);
        }
        // return response()->json(['error' => 'File not deleted'], 401);
    }
    public function registrantAuthenticate($id, $registration_code, $period_id)
    {
        $RegisterExist = App\AwardeePeriod::where([
          'awardee_id'=>$id,
          'registration_code'=>$registration_code,
          'period_id'=>$period_id,
        ])->exists();
        return $RegisterExist;
    }
}
