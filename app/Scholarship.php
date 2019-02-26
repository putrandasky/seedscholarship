<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Scholarship extends Model
{
    public function awardee_nonregs()
    {
        return $this->belongsToMany('App\AwardeeNonreg')->withPivot('status', 'registration_code')->withTimestamps();
    }
    public function awardeeNonregScholarship()
    {
        return $this->hasMany('App\AwardeeNonregScholarship');
    }

}
