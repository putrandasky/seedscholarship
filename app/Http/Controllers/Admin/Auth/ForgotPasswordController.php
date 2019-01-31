<?php

namespace App\Http\Controllers\Admin\Auth;

use App;
use App\Http\Controllers\Controller;
use App\Notifications\UserResetPassword;
use Carbon\Carbon;
use DB;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

// use Illuminate\Foundation\Auth\SendsPasswordResetEmails;
// use Illuminate\Support\Facades\Password;

class ForgotPasswordController extends Controller
{
    // /*
    // |--------------------------------------------------------------------------
    // | Password Reset Controller
    // |--------------------------------------------------------------------------
    // |
    // | This controller is responsible for handling password reset emails and
    // | includes a trait which assists in sending these notifications from
    // | your application to your users. Feel free to explore this trait.
    // |
    // */

    // use SendsPasswordResetEmails;

    // /**
    //  * Create a new controller instance.
    //  *
    //  * @return void
    //  */
    // public function __construct()
    // {
    //     $this->middleware('guest');
    // }
    // public function __invoke(Request $request)
    // {
    //     $this->validateEmail($request);
    //     // We will send the password reset link to this user. Once we have attempted
    //     // to send the link, we will examine the response then see the message we
    //     // need to show to the user. Finally, we'll send out a proper response.
    //     $response = $this->broker()->sendResetLink(
    //         $request->only('email')
    //     );
    //     return $response == Password::RESET_LINK_SENT
    //         ? response()->json(['message' => 'Reset link sent to your email.', 'status' => true], 201)
    //         : response()->json(['message' => 'Unable to send reset link', 'status' => false], 401);
    // }
    public function SendResetLink(Request $request)
    {
        $this->validate($request, [
            'email' => 'required|email',
        ]);

        $checkEmailExist = App\User::where('email', $request->email)->exists();
        if ($checkEmailExist) {
            # code...
            $isEmailSent = DB::table('password_resets')->where('email', $request->email);
            if ($isEmailSent->first()) {
                # code...s
                $isPast = Carbon::parse($isEmailSent->first()->created_at)->addSeconds(config('auth.passwords.users.expire') * 60)->isPast();
                if ($isPast) {
                    //delete expired token and send the new email link
                    $isEmailSent->delete();
                    $this->Reset($request->email);
                    return response()->json(['status' => 'Link to reset password already sent to email'], 200);
                }
                //prevent send email due to token already sent within token expired in 60 * 60 seconds
                return response()->json(['status' => 'You just create link to reset password and email it'], 501);
            }
            //send fresh token to email
            $this->Reset($request->email);
            return response()->json(['status' => 'Link to reset password already sent to email'], 200);
        }
        return response()->json(['status' => 'Email does not exist'], 501);
    }

    public function Reset($email)
    {
        $user = App\User::where('email', $email)->first();
        $token = Str::random(60);
        DB::table('password_resets')->insert([
            'email' => $email,
            'token' => Hash::make($token),
            'created_at' => Carbon::now(),
        ]);
        $user->notify(new UserResetPassword($token));
    }
}
