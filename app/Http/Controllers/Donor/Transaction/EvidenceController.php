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
        $rules = [
            'file' => 'required|max:1000|mimes:jpeg,png,pdf',
            // 'invoice_no' => $request->invoice_no?'unique:donor_transactions':'',

        ];
        $messages = [
            'file.required' => 'Mohon melampirkan bukti transfer',
            'file.max' => 'File tidak lebih dari 1 MB',
            'file.mimes' => 'File dalam pdf/jpeg/png',
            // 'invoice_no.unique' => 'This invoice number already exist',
        ];
        $this->validate($request, $rules, $messages);
        $donorPeriod = App\DonorPeriod::whereHas(
            'period', function ($query) use ($request) {
                $query->where('year', '=', $request->periodYear);
            })
            ->where([
          'donor_id'=>$request->userId,
        ])->first();
        $contractNo = $donorPeriod->contract_number;
        $donorTransaction = App\DonorTransaction::where([
          'donor_id'=>$request->userId,
          'period_year'=>$request->periodYear,
        ])
        ->where('evidence','<>',false)
        ->get()->max('evidence');
        // return $donorTransaction->evidence ?? 0;
        $lastEvidenceTitle = $donorTransaction ? explode('.',$donorTransaction): null;
        $series =  $lastEvidenceTitle ? $lastEvidenceTitle[1]+1:1;
        $evidenceTitle = $contractNo .'.'.$series.'.'.$request->file('file')->getClientOriginalExtension();

        $save = $request->file('file')->storeAs("transaction/{$request->periodYear}/{$request->userId}/{$request->id}/evidence", $evidenceTitle);

        // Storage::putFileAs("transaction/{$request->periodYear}/{$request->userId}/{$request->id}/evidence", $request->file('file'), $request->file('file')->getClientOriginalName());

        $donorTransactions = App\DonorTransaction::find($request->id);
        $donorTransactions->evidence = $evidenceTitle;
        $donorTransactions->save();
        return response()->json(['status' => 'File Succesfuly Uploaded','filename' => $evidenceTitle], 200);

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
        //         'collegeDepartment',
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
        Storage::delete("transaction/{$request->periodYear}/{$id}/{$request->id}/evidence/{$request->fileName}");
        // Storage::delete("transaction/{$request->periodYear}/{$id}/{$request->id}/evidence/{$request->fileName}");
        $user = App\DonorTransaction::find($request->id);
        $user->evidence = '';
        $user->save();
        return response()->json(['status' => 'File Deleted Successfuly'], 200);
    }
}
