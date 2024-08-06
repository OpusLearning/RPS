/*
This is version 1 of my Rock Papers Scissors game its starting off console only logic 
later we will add some HTML and CSS 

1) We will ask the user for input 
2) We will select a random selection in the script 
3) we will compare the two and determine a win loss or draw 
4) We will display a win loss or draw 
5) Ext we will tally the score  
*/

let choice = prompt("Rock, paper or scissors which one?");
console.log(choice);

if (choice !== "rock" || choice !== "paper" || choice !== "scissors") {
  alert(
    "Please enter the word rock, paper or scissors (all lower case and spaces)"
  );
}

if (choice === "rock" || choice === "paper" || choice === "scissors") {
  alert("Great lets see who has won!");
  let rpsgame = ["rock", "paper", "scissors"]; // create an array of those types
  let min = 0; // set these values to represent the index of the array
  let max = 2;
  let rand = Math.random() * (max - min) + min;
  let CPU = Math.round(rand);
  // get a number 0,1 or 2
  console.log(`You picked ${choice} the CPU selected ${rpsgame[CPU]}`);

  // Draw
  if (rpsgame[CPU] === choice) {
    console.log("It was a draw why not try again");
  }

  // Win
  if (choice === "rock" && rpsgame[CPU] === "scissors") {
    console.log("Rock bluntens scissors, It's a win 🎉 ");
  }
  if (choice === "paper" && rpsgame[CPU] === "rock") {
    console.log("Paper covers rock , It's a win 🎉 ");
  }
  if (choice === "scissors" && rpsgame[CPU] === "paper") {
    console.log("Scissors cut paper , It's a win 🎉 ");
  }

  //Loss
  if (choice === "rock" && rpsgame[CPU] === "paper") {
    console.log("Rock is covered by paper, It's a loss 😿 ");
  }
  if (choice === "paper" && rpsgame[CPU] === "scissors") {
    console.log("Paper is cut bny scissors , It's a loss 😿 ");
  }
  if (choice === "scissors" && rpsgame[CPU] === "rock") {
    console.log("Scissors are bluntened by rock , It's a loss 😿 ");
  }
}
