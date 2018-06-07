const express = require('express');
const consolidate = require('consolidate');
const path = require('path');

const config = require('./config.js');
const routes = require('./routes');

// =========

const app = express();

app.engine('dust', consolidate.dust);

app.set('view engine', 'dust');
app.set('views', path.join(__dirname, config.dirnames.views));

routes(app, config);

// =========

console.log(`Server listening on port ${config.PORT_WEB}`);
app.listen(config.PORT_WEB);