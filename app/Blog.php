<?php

namespace App;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

class Blog extends Model
{
    public function getCreatedAtAttribute($date)
    {
        return Carbon::createFromFormat('Y-m-d H:i:s', $date)->format('d-M-y');
    }

    public function getUpdatedAtAttribute($date)
    {
        return Carbon::createFromFormat('Y-m-d H:i:s', $date)->format('d-M-y');
    }
    public function authorable()
    {
        return $this->morphTo();
    }
    public function blogCategory()
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
    public function lastStatus()
    {
        return $this->hasOne('App\BlogModeration')->orderBy('created_at', 'DESC');
    }

    public function scopePublished($query)
    {
        return $query->with('blogCategory','tags')->where('status', 'PUBLISH');
    }

}
