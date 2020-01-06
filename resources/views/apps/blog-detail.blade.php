@extends('layout.app')

@section('meta')
<title>{{$data->title}}</title>
<meta name="description"
content="{!!$data->summary!!}">
<meta name="author" content="{{$data->authorable->name}}">
<meta name="keywords" content="@foreach ($data->tags as $tag)
{{$tag->name}},
@endforeach">
<meta property="og:title" content="{{$data->authorable->name}}" />
<meta property="og:url" content="{{url()->current()}}" />
<meta property="og:description"
content="{!!$data->summary!!}">
<meta property="og:image" content="{{
  $data->cover_image?
url("storage/blog/{$data->id}/cover/{$data->cover_image}"):asset('/images/default-blog-cover.jpg')
}}">
<meta property="og:type" content="Blog" />
@endsection

@section('content')
<header id="intro" class="intro-blog">
  <div class="jumbotron d-flex align-items-center"
    style="background-image:linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),url({{
      $data->cover_image?
    url("storage/blog/{$data->id}/cover/{$data->cover_image}"):asset('/images/default-blog-cover.jpg')
    }})">

    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-10 mx-auto py-5">
          <h2 class="text-white display-4 font-weight-bold">{{$data->title}}</h2>
          <p class="text-white">Dipublikasi oleh : {{$data->authorable->name}} pada tanggal {{
        Carbon\Carbon::parse($data->created_at)->formatLocalized('%d %B %Y')
        }}</p>
          <h5 class="badge badge-primary p-2">
            {{$data->blogCategory->category}}
          </h5>
        </div>
      </div>
    </div>
  </div>
</header>
<div id="content-blog" class="mb-3">
  <div class="container">
    <div class="row">
      <div class="col-lg-8 col-md-10 mx-auto">
        {!!html_entity_decode($data->body)!!}
        <div class="mt-3">
          @foreach ($data->tags as $tag)
          <span class="badge badge-pill badge-primary"><small> {{$tag->name}}</small> </span>
          @endforeach
        </div>
      </div>
    </div>
  </div>
</div>
@endsection

@section('script')
@include('script.website')
@endsection
