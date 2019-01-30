const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

// mix.js('resources/js/app.js', 'public/js')
//    .sass('resources/sass/app.scss', 'public/css');
// mix.js('resources/assets/js/awardee/app.js', 'public/js/scriptAwardee.js').sourceMaps(true, 'source-map');
mix.js('resources/assets/js/admin/app.js', 'public/js/script-admin.js').sourceMaps(true, 'source-map');
