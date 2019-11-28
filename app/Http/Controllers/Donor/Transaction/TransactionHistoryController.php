<?php

namespace App\Http\Controllers\Donor\Transaction;

use App;
use App\Http\Controllers\Controller;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Illuminate\Validation\Rule;

class TransactionHistoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function yearIndex(Request $request)
    {
        $data = App\Period::
            withCount([
            'donorTransactions AS total_transaction',
            'donorTransactions AS verified_amount' => function ($query) {
                $query->where('verification', 'VERIFIED');
                $query->select(DB::raw("SUM(amount) as verified_amount"));
            },
            'donorTransactions AS unverified_amount' => function ($query) {
                $query->where('verification', 'UNVERIFIED');
                $query->select(DB::raw("SUM(amount) as unverified_amount"));
            },
            'donorTransactions AS total_amount' => function ($query) {
                $query->select(DB::raw("SUM(amount) as total_amount"));
            },
            'donorTransactions AS verified_transaction' => function ($query) {
                $query->where('verification', 'VERIFIED');
            },
            'donorTransactions AS unverified_transaction' => function ($query) {
                $query->where('verification', 'UNVERIFIED');
            },
            'donorTransactions AS not_sent_invoice' => function ($query) use ($request) {
                $query->where('status_invoice', 'NOT SENT');
                $query->where('verification', 'VERIFIED');
            },
        ])
            ->orderBy('year', 'desc')
            ->get();

        return $data;
    }
    public function index(Request $request)
    {
        $data = App\DonorTransaction::where('period_year', $request->periodYear)
            ->with([
                'donor' => function ($query) {
                    $query->select(['id', 'name', 'year']);
                },
            ])
            ->latest()
            ->get();
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

        $rules = [
            'trx_date' => 'required',
            'amount' => 'required|numeric',
            // 'verification' => 'required',
            // 'status_invoice' => 'required',
            // 'invoice_no' => $request->invoice_no?'unique:donor_transactions':'',

        ];
        $messages = [
            'trx_date.required' => 'Transaction date is required',
            // 'invoice_no.unique' => 'This invoice number already exist',
        ];
        $this->validate($request, $rules, $messages);

        $transaction = new App\DonorTransaction();
        $transaction->trx_date = Carbon::parse($request->trx_date)->format('Y-m-d');
        $transaction->amount = $request->amount;
        $transaction->verification = 'UNVERIFIED';
        $transaction->invoice_no = '';
        $transaction->status_invoice = 'NOT SENT';
        $transaction->donor_id = $request->donor_id;
        $transaction->period_year = $request->period_year;
        $transaction->save();
        // return response()->json(['error' => 'Internal Server Error', 'message' => 'Oops.. Something Error, Try Again Later'], 500);
        return response()->json(['message' => 'New Transaction Created', 'id' => $transaction->id], 200);
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
        $rules = [
            'trx_date' => 'required',
            'amount' => 'required|numeric',
            'verification' => 'required',
            'status_invoice' => 'required',
            'invoice_no' => $request->invoice_no ? Rule::unique('donor_transactions')->ignore($id) : '',

        ];
        $messages = [
            'trx_date.required' => 'Transaction date is required',
            'invoice_no.unique' => 'This invoice number already exist',
        ];
        $this->validate($request, $rules, $messages);
        $transaction = App\DonorTransaction::find($id);
        $transaction->trx_date = Carbon::parse($request->trx_date)->format('Y-m-d');
        $transaction->amount = $request->amount;
        $transaction->verification = $request->verification;
        $transaction->invoice_no = $request->invoice_no;
        $transaction->status_invoice = $request->status_invoice;
        $transaction->save();
        // return response()->json(['error' => 'Internal Server Error', 'message' => 'Oops.. Something Error, Try Again Later'], 500);
        return response()->json(['message' => 'Transaction Edited'], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request, $id)
    {
        Storage::deleteDirectory("transaction/{$request->period_year}/{$request->donor_id}/{$id}");
        $user = App\DonorTransaction::find($id);
        $user->delete();
        return response()->json(['status' => 'File Deleted Successfuly'], 200);

    }
    public function sendInvoice(Request $request, $id)
    {
        $user = App\DonorTransaction::find($id);
        $user->delete();
        return response()->json(['status' => 'File Deleted Successfuly'], 200);

    }
}
