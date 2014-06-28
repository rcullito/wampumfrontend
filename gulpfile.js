var gulp = require('gulp'),
  cssmin = require('gulp-cssmin'),
  concat = require('gulp-concat');



gulp.task('localjs', function() {
  return gulp.src('app/scripts/**/*.js')
    .pipe(concat('wampum.js'))
    .pipe(gulp.dest('dest/js'));
});

gulp.task('vendorjs', function () {
  return gulp.src('app/public/typeaheadFork.min.js')
    .pipe(concat('vendor.js'))
    .pipe(gulp.dest('dest/js'));
});

gulp.task('index', function () {
  return gulp.src('app/index.html')
    .pipe(gulp.dest('dest'));
});

gulp.task('views', function () {
  return gulp.src('app/views/*.html')
    .pipe(gulp.dest('dest'));
});

gulp.task('css', function () {
  return gulp.src(['app/styles/typeahead.css', 'app/public/css/buttons.css', 'app/styles/bootstrap.css', 'app/styles/main.css'])
    .pipe(concat('all.css'))
    .pipe(cssmin())
    .pipe(gulp.dest('dest'))
})

// worry about watch second


gulp.task('default', [
  'localjs',
  'vendorjs',
  'index',
  'views',
  'css'
]);

