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

var MobileListView = (function (_React$Component) {
  _inherits(MobileListView, _React$Component);

  function MobileListView(props) {
    _classCallCheck(this, MobileListView);

    _get(Object.getPrototypeOf(MobileListView.prototype), 'constructor', this).call(this, props);
  }

  _createClass(MobileListView, [{
    key: 'render',
    value: function render() {
      var navData = this.props.data;
      return _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement(
          'li',
          { className: 'list-header' },
          _react2['default'].createElement(
            'span',
            null,
            navData.title
          )
        ),
        navData.links && navData.links.length ? navData.links.map(function (obj) {
          if (obj.text == 'Clubcard') {
            return _react2['default'].createElement(
              'li',
              { className: ' list-item' },
              _react2['default'].createElement(
                'a',
                { href: obj.url },
                _react2['default'].createElement('span', { className: ' list-item-icon list-item-icon-left ' + obj.icon }),
                _react2['default'].createElement('span', { className: 'list-item-icon list-item-icon-right icon-link' }),
                _react2['default'].createElement(
                  'span',
                  { className: 'list-item-single-line' },
                  obj.text
                )
              )
            );
          }
          return _react2['default'].createElement(
            'li',
            { className: ' list-item' },
            _react2['default'].createElement(
              'a',
              { href: obj.url },
              _react2['default'].createElement('span', { className: ' list-item-icon list-item-icon-left ' + obj.icon }),
              _react2['default'].createElement(
                'span',
                { className: 'list-item-single-line' },
                obj.text
              )
            )
          );
        }) : ""
      );
    }
  }]);

  return MobileListView;
})(_react2['default'].Component);

exports['default'] = MobileListView;

