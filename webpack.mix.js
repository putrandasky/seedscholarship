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
mix.js('resources/assets/js/awardee/app.js', 'public/js/awardee/script-awardee.js').sourceMaps(true, 'source-map')
.js('resources/assets/js/admin/app.js', 'public/js/admin/script-admin.js').sourceMaps(true, 'source-map')
.js('resources/assets/js/nonreg/app.js', 'public/js/nonreg/script-nonreg.js').sourceMaps(true, 'source-map')
.js('resources/assets/js/website/main.js', 'public/js/website/script.js').sourceMaps(true, 'source-map');
