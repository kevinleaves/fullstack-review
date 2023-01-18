const helper = require('../helpers/github.js');
const db = require('../database/index.js')
const repos = require('../models/index.js');

module.exports = {
  post: function (req, res) {
    // TODO - your code here!

    // This route should take the github username provided
    // and get the repo information from the github API, then
    // we're sending the username along with the req.body
    // COMMUNICATE WITH GH API
    // console.log(req, 'im in the controller')
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
        repos.repos.save(repo);
      })
      res.status(200).send(results.data)
    });

    // save the repo information in the database
  },

  get: function (req, res) {
    // TODO - your code here!
    // This route should send back the top 25 repos
    console.log(req, 'get req')
    repos.repos.getAll((err, result) => {
      if (err) {
        console.log(err, 'err in controller')
        res.sendStatus(404);
      } else {
        console.log(result, 'data!')
        res.status(200).json(result.data);
      }
    })
  },
}