function verifyGoogle() {
  /*
    var provider = new firebase.auth.GoogleAuthProvider();
    auth
      .signInWithPopup(provider)
      .then(result => {
        var credential = result.credential;

        // This gives you a Google Access Token. You can use it to access the
  Google API. var token = credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        console.log(user.displayName);
        console.log(user.uid);
        localStorage.setItem('uid', user.uid)
        window.location.replace("../");
        // ...
      })
      .catch(error => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });

  }

  //js code to verify recaptcha starts
  window.onload = function() {
    render();
  };
  function render() {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible",
        callback: function(response) {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          recaptchaVerifier.render();
        }
      }
    );
    console.log("recaptcha rendered!");
    */
}
// js code to verify recaptcha ends

function changeTheme() {
  var w = new Worker("change-theme.js"); // web worker created
  var theme = document.querySelector("#theme-link").getAttribute("href"); // fetch the current css file name
  w.postMessage(theme); // pass this value to the worker
  w.onmessage = (e) => {
    var theme_change = e.data; // fetch the message posted by the worker
    document.getElementById("theme-link").href = theme_change; // change theme accordingly
    w.terminate();
  };
}

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}
