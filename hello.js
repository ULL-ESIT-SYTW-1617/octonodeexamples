var github = require('octonode');

var client = github.client();

client.get('/users/pksunkara', {}, function (err, status, body, headers) {
  console.log(body); //json object
  console.log(body.name); //json object
  console.log(body.email); //json object
});
