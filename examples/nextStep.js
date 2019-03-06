webpackJsonp([0],{

/***/ 29:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(30);


/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
throw new Error("Cannot find module \"rc-steps/assets/index.less\"");
throw new Error("Cannot find module \"rc-steps/assets/iconfont.less\"");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nextStep_css__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nextStep_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__nextStep_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_dom__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_dom__);
throw new Error("Cannot find module \"rc-steps\"");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var container = document.getElementById('__react-content');

function generateRandomSteps() {
  var n = Math.floor(Math.random() * 3) + 3;
  var arr = [];
  for (var i = 0; i < n; i++) {
    arr.push({
      title: '\u6B65\u9AA4' + (i + 1)
    });
  }
  return arr;
}
var steps = generateRandomSteps();

var MyForm = function (_React$Component) {
  _inherits(MyForm, _React$Component);

  function MyForm() {
    var _temp, _this, _ret;

    _classCallCheck(this, MyForm);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      currentStep: Math.floor(Math.random() * steps.length)
    }, _this.nextStep = function () {
      var s = _this.state.currentStep + 1;
      if (s === steps.length) {
        s = 0;
      }
      _this.setState({
        currentStep: s
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }
  /*
  componentDidMount() {
    // You can dynamically set tail's left position based on main's width for each step.
    this.stepsRefs.forEach(s => {
      if (s.refs.tail) {
        s.refs.tail.style.left = `${s.refs.main.offsetWidth / 2}px`;
      }
    });
  }
  */


  MyForm.prototype.render = function render() {
    var _this2 = this;

    var cs = this.state.currentStep;
    this.stepsRefs = [];
    return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
      'form',
      { className: 'my-step-form' },
      __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
        'div',
        null,
        '\u8FD9\u4E2Ademo\u968F\u673A\u751F\u62103~6\u4E2A\u6B65\u9AA4\uFF0C\u521D\u59CB\u968F\u673A\u8FDB\u884C\u5230\u5176\u4E2D\u4E00\u4E2A\u6B65\u9AA4'
      ),
      __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
        'div',
        null,
        '\u5F53\u524D\u6B63\u5728\u6267\u884C\u7B2C',
        cs + 1,
        '\u6B65'
      ),
      __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
        'div',
        { className: 'my-step-container' },
        __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_5_rc_steps___default.a,
          { current: cs },
          steps.map(function (s, i) {
            return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_rc_steps__["Step"], { ref: function ref(c) {
                return _this2.stepsRefs[i] = c;
              },
              key: i,
              title: s.title
            });
          })
        )
      ),
      __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
        'div',
        null,
        __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
          'button',
          { type: 'button', onClick: this.nextStep },
          '\u4E0B\u4E00\u6B65'
        )
      )
    );
  };

  return MyForm;
}(__WEBPACK_IMPORTED_MODULE_3_react___default.a.Component);

__WEBPACK_IMPORTED_MODULE_4_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(MyForm, null), container);

/***/ }),

/***/ 31:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},[29]);
//# sourceMappingURL=nextStep.js.map