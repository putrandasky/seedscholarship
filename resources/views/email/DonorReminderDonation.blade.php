@component('mail::layout')
@slot('header')
@component('email.header')
@endcomponent
@endslot

Halo Donatur SEEDS {{$data->period->period}}!

Sebelumnya kami ingin mengucapkan terima kasih atas partisipasinya sebagai Donatur Aktif/Donatur Pasif di SEEDS {{$data->period->period}}.

Email ini merupakan reminder untuk para donatur bahwa donasi untuk bulan ini sudah dapat dilakukan.

Donasi dapat dilakukan dengan cara transfer ke
@component('mail::panel')<table style="border-spacing:0px">
      <tbody>
        <tr>
          <td style="padding-left:35px">Nomor Rekening </td>
          <td style="padding-left:20px">: {{$general->where('key','Account Number')->first()->value}}</td>
        </tr>
        <tr>
          <td style="padding-left:35px">Nama Bank</td>
          <td style="padding-left:20px">: {{$general->where('key','Account Bank')->first()->value}}</td>
        </tr>
        <tr>
          <td style="padding-left:35px">Cabang</td>
          <td style="padding-left:20px">: {{$general->where('key','Account Address')->first()->value}}</td>
        </tr>
        <tr>
          <td style="padding-left:35px">Nama Pemilik Rekening</td>
          <td style="padding-left:20px">: a.n. {{$general->where('key','Account Name')->first()->value}}</td>
        </tr>
      </tbody>
    </table>
@endcomponent

Apabila transaksi sudah dilakukan, silahkan mengirimkan bukti transfer ke:

{{-- @component('mail::button', ['url' => config('app.url')."/donor#/donation-confirmation"]) --}}
@component('mail::button', ['url' => config('app.url')."/donor#/donation-confirmation?id={$data->donor->id}&year={$data->period->year}&email={$data->donor->email}&donation_token={$data->donation_token}"])
Konfirmasi Pembayaran @endcomponent

Terima kasih banyak atas partisipasinya di SEEDS {{$data->period->period}}.

Kontribusi anda sangat berharga untuk Department Teknik Sipil UI.

Terimakasih,<br/>

<br/>
<img style="height:5%" src="{{ config('app.url').'/images/heart-small.png'}}">
<strong>SEED Scholarship</strong>

<div style="text-align:center;margin-bottom:15px;margin-top:50px">Follow IG kami untuk informasi update kegiatan</div>

<a href="https://instagram.com/seedscholarship/" target="_blank">
<img style="margin-left:auto;margin-right:auto;display:block" src="{{ config('app.url').'/images/Instagram.png'}}">
</a>
<div style="text-align:center">
<a href="https://instagram.com/seedscholarship/" target="_blank">
<strong>IG: @seedscholarship</strong>
</a>
</div>

@slot('footer')
@component('email.footer',['cp_email'=> $cp_email])
@endcomponent
@endslot
@endcomponent
