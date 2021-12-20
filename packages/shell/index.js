module.exports = function log(content) {
    console.log(content)
    return `Logged: ${content}`;
};

module.exports = function question(content) {
    const readline = require("readline");

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    rl.question(content, function (answer) {
        rl.close();
    });

    return `Finished: ${answer}`;
};