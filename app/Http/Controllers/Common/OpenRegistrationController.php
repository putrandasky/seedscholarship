<?php

namespace App\Http\Controllers\Common;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App;
class OpenRegistrationController extends Controller
{

    public function awardee()
    {
        $data = App\General::where('key','Form Regular Open')->first()->value;
        return $data ;
    }
    public function scholarship()
    {
        $data = App\General::where('key','Form Scholarship Open')->first()->value;
        return $data ;
    }
    public function donor()
    {
        //
    }

}
