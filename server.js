// server.js
// where your node app starts

const express = require("express");
const app = express();
const emoji = require("node-emoji");
var WebSocket = require('ws')
var htmlGenerator = require('html-generator-npm')

const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', function connection(ws) {

  // Wire up logic for the message event (when a client sends something)
  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
    htmlGenerator.initiateFile();
    htmlGenerator.appendButton(message[1], message[0]);
});
});

app.use(express.static("public"));

app.get("/", (request, response) => {
  response.sendFile(__dirname + "/views/index.html"); // render index.html
});

app.get("/login", (request, response) => {
  response.sendFile(__dirname + "/views/login.html");
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
