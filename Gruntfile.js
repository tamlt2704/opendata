module.exports = (grunt) => {
    // load plugins
    [
        'grunt-cafe-mocha',
        'grunt-contrib-jshint',
        'grunt-exec',
    ].forEach((task) => {
        grunt.loadNpmTasks(task);
    });

    // configure plugins
    grunt.initConfig({
        cafemocha: {
            all: {src : 'qa/tests-*.js', options: {ui: 'tdd',}}
        },
        jshint: {
            options: {
                esversion: 6,
            },
            lib: ['lib/**/*.js', 'Gruntfile.js'],
        }
    });

    grunt.registerTask('default', ['cafemocha', 'jshint']);
    grunt.registerTask('fetchVcbData', 'fetch vcb data', function() {
        const datahelper = require('./lib/datahelper.js');
        datahelper.fetchVcbData();
    });
};
