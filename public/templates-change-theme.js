onmessage = (e) => {
  if (e.data == "/templates-light-mode.css") {
    // check if fetched file name corresponds to light mode
    postMessage("/templates-dark-mode.css"); // if yes, prompt the main thread
    // to change to dark
  }
  if (e.data == "/templates-dark-mode.css") {
    // check if fetched file name corresponds to dark mode
    postMessage("/templates-light-mode.css"); // if yes, prompt the main thread
    // to change to light
  }
};
