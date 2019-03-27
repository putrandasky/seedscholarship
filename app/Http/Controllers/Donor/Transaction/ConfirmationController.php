<?php

namespace App\Http\Controllers\Donor\Transaction;

use App;
use App\Http\Controllers\Controller;
use Carbon\Carbon;
use Illuminate\Http\Request;

class ConfirmationController extends Controller
{
    public function authorized(Request $request)
    {

        $data = App\Donor::whereHas(
            'donorPeriods.period', function ($query) use ($request) {
                $query->where('year', '=', $request->year);
            })
            ->whereHas(
                'donorPeriods', function ($query) use ($request) {
                    $query->where('donation_token', $request->donation_token);
                })
            ->where([
                'id' => $request->id,
                'email' => $request->email,
            ])->exists();
        if (!$data) {
            return response()->json(['error' => 'Unauthorized', 'message' => 'You are not allowed to access this page'], 401);
        }

    }
    public function store(Request $request)
    {

        $rules = [
            'trx_date' => 'required',
            'amount' => 'required|numeric',
            'file' => 'required|max:1000|mimes:jpeg,png,pdf',
            'id' => 'required',
            'year' => 'required',
            // 'invoice_no' => $request->invoice_no?'unique:donor_transactions':'',

        ];
        $messages = [
            'trx_date.required' => 'Mohon menginformasikan tanggal transfer',
            'amount.required' => 'Mohon mencantumkan jumlah donasi anda',
            'file.required' => 'Mohon melampirkan bukti transfer',
            'file.max' => 'File tidak lebih dari 1 MB',
            'file.mimes' => 'File dalam pdf/jpeg/png',
            // 'invoice_no.unique' => 'This invoice number already exist',
        ];
        $this->validate($request, $rules, $messages);

        $donorPeriod = App\DonorPeriod::whereHas(
            'period', function ($query) use ($request) {
                $query->where('year', '=', $request->year);
            })
            ->where([
                'donor_id' => $request->id,
            ])->first();
        $contractNo = $donorPeriod->contract_number;
        $donorTransaction = App\DonorTransaction::where([
            'donor_id' => $request->id,
            'period_year' => $request->year,
        ])
            ->where('evidence', '<>', false)
            ->get()->max('evidence');
        $lastEvidenceTitle = $donorTransaction ? explode('.', $donorTransaction) : null;
        $series = $lastEvidenceTitle ? $lastEvidenceTitle[1] + 1 : 1;
        $evidenceTitle = $contractNo . '.' . $series . '.' . $request->file('file')->getClientOriginalExtension();

        $transaction = new App\DonorTransaction();
        $transaction->trx_date = Carbon::parse($request->trx_date)->format('Y-m-d');
        $transaction->amount = $request->amount;
        $transaction->verification = 'UNVERIFIED';
        $transaction->invoice_no = '';
        $transaction->status_invoice = 'NOT SENT';
        $transaction->donor_id = $request->id;
        $transaction->period_year = $request->year;
        $transaction->save();

        $save = $request->file('file')->storeAs("transaction/{$request->year}/{$request->id}/{$transaction->id}/evidence", $evidenceTitle);
        $user = App\DonorTransaction::find($transaction->id);
        $user->evidence = $evidenceTitle;
        $user->save();
        return response()->json(['message' => 'Confirmation Sent'], 200);
    }
}
