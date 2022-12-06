const fs = require("fs");

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

const instructions = fs
  .readFileSync("./instructions.txt")
  .toString()
  .split("\n");
const instructionsSplit = instructions.map((instruction) => {
  return instruction.split(" ");
});
const instructionNumbers = instructionsSplit.map((instruction) =>
  instruction.filter((word) => {
    return (word !== "move") & (word !== "from") & (word !== "to");
  })
);

const instructionIntegers = instructionNumbers.map((instruction) =>
  instruction.map((step) => {
    return parseInt(step);
  })
);

const readyStacks = stacked(stacksString);

// console.log(instructionIntegers);
// console.log(readyStacks);

const moveStacks = (stacks, instructions) => {
  for (let instruction of instructions) {
    let amountMoved = instruction[0];
    let movedFromIndex = instruction[1] - 1;
    let movedToIndex = instruction[2] - 1;
    for (let i = 0; i < amountMoved; i++) {
      stacks[movedToIndex].unshift(stacks[movedFromIndex].shift());
    }
  }
  return stacks;
};

// console.log(moveStacks(readyStacks, instructionIntegers))

const moveStacks9001 = (stacks, instructions) => {
  for (let instruction of instructions) {
    let amountMoved = instruction[0];
    let movedFromIndex = instruction[1] - 1;
    let movedToIndex = instruction[2] - 1;
    if (amountMoved === 1) {
      stacks[movedToIndex].unshift(stacks[movedFromIndex].shift());
    } else {
      for (let i = amountMoved - 1; i > -1; i--) {
        stacks[movedToIndex].unshift(stacks[movedFromIndex][i])
        stacks[movedFromIndex].splice(i,1)
      }
    }
  }
  return stacks;
};

console.log(moveStacks9001(readyStacks, instructionIntegers));
