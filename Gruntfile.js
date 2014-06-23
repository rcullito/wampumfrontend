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
      js: {
        src: ['app/bower_components/kineticjs/kinetic.min.js'],
        dest: 'dist/js/kinetic.min.js'
      },
      images: {
        expand: true,
        flatten: true,
        src: ['app/images/*'],
        dest: 'dist/images'
      }
    },
    concat: {
      options: {
        separator: ';',
      },
      vendor: {
        src: [
          'app/bower_components/angular-disqus/angular-disqus.min.js',
          'app/public/typeaheadFork.min.js',
        ],
        dest: 'dist/js/vendor.js',
      },
      animation: {
        src: ['app/scripts/controllers/main.js'],
        dest: 'app/intermediate/index.js',
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
          'dist/css/tidy.css': ['dist/account.html', 'dist/main.html']
        }
      }
    },
    uglify: {
      my_target: {
        files: {
          'dist/js/wampum.js': [
          'app/scripts/app.js',
          'app/intermediate/index.js',
          'app/scripts/controllers/account.js',
          'app/scripts/controllers/profile.js',
          'app/scripts/directives/*.js',
          'app/scripts/services/*.js',
          ]
        }
      }
    },
    watch: {
      options: {
        spawn: true,
      },
      js: {
        files: [
          'app/index.html',
          'app/scripts/**/*.js',
          'app/styles/main.css',
          'app/views/*.html',
          'Gruntfile.js',
        ],
        tasks: ['build']
      }
    },
  });

  grunt.registerTask('build', [
    'clean',
    'copy',
    'concat',
    'uncss',
    'cssmin',
    'uglify'
  ]);

  grunt.registerTask('default', [
    'build'
  ]);
};
