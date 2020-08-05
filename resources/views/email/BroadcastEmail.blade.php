@component('mail::layout')
@slot('header')
@component('email.header')
@endcomponent
@endslot
<style>
  p{
    margin-bottom: 0;
  }
</style>

@php
echo htmlspecialchars_decode($broadcast['content'])
@endphp

<img style="height:5%" src="{{ config('app.url').'/images/heart-small.png'}}">
<strong>SEED Scholarship</strong>

<div style="text-align:center;margin-bottom:15px;margin-top:50px">Follow IG kami untuk informasi update kegiatan</div>

<a href="https://instagram.com/seedscholarship/" target="_blank">
  <img style="margin-left:auto;margin-right:auto;display:block" src="{{ config('app.url').'/images/Instagram.png'}}">
</a>
<div style="text-align:center">
  <a href="https://instagram.com/seedscholarship/" target="_blank">
    <strong>IG: @seedscholarship</strong>
  </a>
</div>

@slot('footer')
@component('email.footer',['cp_email'=> $cp_email])
@endcomponent
@endslot
@endcomponent
