function hideLoader() {
  document.getElementById("loading").style.display = "none";
}

window.onload = hideLoader();

// Strongly recommended: Hide loader after 20 seconds, even if the page hasn't finished loading
setTimeout(hideLoader, 20 * 1000);

function changeIcon() {
  document.getElementById("download-html").src =
    "https://img.icons8.com/dusk/64/000000/checkmark--v1.png";
}
