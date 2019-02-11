<?php

namespace App\Http\Controllers\AwardeeNonreg\Registration;

use App;
use App\Http\Controllers\Controller;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class UserController extends Controller
{
    public function show(Request $request, $id)
    {
        $data['user'] = App\AwardeeNonreg::whereHas('scholarships', function ($query) use ($request) {
            $query->where('scholarships.id', '=', $request->id);
        })
        ->where('id', $id)
            ->with([
                'awardeeDepartment',
                'scholarships' => function ($query) use ($request) {
                    $query->where('scholarships.id', '=', $request->id);
                },
            ])->first();

        if (!$data['user']) {
            return response()->json(['error' => 'Not Found', 'message' => 'User Not Found For This Scholarship'], 404);
        }

        $folders = Storage::directories("registration/nonreg/{$data['user']->scholarships[0]->id}/{$id}");
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
                $data['files'][$folder_name]['folder'] = $folder_name;
                $data['files'][$folder_name]['size'] = Storage::size($dirname . '/' . $basename);
                $data['files'][$folder_name]['name'] = $basename;
                $data['files'][$folder_name]['date'] = Carbon::createFromTimestamp(Storage::lastModified($dirname . '/' . $basename))->format('d-M-y');
            } else {
                $data['files'][$folder_name]['folder'] = $folder_name;
                $data['files'][$folder_name]['size'] = null;
                $data['files'][$folder_name]['name'] = '';
                $data['files'][$folder_name]['date'] = '';
            }

        }

        return $data;
    }
    public function update(Request $request, $userId)
    {
        $user = App\AwardeeNonreg::find($userId);
        $user->name = $request['name'];
        $user->email = $request['email'];
        $user->phone = $request['phone'];
        $user->department_id = $request['department_id'];
        $user->save();
        return response()->json(['status' => 'Successfully update user admin data'], 200);
    }
}
