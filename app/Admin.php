<?php

namespace App;

use Carbon\Carbon;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Tymon\JWTAuth\Contracts\JWTSubject;

class Admin extends Authenticatable implements JWTSubject
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
    // protected $guard = ['admin'];

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
        'password', 'remember_token',
    ];
    public function blogs()
    {
        return $this->morphMany('App\Blog', 'authorable');
    }
    public function department()
    {
        return $this->belongsTo('App\Department');
    }
    public function role()
    {
        return $this->belongsTo('App\Role');
    }
    public function donorPeriods()
    {
        return $this->hasMany('App\DonorPeriods', 'pco');
    }
    public function redirections()
    {
        return $this->hasMany('App\Redirection');
    }
    public function periods()
    {
        return $this->morphToMany('App\Period', 'periodable')->withPivot('status')->withTimestamps();
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
