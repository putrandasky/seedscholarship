<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class DonorRegistration extends Model
{
    public function donor()
    {
        return $this->belongsTo('App\Donor');
    }
}
