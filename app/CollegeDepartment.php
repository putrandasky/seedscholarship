<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class CollegeDepartment extends Model
{
  public $timestamps = false;
    public function awardees()
    {
      return $this->hasMany('App\Awardee');
    }
    public function donors()
    {
      return $this->hasMany('App\Donor');
    }
}
