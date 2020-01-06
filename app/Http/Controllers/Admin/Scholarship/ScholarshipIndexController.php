<?php

namespace App\Http\Controllers\Admin\Scholarship;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App;
use Illuminate\Support\Facades\DB;

class ScholarshipIndexController extends Controller
{
    public function index()
    {
      $data = App\Scholarship::
      withCount([
        'awardeeNonregScholarship AS awardee_total',
        'awardeeNonregScholarship AS awardee_inprogress_total' => function ($query)  {
            $query->where('STATUS', 'IN PROGRESS');
        },
        'awardeeNonregScholarship AS awardee_submitted_total' => function ($query)  {
            $query->where('STATUS', 'SUBMITTED');
        },
        'awardeeNonregScholarship AS awardee_approved_total' => function ($query)  {
            $query->where('STATUS', 'APPROVED');
        },
        'awardeeNonregScholarship AS awardee_not_approved_total' => function ($query)  {
            $query->where('STATUS', 'NOT APPROVED');
        },
            ])
            ->orderBy('year', 'desc')
      ->get();
      return $data;


    }
}
