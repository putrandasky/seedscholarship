<?php

namespace App\Http\Controllers\Admin\Scholarship;

use App;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class DetailController extends Controller
{
    public function setStatus(Request $request)
    {
        $data = App\AwardeeNonregScholarship::where('id', $request->awardeeScholarshipId)->with([
            'awardeeNonreg' => function ($query) {
                $query->select('id', 'email', 'name');
            },
            'scholarship' => function ($query) {
                $query->select('id', 'name', 'year');
            },
        ])->first();
        $data->status = $request->status;
        $data->save();
        // dispatch(new ProcessSendEmailAcceptanceAwardeeNonreg($data));

        return response()->json(['message' => 'Status Approval Updated'], 200);
    }
}
