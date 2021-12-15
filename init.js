const fs = require('fs');
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log(`${name}, is a citizen of ${folder}`);
rl.close();

rl.question("Project Name: ", function (name) {
    rl.question("Project Version: ", function (version) {
        rl.question("Project Entry Point: ", function (entry) {
            rl.question("Project Entry Point: ", function (d) {
                
            });
        });
    });
});