<?php

namespace App\Jobs\Admin;

use App\Notifications\Admin\SendEmailAcceptanceAwardeeNonreg;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Notification;
use Log;

class ProcessSendEmailAcceptanceAwardeeNonreg implements ShouldQueue
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
    {Log::debug($this->data['awardee_nonreg']);

        Notification::route('mail', $this->data->awardee_nonreg->email)->notify(new SendEmailAcceptanceAwardeeNonreg($this->data));

    }
}
