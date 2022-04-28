//Require node modules
const express = require('express');
const path = require('path');
const fs = require('fs');
const notesData = require('./db/db.json');

const app = express();
//Set port
const PORT = process.env.PORT || 3001;

// Middleware for parsing application/json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Route to notes.html 
app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/notes.html'))
});

// Route to index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'))
});

//Reading db file and saving notes as JSON
app.get('api/notes', (req, res) => res.json(notesData));

// Post Request
app.post('api/notes', (req, res) => {

});


app.listen(PORT, () => {
  console.log('App listening at http://localhost:' + PORT)
});