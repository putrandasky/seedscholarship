<?php

namespace App\Jobs\Admin;

use App;
use App\Notifications\Admin\BroadcastEmailDonorReRegistration;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Notification;

class ProcessBroadcastEmailDonorReRegistration implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    protected $data;
    public function __construct($data)
    {
        $this->data = $data;

    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $donor_registration = App\DonorRegistration::where([
            'period_id' => $this->data['period']['id'],
            'donor_id' => $this->data['donor']['id'],
        ])->first();
        try {
            //code...
            Notification::route('mail', $this->data['donor']['email'])->notify(new BroadcastEmailDonorReRegistration($this->data));
            $donor_registration->status = 'EMAIL SENT';
            $donor_registration->save();
        } catch (\Throwable $th) {
            $donor_registration->status = 'EMAIL FAILED';
            $donor_registration->save();
        }

    }
}
