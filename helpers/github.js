const axios = require('axios');
const config = require('../config.js');

let getReposByUsername = (username, callback) => {
  // TODO - Use the axios module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out,
  // but you'll have to fill in the URL
  let options = {
    url: `https://api.github.com/users/${username.username}/repos`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };

  axios.request(options)
    .then((result) => {
      // console.log(result, 'i got the data back');
      callback(null, result);
    })
    .catch((err) => {
      console.log(err, 'err in model');
      callback(err)
    })
}

module.exports.getReposByUsername = getReposByUsername;

// {?owner,updated,desc,25,1}