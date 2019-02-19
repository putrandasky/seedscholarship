@component('mail::layout')

    @slot('header')
        @component('mail::header', ['url' => config('app.url')])

            <img class="img-header" src="{{ config('app.url').'/images/Seedlogo2.png'}}">
        @endcomponent
    @endslot

Terima kasih <strong>{{$data->name}}</strong>,

Kami telah melakukan verifikasi donasi anda sebesar :

@component('mail::panel')
<div style="text-align:center;font-weight:bold;font-size:22px">
Rp. {{number_format($data->donorTransactions[0]->amount,0,",",".")}},-
</div>
<div style="text-align:center">
Tanggal Transaksi : {{Carbon\Carbon::parse($data->donorTransactions[0]->trx_date)->format('d F Y')}},-
</div>
@endcomponent

Berikut terlampir invoice untuk donasi tersebut

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