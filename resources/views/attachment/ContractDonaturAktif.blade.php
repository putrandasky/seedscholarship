<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{{$data->periods[0]->pivot->contract_number}}</title>
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
  <div class="text-center font-14">Nomor: {{$series}}/SEEDS/DA/{{$data->periods[0]->year}}</div>
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
      Donatur Aktif yang disampaikan oleh:
    </div>
    <br />
    <div class="text-center">
    <div class="bold">{{$data->name}}</div>
      <div class="italic font-14">(Selanjutnya disebut “Donatur Aktif)</div>
      NO. KONTRAK : {{$data->periods[0]->pivot->contract_number}}
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
    <div>Jakarta, {{Carbon\Carbon::parse($data->periods[0]->pivot->created_at)->format('d-F-Y')}}</div>
    <img style="max-height:100px; max-width:100%" src="{{ config('app.url').'/images/sign-ketua-biru.jpeg'}}">
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
    <li class="bold">Rincian Donatur Aktif</li>
    <table style="border-spacing:0px">
      <tbody>
        <tr>
          <td>No Kontrak</td>
          <td style="padding-left:20px">: {{$data->periods[0]->pivot->contract_number}}</td>
        </tr>
        <tr>
          <td>Nama</td>
          <td style="padding-left:20px">: {{$data->name}}</td>
        </tr>
        <tr>
          <td>Alumni Program Studi</td>
          <td style="padding-left:20px">: {{$data->awardeeDepartment->department}}</td>
        </tr>
        <tr>
          <td>Angkatan</td>
          <td style="padding-left:20px">: {{$data->year}}</td>
        </tr>
        <tr>
          <td>Status</td>
          <td style="padding-left:20px">: Donatur Aktif</td>
        </tr>
        <tr>
          <td>Terdaftar pada tanggal</td>
          <td style="padding-left:20px">: {{Carbon\Carbon::parse($data->periods[0]->pivot->created_at)->format('d F Y')}}</td>
        </tr>
        <tr>
          <td>Total Donasi</td>
          <td style="padding-left:20px">: Rp {{number_format($data->periods[0]->pivot->amount,0,",",".")}},-</td>
        </tr>
      </tbody>
    </table>
    <br/>
    <li class="bold">Hak dan Kewajiban Donatur Aktif</li>
      <ol class="alpha">
        <li class="text-justify">Berhak menerima laporan keuangan dan laporan kegiatan pengembangan diri mahasiswa dari Pengurus SEED
          Scholarship</li>
        <li class="text-justify">Berkewajiban untuk membayarkan donasi tepat waktu dan melakukan konfirmasi pembayaran dengan mengirimkan bukti pembayaran
        kepada Ketua Pengurus SEED Scholarship.</li>
      </ol>
      <br/>
    <li class="bold">Hak dan Kewajiban Ketua Pengurus SEED Scholarship</li>
      <ol class="alpha">
        <li class="text-justify">Berhak menagih dan menerima pembayaran donasi dari Donatur Aktif;</li>
        <li class="text-justify">Berkewajiban menyampaikan laporan keuangan dan laporan kegiatan pengembangan diri mahasiswa kepada Donatur Aktif.
      </ol>
      <br/>
    <li class="bold">Periode Donasi </li>
    <div class="text-justify" style="text-indent:35px">
    Donatur Aktif membayarkan donasi sebesar <strong>Rp {{number_format($data->periods[0]->pivot->amount / 12,0,",",".")}},-</strong> setiap bulan selama 12 bulan terhitung dari Januari {{$data->periods[0]->year}} hingga Desember {{$data->periods[0]->year}}
    </div>
    <br/>
    <li class="bold">Pembayaran Donasi</li>
     <div class="text-justify" style="text-indent:35px">Donatur Aktif dapat membayarkan donasi setiap bulannya mulai dari tanggal 25 hingga tanggal 5 bulan berikutnya ke rekening
    berikut:</div>
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
