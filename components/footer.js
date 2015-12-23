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

var FooterComponent = (function (_React$Component) {
  _inherits(FooterComponent, _React$Component);

  function FooterComponent(props) {
    _classCallCheck(this, FooterComponent);

    _get(Object.getPrototypeOf(FooterComponent.prototype), 'constructor', this).call(this, props);

    var scope = this;

    this.state = {
      footerData: this.props.data.module.resources
    };
    this.toggleClick = this.toggleClick.bind(this);
  }

  _createClass(FooterComponent, [{
    key: 'toggleClick',
    value: function toggleClick(itemIndex) {
      this.state.footerData.sections[itemIndex]['isOpen'] = !this.state.footerData.sections[itemIndex]['isOpen'];
      this.forceUpdate();
    }
  }, {
    key: 'render',
    value: function render() {
      var footerData = this.state.footerData;
      var scope = this;
      if (footerData.sections && footerData.sections.length) {
        return _react2['default'].createElement(
          'div',
          { className: 'footer-container' },
          _react2['default'].createElement(
            'footer',
            null,
            _react2['default'].createElement(
              'div',
              { className: 'row footer-wrapper' },
              _react2['default'].createElement(
                'div',
                { className: 'small-12 medium-2 large-2 columns footer-section' },
                _react2['default'].createElement('span', { className: 'footer-logo-span' })
              ),
              footerData.sections.map(function (item, index) {
                return _react2['default'].createElement(
                  'div',
                  { className: 'small-12 medium-2 large-2 columns footer-section' },
                  footerData.sections.length === index + 1 ? _react2['default'].createElement(
                    'div',
                    { className: 'footer-heading footer-last' },
                    _react2['default'].createElement(
                      'h3',
                      null,
                      item.title
                    ),
                    _react2['default'].createElement('span', null)
                  ) : _react2['default'].createElement(
                    'div',
                    { className: 'footer-heading' },
                    _react2['default'].createElement(
                      'a',
                      { href: '#', onClick: scope.toggleClick.bind(scope, index), className: 'footer-link' },
                      _react2['default'].createElement(
                        'h3',
                        null,
                        item.title
                      ),
                      _react2['default'].createElement(
                        'div',
                        { className: 'foter-icon-wrapper' },
                        _react2['default'].createElement('span', { className: item.isOpen ? 'icon-shadow-down  is-open' : ' icon-shadow-down' })
                      )
                    )
                  ),
                  _react2['default'].createElement(
                    'div',
                    { className: 'footer-list' },
                    _react2['default'].createElement(
                      'ul',
                      { className: item.isOpen ? 'footer-ul show' : 'footer-ul hide' },
                      item.links.map(function (link) {
                        return _react2['default'].createElement(
                          'li',
                          null,
                          ' ',
                          link.target != '' ? _react2['default'].createElement(
                            'a',
                            { href: link.url, target: link.target },
                            _react2['default'].createElement('span', { className: link.icon != '' ? link.icon : '' }),
                            ' ',
                            link.text,
                            ' '
                          ) : _react2['default'].createElement(
                            'a',
                            { href: link.url },
                            _react2['default'].createElement('span', { className: link.icon != '' ? link.icon : '' }),
                            link.text
                          )
                        );
                      })
                    )
                  )
                );
              })
            ),
            _react2['default'].createElement(
              'div',
              { className: 'row copyright' },
              footerData.copyright
            )
          )
        );
      }
      return _react2['default'].createElement('div', null);
    }
  }]);

  return FooterComponent;
})(_react2['default'].Component);

exports['default'] = FooterComponent;
;
module.exports = exports['default'];
