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

var build_dir = '../wampumbackend/static';
var build_dir_js = '../wampumbackend/static/js';

gulp.task('localjs', function() {
  return gulp.src('app/scripts/**/*.js')
    .pipe(uglify())
    .pipe(concat('wampum.js'))
    .pipe(gulp.dest(build_dir_js));
});

gulp.task('directives', function() {
  return gulp.src('app/directives/directive.js')
    .pipe(gulp.dest(build_dir_js))
});

gulp.task('vendorjs', function () {
  return gulp.src(['app/public/typeaheadFork.min.js', 'app/public/lodash.min.js'])
    .pipe(concat('vendor.js'))
    .pipe(gulp.dest(build_dir_js));
});

gulp.task('index', function () {
  return gulp.src('app/index.html')
    .pipe(gulp.dest(build_dir));
});

gulp.task('views', function () {
  return gulp.src('app/views/*.html')
    .pipe(gulp.dest(build_dir));
});

gulp.task('css', function () {
  // return gulp.src(['app/styles/typeahead.css', 'app/public/css/buttons.css', 'app/styles/bootstrap.css', 'app/styles/main.css'])
  return gulp.src(['app/public/css/buttons.css', 'app/styles/bootstrap.css', 'app/styles/main.css'])  
    // uncss here potentially
    .pipe(cssmin())
    .pipe(concat('all.css'))
    .pipe(gulp.dest(build_dir))
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
