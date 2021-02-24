<?php

namespace App\Console\Commands;

use App;
use App\Jobs\Admin\ProcessSendReminderDonation;
use Carbon\Carbon;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;

class DonationReminder extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'reminder:donation';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Send Reminder for Donate to Donors in active period';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $period = App\Period::where('is_active', true)->first();

        if (!$period) {
            return;
        }

        $start_period = Carbon::parse("{$period->year}-{$period->start_month}");
        $end_period = Carbon::parse("{$period->end_year}-{$period->end_month}")->endOfMonth();
        $total_duration_period = (($period->end_year - $period->year) * 12) + ($period->end_month - $period->start_month) + 1;

        // $currentToday = Carbon::today()->addMonths(1);
        $currentToday = Carbon::today();
        // $currentDay = $currentToday->day(5)->day;
        $currentDay = $currentToday->day;
        // $currentMonth = 1 <= $currentDay && $currentDay < 25 ? $currentToday->month - 1 : $currentToday->month;
        $currentMonth = 1 <= $currentDay && $currentDay < 25 ? $currentToday->month == 1 ? 12 : $currentToday->month - 1 : $currentToday->month;

        // $currentYear = (1 <= $currentDay && $currentDay < 25) && $currentToday->month == 1 ? $currentToday->year - 1 : $currentToday->year;
        $currentYear = (1 <= $currentDay && $currentDay < 25) && $currentToday->month == 1 ? $currentToday->year - 1 : $currentToday->year;
        $duration_period_uptolastmonth = (($currentYear - $period->year) * 12) + ($currentMonth - $period->start_month);
        $duration_period = $duration_period_uptolastmonth + 1;
        $current_duration_period = ($currentYear <= $period->year) && ($currentMonth < $period->start_month) ? 0 : (($currentYear >= $period->end_year) && ($currentMonth > $period->end_month) ? $total_duration_period : $duration_period);

// $period_duration = $period_duration_uptolastmonth + 1;
        // $correction_period_duration = ($period_year <= $year) && ($period_month < $start_month) ? 0 : (($period_year >= $end_year) && ($period_month > $end_month) ? $duration : $period_duration);

        // $users = App\Donor::whereHas('donorPeriods', function ($query) use ($period) {
        //     $query->where([
        //         'period_id' => $period->id,
        //         'is_contract_agreed' => 'AGREED',
        //     ]);
        // })
        //     ->select(['id', 'email', 'name', 'year', 'active'])
        //     ->withCount([
        //         'donorTransactions AS total_donation' => function ($query) use ($period) {
        //             $query->where(['verification' => 'VERIFIED', 'period_year' => $period->year])->select(DB::raw("SUM(amount)"));
        //         },
        //         'donorPeriods AS plan_todate' => function ($query) use ($currentMonth, $period) {
        //             $query->where([
        //                 'period_id' => $period->id,
        //                 'is_contract_agreed' => 'AGREED',
        //             ])->select(DB::raw("(amount/10 * ({$currentMonth} - 1))"));
        //             // $query->where(['period_id'=> $period->id,'donation_category'=> 'AKTIF'])->select(DB::raw("(amount/12 * {$currentMonth})"));
        //         },
        //         'donorTransactions AS last_donate' => function ($query) use ($period) {
        //             $query->where('period_year', $period->year)->select(DB::raw("(max(trx_date))"));
        //         },
        //     ]
        //     )
        //     ->get();

        $users = App\DonorPeriod::where([
            'period_id' => $period->id,
            'is_contract_agreed' => 'AGREED',
        ])
            ->with([
                'donor' => function ($query) use ($period, $total_duration_period, $current_duration_period) {
                    $query->withCount([
                        'donorTransactions AS total_donation' => function ($query) use ($period) {
                            $query->where(['verification' => 'VERIFIED', 'period_year' => $period->year])->select(DB::raw("SUM(amount)"));
                        },
                        'donorPeriods AS plan_todate' => function ($query) use ($total_duration_period, $current_duration_period, $period) {
                            $query->where([
                                'period_id' => $period->id,
                                'is_contract_agreed' => 'AGREED',
                            ])->select(DB::raw("(amount/{$total_duration_period} * {$current_duration_period})"));
                            // $query->where(['period_id'=> $period->id,'donation_category'=> 'AKTIF'])->select(DB::raw("(amount/12 * {$currentMonth})"));
                        },
                        'donorTransactions AS last_donate' => function ($query) use ($period) {
                            $query->where('period_year', $period->year)->select(DB::raw("(max(trx_date))"));
                        },
                    ]);
                },
            ])
            ->get();
        for ($i = 0; $i < count($users); $i++) {

            $hasMoreDonation = $users[$i]['donor']['total_donation'] >= $users[$i]['donor']['plan_todate'];
            $hasRecentTransaction = $users[$i]['donor']['last_donate'] > Carbon::today()->day(25)->SubMonthsNoOverflow(1)->format('Y-m-d H:i:s');
            // Notification::route('mail', $users[$i]['donor']->email)->notify(new SendReminderDonation($users[$i]));
            if (!$hasMoreDonation && $currentDay == 25) {
                dispatch(new ProcessSendReminderDonation($users[$i]));
                // Notification::route('mail', $users[$i]['donor']->email)->notify(new SendReminderDonation($users[$i]));
            }
            if (!$hasRecentTransaction && !$hasMoreDonation && $currentDay == 3) {
                dispatch(new ProcessSendReminderDonation($users[$i]));
                // Notification::route('mail', $users[$i]['donor']->email)->notify(new SendReminderDonation($users[$i]));
            }
            // Notification::route('mail', $data->email)->notify(new SendReminderDonation($data));
        }
        $this->info('all sent');

        // $users = App\Donor::whereHas('donorPeriods.period', function ($query) {
        //     $query->where('is_active', true);
        // })
        //     ->whereHas('donorPeriods', function ($query) {
        //         $query->where('donation_category', 'AKTIF');
        //     })
        //     ->whereHas('donorTransactions', function ($query) {
        //         $query->whereBetween('trx_date', [$startOfWeek, $endOfWeek]);
        //     })
        //     ->with([
        //         'awardeeDepartment',
        //         'donorPeriods.period' => function ($query) {
        //             $query->where('is_active', true);
        //         },
        //     ])
        //     ->get();
        // foreach ($users as $data) {
        //     Notification::route('mail', $data->email)->notify(new SendReminderDonation($data));
        // }
    }
}

// $amount = 1200000;
// $actual_year = 2022;
// $actual_month = 2;
// $actual_day = 26;
// $year = 2021;
// $end_year = 2022;
// $start_month = 10;
// $end_month = 2;

// $duration = (($end_year - $year) * 12) +
//     ($end_month - $start_month) + 1;

// $period_month = (1 <= $actual_day && $actual_day < 25) ? $actual_month == 1 ? 12 : $actual_month - 1 : $actual_month;

// $period_year = (1 <= $actual_day && $actual_day < 25) && $actual_month == 1 ? $actual_year - 1 : $actual_year;

// $period_duration_uptolastmonth = (($period_year - $year) * 12) + ($period_month - $start_month);
// $period_duration = $period_duration_uptolastmonth + 1;
// //print $period_duration;
// $correction_period_duration = ($period_year <= $year) && ($period_month < $start_month) ? 0 : (($period_year >= $end_year) && ($period_month > $end_month) ? $duration : $period_duration);
// //print $correction_period_duration ;
// $plan_to_date = $amount / $duration * $correction_period_duration;

// print $plan_to_date;

//echo $period_year;
