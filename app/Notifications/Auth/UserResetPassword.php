<?php

namespace App\Notifications\Auth;

use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;
use App;

class UserResetPassword extends Notification
{
    use Queueable;

    /**
     * Create a new notification instance.
     *
     * @return void
     */
    public function __construct($token,$account_type)
    {
        $this->token = $token;
        $this->account_type = $account_type;
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
      $cp_email[0] = $general->where('key','Contact Person Email 1')->first()->value;
      $cp_email[1] = $general->where('key','Contact Person Email 2')->first()->value;
$url = 'hello@seedscholarship.org';
        return (new MailMessage)
            ->from($url,'SEED Scholarship')
            ->bcc('bcc@seedscholarship.org')
            ->subject('Reset Password')
            ->greeting('HI, ' . strtoupper($notifiable->name))
            ->line('You are receiving this email because we received a password reset request for your account.')
            ->action('Reset Password', url("{$this->account_type}#/password-reset?email=" . $notifiable->email . '&token=' . $this->token))
            ->line('If you did not request a password reset, no further action is required.');
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
