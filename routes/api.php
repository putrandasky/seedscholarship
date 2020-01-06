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
Route::get('test/sendreminder', 'TestController@sendreminder');

Route::group([

    'middleware' => 'jwt.verify',

], function ($router) {

    Route::group(['prefix' => 'admin'], function () {
        Route::group(['prefix' => 'auth'], function () {
            Route::get('department/{department_id}/role', 'Admin\Auth\RoleController@index');
            Route::post('role', 'Admin\Auth\RoleController@store');
            Route::get('role/{role_id}', 'Admin\Auth\RoleController@show');
            Route::patch('role/{role_id}', 'Admin\Auth\RoleController@update');
            Route::delete('role/{role_id}', 'Admin\Auth\RoleController@destroy');

            Route::get('permissions', 'Admin\Auth\PermissionController@index');
            Route::get('permissions/{role_id}', 'Admin\Auth\PermissionController@show');
            Route::post('permissions', 'Admin\Auth\PermissionController@store');
            Route::patch('permissions/{role_id}', 'Admin\Auth\PermissionController@update');

        });
        Route::group(['prefix' => 'setting'], function () {
            Route::get('general', 'Admin\Setting\SettingController@index');
            Route::post('general', 'Admin\Setting\SettingController@store');

            Route::get('period', 'Admin\Setting\PeriodController@index');
            Route::post('period', 'Admin\Setting\PeriodController@store');
            Route::patch('period/active/{id}', 'Admin\Setting\PeriodController@active');
            Route::patch('period/{id}', 'Admin\Setting\PeriodController@update');

            Route::get('scholarship', 'Admin\Setting\ScholarshipController@index');
            Route::post('scholarship', 'Admin\Setting\ScholarshipController@store');
            Route::patch('scholarship/active/{id}', 'Admin\Setting\ScholarshipController@active');
            Route::patch('scholarship/{id}', 'Admin\Setting\ScholarshipController@update');

        });
        Route::group(['prefix' => 'awardee'], function () {
            Route::get('request/index', 'Admin\Awardee\AwardeeIndexController@index');
            Route::post('request/set-status', 'Admin\Awardee\DetailController@setStatus');

          });
          Route::group(['prefix' => 'scholarship'], function () {
            Route::get('request/index', 'Admin\Scholarship\ScholarshipIndexController@index');
            Route::post('request/set-status', 'Admin\Scholarship\DetailController@setStatus');

        });

    });

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
        Route::get('donor-index', 'Admin\Donor\DonorIndexController@index');
        Route::post('donor/register/email-post-register/{userId}', 'Donor\Auth\RegisterController@resendEmailPostRegistered');

    });
    Route::group(['prefix' => 'file'], function () {
        Route::post('blog-cover-image/{blogId}', 'Common\Blog\BlogCoverImageController@store');
        Route::delete('blog-cover-image/{blogId}', 'Common\Blog\BlogCoverImageController@destroy');
        Route::post('blog-cover-image/update/{blogId}', 'Common\Blog\BlogCoverImageController@update');

        Route::post('admin-cover-image/{userId}', 'Admin\User\UserProfilePictureController@store');
        Route::delete('admin-cover-image/{userId}', 'Admin\User\UserProfilePictureController@destroy');
        Route::post('admin-cover-image/update/{userId}', 'Admin\User\UserProfilePictureController@update');

        Route::get('donor-contract/{userId}', 'Donor\File\AttachmentContractController@show');

        Route::post('donor-transaction/payment-receipt/send', 'Donor\Transaction\InvoiceController@sendInvoice');
        Route::apiResource('donor-transaction/payment-receipt', 'Donor\Transaction\InvoiceController');
        Route::apiResource('donor-transaction/evidence', 'Donor\Transaction\EvidenceController');
    });

    Route::get('donor-transaction/year-index', 'Donor\Transaction\TransactionHistoryController@yearIndex');
    Route::apiResource('donor-transaction', 'Donor\Transaction\TransactionHistoryController');
    Route::apiResource('donor-transaction/collection-officer', 'Donor\Transaction\CollectionOfficerController');
    Route::apiResource('department', 'Admin\Auth\DepartmentController');
    Route::apiResource('blog-category', 'Admin\Blog\BlogCategoryController');
    Route::apiResource('blog-tag', 'Admin\Blog\BlogTagController');
    Route::apiResource('blog', 'Admin\Blog\BlogController');
    Route::get('user-admin/search', 'Admin\Auth\UserController@search');
    Route::apiResource('user-admin', 'Admin\Auth\UserController');
    Route::post('user-donor/{periodYear}/{userId}/assign-pco', 'Donor\Auth\UserController@assignPco');
    Route::post('user-donor/{periodYear}/{userId}/assign-pr', 'Donor\Auth\UserController@assignPr');
    Route::apiResource('user-donor', 'Donor\Auth\UserController');
    Route::patch('user-donor/update-single/{userId}', 'Donor\Auth\UserController@updateSingle');

    Route::post('admin/auth/reordering', 'Admin\Auth\RoleController@reorder');
    Route::post('department/reordering', 'Admin\Auth\DepartmentController@reorder');
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
Route::group(['prefix' => 'common'], function () {
    Route::get('open-registration/awardee', 'Common\OpenRegistrationController@awardee');
    Route::get('open-registration/scholarship', 'Common\OpenRegistrationController@scholarship');
});
Route::get('donor-transaction/confirmation/authorized', 'Donor\Transaction\ConfirmationController@authorized');
Route::apiResource('donor-transaction/confirmation', 'Donor\Transaction\ConfirmationController');
Route::apiResource('college-department', 'Common\CollegeDepartmentController');
Route::get('period-active', 'Common\PeriodController@active');
Route::apiResource('period', 'Common\PeriodController');
Route::get('scholarship-active', 'Common\ScholarshipController@active');
Route::apiResource('scholarship', 'Common\ScholarshipController');
Route::get('registration-awardee/upload/authorized', 'Awardee\Registration\RegistrationUploadController@authorized');
Route::apiResource('registration-awardee/upload', 'Awardee\Registration\RegistrationUploadController');
Route::apiResource('registration-awardee', 'Awardee\Registration\UserController');
Route::get('registration-awardee-nonreg/upload/authorized', 'AwardeeNonreg\Registration\RegistrationUploadController@authorized');
Route::apiResource('registration-awardee-nonreg/upload', 'AwardeeNonreg\Registration\RegistrationUploadController');
Route::apiResource('registration-awardee-nonreg', 'AwardeeNonreg\Registration\UserController');
