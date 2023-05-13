const { match } = require("assert");

const matchStrings = function (firstFileContents, secondFileContents) {
  const firstStringSet = firstFileContents.trim().split("\n");
  const secondStringSet = secondFileContents.trim().split("\n");
  const splittedStringSet = divideStrings(secondStringSet);

  return firstStringSet.reduce(function(matchedStrings, prefix) {
    const suffix = splittedStringSet[prefix.slice(-4)];
    const joinedString = prefix + suffix + '\n';

    return matchedStrings + joinedString;
  }, '').trim();
};

const divideStrings = function (strings) {
  return strings.reduce(function (dividedStrings, string) {
    const key = string.slice(0, 4);
    const value = string.slice(4);
    dividedStrings[key] = value;

    return dividedStrings;
  }, {});
};

exports.matchStrings = matchStrings;
