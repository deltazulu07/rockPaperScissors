function getComputerChoice() {
    // randomly return "Rock", "Paper", or "Scissors"

    //generate a random decimal number between 0 and 1
    const randomDecimal = Math.random();

    //if decimal [0, 1/3) "Rock", [1/3, 2/3) "Paper", [2/3, 1) "Scissors"
    switch (true) {
        case  (randomDecimal >=0 && randomDecimal < 1/3):
            return "Rock";
        case  (randomDecimal >= 1/3 && randomDecimal < 2/3):
            return "Paper";
        default:
            return "Scissors";
    }
}

function testGetComputerChoice(numOfLoops) {
    //test the function is truly random

    //run the function numOfLoops times, and count the % of all 3 outcomes
    let countPaper = 0, countRock = 0, countScissors = 0;
    
    for (let i = 0; i < numOfLoops; i++) {
        switch (getComputerChoice()) {
            case "Rock":
                countRock += 1;
                break;
            case "Paper":
                countPaper += 1;
                break;
            default:
                countScissors += 1;
        }
    }
    console.log("Paper % of time: " + countPaper / numOfLoops);
    console.log("Rock % of time: " + countRock / numOfLoops);
    console.log("Scissors % of time: " + countScissors /numOfLoops);
}

// testGetComputerChoice(10000);

function playRound(playerSelection, computerSelection) {
    //play 1 round of rock paper scissors and return string declaring result

    //convert player and computer selections to lower case
    playerLowerCase = playerSelection.toLowerCase();
    computerLowerCase = computerSelection.toLowerCase();

    //3 permutations for player, win, lose, tie
    if ((playerLowerCase === "rock" && computerLowerCase === "scissors") ||
        (playerLowerCase === "paper" && computerLowerCase === "rock") ||
        (playerLowerCase === "scissors" && computerLowerCase === "paper")) 
        {
            return ("You win! " + playerSelection + " beats " + computerSelection);
        }
    else if (playerLowerCase === computerLowerCase) {
        return ("You tied. Try again.");
    }
    else {
        return ("You lost, " + computerSelection + " beats " + playerSelection);
    }
}

// const playerSelection = "rock";
// const computerSelection = getComputerChoice();
// console.log("player: " + playerSelection);
// console.log("computer: " + computerSelection);
// console.log(playRound(playerSelection, computerSelection));

