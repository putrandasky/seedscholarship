<?php

namespace App\Http\Controllers\Common;

use App;
use App\Http\Controllers\Controller;

class ScholarshipController extends Controller
{
    public function index()
    {
        $data = App\Scholarship::get(['id', 'name', 'year', 'is_active', 'is_open_registration']);
        return $data;
    }
    public function active()
    {
        $data = App\Scholarship::where('is_active', 1)->get(['id', 'name', 'year', 'is_active']);
        return $data;
    }
    public function open_registration()
    {
        $data = App\Scholarship::where('is_open_registration', 1)->get(['id', 'name', 'year', 'is_active', 'is_open_registration']);
        return $data;
    }
}
