<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
 */
Route::get('/', 'Main\WebsiteController@homePage');
Route::get('/blogs', 'Main\BlogController@index');
Route::get('/blog/{category}/{slug}', 'Main\BlogController@show');
Route::get('/team', 'Main\TeamMemberController@index');
// Route::redirect('/', '/donor#/register');
Route::redirect('/admin-login', '/admin#/login');
Route::redirect('/daftar-awardee', '/awardee#/register');
Route::redirect('/daftar-beasiswa', '/scholarship#/register');
Route::redirect('/daftar-donatur', '/donor#/register');

Route::group(['prefix' => 'awardee'], function () {
    Route::get('/{vue_capture?}', function () {
        return View::make('apps.awardee');
    })->where('vue_capture', '[\/\w\.-]*');
});
Route::group(['prefix' => 'admin'], function () {
    Route::get('/{vue_capture?}', function () {
        return View::make('apps.admin');
    })->where('vue_capture', '[\/\w\.-]*');
});
Route::group(['prefix' => 'scholarship'], function () {
    Route::get('/{vue_capture?}', function () {
        return View::make('apps.nonreg');
    })->where('vue_capture', '[\/\w\.-]*');
});
Route::group(['prefix' => 'donor'], function () {
    Route::get('/{vue_capture?}', function () {
        return View::make('apps.donor');
    })->where('vue_capture', '[\/\w\.-]*');
});

Route::group(['prefix' => 'auth'], function () {
    Route::post('forgot/password/{account_type}', 'Auth\ForgotPasswordController@SendResetLink');
    Route::get('reset/password', 'Auth\ResetPasswordController@hasResetToken');
    Route::post('reset/password/{account_type}', 'Auth\ResetPasswordController@ResetPassword');

});
Route::get('/{path}', 'Admin\Setting\UrlRedirectionController@redirect');

// Route::get('/', function () {
//     return View::make('apps.website');
// });

// Route::get('mail', function () {

//     $markdown = new Markdown(view(), config('mail.markdown'));

//     return $markdown->render('email.DonorReminderDonation');
//     // return $markdown->render('email.DonorPostRegistered');
// });

// Route::get('/', function () {
//     return view('welcome');
// });
