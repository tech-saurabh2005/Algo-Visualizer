document
  .getElementById("bubble")
  .addEventListener("click", bubbleSort);

async function bubbleSort() {

  stopSorting = false;

  resetAnalytics();
  updateInfo("bubble");

  disableControls();

  document.getElementById("pause").disabled = false;
  document.getElementById("stop").disabled = false;

  let speed = 201 - document.getElementById("speed").value;

  for (let i = 0; i < array.length; i++) {

    for (let j = 0; j < array.length - i - 1; j++) {

      if (stopSorting) {
        enableControls();
        return;
      }

      await checkPaused();

      comparisons++;
      playCompareSound();
      updateAnalytics();

      renderCurrentView(); // FIX: ensure fresh DOM
      const bars = document.getElementsByClassName("bar");

      if (currentView === "bar") {
        if (bars[j]) bars[j].style.background = "red";
        if (bars[j + 1]) bars[j + 1].style.background = "red";
      }

      await sleep(speed);

      if (array[j] > array[j + 1]) {

        swap(array, j, j + 1);
        playSwapSound();

        updateAnalytics();
      }

      renderCurrentView();

      await sleep(speed);

      if (currentView === "bar") {
        const bars = document.getElementsByClassName("bar");
        if (bars[j]) bars[j].style.background = "#38bdf8";
        if (bars[j + 1]) bars[j + 1].style.background = "#38bdf8";
      }
    }

    // mark sorted element safely
    renderCurrentView();
    const bars = document.getElementsByClassName("bar");

    if (currentView === "bar" && bars[array.length - i - 1]) {
      bars[array.length - i - 1].style.background = "green";
    }
  }

  enableControls();
  // FINAL COLOR PASS
  if (currentView === "bar") {
    const bars = document.getElementsByClassName("bar");
    for (let i = 0; i < array.length; i++) {
      if (bars[i]) bars[i].style.background = "green";
    }
  }
  playCompleteSound();
}