<?php

namespace App;

use Carbon\Carbon;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Tymon\JWTAuth\Contracts\JWTSubject;

class AwardeeNonreg extends Authenticatable implements JWTSubject
{
    use Notifiable;
    public function getCreatedAtAttribute($date)
    {
        return Carbon::createFromFormat('Y-m-d H:i:s', $date)->format('d-M-y');
    }

    public function getUpdatedAtAttribute($date)
    {
        return Carbon::createFromFormat('Y-m-d H:i:s', $date)->format('d-M-y');
    }
    protected $fillable = [
        'name', 'email', 'password',
    ];
    protected $hidden = [
        'password', 'remember_token',
    ];
    public function scholarships()
    {
        return $this->belongsToMany('App\Scholarship')->withPivot('status', 'registration_code')->withTimestamps();
    }
    public function collegeDepartment()
    {
        return $this->belongsTo('App\CollegeDepartment');
    }
    public function awardeeNonregScholarships()
    {
        return $this->hasMany('App\AwardeeNonregScholarship');
    }
    public function broadcast_readers()
    {
        return $this->morphMany('App\BroadcastReader', 'accountable');
    }
    public function getJWTIdentifier()
    {
        return $this->getKey();
    }
    public function getJWTCustomClaims()
    {
        return [];
    }
}
