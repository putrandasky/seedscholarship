<?php

namespace App\Http\Controllers\Admin\Dashboard;

use App;
use App\Http\Controllers\Controller;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class DashboardController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data['awardee_total'] = App\AwardeePeriod::where('status', 'APPROVED')->count();
        $data['donor_total'] = App\Donor::whereHas('donorPeriods', function ($query) {
            $query->where('is_contract_agreed', 'AGREED');
        })->count();
        $data['admin_total'] = App\Admin::where('status', 1)->count();
        $data['fund_total'] = App\DonorTransaction::where('verification', 'VERIFIED')->sum('amount');
        $data['recent_donation'] = App\DonorTransaction::with(
            ['donor' => function ($query) {
                $query->select('name', 'id');},
            ]
        )->orderBy('created_at', 'desc')->get(['id', 'donor_id', 'amount', 'created_at'])->take(5);
        $data['top_donation'] = App\DonorTransaction::where('verIfication', 'VERIFIED')->groupBy('donor_id')->with(
            ['donor' => function ($query) {
                $query->select('name', 'id');},
            ]
        )->select(DB::raw("SUM(amount) as total_donation"), 'donor_id')->orderBy('total_donation', 'desc')->get()->take(5);
        $data['bph_in_charge'] = App\Department::with([
            'roles' => function ($query) {
                $query->where('order', 1);
                $query->select('id', 'name', 'order', 'department_id');

            },
            'roles.admins' => function ($query) {
                $query->select('id', 'name', 'role_id');
            },
        ])->orderBy('order', 'asc')->select('id', 'department', 'order')->get();
        $data['donation_status']['total_donation'] = App\DonorTransaction::count();
        $data['donation_status']['verfied_donation'] = App\DonorTransaction::where('verification', 'VERIFIED')->count();
        $data['donation_status']['unverfied_donation'] = App\DonorTransaction::where('verification', 'UNVERIFIED')->count();
        $data['donation_status']['donation_slip_pending'] = App\DonorTransaction::where([
            'verification' => 'VERIFIED',
            'has_invoice' => 0,
        ])->count();
        $data['donation_status']['email_slip_pending'] = App\DonorTransaction::where([
            'verification' => 'VERIFIED',
            'has_invoice' => 1,
            'status_invoice' => 'NOT_SENT',
        ])->count();
        $data['last_blogs'] = App\Blog::with([
            'blogCategory' => function ($query) {
                $query->select('category', 'id');
            },
        ])->select('id', 'title', 'created_at', 'status', 'blog_category_id')->latest()->get()->take(5);

        $today = Carbon::today();
        $this_month = $today->month;
        $this_year = $today->year;

        for ($i = 12; $i >= 0; $i--) {
            $month = $this_month - $i >= 1 ? $this_month - $i : 12 + $this_month - $i;
            $year = $this_month - $i >= 1 ? $this_year : $this_year - 1;

            $data['monthly_donation']['label'][] = Carbon::create($year, $month)->format('M-Y');
            // $data['chart'][$i]['year'] =
            $data['monthly_donation']['dataset'][] = App\DonorTransaction::whereMonth('trx_date', $month)->whereYear('trx_date', $year)->sum('amount');
        }
        // for ($i = 0; $i < 12; $i++) {

        //     $data['chart'][$i]['month'] = $month = $this_month - $i >= 1 ? $this_month - $i : 12 + $this_month - $i;
        //     $data['chart'][$i]['year'] = $year = $this_month - $i >= 1 ? $this_year : $this_year - 1;
        //     $data['chart'][$i]['increment'] = App\DonorTransaction::whereMonth('trx_date', $month)->whereYear('trx_date', $year)->sum('amount');
        // }

        // $data['label'][$first_data_label_name] = $first_data_label;
        // $data['label'][$second_data_label_name] = $second_data_label;
        // for ($a = 0; $a < count($second_data_id); $a++) {
        //     $data['data_set'][$a]['label'] = $data['label'][$second_data_label_name][$a];
        //     for ($i = 0; $i < count($first_data_id); $i++) {
        //         $data['data_set'][$a]['chartData'][$i] = $model->where($second_data_key, $second_data_id[$a])
        //             ->where($first_data_key, $first_data_id[$i])
        //             ->where('respond', 1)
        //             ->count();
        //     }
        // }

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
        //
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
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
