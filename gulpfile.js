var gulp = require('gulp');
var concat = require('gulp-concat');
var cleanCSS = require('gulp-clean-css');

gulp.task('default',  function() {
    return gulp.src(['stylesheets/bootstrap.css'])
        .pipe(cleanCSS())
        .pipe(concat('bootstrap-lite.min.css'))
        .pipe(gulp.dest('dist'));
});