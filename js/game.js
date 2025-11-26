"use strict";
const dodger = document.getElementById("dodger");

// Game over sound
const gameoverSound = document.getElementById("gameoverSound");

function playGameoverSound() {
  gameoverSound.currentTime = 0; // Start fra begyndelsen
  gameoverSound.play();
}

// Winner sound
const winningSound = document.getElementById("winningSound");

function playWinningSound() {
  winningSound.play();
  showConfettiImage();
}

//Left dodger
function moveDodgerLeft() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left - 40}px`;
  } else {
    //Gameover
    playGameoverSound();
  }
}

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  }
});

//Right dodger
function moveDodgerRight() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  if (left < 1380) {
    dodger.style.left = `${left + 40}px`;
  } else {
    //Winner
    playWinningSound();
  }
}

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  }
  if (e.key === "ArrowRight") {
    moveDodgerRight();
  }
  if (e.key === "ArrowUp") {
    moveDodgerUp();
  }
  if (e.key === "ArrowDown") {
    moveDodgerDown();
  }
});

function moveDodgerUp() {
  const bottomNumbers = dodger.style.bottom.replace("px", "");
  const bottom = parseInt(bottomNumbers);
  if (bottom < 750) {
    dodger.style.bottom = `${bottom + 40}px`;
  } else {
    //Gameover
    playGameoverSound();
  }
}

function moveDodgerDown() {
  const bottomNumbers = dodger.style.bottom.replace("px", "");
  const bottom = parseInt(bottomNumbers);
  if (bottom > 0) {
    dodger.style.bottom = `${bottom - 40}px`;
  } else {
    //Gameover
    playGameoverSound();
  }
}

const movementSound = document.getElementById("movementSound");

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") {
    movementSound.play();
    dodger.style.transform = "scaleX(-1)";
  }
  if (e.key === "ArrowRight") {
    movementSound.play();
    dodger.style.transform = "rotate(0deg)";
  }
  if (e.key === "ArrowUp") {
    movementSound.play();
    dodger.style.transform = "rotate(270deg)";
  }
  if (e.key === "ArrowDown") {
    movementSound.play();
    dodger.style.transform = "rotate(90deg)";
  }
});

function playSoundOnMovement() {
  movementSound.currentTime = 0;
}

// Vis et fuldt konfetti-billede som overlay
function showConfettiImage() {
  if (document.querySelector(".confetti-overlay")) return;

  const overlay = document.createElement("div");
  overlay.className = "confetti-overlay";

  const img = document.createElement("img");
  img.src = "img/confetti.png";
  img.alt = "Confetti";

  overlay.appendChild(img);

  document.body.appendChild(overlay);
}
