'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _superagent = require('superagent');

var _superagent2 = _interopRequireDefault(_superagent);

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

function _getData(url) {
  return new _bluebird2['default'](function (resolve, reject) {
    _superagent2['default'].get(url).end(function (err, res) {
      if (err) {
        reject(err);
      }
      resolve(res.body);
    });
  });
}

var StampsComponent = (function (_React$Component) {
  _inherits(StampsComponent, _React$Component);

  function StampsComponent(props) {
    _classCallCheck(this, StampsComponent);

    _get(Object.getPrototypeOf(StampsComponent.prototype), 'constructor', this).call(this, props);
    this.state = {
      stampsComponentData: this.props.data ? this.props.data.module.resource : []
    };
  }

  _createClass(StampsComponent, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var scope = this;
      if (!this.props.data) {
        _getData(this.props.contentModel).then(function (data) {
          scope.setState({ stampsComponentData: data.module.resource });
        }, function (err) {
          console.log(err);
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var componentType = "";
      try {
        switch (this.state.stampsComponentData.prominence) {
          case 'HIGH':
            componentType = 'double';
            break;
          case 'LOW':
            componentType = 'single';
            break;
          default:
            componentType = "";
        }
      } catch (e) {
        console.log("Error while retrieving component type " + e);
      }
      var doubleStampIcon = componentType == 'double' ? _react2['default'].createElement('div', { className: 'double-stamp-icon' }) : [];
      
        return _react2['default'].createElement(
          'a',
          { 'img-responsive': true, href: this.state.stampsComponentData.linkText, d: this.props.componentId, className: componentType + "-stamp", style: {
              backgroundImage: 'url(\'' + this.state.stampsComponentData.image + '\')',
              backgroundPosition: '0% 50%'
            } },
          _react2['default'].createElement(
            'div',
            { className: 'st-overlay', style: { backgroundColor: this.state.stampsComponentData.captionBackgroundColour } },
            _react2['default'].createElement(
              'div',
              { className: 'lbl' },
              this.state.stampsComponentData.caption
            ),
            doubleStampIcon
          )
        );      
    }
  }], [{
    key: '_getComponentData',
    value: function _getComponentData(url) {
      return _getData(url);
    }
  }]);

  return StampsComponent;
})(_react2['default'].Component);

exports['default'] = StampsComponent;
;
module.exports = exports['default'];
