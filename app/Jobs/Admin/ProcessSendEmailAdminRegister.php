<?php

namespace App\Jobs\Admin;

use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use App\Notifications\Admin\RegisterNotification;
use Illuminate\Support\Facades\Notification;
class ProcessSendEmailAdminRegister implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;
    // protected $details;
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
        $content = new RegisterNotification($this->data);
        Notification::route('mail', $this->data['email'])->notify(new RegisterNotification($this->data));
        // Mail::to()->send($content);

    }
}
