var express = require('express');
var app = express();

var app2 = express();

require('marko/node-require').install();
var rootTemplate = require('./template-provider/events.marko');

app.get('/', function (req, res) {
  rootTemplate.render({}, function(errTplRender, tplRendered){
  	res.send(tplRendered);
  });  
});

app2.get('/api/getsinglestamp', function(req, res){
	res.send(require('./data/single_stamp'));
}).listen(3001);

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('App listening at http://localhost', host, port);
});
