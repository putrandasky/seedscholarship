<?php

namespace App\Http\Controllers\Admin\Broadcast;

use App;
use App\Http\Controllers\Controller;
use App\Jobs\Admin\ProcessBroadcastEmailDonorReRegistration;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class ReInviteDonorController extends Controller
{

    public function index()
    {
        $data['donor'] = App\Donor::whereHas(
            'donorPeriods', function ($query) {
                $query->where('is_contract_agreed', '=', 'AGREED');
            })
            ->count();
        $data['period'] = App\Period::where('is_active', 1)->first();
        return $data;
    }
    public function getData(Request $request, $periodYear)
    {
        $data['period'] = App\Period::where('year', $periodYear)->first();
        $data['donor_registration'] = App\DonorRegistration::where('period_id', $data['period']['id'])->with([
            'donor' => function ($query) {
                $query->select('id', 'name', 'email');
            },
        ])->get();
        return $data;
    }
    public function sendBroadcastEmail(Request $request)
    {
        $donors = App\Donor::whereHas(
            'donorPeriods', function ($query) {
                $query->where('is_contract_agreed', '=', 'AGREED');
            })
            ->select('id', 'name', 'email')
            ->get();
        $data['period']['period'] = App\Period::where('id', $request->id)->first()->period;
        $data['period']['year'] = App\Period::where('id', $request->id)->first()->year;
        $data['period']['id'] = $request->id;

        foreach ($donors as $donor) {
            $donor_registration = new App\DonorRegistration();
            $donor_registration->donor_id = $data['donor']['id'] = $donor->id;
            $donor_registration->email = $data['donor']['email'] = $donor->email;
            $donor_registration->period_id = $data['period']['id'] = $request->id;
            $donor_registration->token = $data['token'] = Str::random(100);
            $donor_registration->status = 'RECORDED';
            $donor_registration->save();
            $data['donor']['name'] = $donor->name;

            dispatch(new ProcessBroadcastEmailDonorReRegistration($data));
        }
        return response()->json(['status' => 'The donor registration already dispatched, will be broadcasted soon'], 200);

    }
    // public function sendBroadcastEmail(Request $request)
    // {
    //     $data['period'] = App\Period::where('is_active', 1)->first();
    //     $donors = App\Donor::whereHas(
    //         'donorPeriods', function ($query) {
    //             $query->where('is_contract_agreed', '=', 'AGREED');
    //         })
    //         ->select('id', 'name', 'email', 'year', 're_registration_token')->get();
    //     foreach ($donors as $key => $data['donor']) {
    //         $data['donor']->re_registration_token = Str::random(100);
    //         $data['donor']->save();
    //         dispatch(new ProcessBroadcastEmailDonorReRegistration($data));
    //     }
    //     $broadcast = new App\Broadcast;
    //     $broadcast->from = auth('admin-api')->user()->id;
    //     $broadcast->title = "Undangan SEED Periode {$data['period']->period} Tahun {$data['period']->year}";
    //     $broadcast->content = "";
    //     $broadcast->accountable_type = "App/Donor";
    //     $broadcast->save();

    // }
}
