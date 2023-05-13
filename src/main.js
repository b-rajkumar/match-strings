const fs = require("fs");
const { matchStrings } = require("./match-strings.js");

const main = function () {
  const firstFile = process.argv[2];
  const secondFile = process.argv[3];

  const firstFileContents = fs.readFileSync(firstFile, "utf-8");
  const secondFileContents = fs.readFileSync(secondFile, "utf-8");
  const timeBeforeCall = new Date().valueOf();
  const matchedStrings = matchStrings(firstFileContents, secondFileContents);
  const timeAfterCall = new Date().valueOf();
  const timeTaken = timeAfterCall - timeBeforeCall;
  console.log(timeTaken);
};

main();