var HeaderComponent = (function (_React$Component2) {
  _inherits(HeaderComponent, _React$Component2);

  function HeaderComponent(props) {
    _classCallCheck(this, HeaderComponent);

    _get(Object.getPrototypeOf(HeaderComponent.prototype), 'constructor', this).call(this, props);
    var scope = this;

    this.state = {
      isNavBarOpen: false,
      headerData: this.props.data[0].module.resources,
      navigationData: this.props.data[1].module.resources,
      meta: {
        lang: this._switchLang()
      },
      lang: [{
        en_EN: "English",
        className: "english-icon"
      }, {
        pl_PL: "Polish",
        className: "icon-flag-pl"
      }]
    };
    this._openNavigation = this._openNavigation.bind(this);
  }

  _createClass(HeaderComponent, [{
    key: '_switchLang',
    value: function _switchLang() {
      var op = "";
      return op && op == 'pl_PL' ? op : 'en_EN';
    }
  }, {
    key: '_openNavigation',
    value: function _openNavigation() {
      this.setState({
        isNavBarOpen: !this.state.isNavBarOpen
      });

      if (!this.state.isNavBarOpen) {
        document.body.classList.add('overlay-shown');
      } else {
        document.body.classList.remove('overlay-shown');
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var headerData = this.state.headerData;
      var navData = this.state.navigationData;
      var self = this;
      return headerData && navData ? _react2['default'].createElement(
        'div',
        { className: 'header-wrapper' },
        _react2['default'].createElement(
          'header',
          { className: 'header' },
          _react2['default'].createElement(
            'div',
            { className: 'row header-top' },
            _react2['default'].createElement('a', { href: '#', className: 'menu-tab menu-link', onClick: this._openNavigation.bind(this) }),
            _react2['default'].createElement(
              'div',
              { className: 'column small-3 medium-2 logo-div' },
              _react2['default'].createElement('a', { className: 'logo', href: '#', title: 'Tesco' })
            ),
            _react2['default'].createElement(
              'div',
              { className: 'column medium-5 large-5 search-div' },
              _react2['default'].createElement('input', { id: '', className: 'search-box', name: 'header-search', placeholder: this.state.headerData.searchBarTitle, type: 'search' }),
              _react2['default'].createElement(
                'a',
                { href: '#', className: 'button secondary' },
                _react2['default'].createElement('i', { className: 'search-icon' })
              )
            ),
            _react2['default'].createElement(
              'div',
              { className: 'column medium-3 large-3 support-group' },
              _react2['default'].createElement(
                'div',
                { className: 'cell', onClick: this._switchLang.bind(this) },
                _react2['default'].createElement(
                  'span',
                  { className: 'link-text' },
                  this.state.lang.map(function (item) {
                    if (!item[self.state.meta.lang]) {
                      return _react2['default'].createElement(
                        'span',
                        null,
                        _react2['default'].createElement('span', { className: item[Object.keys(item)[1]] + " lang-icon" }),
                        _react2['default'].createElement(
                          'a',
                          { href: "?loggedOn=false&lang=" + Object.keys(item)[0] + "&country=PL" },
                          item[Object.keys(item)[0]]
                        )
                      );
                    }
                  })
                )
              ),
              headerData && headerData.links ? headerData.links[0].infoLinks.map(function (obj) {
                return _react2['default'].createElement(
                  'div',
                  { className: 'cell' },
                  _react2['default'].createElement(
                    'span',
                    { className: 'link-text' },
                    _react2['default'].createElement(
                      'a',
                      { href: obj.url },
                      obj.text
                    )
                  )
                );
              }) : ""
            ),
            _react2['default'].createElement(
              'div',
              { className: 'column medium-2 large-2 signin-panel' },
              headerData && headerData.links ? headerData.links[0].signinPanelLinks.map(function (val, index) {
                var classNames = '';
                if (index == 0) {
                  classNames = 'link-text login-link-text bold-08';
                } else {
                  classNames = 'link-text login-link-text bold-08 list-divider';
                }
                return _react2['default'].createElement(
                  'span',
                  { className: classNames },
                  _react2['default'].createElement(
                    'a',
                    { href: val.url },
                    val.text
                  )
                );
              }) : ""
            )
          ),
          _react2['default'].createElement('div', { className: 'divider' }),
          _react2['default'].createElement(
            'div',
            { className: 'row menu-list' },
            _react2['default'].createElement(
              'div',
              { className: 'column medium-10 menu-items' },
              navData.length ? navData[0].links.map(function (obj, index) {
                return _react2['default'].createElement(
                  'div',
                  { className: 'menu-item' },
                  _react2['default'].createElement(
                    'div',
                    null,
                    _react2['default'].createElement(
                      'span',
                      { className: 'link-text bold-09' },
                      _react2['default'].createElement(
                        'a',
                        { href: obj.url },
                        obj.text
                      )
                    ),
                    index == 0 ? _react2['default'].createElement('span', { className: 'icon-down-triangle groceries-down-icon' }) : ""
                  )
                );
              }) : ""
            )
          )
        ),
        _react2['default'].createElement(
          'a',
          { href: '#', onClick: this._openNavigation.bind(this) },
          _react2['default'].createElement('div', { className: this.state.isNavBarOpen ? "overlay overlay-visible" : "overlay" })
        ),
        _react2['default'].createElement(
          'nav',
          { className: this.state.isNavBarOpen ? "main-nav main-nav-open" : "main-nav" },
          _react2['default'].createElement('a', { href: '#', className: 'menu-tab', onClick: this._openNavigation.bind(this) }),
          _react2['default'].createElement(
            'div',
            { className: 'main-nav-inner' },
            _react2['default'].createElement(
              'div',
              { className: 'fixed-container' },
              _react2['default'].createElement(
                'div',
                { className: 'fixed-top' },
                _react2['default'].createElement(
                  'header',
                  { className: 'main-nav-header' },
                  headerData && headerData.links ? _react2['default'].createElement(
                    'a',
                    { className: 'header-button button-primary main-nav-header-button', href: headerData.links[0].signinPanelLinks[0].url },
                    headerData.links[0].signinPanelLinks[0].text
                  ) : "",
                  _react2['default'].createElement('div', { className: 'vertical-divider' }),
                  headerData && headerData.links ? _react2['default'].createElement(
                    'a',
                    { className: 'header-button button-primary main-nav-header-button', href: headerData.links[0].signinPanelLinks[1].url },
                    headerData.links[0].signinPanelLinks[1].text
                  ) : ""
                ),
                _react2['default'].createElement(
                  'div',
                  { className: 'list-container fixed-middle' },
                  _react2['default'].createElement(
                    'ul',
                    { className: 'list main-nav-list' },
                    navData.map(function (data) {
                      return _react2['default'].createElement(MobileListView, { data: data });
                    }),
                    _react2['default'].createElement(
                      'li',
                      { className: 'list-item', onClick: this._switchLang.bind(this) },
                      this.state.lang.map(function (item) {
                        if (!item[self.state.meta.lang]) {
                          return _react2['default'].createElement(
                            'a',
                            { href: "?loggedOn=false&lang=" + Object.keys(item)[0] + "&country=PL" },
                            _react2['default'].createElement('span', { className: "list-item-icon list-item-icon-left " + item[Object.keys(item)[1]] }),
                            _react2['default'].createElement(
                              'span',
                              { className: 'list-item-single-line' },
                              item[Object.keys(item)[0]]
                            )
                          );
                        }
                      })
                    )
                  )
                )
              )
            ),
            _react2['default'].createElement('a', { className: 'overlay-close', href: '#', onClick: this._openNavigation.bind(this) })
          )
        )
      ) : _react2['default'].createElement('div', null);
    }
  }]);

  return HeaderComponent;
})(_react2['default'].Component);

exports['default'] = HeaderComponent;
;
module.exports = exports['default'];
