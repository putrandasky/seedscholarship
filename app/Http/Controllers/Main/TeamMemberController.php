<?php

namespace App\Http\Controllers\Main;

use App;
use App\Http\Controllers\Controller;

class TeamMemberController extends Controller
{
    public function index()
    {
        $teams = App\Department::with([
            'roles' => function ($query) {
                $query->orderBy('order', 'ASC');
            },
            'roles.admins' => function ($query) {
              $query->where('status', 1);
          },])->orderBy('order', 'ASC')->get();
        // return $teams;
        // return view('apps.team-member');
        return view('apps.team-member', compact('teams','teams'));

    }
}
