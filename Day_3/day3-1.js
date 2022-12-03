const fs = require('fs')

const rucks = fs.readFileSync('./rucksacks.txt').toString
console.log(rucks)