<?php

namespace App\Http\Controllers\Donor\Auth;

use App;
use App\Http\Controllers\Controller;
use App\Notifications\Donor\ContractAgreed;
use App\Notifications\Donor\PostRegistered;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Notification;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Carbon\Carbon;
class RegisterController extends Controller
{
    public function newRegister(Request $request)
    {
        $rules = [
            'name' => 'required|string',
            'email' => 'required|email|unique:donors',
            // 'password' => 'required|confirmed|min:6',
            'phone' => 'required|numeric|min:6',
            'year' => 'required|digits:4',
            'department' => 'required',
            'donation_category' => 'required',
            'address' => 'required',
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
        $getTotalDonorPerPeriod = DB::table('donor_period')->where('period_id', $request->period)->count();
        $contract_number = $getSeedscholarshipPeriod->period . substr($request->year, 2) . str_pad($getTotalDonorPerPeriod + 1, 4, 0, STR_PAD_LEFT);

        $user = new App\Donor();
        $user->name = ucwords($request->name);
        $user->email = $request->email;
        $user->phone = $request->phone;
        $user->year = $request->year;
        $user->awardee_department_id = $request->department;
        // $user->donation_category = $request->donation_category;
        $user->address = $request->address;
        // $user->password = Hash::make($request->password);
        $token = Str::random(100);
        if ($request->donation_category == "AKTIF") {
            $amount = $request->amount * 12;
        } elseif ($request->amount) {
            $amount = $request->amount;
        } else {
            $amount = 0;
        }

        DB::transaction(function () use ($request, $user, $amount, $contract_number, $token) {
            $user->save();

            $user->periods()->attach($request->period, [
                'donation_category' => $request->donation_category,
                'amount' => $amount,
                'is_term_condition_agreed' => $request->accept_term_condition,
                'is_contract_agreed' => 'NOT YET',
                'contract_number' => $contract_number,
                'token' => $token,
            ]);
            $data = App\Donor::whereHas('periods', function ($query) use ($request, $token) {
                $query->where('periods.id', '=', $request->period);
                $query->where('token', $token);
            })
                ->where('id', $user->id)
                ->with([
                    'awardeeDepartment',
                    'periods' => function ($query) use ($request, $token) {
                        $query->where('periods.id', '=', $request->period);
                        $query->where('token', $token);

                    },
                ])->first();

            $user->notify(new PostRegistered($data));

        });
        // return $data;
        return response()->json([
            'status' => 'Successfully register new donor',
        ], 200);
    }
    public function contractAgreed(Request $request)
    {
        $data = App\Donor::whereHas('periods', function ($query) use ($request) {
            $query->where('periods.period', '=', $request->period);
            $query->where('token', $request->token);
        })
            ->where([
                'id' => $request->id,
                'email' => $request->email,
            ])
            ->with([
                'awardeeDepartment',
                'periods' => function ($query) use ($request) {
                    $query->where('periods.period', '=', $request->period);
                    $query->where('token', $request->token);
                },
            ])->first();
        if (!$data) {
            return response()->json(['error' => 'Unauthorized', 'message' => 'You are not allowed to access this page'], 401);
        }


        DB::transaction(function () use ($request,$data) {
          $series = substr($data->periods[0]->pivot->contract_number, 2);
          $attachmentTemplate = $data->periods[0]->pivot->donation_category == 'AKTIF'? 'attachment.ContractDonaturAktif':'attachment.ContractDonaturPasif';
          $pdf = app('dompdf.wrapper');
          $pdf->getDomPDF()->set_option("enable_php", true);
          $pdf->loadView($attachmentTemplate, compact('data','series'));
          $pdf->setPaper('a4');
          $data->periods()->updateExistingPivot($data->periods[0]->id,[
            'is_contract_agreed' => 'AGREED',
            'token' => '',
            'agreed_at' => Carbon::now()
            ]);
          Storage::put("contract/donor/{$data->periods[0]->period}/{$data->id}/Surat Perjanjian Kerja Sama {$data->name}.pdf", $pdf->output());
          Notification::route('mail', $request->email)->notify(new ContractAgreed($data));
        });

    }
}
