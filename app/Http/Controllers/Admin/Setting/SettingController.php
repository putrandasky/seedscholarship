<?php

namespace App\Http\Controllers\Admin\Setting;

use App;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class SettingController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data = App\General::all();
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
        // $datas = App\General::all();
        // $data->where('key','Seed Name')->first()->value;
        // return $request[1]['value'];
        // return count($request->all());
        for ($i = 0; $i < count($request->all()); $i++) {
            $data = App\General::where('id', $request[$i]['id'])->first();
            $data->value = $request[$i]['value'];
            $data->save();
        }
        return response()->json(['message' => 'General Setting Edited'], 200);
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
    public function update(Request $request)
    {

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
