@component('mail::layout')
@slot('header')
@component('mail::header', ['url' => config('app.url')])
<img class="img-header" src="{{ config('app.url').'/images/Seedlogo2.png'}}">
@endcomponent
@endslot

Hi {{$data['name']}}!

You've been registered as {{$data['department']}} in Seedscholarship family.

With account login as below
@component('mail::panel')<table style="border-spacing:0px">
      <tbody>
        <tr>
          <td style="padding-left:5px">Email</td>
          <td style="padding-left:10px">: {{$data['email']}}</td>
        </tr>
        <tr>
          <td style="padding-left:5px">Password</td>
          <td style="padding-left:10px">: {{$data['password']}}</td>
        </tr>
      </tbody>
    </table>
@endcomponent

Kindly to change your password immediately in forgot password feature to secure your account with click the button below.

{{-- @component('mail::button', ['url' => config('app.url')."/donor#/donation-confirmation"]) --}}
@component('mail::button', ['url' => config('app.url')."/admin#/forgot-password"])
Click here @endcomponent

Terima kasih banyak atas partisipasinya.

Kontribusi anda sangat berharga untuk Department Teknik Sipil UI.

Terimakasih,<br/>

<br/>
<img style="height:5%" src="{{ config('app.url').'/images/heart.png'}}">
<strong>SEED Scholarship</strong>

<div style="text-align:center;margin-bottom:15px;margin-top:50px">Follow IG kami untuk informasi update kegiatan</div>

<a href="https://instagram.com/seedscholarship/" target="_blank"><img style="margin-left:auto;margin-right:auto;display:block" src="{{ config('app.url').'/images/Instagram.png'}}"></a>
<div style="text-align:center"><a href="https://instagram.com/seedscholarship/" target="_blank"><strong>IG: @seedscholarship</strong></a></div>

@slot('footer')
@component('mail::footer')

Anggit Cahyo S’08 : 085697274479 |
Janitra Hendra L’08 : 081290001300
<br/>
Bentuk kontribusi alumni Departemen Teknik Sipil Universitas Indonesia <br/>
© {{ config('app.name') }}, 2014 - 2019 | Oleh Alumni Department Teknik Sipil UI <br/>
EMAIL : hello@seedsholarship.org
seedscholarship.org
@endcomponent
@endslot
@endcomponent
