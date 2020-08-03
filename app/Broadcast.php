<?php

namespace App;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

class Broadcast extends Model
{
    public function getCreatedAtAttribute($date)
    {
        return Carbon::createFromFormat('Y-m-d H:i:s', $date)->format('d-M-y');
    }

    public function getUpdatedAtAttribute($date)
    {
        return Carbon::createFromFormat('Y-m-d H:i:s', $date)->format('d-M-y');
    }
    public function broadcast_readers()
    {
        return $this->hasMany('App\BroadcastReader');
    }
    public function broadcast_type()
    {
        return $this->belongsTo('App\BroadcastType');
    }
    public function sender()
    {
        return $this->belongsTo('App\Admin', 'from', 'id');
    }
    public function period()
    {
        return $this->belongsTo('App\Period', 'period', 'id');
    }
    public function scholarship()
    {
        return $this->belongsTo('App\Scholarship', 'period', 'id');
    }
}
