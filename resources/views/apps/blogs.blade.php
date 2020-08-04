@extends('layout.app')


@section('meta')
<title>Seedscholarship - Blogs Index</title>

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
<header id="intro" class="intro-blog">
  <div class="jumbotron d-flex justify-content-center align-items-center"
    style="background-image:linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),url({{ asset('images/website/header-blog-seedscholarship.jpeg') }})">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-10 mx-auto py-5">
          <h2 class="text-white display-4 font-weight-bold">BLOGS</h2>
          <p class="text-white">Semua cerita tentang Seedscholarship</p>
        </div>
      </div>
    </div>
  </div>
</header>
<div id="content-blog-list" class="mb-3">
  <div class="container">
    <div class="row">
      <div class="col-lg-8 col-md-10 mx-auto">
        {{-- {{dd($item->items()[0])}} --}}

        @foreach ($posts as $v)

        <div class="card mb-3 shadow">
          <div class="row no-gutters">
            <div class="col-md-4">
              <img src="{{
                $v->cover_image?
              url("storage/blog/{$v->id}/cover/{$v->cover_image}"):asset('/images/default-blog-cover.jpg')
              }}" class="card-img" alt="...">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="badge badge-primary mb-0">
                  {{$v->blogCategory->category}}
                </h5>
                <h5 class="card-title font-weight-bold mb-0">{{$v->title}}</h5>
                <p class="card-text d-flex justify-content-between">
                  <small>Oleh: {{$v->authorable->name}}</small>
                  <small class="text-muted">{{
              Carbon\Carbon::parse($v->created_at)->formatLocalized('%d %b %Y')
              }}</small>
                <p class="card-text">{!!str_limit(html_entity_decode($v->body),100)!!}</p>

                <div class="card-text">
                  @foreach ($v->tags as $tag)

                  <span class="badge badge-pill badge-primary"><small> {{$tag->name}}</small> </span>
                  @endforeach
                </div>

              </div>
              <div class="card-footer">
                <div class="text-right">

                <a class="btn btn-outline-secondary btn-sm" href='{{url("blog/{$v->blogCategory->category}/{$v->slug}")}}'>Lanjut Baca</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        @endforeach
{{$posts->links()}}
      </div>
    </div>
  </div>
</div>
@endsection

@section('script')
@include('script.website')
@endsection
