<?php

namespace App\Http\Controllers\Admin\Auth;

use App;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

class DepartmentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data = App\Department::with('roles')->orderBy('order', 'asc')->withCount('admins')->get();

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
        $this->validate($request, [
            'department' => 'required|string|unique:departments',
        ]);
        $data = new App\Department();
        $data->department = $request['department'];
        $data->save();
        return response()->json(['message' => 'New Department Added'], 200);

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $this->validate($request, [
            'department' => ['required', 'string', Rule::unique('departments')->ignore($id)],
        ]);
        $data = App\Department::find($id);
        $data->department = $request['department'];
        $data->save();
        return response()->json(['message' => 'Department Updated'], 200);
    }
    public function reorder(Request $request)
    {
        // dd(count($request['data']));
        for ($i = 0; $i < count($request['data']); $i++) {
            $department = App\Department::find($request['data'][$i]['id']);
            $department->order = $i + 1;
            $department->save();
            # code...
        }
        return response()->json(['message' => 'Department Reordered'], 200);
    }
    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $department = App\Department::find($id);
        $department->admins()->update(['department_id' => null]);
        $roles = App\Role::where('department_id', $id)->get();

        foreach ($roles as $role) {
            $role = App\Role::find($role->id);
            $role->permissions()->detach();
            $role->admins()->update(['role_id' => null]);
            $role->delete();
        }
        $department->delete();

        return response()->json(['message' => 'Department Deleted'], 200);
    }
}
