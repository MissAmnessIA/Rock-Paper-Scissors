
function getComputerChoice(max)
{
    let random = Math.floor(Math.random() * max);
    if (random == 0)
        computerChoice ="Rock";
    else if (random == 1)
        computerChoice ="Peper";
    else
        computerChoice = "Scisors";
}

function getHumanChoice()
{
    return prompt("Your choose:")
}

function playRound(computerChoice, humanChoice)
{

}

function playGame()
{
    let computerChoice;
    let humanChoice;
    let humanScore;
    let computerScore;
    let score;

    for (let round = 1; round <= 5; round++)
    {
        computerChoice = getComputerChoice(3);
        humanChoice = getHumanChoice();
        score = playRound(computerChoice, humanChoice);
        if (score === 1)
            humanScore++;
        if (score === 0)
            computerScore++;
        console.log(`Round ${round}: Human ${humanScore} | Computer ${computerScore}`);
    }
    if (computerScore > humanScore)
        console.log("The machine wins again...");
    else if (computerScore < humanScore)
        console.log("Congratulations...");
}


