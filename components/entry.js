var React = require('react');
var Iso = require('iso');

Iso.bootstrap(function (componentData) {
    var Component = require('./' + componentData.component_meta.dataComponentName);
    React.render(React.createElement(Component, {
        data: componentData[componentData.component_meta.dataRenderPath],
        contentModel: componentData.component_meta.dataContentModel
    }), document.getElementById(componentData.component_meta.dataRenderPath));
});