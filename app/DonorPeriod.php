<?php

namespace App;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

class DonorPeriod extends Model
{

    public function getCreatedAtAttribute($date)
    {
        return Carbon::createFromFormat('Y-m-d H:i:s', $date)->format('d-M-y');
    }

    public function getUpdatedAtAttribute($date)
    {
        return Carbon::createFromFormat('Y-m-d H:i:s', $date)->format('d-M-y');
    }
    public function getAgreedAtAttribute($date)
    {
        return $date ? Carbon::createFromFormat('Y-m-d H:i:s', $date)->format('d-M-y') : null;
    }
    public function pco()
    {
        return $this->belongsTo('App\Admin', 'pco');
    }
    public function pr()
    {
        return $this->belongsTo('App\Admin', 'pr');
    }
    public function donor()
    {
        return $this->belongsTo('App\Donor');
    }
    public function period()
    {
        return $this->belongsTo('App\Period');
    }

}
