let total1 = 0;
let total2 = 0;
let current1 = 0;
let current2 = 0;
let myTurn = 1;

const rollButton = document.querySelector("#btn-rolldice");
const diceImg = document.querySelector(".dice");
const currentCount1 = document.querySelector("#player1current");
const currentCount2 = document.querySelector("#player2current");

const holdButton = document.querySelector("#btn-hold");
const totalCount1 = document.querySelector("#player1total");
const totalCount2 = document.querySelector("#player2total");

const newGameButton = document.querySelector("#btn-newgame");

const body = document.querySelector("body");

const left = document.querySelector(".big-box__left");
const right = document.querySelector(".big-box__right");

function appStart() {
  rollButton.onclick = function () {
    const rand = Math.floor(Math.random() * 6 + 1);
    if (myTurn === 1) {
      if (rand === 1) {
        diceImg.src = "assets/dice-1.png";
        current1 = 0;
        currentCount1.innerText = current1;
        right.style.opacity = 1;
        left.style.opacity = 0.7;
        return (myTurn = 0);
      } else if (rand === 2) {
        diceImg.src = "assets/dice-2.png";
        current1 = 0;
        currentCount1.innerText = current1;
        right.style.opacity = 1;
        left.style.opacity = 0.7;
        return (myTurn = 0);
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
    }

    if (myTurn === 0) {
      if (rand === 1) {
        diceImg.src = "assets/dice-1.png";
        current2 = 0;
        currentCount2.innerText = current2;
        right.style.opacity = 0.7;
        left.style.opacity = 1;
        return (myTurn = 1);
      } else if (rand === 2) {
        diceImg.src = "assets/dice-2.png";
        current2 = 0;
        currentCount2.innerText = current2;
        right.style.opacity = 0.7;
        left.style.opacity = 1;
        return (myTurn = 1);
      } else if (rand === 3) {
        diceImg.src = "assets/dice-3.png";
        current2 = current2 + 3;
        currentCount2.innerText = current2;
      } else if (rand === 4) {
        diceImg.src = "assets/dice-4.png";
        current2 = current2 + 4;
        currentCount2.innerText = current2;
      } else if (rand === 5) {
        diceImg.src = "assets/dice-5.png";
        current2 = current2 + 5;
        currentCount2.innerText = current2;
      } else if (rand === 6) {
        diceImg.src = "assets/dice-6.png";
        current2 = current2 + 6;
        currentCount2.innerText = current2;
      }
    }
  };

  holdButton.onclick = function () {
    if (myTurn === 1) {
      total1 = total1 + current1;
      totalCount1.innerText = total1;
      current1 = 0;
      currentCount1.innerText = current1;
      right.style.opacity = 1;
      left.style.opacity = 0.7;

      if (total1 >= 50) {
        const div = document.createElement("div");
        div.classList.add("result");
        div.style.cssText =
          "position : absolute; top: 15rem; width : 20rem; height : 5rem; font-size : 2rem;  display: flex; justify-content: center; align-items: center; background-color: #d8afbe; border-radius: 10px;";
        div.innerText = "PLAYER1 WIN!";
        body.appendChild(div);
        rollButton.disabled = true;
        holdButton.disabled = true;
      }

      return (myTurn = 0);
    }

    if (myTurn === 0) {
      total2 = total2 + current2;
      totalCount2.innerText = total2;
      current2 = 0;
      currentCount2.innerText = current2;
      right.style.opacity = 0.7;
      left.style.opacity = 1;

      if (total2 >= 50) {
        const div = document.createElement("div");
        div.classList.add("result");
        div.style.cssText =
          "position : absolute; top: 15rem; width : 20rem; height : 5rem; font-size : 2rem;  display: flex; justify-content: center; align-items: center; background-color: #d8afbe; border-radius: 10px;";
        div.innerText = "PLAYER2 WIN!";
        body.appendChild(div);
        rollButton.disabled = true;
        holdButton.disabled = true;
      }
      return (myTurn = 1);
    }
  };

  newGameButton.onclick = function () {
    const div = document.querySelector(".result");
    total1 = 0;
    total2 = 0;
    totalCount1.innerText = total1;
    totalCount2.innerText = total2;
    current1 = 0;
    current2 = 0;
    currentCount1.innerText = current1;
    currentCount2.innerText = current2;
    right.style.opacity = 0.7;
    left.style.opacity = 1;
    diceImg.src = "assets/dice-hidden.png";
    if (div) body.removeChild(div);
    myTurn = 1;
    rollButton.disabled = false;
    holdButton.disabled = false;
  };
}

appStart();
