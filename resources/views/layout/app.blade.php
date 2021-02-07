<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">

<head>
  {{-- <title>Seedscholarship</title> --}}
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  @yield('meta')
  {{-- <meta name="description"
    content="Seedscholarship - Bentuk kontribusi alumni Departement Teknik Sipil Universitas Indonesia">
  <meta name="author" content="Radityo Putra Paripurna">
  <meta name="keywords" content="Smart Meeting Action Register Tracker">
  <meta property="og:title" content="Seedscholarship" />
  <meta property="og:url" content="https:/seedscholarship.org" />
  <meta property="og:description"
    content="Seedscholarship - Bentuk kontribusi alumni Departement Teknik Sipil Universitas Indonesia">
  <meta property="og:image" content="{{ asset('images/Seedlogo.png') }}">
  <meta property="og:type" content="website" /> --}}
  <!-- Favicon -->
  <link type="image/png" href="{{ asset('images/logo.png') }}" rel="icon">
  <!-- Fonts -->
  <link href="https://fonts.googleapis.com/css?family=Roboto:300,300i,400,400i,700,700i|Titillium+Web:300,400,500,700"
    rel="stylesheet">

  <!-- Bootstrap CSS File -->

  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
    integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
  <!-- Libraries CSS Files -->
  <link href="{{ asset('vendor/font-awesome/css/font-awesome.css') }}" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.2/tiny-slider.css">
<!--[if (lt IE 9)]><script src="https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.2/min/tiny-slider.helper.ie8.js"></script><![endif]-->
  <!-- Main Stylesheet File -->
  <link href="{{ asset('website/css/style.css') }}" rel="stylesheet">
  <!-- CSRF Token -->
  <meta name="csrf-token" content="{{ csrf_token() }}">

</head>

<body>
  <nav id="main-navbar" class="navbar navbar--ontop fixed-top bg-dark px-md-5">
    <a class="navbar-brand" href="{{url("")}}">
      <img src="{{ asset('images/Seedlogo-small.png') }}" alt="">
    </a>
      <div class="nav justify-content-end d-none d-md-flex">
        <a class="nav-link {{ (request()->is('/')) ? 'active' : '' }} "href="{{url("")}}">Home</a>
        <a class="nav-link {{ (request()->is('blogs')) ? 'active' : '' }}" href="{{url("blogs")}}">Blog</a>
        <a class="nav-link {{ (request()->is('team')) ? 'active' : '' }} " href="{{url("team")}}">Pengurus</a>
        {{-- <a class="nav-link" href="#call-to-action">Daftar</a> --}}
      </div>
      <ul class="nav justify-content-end d-flex d-md-none">
        <button type="button" id="mobile-nav-button">
          <i class="fa fa-bars"></i>
        </button>
      </ul>
  </nav>
  <div id="mobile-sidebar" class="text-white">
    <nav class="nav flex-column">
      <a class="nav-link {{ (request()->is('/')) ? 'active' : '' }} "href="{{url("")}}">Home</a>
      <a class="nav-link {{ (request()->is('blogs')) ? 'active' : '' }}" href="{{url("blogs")}}">Blog</a>
      <a class="nav-link {{ (request()->is('team')) ? 'active' : '' }} " href="{{url("team")}}">Pengurus</a>

    </nav>
</div>
<div id="mobile-overlay">
  <button type="button"  id="mobile-nav-button-close">
    <i class="fa fa-times"></i>
  </button>
</div>
  @yield('content')
  <footer id="footer">
    <div class=" bg-dark">
      <div class="container-lg py-5">
        <div class="row ">
          <div class="col-sm-6 mb-3 ">
            <div class="row d-flex align-items-center px-3">
              <div class="col-md-4 ">
                <img src="{{ asset('images/Seedlogo-small.png') }}" class="mb-3" alt="...">
              </div>
              <div class="col-md-8 d-flex align-items-center ">
                <div class="text-white ml-0 ml-md-3">
                  Bentuk kontribusi alumni Departemen Teknik Sipil Universitas Indonesia
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-6 text-white">
            <div class=" ml-3 ml-lg-0 px-3 border-left">

              <P class="h5">CONTACT PERSON</P>
              <p class="mb-1">Irvan T S’08 : 0898-9873-043</p>
              <p class="mb-1">Fadhilah S’08 : 0812-9856-8800</p>
            </div>
          </div>


        </div>
      </div>
    </div>
    <div class="credits text-center py-3 text-secondary">
      © SEED Scholarship, 2014 - @php
          echo date("Y")
      @endphp | Oleh Alumni Department Teknik Sipil UI
    </div>
  </footer>
  @yield('script')

</body>

</html>
