<!DOCTYPE html>
@php
setlocale(LC_TIME, 'id');
@endphp
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{{$data->donorPeriods[0]->contract_number}}</title>
  <style>
    body {
      font-family: Arial, "Helvetica Neue", Helvetica, sans-serif
    }

    .text-center {
      text-align: center
    }

    .text-justify {
      text-align: justify;
      text-justify: inter-word;
    }

    .italic {
      font-style: italic
    }

    .underline {
      text-decoration: underline;
    }

    .bold {
      font-weight: bold
    }

    .font-14 {
      font-size: 14px
    }

    .page-break {
      page-break-after: always;
    }

    ol.alpha {
      list-style-type: lower-alpha;
    }

    .row {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -ms-flex-wrap: wrap;
      flex-wrap: wrap;
      margin-right: -15px;
      margin-left: -15px;
    }

    .column-8 {
      flex: 0 0 66.666667%;
      max-width: 66.666667%;
    }

    .column-4 {
      flex: 0 33.33333%;
      max-width: 66.666667%;

    }

  </style>
</head>

<body style="margin:30px 60px">
  <div>
    <img style="max-height:100px;text-align:center; max-width:100%" src="{{ config('app.url').'/images/Seedlogo2.png'}}">
  </div>
  <br />
  <div>
    <div class="text-center bold" style="font-size:24px">SURAT PERJANJIAN KERJASAMA</div>
    <div class="text-center font-14">Nomor: {{$series}}/SEEDS/DP/{{$data->donorPeriods[0]->period->year}}</div>
    <br />

    <div class="text-center">Pemberian Donasi Bantuan Dana Pendidikan dan Pengembangan Diri Mahasiswa Departemen Teknik
      Sipil Universitas Indonesia</div>
    <br />
    <br />

    <div class="text-center bold">Anggit Cahyo</div>
    <div class="text-center italic font-14">(Selanjutnya disebut “Ketua Pengurus SEED Scholarship”)</div>
    <br />
    <div class="text-justify">
      menerima Formulir Pendaftaran Donatur SEED Scholarship beserta semua keterangan dan pernyataan bersedia menjadi
      Donatur Pasif yang disampaikan oleh:
    </div>
    <br />
    <div class="text-center">
      <div class="bold">[Nama Donatur]</div>
      <div class="italic font-14">(Selanjutnya disebut “Donatur Pasif”)</div>
      NO. KONTRAK : {{$data->donorPeriods[0]->contract_number}}
    </div>
    <br />
    <div class="text-justify">
      Dengan ini SEED Scholarship setuju untuk menyalurkan donasi yang diberikan sebagai bantuan dana pendidikan dan
      pengembangan diri mahasiswa tahun pertama dan tahun kedua jurusan Teknik Sipil dan Teknik Lingkungan Universitas
      Indonesia melalui program SEED Scholarship berdasarkan syarat-syarat dan ketentuan-ketentuan sebagaimana
      tercantum di dalam Rincian &amp; Ketentuan Donasi yang dilampirkan dan merupakan bagian yang tidak terpisahkan
      dari Surat Perjanjian Kerjasama ini.
    </div>
    <br />
    <br />
    <br />
    <div>Jakarta, {{Carbon\Carbon::parse($data->donorPeriods[0]->created_at)->formatLocalized('%d %B %Y')}}</div>
<div>
      <img style="max-height:100px; max-width:100%" src="{{ config('app.url').'/images/sign-ketua-biru.jpeg'}}">
    </div>
        <div class="underline">
      Anggit Cahyo U.
    </div>
    <div>
      <small>
        Ketua Pengurus SEED Scholarship
      </small>
    </div>
  </div>
  <div class="page-break"></div>
<div>
    <img style="max-height:100px;text-align:center; max-width:100%" src="{{ config('app.url').'/images/Seedlogo2.png'}}">
  </div>
  <br />
  <div class="text-center bold" style="font-size:24px">RINCIAN & KETENTUAN DONASI</div>
  <ol>
    <li class="bold">Rincian Donatur Pasif</li>
