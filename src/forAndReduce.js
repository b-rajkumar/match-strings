const array = new Array(100000).fill('1');
const timeBeforeFor = new Date().valueOf();

const incrementedArray = array.reduce((newArr,x) => {newArr.push(x + 1); return newArr}, []);

const timeAfterFor = new Date().valueOf();
const timeTaken = timeAfterFor - timeBeforeFor;

console.log(timeTaken);