const fs = require("fs");
const { matchStrings } = require('./match-strings.js');
const {matchArrOfStrings} = require('./match-using-arrays.js');

const main = function () {
  const firstFile = process.argv[2];
  const secondFile = process.argv[3];
  const firstFileContents = fs.readFileSync(firstFile, "utf-8");
  const secondFileContents = fs.readFileSync(secondFile, "utf-8");

  const arrFunction = () => matchArrOfStrings(firstFileContents, secondFileContents);
  const objFunction = () => matchStrings(firstFileContents, secondFileContents);
  const timeDifference = getTimeDifference(arrFunction, objFunction);

  console.log(`The average time difference between arr and obj method is ${timeDifference}`);
};


const benchmark = (fnToBenchmark) => {
  const before = new Date();
  const result = fnToBenchmark();
  const after = new Date();
  return [result, after - before];
};

const getTimeDifference = function(arrFunction, objFunction) {
  let averageTimeDifference = 0;

  for(let run = 0; run < 10; run++) {
    const timeTakenByArr = benchmark(() => arrFunction())[1];
    const timeTakenByObj = benchmark(() => objFunction())[1];
    averageTimeDifference = timeTakenByArr - timeTakenByObj;
  }

  return averageTimeDifference / 10;
}

main();