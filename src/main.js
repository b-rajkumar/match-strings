const fs = require("fs");
const { matchStrings } = require("./match-strings.js");

const main = function () {
  const firstFile = process.argv[2];
  const secondFile = process.argv[3];

  const firstFileContents = fs.readFileSync(firstFile, "utf-8");
  const secondFileContents = fs.readFileSync(secondFile, "utf-8");
  const matchedStrings = matchStrings(firstFileContents, secondFileContents);
  console.log(matchedStrings);
};

main();
