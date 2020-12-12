let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() {
  const choices = ['r', 'p', 's'];
  const randomNumber = Math.floor( Math.random() * 3);
  return choices[randomNumber];
}


function convertToText(string) {
  if(string === 'r') return "Rock";
  if(string === 'p') return "Paper";

  else return "Scissors";
}

function win(userChoice, computerChoice) {
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  const userChoice_div = document.getElementById(userChoice);

  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;

  result_div.innerHTML = `${convertToText(userChoice)}${smallUserWord}
  beats ${convertToText(computerChoice)}${smallCompWord} . You win! 🥳`;

  userChoice_div.classList.add('green-glow');
  setTimeout(function() {userChoice_div.classList.remove('green-glow')}, 300);


}

function lose(userChoice, computerChoice) {
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  const userChoice_div = document.getElementById(userChoice);

  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;

  result_div.innerHTML = `${convertToText(userChoice)}${smallUserWord}
  loses to ${convertToText(computerChoice)}${smallCompWord} . You lose 🥺 `;

  userChoice_div.classList.add('red-glow');
  setTimeout(function() {userChoice_div.classList.remove('red-glow')}, 300);
}

function draw(userChoice, computerChoice) {
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  const userChoice_div = document.getElementById(userChoice);

  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;

  result_div.innerHTML = `${convertToText(userChoice)}${smallUserWord}
  equals to ${convertToText(computerChoice)}${smallCompWord} . It's a draw 🤠 `;

  userChoice_div.classList.add('grey-glow');
  setTimeout(function() {userChoice_div.classList.remove('grey-glow')}, 300);
}


function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch(userChoice + computerChoice) {
    case 'pr':
    case 'rs':
    case 'sp':
      win(userChoice, computerChoice);
      break;
    case 'rp':
    case 'sr':
    case 'ps':
      lose(userChoice, computerChoice);
      break;
    case 'rr':
    case 'pp':
    case 'ss':
      draw(userChoice, computerChoice);
      break;
  }
}



function main() {
  rock_div.addEventListener('click', function() {
    game("r");
  })
  paper_div.addEventListener('click', function() {
    game("p");
  })
  scissors_div.addEventListener('click', function() {
    game("s");
  })
}

main();
