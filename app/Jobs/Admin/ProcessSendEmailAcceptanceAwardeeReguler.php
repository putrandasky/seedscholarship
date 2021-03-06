<?php

namespace App\Jobs\Admin;

use App\Notifications\Admin\SendEmailAcceptanceAwardeeReguler;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Notification;

class ProcessSendEmailAcceptanceAwardeeReguler implements ShouldQueue
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

        Notification::route('mail', $this->data['awardee']['email'])->notify(new SendEmailAcceptanceAwardeeReguler($this->data));
    }
}
