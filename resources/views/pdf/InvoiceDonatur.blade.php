<!DOCTYPE html>
@php
function terbilang($nilai)
{
if ($nilai < 0) { $hasil="minus " . trim(penyebut($nilai)); } else { $hasil=trim(penyebut($nilai)); } return $hasil; }
  function penyebut($nilai) { $nilai=abs($nilai); $huruf=array("", "satu" , "dua" , "tiga" , "empat" , "lima" , "enam"
  , "tujuh" , "delapan" , "sembilan" , "sepuluh" , "sebelas" ); $temp="" ; if ($nilai < 12) { $temp=" " .
  $huruf[$nilai]; } else if ($nilai < 20) { $temp=penyebut($nilai - 10) . " belas" ; } else if ($nilai < 100) { $temp=penyebut($nilai
  / 10) . " puluh" . penyebut($nilai % 10); } else if ($nilai < 200) { $temp=" seratus" . penyebut($nilai - 100); }
  else if ($nilai < 1000) { $temp=penyebut($nilai / 100) . " ratus" . penyebut($nilai % 100); } else if ($nilai < 2000)
  { $temp=" seribu" . penyebut($nilai - 1000); } else if ($nilai < 1000000) { $temp=penyebut($nilai / 1000) . " ribu" .
  penyebut($nilai % 1000); } else if ($nilai < 1000000000) { $temp=penyebut($nilai / 1000000) . " juta" .
  penyebut($nilai % 1000000); } else if ($nilai < 1000000000000) { $temp=penyebut($nilai / 1000000000) . " milyar" .
  penyebut(fmod($nilai, 1000000000)); } else if ($nilai < 1000000000000000) { $temp=penyebut($nilai / 1000000000000) .
  " trilyun" . penyebut(fmod($nilai, 1000000000000)); } return $temp; } @endphp <html lang="en">

  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
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

      .font-22 {
        font-size: 22px
      }

      .page-break {
        page-break-after: always;
      }

      ol.alpha {
        list-style-type: lower-alpha;
      }




      .table {
        border-collapse: collapse;
        width: 100%;
        max-width: 100%
      }

      .table-bordered,
      .table-bordered th,
      .table-bordered td {
        border: 1px solid black;
      }

      .p-5 th,
      .p-5 td {
        padding: 3rem;
      }

      .p-1 th,
      .p-1 td {
        padding: 0.25rem;
      }

    </style>
  </head>

  <body style="margin:20px">
    <div>
      <img style="max-height:75px;text-align:center; max-width:100%" src="{{ config('app.url').'/images/Seedlogo2.png'}}">
      <span style="float:right;border-style:solid;padding:5px 40px">{{$donor->donorTransactions[0]->invoice_no}}</span>
    </div>

    <div class="text-center">
      <strong class="font-22">BUKTI PENERIMAAN DONASI</strong>
    </div>
    <br>
    <div>
      <table>
        <tbody>
          <tr>
            <td>No Kontrak</td>
            <td style="padding-left:30px">: {{$donor->periods[0]->pivot->contract_number}}</tdc>
          </tr>
          <tr>
            <td>Nama Donatur</td>
            <td style="padding-left:30px">: {{$donor->name}}</td>
          </tr>
          <tr>
            <td>Kategori Donatur</td>
            <td style="padding-left:30px">: {{$donor->periods[0]->pivot->donation_category}}</td>
          </tr>
          {{-- <tr>
            <td>No. Bukti Pembayaran</td>
            <td style="padding-left:30px">: </td>
          </tr> --}}
        </tbody>
      </table>
    </div>
    <br>
    <div style="padding:0px 30px">
      <table class="table table-bordered p-1">
        <tbody>
          <tr>
            <td style="width:250px">Tanggal Donasi</td>
            <td style="padding-left:30px;font-weight:bold">{{Carbon\Carbon::parse($donor->donorTransactions[0]->trx_date)->format('d
              F Y')}}</td>
          </tr>
          <tr>
            <td style="width:250px">Jumlah Donasi</td>
            <td style="padding-left:30px;font-weight:bold">Rp
              {{number_format($donor->donorTransactions[0]->amount,0,",",".")}},-
              ({{ucwords(terbilang($donor->donorTransactions[0]->amount))}} Rupiah)</td>
          </tr>
        </tbody>
      </table>
    </div>
    <br>
    <div>
      <table style="width:200px">
        <tbody>
          <tr>
            <td class="text-center">Kepala Keuangan</td>
          </tr>
          <tr>
            <td style="height:80px;text-align:center">
              <img style="height:100px" src="{{ config('app.url').'/images/sign-hf.png'}}"> </td>
          </tr>
          <tr>
            <td class="text-center">Zoraya Rahmi</td>
          </tr>
        </tbody>
      </table>
    </div>
    <br>
    <small class="italic" style="color:grey">We exist to lighten and motivate students to reach the excellence in
      education</small>
  </body>

  </html>
