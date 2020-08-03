<?php

namespace App\Jobs\Admin;

use App;
use App\Mail\Admin\BroadcastEmail;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Mail;

class ProcessBroadcastEmail implements ShouldQueue
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
        try {
            //code...
            Mail::to($this->data['user']['email'])->send(new BroadcastEmail($this->data));
            $broadcast_reader = App\BroadcastReader::find($this->data['broadcast_reader_id']);
            $broadcast_reader->status = 'SENT';
            $broadcast_reader->save();

        } catch (\Throwable $th) {

            $broadcast_reader = App\BroadcastReader::find($this->data['broadcast_reader_id']);
            $broadcast_reader->status = 'FAILED';
            $broadcast_reader->save();
            //throw $th;
        }

    }
}
