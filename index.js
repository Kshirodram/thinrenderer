var express = require('express');
var app = express();
require('marko/node-require').install();
var rootTemplate = require('./template-provider/events.marko');

app.get('/', function (req, res) {
  rootTemplate.render({}, function(errTplRender, tplRendered){
  	res.send(tplRendered);
  });  
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('App listening at http://localhost', host, port);
});
