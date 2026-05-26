const compareSound = new Audio("./assets/sounds/compare.mp3");
const swapSound = new Audio("./assets/sounds/swap.wav");
const completeSound = new Audio("./assets/sounds/complete.mp3");

function safePlay(audio) {
  if (!soundEnabled) return;

  try {
    audio.currentTime = 0;

    const playPromise = audio.play();

    if (playPromise !== undefined) {
      playPromise.catch(() => {});
    }
  } catch (e) {
    console.log("Audio blocked:", e);
  }
}

/* SOUND FUNCTIONS */
function playCompareSound() {
  safePlay(compareSound);
}

function playSwapSound() {
  safePlay(swapSound);
}

function playCompleteSound() {
  safePlay(completeSound);
}