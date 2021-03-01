<?php

namespace App\Notifications\Donor;

use App;
use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class SendPaymentReceipt extends Notification
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
        $general = App\General::get();
        $cp_email[0] = $general->where('key', 'Contact Person Email 1')->first()->value;
        $cp_email[1] = $general->where('key', 'Contact Person Email 2')->first()->value;

        $url = 'hello@seedscholarship.org';
        return (new MailMessage)
            ->from($url, 'SEED Scholarship')
            ->subject("Terimakasih Atas Donasinya | Receipt #{$this->data->donor->donorTransactions[0]->invoice_no}")
            ->markdown('email.DonorPaymentReceipt', [
                'data' => $this->data,
                'cp_email' => $cp_email,
            ])
            ->attach(storage_path('app') . "/transaction/{$this->data->period->year}/{$this->data->donor->id}/{$this->data->donor->donorTransactions[0]->id}/invoice/{$this->data->donor->donorTransactions[0]->invoice_no}.pdf");

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
