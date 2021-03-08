function hideLoader() {
    document.getElementById('loading').style.display = 'none';
}

window.onload = hideLoader();

// Strongly recommended: Hide loader after 20 seconds, even if the page hasn't finished loading
setTimeout(hideLoader, 20 * 1000);