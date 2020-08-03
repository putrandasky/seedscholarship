@component('mail::layout')
{{-- Header --}}
@slot('header')
@component('email.header')
@endcomponent
@endslot

{{-- Body --}}
<!-- Body here -->
{{-- Terima kasih {{$data->name}}, --}}

Hai <strong>{{$data->name}}</strong>,

Kamu telah mendaftar sebagai :
{{-- Subcopy --}}
@component('mail::panel')
Calon Awardee  untuk <strong>{{$data->awardeeNonregScholarships[0]->scholarship->name}}</strong> tahun <strong>{{$data->awardeeNonregScholarships[0]->scholarship->year}}</strong>
@endcomponent
{{-- @component('mail::button', ['url' => '/'])
View Order
@endcomponent --}}
Berikut detail data yang sudah kamu registrasi ke kami
@component('mail::panel')
Nama : {{$data->name}}<br/>
Email : {{$data->email}}<br/>
Phone : {{$data->phone}}<br/>
Angkatan : {{$data->year}}<br/>
Department : {{$data->collegeDepartment->department}}<br/>
@endcomponent

Segera siapkan file berikut ini :
@component('mail::panel')
<ol>
<li>CV / Riwayat Hidup : format bebas dengan informasi yang wajib ada yaitu: data diri, riwayat pendidikan, kemampuan bahasa, pengalaman kerja</li>
<li>Proposal Penelitian : dengan isi; latar belakang, tujuan, metodologi, RAB, referensi. (format: <a href="{{config('app.url')."/files/BEASISWA PENELITIAN SEEDS 2019 - II - FORMAT PROPOSAL.docx"}}">download disini</a> )</li>
<li>Surat keterangan tidak menerima beasiswa riset lainnya (format: <a href="{{config('app.url')."/files/BEASISWA PENELITIAN SEEDS 2019 - II - SK Tidak Menerima Beasiswa.docx"}}">download disini</a> )</li>
<li>SiakNG : Printout Halaman ringkasan dan riwayat</li>
</ol>
@endcomponent

Selanjutnya upload file tersebut dengan menekan tombol dibawah ini
@component('mail::button', ['url' => config('app.url')."/nonreg#/register/upload?id={$data->id}&email={$data->email}&scholarship_id={$data->awardeeNonregScholarships[0]->scholarship_id}&registration_code={$data->awardeeNonregScholarships[0]->registration_code}"])
Upload Disini
@endcomponent


Segera setelah kamu upload semua file yang dibutuhkan, tim kami akan menghubungi kamu untuk melakukan wawancara.

Terimakasih,<br/>

<br/>
<img style="height:5%" src="{{ config('app.url').'/images/heart.png'}}">
<strong>SEED Scholarship</strong>


{{-- Footer --}}
@slot('footer')
@component('email.footer',['cp_email'=> $cp_email])
@endcomponent
@endslot
@endcomponent
