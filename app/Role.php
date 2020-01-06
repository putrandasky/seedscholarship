<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Role extends Model
{
    public function permissions()
    {
        return $this->belongsToMany('App\Permission');
    }
    public function department()
    {
        return $this->belongsTo('App\Department');
    }
    public function admins()
    {
        return $this->hasMany('App\Admin');
    }
}
