//require filesystem module
const fs = require('fs')

//call readFileSync to synchronously read entire file and return its contents
//append .toString to turn input into string, and then split on newline
//note that file input was using CRLF line endings - replace those \r with nothing (could have also changed setting in VS code)
const gameList = fs.readFileSync('./gamesList.txt').toString().replace(/\r/g, "").split("\n")
console.log(gameList)

/*SCORING
Win/Loss:
    Win = 6
    Draw = 3
    Loss = 0

Picks:

Opponent:

A = rock
B = paper
C = scissors

Mine:
X = rock = 1pt
Y = paper = 2pt
Z = scissors = 3pt
*/

const calculateScores = (games) => {
    let totalScore = 0

    for (const game of games) {
        let roundScore = 0
        let outcomeScore = 0
        let pickScore = 0
        //check for my picks and adjust pickscore accordingly
        if (game[2] === 'X') {
            pickScore += 1
        }

        if (game[2] === 'Y') {
            pickScore += 2
        }

        if (game[2] === 'Z') {
            pickScore += 3
        }

        //check for draw
        if ((game[0] === 'A' && game[2] === 'X') || (game[0] === 'B' && game[2] === 'Y') || (game[0] === 'C' && game[2] === 'Z'))  {
            outcomeScore += 3
        }

        //check combinations
        // My wins
        if ((game[0] === 'A' && game[2] ==='Y') || (game[0] === 'B' && game[2] === 'Z') || (game[0] === 'C' && game[2] === 'X')) {
            outcomeScore += 6
        }

        roundScore += pickScore
        roundScore += outcomeScore
        totalScore += roundScore
    }
    return totalScore
}

console.log(calculateScores(gameList))