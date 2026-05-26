let array = [];
let currentView = "bar";

let isPaused = false;
let stopSorting = false;
let soundEnabled = true;

/* GENERATE ARRAY */
function generateArray() {
  stopSorting = false;
  isPaused = false;

  const size = document.getElementById("size").value;

  array = Array.from({ length: size }, () =>
    Math.floor(Math.random() * 350) + 50
  );

  renderCurrentView();
}

/* RENDER VIEW */
function renderCurrentView() {
  const barContainer = document.getElementById("array-container");
  const indexContainer = document.getElementById("index-container");

  if (!barContainer || !indexContainer) return;

  if (currentView === "bar") {
    barContainer.style.display = "flex";
    indexContainer.style.display = "none";
    renderBars(array);
  } else {
    barContainer.style.display = "none";
    indexContainer.style.display = "grid";
    renderIndexView(array);
  }
}
function updateBars(arr) {
  const bars = document.getElementsByClassName("bar");

  for (let i = 0; i < arr.length; i++) {
    if (bars[i]) {
      bars[i].style.height = arr[i] + "px";
    }
  }
}

/* INFO PANEL */
function updateInfo(type) {

  const algo = algorithmDetails?.[type];
  if (!algo) return;

  document.getElementById("algo-name").innerText = algo.name;

  document.getElementById("time").innerText =
  `Best: ${algo.time.best}\nAvg: ${algo.time.average}\nWorst: ${algo.time.worst}`;

  document.getElementById("space").innerText = algo.space;

  document.getElementById("stable").innerText =
    algo.stable ? "Yes" : "No";

  document.getElementById("definition-text").innerText = algo.definition;
}

/* BUTTONS */
document.getElementById("generate").addEventListener("click",() =>{
  stopSorting = false;
  generateArray();
});

document.getElementById("size").addEventListener("change", generateArray);

document.getElementById("pause").addEventListener("click", () => {
  isPaused = !isPaused;

  document.getElementById("pause").innerText =
    isPaused ? "Resume" : "Pause";
});

document.getElementById("stop").addEventListener("click", () => {
  stopSorting = true;
  isPaused = false;
    enableControls();
  
});

document.getElementById("bar-view").addEventListener("click", () => {
  currentView = "bar";
  renderCurrentView();
});

document.getElementById("index-view").addEventListener("click", () => {
  currentView = "index";
  renderCurrentView();
});

document.getElementById("sound-toggle").addEventListener("click", () => {
  soundEnabled = !soundEnabled;

  document.getElementById("sound-toggle").innerText =
    soundEnabled ? "Sound ON" : "Sound OFF";
});

/* INIT */
window.addEventListener("DOMContentLoaded", () => {
  generateArray();
});
document.getElementById("merge").addEventListener("click", async () => {

  stopSorting = false;

  resetAnalytics();
  updateInfo("merge");

  disableControls();

  document.getElementById("pause").disabled = false;
  document.getElementById("stop").disabled = false;

  await mergeSort(array, 0, array.length - 1);

  
  if (!stopSorting) {
    enableControls();
    playCompleteSound();

    const bars = document.getElementsByClassName("bar");
    for (let i = 0; i < bars.length; i++) {
      bars[i].style.background = "green";
    }
  }
});