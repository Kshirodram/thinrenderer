var express = require('express');
var app = express();
var Iso = require('iso');
var iso = new Iso();
var path = require('path');
var fs = require('fs');
var superagent = require('superagent');
var edeServer = express();
var LRU = require('lru-cache'),
    options = {
        max: 500,
        length: function (n, key) {
            return n * 2 + key.length
        }, dispose: function (key, n) {
            n.close()
        }, maxAge: 1000 * 60 * 60
    },
    cache = LRU(options),
    otherCache = LRU(50);

var marko = require('marko');

app.use(express.static('components'));
app.use(express.static('dist'));
app.use('/assets', express.static('assets'));

//var rootTemplate = marko.load(require.resolve('./template-provider/events.marko'));

edeServer.get('/template', function (req, res) {
    res.setHeader('Content-Type', 'text/html');
    res.send(fs.readFileSync(path.resolve(__dirname, './template-provider/events.html')));
});

app.get('/', function (req, res) {
    if (cache.get('events')) {
        var cachedTpl = cache.get('events');
        cachedTpl.stream({'iso': new Iso})
            .pipe(res);
    } else {
        superagent.get('http://localhost:3001/template').end(function (tplErr, tplRes) {
            fs.writeFile('./.tmp/events.marko', tplRes.text, function (err) {
                if (err) throw err;
                var rootTemplate = marko.load(require.resolve('./.tmp/events.marko'));
                cache.set('events', rootTemplate);
                rootTemplate.stream({'iso': new Iso})
                    .pipe(res);
            });
        });
    }
});

//app.get('/', function (req, res) {
//  rootTemplate.stream({'iso': new Iso})
//  .pipe(res);
//});

app.get('/api/getsinglestamp', function (req, res) {
    res.send(require('./data/single_stamp'));
});

app.get('/api/getdoublestamp', function (req, res) {
    res.send(require('./data/double_stamp'));
});

app.get('/api/getherobanner', function (req, res) {
    res.send(require('./data/hero_banner'));
});

app.get('/api/getheader', function (req, res) {
    res.send(require('./data/header'));
});

app.get('/api/getfooter', function (req, res) {
    res.send(require('./data/footer'));
});

edeServer.listen(3001);

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('App listening at http://localhost', host, port);
});
