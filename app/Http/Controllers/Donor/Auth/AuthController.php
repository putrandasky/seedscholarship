<?php

namespace App\Http\Controllers\Donor\Auth;

use App;
use App\Http\Controllers\Controller;
use Carbon\Carbon;
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
        $data['period'] = $period = App\Period::where('year', $request->year)->first();

        $start_period = Carbon::parse("{$period->year}-{$period->start_month}");
        $end_period = Carbon::parse("{$period->end_year}-{$period->end_month}")->endOfMonth();
        $duration_period = $start_period->diffInMonths($end_period) + 1;
        $duration_uptolastmonth = $start_period->diffInMonths(Carbon::now()->endOfMonth());
        $duration_uptomonth = $duration_uptolastmonth + 1;

        $data['plan_donation'] = App\DonorPeriod::whereHas('period', function ($query) use ($request) {
            $query->where('year', '=', $request->year);
        })->sum('amount');
        $data['actual_donation'] = App\DonorTransaction::where([
            'period_year' => $request->year,
            'verification' => 'VERIFIED',
        ])->sum('amount');
        $data['remaining'] = $data['actual_donation'] - $data['plan_donation'];

        $data['start_period'] = $start_period->format('Y-m-d');
        $data['end_period'] = $end_period->format('Y-m-d');
        $data['duration_period'] = $duration_period;
        $data['duration_uptomonth'] = $duration_uptomonth;
        $data['duration_uptolastmonth'] = $duration_uptolastmonth;
        $data['user'] = App\DonorPeriod::where('period_id', $period->id)
            ->with([
                'period',
                'pco' => function ($query) {
                    $query->select('id', 'name', 'year', 'initial');
                },
                'pr' => function ($query) {
                    $query->select('id', 'name', 'year', 'initial');
                },
                'donor.donorTransactions' => function ($query) use ($request) {
                    $query->where('period_year', '=', $request->year);
                },
                'donor.collegeDepartment' => function ($query) {
                    $query->select('id', 'department');
                },
                'donor' => function ($query) use ($request) {
                    $query->orderBy('created_at', 'desc');
                    $query->select('id', 'name', 'email', 'college_department_id', 'year');
                    $query->withCount([
                        'donorTransactions AS unverified_transactions' => function ($query) use ($request) {
                            $query->where('period_year', '=', $request->year)
                                ->where('verification', 'UNVERIFIED');
                        },
                        'donorTransactions AS not_sent_invoice' => function ($query) use ($request) {
                            $query->where('period_year', '=', $request->year)
                                ->where('status_invoice', 'NOT SENT')
                                ->where('verification', 'VERIFIED');
                        },
                        'donorTransactions AS total_donation' => function ($query) use ($request) {
                            $query->where('period_year', '=', $request->year)
                                ->where('verification', 'VERIFIED')
                                ->select(DB::raw("SUM(amount) as verified"));
                        },
                        'donorTransactions AS last_donate' => function ($query) use ($request) {
                            $query->where('period_year', $request->year)
                                ->select(DB::raw('DATE_FORMAT(max(trx_date), "%d-%b-%y")'));
                        },
                    ]);
                },
            ])
            ->get();

        $data['total_user'] = count($data['user']);

        return $data;
    }

    public function login()
    {
        $credentials = request(['email', 'password']);

        if (!$token = auth('donor-api')->attempt($credentials)) {
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
        $user = auth('donor-api')->user();
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
        auth('donor-api')->logout();

        return response()->json(['status' => 'Successfully logged out'], 200);
    }

    /**
     * Refresh a token.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function refresh()
    {
        return $this->respondWithToken(auth('donor-api')->refresh());
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
            'expires_in' => auth('donor-api')->factory()->getTTL() * 60,
        ]);
    }
}
