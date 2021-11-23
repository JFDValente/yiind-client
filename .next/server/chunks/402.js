"use strict";
exports.id = 402;
exports.ids = [402];
exports.modules = {

/***/ 925:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const onlyNumbers = value => value.replace(/[^\d]/g, "");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  onlyNumbers
});

/***/ }),

/***/ 294:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(925);


const cnpj = value => {
  const filteredCnpj = _filters__WEBPACK_IMPORTED_MODULE_0__/* .default.onlyNumbers */ .Z.onlyNumbers(value);
  if (filteredCnpj.length < 14) return filteredCnpj;
  return filteredCnpj.substr(0, 14).replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5");
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  cnpj
});

/***/ }),

/***/ 517:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const cnpj = value => {
  if (!value) return false; // Aceita receber o valor como string, número ou array com todos os dígitos

  const isString = typeof value === 'string';
  const validTypes = isString || Number.isInteger(value) || Array.isArray(value); // Elimina valor em formato inválido

  if (!validTypes) return false; // Filtro inicial para entradas do tipo string

  if (isString) {
    // Limita ao máximo de 18 caracteres, para CNPJ formatado
    if (value.length > 18) return false; // Teste Regex para veificar se é uma string apenas dígitos válida

    const digitsOnly = /^\d{14}$/.test(value); // Teste Regex para verificar se é uma string formatada válida

    const validFormat = /^\d{2}.\d{3}.\d{3}\/\d{4}-\d{2}$/.test(value); // Se o formato é válido, usa um truque para seguir o fluxo da validação

    if (digitsOnly || validFormat) true; // Se não, retorna inválido
    else return false;
  } // Guarda um array com todos os dígitos do valor


  const match = value.toString().match(/\d/g);
  const numbers = Array.isArray(match) ? match.map(Number) : []; // Valida a quantidade de dígitos

  if (numbers.length !== 14) return false; // Elimina inválidos com todos os dígitos iguais

  const items = [...new Set(numbers)];
  if (items.length === 1) return false; // Cálculo validador

  const calc = x => {
    const slice = numbers.slice(0, x);
    let factor = x - 7;
    let sum = 0;

    for (let i = x; i >= 1; i--) {
      const n = slice[x - i];
      sum += n * factor--;
      if (factor < 2) factor = 9;
    }

    const result = 11 - sum % 11;
    return result > 9 ? 0 : result;
  }; // Separa os 2 últimos dígitos de verificadores


  const digits = numbers.slice(12); // Valida 1o. dígito verificador

  const digit0 = calc(12);
  if (digit0 !== digits[0]) return false; // Valida 2o. dígito verificador

  const digit1 = calc(13);
  return digit1 === digits[1];
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  cnpj
});

/***/ })

};
;