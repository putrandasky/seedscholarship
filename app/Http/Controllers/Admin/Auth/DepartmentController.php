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
        $data = App\Department::orderBy('department','asc')->withCount('admins')->get();

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
        return response()->json(['status' => 'Successfully register new department'], 200);

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
        return response()->json(['status' => 'Successfully update department name'], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $data = App\Department::find($id);
        $data->delete();
        return response()->json(['status' => 'Successfully delete department'], 200);
    }
}
