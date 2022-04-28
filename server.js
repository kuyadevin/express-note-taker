//Require node modules
const express = require('express');
const path = require('path');

const app = express();
//Set port
const PORT = process.env.PORT || 3001;


app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);