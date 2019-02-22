<?php

namespace App\Http\Controllers\Donor\Auth;

use App;
use App\Http\Controllers\Controller;
use App\Notifications\Donor\PostRegistered;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
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
        $user = App\Donor::whereHas('periods', function ($query) use ($request) {
            $query->where('year', '=', $request->year);

        })
            ->with([
              'awardeeDepartment',
                'periods' => function ($query) use ($request) {
                    $query->where('periods.year', '=', $request->year);
                },
                'donorTransactions' => function ($query) use ($request) {
                    $query->where('period_year', '=', $request->year);
                    $query->select('id','period_year','trx_date','donor_id');
                    $query->orderBy('trx_date', 'desc');
                }
                ])
            ->orderBy('created_at', 'desc')
                        ->withCount([
                'donorTransactions AS unverified_transactions' => function ($query) {
                    $query->where('verification', 'UNVERIFIED');
                  },
                  'donorTransactions AS not_sent_invoice' => function ($query) {
                    $query->where('status_invoice',  'NOT SENT');
                    $query->where('verification', 'VERIFIED');
                },
            ])
            ->get();
        return $user;
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
     * Get the authenticated Donor.
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

        $user = App\Donor::find($request['id']);
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
