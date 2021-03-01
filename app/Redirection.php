<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Redirection extends Model
{
    public function admin()
    {
        return $this->belongsTo('App\admin');
    }
}
