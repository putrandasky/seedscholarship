<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;

class AwardeeNonregScholarship extends Model
{
        public function getCreatedAtAttribute($date)
    {
        return Carbon::createFromFormat('Y-m-d H:i:s', $date)->format('d-M-y');
    }

    public function getUpdatedAtAttribute($date)
    {
        return Carbon::createFromFormat('Y-m-d H:i:s', $date)->format('d-M-y');
    }


    public function awardeeNonreg()
    {
        return $this->belongsTo('App\AwardeeNonreg');
    }
    public function scholarship()
    {
        return $this->belongsTo('App\Scholarship');
    }
}
