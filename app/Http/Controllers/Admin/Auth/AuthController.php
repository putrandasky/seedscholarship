<?php

namespace App\Http\Controllers\Admin\Auth;

use App;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rule;
use App\Notifications\Admin\RegisterNotification;
use App\JobS\Admin\ProcessSendEmailAdminRegister;

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
      $user = App\Admin::with('department')->get();
      return $user;
    }
    public function register(Request $request)
    {
        $this->validate($request, [
            'name' => 'required|string|',
            'initial' => 'required|string|max:4',
            'email' => 'required|email|unique:admins',
            'year' => 'required|numeric|min:4',
            'password' => 'required|confirmed|min:6',
            'department_id' => 'required',
        ]);
        $user = new App\Admin();
        $user->name = ucwords($request->name);
        $user->email = $request->email;
        $user->year = $request->year;
        $user->status = $request->status;
        $user->featured = $request->featured;
        $user->initial = strtoupper($request->initial);
        $user->department_id = $request->department_id;
        $user->password = Hash::make($request->password);
        $user->save();
        $admin = App\Admin::whereId($user->id)->with('department')->first();
        $data['name'] = $user->name;
        $data['email'] = $user->email;
        $data['password'] = $request->password;
        $data['department'] = $admin->department->department;
        dispatch(new ProcessSendEmailAdminRegister($data));
        // $user->notify(new RegisterNotification($data));

        return response()->json(['status' => 'Successfully register new admin'], 200);
    }
    public function login()
    {
        $credentials = request(['email', 'password']);

        if (!$token = auth('admin-api')->attempt($credentials)) {
            return response()->json(['status' => 'Your Credentials Is Invalid', 'error' => 'Unauthorized'], 401);
        }

        return $this->respondWithToken($token);
    }

    /**
     * Get the authenticated Admin.
     *
     * @return \Illuminate\Http\JsonResponse
     */

    public function Update(Request $request)
    {
        $this->validate($request, [
            'name' => 'required|string|',
            'email' => ['required','email',Rule::unique('admins')->ignore($request['id'])],
            'department_id' => 'required',
            'initial' => 'required|min:3|max:4',
        ]);

        $user = App\Admin::find($request['id']);
        $user->name = $request['name'];
        $user->email = $request['email'];
        $user->department_id = $request['department_id'];
        $user->phone = $request['phone'];
        $user->save();
        return response()->json(['status' => 'Successfully Updated Profile'], 200);
    }
    public function me()
    {

        $user = auth('admin-api')->user();
        $role  = $user->role_id? App\Role::where('id',$user->role_id)->with('permissions')->first():null;
        return response()->json([
            'id' => $user->id,
            'name' => $user->name,
            'permissions' => $user->role_id? $role->permissions->pluck('id'):array(),
            ]);
    }

    /**
     * Log the user out (Invalidate the token).
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout()
    {
        auth('admin-api')->logout();

        return response()->json(['status' => 'Successfully logged out'], 200);
    }

    /**
     * Refresh a token.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function refresh()
    {
        return $this->respondWithToken(auth('admin-api')->refresh());
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
            'expires_in' => auth('admin-api')->factory()->getTTL() * 60,
        ]);
    }
}
