<?php

namespace App\Http\Controllers\Admin\Awardee;

use App;
use App\Http\Controllers\Controller;
use App\Jobs\Admin\ProcessSendEmailAcceptanceAwardeeReguler;
use Illuminate\Http\Request;

class DetailController extends Controller
{
    public function setStatus(Request $request)
    {
        $data = App\AwardeePeriod::where('id', $request->awardeePeriodId)->with([
            'awardee' => function ($query) {
                $query->select('id', 'email', 'name');
            },
            'period' => function ($query) {
                $query->select('id', 'period', 'year');
            },
        ])->first();
        $data->status = $request->status;
        $data->save();
        dispatch(new ProcessSendEmailAcceptanceAwardeeReguler($data));

        return response()->json(['message' => 'Status Approval Updated'], 200);
    }
}
