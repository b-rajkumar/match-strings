const fs = require('fs');

const main = function() {
    const firstFile = process.argv[2];
    const secondFile = process.argv[3];

    const firstFileContents = fs.readFileSync(firstFile);
    const secondFileContents = fs.readFileSync(secondFile);
    console.log(firstFileContents, secondFileContents);
};