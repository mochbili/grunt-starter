module.exports = function (grunt) {
  // display time execution
  require('time-grunt')(grunt);

  grunt.initConfig({
    // run package.json
    pkg: grunt.file.readJSON('package.json'),

    // new tast here

    // imagemin task
    imagemin: {
      dynamic: {
        options: {
          optimizationLevel: 3,
        },
        files: [{
          expand: true,
          cwd: 'img/',
          src: ['**/*.{png,jpg,gif}'],
          dest: 'img/'
        }]
      }
    }, // end imagemin task

    // uncss task
    uncss: {
      dist: {
        files: {
          'css/style.min.css': ['index.html']
        }
      }
    }, // end tash uncss

    // watch task
    watch: {
      css: {
        files: 'sass/*.scss',
        tasks: ['sass', 'cssmin', 'uncss'],
        options: {
          livereload: true,
        },
      },
    }, // end watch task

    // sass task
    sass: {
      dist: {
        options: {
          style: 'expanded',
          sourcemap: 'none'
        },
        files: {
          'css/style.css': 'sass/style.scss'
        }
      }
    }, // end sass task

    // concat tast
    concat: {
      options: {
        separator: ';',
        stripBanners: true,
        banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
          '<%= grunt.template.today("yyyy-mm-dd") %> */'
      },
      dist: {
        src: ['js/script.js', 'js/script2.js'],
        dest: 'js/main.min.js',
      },
    }, // end concat task

    // uglify task
    uglify: {
      my_target: {
        options: {
          mangle: false
        },
        files: {
          'js/main.min.js': ['js/script.js', 'js/script2.js']
        }
      }
    }, // end uglify task

    // cssmin task
    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'css',
          src: ['*.css', '!*.min.css'],
          dest: 'css',
          ext: '.min.css'
        }]
      }
    } // end cssmin task

  });
  // load task here
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-uncss');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-notify');

  grunt.task.run('notify_hooks');

  // default task
  grunt.registerTask('default', ['watch']);
};
