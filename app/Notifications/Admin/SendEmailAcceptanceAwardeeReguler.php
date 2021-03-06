<?php

namespace App\Notifications\Admin;

use App;
use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class SendEmailAcceptanceAwardeeReguler extends Notification
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
        $url = 'hello@seedscholarship.org';
        if ($this->data['status'] == 'APPROVED') {
            # code...
            return (new MailMessage)
                ->from($url, 'SEED Scholarship')
                ->subject("Congratulations {$this->data['awardee']['name']}!")
                ->markdown('email.AcceptanceAwardeeReguler', ['data' => $this->data, 'cp_email' => $cp_email]);
        }
        if ($this->data['status'] == 'NOT APPROVED') {
            # code...
            return (new MailMessage)
                ->from($url, 'SEED Scholarship')
                ->subject("Regret From Us")
                ->markdown('email.RejectionAwardeeReguler', ['data' => $this->data, 'cp_email' => $cp_email]);
        }
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
