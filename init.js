const fs = require('fs');
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Project Name: ", function (name) {
    rl.question("", function (country) {
        console.log(`${name}, is a citizen of ${country}`);
        rl.close();
    });
});