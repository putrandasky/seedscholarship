<?php

namespace App;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

class BroadcastReader extends Model
{
    public function getCreatedAtAttribute($date)
    {
        return Carbon::createFromFormat('Y-m-d H:i:s', $date)->format('d-M-y H:i:s');
    }

    public function getUpdatedAtAttribute($date)
    {
        return Carbon::createFromFormat('Y-m-d H:i:s', $date)->format('d-M-y H:i:s');
    }
    public function accountable()
    {
        return $this->morphTo();
    }
    public function broadcast()
    {
        return $this->belongsTo('App\Broadcast');
    }
}
