//Require node modules
const express = require('express');
const path = require('path');
const fs = require('fs');
const notesData = require('./db/db.json');

const app = express();
//Set port
const PORT = process.env.PORT || 3001;

// Route to get notes
app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/notes.html'))
});

app.get('api/notes', (req, res) => res.json(notesData));

app.listen(PORT, () => {
  console.log('App listening at http://localhost:' + PORT)
});

// Route to index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'))
});

app.listen(PORT, () => {
  console.log('App listening at http://localhost:' + PORT)
});