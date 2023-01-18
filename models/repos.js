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
}