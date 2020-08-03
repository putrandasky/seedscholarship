<?php

namespace App\Http\Controllers\Common;

use App;
use App\Http\Controllers\Controller;

class OpenRegistrationController extends Controller
{

    public function awardee()
    {
        $data = App\General::where('key', 'Form Regular Open')->first()->value;
        return $data;
    }
    public function scholarship()
    {
        $data = App\General::where('key', 'Form Scholarship Open')->first()->value;
        return $data;
    }
    public function donor()
    {
        $data['donor-open'] = App\General::where('key', 'Form Donor Open')->first()->value;
        $data['donor-passive-mode'] = App\General::where('key', 'Form Donor Passive Open')->first()->value;
        return $data;
    }

}
