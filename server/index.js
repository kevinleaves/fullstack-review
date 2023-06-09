const express = require('express');
const helper = require('../helpers/github.js');
const db = require('../database/index.js')
const controller = require('../controllers/index.js')

// SERVER

let app = express();

// TODO - your code here!
app.use(express.static('client/dist'))
// Set up static file service for files in the `client/dist` directory.
// Webpack is configured to generate files in that directory and
// this server must serve those files when requested.
app.use(express.json())

app.post('/repos', controller.repos.post);

app.get('/repos', controller.repos.get);

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

