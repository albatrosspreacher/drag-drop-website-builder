// server.js
// where your node app starts

const express = require("express");
const app = express();
const emoji = require("node-emoji")

app.use(express.static("public"));

app.get("/", (request, response) => {
  response.sendFile(__dirname + "/views/index.html");
});

app.get("/login", (request, response) => {
  response.sendFile(__dirname + "/views/login.html");
});

app.get("/templates", (request, response) => {
  response.sendFile(__dirname + "/views/templates.html");
});

// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is live!")
  console.log(emoji.random().emoji + " View it here -> http://localhost:" + listener.address().port);
});
