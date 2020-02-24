(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/shop"],{

/***/ "./src/pages/shop.js":
/*!***************************!*\
  !*** ./src/pages/shop.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _dec, _class, _class2, _temp2;

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

var _redux = __webpack_require__(/*! @tarojs/redux */ "./node_modules/@tarojs/redux/index.js");

var _shop = __webpack_require__(/*! ./shop.less */ "./src/pages/shop.less");

var _shop2 = _interopRequireDefault(_shop);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Shop = (_dec = (0, _redux.connect)(function (_ref) {
  var home = _ref.home,
      loading = _ref.loading;
  return {
    home: home,
    loading: loading.effects["home/query"],
    submiting: loading.effects["home/service"]
  };
}), _dec(_class = (_temp2 = _class2 = function (_PureComponent) {
  _inherits(Shop, _PureComponent);

  function Shop() {
    var _ref2;

    var _temp, _this, _ret;

    _classCallCheck(this, Shop);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = Shop.__proto__ || Object.getPrototypeOf(Shop)).call.apply(_ref2, [this].concat(args))), _this), _this.$usedState = ["styles", "countNum"], _this.config = {
      navigationBarTitleText: '积分商城',
      navigationBarTextStyle: "black",
      navigationBarBackgroundColor: "#fff",
      enablePullDownRefresh: false
    }, _this.state = {
      countNum: 0
    }, _this.customComponents = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Shop, [{
    key: '_constructor',
    value: function _constructor(props) {
      _get(Shop.prototype.__proto__ || Object.getPrototypeOf(Shop.prototype), '_constructor', this).call(this, props);

      this.$$refs = new _taroWeapp2.default.RefsArray();
    }
  }, {
    key: '_createData',
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;
      Object.assign(this.__state, {
        styles: _shop2.default
      });
      return this.__state;
    }
  }]);

  return Shop;
}(_taroWeapp.PureComponent), _class2.$$events = [], _class2.$$componentPath = "pages/shop", _temp2)) || _class);
exports.default = Shop;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(Shop, true));

/***/ }),

/***/ "./src/pages/shop.less":
/*!*****************************!*\
  !*** ./src/pages/shop.less ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"page":"shop_page_10q9l"};

/***/ })

},[["./src/pages/shop.js","runtime","taro","vendors"]]]);