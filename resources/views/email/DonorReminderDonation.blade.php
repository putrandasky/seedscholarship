@component('mail::layout')
@slot('header')
@component('mail::header', ['url' => config('app.url')])
<img class="img-header" src="{{ config('app.url').'/images/Seedlogo2.png'}}">
@endcomponent
@endslot

Halo Donatur SEEDS {{$data->donorPeriods[0]->period->period}}!

Sebelumnya kami ingin mengucapkan terima kasih atas partisipasinya sebagai Donatur Aktif/Donatur Pasif di SEEDS 5.

Email ini merupakan reminder untuk para donatur bahwa donasi untuk bulan ini sudah dapat dilakukan.

Donasi dapat dilakukan dengan cara transfer ke
@component('mail::panel')<table style="border-spacing:0px">
      <tbody>
        <tr>
          <td style="padding-left:35px">Nomor Rekening </td>
          <td style="padding-left:20px">: 0343806044</td>
        </tr>
        <tr>
          <td style="padding-left:35px">Nama Bank</td>
          <td style="padding-left:20px">: BNI</td>
        </tr>
        <tr>
          <td style="padding-left:35px">Cabang</td>
          <td style="padding-left:20px">: Kantor Cabang Kementerian PU</td>
        </tr>
        <tr>
          <td style="padding-left:35px">Nama Pemilik Rekening</td>
          <td style="padding-left:20px">: a.n. Desy Rahayu Hertanti</td>
        </tr>
      </tbody>
    </table>
@endcomponent

Apabila transaksi sudah dilakukan, silahkan mengirimkan bukti transfer ke:

@component('mail::button', ['url' => config('app.url')."/donor#/donation-confirmation?id={$data->id}&year={$data->donorPeriods[0]->period->year}&email={$data->email}&donation_token={$data->donorPeriods[0]->donation_token}"])
Konfirmasi Pembayaran @endcomponent

Terima kasih banyak atas partisipasinya di SEEDS 5.

Kontribusi anda sangat berharga untuk Department Teknik Sipil UI.

Terimakasih,<br/>

<br/>
<img style="height:5%" src="{{ config('app.url').'/images/heart.png'}}">
<strong>SEED Scholarship</strong>

@slot('footer')
@component('mail::footer')

Anggit Cahyo S’08 : 085697274479 |
Janitra Hendra L’08 : 081290001300
<br/>
Bentuk kontribusi alumni Departemen Teknik Sipil Universitas Indonesia <br/>
© {{ config('app.name') }}, 2014 - 2019 | Oleh Alumni Department Teknik Sipil UI <br/>
EMAIL : hello@seedsholarship.org
seedscholarship.org
@endcomponent
@endslot
@endcomponent
