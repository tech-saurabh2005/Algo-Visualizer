function renderBars(arr) {
  const container = document.getElementById("array-container");
  if (!container) return;

  container.innerHTML = "";

  for (let i = 0; i < arr.length; i++) {
    const bar = document.createElement("div");
    bar.classList.add("bar");

    bar.style.height = arr[i] + "px";

    if (arr.length <= 35) {
      bar.innerText = arr[i];
    }

    container.appendChild(bar);
  }
}

function renderIndexView(arr, activeIndices = [], sortedIndices = []) {
  const container = document.getElementById("index-container");
  if (!container) return;

  container.innerHTML = "";

  const activeSet = new Set(activeIndices);
  const sortedSet = new Set(sortedIndices);

  for (let i = 0; i < arr.length; i++) {
    const item = document.createElement("div");

    item.classList.add("index-item");

    if (activeSet.has(i)) {
      item.classList.add("active-index");
    }

    if (sortedSet.has(i)) {
      item.classList.add("sorted-index");
    }

    item.innerHTML = `
      <div class="index-number">${i}</div>
      <div class="index-value">${arr[i]}</div>
    `;

    container.appendChild(item);
  }
}