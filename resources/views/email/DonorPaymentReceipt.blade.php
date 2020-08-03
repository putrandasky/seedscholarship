@component('mail::layout')

@slot('header')
@component('email.header')
@endcomponent
@endslot

Terima kasih <strong>{{$data->donor->name}}</strong>,

Kami telah melakukan verifikasi donasi anda sebesar :

@component('mail::panel')
<div style="text-align:center;font-weight:bold;font-size:22px">
Rp. {{number_format($data->donor->donorTransactions[0]->amount,0,",",".")}},-
</div>
@php setlocale(LC_TIME, 'id');
@endphp
<div style="text-align:center">
Tanggal Transaksi : {{Carbon\Carbon::parse($data->donor->donorTransactions[0]->trx_date)->formatLocalized('%d %B %Y')}},-
</div>
@endcomponent
<br>
Sehingga total donasi anda yang kami terima untuk periode ini adalah sebesar


@component('mail::panel')
<div style="text-align:center">TOTAL DONASI</div>
<div style="text-align:center;font-weight:bold;font-size:22px">
Rp. {{number_format($data->donor->total_donation,0,",",".")}},-
</div>
@endcomponent

Berikut terlampir bukti penerimaan untuk donasi tersebut

Kontribusi anda sangat berharga untuk Department Teknik Sipil UI.

Terimakasih,<br/>

<br/>
<img style="height:5%" src="{{ config('app.url').'/images/heart.png'}}">
<strong>SEED Scholarship</strong>

@slot('footer')
@component('email.footer',['cp_email'=> $cp_email])
@endcomponent
@endslot
@endcomponent
