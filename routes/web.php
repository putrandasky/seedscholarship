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
Route::group(['prefix' => 'nonreg'], function () {
    Route::get('/{vue_capture?}', function () {
        return View::make('apps.nonreg');
    })->where('vue_capture', '[\/\w\.-]*');
});
Route::get('/', function () {
    return View::make('apps.website');
});
// Route::get('/', function () {
//     return view('welcome');
// });
