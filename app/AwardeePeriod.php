<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;
class AwardeePeriod extends Model
{
    public function getCreatedAtAttribute($date)
    {
        return Carbon::createFromFormat('Y-m-d H:i:s', $date)->format('d-M-y');
    }

    public function getUpdatedAtAttribute($date)
    {
        return Carbon::createFromFormat('Y-m-d H:i:s', $date)->format('d-M-y');
    }


    public function awardee()
    {
        return $this->belongsTo('App\Awardee');
    }
    public function period()
    {
        return $this->belongsTo('App\Period');
    }
}
