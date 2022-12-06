const fs = require("fs");
const bufferInput = fs.readFileSync("./buffer.txt").toString();

const checkUnique = (str) => {
  const split = str.split("");
  const sorted = split.sort();
  for (let i = 0; i < sorted.length - 1; i++) {
    if (sorted[i] != sorted[i + 1]) {
      continue;
    } else {
      return false;
    }
  }
  return true;
};

const findPacket = (input) => {
  let answer = null;
  let currentStart = 0;
  let currentEnd = 4;
  let found = false;
  while (!found) {
    let chunk = input.substring(currentStart, currentEnd);
    if (checkUnique(chunk)) {
        found = true
        answer = currentEnd;
    } else {
        currentStart++
        currentEnd++
    }
  }
  return answer;
};

const findMessage = (input) => {
  let answer = null;

  let currentStart = 0;
  let currentEnd = 14;

  let found = false;
  while (!found) {
    let chunk = input.substring(currentStart, currentEnd);
    if (checkUnique(chunk)) {
        found = true
        answer = currentEnd;
    } else {
        currentStart++
        currentEnd++
    }
  }
  return answer;
};

console.log(findPacket(bufferInput));
console.log(findMessage(bufferInput));