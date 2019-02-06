<?php

namespace App\Http\Controllers\Admin\User;

use App;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class UserProfilePictureController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, $userId)
    {
        // );
        $path = 'user/' . $userId . '/profile-picture';
        $save = $request->file('file')->storeAs('public/' . $path, $request->file('file')->getClientOriginalName());
        $user = App\Admin::find($userId);
        $user->photo = $request->file('file')->getClientOriginalName();
        $user->save();
        return response()->json(['status' => 'Profile Picture Added Successfuly'], 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($path)
    {
        $newpathToFile = Storage::get($path);
        return response()->file($newpathToFile);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $userId)
    {
      $path = 'user/' . $userId . '/profile-picture';
        $user = App\Admin::find($userId);
        Storage::delete('public/' . $path . '/' . $user->photo);
        $save = $request->file('file')->storeAs('public/' . $path, $request->file('file')->getClientOriginalName());
        $user->photo = $request->file('file')->getClientOriginalName();
        $user->save();
        return response()->json(['status' => 'Profile Picture Updated Successfuly'], 200);

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($userId)
    {
        $path = 'user/' . $userId . '/profile-picture';
        $user = App\Admin::find($userId);
        Storage::delete('public/' . $path . '/' . $user->photo);
        $user->photo = null;
        $user->save();
        return response()->json(['status' => 'Profile Picture Deleted Successfuly'], 200);
    }
}
