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

Route::get('attachment-contract', 'Donor\File\AttachmentContractController@view');


Route::group([

    'middleware' => 'jwt.verify',

], function ($router) {

Route::group(['prefix' => 'auth'], function () {


    Route::post('admin/me', 'Admin\Auth\AuthController@me');

    Route::post('register', 'Admin\Auth\AuthController@register');
    Route::post('update', 'Admin\Auth\AuthController@Update');
    Route::get('admin', 'Admin\Auth\AuthController@index');

    Route::post('awardee/update', 'Awardee\Auth\AuthController@Update');
    Route::get('awardee', 'Awardee\Auth\AuthController@index');

    Route::post('nonreg/update', 'AwardeeNonreg\Auth\AuthController@Update');
    Route::get('nonreg', 'AwardeeNonreg\Auth\AuthController@index');

    Route::post('donor/update', 'Donor\Auth\AuthController@Update');
    Route::get('donor', 'Donor\Auth\AuthController@index');
});
Route::group(['prefix' => 'file'], function () {
    Route::post('blog-cover-image/{blogId}', 'Common\Blog\BlogCoverImageController@store');
    Route::delete('blog-cover-image/{blogId}', 'Common\Blog\BlogCoverImageController@destroy');
    Route::post('blog-cover-image/update/{blogId}', 'Common\Blog\BlogCoverImageController@update');

    Route::post('admin-cover-image/{userId}', 'Admin\User\UserProfilePictureController@store');
    Route::delete('admin-cover-image/{userId}', 'Admin\User\UserProfilePictureController@destroy');
    Route::post('admin-cover-image/update/{userId}', 'Admin\User\UserProfilePictureController@update');

    Route::get('donor-contract/{userId}','Donor\File\AttachmentContractController@show');
});
Route::apiResource('department', 'Admin\Auth\DepartmentController');
Route::apiResource('blog-category', 'Admin\Blog\BlogCategoryController');
Route::apiResource('blog-tag', 'Admin\Blog\BlogTagController');
Route::apiResource('blog', 'Admin\Blog\BlogController');
Route::apiResource('user-admin', 'Admin\Auth\UserController');
Route::apiResource('user-donor', 'Donor\Auth\UserController');
Route::post('blog-category/reordering', 'Admin\Blog\BlogCategoryController@reorder');
Route::post('blog-tag/reordering', 'Admin\Blog\BlogTagController@reorder');

});

Route::group(['prefix' => 'auth'], function () {
Route::post('login', 'Admin\Auth\AuthController@login');
Route::post('logout', 'Admin\Auth\AuthController@logout');

    Route::post('awardee/login', 'Awardee\Auth\AuthController@login');
    Route::post('awardee/logout', 'Awardee\Auth\AuthController@logout');
    Route::post('awardee/register', 'Awardee\Auth\AuthController@register');

    Route::post('nonreg/login', 'AwardeeNonreg\Auth\AuthController@login');
    Route::post('nonreg/logout', 'AwardeeNonreg\Auth\AuthController@logout');
    Route::post('nonreg/register', 'AwardeeNonreg\Auth\AuthController@register');

    Route::post('donor/login', 'Donor\Auth\AuthController@login');
    Route::post('donor/logout', 'Donor\Auth\AuthController@logout');
    Route::post('donor/register', 'Donor\Auth\RegisterController@newRegister');
    Route::get('donor/contract-agreed', 'Donor\Auth\RegisterController@contractAgreed');
});

Route::apiResource('awardee-department', 'Awardee\Auth\DepartmentController');
Route::apiResource('period', 'Common\PeriodController');
Route::apiResource('scholarship', 'Common\ScholarshipController');
Route::get('registration-awardee/upload/authorized', 'Awardee\Registration\RegistrationUploadController@authorized');
Route::apiResource('registration-awardee/upload', 'Awardee\Registration\RegistrationUploadController');
Route::apiResource('registration-awardee', 'Awardee\Registration\UserController');
Route::get('registration-awardee-nonreg/upload/authorized', 'AwardeeNonreg\Registration\RegistrationUploadController@authorized');
Route::apiResource('registration-awardee-nonreg/upload', 'AwardeeNonreg\Registration\RegistrationUploadController');
Route::apiResource('registration-awardee-nonreg', 'AwardeeNonreg\Registration\UserController');
