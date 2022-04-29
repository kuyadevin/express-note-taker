//Require node modules
const express = require('express');
const path = require('path');
const fs = require('fs');
const notesData = require('./db/db.json');
const apiRoutes = require('./routes/apiRoutes')

const app = express();
//Set port
const PORT = process.env.PORT || 3001;

// Middleware for parsing application/json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/api',apiRoutes);

// Route to notes.html 
app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/notes.html'))
});

// Route to index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'))
});

app.listen(PORT, () => {
  console.log('App listening at http://localhost:' + PORT)
});