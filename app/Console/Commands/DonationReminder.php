<?php

namespace App\Console\Commands;

use App;
use App\Notifications\Donor\SendReminderDonation;
use Carbon\Carbon;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Notification;

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
        $period = App\Period::where('is_active',true)->first();
        // $currentToday = Carbon::today()->addMonths(1);
        $currentToday = Carbon::today();
        // $currentDay = $currentToday->day(5)->day;
        $currentDay = $currentToday->day;
        $currentMonth = 1 <= $currentDay && $currentDay < 25 ? $currentToday->month -1 :$currentToday->month;
        $users = App\Donor::whereHas('donorPeriods', function ($query) use ($period) {
            $query->where([
              'period_id'=> $period->id,
              'donation_category'=> 'AKTIF',
              'is_contract_agreed'=> 'AGREED'
              ]);
        })
            ->select(['id', 'email', 'name', 'year', 'active'])
            ->withCount([
                'donorTransactions AS total_donation' => function ($query)  use ($period)  {
                    $query->where(['verification'=> 'VERIFIED','period_year'=>$period->year])->select(DB::raw("SUM(amount)"));
                },
                'donorPeriods AS plan_todate' => function ($query) use ($currentMonth,$period) {
                    $query->where([
                      'period_id'=> $period->id,
                      'donation_category'=> 'AKTIF',
                      'is_contract_agreed'=> 'AGREED'
                      ])->select(DB::raw("(amount/10 * ({$currentMonth} - 1))"));
                    // $query->where(['period_id'=> $period->id,'donation_category'=> 'AKTIF'])->select(DB::raw("(amount/12 * {$currentMonth})"));
                },
                'donorTransactions AS last_donate' => function ($query) use ($period) {
                    $query->where('period_year',$period->year)->select(DB::raw("(max(trx_date))"));
                },
            ]
            )

            ->get();
        for ($i = 0; $i < count($users); $i++) {

            $hasMoreDonation = $users[$i]['total_donation'] >= $users[$i]['plan_todate'];
            $hasRecentTransaction = $users[$i]['last_donate'] > Carbon::today()->day(25)->SubMonthsNoOverflow(1)->format('Y-m-d H:i:s');

            if (!$hasMoreDonation && $currentDay == 25) {
                Notification::route('mail', $users[$i]->email)->notify(new SendReminderDonation($users[$i]));
            }
            if (!$hasRecentTransaction && !$hasMoreDonation && $currentDay == 5) {
                Notification::route('mail', $users[$i]->email)->notify(new SendReminderDonation($users[$i]));
            }
            // Notification::route('mail', $data->email)->notify(new SendReminderDonation($data));
        }

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
