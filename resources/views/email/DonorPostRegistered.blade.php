@component('mail::layout')
    {{-- Header --}}
    @slot('header')
        @component('mail::header', ['url' => config('app.url')])
            <!-- header here -->
            <img class="img-header" src="{{ asset('images/Seedlogo2.png')}}">
        @endcomponent
    @endslot

    {{-- Body --}}
    <!-- Body here -->
{{-- Terima kasih {{$data->name}}, --}}

Terimakasih <strong>{{$data->name}}</strong>,

Anda telah mendaftar sebagai :
    {{-- Subcopy --}}
@component('mail::panel')
Donatur <strong>{{$data->periods[0]->pivot->donation_category}}</strong> untuk seedscholarship <strong>{{$data->periods[0]->period}}</strong> tahun <strong>{{$data->periods[0]->year}}</strong>
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
Department : {{$data->awardeeDepartment->department}}<br/>
Alamat : {{$data->address}}<br/>
Kategori Donasi : {{$data->periods[0]->pivot->donation_category}}<br/>
@endcomponent

Kontribusi anda sangat berharga untuk Department Teknik Sipil UI.

Segera tim kami akan menghubungi anda untuk melakukan konfirmasi

Terimakasih,<br/>

<br/>
<strong>seedscholarship.org</strong>
<img style="height:5%" src="{{ asset('images/heart.png')}}">






    {{-- Footer --}}
    @slot('footer')
        @component('mail::footer')
            <!-- footer here -->
<strong>CONTACT : </strong>
Anggit Cahyo S’08 : 085697274479 |
Janitra Hendra L’08 : 081290001300
<br/>
Bentuk kontribusi alumni Departemen Teknik Sipil Universitas Indonesia <br/>
© {{ config('app.name') }}, 2014 - 2019 | Oleh Alumni Department Teknik Sipil UI <br/>
EMAIL : hello@seedsholarsip.org
@endcomponent
    @endslot
@endcomponent
