<?php

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
 */

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });
Route::group(['prefix' => 'auth'], function () {
    Route::post('login', 'Admin\Auth\AuthController@login');
    Route::post('logout', 'Admin\Auth\AuthController@logout');
    Route::post('register', 'Admin\Auth\AuthController@register');
    Route::post('update', 'Admin\Auth\AuthController@Update');
    Route::get('admin', 'Admin\Auth\AuthController@index');

    Route::post('awardee/login', 'Awardee\Auth\AuthController@login');
    Route::post('awardee/logout', 'Awardee\Auth\AuthController@logout');
    Route::post('awardee/register', 'Awardee\Auth\AuthController@register');
    Route::post('awardee/update', 'Awardee\Auth\AuthController@Update');
    Route::get('awardee', 'Awardee\Auth\AuthController@index');
});
Route::group(['prefix' => 'file'], function () {
    Route::post('blog-cover-image/{blogId}', 'Common\Blog\BlogCoverImageController@store');
    Route::delete('blog-cover-image/{blogId}', 'Common\Blog\BlogCoverImageController@destroy');
    Route::post('blog-cover-image/update/{blogId}', 'Common\Blog\BlogCoverImageController@update');

    Route::post('admin-cover-image/{userId}', 'Admin\User\UserProfilePictureController@store');
    Route::delete('admin-cover-image/{userId}', 'Admin\User\UserProfilePictureController@destroy');
    Route::post('admin-cover-image/update/{userId}', 'Admin\User\UserProfilePictureController@update');


});

Route::apiResource('department', 'Admin\Auth\DepartmentController');
Route::apiResource('awardee-department', 'Awardee\Auth\DepartmentController');
Route::apiResource('blog-category', 'Admin\Blog\BlogCategoryController');
Route::apiResource('blog-tag', 'Admin\Blog\BlogTagController');
Route::apiResource('blog', 'Admin\Blog\BlogController');
Route::apiResource('period', 'Common\PeriodController');
Route::apiResource('user-admin', 'Admin\Auth\UserController');
Route::get('registration-awardee/upload/authorized', 'Awardee\Registration\RegistrationUploadController@authorized');
Route::apiResource('registration-awardee/upload', 'Awardee\Registration\RegistrationUploadController');
Route::post('blog-category/reordering', 'Admin\Blog\BlogCategoryController@reorder');
Route::post('blog-tag/reordering', 'Admin\Blog\BlogTagController@reorder');
