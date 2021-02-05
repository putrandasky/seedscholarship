<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class DegreeLevel extends Model
{
  public $timestamps = false;
  public function donor()
  {
    return $this->hasMany('App\Donor');
  }
}
