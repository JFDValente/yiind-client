"use strict";
exports.id = 836;
exports.ids = [836];
exports.modules = {

/***/ 321:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(603);

const resource = 'ideias';

const create = payload => {
  return _client__WEBPACK_IMPORTED_MODULE_0__/* .default._post_ */ .Z._post_(resource, payload);
};

const listCategories = () => {
  const route = `${resource}/categorias`;
  return _client__WEBPACK_IMPORTED_MODULE_0__/* .default._get_ */ .Z._get_(route);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  create,
  listCategories
});

/***/ }),

/***/ 836:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ molecules_Select)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./bosons/requests/idea/index.js
var idea = __webpack_require__(321);
// EXTERNAL MODULE: ./bosons/awaitTo/index.js
var awaitTo = __webpack_require__(746);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(914);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./molecules/Select/Style.js

const CategoriesContainer = external_styled_components_default().div.withConfig({
  componentId: "sc-dxt01t-0"
})(["box-sizing:border-box;align-content:center;text-align:center;margin-bottom:", ";width:100%;"], ({
  theme: {
    spacing
  }
}) => spacing('base'));
const Item = external_styled_components_default().span.withConfig({
  componentId: "sc-dxt01t-1"
})(["cursor:pointer;display:inline-block;border-radius:50px;font-weight:bold;font-size:14px;padding:", ";margin:", ";background-color:", ";:hover{background-color:#347DBC;}"], ({
  theme: {
    spacing
  }
}) => spacing('micro'), ({
  theme: {
    spacing
  }
}) => spacing('micro'), ({
  selected
}) => selected ? '#347DBC' : '#70AEE5');
/* harmony default export */ const Style = ({
  CategoriesContainer,
  Item
});
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(282);
;// CONCATENATED MODULE: ./molecules/Select/index.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







function Select(props) {
  const {
    onChange
  } = props;
  const {
    0: formattedItems,
    1: setFormattedItems
  } = (0,external_react_.useState)([]);

  const clickItem = id => {
    //find item
    const tempItems = formattedItems;
    const indexItem = tempItems.findIndex(item => item.id === id); //modify status of the selected item

    tempItems[indexItem].selected = !tempItems[indexItem].selected;
    setFormattedItems([...tempItems]); //send selected array to the parent component

    const selectedItems = formattedItems.filter(item => item.selected).map(item => item.id);
    if (selectedItems.length) onChange(selectedItems);
  };

  (0,external_react_.useEffect)(async () => {
    const [categoriesError, categoriesResponse] = await (0,awaitTo/* default */.Z)(idea/* default.listCategories */.Z.listCategories());

    if (categoriesError) {
      console.log('Erro ao carregar lista de categorias');
      return;
    }

    const categories = categoriesResponse === null || categoriesResponse === void 0 ? void 0 : categoriesResponse.categorias.map(item => _objectSpread({
      selected: false
    }, item));
    setFormattedItems(categories);
  }, []);
  return /*#__PURE__*/jsx_runtime_.jsx(Style.CategoriesContainer, {
    children: !!formattedItems.length && formattedItems.map(item => /*#__PURE__*/jsx_runtime_.jsx(Style.Item, {
      onClick: () => clickItem(item.id),
      selected: item.selected,
      children: item.titulo
    }, item.id))
  });
}

/* harmony default export */ const molecules_Select = (/*#__PURE__*/external_react_default().memo(Select));

/***/ })

};
;