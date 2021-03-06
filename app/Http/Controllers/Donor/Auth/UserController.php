<?php

namespace App\Http\Controllers\Donor\Auth;

use App;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class UserController extends Controller
{
    public function show(Request $request, $id)
    {
        $data['user'] = App\Donor::whereHas(
            'donorPeriods.period', function ($query) use ($request) {
                $query->where('year', '=', $request->year);
            })
            ->where('id', $id)
            ->with([
                'collegeDepartment',
                'donorPeriods.pco' => function ($query) {
                    $query->select('id','name','year','initial');
                },
                'donorPeriods.pr' => function ($query) {
                    $query->select('id','name','year','initial');
                },
                'donorTransactions' => function ($query) use ($request) {
                    $query->where('period_year', '=', $request->year);
                },
                'donorPeriods.period' => function ($query) use ($request) {
                    $query->where('year', '=', $request->year);
                },
            ])
            ->withCount(['donorTransactions AS total_donation' => function ($query) {
                $query->select(DB::raw("SUM(amount) as verified"))->where('verification', 'VERIFIED');
            },
            ])
            ->first();

        if (!$data['user']) {
            return response()->json(['error' => 'Not Found', 'message' => 'User Not Found For This Period'], 404);
        }

        return $data;
    }
    public function update(Request $request, $userId)
    {
        $user = App\Donor::find($userId);
        $user->name = $request['name'];
        $user->email = $request['email'];
        $user->phone = $request['phone'];
        $user->department_id = $request['department_id'];
        $user->save();
        return response()->json(['message' => 'Successfully update donor data'], 200);
    }
    public function assignPco(Request $request,$periodYear, $userId)
    {
        $user = App\DonorPeriod::whereHas(
            'period', function ($query) use ($periodYear) {
                $query->where('year', '=', $periodYear);
            })
            ->where('donor_id',$userId)
            ->first();
        $user->pco = $request->id;
        $user->save();
        $admin = App\Admin::whereId($request->id)
                ->first(['id','name','year']);

        return response()->json(['message' => 'Successfully assign PCO','data'=>$admin], 200);
    }
    public function assignPr(Request $request,$periodYear, $userId)
    {
        $user = App\DonorPeriod::whereHas(
            'period', function ($query) use ($periodYear) {
                $query->where('year', '=', $periodYear);
            })
            ->where('donor_id',$userId)
            ->first();
        $user->pr = $request->id;
        $user->save();
        $admin = App\Admin::whereId($request->id)
                ->first(['id','name','year']);

        return response()->json(['message' => 'Successfully assign PR','data'=>$admin], 200);
    }
}
