<?php

namespace App\Http\Controllers\Admin\Blog;

use App;
use App\Http\Controllers\Controller;
use App\Http\Resources\BlogResource;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;


class BlogController extends Controller
{
    public function index()
    {
        // return BroadcastResource::collection(App\Broadcast::where('accountable_type','App\Awardee')
        // ->where('period',$period)
        // ->with('readers')->orderBy('created_at','desc')->paginate());

        return BlogResource::collection(App\Blog::with('authorable', 'category', 'moderations', 'moderations.moderateable')->orderBy('created_at', 'desc')->paginate(10));
        // $blog = App\Blog::with('authorable','category')->get();
        // return $blog;
    }
    public function show($id)
    {
        $data['blog'] = App\Blog::where('id', $id)->with('authorable', 'category', 'tags', 'moderations', 'moderations.moderateable')->first();
        $data['categories'] = App\BlogCategory::withCount('blogs')->orderBy('order', 'ASC')->get();
        $data['tags'] = App\Tag::withCount('blogs')->orderBy('order', 'ASC')->get();

        return $data;
        // return new BlogResource(App\Blog::whereId($id)->with('authorable', 'category', 'moderations', 'moderations.moderateable')->first());

    }
    public function store(Request $request)
    {

        $blog = new App\Blog;
        $blog->title = $request['title'];
        $blog->slug = str_slug($request['title']);
        $blog->body = $request['body'];
        $blog->blog_category_id = $request['category'];
        $blog->cover_image = 'public/images/default-blog-cover.jpg';
        $blog->authorable_id = auth('admin-api')->user()->id;
        $blog->authorable_type = 'App\Admin';
        $blog->save();
        $tags = collect($request['tags']);
        $tagsId = $tags->pluck('id');
        $blog->save();
        $blog->tags()->sync($tagsId->all());

        $mod = new App\BlogModeration;
        $mod->mod_status = $request['mod_status'];
        $mod->mod_message = "Initial Post";
        $mod->blog_id = $blog->id;
        $mod->moderateable_id = auth('admin-api')->user()->id;
        $mod->moderateable_type = 'App\Admin';
        $mod->save();
        return response()->json(['status' => 'Successfully update department name', 'blog_id' => $blog->id], 200);
    }
    public function update(Request $request, $id)
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
    public function storeCoverPhoto(Request $request, $blogId)
    {

    }
}
