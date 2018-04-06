
// Cash the DOM ( Document Object Model)
// Cashing - stors the variable to use later
let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice(){
   const choices = ['r', 'p', 's'];
   const randomNumber = Math.floor(Math.random() * 3);
   return choices[randomNumber];
}


function convertToWord(letter){
  if (letter==="r") return "Rock";
  if (letter === "p") return "Paper";
  return "Scissors";
}

// 3 THREE - one of three functions are called.
// Adjust the score by 1, display message
function win (userChoice, computerChoice) {
     const smallUserWord = "user".fontsize(3).sup();
     const smallCompWord = "comp".fontsize(3).sup();
     const userChoice_div = document.getElementById(userChoice);
     userScore++;
     userScore_span.innerHTML = userScore;
     computerScore_span.innerHTML = computerScore;
     result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord}   beats  ${convertToWord(computerChoice)}${smallCompWord}. You win!`;
     userChoice_div.classList.add('green-glow');
     setTimeout(() => userChoice_div.classList.remove('green-glow'), 300);
}

function lose (userChoice, computerChoice) {
    const smallUserWord = "user".fontsize(3).sup();
    const smallCompWord = "comp".fontsize(3).sup();
    const userChoice_div = document.getElementById(userChoice);
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord}   loses to  ${convertToWord(computerChoice)}${smallCompWord}. You LOST`;
    userChoice_div.classList.add('red-glow');
    setTimeout(() => userChoice_div.classList.remove('red-glow'), 300);
}
function draw (userChoice, computerChoice) {
  const smallUserWord = "user".fontsize(3).sup();
  const smallCompWord = "comp".fontsize(3).sup();
  const userChoice_div = document.getElementById(userChoice);
  result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} equals ${convertToWord(computerChoice)}${smallCompWord}. It's a draw.`;
  userChoice_div.classList.add('gray-glow');
  setTimeout(() => userChoice_div.classList.remove('gray-glow'), 300);

}

// 2 TWO -the userChoice Calls the getComputerChoicefunction to generat a random Number.
//       -after the User and COmputer both choose the result function is passed in to the game function.
//      - the game tallies the score and  send a message/
function game(userChoice){
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice){
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computerChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
      lose (userChoice, computerChoice);
      break;

    case "rr":
    case "pp":
    case "ss":
      draw (userChoice, computerChoice);
      break;
  }

}

// 1 ONE- Start here User clicks a button
function main(){

    rock_div.addEventListener('click', () => game("r"));


    paper_div.addEventListener('click', function(){
      game("p");
    })

    scissors_div.addEventListener('click',() => game("s"));
}
main();


// End------IT Works HEre Down-------------------------------------------------------------------------------

// let userScore = 0;
// let computerScore = 0;
// const userScore_span = document.getElementById("user-score");
// const computerScore_span = document.getElementById("computer-score");
// const scoreBoard_div = document.querySelector(".score-board");
// const result_p = document.querySelector(".result > p");
// const rock_div = document.getElementById("r");
// const paper_div = document.getElementById("p");
// const scissors_div = document.getElementById("s");
//
//
// function getComputerChoice(){
//    const choices = ['r', 'p', 's'];
//    const randomNumber = Math.floor(Math.random() * 3);
//    return choices[randomNumber];
// }
//
// function convertToWord(letter){
//   if (letter==="r") return "Rock";
//   if (letter === "p") return "Paper";
//   return "Scissors";
// }
//
// function win (userChoice, computerChoice) {
//   const smallUserWord = "user".fontsize(3).sup();
//   const smallCompWord = "comp".fontsize(3).sup();
//   const userChoice_div = document.getElementById(userChoice);
//   userScore++;
//   userScore_span.innerHTML = userScore;
//   computerScore_span.innerHTML = computerScore;
//   result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord}   beats  ${convertToWord(computerChoice)}${smallCompWord}. You win!`;
//   userChoice_div.classList.add('green-glow');
//   setTimeout(() => userChoice_div.classList.remove('green-glow'), 300);
// }
// function lose (userChoice, computerChoice) {
//   const smallUserWord = "user".fontsize(3).sup();
//   const smallCompWord = "comp".fontsize(3).sup();
//   const userChoice_div = document.getElementById(userChoice);
//   computerScore++;
//   userScore_span.innerHTML = userScore;
//   computerScore_span.innerHTML = computerScore;
//   result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord}   loses to  ${convertToWord(computerChoice)}${smallCompWord}. You LOST`;
//   userChoice_div.classList.add('red-glow');
//   setTimeout(() => userChoice_div.classList.remove('red-glow'), 300);
//
//
// }
// function draw (userChoice, computerChoice) {
//   const smallUserWord = "user".fontsize(3).sup();
//   const smallCompWord = "comp".fontsize(3).sup();
//   const userChoice_div = document.getElementById(userChoice);
//   result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} equals ${convertToWord(computerChoice)}${smallCompWord}. It's a draw.`;
//   userChoice_div.classList.add('gray-glow');
//   setTimeout(() => userChoice_div.classList.remove('gray-glow'), 300);
//
// }
//
// // Below sets the Users Choise
// function game(userChoice){
//   const computerChoice = getComputerChoice();
//   switch (userChoice + computerChoice){
//     case "rs":
//     case "pr":
//     case "sp":
//       win(userChoice, computerChoice);
//       break;
//     case "rp":
//     case "ps":
//     case "sr":
//       lose (userChoice, computerChoice);
//       break;
//
//     case "rr":
//     case "pp":
//     case "ss":
//       draw (userChoice, computerChoice);
//       break;
//   }
//
// }
//
// function main(){
//
//
//
//     rock_div.addEventListener('click', () => game("r"));
//
//
//     paper_div.addEventListener('click', function(){
//       game("p");
//     })
//
//     scissors_div.addEventListener('click',() => game("s"));
// }
// main();
