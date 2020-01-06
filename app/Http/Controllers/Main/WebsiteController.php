<?php

namespace App\Http\Controllers\Main;

use App;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class WebsiteController extends Controller
{
    public function homePage()
    {
      $blogs = App\Blog::published()->latest()->take(4)->get();
      $teams = App\Department::with([
        'roles' => function ($query) {
            $query->orderBy('order', 'ASC');
        },
        'roles.admins' => function ($query) {
          $query->where('status', 1);
          $query->where('featured', 1);
      },])->orderBy('order', 'ASC')->get();
      // return response()->json(compact('blogs','teams'));
            return view('apps.website', compact('blogs','teams'));
    }
}
