document
  .getElementById("quick")
  .addEventListener("click", async () => {
    stopSorting = false;

    resetAnalytics();
    updateInfo("quick");

    disableControls();
    document.getElementById("pause").disabled = false;
    document.getElementById("stop").disabled = false;

    await quickSort(array, 0, array.length - 1);

    if (!stopSorting) {
      enableControls();
      playCompleteSound();

      // final green
      if (currentView === "bar") {
        const bars = document.getElementsByClassName("bar");
        for (let i = 0; i < bars.length; i++) {
          if (bars[i]) bars[i].style.background = "green";
        }
      }
    }
  });

/* ================= QUICK SORT ================= */

async function quickSort(arr, low, high) {
  if (low < high) {

    if (stopSorting) return;

    await checkPaused();

    let pi = await partition(arr, low, high);

    await quickSort(arr, low, pi - 1);
    await quickSort(arr, pi + 1, high);
  }
}

/* ================= PARTITION ================= */

async function partition(arr, low, high) {

  let speed = 201 - document.getElementById("speed").value;

  let pivot = arr[high];
  let i = low - 1;

  const bars = document.getElementsByClassName("bar");

  for (let j = low; j < high; j++) {

    if (stopSorting) return;

    await checkPaused();

    comparisons++;
    playCompareSound();
    updateAnalytics();

    renderCurrentView();

    // highlight pivot + current
    if (currentView === "bar") {
      if (bars[high]) bars[high].style.background = "orange"; // pivot
      if (bars[j]) bars[j].style.background = "red";
    }

    await sleep(speed);

    if (arr[j] < pivot) {
      i++;

      swap(arr, i, j);
      playSwapSound();
      updateAnalytics();

      renderCurrentView();
    }

    await sleep(speed);

    if (currentView === "bar") {
      const bars = document.getElementsByClassName("bar");
      if (bars[j]) bars[j].style.background = "#38bdf8";
    }
  }

  swap(arr, i + 1, high);
  playSwapSound();
  swaps++;
  updateAnalytics();

  renderCurrentView();

  return i + 1;
}