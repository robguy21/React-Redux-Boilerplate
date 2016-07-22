gulp         = require 'gulp'
autoprefixer = require 'gulp-autoprefixer'
cssnano      = require 'gulp-cssnano'
sass         = require 'gulp-sass'
sourcemaps   = require 'gulp-sourcemaps'

conf = require '../gulpconfig'





#*------------------------------------*\
#     $CSS
#*------------------------------------*/
gulp.task 'css', () ->
  gulp.src(["#{conf.path.dev.css}/**/*.{scss,sass}"])
    .pipe sourcemaps.init()
    .pipe sass().on('error', sass.logError)
    .pipe autoprefixer({browsers: ['last 2 versions']})
    .pipe sourcemaps.write()
    .pipe gulp.dest(conf.path.dist.css)





#*------------------------------------*\
#     $CSS MINIFY
#*------------------------------------*/
gulp.task 'css:minify', () ->
  gulp.src(["#{conf.path.dev.css}/**/*.{scss,sass}"])
    .pipe sass().on('error', sass.logError)
    .pipe autoprefixer({browsers: ['last 2 versions']})
    .pipe cssnano()
    .pipe gulp.dest(conf.path.dist.css)





#*------------------------------------*\
#     $CSS WATCH
#*------------------------------------*/
gulp.task 'css:watch', ['css'], () ->
  global.browserSync.reload('*.css')
