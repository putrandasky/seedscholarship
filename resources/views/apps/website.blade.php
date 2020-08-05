@extends('layout.app')


@section('meta')
<title>Seedscholarship</title>

<meta name="description" content="Seedscholarship - Bentuk kontribusi alumni Departement Teknik Sipil Universitas Indonesia">
<meta name="author" content="Radityo Putra Paripurna">
<meta name="keywords" content="seedscholarship beasiswa teknik sipil universitas indonesia">
<meta property="og:title" content="Seedscholarship" />
<meta property="og:url" content="https:/seedscholarship.org" />
<meta property="og:description" content="Seedscholarship - Bentuk kontribusi alumni Departement Teknik Sipil Universitas Indonesia">
<meta property="og:image" content="{{ asset('images/screenshot-web-seeds.png') }}">
<meta property="og:type" content="landing page" />
@endsection

@section('content')
<section id="intro" class="intro-homepage">
  <div class="jumbotron d-flex justify-content-center align-items-center text-center" style="background-image:linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),url({{ asset('images/website/main-bg-1.jpeg') }})">
    <div>
      <h2 class="text-white display-4 font-weight-bold">HIDUP UNTUK BELAJAR DAN MENGABDI</h2>
      <p class="text-white mx-md-5 px-md-5">Seed Scholarship merupakan bentuk kontribusi alumni Departemen Teknik Sipil
        Universitas Indonesia,
        bertujuan untuk meringankan dan memotivasi mahasiswa untuk mencapai keunggulan dalam pendidikan serta
        membantu mahasiswa melalui tahun pertama di perguruan tinggi</p>
      {{-- <button class="btn btn-primary">Mulai Berdonasi</button> --}}
    </div>
  </div>
