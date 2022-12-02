const fs = require('fs')
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
rock = 1pt
paper = 2pt
scissors = 3pt

X = lose
Y = draw
Z = win

*/

const calculateScores = (games) => {
    let totalScore = 0

    for (const game of games) {
        let roundScore = 0
        let outcomeScore = 0
        let pickScore = 0

        //rock outcomes
        if (game[0] === 'A') {
            if (game[2] === 'X') {
                pickScore += 3
            }
            if (game[2] === 'Y') {
                pickScore += 1
                outcomeScore += 3
            }

            if (game[2] === 'Z') {
                pickScore += 2
                outcomeScore += 6
            }
        }

        if (game[0] === 'B') {
            if (game[2] === 'X') {
                pickScore += 1
            } 
            if (game[2] === 'Y') {
                pickScore += 2
                outcomeScore += 3
            }
            if (game[2] === 'Z') {
                pickScore += 3
                outcomeScore += 6
            }
        }

        if (game[0] === 'C') {
            if (game[2] === 'X') {
                pickScore += 2
            } 
            if (game[2] === 'Y') {
                pickScore += 3
                outcomeScore += 3
            }
            if (game[2] === 'Z') {
                pickScore += 1
                outcomeScore += 6
            }
        }


        roundScore += pickScore
        roundScore += outcomeScore
        totalScore += roundScore
    }
    return totalScore
}

console.log(calculateScores(gameList))