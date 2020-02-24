(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/index"],{

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
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

var _index = __webpack_require__(/*! ./index.less */ "./src/pages/index.less");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = (_dec = (0, _redux.connect)(function (_ref) {
  var home = _ref.home,
      loading = _ref.loading;
  return {
    home: home,
    loading: loading.effects["home/query"],
    submiting: loading.effects["home/service"]
  };
}), _dec(_class = (_temp2 = _class2 = function (_PureComponent) {
  _inherits(Index, _PureComponent);

  function Index() {
    var _ref2;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref2, [this].concat(args))), _this), _this.$usedState = ["styles", "$anonymousCallee__16", "dispatch", "loading", "home"], _this.config = {
      navigationBarTitleText: '首页',
      navigationBarTextStyle: "black",
      navigationBarBackgroundColor: "#fff",
      enablePullDownRefresh: true
    }, _this.customComponents = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: '_constructor',
    value: function _constructor(props) {
      _get(Index.prototype.__proto__ || Object.getPrototypeOf(Index.prototype), '_constructor', this).call(this, props);
      this.state = {};
      this.$$refs = new _taroWeapp2.default.RefsArray();
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      console.log('didMount');
      var dispatch = this.props.dispatch;
    }
  }, {
    key: '_createData',
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _props = this.__props,
          loading = _props.loading,
          _props$home = _props.home,
          carList = _props$home.carList,
          goodsList = _props$home.goodsList,
          shopBannerList = _props$home.shopBannerList,
          shopGoodsTypeList = _props$home.shopGoodsTypeList,
          shopInfo = _props$home.shopInfo;


      var $anonymousCallee__16 = [].concat(_toConsumableArray(new Array(3).keys()));
      Object.assign(this.__state, {
        styles: _index2.default,
        $anonymousCallee__16: $anonymousCallee__16
      });
      return this.__state;
    }
  }]);

  return Index;
}(_taroWeapp.PureComponent), _class2.$$events = [], _class2.$$componentPath = "pages/index", _temp2)) || _class);
exports.default = Index;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(Index, true));

/***/ }),

/***/ "./src/pages/index.less":
/*!******************************!*\
  !*** ./src/pages/index.less ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"page":"index_page_1IPmL"};

/***/ })

},[["./src/pages/index.js","runtime","taro","vendors"]]]);