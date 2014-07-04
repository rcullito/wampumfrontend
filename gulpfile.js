var gulp = require('gulp'),
  cssmin = require('gulp-cssmin'),
  uglify = require('gulp-uglify')
  concat = require('gulp-concat');

var srcFiles = [
  'app/index.html',
  'app/scripts/**/*.js',
  'app/styles/main.css',
  'app/views/*.html',
  'gulpfile.js',
];

gulp.task('localjs', function() {
  return gulp.src('app/scripts/**/*.js')
    .pipe(uglify())
    .pipe(concat('wampum.js'))
    .pipe(gulp.dest('dest/js'));
});

gulp.task('directives', function() {
  return gulp.src('app/directives/directive.js')
    .pipe(gulp.dest('dest/js'))
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
    // uncss here potentially
    .pipe(cssmin())
    .pipe(concat('all.css'))
    .pipe(gulp.dest('dest'))
})

gulp.task('watch', function() {
  gulp.watch(srcFiles, ['build']);
});

gulp.task('build', [
  'localjs',
  'directives',
  'vendorjs',
  'index',
  'views',
  'css'
]);
