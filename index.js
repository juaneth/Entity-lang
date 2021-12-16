const fs = require('fs');

var argv = require('minimist')(process.argv.slice(2));

translate('./index.entity')

function translate(path) {
    var code = fs.readFileSync(path, 'utf-8').split('\n')

    var packages

    if (code[0].includes('use: ')) {
        console.log('Packages: ')
        console.log(code[0]);
    }
}