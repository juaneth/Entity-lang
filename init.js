const fs = require('fs');
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Project Name: ", function (name) {
    rl.question("Project Folder: ", function (folder) {
        console.log(`${name}, is a citizen of ${folder}`);
        rl.close();
    });
});