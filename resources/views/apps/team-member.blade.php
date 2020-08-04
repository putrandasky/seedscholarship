@extends('layout.app')
@section('meta')
<title>Seedscholarship - Pengurus</title>

  <meta name="description"
    content="Seedscholarship - Bentuk kontribusi alumni Departement Teknik Sipil Universitas Indonesia">
  <meta name="author" content="Radityo Putra Paripurna">
  <meta name="keywords" content="seedscholarship beasiswa teknik sipil universitas indonesia">
  <meta property="og:title" content="Seedscholarship" />
  <meta property="og:url" content="https:/seedscholarship.org" />
  <meta property="og:description"
    content="Seedscholarship - Bentuk kontribusi alumni Departement Teknik Sipil Universitas Indonesia">
  <meta property="og:image" content="{{ asset('images/Seedlogo.png') }}">
  <meta property="og:type" content="landing page" />
@endsection

@section('content')
<header id="intro" class="intro-team">
  <div class="jumbotron d-flex justify-content-center align-items-center" style="background-image:linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),url({{ asset('images/website/header-team-member-seedscholarship.jpeg') }})">
    <div class="my-5 py-5">
      <h2 class="text-white display-4 font-weight-bold text-center">PENGURUS SEED SCHOLARSHIP</h2>
    </div>
  </div>
</header>
<div id="content-team" class="mb-3">
  <div class="container">
    @foreach ($teams as $team)
    <header class="text-center my-3">
      <h2 class="font-weight-bold">{{$team->department}}</h2>
    </header>
    @foreach ($team->roles as $role)

    <div class="row mb-3">
      @foreach ($role->admins as $admin)

      <div class="col-lg-3 col-sm-6 mx-auto mb-2">
        <div class="card shadow">
          <img src="{{
            $admin->photo?
          url("/storage/user/{$admin->id}/profile-picture/{$admin->photo}"):asset('/images/default-user.jpg')
          }}" class="card-img-top" alt="...">
          <div class="card-body">
            <p class="card-text text-center h6 text-primary font-weight-bold"><em>{{$role->name}}</em></p>
          <p class="card-title text-center h6 mb-0">{{$admin->name}}</p>
            <p class="card-text text-center text-muted">
              <small>{{$admin->year}}</small>
            </p>
          </div>
        </div>
      </div>
      @endforeach

    </div>
    @endforeach
    @endforeach
{{--
    <header class="text-center my-3">
      <h2 class="font-weight-bold">Chairman</h2>
    </header>
    <div class="row">
      <div class="col-lg-3 col-sm-6 mx-auto">
        <div class="card shadow">
          <img src="{{ asset('images/website/team-1.jpg') }}" class="card-img-top" alt="...">
          <div class="card-body">
            <p class="card-text text-center h6 text-primary font-weight-bold"><em> Head of Seedscholarship</em></p>
            <p class="card-title text-center h6 mb-0">Anggit Cahyo</p>
            <p class="card-text text-center text-muted">
              <small>Sipil 2008</small>
            </p>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-sm-6 mx-auto">
        <div class="card shadow">
          <img src="{{ asset('images/website/team-1.jpg') }}" class="card-img-top" alt="...">
          <div class="card-body">
            <p class="card-text text-center h6 text-primary font-weight-bold"><em> Head of Seedscholarship</em></p>
            <p class="card-title text-center h6 mb-0">Anggit Cahyo</p>
            <p class="card-text text-center text-muted">
              <small>Sipil 2008</small>
            </p>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-sm-6 mx-auto">
        <div class="card shadow">
          <img src="{{ asset('images/website/team-1.jpg') }}" class="card-img-top" alt="...">
          <div class="card-body">
            <p class="card-text text-center h6 text-primary font-weight-bold"><em> Head of Seedscholarship</em></p>
            <p class="card-title text-center h6 mb-0">Anggit Cahyo</p>
            <p class="card-text text-center text-muted">
              <small>Sipil 2008</small>
            </p>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-sm-6 mx-auto">
        <div class="card shadow">
          <img src="{{ asset('images/website/team-1.jpg') }}" class="card-img-top" alt="...">
          <div class="card-body">
            <p class="card-text text-center h6 text-primary font-weight-bold"><em> Head of Seedscholarship</em></p>
            <p class="card-title text-center h6 mb-0">Anggit Cahyo</p>
            <p class="card-text text-center text-muted">
              <small>Sipil 2008</small>
            </p>
          </div>
        </div>
      </div>
    </div> --}}
  </div>
</div>
@endsection

@section('script')
@include('script.website')
@endsection
