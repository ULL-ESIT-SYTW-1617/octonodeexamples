var https = require('https');

var options = {
  host: 'openshift.redhat.com',
  port: 443,
  path: '/broker/rest/api',
  headers: {
      accept: '*/*'
  },
  method: 'GET'
};

var req = https.request(options, function(res) {
  console.log(res.statusCode);
  res.on('data', function(d) {
    process.stdout.write(d);
  });
});
req.end();

req.on('error', function(e) {
  console.error(e);
});
