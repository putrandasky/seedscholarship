<?php

namespace App\Http\Controllers\Auth\Blog;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App;
class BlogCategoryController extends Controller
{
    public function index()
    {
        $category = App\BlogCategory::all();
        return $category;
    }
    public function create(Request $request)
    {
        $category = new App\BlogCategory;
        $category->category = $request['category'];
        $category->save();
        return "New Category Has Been Created Succesfully";
    }
    public function update(Request $request, $id)
    {
        $category = App\BlogCategory::find($id);
        $category->category = $request['category'];
        $category->save();
        return "The Category Has Been Edited Successfully";
    }
    public function delete($id)
    {
        $category = App\BlogCategory::find($id);

        $category->delete();
        $blog = App\Blog::where('category_id','=',$id)->update(['category_id'=>0]);

        return "The Category Has Been Deleted Successfully";
    }

}
