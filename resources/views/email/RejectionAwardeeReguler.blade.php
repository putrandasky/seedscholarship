@component('mail::layout')

@slot('header')
@component('email.header')
@endcomponent
@endslot

Hai <strong>{{$data->awardee->name}}</strong>,

Terima kasih atas ketertarikan Kamu pada Beasiswa SEED Scholarship <b> #{{$data->period->period}}</b> tahun <b>{{$data->period->year}}</b>. Kami menerima banyak Mahasiswa/i yang memenuhi syarat dan hal ini merupakan keputusan yang sulit. Dengan menyesal Kami menginformasikan pada periode ini Kamu belum terpilih menjadi Awardee SEED Scholarship <b> #{{$data->period->period}}</b> tahun <b>{{$data->period->year}}</b>.

Kami sangat mengapresiasi kamu karena mempertimbangkan beasiswa ini dan meluangkan waktu untuk melengkapi persyaratan kami. Teruslah Semangat untuk Belajar dan Berkarya demi Masa Depanmu. Kami juga mendoakan agar kamu sukses baik di dunia perkuliahan maupun dalam pencarian beasiswa yang lain.


Terimakasih,<br/>


<br />
<img style="height:5%" src="{{ config('app.url').'/images/heart-small.png'}}">
<strong>SEED Scholarship</strong>

@slot('footer')
@component('email.footer',['cp_email'=> $cp_email])
@endcomponent
@endslot
@endcomponent
