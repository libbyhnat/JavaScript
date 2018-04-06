// NOTE NOT SET TO A HTML PAGE AS OF YET

// ROCK PAPER SCISSORS GAME WIth Notes
// / Cash the DOM ( Document Object Model)
// // Cashing - stors the variable to use later
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
// function getComputerChoice(){
//    const choices = ['r', 'p', 's'];
//    const randomNumber = Math.floor(Math.random() * 3);
//    return choices[randomNumber];
// }
//
//
// function convertToWord(letter){
//   if (letter==="r") return "Rock";
//   if (letter === "p") return "Paper";
//   return "Scissors";
// }
//
// // 3 THREE - one of three functions are called.
// // Adjust the score by 1, display message
// function win (userChoice, computerChoice) {
//      const smallUserWord = "user".fontsize(3).sup();
//      const smallCompWord = "comp".fontsize(3).sup();
//      const userChoice_div = document.getElementById(userChoice);
//      userScore++;
//      userScore_span.innerHTML = userScore;
//      computerScore_span.innerHTML = computerScore;
//      result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord}   beats  ${convertToWord(computerChoice)}${smallCompWord}. You win!`;
//      userChoice_div.classList.add('green-glow');
//      setTimeout(() => userChoice_div.classList.remove('green-glow'), 300);
// }
//
// function lose (userChoice, computerChoice) {
//     const smallUserWord = "user".fontsize(3).sup();
//     const smallCompWord = "comp".fontsize(3).sup();
//     const userChoice_div = document.getElementById(userChoice);
//     computerScore++;
//     userScore_span.innerHTML = userScore;
//     computerScore_span.innerHTML = computerScore;
//     result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord}   loses to  ${convertToWord(computerChoice)}${smallCompWord}. You LOST`;
//     userChoice_div.classList.add('red-glow');
//     setTimeout(() => userChoice_div.classList.remove('red-glow'), 300);
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
// // 2 TWO -the userChoice Calls the getComputerChoicefunction to generat a random Number.
// //       -after the User and COmputer both choose the result function is passed in to the game function.
// //      - the game tallies the score and  send a message/
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
// // 1 ONE- Start here User clicks a button
// function main(){
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





// NOTES START  Here----------------------------------------------
// NOTE NOT SET TO A HTML PAGE AS OF YET

// While Loops Informaiont-----------------------------

// Basic While loop

// var sum = 0;
//
// var num = 0;
//
// while (num <= 10) {
//   sum += num;
//   num++;
// }
//
// console.log(sum);

// Example 1 While Loop through an Array

// var randomStuff =  ["apple", 3.2414, 9999, true, false, undefined,['apple', 'ball', 'cat'], 3,2, "lastoject"];
//
//  var x = 0;
//
//  while (x < randomStuff.length) {
//    console.log(randomStuff[x]);
//    x++;
//  }
// Example 2---Reverse while loop theough and array---------------------
//  var otherStuff =  ["apple", 3.2414, 9999, true, false, undefined,['apple', 'ball', 'cat'], 3,2, "lastoject"];
//
// var num = otherStuff.length - 1;
//
// while(num >= 0) {
//   console.log(otherStuff[num]);
//   num--;
// }


// Example 3

// var care = ["lambo", "BMW", "tesla"];
//
// var num = 0;
//
// while (num < cars.length) {
//   console.log(cars[num]);
//   num++;
// }

//  Num++ Explinations--Must Have ( else infanitan loop, BAD!!!)
// with the Incrementor-------------





// FOR LOOPS-Explination-------------------------------------------------------
// Life without loops is painful
// console.log(0);
// console.log(1);
// console.log(2);
// console.log(3);
// console.log(-----------------------------);


// for (var i=0; i<=10; i++) {
//   console.log(i);
// }

//Initializer or Statrer or starting point, (can start the loop at any number)
//Condition for when the loop should end. End point. Below or equal to, not over, loop stops
//Incrementor or decrementer || continues up or down, loop up or loop down-

  // i++, is really i+=1, shorthand i++,
  // i++ incrament like this, can incrament by 2's or 5's

// i = i + 1;// i = 0 + 1// i = 1 LOOP
// i = i + 1;// i = 1 + 1 // i = 2 LOOP
// i = i + 1;// i = 2 + 1 // i = 3 LOOP
// i = i + 1;// i = 3 + 1 // i = 4 LOOP
// i = i + 1;// i = 4 + 1 // i = 5 LOOP
// Till i = 15 then stop.

// The name does not matter i could mean Bunny.
// var bunny = 0;

// for (var bunny=0; bunny<10; bunny++) {
//   console.log("clap!");
// }