</section>
<section id="about-us" class="
parallax" style="background-image:linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)),url({{ asset('images/website/about-bg.jpg') }})">
  <div class="container py-5">
    <header class="text-center mb-5">
      <h2 class="font-weight-bold">Tentang kami</h2>
      <p>Sebuah organisasi yang beranggotakan alumni dari Departemen Teknik Sipil yang menjembatani antara alumni dengan
        mahasiswa baru departemen Teknik Sipil</p>
    </header>
    <div class="row">
      <div class="col-md-4 mb-3">
        <div class="card shadow h-100">
          <img src="{{ asset('images/website/about-vision.jpg') }}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title font-weight-bold text-center">Visi Kami</h5>
            <p class="card-text">
              Membantu meningkatkan kualitas mahasiswa DTS UI
            </p>
          </div>
        </div>
      </div>
      <div class="col-md-4 mb-3">
        <div class="card shadow h-100">
          <img src="{{ asset('images/website/about-mission.jpg') }}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title font-weight-bold text-center">Misi Kami</h5>
            <p class="card-text">
              Meringankan dan memotivasi mahasiswa untuk meraih pendidikan yang berkualitas
            </p>
          </div>
        </div>
      </div>
      <div class="col-md-4 mb-3">
        <div class="card shadow h-100">
          <img src="{{ asset('images/website/about-plan.jpg') }}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title font-weight-bold text-center">Rencana Kami</h5>
            <p class="card-text">Memberikan beasiswa untuk mahasiswa semester 2 & 3 dan mengadakan soft-skills sharing
              untuk membantu mereka melewati tahun pertama kuliah.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<section id="activities">
  <div class="container py-5">
    <header class="text-center mb-5">
      <h2 class="font-weight-bold">YANG KAMI LAKUKAN</h2>
      <p>Berikut adalah apa yang kami lakukan kepada para <em>Awardee</em> Seedscholarship.</p>
    </header>
    <div class="row">
      <div class="col-lg-4 col-md-6 mb-5">
        <div class="media">
          <i class="fa fa-users text-primary mr-3 fa-2x"></i>
          <div class="media-body">
            <h5 class="mt-0 font-weight-bold">Mentoring</h5>
            <small class="font-weight-light">
              Salah satu rangkaian kegiatan pengembangan <em>soft-skills</em> para <em>awardee</em> yang bertujuan untuk
              meningkatkan kemampuan adaptasi para <em>awardee</em> di Perguruan Tinggi. Kegiatan ini menekankan pada
              kegiatan diskusi antara <em>awardee</em> dengan para mentor yang merupakan
              pengurus SEEDS
            </small>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-md-6 mb-5">
        <div class="media">
          <i class="fa fa-lightbulb-o text-primary mr-3 fa-2x"></i>
          <div class="media-body">
            <h5 class="mt-0 font-weight-bold">Kewirausahaan</h5>
            <small class="font-weight-light">
              {{-- Kegiatan yang diadakan untuk memaparkan bagaimana proses dan pengalaman berwirausaha oleh para alumni DTS
              UI dengan harapan para <em>Awardee</em> bisa menjadi enterpreneur muda dan mandiri untuk di masa mendatang --}}
              Kegiatan yang diadakan untuk memberikan wawasan kepada <em>Awardee</em> bagaimana cara memulai bisnis
              hingga tips untuk berbisnis. Harapan kegiatan ini agar <em>Awardee</em> dapat merencanakan ide bisnis
              inovatif di kemudian hari
            </small>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-md-6 mb-5">
        <div class="media">
          <i class="fa fa-comments-o text-primary mr-3 fa-2x"></i>
          <div class="media-body">
            <h5 class="mt-0 font-weight-bold">Sharing Session</h5>
            <small class="font-weight-light">
              Salah satu kegiatan pengembangan <em>soft-skills</em> para <em>awardee</em> yang menekankan menceritakan
              pengalaman para Alumni DTS UI yang meraih prestasi sesuai dengan minat dan bakat
            </small>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-md-6 mb-5">
        <div class="media">
          <i class="fa fa-bullhorn text-primary mr-3 fa-2x"></i>
          <div class="media-body">
            <h5 class="mt-0 font-weight-bold">Public Speaking</h5>
            <small class="font-weight-light">
              Kegiatan yang dilakukan untuk memberikan informasi dan pemaparan terkait kiat-kiat dalam melakukan
              <em>public speaking</em> dan membuat <em>strategic narrative</em> sebagai pengembangan diri untuk melatih
              <em>public speaking</em> masing-masing <em>Awardee</em>
            </small>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-md-6 mb-5">
        <div class="media">
          <i class="fa fa-book text-primary mr-3 fa-2x"></i>
          <div class="media-body">
            <h5 class="mt-0 font-weight-bold">IELTS Training</h5>
            <small class="font-weight-light">
              Kegiatan training yang dilakukan untuk meningkatkan kemampuan berbahasa inggris para <em>Awardee</em>
              sebagai pembekalan berbahasa dalam menghadapi persaingan dunia internasional
            </small>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-md-6 mb-5">
        <div class="media">
          <i class="fa fa-dollar text-primary mr-3 fa-2x text-primary"></i>
          <div class="media-body">
            <h5 class="mt-0 font-weight-bold">Bantuan Dana</h5>
            <small class="font-weight-light">
              Memberikan bantuan dana kepada Mahasiswa Semester 2 dan 3 dengan tujuan untuk meringankan beban biaya
              kuliah dan biaya hidup para <em>Awardee</em> dengan harapan para <em>Awardee</em> bisa lebih berfokus pada
              perkuliahan.
            </small>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section id="achievement" class="parallax" style="background-image:linear-gradient(rgba(255,255,255, 0.8), rgba(255,255,255, 0.8)),url({{ asset('images/website/achievement-bg.jpg') }})">
  <div class="container py-5">
    <header class="text-center mb-5">
      <h2 class="font-weight-bold">Pencapaian Kami</h2>
      <p>Ini adalah apa yang sudah kita capai dan akan terus berkembang.</p>
    </header>
    <div class="row text-center">
      <div class="col-lg-3 col-6">
        <h3 class="display-4 text-primary font-weight-bold count">5</h3>
        <p>Periode</p>
      </div>
      <div class="col-lg-3 col-6">
        <h3 class="display-4 text-primary font-weight-bold count">200</h3>
        <p>Pengurus</p>
      </div>
      <div class="col-lg-3 col-6">
        <h3 class="display-4 text-primary font-weight-bold count">500</h3>
        <p>Donatur</p>
      </div>
      <div class="col-lg-3 col-6">
        <h3 class="display-4 text-primary font-weight-bold count">50</h3>
        <p>Awardee</p>
      </div>
    </div>
  </div>
</section>

<section id="statistic">
  <div class="container my-5">
    <header class="text-center mb-5">
      <h2 class="font-weight-bold">Statistik Kontribusi Angkatan</h2>
      <p>Kontribusi angkatan DTS UI dalam mendukung Seedscholarship.</p>
    </header>
    <div class="progress mb-3" style="height: 35px;">
      <div class="progress-bar px-3" role="progressbar" style="width: 60%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
        <div class="d-flex justify-content-between">
          <span>1984-2008</span>
          <span>60%</span>
        </div>
      </div>
    </div>
    <div class="progress mb-3" style="height: 35px;">
      <div class="progress-bar px-3" role="progressbar" style="width: 15%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
        <div class="d-flex justify-content-between">
          <span>2009-2010</span>
          <span>15%</span>
        </div>
      </div>
    </div>
    <div class="progress mb-3" style="height: 35px;">
      <div class="progress-bar px-3" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
        <div class="d-flex justify-content-between">
          <span>2011-2013</span>
          <span>25%</span>
        </div>
      </div>
    </div>
  </div>
</section>


<section id="call-to-action" class="
parallax text-white" style="background-image:linear-gradient(rgba(51, 122, 183, 0.9)0%, rgba(51, 122, 183, 1)100%),url({{ asset('images/website/cta-bg.jpg') }})">
  <div class="container py-5">
    <header class="text-center mb-5">
      <h2 class="font-weight-bold">Bergabung Menjadi Keluarga Besar Kami</h2>
      <p>Bergabunglah bersama kami, karena kontribusi anda sangat berharga, apapun peran anda.</p>
    </header>
    <div class="row d-flex  justify-content-center ">
      <a class="btn btn-outline-light mx-3 mb-1" href="/daftar-awardee">Daftar Awardee</a>
      <a class="btn btn-outline-light mx-3 mb-1" href="/daftar-donatur">Daftar Donatur</a>
      <a class="btn btn-outline-light mx-3 mb-1" href="#">Daftar Pengurus</a>
    </div>
  </div>
