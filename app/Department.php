<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Department extends Model
{
    public function admins()
    {
        return $this->hasMany('App\Admin');
    }
    public function roles()
    {
        return $this->hasMany('App\Role');
    }

}
