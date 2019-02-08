<?php

namespace App\Http\Controllers\Common;

use App;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ScholarshipController extends Controller
{
    public function index()
    {
        $data = App\Scholarship::get(['id','name','year','is_active']);
        return $data;
    }
}
