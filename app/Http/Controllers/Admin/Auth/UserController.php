<?php

namespace App\Http\Controllers\Admin\Auth;

use App;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function show($id)
    {
        $user = App\Admin::where('id', $id)->with('department')->first();
        return $user;
    }
    public function update(Request $request, $userId)
    {
        $user = App\Admin::find($userId);
        $user->name = $request['name'];
        $user->email = $request['email'];
        $user->phone = $request['phone'];
        $user->department_id = $request['department_id'];
        $user->save();
        return response()->json(['status' => 'Successfully update user admin data'], 200);
    }
    public function search(Request $request)
    {
        return App\Admin::join('departments','admins.department_id','=','departments.id')->where('name','like',"%{$request->input('name')}%")->get(['admins.id','name','email','initial','departments.department']);
    }
}
