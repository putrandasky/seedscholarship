<?php

namespace App\Http\Controllers;

use App;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class TestController extends Controller
{
    public function sendReminder2(Request $request)
    {
        $period = App\Period::where('is_active', true)->first();
        $currentToday = Carbon::today();
        // $currentDay = $currentToday->day(5)->day;
        $currentDay = $currentToday->day;
        $currentMonth = 1 <= $currentDay && $currentDay < 25 ? $currentToday->month - 1 : $currentToday->month;

        $data = App\DonorPeriod::where([
            'period_id' => $period->id,
            'is_contract_agreed' => 'AGREED',
        ])
            ->with([
              'period',
                'donor' => function ($query) use ($period, $currentMonth) {
                    $query->withCount([
                        'donorTransactions AS total_donation' => function ($query) use ($period) {
                            $query->where(['verification' => 'VERIFIED', 'period_year' => $period->year])->select(DB::raw("SUM(amount)"));
                        },
                        'donorPeriods AS plan_todate' => function ($query) use ($currentMonth, $period) {
                            $query->where([
                                'period_id' => $period->id,
                                'is_contract_agreed' => 'AGREED',
                            ])->select(DB::raw("(amount/10 * ({$currentMonth} - 1))"));
                            // $query->where(['period_id'=> $period->id,'donation_category'=> 'AKTIF'])->select(DB::raw("(amount/12 * {$currentMonth})"));
                        },
                        'donorTransactions AS last_donate' => function ($query) use ($period) {
                            $query->where('period_year', $period->year)->select(DB::raw("(max(trx_date))"));
                        },
                    ]);
                },
            ])
            ->get();
        return $data;
    }
    public function sendreminder(Request $request)
    {
        $period = App\Period::where('is_active', true)->first();
        // $currentToday = Carbon::today()->addMonths(1);
        $currentToday = Carbon::today();
        // $currentDay = $currentToday->day(5)->day;
        $currentDay = $currentToday->day;
        $currentMonth = 1 <= $currentDay && $currentDay < 25 ? $currentToday->month - 1 : $currentToday->month;
        $users = App\Donor::whereHas('donorPeriods', function ($query) use ($period) {
            $query->where(['period_id' => $period->id, 'donation_category' => 'AKTIF']);
        })
            ->select(['id', 'email', 'name', 'year', 'active'])
            ->withCount([
                'donorTransactions AS total_donation' => function ($query) use ($period) {
                    $query->where(['verification' => 'VERIFIED', 'period_year' => $period->year])->select(DB::raw("SUM(amount)"));
                },
                'donorPeriods AS plan_todate' => function ($query) use ($currentMonth, $period) {
                    $query->where(['period_id' => $period->id, 'donation_category' => 'AKTIF'])->select(DB::raw("(amount/12 * {$currentMonth})"));
                },
                'donorTransactions AS last_donate' => function ($query) use ($period) {
                    $query->where('period_year', $period->year)->select(DB::raw("(max(trx_date))"));
                },
            ]
            )

        // ->whereHas('donorTransactions', function ($query) {
        //     $query->whereBetween('trx_date', [$startOfWeek, $endOfWeek]);
        // })
        // ->with([
        //     'collegeDepartment',
        //     'donorPeriods.period' => function ($query) {
        //         $query->where('is_active', true);
        //     },
        // ])
            ->get();
        // return $users;
        $newData = array();
        for ($i = 0; $i < count($users); $i++) {

            $hasMoreDonation = $users[$i]['total_donation'] >= $users[$i]['plan_todate'];
            // $hasRecentTransaction = $users[$i]['last_donate'] > Carbon::today()->day(25)->format('Y-m-d H:i:s');
            $hasRecentTransaction = $users[$i]['last_donate'] > Carbon::today()->day(25)->SubMonthsNoOverflow(1)->format('Y-m-d H:i:s');

            if (!$hasMoreDonation && $currentDay == 25) {
                $newData[] = $users[$i];
            }
            if (!$hasRecentTransaction && !$hasMoreDonation && $currentDay == 5) {
                $newData[] = $users[$i];
            }
            // Notification::route('mail', $data->email)->notify(new SendReminderDonation($data));
        }
        return $newData;
    }
}
