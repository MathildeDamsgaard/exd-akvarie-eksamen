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

// Gør left-btn til "pil venstre"-knap
const leftImg =
  document.getElementById("left-btn") || document.querySelector(".leftbtn-img");
if (leftImg) {
  const handleLeft = (e) => {
    e.preventDefault();
    // Bevægelseslyd + rotering af billedet
    movementSound.currentTime = 0;
    movementSound.play();
    dodger.style.transform = "scaleX(-1)";
    moveDodgerLeft();
  };

  leftImg.addEventListener("click", handleLeft);
  leftImg.addEventListener("touchstart", handleLeft, { passive: false });
}

//Right dodger
function moveDodgerRight() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  if (left < 1480) {
    dodger.style.left = `${left + 40}px`;
  } else {
    //Winner
    playWinningSound();
  }
}

// Gør right-btn til "pil højre"-knap
const rightImg =
  document.getElementById("right-btn") ||
  document.querySelector(".rightbtn-img");
if (rightImg) {
  const handleRight = (e) => {
    e.preventDefault();
    // Bevægelseslyd + rotering af billedet
    movementSound.currentTime = 0;
    movementSound.play();
    dodger.style.transform = "rotate(0deg)";
    moveDodgerRight();
  };

  rightImg.addEventListener("click", handleRight);
  rightImg.addEventListener("touchstart", handleRight, { passive: false });
}

// Up dodger
function moveDodgerUp() {
  const bottomNumbers = dodger.style.bottom.replace("px", "");
  const bottom = parseInt(bottomNumbers);
  if (bottom < 710) {
    dodger.style.bottom = `${bottom + 40}px`;
  } else {
    //Gameover
    playGameoverSound();
  }
}

// Gør up-btn til "pil op"-knap
const upImg =
  document.getElementById("up-btn") || document.querySelector(".upbtn-img");
if (upImg) {
  const handleUp = (e) => {
    e.preventDefault();
    // Bevægelseslyd + rotering af billedet
    movementSound.currentTime = 0;
    movementSound.play();
    dodger.style.transform = "rotate(270deg)";
    moveDodgerUp();
  };

  upImg.addEventListener("click", handleUp);
  upImg.addEventListener("touchstart", handleUp, { passive: false });
}

// Down dodger
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

// Gør down-btn til "pil ned"-knap
const downImg =
  document.getElementById("down-btn") || document.querySelector(".downbtn-img");
if (downImg) {
  const handleDown = (e) => {
    e.preventDefault();
    // Bevægelseslyd + rotering af billedet
    movementSound.currentTime = 0;
    movementSound.play();
    dodger.style.transform = "rotate(90deg)";
    moveDodgerDown();
  };

  downImg.addEventListener("click", handleDown);
  downImg.addEventListener("touchstart", handleDown, { passive: false });
}

/*Kollision*/
/*
function checkCollision() {
  const d = dodger.getBoundingClientRect();
  const s = seaweed.getBoundingClientRect();
  if (
    d.right > s.left &&
    d.left < s.right &&
    d.bottom > s.top &&
    d.top < s.bottom
  ) {
    // RAMT!
    gameoverSound.play();
  } else {
    // Ikke ramt (kan være tom)
    console.log("ingen kollision");
  }
}
  */

// Movement sound
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
