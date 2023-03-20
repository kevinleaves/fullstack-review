const helper = require('../helpers/github.js');
const db = require('../database/index.js')
const model = require('../models/index.js');

module.exports = {
  post: function (req, res) {
    // This route should take the github username provided
    // and get the repo information from the github API, then
    // we're sending the username along with the req.body
    // COMMUNICATE WITH GH API
    // console.log(req, 'im in the controller')
    console.log(req.body, 'req.body')

    //PROMISE VERSION
    // helper.getReposByUsername(req.body)
    //   .then ((repos) => {
    //     results.data.forEach((repo) => {
    //       model.repos.save(repo);
    //     })
    //     res.status(201).send(results.data)
    //   })
    //   .catch((err) => {
    //     console.log(err, 'err in server/controller')
    //     res.sendStatus(404);
    //   })

    helper.getReposByUsername(req.body)
    .then ((repos) => {
      console.log(repos, 'after helper')
      // waits for all repos to be done saving before sending the response code
      return Promise.all(
        repos.map((repo) => {
          return model.repos.save(repo)
        })
      )
      .then((data) => {
        res.status(201).json(data);
      })
      .catch((err) => {
        res.sendStatus(404);
      })
    })
    // save the repo information in the database
  },

  get: function (req, res) {
    // This route should send back the top 25 repos
    // console.log(req, 'get req')

    model.repos.get25()
      .then((result) => {
        console.log(result, 'data!')
        res.status(200).send(result);
      })
      .catch((err) => {
        console.log(err, 'err in controller')
        res.sendStatus(404);
      })
  },
}