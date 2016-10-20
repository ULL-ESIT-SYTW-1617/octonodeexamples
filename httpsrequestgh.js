var https = require('https');

var options = {
  host: 'api.github.com',
  port: 443,
  path: '/zen',
  headers: {
     'User-Agent': 'nodeJS',
      accept: '*/*'
  },
  method: 'GET'
};

var req = https.get(options, function(res) {
  console.log(res.statusCode);
  res.on('data', function(d) {
    process.stdout.write(d);
  });
});
req.end();

req.on('error', function(e) {
  console.error(e);
});
