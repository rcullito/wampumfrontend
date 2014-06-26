var gulp = require('gulp');
var concat = require('gulp-concat');



gulp.task('build', function() {
  return gulp.src('app/scripts/**/*.js')
    .pipe(concat('wampum.js'))
    .pipe(gulp.dest('dest'));
});


gulp.task('default', function () {
  console.log('welcome');
});