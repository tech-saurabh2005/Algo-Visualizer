async function mergeSort(arr, l, r) {

  if (l >= r || stopSorting) return;

  await checkPaused();

  let m = Math.floor((l + r) / 2);

  await mergeSort(arr, l, m);
  await mergeSort(arr, m + 1, r);

  await merge(arr, l, m, r); 
} 
async function merge(arr, l, m, r) {

  let speed = 201 - document.getElementById("speed").value;

  let left = arr.slice(l, m + 1);
  let right = arr.slice(m + 1, r + 1);

  let i = 0, j = 0, k = l;

  const bars = document.getElementsByClassName("bar");

  while (i < left.length && j < right.length) {

    if (stopSorting) return;

    await checkPaused();

    comparisons++;
    playCompareSound();
    updateAnalytics();

    // highlight current bars
    if (currentView === "bar") {
      if (bars[k]) bars[k].style.background = "red";
    }

    if (left[i] <= right[j]) {
      arr[k] = left[i];
      i++;
    } else {
      arr[k] = right[j];
      j++;
    }

    swaps++;
    playSwapSound();

    updateBars(arr);
await sleep(speed);
    await sleep(speed);

    if (currentView === "bar") {
      if (bars[k]) bars[k].style.background = "#38bdf8";
    }

    k++;
  }

  while (i < left.length) {

    if (stopSorting) return;

    await checkPaused();

    arr[k] = left[i];

    renderCurrentView();
    await sleep(speed);

    k++;
    i++;
  }

  while (j < right.length) {

    if (stopSorting) return;

    await checkPaused();

    arr[k] = right[j];

    renderCurrentView();
    await sleep(speed);

    k++;
    j++;
  }
   
  
}
window.mergeSort = mergeSort;
