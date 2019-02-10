<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Period extends Model
{
    public function admin()
    {
        return $this->morphedByMany('App\Admin', 'periodable');
    }
    public function awardee()
    {
        return $this->morphedByMany('App\Awardee', 'periodable');
    }
        public function donors()
    {
        return $this->belongsToMany('App\Donor')->withPivot('donation_category', 'amount')->withTimestamps();
    }
}
