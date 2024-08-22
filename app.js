let set_items = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;
let roundCount = 0;

function getComputerChoice() {
    return Math.floor(Math.random() * 3);
}

function playRound(humanSelection) {
    let computerSelection = getComputerChoice();
    if(roundCount < 5){
        // Determine round winner
        if (
            (humanSelection == 0 && computerSelection == 2) ||
            (humanSelection == 1 && computerSelection == 0) ||
            (humanSelection == 2 && computerSelection == 1)
        ) {
            humanScore += 1;
            updateScoreboard(humanScore,computerScore,set_items[humanSelection], set_items[computerSelection], "Player Won this Round!");
        } else if (
            (computerSelection == 0 && humanSelection == 2) ||
            (computerSelection == 2 && humanSelection == 1) ||
            (computerSelection == 1 && humanSelection == 0)
        ) {
            computerScore += 1;
            updateScoreboard(humanScore,computerScore,set_items[humanSelection], set_items[computerSelection], "Computer Won this Round!");
        } else {
            updateScoreboard(humanScore,computerScore,set_items[humanSelection], set_items[computerSelection], "It's a Draw");
        }
    }

    roundCount++;
    //to ensure all rounds have been played by the user.
    if (roundCount === 5) {
        showFinalResult(roundCount);
    }
}

function updateScoreboard(humanScore,computerScore,humanChoice, computerChoice, result) {
    document.querySelector('#player-choice').textContent = humanChoice;
    document.querySelector('#computer-choice').textContent = computerChoice;
    document.querySelector('.title').textContent = result;
    document.querySelector("#playerCScore").textContent = `Player - ${humanScore}`;
    document.querySelector("#ComputerCScore").textContent = `Computer - ${computerScore}`;
    // Optionally, update a round result message if desired
}

function showFinalResult(roundCount) {
    let winnerMessage = '';
    document.querySelector('.title').textContent = 'Rock Paper Scissors';
    if(roundCount === 5){
        if (humanScore > computerScore) {
            winnerMessage = 'Player Wins the Game!';
        } else if (computerScore > humanScore) {
            winnerMessage = 'Computer Wins the Game!';
        } else {
            winnerMessage = "It's a Tie!";
        }
    }

    document.querySelector('#winner-message').textContent = winnerMessage;
    document.querySelectorAll('.option').forEach(option => {
        option.style.pointerEvents = 'none'; // Disable further clicks after 5 rounds
    });
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    roundCount = 0;

    document.querySelector('#player-choice').textContent = '-';
    document.querySelector('#computer-choice').textContent = '-';
    document.querySelector('#winner-message').textContent = '-';
    document.querySelector('#playerCScore').textContent = `Player`;
    document.querySelector('#ComputerCScore').textContent = `Computer`;
    document.querySelector('.title').textContent = 'Rock Paper Scissors';

    document.querySelectorAll('.option').forEach(option => {
        option.style.pointerEvents = 'auto'; // Enable clicks again
    });
}

// Attach the playRound function to the options
document.querySelectorAll('.option').forEach((option, index) => {
    option.addEventListener('click', () => {
            playRound(index);
    });
});
