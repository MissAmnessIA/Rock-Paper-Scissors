
let computerChoice;
let humanChoice;

function getComputerChoice(max)
{
    let random = Math.floor(Math.random() * max);
    if (random == 0)
        computerChoice ="rock";
    else if (random == 1)
        computerChoice ="paper";
    else
        computerChoice = "scisors";
}

function getHumanChoice()
{
    humanChoice = prompt("Pick one:")
    humanChoice = humanChoice.toLowerCase();
}

function playRound(computerChoice, humanChoice)
{
    let roundScore;

    if (computerChoice == humanChoice)
        console.log("No one wins");
    if (computerChoice == "rock")
    {
        if (humanChoice == "paper")
            roundScore = 1;
        else if (humanChoice == "scisors")
            roundScore = -1;
    }
    else if (computerChoice == "paper")
    {
        if (humanChoice == "rock")
            roundScore = -1;
        else if (humanChoice == "scisors")
            roundScore = 1;
    }
    else if (computerChoice == "scisors")
    {
        if (humanChoice == "rock")
            roundScore = 1;
        else if (humanChoice == "paper")
            roundScore = -1;
    }
    return roundScore;
}

function playGame()
{
    let computerScore = 0;
    let humanScore = 0;
    let roundScore;

    for (let round = 1; round <= 5; round++)
    {
        getComputerChoice(3);
        getHumanChoice();
        console.log(`Your choice: ${humanChoice}`);
        console.log(`Computer choice: ${computerChoice}`);
        roundScore = playRound(computerChoice, humanChoice);
        if (roundScore == 1)
        {
            console.log(`YOU WIN!!`);
            humanScore++;
        }
        else if (roundScore == -1)
        {
            console.log(`YOU LOSE...`);
            computerScore++;
        }
        console.log(`${humanScore} | ${computerScore}`);
        console.log(" ");
    }
    if (computerScore > humanScore)
        console.log("The machine wins again...");
    else if (computerScore < humanScore)
        console.log("Congratulations...");
    else if (computerScore == humanScore)
        console.log(`No one wins     ${humanScore} | ${computerScore}`);
}

playGame();



