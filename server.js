// server.js
// where your node app starts

const express = require("express");
const app = express();
const emoji = require("node-emoji");
var WebSocket = require('ws')
var htmlGenerator = require('html-generator-npm')
const wss = new WebSocket.Server({ port: 8080 });

htmlGenerator.initiateFile();
wss.on('connection', function connection(ws) {
  // Wire up logic for the message event (when a client sends something)
  ws.onmessage = function (e) {
    console.log("data is " + e.data)
    if (e.data == "heading") {
      console.log(e.data)
      ws.send("ok, heading");
      ws.onmessage = function (e) {
        var heading_size = e.data;
        console.log(e.data)
        ws.send("ok, size")
        ws.onmessage = function (e) {
          var heading_text = e.data
          console.log("line 27" + e.data)
          htmlGenerator.appendHeading(heading_text, heading_size);
          ws.send("ok, heading done")
        }
      }
    }
    if (e.data == "input1") {
      console.log("line 33" + e.data)
      ws.send("ok, input1");
      ws.onmessage = function (e) {
        var input1_ph = e.data;
        console.log("line 37" + e.data)
        ws.send("ok, placeholder")
        ws.onmessage = function (e) {
          var input1_type = e.data
          console.log("line 41" + e.data)
          htmlGenerator.appendInputField(input1_type, input1_ph);
          ws.send("ok, input1 done")
          htmlGenerator.endFile();
          //htmlGenerator.formatFile();
        }
      }
    }
    if (e.data == "btn") {
      console.log("line 47" + e.data)
      ws.send("ok, btn");
      ws.onmessage = function (e) {
        var btn_color = e.data;
        console.log("line 51" + e.data)
        ws.send("ok, placeholder")
        ws.onmessage = function (e) {
          var btn_text = e.data
          console.log("line 45" + e.data)
          htmlGenerator.appendButton(btn_text, btn_color)
          ws.send("ok, btn done")
        }
      }
    }
  }
});



app.use(express.static("public"));

app.get("/", (request, response) => {
  response.sendFile(__dirname + "/views/index.html"); // render index.html
});

app.get("/login", (request, response) => {
  response.sendFile(__dirname + "/views/login.html");
});

app.get("/files", (request, response) => {
  response.sendFile(__dirname + "/views/myfiles.html");
});

app.get("/templates", (request, response) => {
  response.sendFile(__dirname + "/views/templates.html");
});

app.get("/feedback", (request, response) => {
  response.sendFile(__dirname + "/views/feedback.html");
});

// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is live!");
  console.log(
    emoji.random().emoji +
    " View it here -> http://localhost:" +
    listener.address().port
  ); // easy access 😎
});
