<?php

namespace App\Http\Controllers\Donor\Auth;

use App;
use App\Http\Controllers\Controller;
use App\Notifications\Donor\ContractAgreed;
use App\Notifications\Donor\PostRegistered;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Notification;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class RegisterController extends Controller
{
    public function newRegister(Request $request)
    {
        $rules = [
            'name' => 'required|string|min:6',
            'email' => 'required|email|unique:donors',
            // 'password' => 'required|confirmed|min:6',
            'phone' => 'required|numeric|min:6',
            'year' => 'required|digits:4',
            'department' => 'required',
            'donation_category' => 'required',
            'address' => 'required',
            'zip_code' => 'required|digits:5',
            'accept_term_condition' => 'required',
            'period' => 'required',
            'amount' => $request->donation_category == 'AKTIF' ? 'required|min:100000|numeric|' : '',
        ];
        $messages = [
            'period.required' => 'The period of seedscholarship must be selected',
            'department.required' => 'The field of study must be selected',
            'accept_term_condition.required' => 'You must read & accept the term & condition',
            'amount.required' => 'Plan amount of monthly donation must be filled by donatur aktif',
            'amount.min' => 'A minimum of donation for donatur aktif is Rp. 100.000 / month',
        ];
        $this->validate($request, $rules, $messages);

        $getSeedscholarshipPeriod = App\Period::find($request->period);
        $getTotalDonorPerPeriod = App\DonorPeriod::where('period_id', $request->period)->count();
        $contract_number = $getSeedscholarshipPeriod->period . substr($request->year, 2) . str_pad($getTotalDonorPerPeriod + 1, 4, 0, STR_PAD_LEFT);

        $user = new App\Donor();
        $user->name = ucwords($request->name);
        $user->email = $request->email;
        $user->phone = $request->phone;
        $user->year = $request->year;
        $user->zip_code = $request->zip_code;
        $user->college_department_id = $request->department;
        // $user->donation_category = $request->donation_category;
        $user->address = $request->address;
        // $user->password = Hash::make($request->password);
        $token = Str::random(100);
        $donation_token = Str::random(100);
        if ($request->donation_category == "AKTIF") {
            // $amount = $request->amount * 12;
            $amount = $request->amount * 10;
        } elseif ($request->amount) {
            $amount = $request->amount;
        } else {
            $amount = 0;
        }

        DB::transaction(function () use ($request, $user, $amount, $contract_number, $token, $donation_token) {
            $user->save();

            $donor_period = new App\DonorPeriod();

            $donor_period->donation_category = $request->donation_category;
            $donor_period->amount = $amount;
            $donor_period->is_term_condition_agreed = $request->accept_term_condition;
            $donor_period->is_contract_agreed = 'NOT YET';
            $donor_period->contract_number = $contract_number;
            $donor_period->token = $token;
            $donor_period->donor_id = $user->id;
            $donor_period->period_id = $request->period;
            $donor_period->donation_token = $donation_token;
            $donor_period->save();

            $data = App\Donor::whereHas('donorPeriods', function ($query) use ($request, $token) {
                $query->where('period_id', '=', $request->period);
                $query->where('token', $token);
            })
                ->where('id', $user->id)
                ->with([
                    'collegeDepartment',
                    'donorPeriods' => function ($query) use ($request, $token) {
                        $query->where('period_id', '=', $request->period);
                        $query->where('token', $token);

                    },
                    'donorPeriods.period' => function ($query) use ($request, $token) {
                        $query->where('id', '=', $request->period);

                    },
                ])->first();
            // $when = now()->addMinutes(1);
            $user->notify(new PostRegistered($data));
            // $user->notify((new PostRegistered($data))->delay($when));

        });
        // return $data;
        return response()->json([
            'status' => 'Successfully register new donor',
        ], 200);
    }
    public function contractAgreed(Request $request)
    {
        $data = App\Donor::whereHas(
            'donorPeriods.period', function ($query) use ($request) {
                $query->where('period', '=', $request->period);
            })
            ->whereHas(
                'donorPeriods', function ($query) use ($request) {
                    $query->where('is_contract_agreed', '<>', 'AGREED');
                    $query->where('token', $request->token);
                })
            ->where([
                'id' => $request->id,
                'email' => $request->email,
            ])
            ->with([
                'collegeDepartment',
                'donorPeriods.period' => function ($query) use ($request) {
                    $query->where('periods.period', '=', $request->period);
                },
                'donorPeriods' => function ($query) use ($request) {
                    $query->where('is_contract_agreed', '<>', 'AGREED');
                    $query->where('token', $request->token);
                },
            ])->first();
        if (!$data) {
            return response()->json(['error' => 'Unauthorized', 'message' => 'You are not allowed to access this page'], 401);
        }
        // return $data;

        DB::transaction(function () use ($request, $data) {
            $series = substr($data->donorPeriods[0]->contract_number, 3);
            $attachmentTemplate = $data->donorPeriods[0]->donation_category == 'AKTIF' ? 'attachment.ContractDonaturAktif' : 'attachment.ContractDonaturPasif';
            $pdf = app('dompdf.wrapper');
            $pdf->getDomPDF()->set_option("enable_php", true);
            $pdf->loadView($attachmentTemplate, compact('data', 'series'));
            $pdf->setPaper('a4');
            $donor_period = App\DonorPeriod::find($data->donorPeriods[0]->id);
            $donor_period->is_contract_agreed = 'AGREED';
            $donor_period->token = '';
            $donor_period->agreed_at = Carbon::now();
            $donor_period->save();
            Storage::put("contract/donor/{$data->donorPeriods[0]->period->period}/{$data->id}/Surat Perjanjian Kerja Sama {$data->name}.pdf", $pdf->output());
            // $when = now()->addMinutes(1);
            Notification::route('mail', $request->email)->notify(new ContractAgreed($data));
            // Notification::route('mail', $request->email)->notify((new ContractAgreed($data))->delay($when));
        });

    }
}
