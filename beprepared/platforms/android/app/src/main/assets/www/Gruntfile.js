module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
        
      uglify: {
        options: {
            manage: false
        //   banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
        },
        my_target: {
            files: {
                'js/desafios.min.js': ['js/desafiosAccion.js'],
                  'js/index.min.js':[ 'js/index.js'],
                  'js/pantallasppales.min.js':['js/pantallasIniciales.js']
            }
        }
        // build: {
        //   src: 'src/<%= pkg.name %>.js',
        //   dest: 'build/<%= pkg.name %>.min.js'
        // }
      },

      cssmin: {
        my_target:{         
          files:[{
            expand: true,
            cwd:'css/',
            src: ['*.css','!*.min.css'],
            dest: 'css/',
            ext: '.min.css'
          }]
        }
      }
      
    });
  
    // Load the plugin for the task
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
  
    // Default task(s).
    grunt.registerTask('default', ['uglify', 'cssmin']);
  
  };