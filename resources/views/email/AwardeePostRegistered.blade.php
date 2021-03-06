@component('mail::layout')
{{-- Header --}}
@slot('header')
@component('email.header')
@endcomponent
@endslot

{{-- Body --}}
<!-- Body here -->
{{-- Terima kasih {{$data->name}}, --}}

Hai <strong>{{$data->name}}</strong>,

Kamu telah mendaftar sebagai :
{{-- Subcopy --}}
@component('mail::panel')
Calon Awardee untuk SEED Scholarship <strong>#{{$data->awardeePeriods[0]->period->period}}</strong> untuk tahun
<strong>{{$data->awardeePeriods[0]->period->year}}</strong>
@endcomponent
{{-- @component('mail::button', ['url' => '/'])
View Order
@endcomponent --}}
Berikut detail data yang sudah kamu registrasi ke kami
@component('mail::panel')
Nama : {{$data->name}}<br />
Email : {{$data->email}}<br />
Phone : {{$data->phone}}<br />
Angkatan : {{$data->year}}<br />
Department : {{$data->collegeDepartment->department}}<br />
@endcomponent

Segera siapkan file berikut ini :
@component('mail::panel')
<ol>
  <li>Formulir pendaftaran SEED Scholarship yang sudah diisi (Unduh pada halaman melalui link "Upload Disini" dibawah)</li>
  <li>Essai : dengan topik "Mengapa saya pantas mendapatkan beasiswa SEED" sebanyak (300-500 kata)</li>
  <li>Salinan slip gaji orangtua</li>
  <li>Rekening listrik 3 bulan terakhir</li>
  <li>SiakNG : Printout Halaman ringkasan dan riwayat</li>
  <li>Foto close up casual 3x4</li>
  <li>Surat keterangan bukan perokok aktif</li>
</ol>
@endcomponent

Selanjutnya upload file tersebut dengan menekan tombol dibawah ini
@component('mail::button', ['url' =>
config('app.url')."/awardee#/register/upload?id={$data->id}&email={$data->email}&period_id={$data->awardeePeriods[0]->period_id}&registration_code={$data->awardeePeriods[0]->registration_code}"])
Upload Disini
@endcomponent


Segera setelah kamu upload semua file yang dibutuhkan, tim kami akan menghubungi kamu untuk melakukan wawancara.

Terimakasih,<br />

<br />
<img style="height:5%" src="{{ config('app.url').'/images/heart-small.png'}}">
<strong>SEED Scholarship</strong>

{{-- Footer --}}
@slot('footer')
@component('email.footer',['cp_email'=> $cp_email])
@endcomponent
@endslot
@endcomponent
