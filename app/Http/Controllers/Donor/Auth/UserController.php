<?php

namespace App\Http\Controllers\Donor\Auth;

use App;
use App\Http\Controllers\Controller;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class UserController extends Controller
{
    public function show(Request $request, $id)
    {
        $data['user'] = App\Donor::whereHas('periods', function ($query) use ($request) {
            $query->where('periods.year', '=', $request->year);
        })
        ->where('id', $id)
            ->with([
                'awardeeDepartment',
                'donorTransactions' => function ($query) use ($request) {
                    $query->where('period_year', '=', $request->year);
                },
                'periods' => function ($query) use ($request) {
                    $query->where('periods.year', '=', $request->year);
                },
            ])->first();

        if (!$data['user']) {
            return response()->json(['error' => 'Not Found', 'message' => 'User Not Found For This Period'], 404);
        }


        return $data;
    }
    public function update(Request $request, $userId)
    {
        $user = App\Donor::find($userId);
        $user->name = $request['name'];
        $user->email = $request['email'];
        $user->phone = $request['phone'];
        $user->department_id = $request['department_id'];
        $user->save();
        return response()->json(['status' => 'Successfully update user admin data'], 200);
    }
}
