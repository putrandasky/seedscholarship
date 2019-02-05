<?php

namespace App\Http\Controllers\Admin\Blog;

use App;
use App\Http\Controllers\Controller;
use App\Http\Resources\BlogResource;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class BlogController extends Controller
{
    public function index()
    {
        $data =  App\Blog::with(['authorable', 'blogCategory', 'tags',
                'moderations' => function ($query) {
                    $query->orderBy('created_at', 'desc');
                },
                'moderations.moderateable',
            ])
        ->orderBy('created_at', 'desc')
        ->get();

        return $data;
    }
    public function show($id)
    {
        $data['blog'] = App\Blog::where('id', $id)->with(
            ['authorable', 'tags',
                'moderations' => function ($query) {
                    $query->orderBy('created_at', 'desc');
                },
                'moderations.moderateable',
            ])->first();
        $data['categories'] = App\BlogCategory::withCount('blogs')->orderBy('order', 'ASC')->get();
        $data['tags'] = App\Tag::withCount('blogs')->orderBy('order', 'ASC')->get();

        return $data;
        // return new BlogResource(App\Blog::whereId($id)->with('authorable', 'category', 'moderations', 'moderations.moderateable')->first());

    }
    public function store(Request $request)
    {
// dd($request['input']);
        //$name = time() . '.' . explode('/', explode(':', substr($image, 0, strpos($image, ';')))[1])[1];
        $blog = new App\Blog;
        $blog->title = $request['title'];
        $blog->slug = str_slug($request['title']);
        $blog->body = $request['body'];
        $blog->blog_category_id = $request['blog_category_id'];
// $blog->cover_image = NULL;
        $blog->authorable_id = auth('admin-api')->user()->id;
        $blog->authorable_type = 'App\Admin';
        $blog->save();
        $tags = collect($request['tags']);
        $tagsId = $tags->pluck('id');
        $blog->tags()->sync($tagsId->all());
        // $blog->save();

        // $path = 'blog/' . $blog->id . '/cover';
        // dd($path);
        // $save = $request->file('file')->storeAs('public/' . $path, $request->file('file')->getClientOriginalName());

        // $image->storeAs('public/' . $path, $request['cover_image']);
        // $blog->cover_image = $request['cover_image'];
        // $blog->cover_image = 'storage/' . $path . '/' . $request['cover_image'];
        $blog->save();

        $mod = new App\BlogModeration;
        $mod->mod_status = $request['mod_status'];
        $mod->mod_message = "Initial Post";
        $mod->blog_id = $blog->id;
        $mod->moderateable_id = auth('admin-api')->user()->id;
        $mod->moderateable_type = 'App\Admin';
        $mod->save();
        return response()->json(['status' => 'New Blog Created Successfully ', 'blog_id' => $blog->id], 200);
    }
    public function update(Request $request, $id)
    {

        $blog = App\Blog::find($id);
        $blog->title = $request['data']['title'];
        $blog->slug = str_slug($request['data']['slug']);
        $blog->body = $request['data']['body'];
        $blog->blog_category_id = $request['data']['blog_category_id'];
        $tags = collect($request['data']['tags']);
        $tagsId = $tags->pluck('id');
        $blog->tags()->sync($tagsId->all());
        $blog->touch();
        $blog->save();

        $mod = new App\BlogModeration;
        $mod->mod_status = $request['moderation']['status'];
        $mod->mod_message = $request['moderation']['message'];
        $mod->blog_id = $blog->id;
        $mod->moderateable_id = auth('admin-api')->user()->id;
        $mod->moderateable_type = 'App\Admin';
        $mod->save();
        return response()->json(['status' => 'Blog Edited Successfuly'], 200);
        // return $request['category']['id'];
    }
    public function destroy($id)
    {
        $blog = App\Blog::find($id);
        $mod = App\BlogModeration::whereBlog_id($blog->id);
        $blog->tags()->detach();
        $blog->delete();
        $mod->delete();
        $path = 'blog/' . $id ;
        Storage::deleteDirectory('public/' . $path );
        return "Your Blog Has Been Deleted Successfully";
    }
    public function storeCoverPhoto(Request $request, $blogId)
    {

    }
}
