<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Scholarship extends Model
{
    public function awardee_nonregs()
    {
        return $this->belongsToMany('App\AwardeeNonreg')->withPivot('is_approved', 'registration_code')->withTimestamps();
    }
}