const matchArrOfStrings = function (firstFileContents, secondFileContents) {
  let firstStringSet = firstFileContents.trim().split("\n");
  let secondStringSet = secondFileContents.trim().split("\n").sort();
  firstStringSet = firstStringSet.map((string) => string.slice(-4) + string.slice(0, -4)).sort();
  
  return secondStringSet.reduce((matchedStrings, suffix, index) => {
    const prefix = firstStringSet[index].slice(4);
    return matchedStrings + prefix + suffix + "\n";
  }, "");
};

exports.matchArrOfStrings = matchArrOfStrings;
