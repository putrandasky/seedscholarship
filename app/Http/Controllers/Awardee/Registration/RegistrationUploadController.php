<?php

namespace App\Http\Controllers\Awardee\Registration;

use App;
use App\Http\Controllers\Controller;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class RegistrationUploadController extends Controller
{
    public function __construct()
    {
        $this->attachment_file_path = "registration/attachment/awardee";
        $this->uploaded_file_path = "registration/awardee";
    }
    public function authorized(Request $request)
    {
        $RegisterExist = App\Awardee::whereHas('awardeePeriods', function ($query) use ($request) {
            $query->where('registration_code', '=', $request->registration_code);
            $query->where('period_id', '=', $request->period_id);
        })
            ->where([
                'email' => $request->email,
                'id' => $request->id,
            ])->exists();
        $period_active = App\Period::where('id', $request->period_id)->first()->is_active;
        if (!$RegisterExist || !$period_active) {
            return response()->json(['error' => 'Unauthorized', 'message' => 'You are not allowed to access this page'], 401);
        }

        $folders = Storage::directories("{$this->uploaded_file_path}/{$request->period_id}/{$request->id}");
        $data['uploaded_files'] = array();

        for ($i = 0; $i < count($folders); $i++) {
            # code...
            $filesInFolder = Storage::files($folders[$i]);
            $folder = pathinfo($folders[$i]);
            $folder_name = $folder['basename'];
            if (count($filesInFolder) > 0) {
                # code...
                $files = pathinfo($filesInFolder[0]);
                $dirname = $files['dirname'];
                $basename = $files['basename'];
                $data['uploaded_files'][$i]['folder'] = $folder_name;
                $data['uploaded_files'][$i]['size'] = Storage::size($dirname . '/' . $basename);
                $data['uploaded_files'][$i]['name'] = $basename;
                $data['uploaded_files'][$i]['date'] = Carbon::createFromTimestamp(Storage::lastModified($dirname . '/' . $basename))->format('d-M-y');
            } else {
                $data['uploaded_files'][$i]['folder'] = $folder_name;
                $data['uploaded_files'][$i]['size'] = null;
                $data['uploaded_files'][$i]['name'] = '';
                $data['uploaded_files'][$i]['date'] = '';
            }
        }
        $period_year = App\Period::where('id', $request->period_id)->first()->year;
        $data['attachment_files'] = array();

        $filesInFolder = Storage::files("{$this->attachment_file_path}/{$period_year}");
        for ($a = 0; $a < count($filesInFolder); $a++) {
            # code...
            if (count($filesInFolder) > 0) {
                # code...
                $files = pathinfo($filesInFolder[$a]);
                $dirname = $files['dirname'];
                $basename = $files['basename'];
                $data['attachment_files'][$a]['size'] = Storage::size($dirname . '/' . $basename);
                $data['attachment_files'][$a]['name'] = $basename;
                $data['attachment_files'][$a]['date'] = Carbon::createFromTimestamp(Storage::lastModified($dirname . '/' . $basename))->format('d-M-y');
            } else {
                $data['attachment_files'][$a]['size'] = null;
                $data['attachment_files'][$a]['name'] = '';
                $data['attachment_files'][$a]['date'] = '';
            }
        }

        return $data;

    }
    public function download(Request $request)
    {
        $period_year = App\Period::where('id', $request->period_id)->first()->year;
        return Storage::download("{$this->attachment_file_path}/{$period_year}/{$request->filename}");

    }
    public function index(Request $request)
    {

        $file = null;
        $filesInFolder = Storage::files("{$this->uploaded_file_path}/{$request->period_id}/{$request->id}/{$request->folder}");
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

        $newpathToFile = Storage::disk('local')->getDriver()->getAdapter()->applyPathPrefix("{$this->uploaded_file_path}/{$request->period_id}/{$id}/{$request->folder}/{$request->filename}");
        return response()->file($newpathToFile);
    }
    public function store(Request $request)
    {
        if (!($this->registrantAuthenticate($request->id, $request->registration_code, $request->period_id))) {
            return response()->json(['error' => 'Unauthorized', 'message' => 'You are not allowed to access this page'], 401);
        }
        $this->validate($request, [
            'file' => 'mimes:jpeg,png,pdf|max:1024',
        ]);
        $save = $request->file('file')->storeAs("{$this->uploaded_file_path}/{$request->period_id}/{$request->id}/{$request->folder}", $request->file('file')->getClientOriginalName());

        $form = Storage::files("{$this->uploaded_file_path}/{$request->period_id}/{$request->id}/form");
        $ktp = Storage::files("{$this->uploaded_file_path}/{$request->period_id}/{$request->id}/ktp");
        $siakng = Storage::files("{$this->uploaded_file_path}/{$request->period_id}/{$request->id}/siakng");
        $essay = Storage::files("{$this->uploaded_file_path}/{$request->period_id}/{$request->id}/essay");
        $slip = Storage::files("{$this->uploaded_file_path}/{$request->period_id}/{$request->id}/slip");
        $pln = Storage::files("{$this->uploaded_file_path}/{$request->period_id}/{$request->id}/pln");
        $photo = Storage::files("{$this->uploaded_file_path}/{$request->period_id}/{$request->id}/photo");
        $nosmoke = Storage::files("{$this->uploaded_file_path}/{$request->period_id}/{$request->id}/nosmoke");

        if ($form && $ktp && $siakng && $essay && $slip && $pln && $photo && $nosmoke) {
            $data = App\AwardeePeriod::where([
                'awardee_id' => $request->id,
                'period_id' => $request->period_id,
            ])->first();
            $data->status = "SUBMITTED";
            $data->save();
        }

        return response()->json(['status' => 'File Uploaded'], 200);
    }
    public function destroy(Request $request, $id)
    {
        if (!($this->registrantAuthenticate($id, $request->registration_code, $request->period_id))) {
            return response()->json(['error' => 'Unauthorized', 'message' => 'You are not allowed to access this page'], 401);
        }
        if (Storage::delete("{$this->uploaded_file_path}/{$request->period_id}/{$id}/{$request->folder}/{$request->filename}")) {
            $data = App\AwardeePeriod::where([
                'awardee_id' => $id,
                'period_id' => $request->period_id,
            ])->first();
            if ($data->status == "SUBMITTED") {
                # code...
                $data->status = "IN PROGRESS";
                $data->save();
            }

            return response()->json(['status' => 'File Deleted'], 200);
        }
        // return response()->json(['error' => 'File not deleted'], 401);
    }
    public function registrantAuthenticate($id, $registration_code, $period_id)
    {
        $RegisterExist = App\AwardeePeriod::where([
            'awardee_id' => $id,
            'registration_code' => $registration_code,
            'period_id' => $period_id,
        ])->exists();
        return $RegisterExist;
    }
}
