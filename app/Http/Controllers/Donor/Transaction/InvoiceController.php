<?php

namespace App\Http\Controllers\Donor\Transaction;

use App;
use App\Http\Controllers\Controller;
use App\Notifications\Donor\SendPaymentReceipt;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Carbon\Carbon;
class InvoiceController extends Controller
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
        $donor = App\Donor::whereId($request->userId)
            ->with([
                'collegeDepartment',
                 'donorPeriods.period' => function ($query) use ($request) {
                    $query->where('year', '=', $request->periodYear);
                },
                'donorTransactions' => function ($query) use ($request) {
                    $query->where('id', '=', $request->id);
                },
            ])->first();
        $pdf = app('dompdf.wrapper');
        $pdf->getDomPDF()->set_option("enable_php", true);
        $pdf->loadView('pdf.PaymentReceipt', compact('donor'));
        $pdf->setPaper('b5', 'landscape');

        Storage::put("transaction/{$request->periodYear}/{$request->userId}/{$request->id}/invoice/{$request->invoice_no}.pdf", $pdf->output());

        $transaction = App\DonorTransaction::find($request->id);
        $transaction->has_invoice = true;
        $transaction->save();
        return response()->json(['status' => 'Invoice Created Successfully'], 200);

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
        $newpathToFile = Storage::disk('local')->getDriver()->getAdapter()->applyPathPrefix("transaction/{$request->periodYear}/{$id}/{$request->id}/invoice/{$request->invoice_no}.pdf");
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
    public function sendInvoice(Request $request)
    {
        $donor = App\Donor::whereId($request->userId)
            ->with([
                'collegeDepartment',
                 'donorPeriods.period' => function ($query) use ($request) {
                    $query->where('year', '=', $request->periodYear);
                },
                'donorTransactions' => function ($query) use ($request) {
                    $query->where('id', '=', $request->id);
                },
            ])
            ->withCount(['donorTransactions AS total_donation' => function ($query) {
                $query->select(DB::raw("SUM(amount) as verified"))->where('verification', 'VERIFIED');
            },
            ])
            ->first();
            // return $donor;
        DB::transaction(function () use ($request, $donor) {
            // $when = Carbon::now()->addMinutes(1);
            $donor->notify(new SendPaymentReceipt($donor));
            $transaction = App\DonorTransaction::find($request->id);
            $transaction->status_invoice = 'SENT';
            $transaction->save();
        });
        return response()->json([
            'status' => 'Payment Receipt Sent to Donor',
        ], 200);
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
        Storage::deleteDirectory("transaction/{$request->periodYear}/{$id}/{$request->id}/invoice");
        $transaction = App\DonorTransaction::find($request->id);
        $transaction->has_invoice = false;
        $transaction->save();
        return response()->json(['status' => 'Invoice Deleted Successfuly'], 200);
    }

// FUNGSI TERBILANG OLEH : MALASNGODING.COM
    // WEBSITE : WWW.MALASNGODING.COM
    // AUTHOR : https://www.malasngoding.com/author/admin

}
