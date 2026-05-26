document
  .getElementById("selection")
  .addEventListener("click", selectionSort);

async function selectionSort() {
  stopSorting = false;

  resetAnalytics();
  updateInfo("selection");

  disableControls();
  document.getElementById("pause").disabled = false;
  document.getElementById("stop").disabled = false;

  let speed = 201 - document.getElementById("speed").value;

  for (let i = 0; i < array.length; i++) {

    if (stopSorting) {
      enableControls();
      return;
    }

    let minIndex = i;

    for (let j = i + 1; j < array.length; j++) {

      if (stopSorting) {
        enableControls();
        return;
      }

      await checkPaused();

      comparisons++;
      playCompareSound();

      updateAnalytics();

      renderCurrentView(); // FIX: refresh DOM safely
      const bars = document.getElementsByClassName("bar");

      if (currentView === "bar") {
        if (bars[minIndex]) bars[minIndex].style.background = "orange";
        if (bars[j]) bars[j].style.background = "red";
      }

      if (currentView === "index") {
        renderIndexView(array, [minIndex, j], []);
      }

      await sleep(speed);

      if (array[j] < array[minIndex]) {
        minIndex = j;
      }

      if (currentView === "bar") {
        if (bars[j]) bars[j].style.background = "#38bdf8";
      }
    }

    if (minIndex !== i) {
      swap(array, i, minIndex);

      playSwapSound();
      updateAnalytics();
    }

    renderCurrentView();

    
    const bars = document.getElementsByClassName("bar");

    if (currentView === "bar" && bars[i]) {
      bars[i].style.background = "green";
    }

    if (currentView === "index") {
      renderIndexView(array, [], [i]);
    }
  }

  enableControls();
  
  if (currentView === "bar") {
    const bars = document.getElementsByClassName("bar");
    for (let i = 0; i < array.length; i++) {
      if (bars[i]) bars[i].style.background = "green";
    }
  }
  playCompleteSound();
}