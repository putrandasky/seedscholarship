<?php

namespace App\Mail\Admin;

use App;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Storage;

class BroadcastEmail extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public $data;
    public function __construct($data)
    {
        $this->data = $data;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        $general = App\General::get();
        $cp_email[0] = $general->where('key', 'Contact Person Email 1')->first()->value;
        $cp_email[1] = $general->where('key', 'Contact Person Email 2')->first()->value;
        $broadcast = App\Broadcast::where('id', $this->data['broadcast_id'])->first();
        $sender = App\Admin::where('id', $broadcast->from)->first();

        $sender_name = explode(' ', trim($sender->name))[0];

        $files = Storage::files("broadcast/{$broadcast->id}");
        $email = $this->from($sender->email, "{$sender_name} dari SEED Scholarship")
            ->subject($broadcast->title)
            ->markdown('email.BroadcastEmail', ['broadcast' => $broadcast, 'cp_email' => $cp_email]);
        if (count($files) > 0) {
            foreach ($files as $file) {
                $email->attach(storage_path('app') . "/" . $file);
            }
        }
        ;

        return $email;
    }
}
