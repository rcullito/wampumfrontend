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
        dest: 'dist'
      },
      css: {
        src: ['app/styles/typeahead.css'],
        dest: 'dist/css/typeahead.css'
      },
      images: {
        expand: true,
        flatten: true,
        src: ['app/images/*'],
        dest: 'dist/images'
      },
      // js: {
      //   src: [
      //     'app/bower_components/jquery/jquery.min.js',
      //     'app/bower_components/angular/angular.min.js',
      //     'app/bower_components/angular-disqus/angular-disqus.js',
      //     'app/bower_components/angular-route/angular-route.min.js',
      //     'app/bower_components/lodash/dist/lodash.min.js',
      //     'app/bower_components/superagent/superagent.js',
      //     'app/bower_components/kineticjs/kinetic.min.js',
      //     'app/public/typeahead.js/dist/typeahead.bundle.min.js'
      //   ],
      //   dest: 'dist/js'
      // }
    },
    concat: {
      options: {
        separator: ';',
      },
      vendor: {
        src: [
          'app/bower_components/jquery/jquery.min.js',
          'app/bower_components/angular/angular.min.js',
          'app/bower_components/angular-disqus/angular-disqus.js',
          'app/bower_components/angular-route/angular-route.min.js',
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
    cssmin: {
      combine: {
        files: {
          'dist/all.css': ['dist/css/tidy.css', 'dist/css/typeahead.css']
        }
      }
    },
    uncss: {
      dist: {
        options: {
          stylesheets: ['../app/public/css/buttons.css', '../app/styles/bootstrap.css', '../app/styles/main.css'],
        },
        files: {
          'dist/css/tidy.css': ['dist/about.html', 'dist/blog.html', 'dist/blogmain.html', 'dist/main.html']
        }
      }
    },
    watch: {
      options: {
        spawn: true,
      },
      js: {
        files: [
          'app/animation/index.js',
          'app/index.html',
          'app/scripts/**/*.js',
          'Gruntfile.js',
        ],
        tasks: ['copy','concat:animation', 'concat:core']
      }
    },
  });

  grunt.registerTask('build', [
    'clean',
    'copy',
    'concat',
    'uncss',
    'cssmin',
  ]);

  grunt.registerTask('default', [
    'build'
  ]);
};
