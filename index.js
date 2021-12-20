#!/usr/bin/env node

const fs = require('fs');

var argv = require('minimist')(process.argv.slice(2));

translate('./index.entity')

function translate(path) {
    var code = fs.readFileSync(path, 'utf-8').split('\n')

    var packages

    if (code[0].includes('use: ')) {
        var packages = code[0].substr(5);

        console.log(`Packages: -> ${packages}`)
        console.log('\nChecking if packages installed...')

        packages.split(', ').forEach(element => {
            const package = require(`./packages/${element}/index.js`);
        });
    }
    else {

    }
}