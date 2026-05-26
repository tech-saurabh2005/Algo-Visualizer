 stopSorting = false;

function disableControls() {
  document.querySelectorAll("button").forEach(btn => {
    btn.disabled = true;
  });

  // keep STOP always enabled for safety
  const stopBtn = document.getElementById("stop");
  if (stopBtn) stopBtn.disabled = false;
}

function enableControls() {
  document.querySelectorAll("button").forEach(btn => {
    btn.disabled = false;
  });

  // optional safety reset
  //stopSorting = false;
}