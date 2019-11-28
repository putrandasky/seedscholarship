<?php

namespace App\Http\Controllers\Admin\Donor;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App;
use Illuminate\Support\Facades\DB;
class DonorIndexController extends Controller
{
    public function index()
    {
      $data = App\Period::
      withCount([
                'donorPeriods AS plan_donation' => function ($query)  {
                    $query->select(DB::raw("SUM(amount) as plan_donation"));
                },
                'donorTransactions AS actual_donation' => function ($query)  {
                    $query->where('verification', 'VERIFIED');
                    $query->select(DB::raw("SUM(amount) as actual_donation"));
                },
                'donorPeriods AS donor_active' => function ($query)  {
                    $query->where('donation_category', 'AKTIF');
                },
                'donorPeriods AS donor_passive' => function ($query)  {
                    $query->where('donation_category', 'PASIF');
                },
            ])
            ->orderBy('year', 'desc')
      ->get();
      return $data;


    }
}
