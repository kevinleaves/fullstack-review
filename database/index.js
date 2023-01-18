const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher', {useNewUrlParser: true, useUnifiedTopology: true});

let repoSchema = new mongoose.Schema({
  // TODO: your schema here!
  repo_id: {type: Number, unique: true, upsert: true},
  name: String,
  description: String,
  stargazers_count: Number,
  html_url: String,
  updated_at: Date
});

let save = (repoObj) => {
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


module.exports = {
  repoSchema: repoSchema,
};