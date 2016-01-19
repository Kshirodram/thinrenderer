var Immutable = require('immutable');
require('core-js/es5');
var context = require.context('./spec', true, /Spec\.js?$/);
context.keys().forEach(context);
