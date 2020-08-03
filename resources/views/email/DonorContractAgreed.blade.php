@component('mail::layout')

@slot('header')
@component('email.header')
@endcomponent
@endslot

Terima kasih <strong>{{$data->donor->name}}</strong>,

Anda telah menyetujui kontrak kerjasama untuk :

@component('mail::panel')
Donatur <strong>{{$data->donation_category}}</strong> periode SEED Scholarship
<strong>#{{$data->period->period}}</strong> untuk tahun
<strong>{{$data->period->year}}</strong>
@endcomponent
Berikut terlampir kontrak kerja sama dari kami

Kontribusi anda sangat berharga untuk Department Teknik Sipil UI.

Terimakasih,<br />

<br />
<img style="height:5%" src="{{ config('app.url').'/images/heart.png'}}">
<strong>SEED Scholarship</strong>

@slot('footer')
@component('email.footer',['cp_email'=> $cp_email])
@endcomponent
@endslot
@endcomponent
