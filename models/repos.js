const mongoose = require('mongoose');
const db = require('../database/index.js');

// i guess you don't need the connection in here?
// mongoose.connect('mongodb://localhost/fetcher', {useNewUrlParser: true, useUnifiedTopology: true});

// COMPILING OUR SCHEMA INTO A MODEL
let Repo = mongoose.model('Repo', db.repoSchema);

// QUERY DB HERE
module.exports = {
  getAll: function (callback) {
    Repo.find({}, callback)
      .then((repos) => {
        console.log(repos, 'repos in model')
      })
      .catch((err) => {
        console.log(err, 'err in model')
      })
  },

  save: function (repoObj) {
    // TODO: Your code here
    // This function should save a repo or repos to
    // the MongoDB
    // pass in a repo obj?

    // instantiate a new repo instance using that obj?
    //mongo save
    let repo = new Repo({
      repo_id: repoObj.id,
      name: repoObj.name,
      description: repoObj.description,
      stargazers_count: repoObj.stargazers_count,
      html_url: repoObj.html_url,
      updated_at: repoObj.updated_at
    })

    // console.log(repo, 'repo in db')
    // call the native save function?
    repo.save((err, result) => {
      if (err) {
        return console.error(err);
      }
      // console.log(result, 'res in here')
    });
  }

}