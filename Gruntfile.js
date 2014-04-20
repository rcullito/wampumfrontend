// Generated on 2013-10-20 using generator-angular 0.4.0
'use strict';
var LIVERELOAD_PORT = 35729;
// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt);
  require('time-grunt')(grunt);

  grunt.initConfig({
    clean: {
      build: ['dist']
    },
    copy: {
      index: {
        src: 'app/index.html',
        dest: 'dist/index.html'
      },
      html: {
        expand: true,
        flatten: true,
        src: ['app/views/*.html'],
        dest: 'dist/views'
      },
      buttoncss: {
        src: 'app/public/css/buttons.css',
        dest: 'dist/styles/buttons.css'
      },
      css: {
        expand: true,
        flatten: true,
        src: 'app/styles/*.css',
        dest: 'dist/styles'
      },
      images: {
        expand: true,
        flatten: true,
        src: ['app/images/*'],
        dest: 'dist/images'
      },
    },
    concat: {
      options: {
        separator: ';',
      },
      vendor: {
        src: [
          'app/bower_components/jquery/jquery.js',
          'app/bower_components/angular/angular.js',
          'app/bower_components/angular-disqus/angular-disqus.js',
          'app/bower_components/angular-resource/angular-resource.js',
          'app/bower_components/angular-cookies/angular-cookies.js',
          'app/bower_components/angular-sanitize/angular-sanitize.js',
          'app/bower_components/angular-route/angular-route.js',
          'app/bower_components/lodash/dist/lodash.min.js',
          'app/bower_components/superagent/superagent.js',
          'app/bower_components/kineticjs/kinetic.min.js',
          'app/public/typeahead.js/dist/typeahead.bundle.min.js',
        ],
        dest: 'dist/js/vendor.js',
      },
      animation: {
        src: ['app/scripts/controllers/main.js', 'app/animation/index.js'],
        dest: 'app/intermediate/index.js',
      },
      core: {
        src: [
          'app/scripts/app.js',
          'app/intermediate/index.js',
          'app/scripts/controllers/blog.js',
          'app/scripts/directives/*.js',
          'app/scripts/services/*.js',

          ],
        dest: 'dist/js/wampum.js',
      },
    },
    watch: {
      options: {
        spawn: true,
      },
      js: {
        files: [
          'app/animation/index.js',
          'app/scripts/**/*.js',
          'Gruntfile.js',
        ],
        tasks: ['concat:animation', 'concat:core']
      }
    },
  });

  grunt.registerTask('build', [
    'clean',
    'copy',
    'concat',
  ]);

  grunt.registerTask('default', [
    'build'
  ]);
};
