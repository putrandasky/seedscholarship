<?php

namespace App\Http\Controllers\Donor\Transaction;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Carbon\Carbon;
use App;
class ConfirmationController extends Controller
{
    public function authorized(Request $request)
    {

        $data = App\Donor::whereHas('periods', function ($query) use ($request) {
            $query->where('periods.year', '=', $request->year);
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
            'file' => 'required|max:1000',
            'id' => 'required',
            'year' => 'required',
            // 'invoice_no' => $request->invoice_no?'unique:donor_transactions':'',

        ];
        $messages = [
            'trx_date.required' => 'Transaction date is required',
            // 'invoice_no.unique' => 'This invoice number already exist',
        ];
        $this->validate($request, $rules, $messages);

        $transaction = new App\DonorTransaction();
        $transaction->trx_date = Carbon::parse($request[$request->trx_date])->format('Y-m-d');
        $transaction->amount = $request->amount;
        $transaction->verification = 'UNVERIFIED';
        $transaction->invoice_no = '';
        $transaction->status_invoice = 'NOT SENT';
        $transaction->donor_id = $request->id;
        $transaction->period_year = $request->year;
        $transaction->save();

        $save = $request->file('file')->storeAs("transaction/{$request->year}/{$request->id}/{$transaction->id}/evidence", $request->file('file')->getClientOriginalName());
        $user = App\DonorTransaction::find($transaction->id);
        $user->evidence = $request->file('file')->getClientOriginalName();
        $user->save();
        return response()->json(['message' => 'Confirmation Sent'], 200);
    }
}
