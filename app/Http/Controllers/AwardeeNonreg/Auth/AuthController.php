<?php

namespace App\Http\Controllers\AwardeeNonreg\Auth;

use App;
use App\Http\Controllers\Controller;
use App\Notifications\Nonreg\PostRegistered;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
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
    public function index(Request $request)
    {
        $user = App\AwardeeNonreg::whereHas('scholarships', function ($query) use ($request) {
            $query->where('scholarships.id', '=', $request->id);

        })
            ->with('awardeeDepartment', 'scholarships')->orderBy('created_at', 'desc')->get();
        return $user;
    }
    public function register(Request $request)
    {
        $rules = [
            'name' => 'required|string',
            'email' => 'required|email',
            // 'password' => 'required|confirmed|min:6',
            'phone' => 'required|numeric|min:6',
            'year' => 'required|digits:4',
            'scholarship_id' => 'required',
            'department_id' => 'required',
        ];
        $messages = [
            'scholarship_id.required' => 'The Scholarship program must be selected',
            'department_id.required' => 'The field of study must be selected',
        ];

        $this->validate($request, $rules, $messages);
        $user = new App\AwardeeNonreg();
        $user->name = ucwords($request->name);
        $user->email = $request->email;
        $user->phone = $request->phone;
        $user->year = $request->year;
        $user->awardee_department_id = $request->department_id;
        $registration_code = Str::random(100);
        DB::transaction(function () use ($request, $registration_code, $user) {
            $user->save();
            $user->scholarships()->attach($request->scholarship_id, [
                'status' => 'in progress',
                'registration_code' => $registration_code,
            ]);
            $data = App\AwardeeNonreg::where('id', $user->id)->with('awardeeDepartment', 'scholarships')->first();
            $user->notify(new PostRegistered($data));
        });
        Storage::makeDirectory("registration/nonreg/{$request->scholarship_id}/{$user->id}/cv");
        Storage::makeDirectory("registration/nonreg/{$request->scholarship_id}/{$user->id}/proposal");
        Storage::makeDirectory("registration/nonreg/{$request->scholarship_id}/{$user->id}/sktmb");
        Storage::makeDirectory("registration/nonreg/{$request->scholarship_id}/{$user->id}/siakng");
        return response()->json([
            'status' => 'Successfully register new awardee',
            'registration_code' => $registration_code,
            'email' => $user->email,
            'id' => $user->id,
            'scholarship_id' => $request->scholarship_id,
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
