<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">

<head>
  <title>Seedscholarship - Donatur</title>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="Seedscholarship - Bentuk kontribusi alumni Departement Teknik Sipil Universitas Indonesia">
  <meta name="author" content="Radityo Putra Paripurna">
  {{-- <meta name="keywords" content="Smart Meeting Action Register Tracker"> --}}
  <meta property="og:title" content="Seedscholarship" />
   <meta property="og:url" content="https:/seedscholarship.org" />
  <meta property="og:description" content="Seedscholarship - Bentuk kontribusi alumni Departement Teknik Sipil Universitas Indonesia">
  <meta property="og:image" content="{{ asset('images/Seedlogo.png') }}">
  <meta property="og:type" content="website" />
  <!-- Favicon -->
  <link type="image/png" href="{{ asset('images/logo.png') }}" rel="icon">
  <!-- Fonts -->
  <link href="https://fonts.googleapis.com/css?family=Heebo" rel="stylesheet">

  {{-- <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet"> --}}
  {{--
  <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet"> --}}

  <!-- CSRF Token -->
  <meta name="csrf-token" content="{{ csrf_token() }}">

  {{-- <title>{{ config('app.name', 'Laravel') }}</title> --}}
  {{-- <style>
    body {
      font-family: 'Heebo', sans-serif !important;
    }
  </style> --}}

</head>

<body>

  @yield('content')

  @yield('script')

</body>

</html>
