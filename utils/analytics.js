let comparisons = 0;
let swaps = 0;

/* UPDATE UI */
function updateAnalytics() {
  const compEl = document.getElementById("comparisons");
  const swapEl = document.getElementById("swaps");

  if (compEl) compEl.innerText = comparisons ?? 0;
  if (swapEl) swapEl.innerText = swaps ?? 0;
}

/* RESET VALUES */
function resetAnalytics() {
  comparisons = 0;
  swaps = 0;

  updateAnalytics();
}