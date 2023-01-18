const express = require('express');
const helper = require('../helpers/github.js');
const db = require('../database/index.js')

let app = express();

// TODO - your code here!
app.use(express.static('client/dist'))
// Set up static file service for files in the `client/dist` directory.
// Webpack is configured to generate files in that directory and
// this server must serve those files when requested.
app.use(express.json())

app.post('/repos', function (req, res) {
  // TODO - your code here!

  // This route should take the github username provided
  // and get the repo information from the github API, then
  // we're sending the username along with the req.body
  // COMMUNICATE WITH GH API
  console.log(req, 'im in the controller')
  console.log(req.body, 'req.body')
  helper.getReposByUsername(req.body, (err, results) => {
    if (err) {
      console.log(err, 'err in server/controller')
      res.sendStatus(404);
    }
    // console.log(repos, 'repos')
    // console.log(db, 'db')
    // console.log(results.data, 'data')
    results.data.forEach((repo) => {
      db.save(repo);
    })
    res.status(200).send(results.data)
  });

  // save the repo information in the database
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
});


let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

