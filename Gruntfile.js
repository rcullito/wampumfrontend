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
    watch: {
      coffee: {
        files: ['<%= yeoman.app %>/scripts/{,*/}*.coffee'],
        tasks: ['coffee:dist']
      },
      coffeeTest: {
        files: ['test/spec/{,*/}*.coffee'],
        tasks: ['coffee:test']
      },
      styles: {
        files: ['<%= yeoman.app %>/styles/{,*/}*.css'],
        tasks: ['copy:styles', 'autoprefixer']
      },
      livereload: {
        options: {
          livereload: LIVERELOAD_PORT
        },
        files: [
          '<%= yeoman.app %>/{,*/}*.html',
          '.tmp/styles/{,*/}*.css',
          '{.tmp,<%= yeoman.app %>}/scripts/{,*/}*.js',
          '<%= yeoman.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
        ]
      }
    },
    clean: {
      build: ['dist']
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: [
        'Gruntfile.js',
        '<%= yeoman.app %>/scripts/{,*/}*.js'
      ]
    },
    imagemin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>/images',
          src: '{,*/}*.{png,jpg,jpeg}',
          dest: '<%= yeoman.dist %>/images'
        }]
      }
    },
    cssmin: {
      // By default, your `index.html` <!-- Usemin Block --> will take care of
      // minification. This option is pre-configured if you do not wish to use
      // Usemin blocks.
      // dist: {
      //   files: {
      //     '<%= yeoman.dist %>/styles/main.css': [
      //       '.tmp/styles/{,*/}*.css',
      //       '<%= yeoman.app %>/styles/{,*/}*.css'
      //     ]
      //   }
      // }
    },
    htmlmin: {
      dist: {
        options: {
          /*removeCommentsFromCDATA: true,
          // https://github.com/yeoman/grunt-usemin/issues/44
          //collapseWhitespace: true,
          collapseBooleanAttributes: true,
          removeAttributeQuotes: true,
          removeRedundantAttributes: true,
          useShortDoctype: true,
          removeEmptyAttributes: true,
          removeOptionalTags: true*/
        },
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>',
          src: ['*.html', 'views/*.html'],
          dest: '<%= yeoman.dist %>'
        }]
      }
    },
    // Put files not handled in other tasks here
    concat: {
      options: {
        separator: ';',
      },
      animation: {
        src: ['app/scripts/controllers/home.js', 'app/animation/index.js'],
        dest: 'app/scripts/controllers/main.js',
      },
      vendor: {
        // TODO see if we can remove any of these, verify against nibbler
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
      core: {
        src: [
          'app/scripts/app.js',
          'app/scripts/controllers/main.js',
          'app/scripts/controllers/blog.js',
          'app/scripts/directives/*.js',
          'app/scripts/services/*.js',

          ],
        dest: 'dist/js/wampum.js',
      },
    }
  });


  grunt.registerTask('build', [
    'clean',
    'concat',
  ]);

  grunt.registerTask('default', [
    'build'
  ]);
};
