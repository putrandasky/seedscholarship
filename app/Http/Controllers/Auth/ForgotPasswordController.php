<?php

namespace App\Http\Controllers\Auth;

use App;
use App\Http\Controllers\Controller;
use App\Notifications\Auth\UserResetPassword;
use Carbon\Carbon;
use DB;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class ForgotPasswordController extends Controller
{

    public function SendResetLink(Request $request, $account_type)
    {
        $this->validate($request, [
            'email' => 'required|email',
        ]);

        if ($account_type == "admin") {
            $checkEmailExist = App\Admin::where('email', $request->email)->exists();
        }
        if ($account_type == "awardee") {
            $checkEmailExist = App\Awardee::where('email', $request->email)->exists();
        }
        if ($account_type == "donor") {
            $checkEmailExist = App\Donor::where('email', $request->email)->exists();
        }

        if ($checkEmailExist) {
            # code...
            $isEmailSent = DB::table('password_resets')->where('email', $request->email);
            if ($isEmailSent->first()) {
                # code...s
                $isPast = Carbon::parse($isEmailSent->first()->created_at)->addSeconds(config('auth.passwords.users.expire') * 60)->isPast();
                if ($isPast) {
                    //delete expired token and send the new email link
                    $isEmailSent->delete();
                    $this->Reset($request->email, $account_type);
                    return response()->json(['status' => 'Link to reset password already sent to email'], 200);
                }
                //prevent send email due to token already sent within token expired in 60 * 60 seconds
                return response()->json(['status' => 'You just create link to reset password and email it'], 501);
            }
            //send fresh token to email
            $this->Reset($request->email, $account_type);
            return response()->json(['status' => 'Link to reset password already sent to email'], 200);
        }
        return response()->json(['status' => 'Email does not exist'], 501);
    }

    public function Reset($email, $account_type)
    {
        if ($account_type == "admin") {
        $user = App\Admin::where('email', $email)->first();
        }
        if ($account_type == "awardee") {
        $user = App\Awardee::where('email', $email)->first();
        }
        if ($account_type == "donor") {
        $user = App\Donor::where('email', $email)->first();
        }

        $token = Str::random(60);
        DB::table('password_resets')->insert([
            'email' => $email,
            'token' => Hash::make($token),
            'created_at' => Carbon::now(),
        ]);
        $user->notify(new UserResetPassword($token,$account_type));
    }
}
