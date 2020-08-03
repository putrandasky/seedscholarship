<?php

namespace App\Http\Controllers\Awardee\Registration;

use App;
use App\Http\Controllers\Controller;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class UserController extends Controller
{
    public function show(Request $request, $id)
    {
        // $data['user'] = App\Awardee::whereHas('awardeePeriods.period', function ($query) use ($request) {
        //     $query->where('year', '=', $request->year);
        // })
        //     ->where('id', $id)
        //     ->with([
        //         'collegeDepartment',
        //         'awardeePeriods.period' => function ($query) use ($request) {
        //             $query->where('year', '=', $request->year);
        //         },
        //     ])->first();

        $period = App\Period::where('year', $request->year)->first();
        $data['user'] = App\AwardeePeriod::where([
          'period_id'=> $period->id,
          'awardee_id'=> $id,
        ])
            ->with([
                'awardee' => function ($query) {
                    $query->select('id', 'name', 'email', 'year', 'college_department_id', 'created_at','phone');
                },
                'awardee.collegeDepartment',
                'period'])

            // ->select('id', 'awardee_id', 'period_id', 'created_at', 'status')
            ->orderBy('created_at', 'desc')->first();

        if (!$data['user']) {
            return response()->json(['error' => 'Not Found', 'message' => 'User Not Found For This Period'], 404);
        }
        // $folders = Storage::directories("registration/awardee/{$data['user']->awardeePeriods[0]->period_id}/{$id}");

        $folders = Storage::directories("registration/awardee/{$period->id}/{$id}");
        // return $folders;
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
        $user = App\Awardee::find($userId);
        $user->name = $request['name'];
        $user->email = $request['email'];
        $user->phone = $request['phone'];
        $user->department_id = $request['department_id'];
        $user->save();
        return response()->json(['status' => 'Successfully update user admin data'], 200);
    }
}
