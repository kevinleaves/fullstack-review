const mongoose = require('mongoose');
const db = require('../database/index.js');

// i guess you don't need the connection in here?
// mongoose.connect('mongodb://localhost/fetcher', {useNewUrlParser: true, useUnifiedTopology: true});

// COMPILING OUR SCHEMA INTO A MODEL
let Repo = mongoose.model('Repo', db.repoSchema);

// QUERY DB HERE
module.exports = {
  getAll: function () {
    return new Promise ((resolve, reject) => {
      Repo.find({})
        .then((repos) => {
          console.log(repos, 'repos in model')
          resolve(repos)
        })
        .catch((err) => {
          console.log(err, 'err in model')
          reject(err)
        })
    })
  },

  save: function (repoObj) {
    // save a repo to the DB
    // instantiate a new repo instance using that obj?
    let repo = new Repo({
      repo_id: repoObj.id,
      name: repoObj.name,
      owner: repoObj.owner.login,
      description: repoObj.description,
      stargazers_count: repoObj.stargazers_count,
      html_url: repoObj.html_url,
      updated_at: repoObj.updated_at
    })

    return Repo.findOne({ repo_id: repoObj.repo_id })
      .then((data) => {
        console.log(data, 'after findone')
        if (!data) return repo.save()
      })
      // .catch((err) => {
      //   reject(err)
      // })
    // call the native save function?
    // repo.save();
  },

  // save: function (repos) {
  //   // map the schema to match your data
  //   let mapped = repos.map((repoObj) => {
  //     return new Repo({
  //       repo_id: repoObj.id,
  //       name: repoObj.name,
  //       owner: repoObj.owner.login,
  //       description: repoObj.description,
  //       stargazers_count: repoObj.stargazers_count,
  //       html_url: repoObj.html_url,
  //       updated_at: repoObj.updated_at
  //     })
  //   })
  //   return Repo.insertMany(mapped)
  // },

  get25: function () {
    return new Promise((resolve, reject) => {
      Repo.find({}).sort({stargazers_count: -1}).limit(25)
        .then((result) => {
          resolve(result)
        })
        .catch((err) => {
          console.log(err, 'err in model')
          reject(err)
        })
    })
  }

}