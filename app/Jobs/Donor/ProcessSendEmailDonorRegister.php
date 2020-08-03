<?php

namespace App\Jobs\Donor;

use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use App\Notifications\Donor\PostRegistered;
use Illuminate\Support\Facades\Notification;

class ProcessSendEmailDonorRegister implements ShouldQueue
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
      $content = new PostRegistered($this->data);
      Notification::route('mail', $this->data['donor']['email'])->notify(new PostRegistered($this->data));

    }
}
