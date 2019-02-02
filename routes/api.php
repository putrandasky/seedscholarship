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
});
Route::group(['prefix' => 'file'], function () {
    Route::post('blog-cover-image/{blogId}', 'Common\Blog\BlogCoverImageController@store');
    Route::apiResource('blog-cover-image', 'Common\Blog\BlogCoverImageController');
});

Route::apiResource('department', 'Admin\Auth\DepartmentController');
Route::apiResource('blog-category', 'Admin\Blog\BlogCategoryController');
Route::apiResource('blog-tag', 'Admin\Blog\BlogTagController');
Route::apiResource('blog', 'Admin\Blog\BlogController');
Route::post('blog-category/reordering', 'Admin\Blog\BlogCategoryController@reorder');
Route::post('blog-tag/reordering', 'Admin\Blog\BlogTagController@reorder');
