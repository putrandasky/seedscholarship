<?php

namespace App\Http\Controllers\Donor\Registration;

use App;
use App\Http\Controllers\Controller;
use App\Jobs\Admin\ProcessBroadcastEmailDonorReRegistration;
use App\Jobs\Donor\ProcessSendEmailDonorRegister;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class ReRegistrationController extends Controller
{
    public function authorized(Request $request)
    {
        // check period is available
        $period = App\Period::where([
            'id' => $request->period_id,
        ])->first();

        if ($period) {
            $checkDonorPeriod = App\DonorPeriod::where([
                'period_id' => $request->period_id,
                'donor_id' => $request->donor_id,
            ])->exists();

            if ($checkDonorPeriod) {
                return response()->json(['error' => 'Registered', 'message' => 'You already registered on this period'], 401);
            }
        }

        $period_data = App\Period::where([
            'id' => $request->period_id,
            'is_active' => true,
        ])->exists();
        $donor_registration = App\DonorRegistration::where([
            'token' => $request->token,
            'donor_id' => $request->id,
            'email' => $request->email,
        ])->with([
            'donor' => function ($query) {
                $query->select('id', 'email', 'name', 'address', 'zip_code', 'phone','degree_level_id');
            },
            'donor.degreeLevel' => function ($query) {
                $query->select('id', 'description');
            },

        ])->first();
        $degree_level = App\DegreeLevel::get();
        if ($period_data && $donor_registration) {
            return response()->json([
                'message' => 'Authorized',
                'data' => [
                    'donor' => $donor_registration->donor,
                    'period' => $period->period,
                    'year' => $period->year,
                    'degree_level' => $degree_level,
                ],
            ], 200);
        }
        return response()->json(['error' => 'Unauthorized', 'message' => 'You are not allowed to access this page'], 401);
    }

    public function index()
    {
        // $donors = App\Donor::whereHas('donorPeriods')->get();
        // foreach ($donors as $key => $value) {
        //     $donor = App\Donor::find($value->id);
        //     // $donor->re_registration_token = Str::random(100);
        //     $donor->save();
        // }
        // return;
    }
    public function selfInvite(Request $request)
    {
        $donor = App\Donor::where('email', $request->email)->first();
        if (!$donor) {
            return response()->json(['status' => 'Unauthorized', 'message' => 'Email not found, please register as new donor'], 501);

        }
        $rules = [
            'email' => 'required|email',
            'accept_term_condition' => 'required',
        ];
        $messages = [
            'accept_term_condition.required' => 'You must read & accept the term & condition',
        ];
        $this->validate($request, $rules, $messages);

        $data['period']['period'] = App\Period::where('id', $request->period_id)->first()->period;
        $data['period']['year'] = App\Period::where('id', $request->period_id)->first()->year;
        $data['period']['id'] = $request->period_id;

        $donor_registration = App\DonorRegistration::where([
            'donor_id' => $donor->id,
            'period_id' => $request->period_id,
        ])->first();

        if ($donor_registration) {
            if ($donor_registration->status == 'SUBMITED') {
                return response()->json(['status' => 'Error', 'message' => 'Data already registered for this period'], 501);

            }
            $data['donor']['id'] = $donor_registration->donor_id;
            $data['donor']['email'] = $donor_registration->email;
            $data['period']['id'] = $donor_registration->period_id;
            $data['token'] = $donor_registration->token;
            $data['donor']['name'] = $donor->name;
            dispatch(new ProcessBroadcastEmailDonorReRegistration($data));
            return response()->json(['status' => 'Success', 'message' => 'Data already recorded, please check email'], 200);

        }

        $donor_registration = new App\DonorRegistration();
        $donor_registration->donor_id = $data['donor']['id'] = $donor->id;
        $donor_registration->email = $data['donor']['email'] = $donor->email;
        $donor_registration->period_id = $data['period']['id'] = $request->period_id;
        $donor_registration->token = $data['token'] = Str::random(100);
        $donor_registration->status = 'RECORDED';
        $donor_registration->save();
        $data['donor']['name'] = $donor->name;

        dispatch(new ProcessBroadcastEmailDonorReRegistration($data));
        return response()->json(['status' => 'Success', 'message' => 'The donor registration already dispatched, will be broadcasted soon'], 200);

    }
    public function store(Request $request)
    {
        if ($this->authorized($request)->status() !== 200) {
            return $this->authorized($request);
        }

        $donor_registration = App\DonorRegistration::where([
            'email' => $request->email,
            'donor_id' => $request->id,
            'period_id' => $request->period_id,
            'token' => $request->token,
        ])->first();
        if (!$donor_registration || !$request->token) {
            return response()->json(['error' => 'Unauthorized', 'message' => 'Your data is not authorized for registration'], 500);
        }
        $donor_registration->token = '';
        $donor_registration->status = 'SUBMITED';
        $donor_registration->save();

        $period = App\Period::where([
            'id' => $request->period_id,
            'period' => $request->period,
            'year' => $request->year,
        ])->first();

        $donor = App\Donor::find($request->id);

        // if ($donor->token !== $request->token) {
        //   return response()->json(['error' => 'Unauthorized', 'message' => 'You are not allowed to access this page'], 401);

        // }
        $getTotalDonorPerPeriod = App\DonorPeriod::where('period_id', $period->id)->count();
        $contract_number = $request->period . substr($donor->year, 2) . str_pad($getTotalDonorPerPeriod + 1, 4, 0, STR_PAD_LEFT);
        $token = Str::random(100);
        $donation_token = Str::random(100);
        $start_period = Carbon::parse("{$period->year}-{$period->start_month}");
        $end_period = Carbon::parse("{$period->end_year}-{$period->end_month}")->endOfMonth();
        $duration_period = (($period->end_year - $period->year) * 12) + ($period->end_month - $period->start_month) + 1;

        if ($request->donation_category == "AKTIF") {
            $amount = $request->amount * $duration_period;
        } elseif ($request->amount) {
            //this amount for pasif donation
            $amount = $request->amount;
        } else {
            $amount = 0;
        }
        // DB::transaction(function () use ($request, $amount, $contract_number, $token, $donation_token, $period) {

        $donor_period = new App\DonorPeriod();

        $donor_period->donation_category = $request->donation_category;
        $donor_period->amount = $amount;
        $donor_period->is_term_condition_agreed = $request->accept_term_condition;
        $donor_period->is_contract_agreed = 'NOT YET';
        $donor_period->contract_number = $contract_number;
        $donor_period->token = $token;
        $donor_period->donor_id = $request->id;
        $donor_period->period_id = $period->id;
        $donor_period->donation_token = $donation_token;
        $donor_period->save();

        $donor->name = $request->name;
        $donor->phone = $request->phone;
        $donor->address = $request->address;
        $donor->degree_level_id = $request->degree_level_id;
        $donor->save();
        // $when = now()->addMinutes(1);
        // $user->notify(new PostRegistered($data));
        // $user->notify((new PostRegistered($data))->delay($when));
        // return $data;

        // });

        $data = App\DonorPeriod::where('id', $donor_period->id)->with('donor.collegeDepartment', 'period')->first();

        dispatch(new ProcessSendEmailDonorRegister($data));

        // return $data;
        return response()->json([
            'status' => 'Successfully Registered New Period',
        ], 200);
        // return $data;
    }
}
