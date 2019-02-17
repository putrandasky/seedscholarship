<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;

class Period extends Model
{
      public function getCreatedAtAttribute($date)
    {
        return Carbon::createFromFormat('Y-m-d H:i:s', $date)->format('d-M-y');
    }

    public function getUpdatedAtAttribute($date)
    {
        return Carbon::createFromFormat('Y-m-d H:i:s', $date)->format('d-M-y');
    }
    public function admin()
    {
        return $this->morphedByMany('App\Admin', 'periodable')->withPivot('status')->withTimestamps();
    }
    public function awardee()
    {
        return $this->morphedByMany('App\Awardee', 'periodable')->withPivot('status')->withTimestamps();
    }
        public function donors()
    {
        return $this->belongsToMany('App\Donor')->withPivot('donation_category', 'amount','contract_number','token','is_contract_agreed','agreed_at')->withTimestamps();
    }
}
