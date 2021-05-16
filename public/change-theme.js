onmessage = e => {
    if (e.data == "/light-mode.css") {
      postMessage("/dark-mode.css");
    }
    if (e.data == "/dark-mode.css") {
      postMessage("/light-mode.css");
    }
  };
  