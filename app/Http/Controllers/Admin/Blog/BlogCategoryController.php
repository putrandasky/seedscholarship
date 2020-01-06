<?php

namespace App\Http\Controllers\Admin\Blog;

use App;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class BlogCategoryController extends Controller
{
    public function index()
    {
        $index = App\BlogCategory::withCount('blogs')->orderBy('order', 'ASC')->get();
        return $index;
    }
    public function store(Request $request)
    {
        $checkExistCategory = App\BlogCategory::where(['category' => $request->category])->exists();
        if ($checkExistCategory) {
            return response()->json(['status' => 'This blog category already exist', 'error' => 'Unprocessable Entity'], 422);
        }
        $countBlogCategory = App\BlogCategory::count();
        $category = new App\BlogCategory;
        $category->category = strtolower(str_slug($request->category));
        $category->description = $request->description;
        $category->order = $countBlogCategory + 1;
        $category->save();
        return response()->json(['status' => 'Successfully created new blog category'], 201);
    }
    public function update(Request $request, $categoryId)
    {
        $checkExistCategory = App\BlogCategory::where(['category' => $request->category])->where('id','<>',$categoryId)->exists();
        if ($checkExistCategory) {
            return response()->json(['status' => 'This blog category already exist', 'error' => 'Unprocessable Entity'], 422);
        }
        $category = App\BlogCategory::find($categoryId);
        $category->category = strtolower(str_slug($request->category));
        $category->description = $request->description;
        $category->save();
        return response()->json(['status' => 'Successfully update blog category'], 201);
    }
    public function reorder(Request $request)
    {
        // dd(count($request['data']));
        for ($i = 0; $i < count($request['data']); $i++) {
            $category = App\BlogCategory::find($request['data'][$i]['id']);
            $category->order = $i + 1;
            $category->save();
            # code...
        }
        return response()->json(['status' => 'Successfully reordered category document'], 200);
    }
    public function destroy($categoryId)
    {
        $category = App\BlogCategory::find($categoryId);

        $category->blogs()->update(['blog_category_id'=>0]);
        $category->delete();
        return response()->json(['status' => 'Successfully deleted category document'], 200);
    }

    // public function index()
    // {
    //     $category = App\BlogCategory::all();
    //     return $category;
    // }
    // public function store(Request $request)
    // {
    //     $category = new App\BlogCategory;
    //     $category->category = $request['category'];
    //     $category->save();
    //     return "New Category Has Been Created Succesfully";
    // }
    // public function update(Request $request, $id)
    // {
    //     $category = App\BlogCategory::find($id);
    //     $category->category = $request['category'];
    //     $category->save();
    //     return "The Category Has Been Edited Successfully";
    // }
    // public function destroy($id)
    // {
    //     $category = App\BlogCategory::find($id);

    //     $category->delete();
    //     $blog = App\Blog::where('category_id','=',$id)->update(['category_id'=>0]);

    //     return "The Category Has Been Deleted Successfully";
    // }

}
