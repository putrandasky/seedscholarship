@component('mail::layout')

@slot('header')
@component('email.header')
@endcomponent
@endslot

Selamat buat <strong>{{$data->awardee_nonreg->name}}</strong>,

Dengan senang hati Kami menginformasikan bahwa Kamu terpilih menjadi Awardee SEED Scholarship <b> #{{$data->scholarship->name}}</b> tahun <b>{{$data->scholarship->year}}</b>.

Kami berharap Beasiswa ini dapat menjadi penunjang bagi Kamu untuk menggapai cita-cita sehingga sukses di masa depan.

Tim kami akan menghubungi kamu segera.

Terimakasih,<br/>


<br />
<img style="height:5%" src="{{ config('app.url').'/images/heart-small.png'}}">
<strong>SEED Scholarship</strong>

@slot('footer')
@component('email.footer',['cp_email'=> $cp_email])
@endcomponent
@endslot
@endcomponent
