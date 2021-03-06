<?php

namespace App\Http\Controllers\Admin\Awardee;

use App\Http\Controllers\Controller;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class AttachmentRequestController extends Controller
{
    public function __construct()
    {
        $this->path = "registration/attachment/awardee";
    }
    public function store(Request $request)
    {
        $name = $request->file('file')->getClientOriginalName();
        Storage::putFileAs("{$this->path}/{$request->periodYear}", $request->file('file'), $name);

    }
    public function index(Request $request)
    {
        $data = array();

        $filesInFolder = Storage::allFiles("{$this->path}/{$request->periodYear}");
        $data = array();
        for ($i = 0; $i < count($filesInFolder); $i++) {
            # code...
            if (count($filesInFolder) > 0) {
                # code...
                $files = pathinfo($filesInFolder[$i]);
                $dirname = $files['dirname'];
                $basename = $files['basename'];
                $data[$i]['size'] = Storage::size($dirname . '/' . $basename);
                $data[$i]['name'] = $basename;
                $data[$i]['date'] = Carbon::createFromTimestamp(Storage::lastModified($dirname . '/' . $basename))->format('d-M-y');
            } else {
                $data[$i]['size'] = null;
                $data[$i]['name'] = '';
                $data[$i]['date'] = '';
            }
        }

        return $data;
    }
    public function download(Request $request)
    {
        return Storage::download("{$this->path}/{$request->periodYear}/{$request->filename}");

    }
    public function delete(Request $request)
    {
        Storage::delete("{$this->path}/{$request->periodYear}/{$request->filename}");
        return response()->json(['status' => 'SUCCESS', 'message' => "{$request->filename} deleted"], 200);

    }
}
