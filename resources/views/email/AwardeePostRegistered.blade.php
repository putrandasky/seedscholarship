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

Hai <strong>{{$data->name}}</strong>,

Kamu telah mendaftar sebagai :
    {{-- Subcopy --}}
@component('mail::panel')
Calon Awardee untuk SEED Scholarship <strong>#{{$data->periods[0]->period}}</strong> untuk tahun <strong>{{$data->periods[0]->year}}</strong>
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
Department : {{$data->awardeeDepartment->department}}<br/>
@endcomponent

Segera siapkan file berikut ini :
@component('mail::panel')
<ol>
<li>CV / Riwayat Hidup : format bebas dengan informasi yang wajib ada yaitu: data diri, riwayat pendidikan, kemampuan bahasa, pengalaman kerja,
status pekerjaan/pendidikan anggota keluarga</li>
<li>Esai : dengan topik "Mengapa saya pantas mendapatkan beasiswa SEED" sebanyak 300-500 kata</li>
<li>Slip gaji Orang tua / Rekening Listring</li>
<li>SiakNG : Printout Halaman ringkasan dan riwayat</li>
</ol>
@endcomponent

Selanjutnya upload file tersebut dengan menekan tombol dibawah ini
@component('mail::button', ['url' => config('app.url')."/awardee#/register/upload?id={$data->id}&email={$data->email}&period_id={$data->periods[0]->id}&registration_code={$data->periods[0]->pivot->registration_code}"])
Upload Disini
@endcomponent


Segera setelah kamu upload semua file yang dibutuhkan, tim kami akan menghubungi kamu untuk melakukan wawancara.

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
