
var express = require('express');
var app = express();

app.use(express.static('public'));


var server = app.listen(8080, function () {
  var host = '52.91.60.211';
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});