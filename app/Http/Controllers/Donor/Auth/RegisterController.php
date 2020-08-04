<?php

namespace App\Http\Controllers\Donor\Auth;

use App;
use App\Http\Controllers\Controller;
use App\Jobs\Donor\ProcessSendEmailDonorContractAgreed;
// use App\Notifications\Donor\PostRegistered;
use App\Jobs\Donor\ProcessSendEmailDonorRegister;
use App\Notifications\Donor\ContractAgreed;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class RegisterController extends Controller
{
    public function choices()
    {
        $data['period'] = App\Period::where('is_active', 1)->get(['id', 'period', 'year']);
        $data['department'] = App\CollegeDepartment::get(['id', 'department']);
        $data['open_form'] = App\General::where('key', 'Form Donor Open')->first()->value;
        $data['donor_passive_mode'] = App\General::where('key', 'Form Donor Passive Open')->first()->value;
        $data['cp1'] = App\General::where('key', 'Contact Person Email 1')->first()->value;
        $data['cp2'] = App\General::where('key', 'Contact Person Email 2')->first()->value;

        return $data;

    }
    public function newRegister(Request $request)
    {

        $donor_exist = App\Donor::where('email', $request->email)->first();
        if ($donor_exist) {
            return response()->json([
                'status' => 'Unauthorized',
                'message' => 'Email address already exist!',
            ], 501);

        }

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

        $period = App\Period::find($request->period);
        $getTotalDonorPerPeriod = App\DonorPeriod::where('period_id', $request->period)->count();
        $contract_number = $period->period . substr($request->year, 2) . str_pad($getTotalDonorPerPeriod + 1, 4, 0, STR_PAD_LEFT);

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
        $start_period = Carbon::parse("{$period->year}-{$period->start_month}");
        $end_period = Carbon::parse("{$period->end_year}-{$period->end_month}")->endOfMonth();
        $duration_period = (($period->end_year - $period->year) * 12) + ($period->end_month - $period->start_month) + 1;
        if ($request->donation_category == "AKTIF") {
            $amount = $request->amount * $duration_period;
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

            $data = App\DonorPeriod::where('id', $donor_period->id)->with('donor.collegeDepartment', 'period')->first();

            // $data = App\Donor::whereHas('donorPeriods', function ($query) use ($request, $token) {
            //     $query->where('period_id', '=', $request->period);
            //     $query->where('token', $token);
            // })
            //     ->where('id', $user->id)
            //     ->with([
            //         'collegeDepartment',
            //         'donorPeriods' => function ($query) use ($request, $token) {
            //             $query->where('period_id', '=', $request->period);
            //             $query->where('token', $token);

            //         },
            //         'donorPeriods.period' => function ($query) use ($request, $token) {
            //             $query->where('id', '=', $request->period);

            //         },
            //     ])->first();
            // $when = now()->addMinutes(1);
            dispatch(new ProcessSendEmailDonorRegister($data));

            // $user->notify(new PostRegistered($data));
            // $user->notify((new PostRegistered($data))->delay($when));

        });
        // return $data;
        return response()->json([
            'status' => 'Successfully register new donor',
        ], 200);
    }
    public function resendEmailPostRegistered(Request $request, $userId)
    {

        $user = App\Donor::whereHas('donorPeriods', function ($query) use ($request) {
            $query->where('period_id', '=', $request->periodId);
        })
            ->where('id', $userId)
            ->with([
                'collegeDepartment',
                'donorPeriods' => function ($query) use ($request) {
                    $query->where('period_id', '=', $request->periodId);
                },
                'donorPeriods.period' => function ($query) use ($request) {
                    $query->where('id', '=', $request->periodId);
                },
            ])->first();
        // $when = now()->addMinutes(1);
        $user->notify(new PostRegistered($user));
        return response()->json([
            'status' => 'Email Confirmation Resent',
        ], 200);
    }
    public function existingRegister(Request $request)
    {

    }
    public function contractAgreed(Request $request)
    {
        // $data = App\Donor::whereHas(
        //     'donorPeriods.period', function ($query) use ($request) {
        //         $query->where('period', '=', $request->period);
        //     })
        //     ->whereHas(
        //         'donorPeriods', function ($query) use ($request) {
        //             $query->where('is_contract_agreed', '<>', 'AGREED');
        //             $query->where('token', $request->token);
        //         })
        //     ->where([
        //         'id' => $request->id,
        //         'email' => $request->email,
        //     ])
        //     ->with([
        //         'collegeDepartment',
        //         'donorPeriods.period' => function ($query) use ($request) {
        //             $query->where('periods.period', '=', $request->period);
        //         },
        //         'donorPeriods' => function ($query) use ($request) {
        //             $query->where('is_contract_agreed', '<>', 'AGREED');
        //             $query->where('token', $request->token);
        //         },
        //     ])->first();

        $data = App\DonorPeriod::whereHas(
            'donor', function ($query) use ($request) {
                $query->where('id', '=', $request->id);
                $query->where('email', '=', $request->email);
            })
            ->whereHas(
                'period', function ($query) use ($request) {
                    $query->where('period', '=', $request->period);
                })
            ->where('is_contract_agreed', '<>', 'AGREED')
            ->where('token', $request->token)
            ->with('donor.collegeDepartment', 'period')
            ->first();

        if (!$data) {
            return response()->json(['error' => 'Unauthorized', 'message' => 'You are not allowed to access this page'], 401);
        }
        // return $data;
        dispatch(new ProcessSendEmailDonorContractAgreed($data));
        $donor_period = App\DonorPeriod::find($data->id);
        $donor_period->is_contract_agreed = 'AGREED';
        $donor_period->token = '';
        $donor_period->agreed_at = Carbon::now();
        $donor_period->save();
        // DB::transaction(function () use ($request, $data) {
        // $when = now()->addMinutes(1);
        // Notification::route('mail', $request->email)->notify(new ContractAgreed($data));
        // Notification::route('mail', $request->email)->notify((new ContractAgreed($data))->delay($when));
        // });

    }
}
