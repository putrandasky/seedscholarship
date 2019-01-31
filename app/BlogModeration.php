<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class BlogModeration extends Model
{
    public function moderateable()
    {
        return $this->morphTo();
    }
    public function blog()
    {
        return $this->belongsTo('App\Blog');
    }
}
