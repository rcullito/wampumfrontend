var gulp = require('gulp');
var concat = require('gulp-concat');



gulp.task('concatlocaljs', function() {
  return gulp.src('app/scripts/**/*.js')
    .pipe(concat('wampum.js'))
    .pipe(gulp.dest('dest/js'));
});

gulp.task('concatvendorjs', function () {
  return gulp.src('app/public/typeaheadFork.min.js')
    .pipe(concat('vendor.js'))
    .pipe(gulp.dest('dest/js'));
});

gulp.task('copyindexfile', function () {
  return gulp.src('app/index.html')
    .pipe(gulp.dest('dest'));
});

gulp.task('copyviews', function () {
  return gulp.src('app/views/*.html')
    .pipe(gulp.dest('dest'));
});

// get dest to resemble dist exactly and then cut everything over

// worry about watch second


gulp.task('default', [
  'concatlocaljs',
  'concatvendorjs',
  'copyindexfile',
  'copyviews'
]);

