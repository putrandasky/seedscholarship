<?php

namespace App;

use Tymon\JWTAuth\Contracts\JWTSubject;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class Donor extends Authenticatable implements JWTSubject
{
    use Notifiable;

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
        'password', 'remember_token'
    ];
    public function blogs()
    {
        return $this->morphMany('App\Blog', 'authorable');
    }
        public function awardeeDepartment()
    {
      return $this->belongsTo('App\AwardeeDepartment');
    }
        public function periods()
    {
        return $this->belongsToMany('App\Period')->withPivot('donation_category', 'amount')->withTimestamps();
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