<?php

namespace App\Http\Middleware;

use Closure;
use Tymon\JWTAuth\Http\Middleware\BaseMiddleware;
class JwtMiddleware extends BaseMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
       $user = auth('admin-api')->user();
        if ($user) {
          return $next($request);
        }else{
            return response()->json(['status' => 'You dont have authorization', 'error' => 'Unauthorized'], 401);
        }
    }
}
