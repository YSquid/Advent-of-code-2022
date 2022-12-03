//read in the rucksacks from txt file
const fs = require("fs");
const rucks = fs.readFileSync("./rucksacks.txt").toString().split("\n");

//map of values
const priorities = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  f: 6,
  g: 7,
  h: 8,
  i: 9,
  j: 10,
  k: 11,
  l: 12,
  m: 13,
  n: 14,
  o: 15,
  p: 16,
  q: 17,
  r: 18,
  s: 19,
  t: 20,
  u: 21,
  v: 22,
  w: 23,
  x: 24,
  y: 25,
  z: 26,
  A: 27,
  B: 28,
  C: 29,
  D: 30,
  E: 31,
  F: 32,
  G: 33,
  H: 34,
  I: 35,
  J: 36,
  K: 37,
  L: 38,
  M: 39,
  N: 40,
  O: 41,
  P: 42,
  Q: 43,
  R: 44,
  S: 45,
  T: 46,
  U: 47,
  V: 48,
  W: 49,
  X: 50,
  Y: 51,
  Z: 52,
};

//split the ruck evenly
//find the item that is common to both halves
//push that common element to a holder array

const commons = [];

for (let ruck of rucks) {
  const str1 = ruck.slice(0, ruck.length / 2);
  const str2 = ruck.slice(ruck.length / 2, ruck.length);
  const sackCommons = [];
  const uniqueSackCommons = [];

  const findCommonElement = (str1, str2) => {
    for (let i = 0; i < str1.length; i++) {
      for (let j = 0; j < str2.length; j++) {
        let commonElement = "";
        if (str1[i] === str2[j]) {
          commonElement = str1[i];
          sackCommons.push(commonElement);
          if (uniqueSackCommons.indexOf(commonElement) === -1) {
            uniqueSackCommons.push(commonElement);
            commons.push(commonElement);
          }
        }
      }
    }
  };
  findCommonElement(str1, str2);
}

const countPrios = (array, prios) => {
  let count = 0;
  for (const letter of array) {
    count += prios[letter];
  }
  return count;
};

console.log(commons);
console.log(countPrios(commons, priorities));