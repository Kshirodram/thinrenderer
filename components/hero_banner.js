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

var HeroBannerComponent = (function (_React$Component) {
  _inherits(HeroBannerComponent, _React$Component);

  function HeroBannerComponent(props) {
    _classCallCheck(this, HeroBannerComponent);

    _get(Object.getPrototypeOf(HeroBannerComponent.prototype), 'constructor', this).call(this, props);
    this.state = {
      heroBannerComponentData: this.props.data ? this.props.data.module.resource : []
    };
  }

  _createClass(HeroBannerComponent, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var scope = this;
      if (!this.props.data) {
        _getData(this.props.contentModel).then(function (data) {
          scope.setState({ heroBannerComponentData: data.module.resource });
        }, function (err) {
          console.log(err);
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      if (this.state.heroBannerComponentData.length == 0) {
        return _react2['default'].createElement('div', null);
      } else {
        return _react2['default'].createElement(
          'div',
          { id: this.props.componentId, className: 'hero-banner' },
          _react2['default'].createElement(
            'a',
            { href: this.state.heroBannerComponentData.linkText },
            _react2['default'].createElement('img', { src: this.state.heroBannerComponentData.image, alt: this.state.heroBannerComponentData.title, title: '' }),
            _react2['default'].createElement(
              'h1',
              { className: 'overlay-center title' },
              this.state.heroBannerComponentData.title
            ),
            _react2['default'].createElement(
              'p',
              { className: 'overlay-center subtitle' },
              this.state.heroBannerComponentData.subTitle
            )
          )
        );
      }
    }
  }], [{
    key: '_getComponentData',
    value: function _getComponentData(url) {
      return _getData(url);
    }
  }]);

  return HeroBannerComponent;
})(_react2['default'].Component);

exports['default'] = HeroBannerComponent;
module.exports = exports['default'];
