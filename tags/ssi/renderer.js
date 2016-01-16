var path = require('path');
var React = require('react');

module.exports = function (input, out) {
    var asyncOut = out.beginAsync(),
        renderPath = input.dataRenderPath,
        state = {},
        iso = out.stream._d.iso;
    if (input.isServer === 'true') {
        var component = require(path.resolve(__dirname, '../../' + input.dataComponentUrl));
        component._getComponentData(input.dataContentModel)
            .then(function (res) {
                state[renderPath] = res;
                state['component_meta'] = input;
                iso.add('', state);
                var fragment = '<div id=' + renderPath + '>' + React.renderToString(React.createElement(component, {
                        data: res,
                        contentModel: input.dataContentModel
                    })) + '</div>';
                var newHtmlStr = fragment + iso.render();
                asyncOut.end(newHtmlStr);
            }, function (err) {
                console.log(err);
            });
    } else {
        state[renderPath] = '';
        state['component_meta'] = input;
        iso.add('', state);
        var fragment = '<div id=' + renderPath + '></div>';
        var newHtmlStr = fragment + iso.render();
        asyncOut.end(newHtmlStr);
    }
};