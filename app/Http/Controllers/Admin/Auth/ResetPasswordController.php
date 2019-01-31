<?php

namespace App\Http\Controllers\Admin\Auth;

use App;
use App\Http\Controllers\Controller;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use DB;

class ResetPasswordController extends Controller
{

    public function hasResetToken(Request $request)
    {
        $response = $this->ValidateToken($request->email, $request->token);
        return $response ? $response : response()->json(['status' => 'Token Valid'], 200);
        // return response()->json(['status' => 'Token Valid'], 200);

    }
    public function ResetPassword(Request $request)
    {
        $this->validate($request, [
            'token' => 'required',
            'email' => 'required|email',
            'password' => 'required|confirmed|min:6',
        ]);

        $response = $this->ValidateToken($request->email, $request->token);
        if ($response) {
            return $response;
        }
        $hasResetToken = DB::table('password_resets')->where(['email' => $request->email]);
        $user = App\User::where('email', $hasResetToken->first()->email)->first();
        $user->password = Hash::make($request->password);
        $user->save();
        $hasResetToken->delete();
        return response()->json(['status' => 'New Password Already Created'], 200);

    }
    public function ValidateToken($email, $token)
    {
        $hasResetToken = DB::table('password_resets')->where(['email' => $email]);
        if (!($hasResetToken->exists())) {
            return response()->json(['status' => 'Unauthorized Access'], 401);
        }
        if (!(Hash::check($token, $hasResetToken->first()->token))) {
            return response()->json(['status' => 'Your Token Invalid'], 403);
        }
        $isPast = Carbon::parse($hasResetToken->first()->created_at)->addSeconds(config('auth.passwords.users.expire') * 60)->isPast();
        if ($isPast) {
            return response()->json(['status' => 'Token already expired, please create a new one'], 403);
        }

    }
    // /*
    // |--------------------------------------------------------------------------
    // | Password Reset Controller
    // |--------------------------------------------------------------------------
    // |
    // | This controller is responsible for handling password reset requests
    // | and uses a simple trait to include this behavior. You're free to
    // | explore this trait and override any methods you wish to tweak.
    // |
    // */

    // use ResetsPasswords;

    // /**
    //  * Where to redirect users after resetting their password.
    //  *
    //  * @var string
    //  */
    // protected $redirectTo = '/home';

    // /**
    //  * Create a new controller instance.
    //  *
    //  * @return void
    //  */
    // public function __construct()
    // {
    //     $this->middleware('guest');
    // }

}
