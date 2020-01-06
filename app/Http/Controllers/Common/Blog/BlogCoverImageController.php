<?php

namespace App\Http\Controllers\Common\Blog;

use App;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class BlogCoverImageController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, $blogId)
    {
        // );
        if ($request->file('file') == NULL)  {
          return response()->json(['message' => 'No Blog Cover Image Added'], 200);
        }
        $path = 'blog/' . $blogId . '/cover';
        $filename = str_replace(' ', '-', $request->file('file')->getClientOriginalName());

        // $path  = 'blog/' . Carbon::now()->year . '/' . Carbon::now()->month . '/' . $blogId . '/cover';
        // Storage::disk('public')->put($path, $request->file('file'));
        $save = $request->file('file')->storeAs('public/' . $path, $filename);

        $blog = App\Blog::find($blogId);
        $blog->cover_image = $filename;
        $blog->save();
        return response()->json(['message' => 'Blog Cover Image Added'], 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($path)
    {
        $newpathToFile = Storage::get($path);
        return response()->file($newpathToFile);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $blogId)
    {
      if ($request->file('file') == NULL)  {
        return response()->json(['message' => 'No Blog Cover Image Added'], 200);
      }
      $path = 'blog/' . $blogId . '/cover';
      $filename = str_replace(' ', '-', $request->file('file')->getClientOriginalName());
        $blog = App\Blog::find($blogId);
        Storage::delete('public/' . $path . '/' . $blog->cover_image);
        $save = $request->file('file')->storeAs('public/' . $path, $filename);
        $blog->cover_image = $filename;
        $blog->save();
        return response()->json(['message' => 'Blog Cover Image Updated'], 200);

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($blogId)
    {
        $path = 'blog/' . $blogId . '/cover';
        $blog = App\Blog::find($blogId);
        Storage::delete('public/' . $path . '/' . $blog->cover_image);
        $blog->cover_image = null;
        $blog->save();
        return response()->json(['message' => 'Blog Cover Image Deleted'], 200);
    }
}
