<?php

namespace App\Http\Controllers\Awardee\Auth;

use App;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
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
        $data = App\AwardeeDepartment::orderBy('department','asc')->select(['id','department'])->withCount('awardees')->get();

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
            'department' => 'required|string|unique:awardee_departments',
        ]);
        $data = new App\AwardeeDepartment();
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
            'department' => ['required', 'string', Rule::unique('awardee_departments')->ignore($id)],
        ]);
        $data = App\AwardeeDepartment::find($id);
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
        $data = App\AwardeeDepartment::find($id);
        $data->delete();
        return response()->json(['status' => 'Successfully delete department'], 200);
    }
}
