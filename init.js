const fs = require('fs');
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Project Name: ", function (name) {
    rl.question("Type: ", function (folder) {
        console.log(`${name}, ${folder}`);

        if(folder == "") {
            var type = '';
        }
        rl.close();
    });
});