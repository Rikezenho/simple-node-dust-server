const express = require('express');
const path = require('path');

const config = require('./config.js');

// =========

const app = express();

app.get('/api', (req, res, next) => {
  res.sendFile(path.join(__dirname, config.dirnames.json, config.files.data));
});

// =========

console.log(`API listening on port ${config.PORT_API}`);
app.listen(config.PORT_API);