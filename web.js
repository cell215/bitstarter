#!/usr/bin/env node
//including library to read file content
var fs = require('fs');

var express = require('express');

var app = express.createServer(express.logger());

var strContent = fs.readFileSync('index.html');

app.get('/', function(request, response) {
  response.send(strContent);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
