<?php

namespace App\Http\Controllers\AwardeeNonreg\Auth;

use App;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Notifications\Nonreg\PostRegistered;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Illuminate\Validation\Rule;


class AuthController extends Controller
{
    /**
     * Create a new AuthController instance.
     *
     * @return void
     */
    public function __construct()
    {
        // $this->middleware('auth:api', ['except' => ['login','register']]);
    }

    /**
     * Get a JWT via given credentials.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        $user = App\AwardeeNonreg::with('department')->get();
        return $user;
    }
    public function register(Request $request)
    {
        $this->validate($request, [
            'name' => 'required|string',
            'email' => 'required|email',
            // 'password' => 'required|confirmed|min:6',
            'phone' => 'required|numeric|min:6',
            'year' => 'required|digits:4',
            'scholarship_id' => 'required',
            'department_id' => 'required',
        ]);
        $user = new App\AwardeeNonreg();
        $user->name = ucwords($request->name);
        $user->email = $request->email;
        $user->phone = $request->phone;
        $user->year = $request->year;
        $user->awardee_department_id = $request->department_id;
        // $user->password = Hash::make($request->password);
        $user->save();
        $registration_code = Str::random(60);
        $user->scholarships()->attach($request->scholarship_id,['is_approved'=>0,'registration_code'=>$registration_code]);
        Storage::makeDirectory("registration/nonreg/{$request->scholarship_id}/{$user->id}/cv");
        Storage::makeDirectory("registration/nonreg/{$request->scholarship_id}/{$user->id}/proposal");
        Storage::makeDirectory("registration/nonreg/{$request->scholarship_id}/{$user->id}/sktmb");
        Storage::makeDirectory("registration/nonreg/{$request->scholarship_id}/{$user->id}/siakng");

        $data = App\AwardeeNonreg::where('id', $user->id)->with('awardeeDepartment', 'scholarships')->first();
        $user->notify(new PostRegistered($data));

        return response()->json([
            'status' => 'Successfully register new awardee',
            'registration_code' => $registration_code,
            'email' => $user->email,
            'id' => $user->id,
            'scholarship_id' => $request->scholarship_id
        ], 200);
    }
    public function login()
    {
        $credentials = request(['email', 'password']);

        if (!$token = auth('awardee-api')->attempt($credentials)) {
            return response()->json(['status' => 'Your Credentials Is Invalid', 'error' => 'Unauthorized'], 401);
        }

        return $this->respondWithToken($token);
    }

    /**
     * Get the authenticated AwardeeNonreg.
     *
     * @return \Illuminate\Http\JsonResponse
     */

    public function Update(Request $request)
    {
        $this->validate($request, [
            'name' => 'required|string|',
            'email' => ['required', 'email', Rule::unique('admins')->ignore($request['id'])],
            'department_id' => 'required',
            'initial' => 'required|min:3|max:4',
        ]);

        $user = App\AwardeeNonreg::find($request['id']);
        $user->name = $request['name'];
        $user->email = $request['email'];
        $user->department_id = $request['department_id'];
        $user->phone = $request['phone'];
        $user->save();
        return response()->json(['status' => 'Successfully Updated Profile'], 200);
    }
    public function me()
    {
        $user = auth('awardee-api')->user();
        return response()->json([
            'id' => $user->id,
            'name' => $user->name,
            // 'super_admin' => $user->super_admin()->exists(),
            // 'permissions' => $user->permissions()->select('permissions.id', 'permissions.name')->get(),
        ]);
    }

    /**
     * Log the user out (Invalidate the token).
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout()
    {
        auth('awardee-api')->logout();

        return response()->json(['status' => 'Successfully logged out'], 200);
    }

    /**
     * Refresh a token.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function refresh()
    {
        return $this->respondWithToken(auth('awardee-api')->refresh());
    }

    /**
     * Get the token array structure.
     *
     * @param  string $token
     *
     * @return \Illuminate\Http\JsonResponse
     */
    protected function respondWithToken($token)
    {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth('awardee-api')->factory()->getTTL() * 60,
        ]);
    }
}
