<?php

namespace App\Console\Commands;

use App;
use App\Notifications\Donor\SendReminderDonation;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Notification;
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
        $users = App\Donor::whereHas('periods', function ($query) {
            $query->where('is_active', true);
        })
            ->with([
                'awardeeDepartment',
                'periods' => function ($query) {
                    $query->where('is_active', true);
                }])
            ->get();
        foreach ($users as $data) {
            Notification::route('mail', $data->email)->notify(new SendReminderDonation($data));
        }
    }
}
