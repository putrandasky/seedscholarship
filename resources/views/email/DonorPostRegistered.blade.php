@component('mail::layout')
    {{-- Header --}}
    @slot('header')
        @component('mail::header', ['url' => config('app.url')])
            <!-- header here -->
            <img class="img-header" src="{{ config('app.url').'/images/Seedlogo2.png'}}">
        @endcomponent
    @endslot

    {{-- Body --}}
    <!-- Body here -->
{{-- Terima kasih {{$data->name}}, --}}

Terima kasih <strong>{{$data->name}}</strong>,

Anda telah mendaftar sebagai :
    {{-- Subcopy --}}
@component('mail::panel')
Donatur <strong>{{$data->donorPeriods[0]->donation_category}}</strong> untuk SEED Scholarship <strong>#{{$data->donorPeriods[0]->period->period}}</strong> untuk tahun <strong>{{$data->donorPeriods[0]->period->year}}</strong>
@endcomponent
{{-- @component('mail::button', ['url' => '/'])
View Order
@endcomponent --}}
Berikut detail data yang sudah anda registrasi ke kami
@component('mail::panel')
Nama : {{$data->name}}<br/>
Email : {{$data->email}}<br/>
Phone : {{$data->phone}}<br/>
Angkatan : {{$data->year}}<br/>
Department : {{$data->collegeDepartment->department}}<br/>
Alamat : {{$data->address}}<br/>
Kategori Donasi : {{$data->donorPeriods[0]->donation_category}}<br/>
{{-- @if($data->donorPeriods[0]->amount != 0)
Rencana Donasi : Rp. {{number_format($data->donorPeriods[0]->amount,0,",",".")}} / tahun<br/>
@endif --}}
@if($data->donorPeriods[0]->donation_category == 'AKTIF')
{{-- Akan ditagihkan : Rp. {{number_format($data->donorPeriods[0]->amount / 12,0,",",".")}} / bulan<br/> --}}
Rencana Donasi : Rp. {{number_format($data->donorPeriods[0]->amount / 10,0,",",".")}} / bulan<br/>
@endif
@if($data->donorPeriods[0]->donation_category == 'PASIF')
Rencana Donasi : Rp. {{number_format($data->donorPeriods[0]->amount,0,",",".")}} / periode<br/>
@endif
@endcomponent

Jika Anda sudah menyetujui data tersebut. silahkan klik tombol dibawah ini untuk menerima kontrak kerja sama dari kami
@component('mail::button', ['url' => config('app.url')."/donor#/contract-agreed?id={$data->id}&email={$data->email}&period={$data->donorPeriods[0]->period->period}&token={$data->donorPeriods[0]->token}"])
Saya Setuju
@endcomponent


Tim kami akan menghubungi anda untuk melakukan konfirmasi jika Anda tidak menyetujui dalam waktu 3 hari.

Terimakasih,<br/>

<br/>
<img style="height:5%" src="{{ config('app.url').'/images/heart.png'}}">
<strong>SEED Scholarship</strong>





    {{-- Footer --}}
    @slot('footer')
        @component('mail::footer')
            <!-- footer here -->
{{-- <strong>CONTACT : </strong> --}}
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
