<?php

namespace App\Http\Controllers\Common\Blog;

use App;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Carbon\Carbon;
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
    public function store(Request $request,$blogId)
    {
      // );
      $path  = 'blog/' . Carbon::now()->year . '/' . Carbon::now()->month . '/' . $blogId . '/cover';
      // Storage::disk('public')->put($path, $request->file('file'));
      $save = $request->file('file')->storeAs('public/'.$path, $request->file('file')->getClientOriginalName());

        $blog = App\Blog::find($blogId);
        $blog->cover_image = $path.'/'.$request->file('file')->getClientOriginalName();
        $blog->save();
        return;
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
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($blogId)
    {
        //
    }
}
