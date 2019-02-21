@component('mail::layout')

    @slot('header')
        @component('mail::header', ['url' => config('app.url')])

            <img class="img-header" src="{{ config('app.url').'/images/Seedlogo2.png'}}">
        @endcomponent
    @endslot

Terima kasih <strong>{{$data->name}}</strong>,

Anda telah menyetujui kontrak kerjasama untuk :

@component('mail::panel')
Donatur <strong>{{$data->periods[0]->pivot->donation_category}}</strong> periode SEED Scholarship <strong>#{{$data->periods[0]->period}}</strong> untuk tahun <strong>{{$data->periods[0]->year}}</strong>
@endcomponent
Berikut terlampir kontrak kerja sama dari kami

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
