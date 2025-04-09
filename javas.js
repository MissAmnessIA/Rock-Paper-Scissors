
let humanScore = 0;
let computerScore = 0;
let computerChoice;
let humanChoice;
const choiceBtn = document.querySelector("#choiceBtn");
const result = document.querySelector("#results");
choiceBtn.style.display = "flex";
choiceBtn.style.alignItems = "center";
choiceBtn.style.justifyContent = "space-around";


function getComputerChoice(max)
{
    let random = Math.floor(Math.random() * max);
    if (random == 0)
        return "rock";
    else if (random == 1)
        return "paper";
    else
        return "scisors";
}

choiceBtn.addEventListener('click', (event) => {
    let target = event.target;
    const h1Final = document.querySelector("h1");
    if (h1Final)
        result.removeChild(h1Final);
    switch(target.id) {
        case 'paperBtn':
            playRound('paper');
            break;
        case 'rockBtn':
            playRound('rock');
            break;
        case 'scisorsBtn':
            playRound('scisors');
            break;
    };
});

function playRound(choice) 
{
    computerChoice = getComputerChoice(3);
    humanChoice = choice;
    if (computerChoice == humanChoice)
        playGame(0);
    if (computerChoice == "rock") {
        if (humanChoice == "paper")
            playGame(1);
        else if (humanChoice == "scisors")
            playGame(-1);
    }
    else if (computerChoice == "paper") {
        if (humanChoice == "rock")
            playGame(-1);
        else if (humanChoice == "scisors")
            playGame(1);
    }
    else if (computerChoice == "scisors") {
        if (humanChoice == "rock")
            playGame(1);
        else if (humanChoice == "paper")
            playGame(-1);
    }
}

function playGame(score) {
    const thisRound = document.createElement("div");
    thisRound.style.margin = "10px 0px";
    thisRound.style.border = "2px solid blue";
    thisRound.style.display = "flex";
    thisRound.style.flexDirection = "column";
    thisRound.style.padding = "0px 10px";
    const choicesDiv = document.createElement("div");
    const roundResultDiv = document.createElement("div");
    roundResultDiv.style.textAlign = "center";
    const humanChoiceP = document.createElement("p");
    const computerChoiceP = document.createElement("p");
    const roundResult = document.createElement("p");
    roundResult.style.fontWeight = "800";
    const points = document.createElement("p");

    humanChoiceP.textContent = `Your choice: ${humanChoice}`;
    computerChoiceP.textContent = `Computer choice: ${computerChoice}`;
    
    if (score == 0) {
        roundResult.textContent = "No one wins";
    }
    else if (score == 1) {
        roundResult.textContent = "You won this round!";
        roundResult.style.color = "green";
        humanScore++;
    }
    else if (score == -1) {
        roundResult.textContent = "You lose this round...";
        roundResult.style.color = "red";
        computerScore++;
    }
    points.textContent = `${computerScore} | ${humanScore}`;
    choicesDiv.appendChild(humanChoiceP);
    choicesDiv.appendChild(computerChoiceP);
    roundResultDiv.appendChild(roundResult);
    roundResultDiv.appendChild(points);
    thisRound.appendChild(choicesDiv);
    thisRound.appendChild(roundResultDiv);
    result.appendChild(thisRound);

    if (computerScore == 5 || humanScore == 5)
    {
        result.innerHTML = "";

        const finalResult = document.createElement("h1");
        finalResult.style.textAlign = "center";
        if (computerScore === 5) {
            finalResult.textContent = "You lose";
            finalResult.style.color = "red";
        }
        else if (humanScore === 5) {
            finalResult.textContent = "You win!!!";
            finalResult.style.color = "green";
        }
        result.appendChild(finalResult);
        computerScore = 0;
        humanScore = 0;
    }
}




