document
  .getElementById("insertion")
  .addEventListener("click", insertionSort);

async function insertionSort() {

  stopSorting = false;

  resetAnalytics();
  updateInfo("insertion");

  disableControls();

  document.getElementById("pause").disabled = false;
  document.getElementById("stop").disabled = false;

  let speed = 201 - document.getElementById("speed").value;

  for (let i = 1; i < array.length; i++) {

    if (stopSorting) {
      enableControls();
      return;
    }

    await checkPaused();

    let key = array[i];
    let j = i - 1;

    while (j >= 0 && array[j] > key) {

      if (stopSorting) {
        enableControls();
        return;
      }

      await checkPaused();

      comparisons++;
      playCompareSound();
      


      updateAnalytics();

      array[j + 1] = array[j];
      swaps++;
      playSwapSound();

      renderCurrentView();

      const bars = document.getElementsByClassName("bar");

      if (currentView === "bar") {
        if (bars[j]) bars[j].style.background = "red";
        if (bars[j + 1]) bars[j + 1].style.background = "orange";
      }

      await sleep(speed);

      if (currentView === "bar") {
        if (bars[j]) bars[j].style.background = "#38bdf8";
        if (bars[j + 1]) bars[j + 1].style.background = "#38bdf8";
      }

      j--;
    }

    array[j + 1] = key;

    renderCurrentView();

    const bars = document.getElementsByClassName("bar");
    if (currentView === "bar" && bars[j + 1]) {
      bars[j + 1].style.background = "green";
    }

    await sleep(speed);
  }

  enableControls();
  

  if (currentView === "bar") {
    const bars = document.getElementsByClassName("bar");
    for (let i = 0; i < bars.length; i++) {
      bars[i].style.background = "green";
    }
  }
  playCompleteSound();
}