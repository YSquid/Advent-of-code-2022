const fs = require("fs");
const rucks = fs.readFileSync("./rucksacks.txt").toString().split("\n");

//split into teams of 3
const splitIntoTeams = (rucks) => {
    const teamSize = 3
    const teams = []
    for (let i = 0; i < rucks.length; i += teamSize) {
        const team = rucks.slice(i, i + teamSize)
        teams.push(team)
        console.log(i)
    }
    return teams
}

const teams = splitIntoTeams(rucks)
console.log(teams)