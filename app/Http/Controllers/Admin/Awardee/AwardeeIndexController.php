<?php

namespace App\Http\Controllers\Admin\Awardee;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App;
use Illuminate\Support\Facades\DB;
class AwardeeIndexController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
      $data = App\Period::
      withCount([
                'awardeePeriods AS awardee_total',
                'awardeePeriods AS awardee_inprogress_total' => function ($query)  {
                    $query->where('STATUS', 'IN PROGRESS');
                },
                'awardeePeriods AS awardee_submitted_total' => function ($query)  {
                    $query->where('STATUS', 'SUBMITTED');
                },
                'awardeePeriods AS awardee_approved_total' => function ($query)  {
                    $query->where('STATUS', 'APPROVED');
                },
                'awardeePeriods AS awardee_not_approved_total' => function ($query)  {
                    $query->where('STATUS', 'NOT APPROVED');
                },
                // 'donorPeriods AS donor_active' => function ($query)  {
                //     $query->where('donation_category', 'AKTIF');
                // },
                // 'donorPeriods AS donor_passive' => function ($query)  {
                //     $query->where('donation_category', 'PASIF');
                // },
            ])
            ->orderBy('year', 'desc')
      ->get();
      return $data;


    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
