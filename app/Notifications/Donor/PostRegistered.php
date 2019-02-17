<?php

namespace App\Notifications\Donor;

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
$url = 'hello@seedscholarship.org';
        return (new MailMessage)
            ->from($url)
            ->subject('Terimakasih Telah Mendaftar')
            ->markdown('email.DonorPostRegistered', ['data' => $this->data]);
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
