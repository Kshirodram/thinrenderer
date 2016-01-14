var React = require('react');
var component = require('./stamp.js');
var Iso = require('iso');
Iso.bootstrap(function (componentData) {		
	React.render(React.createElement(component, {data: componentData, contentModel: 'http://localhost:3000/api/getsinglestamp'}), document.getElementById('stamp'));  	
});

