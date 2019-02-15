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
            ->with('awardeeDepartment', 'periods')->orderBy('created_at', 'desc')->get();
        return $user;
    }

    public function register(Request $request)
    {
        $rules = [
            'name' => 'required|string',
            'email' => 'required|email|unique:donors',
            // 'password' => 'required|confirmed|min:6',
            'phone' => 'required|numeric|min:6',
            'year' => 'required|digits:4',
            // 'scholarship_id' => 'required',
            'department' => 'required',
            'donation_category' => 'required',
            'address' => 'required',
            'accept_term_condition' => 'required',
            'period' => 'required',
            'amount' => $request->donation_category == 'aktif' ? 'required|min:100000|numeric|' : '',
        ];
        $messages = [
            'period.required' => 'The period of seedscholarship must be selected',
            'department.required' => 'The field of study must be selected',
            'accept_term_condition.required' => 'You must read & accept the term & condition',
            'amount.required' => 'Plan amount of monthly donation must be filled by donatur aktif',
            'amount.min' => 'A minimum of donation for donatur aktif is Rp. 100.000 / month',
        ];
        $this->validate($request, $rules, $messages);

        $user = new App\Donor();
        $user->name = ucwords($request->name);
        $user->email = $request->email;
        $user->phone = $request->phone;
        $user->year = $request->year;
        $user->awardee_department_id = $request->department;
        // $user->donation_category = $request->donation_category;
        $user->address = $request->address;
        // $user->password = Hash::make($request->password);
        // $registration_code = Str::random(60);
        if ($request->donation_category == "aktif") {
          $amount =  $request->amount * 12;
          } elseif ($request->amount) {
            $amount =  $request->amount;
          }else{
            $amount = 0;
        }
        DB::transaction(function () use ($request, $user, $amount) {
            $user->save();

            $user->periods()->attach($request->period, [
                'donation_category' => $request->donation_category,
                'amount' => $amount,
                'is_term_condition_agreed' => $request->accept_term_condition,
                'is_contract_agreed' => false,
            ]);
            $data = App\Donor::where('id', $user->id)->with('awardeeDepartment', 'periods')->first();
            $user->notify(new PostRegistered($data));
        });
        return response()->json([
            'status' => 'Successfully register new donor',
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
