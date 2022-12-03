const fs = require("fs");
const rucks = fs.readFileSync("./rucksacks.txt").toString().split("\n");

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

//split into teams of 3
const splitIntoTeams = (rucks) => {
  const teamSize = 3;
  const teams = [];
  for (let i = 0; i < rucks.length; i += teamSize) {
    const team = rucks.slice(i, i + teamSize);
    teams.push(team);
  }
  return teams;
};

//convert letters into numbers to allow sorting methods to be used
const convertToNums = (teams, numbers) => {
  const newTeams = [];
  for (let team of teams) {
    const teamAsNumbers = [];
    for (let ruck of team) {
      let ruckSplit = ruck.split("");
      for (let i = 0; i < ruckSplit.length; i++) {
        ruckSplit[i] = numbers[ruckSplit[i]];
      }
      teamAsNumbers.push(ruckSplit.sort((a, b) => a - b));
    }
    newTeams.push(teamAsNumbers);
  }
  return newTeams;
};
//algorithm to find common elements of three sorted arrays
const findCommonNumber = (arr1, arr2, arr3, n1, n2, n3) => {
  let commonNumbers = [];
  //start indexs for respective arrays (arr1 = i, arr2 = j, arr3 = k)
  let i = (j = k = 0);
  //iterate all arrays while they have elements to inspect
  //n values are length of respective arrays
  while (i < n1 && j < n2 && k < n3) {
    //if x = y and y = z, push to commons array and increment all
    if (arr1[i] == arr2[j] && arr2[j] == arr3[k]) {
      commonNumbers.push(arr1[i]);
      i++;
      j++;
      k++;
    }

    //x < y - arr1[i] is smallest value, increment i
    else if (arr1[i] < arr2[j]) i++;
    //y < z - arr2[j] is smallest value, increment j
    else if (arr2[j] < arr3[k]) j++;
    //reached if x > y and y > z, therefore arr3[k] is smallest value, increment k
    else k++;
  }
  const uniqueCommon = [];
  for (let number of commonNumbers) {
    if (uniqueCommon.indexOf(number) === -1) {
      uniqueCommon.push(number);
    }
  }
  return uniqueCommon;
};

const teams = splitIntoTeams(rucks);
const teamsAsNums = convertToNums(teams, priorities);
console.log(teams);
console.log(teamsAsNums);

const getArrayOfCommonElements = (arrayOfTeams) => {
  const allCommons = [];
  for (const team of arrayOfTeams) {
    const uniqueAmongTeam = findCommonNumber(
      team[0],
      team[1],
      team[2],
      team[0].length,
      team[1].length,
      team[2].length
    );
    allCommons.push(uniqueAmongTeam)
  }
  return allCommons
};

const commonElements = getArrayOfCommonElements(teamsAsNums).flat()
const total = commonElements.reduce((acc, next) => acc + next, 0)
console.log(commonElements)
console.log(total)


