const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher', {useNewUrlParser: true, useUnifiedTopology: true});

let repoSchema = new mongoose.Schema({
  // TODO: your schema here!
  repo_id: {type: Number, unique: true, upsert: true},
  name: String,
  owner: String,
  description: String,
  stargazers_count: Number,
  html_url: String,
  updated_at: Date
});

module.exports = {
  repoSchema: repoSchema,
};