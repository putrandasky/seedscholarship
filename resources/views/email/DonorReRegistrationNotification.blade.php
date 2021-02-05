@component('mail::layout')
@slot('header')
@component('email.header')
@endcomponent
@endslot

{{-- {{dd($data)}} --}}

Hai <strong>{{$data['donor']['name']}}</strong> !

Dengan ini, kami mengundang kamu kembali untuk menjadi donatur SEED Scholarship.

@component('mail::panel')
Periode <strong>{{$data['period']['period']}}</strong> Tahun <strong>#{{$data['period']['year']}}</strong>
@endcomponent

Pendaftaran kembali silahkan klik link dibawah ini

@component('mail::button', ['url' => config('app.url')."/donor#/re-registration?id={$data['donor']['id']}&email={$data['donor']['email']}&period_id={$data['period']['id']}&token={$data['token']}"])
Daftar Ulang
@endcomponent

Nb : Email notifikasi ini dikirimkan karena kamu pernah bergabung menjadi donatur SEED Scholarship.

Terimakasih,<br/>

<br/>
<img style="height:5%" src="{{ config('app.url').'/images/heart-small.png'}}">
<strong>SEED Scholarship</strong>


{{-- Footer --}}
@slot('footer')
<!-- footer here -->
{{-- <strong>CONTACT : </strong> --}}
@component('email.footer',['cp_email'=> $cp_email])

@endcomponent
@endslot
@endcomponent
