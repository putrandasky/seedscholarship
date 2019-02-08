<?php

namespace App\Http\Controllers\Awardee\Auth;

use App;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rule;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;

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
        $user = App\Awardee::with('department')->get();
        return $user;
    }
    public function register(Request $request)
    {
        $this->validate($request, [
            'name' => 'required|string',
            'email' => 'required|email|unique:awardees',
            // 'password' => 'required|confirmed|min:6',
            'phone' => 'required|numeric|min:6',
            'year' => 'required|numeric|min:4',
            'period_id' => 'required',
            'department_id' => 'required',
        ]);
        $user = new App\Awardee();
        $user->name = ucwords($request->name);
        $user->email = $request->email;
        $user->phone = $request->phone;
        $user->year = $request->year;
        $user->phone = $request->phone;
        $user->awardee_department_id = $request->department_id;
        // $user->password = Hash::make($request->password);
        $user->registration_code = Str::random(60);
        $user->save();
        $user->periods()->attach($request->period_id);
        Storage::makeDirectory("registration/awardee/{$user->id}/cv");
        Storage::makeDirectory("registration/awardee/{$user->id}/essay");
        Storage::makeDirectory("registration/awardee/{$user->id}/slip");
        Storage::makeDirectory("registration/awardee/{$user->id}/siakng");


        return response()->json([
          'status' => 'Successfully register new awardee',
          'registration_code' => $user->registration_code,
          'email'=>$user->email,
          'id'=>$user->id,
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
     * Get the authenticated Awardee.
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

        $user = App\Awardee::find($request['id']);
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