// Example 1 For Loop Application Add the Numbers 1 through 10 all up.
// var total = 0;
// for( var num = 1; num < 11; num++){
//   total += num;
//   // mean total = total + num;
// }
//
// console.log("The total is: " + total);

//Example 2  Loop through and ARRAY w/ Dynamic lenght
// var fruits = ["mango", "banana", "apple", "cherry", "bluberry"];
// // console.log(fruits[2]);
//
// for (var i=0; i<fruits.length; i++) {
//   console.log(fruits[i]);
// }

// Example 3  Loop through and OBJECT
//  Object do not have order or index so,
//       Acces Objects by there properties.

// var data = {
//   name: "john",
//   age: 28,
//   "maritalStatus": true
// }
// console.log(data["age"])
//
// for (var elem in data) {
//   console.log(elem, data[elem]);
// }

//data.age or data["age"]
// data.name or date["name"]
// data.maritalStatus or data["maritalStatus"]


    // in the console.log(elem)
    // 1st loop: elem=> Name
    // 2nd loop: elem => age
    // 3rd loop: elem=> maritalStatus
      // Use BRACKET NOTATIOM To get acces to each value.
      // console.log(elem, data[elem]);


// Example 4 a Revers For loop that goes from Top to Bottom
// var total = 0;
//
// for(var num = 1; num < 10; num++){
//   total = total + num;
// }
//
// console.log("the total is: " + total);


// for (var num =  10; num >= 0; num--) {
//   console.log(num);
// }
// var total = 0;
//
// for (var num = 100; num >= 0; num--){
//   total += num;
// }
//
// console.log(total)

// -----------------------------------------------------------------
// if Statments
//                      Example 1 AAAAAAAAAAAAA---------------------------------------------------------------
// var num = -20;
//
// if(num > 0) {
//   console.log("The number is a positive.")
// }
//
// if (num <0) {
//   console.log("The number is a negative.")
// }
//                     Example 1 BBBBBBBBBBBBBBBB

// var num = -20;
//
// if(num > 0) {
//   console.log("The number is a positive.")
// } else {
//   console.log("The number is a negative.")
// }
//                    Example 1 CCCCCCCCCCCCCC
// var num = prompt("Enter a number !!!");
//
// if(num > 0) {
//   alert("The number is a positive.")
// } else if (num < 0){
//   alert("The number is a negative.")
// } else {
//   alert("The number is a zero")
// }
// Equlity Operators-------------------------------------------------------
// = ( 1 Equal) is for assining values to a variable.
// === (3 Equals) to check if the 2 sides are equal (A=B), is Safe with this, is a Equality Operator, Comparison Operator or Equal checking(you cna use == too)
// -!== (NOT Equal)-------------------------------------------------------
// Test each step with console.log  (be smart about it)
// var isRaining =  prompt("Is it raining");
// console.log(isRaining)  Tested "all good"
// if(isRaining === "yes") {
//   alert("Take and umbrella!");
// } else {
//   alert("It's ok. You don't need anything.")
// }
// Logical Operators-----------------------------------------------
//  || (or), && (and), ! (not).

// var name =  "lexi";
// var age =18;
// var highSchool = true;
//
// // Job at Apple,
// // job requirements : over 18 and high school degree
// // if (age >= 18 && highSchool === true){
// //   alert("You are applicable to apply for this job.")
// // }
//
// var newGuy = "john";
// var age1 = 28;
// var highSchool = false;
//
// //  Job at AMAZON
// // job requirements :  over 18 or high school degree
// if (age >= 18 || highSchool === true){
//   alert("You can apply!")
// }



// ________________________________________________________________________________
// Learning JS Function #6 START
// -----------------------------------------------------------------------------
// function specialGreeter(name){
//   console.log("hey" + name + "! You have a  cool attitude.");
// }
//
// specialGreeter(" Tenzin")
// Example 2____Functions can take MUTLIPI P___________________________________________________________________

// function adderMultiple(a, b, c, d) {
//   return a + b + c + d;
// }

// adderMultiple(2, 2, 2, 2)
// Example 3 Arrays____________________________________________________________

// function printerArray(mango) {
//   for (var i=0; i<mango.length; i++) {
//     console.log(mango[i]);
//   }
// }
// printerArray(["cat", "kangaroo","racoon"])

// Example 4 Return Statements________________________________________________
// function adder(num1, num2) {
//   return num1 + num2;
//   // console.log(num1 + num2);
// }


// var result = adder(2, 4);
//
// console.log(result)

// Example_5___FUNCTION Takes in Two Parametures _________________________________________________________________

// function doesExist(nums, num) {
//   for (var i=0; i<nums.length; i++){
//     if (nums[i] === num) {
//       return true;
//     }
//   }
//   return false;
// }
//
// doesExist([2, 2, 5, 7],8)
