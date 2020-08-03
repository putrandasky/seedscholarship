<?php

namespace App\Http\Controllers\Admin\Setting;

use App;
use App\Http\Controllers\Controller;

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
}
