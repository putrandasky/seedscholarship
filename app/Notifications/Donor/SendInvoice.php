<?php

namespace App\Notifications\Donor;

use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Notification;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;

class SendInvoice extends Notification
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
            ->from($url,'Seedscholarship')
            ->subject("Payment Receipt #{$this->data->donorTransactions[0]->invoice_no}")
            ->markdown('email.DonorInvoice', ['data' => $this->data])
            ->attach(storage_path('app')."/transaction/{$this->data->periods[0]->year}/{$this->data->id}/{$this->data->donorTransactions[0]->id}/invoice/{$this->data->donorTransactions[0]->invoice_no}.pdf");

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
