const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 8080;

app.use(express.static('public'));
// app.use(express.static('css'));
// app.use(express.static('img'));

// In Node.js and Express applications, 
// res.sendFile() can be used to deliver files.
// Delivering HTML files using Express can be useful when you 
// need a solution for serving static pages

// sendFile will go here
app.get('/', function(req, res){
  // __dirname is an environment variable that tells you 
  // the absolute path of the directory containing the currently executing file
  res.sendFile(path.join(__dirname,'/index.html'));
})

app.listen(port);
console.log("Server started at http://localhost:" + port);