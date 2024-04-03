module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // Browserify configuration
    browserify: {
      options: {
        transform: [
          ['babelify', { presets: ['@babel/preset-env', '@babel/preset-react'] }]
        ],
        extensions: ['.jsx'],
        browserifyOptions: {
          debug: true,
          extensions: ['.jsx']
        }
      },
      app: {
        src: 'src/main.jsx',
        dest: 'dist/bundle.js'
      }
    },

    // Uglify configuration
    uglify: {
      options: {
        // Use to add a banner or configure other options
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'dist/bundle.js',
        dest: 'dist/bundle.min.js' // Output file after minification
      }
    }
  });

  // Load the Grunt plugins.
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Register default task.
  grunt.registerTask('default', ['browserify', 'uglify']);
};
