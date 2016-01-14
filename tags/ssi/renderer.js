// var marko = require('marko');
// var template = marko.load(require.resolve('./template.marko'));
var path = require('path');
var React = require('react');
var Iso = require('iso');
// var superagent = require('superagent');
// require('node-jsx').install();

module.exports = function(input, out){	
	var asyncOut = out.beginAsync(),
		renderPath = input.dataRenderPath,
		iso = new Iso();
	if(input.isServer === 'true'){		
		var component = require(path.resolve(__dirname, '../../'+input.dataComponentUrl));		
		component._getComponentData(input.dataContentModel)
			.then(function(res){										
				iso.add('', res);
				var fragment = '<div id='+renderPath+'>'+React.renderToString(React.createElement(component, {data: res, contentModel: input.dataContentModel}))+'</div>';
				var newHtmlStr = fragment + iso.render();
				asyncOut.end(newHtmlStr);
		},function(err){
			console.log(err);
		});	

	}else{			
		iso.add('','');
		var fragment = '<div id='+renderPath+'></div>';				
		var newHtmlStr = fragment + iso.render();
		asyncOut.end(newHtmlStr);
	}		
};