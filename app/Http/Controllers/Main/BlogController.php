<?php

namespace App\Http\Controllers\Main;

use App;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Pagination\LengthAwarePaginator as Paginator;
class BlogController extends Controller
{


    public function index()
    {
        $posts = App\Blog::published()->latest()
        ->paginate(5);

        // return $posts;
        return view('apps.blogs', compact('posts'));

        // $page = 1;
        // $limit = 3;
        // $data = App\Blog::
        //     with(
        //     'blogCategory',
        //     'tags',
        //     'authorable',
        //     'lastStatus'
        // )->get()->where('lastStatus.mod_status','PUBLISH');
        // //paginator($array, $total,$perpage, $page)
        // $array = $data->chunk(1)->collapse()->toArray();
        // $itemSliced = array_slice($array,$page-1,$limit);
        // $item = new Paginator($itemSliced , count($array), $limit, $page,);
        // // return $data;
        // return view('apps.blogs', compact('item'));
    }
    public function show($category, $slug)
    {
        $data = App\Blog::
            whereHas('blogCategory', function ($query) use ($category) {
            $query->where('category', $category);
        })
            ->where('slug', $slug)->with(['blogCategory',
            'tags',
            'authorable',
            'moderations' => function ($query) use ($category) {
                $query->latest('created_at')->first();
            }])->firstOrFail();
        if ($data->moderations[0]->mod_status == 'PUBLISH') {
            return view('apps.blog-detail', compact('data'));
            // return $data;
        }
        abort(404);
    }
}
