<?php

namespace App\Http\Controllers\Admin\Auth;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App;

class PermissionController extends Controller
{

    public function index()
    {
        $data = App\Permission::all();
        return $data;
    }
    public function show($role_id)
    {
        $user = App\Role::with('permissions')
                ->whereId($role_id)
                // ->select('id','name')
                ->first();
        // $user = App\User::with(['permissions'=>function($query) use ($projectId){
        //         $query->where('project_id','=',$projectId);}
        //         ])->get();
        return $user;
    }
    public function store(Request $request)
    {
        $user = App\Admin::find($request->id);
        $user->permissions()->sync([4,5,3]);
        return 'success';
    }
    public function update(Request $request, $role_id)
    {
        // $this->validate($request, [
        //     '' => ['required', 'string', Rule::unique('departments')->ignore($id)],
        // ]);


        $role = App\Role::find($role_id);
        $role->permissions()->sync($request['checked_permissions']);
        return response()->json(['status' => 'Updating Role & Permissions'], 200);

        if($role->save())
        {
        }
        return response()->json(['status' => 'Failed to Updating Role & Permissions'], 500);
    }
}
