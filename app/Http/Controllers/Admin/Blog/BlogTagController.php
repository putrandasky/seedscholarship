<?php

namespace App\Http\Controllers\Admin\Blog;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App;
class BlogTagController extends Controller
{
    public function index()
    {
        $index = App\Tag::withCount('blogs')->orderBy('order', 'ASC')->get();
        return $index;
    }
    public function store(Request $request)
    {
        $checkExistTag = App\Tag::where(['name' => $request->tag])->exists();
        if ($checkExistTag) {
            return response()->json(['status' => 'This blog tag already exist', 'error' => 'Unprocessable Entity'], 422);
        }
        $countTag = App\Tag::count();
        $tag = new App\Tag;
        $tag->name = strtolower($request->tag);
        $tag->description = $request->description;
        $tag->order = $countTag + 1;
        $tag->save();
        return response()->json(['status' => 'Successfully created new blog tag'], 201);
    }
    public function update(Request $request, $tagId)
    {
        $checkExistTag = App\Tag::where(['name' => $request->tag])->where('id','<>',$tagId)->exists();
        if ($checkExistTag) {
            return response()->json(['status' => 'This blog tag already exist', 'error' => 'Unprocessable Entity'], 422);
        }
        $tag = App\Tag::find($tagId);
        $tag->name = strtolower($request->tag);
        $tag->description = $request->description;
        $tag->save();
        return response()->json(['status' => 'Successfully update blog tag'], 201);
    }
    public function reorder(Request $request)
    {
        // dd(count($request['data']));
        for ($i = 0; $i < count($request['data']); $i++) {
            $tag = App\Tag::find($request['data'][$i]['id']);
            $tag->order = $i + 1;
            $tag->save();
            # code...
        }
        return response()->json(['status' => 'Successfully reordered tag document'], 200);
    }
    public function destroy($tagId)
    {
        $tag = App\Tag::find($tagId);
        $tag->blogs()->detach();
        $tag->delete();
        return response()->json(['status' => 'Successfully deleted tag document'], 200);
    }
}
