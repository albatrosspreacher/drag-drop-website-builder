onmessage = (e) => {
  if (e.data == "/index-light-mode.css") {
    // check if fetched file name corresponds to light mode
    postMessage("/index-dark-mode.css"); // if yes, prompt the main thread to
    // change to dark
  }
  if (e.data == "/index-dark-mode.css") {
    // check if fetched file name corresponds to dark mode
    postMessage("/index-light-mode.css"); // if yes, prompt the main thread to
    // change to light
  }
};
