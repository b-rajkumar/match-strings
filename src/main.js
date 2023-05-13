const fs = require("fs");
const { matchStrings } = require("./match-strings.js");

const main = function () {
  console.log('1');
  const firstFile = process.argv[2];
  const secondFile = process.argv[3];

  const firstFileContents = fs.readFileSync(firstFile, "utf-8");
  const secondFileContents = fs.readFileSync(secondFile, "utf-8");
  const matchedStrings = matchStrings(firstFileContents, secondFileContents);
};

const benchmark = (fnToBenchmark) => {
  const before = new Date();
  const result = fnToBenchmark();
  const after = new Date();
  return [result, after - before];
};

benchmark(() => main());
