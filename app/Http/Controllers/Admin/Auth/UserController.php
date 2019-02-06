<?php

namespace App\Http\Controllers\Admin\Auth;

use App;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class UserController extends Controller
{
    public function show($id)
    {
      $user = App\Admin::where('id',$id)->with('department')->first();
      return $user;
    }
    public function update(Request $request,$userId)
    {
      $user = App\Admin::find($userId);
      $user->name = $request['name'];
      $user->email = $request['email'];
      $user->phone = $request['phone'];
      $user->department_id = $request['department_id'];
      $user->save();
return response()->json(['status' => 'Successfully update user admin data'], 200);
    }
}
