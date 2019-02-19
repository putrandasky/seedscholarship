<?php

namespace App\Http\Controllers\Donor\Transaction;

use App;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class EvidenceController extends Controller
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
    public function store(Request $request)
    {
        // if (!($this->registrantAuthenticate($request->id, $request->registration_code, $request->period_id))) {
        //     return response()->json(['error' => 'Unauthorized', 'message' => 'You are not allowed to access this page'], 401);
        // }
        $save = $request->file('file')->storeAs("transaction/{$request->periodYear}/{$request->userId}/{$request->id}/evidence", $request->file('file')->getClientOriginalName());
        $user = App\DonorTransaction::find($request->id);
        $user->evidence = $request->file('file')->getClientOriginalName();
        $user->save();
        return response()->json(['status' => 'File Succesfuly Uploaded'], 200);

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request, $id)
    {
        // $data = App\Donor::whereHas('periods', function ($query) use ($request) {
        //     $query->where('year', '=', $request->year);
        // })
        //     ->where([
        //         'id' => $userId,
        //     ])
        //     ->with([
        //         'awardeeDepartment',
        //         'periods' => function ($query) use ($request) {
        //             $query->where('year', '=', $request->year);
        //         },
        //     ])->first();
        // $data = App\DonorTransaction::find($id);
        $newpathToFile = Storage::disk('local')->getDriver()->getAdapter()->applyPathPrefix("transaction/{$request->periodYear}/{$id}/{$request->id}/evidence/{$request->fileName}");
        return response()->file($newpathToFile);

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
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request, $id)
    {
        // if (!($this->registrantAuthenticate($id, $request->registration_code, $request->period_id))) {
        //     return response()->json(['error' => 'Unauthorized', 'message' => 'You are not allowed to access this page'], 401);
        // }
        Storage::delete("transaction/{$request->periodYear}/{$id}/{$request->id}/evidence}");
        // Storage::delete("transaction/{$request->periodYear}/{$id}/{$request->id}/evidence/{$request->fileName}");
        $user = App\DonorTransaction::find($request->id);
        $user->evidence = '';
        $user->save();
        return response()->json(['status' => 'File Deleted Successfuly'], 200);
    }
}
