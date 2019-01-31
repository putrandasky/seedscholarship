<?php

namespace App\Http\Controllers\Admin\Blog;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\BlogResource;
use Carbon\Carbon;
use App;

class BlogController extends Controller
{
    public function index()
    {
        // return BroadcastResource::collection(App\Broadcast::where('accountable_type','App\Awardee')
                            // ->where('period',$period)
        // ->with('readers')->orderBy('created_at','desc')->paginate());

        return BlogResource::collection(App\Blog::with('authorable','category','moderations','moderations.moderateable')->orderBy('created_at','desc')->paginate(10));
        // $blog = App\Blog::with('authorable','category')->get();
        // return $blog;
    }
    public function show($id)
    {
        return new BlogResource(App\Blog::whereId($id)->with('authorable','category','moderations','moderations.moderateable')->first());

    }
    public function store(Request $request)
    {
        $blog = new App\Blog;
        $blog->title = $request['title'];
        $blog->body = $request['body'];
        $blog->category_id = $request['category_id'];
        $blog->cover_image = $request['cover_image'];
        $blog->authorable_id = auth('admin-api')->user()->id;
        $blog->authorable_type = 'App\Admin';
        $blog->save();
        $mod = new App\BlogModeration;
        $mod->mod_status = $request['mod_status'];
        $mod->mod_message = "Initial Post";
        $mod->blog_id = $blog->id;
        $mod->moderateable_id = auth('admin-api')->user()->id;
        $mod->moderateable_type = 'App\Admin';
        $mod->save();
        return "A New Blog Has Been Created Successfully";
    }
    public function update(Request $request,$id)
    {

        $blog = App\Blog::find($id);
        $blog->title = $request['title'];
        $blog->body = $request['body'];
        $blog->category_id = $request['category']['id'];
        $blog->cover_image = $request['cover_image'];
        $blog->save();
        $mod = new App\BlogModeration;
        $mod->mod_status = $request['mod_status'];
        $mod->mod_message = $request['mod_message'];
        $mod->blog_id = $blog->id;
        $mod->moderateable_id = auth('admin-api')->user()->id;
        $mod->moderateable_type = 'App\Admin';
        $mod->save();
        return "Your Blog Has Been Edited Successfully";
        // return $request['category']['id'];
    }
    public function destroy($id)
    {
        $blog = App\Blog::find($id);
        $mod = App\BlogModeration::whereBlog_id($blog->id);
        $blog->delete();
        $mod->delete();
        return "Your Blog Has Been Deleted Successfully";
    }
}
