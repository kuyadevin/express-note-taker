const express = require('express');
const path = require('path');

app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);