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
        $user = App\AwardeeNonreg::find($request->id);
        $RegisterExist = $user->scholarships()->where(
            ['registration_code' => $request->registration_code, 'scholarship_id' => $request->scholarship_id]
        )->exists();
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
        return response()->json(['status' => 'File not found'], 404);

    }
    public function show(Request $request, $id)
    {
        // return 'test';
        //         $newpathToFile = Storage::files("registration/{$id}/{$request->folder}/{$request->filename}");
        // return response()->file($newpathToFile[0]);

        $newpathToFile = Storage::disk('local')->getDriver()->getAdapter()->applyPathPrefix("registration/nonreg/$request->scholarship_id/{$id}/{$request->folder}/{$request->filename}");
        return response()->file($newpathToFile);

    }
    public function store(Request $request)
    {
        $save = $request->file('file')->storeAs("registration/nonreg/$request->scholarship_id/{$request->id}/{$request->folder}", $request->file('file')->getClientOriginalName());
        return response()->json(['status' => 'File Succesfuly Uploaded'], 200);

    }
    public function destroy(Request $request, $id)
    {
        // dd("registration/{$id}/{$request->folder}/{$request->filename}");
        if (Storage::delete("registration/nonreg/$request->scholarship_id/{$id}/{$request->folder}/{$request->filename}")) {
            # code...
            return response()->json(['status' => 'File Deleted Successfuly'], 200);
        }
        // return response()->json(['error' => 'File not deleted'], 401);
    }
}
