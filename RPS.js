const playerRockButton = document.querySelector("#playerRockButton");
const playerPaperButton = document.querySelector("#playerPaperButton");
const playerScissorsButton = document.querySelector("#playerScissorsButton");
const cpuRockButton = document.querySelector("#cpuRockButton");
const cpuPaperButton = document.querySelector("#cpuPaperButton");
const cpuScissorsButton = document.querySelector("#cpuScissorsButton");
let display = document.querySelector("#infoScreen");
let playerScore = 0;
let cpuScore = 0;

function changeTextFunction(text) {
  display.textContent = text;
}

function clearText() {
  display.textContent = "";
}

function resetButtons() {
  playerRockButton.style.backgroundColor = "lightskyblue";
  playerPaperButton.style.backgroundColor = "lightskyblue";
  playerScissorsButton.style.backgroundColor = "lightskyblue";
}

function resetCPUButtons() {
  cpuRockButton.style.backgroundColor = "lightskyblue";
  cpuPaperButton.style.backgroundColor = "lightskyblue";
  cpuScissorsButton.style.backgroundColor = "lightskyblue";
}

function playGame(choice) {
  if (choice === "rock" || choice === "paper" || choice === "scissors") {
    let Capchoice = choice.charAt(0).toUpperCase() + choice.slice(1);
    let currentButton = `#player${Capchoice}Button`;
    let currentSelector = document.querySelector(currentButton);

    resetButtons();
    currentSelector.style.backgroundColor = "purple";

    let rpsgame = ["rock", "paper", "scissors"];
    let rand = Math.floor(Math.random() * rpsgame.length); // get a number 0, 1, or 2
    let CPU = rpsgame[rand];

    let CapCPUchoice = CPU.charAt(0).toUpperCase() + CPU.slice(1);
    let currentCPUButton = `#cpu${CapCPUchoice}Button`;
    let currentCPUSelector = document.querySelector(currentCPUButton);
    resetCPUButtons();
    currentCPUSelector.style.backgroundColor = "green";

    clearText();

    let turnMessage = "";

    if (CPU === choice) {
      turnMessage = `This turn: 🤷 It's a draw!! You selected ${choice} and the CPU selected ${CPU} 🤷`;
    } else if (
      (choice === "rock" && CPU === "scissors") ||
      (choice === "paper" && CPU === "rock") ||
      (choice === "scissors" && CPU === "paper")
    ) {
      playerScore++;
      turnMessage = `This turn: 🎈 🎉 It's a win! You selected ${choice} and the CPU selected ${CPU} 🎉 🎈`;
    } else {
      cpuScore++;
      turnMessage = `This turn: 😿 It's a loss! You selected ${choice} and the CPU selected ${CPU} 😿`;
    }

    if (playerScore === 5 || cpuScore === 5) {
      if (playerScore === 5) {
        changeTextFunction(
          `🎉 Congratulations! You are the winner with a score of 5! 🎉`
        );
      } else {
        changeTextFunction(
          `😿 The CPU wins with a score of 5! Better luck next time! 😿`
        );
      }

      playerScore = 0;
      cpuScore = 0;
    } else {
      let scoreupdate = `***The current score is You: ${playerScore} CPU: ${cpuScore}***`;

      changeTextFunction(`${turnMessage}\n${scoreupdate}`);
    }
  }
}

playerRockButton.addEventListener("click", () => playGame("rock"));
playerPaperButton.addEventListener("click", () => playGame("paper"));
playerScissorsButton.addEventListener("click", () => playGame("scissors"));

window.onload = () => {
  playerScore = 0;
  cpuScore = 0;
  let scoreupdate = `The current score is You: ${playerScore} CPU: ${cpuScore}`;
  changeTextFunction(scoreupdate);
};
