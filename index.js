var express = require('express');
var app = express();

// var app2 = express();

var marko = require('marko');

app.use(express.static('components'));
app.use(express.static('dist'));

var rootTemplate = marko.load(require.resolve('./template-provider/events.marko'));

app.get('/', function (req, res) {
  rootTemplate.stream()
  .pipe(res);
});

app.get('/api/getsinglestamp', function(req, res){
	res.send(require('./data/single_stamp'));
});

app.get('/api/getherobanner', function(req, res){
	res.send(require('./data/hero_banner'));
});

app.get('/api/getheader', function(req, res){
	res.send(require('./data/header'));
});

app.get('/api/getfooter', function(req, res){
	res.send(require('./data/footer'));
});

// app2.listen(3001);

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('App listening at http://localhost', host, port);
});