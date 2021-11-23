"use strict";
exports.id = 569;
exports.ids = [569];
exports.modules = {

/***/ 746:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function to(valueOrPromiseItDoesntMatter) {
  /*
   * Wrapping up with Promise.resolve will guarantee that the `.then()`
   * method will exist and keep the function always returning a promise.
   */
  const promise = Promise.resolve(valueOrPromiseItDoesntMatter);
  return promise.then(data => [null, data], async error => {
    let formattedError = {};

    try {
      formattedError = await error.json();
    } catch (error) {
      console.log(error);
      formattedError['mensagem'] = 'Houve um erro tentar realizar esta operação';
    }

    return [formattedError, null];
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (to);

/***/ }),

/***/ 603:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var universal_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(993);
/* harmony import */ var universal_cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(universal_cookie__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const cookies = new (universal_cookie__WEBPACK_IMPORTED_MODULE_0___default())();
const server = 'http://ec2-18-117-174-22.us-east-2.compute.amazonaws.com:8003';
const api_token = '34733ab3fc8cab2272f45561ebff3676b14a02b5b72cd9fec0c7be6a4a97727a';

const request = (path, options) => {
  const user_token = cookies.get('user_token');
  const authHeader = user_token ? {
    'x-token': `Bearer ${user_token}`
  } : {};

  const requestOptions = _objectSpread({
    headers: _objectSpread({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${api_token}`
    }, authHeader)
  }, options);

  const promise = fetch(`${server}/${path}`, requestOptions).then(response => {
    if (response.status >= 400) {
      throw response;
    }

    ;
    return response.json();
  });
  return promise;
};

const _get_ = (path, queryParams = {}) => {
  const requestOptions = {
    method: 'GET'
  };
  const search = new URLSearchParams(queryParams).toString();
  const fullPath = search ? `${path}?${search}` : path;
  return request(fullPath, requestOptions);
};

const _post_ = (path, payload = {}) => {
  const requestOptions = {
    method: 'POST',
    body: JSON.stringify(payload)
  };
  return request(path, requestOptions);
};

const _put_ = (path, payload = {}) => {
  const requestOptions = {
    method: 'PUT',
    body: JSON.stringify(payload)
  };
  return request(path, requestOptions);
};

const _delete_ = path => {
  const requestOptions = {
    method: 'DELETE'
  };
  return request(path, requestOptions);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  _get_,
  _post_,
  _put_,
  _delete_
});

/***/ }),

/***/ 835:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(603);

const resource = 'usuarios';

const getData = () => {
  const route = `${resource}/me`;
  return _client__WEBPACK_IMPORTED_MODULE_0__/* .default._get_ */ .Z._get_(route);
};

const loginPF = payload => {
  const route = `${resource}/login/pf`;
  return _client__WEBPACK_IMPORTED_MODULE_0__/* .default._post_ */ .Z._post_(route, payload);
};

const loginPJ = payload => {
  const route = `${resource}/login/pj`;
  return _client__WEBPACK_IMPORTED_MODULE_0__/* .default._post_ */ .Z._post_(route, payload);
};

const createPJ = payload => {
  const route = `${resource}/pj`;
  return _client__WEBPACK_IMPORTED_MODULE_0__/* .default._post_ */ .Z._post_(route, payload);
};

const sendEmailRecovery = payload => {
  const route = `${resource}/pj/recuperar_senha`;
  return _client__WEBPACK_IMPORTED_MODULE_0__/* .default._post_ */ .Z._post_(route, payload);
};

const associateCategories = payload => {
  const route = `${resource}/categorias`;
  return _client__WEBPACK_IMPORTED_MODULE_0__/* .default._post_ */ .Z._post_(route, payload);
};

const updatePassword = payload => {
  const route = `${resource}/pj/alterar_senha_temp`;
  return _client__WEBPACK_IMPORTED_MODULE_0__/* .default._post_ */ .Z._post_(route, payload);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  associateCategories,
  createPJ,
  getData,
  loginPF,
  loginPJ,
  sendEmailRecovery,
  updatePassword
});

/***/ })

};
;