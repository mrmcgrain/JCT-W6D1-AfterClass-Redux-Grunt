module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      // Configure Browserify
      browserify: {
        options: {
          transform: [
            ['babelify', { presets: ['@babel/preset-env', '@babel/preset-react'] }]
          ],
          extensions: ['.jsx'], // Ensure Babelify applies to .jsx files
          browserifyOptions: {
            debug: true, // Enables source map
            extensions: ['.jsx'] // Ensure Browserify processes .jsx files
          }
        },
        app: {
          src: 'src/main.jsx', // Adjusted for .jsx entry point
          dest: 'dist/bundle.js'
        }
      }
      
    });
  
    // Load the plugin that provides the "browserify" task.
    grunt.loadNpmTasks('grunt-browserify');
  
    // Default task(s).
    grunt.registerTask('default', ['browserify']);
  };
  