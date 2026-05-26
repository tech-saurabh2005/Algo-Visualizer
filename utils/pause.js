 isPaused = false;

function waitUntilResumed() {
  return new Promise(resolve => {
    const check = () => {
      if (!isPaused) return resolve();
      requestAnimationFrame(check);
    };
    check();
  });
}

async function checkPaused() {
  if (!isPaused) return;
  await waitUntilResumed();
}