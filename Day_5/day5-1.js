const fs = require("fs");
const { setPrint } = require("readline-sync");

const stacksString = fs.readFileSync("./stacks.txt").toString().split(/\n/);
const stacks = [[], [], [], [], [], [], [], [], []];
const stacked = (arr) => {
  for (let string of arr) {
    stacks[0].push(string[1]);
    stacks[1].push(string[5]);
    stacks[2].push(string[9]);
    stacks[3].push(string[13]);
    stacks[4].push(string[17]);
    stacks[5].push(string[21]);
    stacks[6].push(string[25]);
    stacks[7].push(string[29]);
    stacks[8].push(string[33]);
  }
  const cleanedStacks = [];
  for (let stack of stacks) {
    const cleanedStack = stack.filter((item) => {
      return item !== " ";
    });
    cleanedStacks.push(cleanedStack);
  }
  const finalStacks = cleanedStacks.map((stack) => {
    return stack.splice(0, stack.length - 1);
  });
  return finalStacks;
};
// console.log(stacked(stacksString));

const instructions = fs
  .readFileSync("./instructions.txt")
  .toString()
  .split("\n");
const instructionsSplit = instructions.map((instruction) => {
  return instruction.split(" ");
});
const instructionNumbers = instructionsSplit.map(instruction => instruction.filter((word) => {
    return word !== 'move' & word !== 'from' & word !== 'to'
}))

const instructionIntegers = instructionNumbers.map(instruction => instruction.map((step) => {
    return parseInt(step)
}))
console.log(instructionIntegers);
