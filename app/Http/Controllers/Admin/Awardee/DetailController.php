<?php

namespace App\Http\Controllers\Admin\Awardee;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App;
class DetailController extends Controller
{
    public function setStatus(Request $request){
        $data = App\AwardeePeriod::where('id',$request->awardeePeriodId)->first();
        $data->status = $request->status;
        $data->save();
        return response()->json(['message' => 'Status Approval Updated'], 200);
    }
}
