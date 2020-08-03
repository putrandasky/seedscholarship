@component('mail::layout')
{{-- Header --}}
@slot('header')
@component('email.header')

@endcomponent
@endslot

{{-- Body --}}
<!-- Body here -->
{{-- Terima kasih {{$data->name}}, --}}


Terima kasih <strong>{{$data->name}}</strong>,

Anda telah mendaftar sebagai :
{{-- Subcopy --}}
@component('mail::panel')
Donatur <strong>{{$data->donation_category}}</strong> untuk SEED Scholarship <strong>#{{$data->period->period}}</strong> untuk tahun <strong>{{$data->period->year}}</strong>
@endcomponent
{{-- @component('mail::button', ['url' => '/'])
View Order
@endcomponent --}}
Berikut detail data yang sudah anda registrasi ke kami
@component('mail::panel')
Nama : {{$data->donor->name}}<br/>
Email : {{$data->donor->email}}<br/>
Phone : {{$data->donor->phone}}<br/>
Angkatan : {{$data->donor->year}}<br/>
Department : {{$data->donor->collegeDepartment->department}}<br/>
Alamat : {{$data->donor->address}}<br/>
Kode Pos : {{$data->donor->zip_code}}<br/>
Kategori Donasi : {{$data->donation_category}}<br/>
{{-- @if($data->amount != 0)
Rencana Donasi : Rp. {{number_format($data->amount,0,",",".")}} / tahun<br/>
@endif --}}
@if($data->donation_category == 'AKTIF')
{{-- Akan ditagihkan : Rp. {{number_format($data->amount / 12,0,",",".")}} / bulan<br/> --}}
Rencana Donasi : Rp. {{number_format($data->amount / ($duration_period),0,",",".")}} / bulan<br />
@endif
@if($data->donation_category == 'PASIF')
Rencana Donasi : Rp. {{number_format($data->amount,0,",",".")}} / periode<br/>
@endif
@endcomponent

Jika Anda sudah menyetujui data tersebut. silahkan klik tombol dibawah ini untuk menerima kontrak kerja sama dari kami
@component('mail::button', ['url' => config('app.url')."/donor#/contract-agreed?id={$data->donor->id}&email={$data->donor->email}&period={$data->period->period}&token={$data->token}"])
Saya Setuju
@endcomponent


Tim kami akan menghubungi anda untuk melakukan konfirmasi jika Anda tidak menyetujui dalam waktu 3 hari.

Terimakasih,<br/>

<br/>
<img style="height:5%" src="{{ config('app.url').'/images/heart.png'}}">
<strong>SEED Scholarship</strong>





{{-- Footer --}}
@slot('footer')
<!-- footer here -->
{{-- <strong>CONTACT : </strong> --}}
@component('email.footer',['cp_email'=> $cp_email])

@endcomponent
@endslot
@endcomponent
