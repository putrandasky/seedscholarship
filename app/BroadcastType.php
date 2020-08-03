<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class BroadcastType extends Model
{
  public $timestamps = false;
  public function broadcast()
  {
      return $this->hasMany('App\Broadcast');
  }
}
