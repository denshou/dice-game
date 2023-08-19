let total1 = 0;
let total2 = 0;
let current1 = 0;
let current2 = 0;
let myTurn = 1;

const rollButton = document.querySelector("#btn-rolldice");
const diceImg = document.querySelector(".dice");
const currentCount1 = document.querySelector("#player1current");

const holdButton = document.querySelector("#btn-hold");
const totalCount1 = document.querySelector("#player1total");

const newGameButton = document.querySelector("#btn-newgame");

function appStart() {
  rollButton.onclick = function () {
    const rand = Math.floor(Math.random() * 6 + 1);
    if (rand === 1) {
      diceImg.src = "assets/dice-1.png";
      current1 = 0;
      currentCount1.innerText = current1;
    } else if (rand === 2) {
      diceImg.src = "assets/dice-2.png";
      current1 = 0;
      currentCount1.innerText = current1;
    } else if (rand === 3) {
      diceImg.src = "assets/dice-3.png";
      current1 = current1 + 3;
      currentCount1.innerText = current1;
    } else if (rand === 4) {
      diceImg.src = "assets/dice-4.png";
      current1 = current1 + 4;
      currentCount1.innerText = current1;
    } else if (rand === 5) {
      diceImg.src = "assets/dice-5.png";
      current1 = current1 + 5;
      currentCount1.innerText = current1;
    } else if (rand === 6) {
      diceImg.src = "assets/dice-6.png";
      current1 = current1 + 6;
      currentCount1.innerText = current1;
    }
    console.log("roll");
  };

  holdButton.onclick = function () {
    total1 = total1 + current1;
    totalCount1.innerText = total1;
    current1 = 0;
    currentCount1.innerText = current1;
  };

  newGameButton.onclick = function () {
    total1 = 0;
    totalCount1.innerText = total1;
    current1 = 0;
    currentCount1.innerText = current1;
    diceImg.src = "assets/dice-hidden.png";
  };
}
appStart();
