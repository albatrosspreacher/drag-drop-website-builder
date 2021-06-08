function verifyGoogle() {

  var provider = new firebase.auth.GoogleAuthProvider();
  auth
    .signInWithPopup(provider)
    .then(result => {
      var credential = result.credential;

      // This gives you a Google Access Token. You can use it to access the Google API. 
      var token = credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      console.log(user.displayName);
      console.log(user.uid);
      localStorage.setItem('uid', user.uid)
      window.location.replace("/files");
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
window.onload = function () {
  render();
};
function render() {
  window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
    "recaptcha-container",
    {
      size: "invisible",
      callback: function (response) {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        recaptchaVerifier.render();
      }
    }
  );
  console.log("recaptcha rendered!");

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

function generateHTML() {
  var w = new Worker("generate-html.js"); // web worker created
  var heading_text = document.getElementById('heading_text').value;
  var heading_size = document.getElementById('heading_size').value;
  var input1_ph = document.getElementById('input1_ph').value;
  var input1_type = document.getElementById('input1_type').value;
  var input2_ph = document.getElementById('input2_ph').value;
  var input2_type = document.getElementById('input2_type').value;
  var btn_text = document.getElementById('input1_ph').value;
  var btn_color = document.querySelector('#btn_color').value;
  var p = document.getElementById('p_text').value;
  var card_link = document.getElementById('card_link').value;
  var card_title = document.getElementById('card_title').value;
  var card_body = document.getElementById('card_body').value;
  var x = [heading_size, heading_text, input1_ph, input1_type, input2_ph, input2_type, btn_color, btn_text, p, card_link, card_title, card_body];
  w.postMessage(x);
  setTimeout(function () {
    // Create a root reference
    var storageRef = firebase.storage().ref();

    // Create a reference to 'mountains.jpg'
    var mountainsRef = storageRef.child('generated-index.html');

    // Create a reference to 'images/mountains.jpg'
    var mountainImagesRef = storageRef.child('files/generated-index.html');

    // While the file names are the same, the references point to different files
    mountainsRef.name === mountainImagesRef.name;           // true
    mountainsRef.fullPath === mountainImagesRef.fullPath;   // false 
    // 'file' comes from the Blob or File API
    var file = "/generated-index.html"
    mountainImagesRef.put(file).then((snapshot) => {
      console.log('Uploaded a blob or file!');
      storageRef.child('files/generated-index.html').getDownloadURL()
        .then((url) => {
          // `url` is the download URL for 'images/stars.jpg'

          // This can be downloaded directly:
          var xhr = new XMLHttpRequest({ mozSystem: true });
          xhr.responseType = 'blob';
          xhr.onload = (event) => {
            var blob = xhr.response;
          };
          xhr.open('GET', url);
          xhr.send();

          // Or inserted into an <img> element
          var div = document.getElementById('#generated-link');
          div.innerHTML = url;
        })
        .catch((error) => {
          // Handle any errors
        });
    });
  }, 12000)
}