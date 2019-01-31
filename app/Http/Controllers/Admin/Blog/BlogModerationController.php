<?php

namespace App\Http\Controllers\Admin\Blog;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App;
class BlogModerationController extends Controller
{
    public function update(Request $request, $id)
    {
        $mod = App\BlogModeration::find($id);
        $mod->mod_status = $request['mod_status'];
        $mod->mod_message = $request['mod_message'];
        $mod->save();
        return "The Moderation Status Has Been Edited Successfully";
    }
}
