<?php

namespace App;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

class DonorTransaction extends Model
{
    public function getTrxDateAttribute($date)
    {
        return Carbon::createFromFormat('Y-m-d H:i:s', $date)->format('d-M-y');
    }
    public function getLastDonateAttribute($date)
    {
        return Carbon::createFromFormat('Y-m-d H:i:s', $date)->format('d-M-y');
    }
    public function getCreatedAtAttribute($date)
    {
        return Carbon::createFromFormat('Y-m-d H:i:s', $date)->format('d-M-y');
    }

    public function getUpdatedAtAttribute($date)
    {
        return Carbon::createFromFormat('Y-m-d H:i:s', $date)->format('d-M-y');
    }
    public function donor()
    {
        return $this->belongsTo('App\Donor');
    }
    public function period()
    {
        return $this->belongsTo('App\Period', 'period_year', 'year');
    }
}
