<?php

namespace App\Http\Controllers\Admin\Auth;

use App;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class RoleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($department_id)
    {
        $data = App\Department::whereId($department_id)
            ->with([
                'roles' => function ($query) {
                    $query->withCount('admins');
                    $query->orderBy('order', 'ASC');
                }, 'roles.permissions',

            ])

        // ->withCount('roles.admins')
            ->first();
        return $data;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $role = new App\Role();
        $role->name = $request->name;
        $role->department_id = $request->department_id;
        if ($role->save()) {
            return response()->json(['status' => 'New Role Added'], 200);
        }
        return response()->json(['status' => 'Feiled to register new role'], 500);

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($role_id)
    {
        $data = App\Role::whereId($role_id)->with('permissions', 'department')->first();
        return $data;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function reorder(Request $request)
    {
        // dd(count($request['data']));
        for ($i = 0; $i < count($request['data']); $i++) {
            $role = App\Role::find($request['data'][$i]['id']);
            $role->order = $i + 1;
            $role->save();
            # code...
        }
        return response()->json(['message' => 'Roles Reordered'], 200);
    }
    public function update(Request $request, $role_id)
    {
        // $this->validate($request, [
        //     '' => ['required', 'string', Rule::unique('departments')->ignore($id)],
        // ]);
        $data = App\Role::find($role_id);
        $data->name = $request['name'];
        $data->save();
        return response()->json(['status' => 'Role Name Updated'], 200);

        // $role = App\Role::find($role_id);
        // $permissions = collect([$request['permissions']]);
        // $permissions_id = $permissions->pluck('id');
        // $role->permissions()->sync($permissions_id->all());
        // return response()->json(['status' => 'Updating Role & Permissions'], 200);

        // if($role->save())
        // {
        // }
        // return response()->json(['status' => 'Failed to Updating Role & Permissions'], 500);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($role_id)
    {

        $role = App\Role::find($role_id);
        $role->permissions()->detach();
        $role->admins()->update(['role_id' => null]);
        $role->delete();
        return response()->json(['status' => 'Role Deleted'], 200);
    }
}
