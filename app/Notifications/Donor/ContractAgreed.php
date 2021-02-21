<?php

namespace App\Notifications\Donor;

use App;
use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;

class ContractAgreed extends Notification
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
        // $general['head_name'] = $generalData->where('key','Head of Seedscholarship Name')->first();

        $duration_period = (($this->data['period']['end_year'] - $this->data['period']['year']) * 12) + ($this->data['period']['end_month'] - $this->data['period']['start_month']) + 1;

        $series = substr($this->data->contract_number, 3);
        $attachmentTemplate = $this->data->donation_category == 'AKTIF' ? 'attachment.ContractDonaturAktif' : 'attachment.ContractDonaturPasif';
        $pdf = app('dompdf.wrapper');
        $pdf->getDomPDF()->set_option("enable_php", true);
        $pdf->loadView($attachmentTemplate, ['data' => $this->data, 'series' => $series, 'general' => $general, 'duration_period' => $duration_period]);
        $pdf->setPaper('a4');
        Log::debug("error in contractagreed:  {$this->data['period']['period']}");

        Storage::put("contract/donor/{$this->data['period']['period']}/{$this->data['donor']['id']}/Surat Perjanjian Kerja Sama {$this->data['donor']['name']}.pdf", $pdf->output());
        $url = 'hello@seedscholarship.org';
        return (new MailMessage)
            ->from($url, 'SEED Scholarship')
            ->subject("Kontrak Kerja Sama SEEDS #{$this->data['period']['period']} Tahun {$this->data['period']['year']}")
            ->markdown('email.DonorContractAgreed', ['data' => $this->data, 'cp_email' => $cp_email, 'duration_period' => $duration_period])
            ->attach(storage_path('app') . "/contract/donor/{$this->data['period']['period']}/{$this->data['donor']['id']}/Surat Perjanjian Kerja Sama {$this->data['donor']['name']}.pdf");

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