</section>


<section id="blog">

  <div class="px-2 my-5">
    <header class="text-center mb-5">
      <h2 class="font-weight-bold">Blog</h2>
    </header>
    <div class="row">
      @foreach ($blogs as $blog)
      <div class="col-lg-3 col-sm-6 mb-3">
        <div class="card shadow  h-100">
          <img src="{{
            $blog->cover_image?
            url("storage/blog/{$blog->id}/cover/{$blog->cover_image}"):asset('/images/default-blog-cover.jpg')
          }}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="badge badge-primary mb-1">{{$blog->blogCategory->category}}</h5>
            <h5 class="card-title font-weight-bold mb-1">{{$blog->title}}</h5>
            <p class="card-text d-flex justify-content-between">
              <small>Oleh: {{$blog->authorable->name}}</small>
              <small class="text-muted">{{Carbon\Carbon::parse($blog->created_at)->formatLocalized('%d %b %Y')}}</small>
            </p>
            <p class="card-text">{!!str_limit(html_entity_decode($blog->body),100)!!}</p>
            <div class="card-text">
              @foreach ($blog->tags as $tag)

              <span class="badge badge-pill badge-primary"><small> {{$tag->name}}</small> </span>
              @endforeach
            </div>
          </div>
          <div class="card-footer ">
            <div class="text-right">
              <a href='{{url("blog/{$blog->blogCategory->category}/{$blog->slug}")}}' class="btn btn-outline-secondary btn-sm">Lanjut Baca</a>
            </div>
          </div>
        </div>
      </div>
      @endforeach
    </div>
</section>
<section id="testimonials">
  <div class=" bg-light">

    <div class="container py-5">
      <header class="text-center mb-5">
        <h2 class="font-weight-bold">Testimonials</h2>
      </header>
      <div class="my-slider">

        <div class="text-center">
          <img style="width:120px" src="{{ asset('images/website/testimonial-1.jpeg') }}" class="testimonial-img rounded-circle img-thumbnail" alt="">
          <blockquote class="blockquote text-center">
            <p class="mb-0">"SEED bukan hanya membantu dengan materi. Namun juga dalam pengembangan diri setiap orang"</p>
            <footer class="blockquote-footer">Widi <cite title="Source Title">DTS 2016</cite></footer>
          </blockquote>
        </div>
        <div class="text-center">
          <img style="width:120px" src="{{ asset('images/website/testimonial-2.jpeg') }}" class="testimonial-img rounded-circle img-thumbnail" alt="">
          <blockquote class="blockquote text-center">
            <p class="mb-0">"SEED membantu saya untuk lebih tahu dunia Teknik Sipil seperti apa melalui sharing alumni-alumni DTS UI"</p>
            <footer class="blockquote-footer">Munif <cite title="Source Title">DTS 2016</cite></footer>
          </blockquote>
        </div>
        <div class="text-center">
          <img style="width:120px" src="{{ asset('images/website/testimonial-3.jpeg') }}" class="testimonial-img rounded-circle img-thumbnail" alt="">
          <blockquote class="blockquote text-center">
            <p class="mb-0">"SEED patut diapresiasi karena membantu mahasiswa berkembang dan merasa siap untuk menghadapi dunia kerja."</p>
            <footer class="blockquote-footer">Amel <cite title="Source Title">DTS 2016</cite></footer>
          </blockquote>
        </div>
        <div class="text-center">
          <img style="width:120px" src="{{ asset('images/website/testimonial-4.jpeg') }}" class="testimonial-img rounded-circle img-thumbnail" alt="">
          <blockquote class="blockquote text-center">
            <p class="mb-0">"Beasiswa ini membantu keuangan saya dan dengan SEED solidnya alumni DTS UI sangat terlihat."</p>
            <footer class="blockquote-footer">Erdwin <cite title="Source Title">DTS 2016</cite></footer>
          </blockquote>
        </div>
      </div>
    </div>
  </div>
</section>
<section id="team-member">

  <div class="container my-5">
    <header class="text-center mb-5">
      <h2 class="font-weight-bold">Badan Pengurus Harian SEEDS</h2>
    </header>
    <div class="row d-flex justify-content-center ">
      @foreach ($teams as $team)
      @foreach ($team->roles as $role)
      @foreach ($role->admins as $admin)
      <div class="col-lg-3 col-sm-6 ">
        <div class="card shadow mb-3">
          <img src="{{$admin->photo?url("/storage/user/{$admin->id}/profile-picture/{$admin->photo}"):asset('/images/default-user.jpg')
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
      @endforeach
      @endforeach
    </div>
  </div>
</section>

@endsection

@section('script')
@include('script.website')
@endsection
