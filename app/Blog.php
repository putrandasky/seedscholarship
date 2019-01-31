<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Blog extends Model
{
    public function authorable()
    {
        return $this->morphTo();
    }
    public function category()
    {
      return $this->belongsTo('App\BlogCategory');
    }
    public function tags()
    {
        return $this->morphToMany('App\Tag', 'taggable');
    }
    public function moderations()
    {
        return $this->hasMany('App\BlogModeration');
    }

}
