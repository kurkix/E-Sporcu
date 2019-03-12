const sass = require('node-sass');
module.exports =  grunt => {
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  require('load-grunt-tasks')(grunt);
  grunt.initConfig({
    watch:{
      sass:{
        files:['src/styles/sass/*.sass'],
        tasks:['sass']
      }
    },
    sass:{
      compile:{
        files:{
          'src/styles/css/header.css': 'src/styles/sass/header.sass',
          'src/styles/css/home.css': 'src/styles/sass/home.sass'
        }
      },
      options:{
        implementation:sass,
        sourceMap:true
      }
    }
  });
  grunt.registerTask('default',['sass','watch']);
};
