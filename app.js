let set_items = ["rock", "paper", "scissors"];
let humanSelection, computerSelection;
let humanScore, computerScore;

function getComputerChoice() {
  return Math.floor(Math.random() * 3);
}
function getHumanChoice() {
  let resp = parseInt(prompt("Enter your choice\n1) Rock\n2) Paper\n3) Scissors")) - 1;
  return resp;
}

function playRound(humanSelection, computerSelection) {
  //Using if-else conditions
  //rock[0] beats scissors[2]
  //scissors[2] beats paper[1]
  //paper[1] beats rock[0]

  if ((humanSelection == 0 && computerSelection == 2) || (humanSelection == 2 && computerSelection == 1) || (humanSelection == 1 && computerSelection == 0)) {
    humanScore += 1;
    console.log("Human Won!\n");
}
if ((humanSelection == 2 && computerSelection == 0) || (humanSelection == 1 && computerSelection == 2) || (humanSelection == 0 && computerSelection == 1)) {
    computerScore += 1;
    console.log("Computer Won!\n");
  }
  if (humanSelection == computerSelection) {
    console.log(`It's a Draw\n`);
  }
}

function playGame() {
    humanScore = 0;
    computerScore = 0;
    let i = 0;
    while(i<5){
        humanSelection = getHumanChoice();
        computerSelection = getComputerChoice();
        console.log(`--------- Round ${i+1} ---------\n\n`);
        playRound(humanSelection,computerSelection);
        i++;
    }
    console.log(`Final Scores:\n\nHuman:${humanScore} and Computer:${computerScore}\n\n`);
}
playGame();
