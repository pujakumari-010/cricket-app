const addButton = document.getElementById("add");
const subtractButton = document.getElementById("subtract");

let overCount = document.getElementById("overCount");
let ballCount = document.getElementById("ballCount");

function addBall() {
  ballCount.innerHTML = Number(ballCount.innerHTML) + 1;

  if (Number(ballCount.innerHTML) === 6) {
    overCount.innerHTML = Number(overCount.innerHTML) + 1;
    ballCount.innerHTML = 0;
  }
}

function subtractBall() {
  console.log("I'll doing subtration in ball count");
}

addButton.addEventListener("click", addBall);
subtractButton.addEventListener("click", subtractBall);