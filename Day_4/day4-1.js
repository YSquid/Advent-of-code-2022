const fs = require("fs");
const pairs = fs.readFileSync("./pairs.txt").toString().split("\n");
const pairsSplit = pairs.map((pair) => pair.split(","));


const ranged = pairsSplit.map((pair) => {
  return pair.map((range) => {
    return range.split("-");
  });
});

const rangedOut = ranged.map((pair) => {
  return pair.map((range) => {
    const min = parseInt(range[0]);
    const max = parseInt(range[1]);
    const newRange = [];
    for (let i = min; i <= max; i++) {
      newRange.push(i);
    }
    return newRange;
  });
});

const checkRanges = rangedOut.map((pair) => {
    let arr = pair[0]
    let target = pair [1]
    if (pair[0].length < pair[1].length) {
        arr = pair[1]
        target = pair[0]
    }

    let checker = (arr, target) => target.every(v => arr.includes(v));

    if (checker(arr, target)) {
        return 1
    } else {
        return 0
    }
})

const sumMatches = checkRanges.reduce((acc, next) => acc + next)
console.log(sumMatches)


