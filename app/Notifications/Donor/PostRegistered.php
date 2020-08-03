<?php

namespace App\Notifications\Donor;

use App;
use Carbon\Carbon;
use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class PostRegistered extends Notification
{
    use Queueable;

    /**
     * Create a new notification instance.
     *
     * @return void
     */
    public $data;
    public function __construct($data)
    {
        $this->data = $data;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function via($notifiable)
    {
        return ['mail'];
    }

    /**
     * Get the mail representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return \Illuminate\Notifications\Messages\MailMessage
     */
    public function toMail($notifiable)
    {
        $general = App\General::get();
        $cp_email[0] = $general->where('key', 'Contact Person Email 1')->first()->value;
        $cp_email[1] = $general->where('key', 'Contact Person Email 2')->first()->value;
        $start_period = Carbon::parse("{$this->data['period']['year']}-{$this->data['period']['start_month']}");
        $end_period = Carbon::parse("{$this->data['period']['end_year']}-{$this->data['period']['end_month']}")->endOfMonth();
        $duration_period = $start_period->diffInMonths($end_period) + 1;

        $url = 'hello@seedscholarship.org';
        return (new MailMessage)
            ->from($url, 'SEED Scholarship')
            ->bcc('bcc@seedscholarship.org')
            ->subject("Selamat Bergabung di SEEDS #{$this->data['period']['period']} Tahun {$this->data['period']['year']} ")
            ->markdown('email.DonorPostRegistered2', [
                'data' => $this->data,
                'cp_email' => $cp_email,
                'duration_period' => $duration_period,
            ]);
        // ->attach(storage_path('app')."/contract/donor/{$this->data->periods[0]->period}/{$this->data->id}/Surat Perjanjian Kerja Sama {$this->data->name}.pdf");

    }

    /**
     * Get the array representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function toArray($notifiable)
    {
        return [
            //
        ];
    }
}
