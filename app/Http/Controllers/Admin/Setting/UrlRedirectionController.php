<?php

namespace App\Http\Controllers\Admin\Setting;

use App;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UrlRedirectionController extends Controller
{
    public function redirect($path)
    {
        $data = App\Redirection::where('path', $path)->first();
        if (!$data) {
            abort(404);
        }
        $data->visited++;
        $data->save();
        header("Location: {$data->url}");
    }

    public function index()
    {
        $data = App\Redirection::with([
            'admin' => function ($query) {
                $query->select('id', 'name', 'initial');
            },
        ])->get();
        return $data;

    }

    public function addLink(Request $request)
    {
        $this->validate($request, [
            'path' => 'required|string|min:4|unique:redirections',
            'url' => 'required|string|url',
        ]);
        $redirection = new App\Redirection();
        $redirection->path = str_replace(" ", "-", $request->path);
        $redirection->url = $request->url;
        $redirection->admin_id = auth('admin-api')->user()->id;
        $redirection->save();

        return response()->json(['status' => 'SUCCESS', 'message' => 'Redirection link successfully added'], 200);

    }

    public function updateLink(Request $request, $redirection_id)
    {
        $this->validate($request, [
            'path' => 'required|string|min:4|unique:redirections',
            'url' => 'required|string|url',
        ]);

        $redirection = App\Redirection::where('id', $redirection_id)->first();
        $redirection->path = str_replace(" ", "-", $request->path);
        $redirection->url = $request->url;
        $redirection->save();
        return response()->json(['status' => 'SUCCESS', 'message' => 'Redirection link successfully edited'], 200);
    }

    public function deleteLink($redirection_id)
    {
        $redirection = App\Redirection::where('id', $redirection_id)->first();
        $redirection->delete();
        return response()->json(['status' => 'SUCCESS', 'message' => 'Redirection link successfully deleted'], 200);

    }
}
