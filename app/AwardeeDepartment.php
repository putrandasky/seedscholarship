<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class AwardeeDepartment extends Model
{
    public function awardees()
    {
      return $this->hasMany('App\Awardee');
    }
}
