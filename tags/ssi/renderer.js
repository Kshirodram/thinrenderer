var template = require('./template.marko');
var path = require('path');
var React = require('react');
var superagent = require('superagent');

module.exports = function(input, out){	
	var asyncOut = out.beginAsync();	
	var component = require(path.resolve(__dirname, '../../'+input.dataComponentUrl));

	superagent.get(input.dataContentModel)
		.end(function(err, res){			
			var fragment = React.renderToString(React.createElement(component, {data: res.body}));
			asyncOut.end(fragment);
	});	
};