<table style="border-spacing:0px">
      <tbody>
        <tr>
          <td>No Kontrak</td>
          <td style="padding-left:20px">: {{$data->donorPeriods[0]->contract_number}}</td>
        </tr>
        <tr>
          <td>Nama</td>
          <td style="padding-left:20px">: {{$data->name}}</td>
        </tr>
        <tr>
          <td>Alumni Program Studi</td>
          <td style="padding-left:20px">: {{$data->collegeDepartment->department}}</td>
        </tr>
        <tr>
          <td>Angkatan</td>
          <td style="padding-left:20px">: {{$data->year}}</td>
        </tr>
        <tr>
          <td>Status</td>
          <td style="padding-left:20px">: Donatur Pasif</td>
        </tr>
        <tr>
          <td>Terdaftar pada tanggal</td>
          <td style="padding-left:20px">: {{Carbon\Carbon::parse($data->donorPeriods[0]->created_at)->formatLocalized('%d %B %Y')}}</td>
        </tr>
      </tbody>
    </table>
    <br/>
    <li class="bold">Hak dan Kewajiban Donatur Pasif</li>
      <ol class="alpha">
        <li class="text-justify">Berhak menerima laporan keuangan dan laporan kegiatan pengembangan diri mahasiswa dari Pengurus SEED
          Scholarship</li>
        <li class="text-justify">Berkewajiban untuk membayarkan donasi minimal sekali dan melakukan konfirmasi pembayaran dengan mengirimkan
          bukti pembayaran
          kepada Pengurus SEED Scholarship<</li>
      </ol>
      <br/>
    <li class="bold">Hak dan Kewajiban Ketua Pengurus SEED Scholarship</li>
      <ol class="alpha">
        <li class="text-justify">Berhak menerima pembayaran donasi minimal sekali dari Donatur Pasif</li>
        <li class="text-justify">Berkewajiban menyampaikan laporan keuangan dan laporan kegiatan pengembangan diri mahasiswa kepada Donatur
          Pasif.
      </ol>
      <br/>
    <li class="bold">Periode Donasi </li>
    <div class="text-justify" style="text-indent:35px">
      Donatur Pasif membayarkan donasi minimal satu kali dalam periode 12 bulan terhitung dari Maret {{$data->donorPeriods[0]->period->year}} hingga Desember {{$data->donorPeriods[0]->period->year}}.
    </div>
    {{-- <div class="text-justify" style="text-indent:35px">
      Donatur Pasif membayarkan donasi minimal satu kali dalam periode 12 bulan terhitung dari Januari {{$data->donorPeriods[0]->period->year}} hingga Desember {{$data->donorPeriods[0]->period->year}}.
    </div> --}}
    <br/>
    <li class="bold">Nominal Donasi</li>
    <div class="text-justify" style="text-indent:35px">
      Donatur Pasif memberikan donasi dengan nominal tidak ditetapkan / fleksibel.
    </div>
    <br/>
    <li class="bold">Pembayaran Donasi</li>
     <div class="text-justify" style="text-indent:35px">Donatur Pasif dapat membayarkan donasi pada periode pengumpulan donasi yang dimulai dari tanggal 25 hingga tanggal 5 bulan
    berikutnya ke rekening berikut:</div>
    <br/>
    <table style="border-spacing:0px">
      <tbody>
        <tr>
          <td style="padding-left:35px">Nomor Rekening </td>
          <td style="padding-left:20px">: 0343806044</td>
        </tr>
        <tr>
          <td style="padding-left:35px">Nama Bank</td>
          <td style="padding-left:20px">: BNI</td>
        </tr>
        <tr>
          <td style="padding-left:35px">Cabang</td>
          <td style="padding-left:20px">: Kantor Cabang Kementerian PU</td>
        </tr>
        <tr>
          <td style="padding-left:35px">Nama Pemilik Rekening</td>
          <td style="padding-left:20px">: a.n. Desy Rahayu Hertanti</td>
        </tr>
      </tbody>
    </table>
    <br/>
  </ol>
</body>

</html>
