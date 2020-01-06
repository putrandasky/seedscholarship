<?php

namespace App\Http\Controllers\Admin\Setting;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App;
class PeriodController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $period = App\Period::all();
        return $period;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $period = new App\Period();
        $period->period = $request->period;
        $period->year = $request->year;
        $period->is_active = 0;
        $period->save();
        return response()->json(['status' => 'New Period Added'], 200);

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function active(Request $request, $id)
    {

        $data = App\Period::where('is_active',1)->first();
        if ($data) {
            # code...
            $data->is_active = 0;
            $data->save();
        }

        $store = App\Period::where('id',$id)->first();
        $store->is_active = $request->is_active;
        $store->save();

        return response()->json(['status' => 'New Period Activated'], 200);

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
        $period = App\Period::find($id);
        $period->period = $request->period;
        $period->year = $request->year;
        $period->save();
        return response()->json(['status' => 'The Period Edited'], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
