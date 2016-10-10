var github = require('octonode');
var fs = require('fs')
fs.readFile('./.ghtoken', 'utf8', function (err,token) {
  if (err) {
    console.log(err);
  }
  var client = github.client(token.trim());
  var ghme           = client.me();

  client.get('/user', {}, function (err, status, body, headers) {
    console.log(body); //json object
  });

  // https://developer.github.com/v3/repos/#create
  ghme.repo({
    "name": "Hello-World",
    "description": "This is your first repo",
  }, function(err, status, body, headers) {
    console.log(body); //json object
  }); //repo
});


