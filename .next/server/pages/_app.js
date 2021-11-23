"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 291:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(914);
;// CONCATENATED MODULE: external "redux"
const external_redux_namespaceObject = require("redux");
// EXTERNAL MODULE: external "next-redux-wrapper"
var external_next_redux_wrapper_ = __webpack_require__(744);
;// CONCATENATED MODULE: external "redux-devtools-extension/developmentOnly"
const developmentOnly_namespaceObject = require("redux-devtools-extension/developmentOnly");
// EXTERNAL MODULE: ./store/users/index.js
var users = __webpack_require__(712);
;// CONCATENATED MODULE: ./store/index.js




const reducers = (0,external_redux_namespaceObject.combineReducers)({
  user: users/* userReducer */.M
});

const makeStore = () => {
  const store = (0,external_redux_namespaceObject.createStore)(reducers, (0,developmentOnly_namespaceObject.composeWithDevTools)());
  return store;
};

const storeWrapper = (0,external_next_redux_wrapper_.createWrapper)(makeStore, {
  debug: false
});
;// CONCATENATED MODULE: external "styled-reset"
const external_styled_reset_namespaceObject = require("styled-reset");
var external_styled_reset_default = /*#__PURE__*/__webpack_require__.n(external_styled_reset_namespaceObject);
;// CONCATENATED MODULE: external "styled-normalize"
const external_styled_normalize_namespaceObject = require("styled-normalize");
var external_styled_normalize_default = /*#__PURE__*/__webpack_require__.n(external_styled_normalize_namespaceObject);
;// CONCATENATED MODULE: ./theme/breakpoints.js
const breakpoints = {
  sm: 375,
  md: 768,
  lg: 1024
};
const unit = 'px';

function up(key) {
  const value = typeof key === 'number' ? key : breakpoints[key];
  return `@media (min-width: ${value}${unit})`;
}

/* harmony default export */ const theme_breakpoints = ({
  up
});
;// CONCATENATED MODULE: ./theme/spacing.js
const baseUnit = 8;
const spacing_unit = 'px';
const spaces = ignoreUnit => ({
  zero: !ignoreUnit ? `0${spacing_unit}` : 0,
  auto: 'auto',
  micro: !ignoreUnit ? `${baseUnit}${spacing_unit}` : baseUnit,
  small: !ignoreUnit ? `${2 * baseUnit}${spacing_unit}` : 2 * baseUnit,
  base: !ignoreUnit ? `${3 * baseUnit}${spacing_unit}` : 3 * baseUnit,
  large: !ignoreUnit ? `${4 * baseUnit}${spacing_unit}` : 4 * baseUnit,
  mega: !ignoreUnit ? `${6 * baseUnit}${spacing_unit}` : 6 * baseUnit,
  giga: !ignoreUnit ? `${8 * baseUnit}${spacing_unit}` : 8 * baseUnit,
  tera: !ignoreUnit ? `${12 * baseUnit}${spacing_unit}` : 12 * baseUnit
});

function getSpace(name = 'base', ignoreUnit = false) {
  return spaces(ignoreUnit)[name] || spaces(ignoreUnit).base;
}

/* harmony default export */ const spacing = (getSpace);
;// CONCATENATED MODULE: ./theme/width.js
const widths = {
  slim: 375,
  narrow: 768,
  base: 1024,
  fluid: '100%'
};

const get = (size = 'base') => {
  if (size === 'fluid') return widths.fluid;
  return `${widths[size] || widths.base}px`;
};

/* harmony default export */ const width = ({
  get
});
;// CONCATENATED MODULE: ./theme/index.js



/* harmony default export */ const theme = ({
  breakpoints: theme_breakpoints,
  spacing: spacing,
  width: width
});
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(282);
;// CONCATENATED MODULE: ./pages/_app.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const GlobalStyle = (0,external_styled_components_.createGlobalStyle)(["", " ", " body{font-family:'Roboto','sans-serif';background-color:#000000;color:#FFFFFF;width:calc(100vw - 32px);}"], (external_styled_reset_default()), (external_styled_normalize_default()));

function MainApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/jsx_runtime_.jsx(external_styled_components_.ThemeProvider, {
    theme: theme,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(Component, _objectSpread({}, pageProps)), /*#__PURE__*/jsx_runtime_.jsx(GlobalStyle, {})]
    })
  });
}

/* harmony default export */ const _app = (storeWrapper.withRedux(MainApp));

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ 282:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 914:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [712], () => (__webpack_exec__(291)));
module.exports = __webpack_exports__;

})();