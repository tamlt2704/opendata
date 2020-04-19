1. Setup project
    npm init -y
    npx license mit > LICENSE
    npx gitignore node

2. Dependencies
    npm install --save-dev express
    npm install --save-dev nodemon 
    
    grunt
        npm install --save-dev grunt-cafe-mocha
        npm install --save-dev grunt-contrib-jshint
        npm install --save-dev grunt-exec

3. Create ui page    
    create-react-app ui     : client page
    create-react-app admin  : admin page
    api                     : express route for api
    lib                     : js common code
    data
        raw_data
        process_data

4. Gruntfile
    npm install --save-dev grunt

5. Dev notes
    run command from vim buffer
        :<line_start>,<line_end>write !bash
        ex: 2,4write !bash

    node modules
        lib.js
            exports.greeting = 'hello world';
            exports.add = function(a, b) {
                return a + b;
            }

        OR 
            export = {
                greeting: 'hello world',
                add: (a,b) => a + b;
            }
        index.js
            var lib = require('./lib');
            console.log(lib.greeting);


