 stopSorting = false;

function disableControls() {
  document.querySelectorAll("button").forEach(btn => {
    btn.disabled = true;
  });

  
  const stopBtn = document.getElementById("stop");
  if (stopBtn) stopBtn.disabled = false;
}

function enableControls() {
  document.querySelectorAll("button").forEach(btn => {
    btn.disabled = false;
  });

  
}