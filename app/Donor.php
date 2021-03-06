<?php

namespace App;

use Tymon\JWTAuth\Contracts\JWTSubject;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Carbon\Carbon;

class Donor extends Authenticatable implements JWTSubject
{
    use Notifiable;

    // protected $guard = ['admin'];
    public function getCreatedAtAttribute($date)
    {
        return Carbon::createFromFormat('Y-m-d H:i:s', $date)->format('d-M-y');
    }

    public function getUpdatedAtAttribute($date)
    {
        return Carbon::createFromFormat('Y-m-d H:i:s', $date)->format('d-M-y');
    }

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token'
    ];
    public function blogs()
    {
        return $this->morphMany('App\Blog', 'authorable');
    }
        public function collegeDepartment()
    {
      return $this->belongsTo('App\CollegeDepartment');
    }
    //     public function periods()
    // {
    // return $this->belongsToMany('App\Period')->withPivot('donation_category', 'amount','contract_number','token','is_contract_agreed','donation_token','agreed_at')->withTimestamps();
    // }

    public function donorPeriods()
    {
      return $this->hasMany('App\DonorPeriod');
    }
    public function donorTransactions()
    {
      return $this->hasMany('App\DonorTransaction');
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
