"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[729],{6489:function(t,e){e.Q=function(t,e){if("string"!==typeof t)throw new TypeError("argument str must be a string");for(var r={},i=e||{},c=t.split(o),u=i.decode||n,s=0;s<c.length;s++){var f=c[s],l=f.indexOf("=");if(!(l<0)){var p=f.substr(0,l).trim(),d=f.substr(++l,f.length).trim();'"'==d[0]&&(d=d.slice(1,-1)),void 0==r[p]&&(r[p]=a(d,u))}}return r},e.q=function(t,e,n){var o=n||{},a=o.encode||r;if("function"!==typeof a)throw new TypeError("option encode is invalid");if(!i.test(t))throw new TypeError("argument name is invalid");var c=a(e);if(c&&!i.test(c))throw new TypeError("argument val is invalid");var u=t+"="+c;if(null!=o.maxAge){var s=o.maxAge-0;if(isNaN(s)||!isFinite(s))throw new TypeError("option maxAge is invalid");u+="; Max-Age="+Math.floor(s)}if(o.domain){if(!i.test(o.domain))throw new TypeError("option domain is invalid");u+="; Domain="+o.domain}if(o.path){if(!i.test(o.path))throw new TypeError("option path is invalid");u+="; Path="+o.path}if(o.expires){if("function"!==typeof o.expires.toUTCString)throw new TypeError("option expires is invalid");u+="; Expires="+o.expires.toUTCString()}o.httpOnly&&(u+="; HttpOnly");o.secure&&(u+="; Secure");if(o.sameSite){switch("string"===typeof o.sameSite?o.sameSite.toLowerCase():o.sameSite){case!0:u+="; SameSite=Strict";break;case"lax":u+="; SameSite=Lax";break;case"strict":u+="; SameSite=Strict";break;case"none":u+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}}return u};var n=decodeURIComponent,r=encodeURIComponent,o=/; */,i=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;function a(t,e){try{return e(t)}catch(n){return t}}},9384:function(t,e,n){n.d(e,{Z:function(){return i}});var r={Container:n(9163).default.p.withConfig({componentId:"sc-cinvz-0"})(["position:absolute;top:",";left:0;right:0;background-color:",";color:#FFFFFF;font-size:18px;border:1px solid #FFFFFF;border-radius:5px;align-self:center;text-align:center;"," transform:translateY(0%);@keyframes notification{from{transform:translateY(-100%);opacity:0%;}to{transform:translateY(0%);opacity:100%}}animation-name:notification;animation-duration:0.4s;animation-timing-function:ease-out;"],(function(t){return(0,t.theme.spacing)("small")}),(function(t){return"success"===t.type?"#00840d":"#AA0000"}),(function(t){var e=t.theme.spacing;return"\n    padding: ".concat(e("base")," ").concat(e("base"),";\n    margin: 0 ").concat(e("giga"),";\n  ")}))},o=n(5893);var i=function(t){var e=t.type,n=t.message;return(0,o.jsx)(r.Container,{type:e,children:n})}},2696:function(t,e,n){n.d(e,{Z:function(){return f}});var r=n(9163),o=r.default.div.withConfig({componentId:"sc-1mlp1b3-0"})(["display:flex;flex-direction:column;flex-basis:48%;box-sizing:content-box;"]),i=r.default.span.withConfig({componentId:"sc-1mlp1b3-1"})(["font-size:16px;margin-bottom:",";",";",";"],(function(t){return(0,t.theme.spacing)("micro")}),(function(t){return"bold"===t.format?"font-weight: bold":""}),(function(t){return"black"===t.color?"color: #000000":"color: #FFFFFF"})),a=(0,r.css)(["border:none;font-size:16px;color:#000000;border-radius:5px;box-shadow:2px 3px 5px #000000;padding:"," ",";height:100%;margin-bottom:",";background-color:#FFFFFF;"],(function(t){return(0,t.theme.spacing)("micro")}),(function(t){return(0,t.theme.spacing)("micro")}),(function(t){return(0,t.theme.spacing)("base")})),c={Container:o,Input:r.default.input.withConfig({componentId:"sc-1mlp1b3-2"})([""," width:calc(100% - 16px);"],a),Label:i,Select:r.default.select.withConfig({componentId:"sc-1mlp1b3-3"})([""," cursor:pointer;width:100%;"],a),TextArea:r.default.textarea.withConfig({componentId:"sc-1mlp1b3-4"})([""," width:calc(100% - 16px);"],a)},u=n(5893);function s(t){var e=t.formatLabel,n=t.label,r=t.labelColor,o=t.name,i=t.onChange,a=t.options,s=t.required,f=t.rows,l=t.type,p=t.value;return(0,u.jsxs)(c.Container,{children:[(0,u.jsx)(c.Label,{format:e,color:r,children:n}),-1===["select","textArea"].indexOf(l)&&(0,u.jsx)(c.Input,{name:o,type:l,value:p,onChange:i,required:s}),"select"===l&&!!a.length&&(0,u.jsx)(c.Select,{name:o,children:a.map((function(t){return(0,u.jsx)("option",{value:t.value,children:t.label},"id-".concat(t.value))}))}),"textArea"==l&&(0,u.jsx)(c.TextArea,{name:o,value:p,onChange:i,rows:f,required:s})]})}s.defaultProps={formatLabel:"bold",labelColor:"black",onChange:null,required:!1,rows:1,value:"",options:[]};var f=s},1156:function(t,e,n){n.d(e,{Z:function(){return i}});var r={Button:n(9163).default.button.withConfig({componentId:"sc-1f81gc1-0"})(["border:none;border-radius:5px;background-color:#22AA3B;height:35px;width:fit-content;align-self:center;cursor:pointer;box-shadow:0 5px 5px #000000;> span{color:#FFFFFF;font-weight:bold;margin:auto 25px;}:hover{background-color:#1B9650;border:1px solid #FFFFFF;}"])},o=n(5893);var i=function(t){var e=t.label;return(0,o.jsx)(r.Button,{children:(0,o.jsx)("span",{children:e})})}},3746:function(t,e,n){var r=n(266),o=n(809),i=n.n(o);e.Z=function(t){return Promise.resolve(t).then((function(t){return[null,t]}),function(){var t=(0,r.Z)(i().mark((function t(e){var n;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={},t.prev=1,t.next=4,e.json();case 4:n=t.sent,t.next=11;break;case 7:t.prev=7,t.t0=t.catch(1),console.log(t.t0),n.mensagem="Houve um erro tentar realizar esta opera\xe7\xe3o";case 11:return t.abrupt("return",[n,null]);case 12:case"end":return t.stop()}}),t,null,[[1,7]])})));return function(e){return t.apply(this,arguments)}}())}},7603:function(t,e,n){var r=n(2809);function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){(0,r.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var a=new(n(9585).Z),c=function(t,e){var n=a.get("user_token"),r=n?{"x-token":"Bearer ".concat(n)}:{},o=i({headers:i({"Content-Type":"application/json",Authorization:"Bearer ".concat("34733ab3fc8cab2272f45561ebff3676b14a02b5b72cd9fec0c7be6a4a97727a")},r)},e);return fetch("".concat("http://ec2-18-117-174-22.us-east-2.compute.amazonaws.com:8003","/").concat(t),o).then((function(t){if(t.status>=400)throw t;return t.json()}))};e.Z={_get_:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n={method:"GET"},r=new URLSearchParams(e).toString(),o=r?"".concat(t,"?").concat(r):t;return c(o,n)},_post_:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n={method:"POST",body:JSON.stringify(e)};return c(t,n)},_put_:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n={method:"PUT",body:JSON.stringify(e)};return c(t,n)},_delete_:function(t){return c(t,{method:"DELETE"})}}},9835:function(t,e,n){var r=n(7603),o="usuarios";e.Z={associateCategories:function(t){var e="".concat(o,"/categorias");return r.Z._post_(e,t)},createPJ:function(t){var e="".concat(o,"/pj");return r.Z._post_(e,t)},getData:function(){var t="".concat(o,"/me");return r.Z._get_(t)},loginPF:function(t){var e="".concat(o,"/login/pf");return r.Z._post_(e,t)},loginPJ:function(t){var e="".concat(o,"/login/pj");return r.Z._post_(e,t)},sendEmailRecovery:function(t){var e="".concat(o,"/pj/recuperar_senha");return r.Z._post_(e,t)},updatePassword:function(t){var e="".concat(o,"/pj/alterar_senha_temp");return r.Z._post_(e,t)}}},9585:function(t,e,n){n.d(e,{Z:function(){return a}});var r=n(6489);function o(t,e){void 0===e&&(e={});var n=function(t){if(t&&"j"===t[0]&&":"===t[1])return t.substr(2);return t}(t);if(function(t,e){return"undefined"===typeof e&&(e=!t||"{"!==t[0]&&"["!==t[0]&&'"'!==t[0]),!e}(n,e.doNotParse))try{return JSON.parse(n)}catch(r){}return t}var i=function(){return(i=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},a=function(){function t(t,e){var n=this;this.changeListeners=[],this.HAS_DOCUMENT_COOKIE=!1,this.cookies=function(t,e){return"string"===typeof t?r.Q(t,e):"object"===typeof t&&null!==t?t:{}}(t,e),new Promise((function(){n.HAS_DOCUMENT_COOKIE="object"===typeof document&&"string"===typeof document.cookie})).catch((function(){}))}return t.prototype._updateBrowserValues=function(t){this.HAS_DOCUMENT_COOKIE&&(this.cookies=r.Q(document.cookie,t))},t.prototype._emitChange=function(t){for(var e=0;e<this.changeListeners.length;++e)this.changeListeners[e](t)},t.prototype.get=function(t,e,n){return void 0===e&&(e={}),this._updateBrowserValues(n),o(this.cookies[t],e)},t.prototype.getAll=function(t,e){void 0===t&&(t={}),this._updateBrowserValues(e);var n={};for(var r in this.cookies)n[r]=o(this.cookies[r],t);return n},t.prototype.set=function(t,e,n){var o;"object"===typeof e&&(e=JSON.stringify(e)),this.cookies=i(i({},this.cookies),((o={})[t]=e,o)),this.HAS_DOCUMENT_COOKIE&&(document.cookie=r.q(t,e,n)),this._emitChange({name:t,value:e,options:n})},t.prototype.remove=function(t,e){var n=e=i(i({},e),{expires:new Date(1970,1,1,0,0,1),maxAge:0});this.cookies=i({},this.cookies),delete this.cookies[t],this.HAS_DOCUMENT_COOKIE&&(document.cookie=r.q(t,"",n)),this._emitChange({name:t,value:void 0,options:e})},t.prototype.addChangeListener=function(t){this.changeListeners.push(t)},t.prototype.removeChangeListener=function(t){var e=this.changeListeners.indexOf(t);e>=0&&this.changeListeners.splice(e,1)},t}()},6586:function(t,e,n){function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}n.d(e,{Z:function(){return r}})},266:function(t,e,n){function r(t,e,n,r,o,i,a){try{var c=t[i](a),u=c.value}catch(s){return void n(s)}c.done?e(u):Promise.resolve(u).then(r,o)}function o(t){return function(){var e=this,n=arguments;return new Promise((function(o,i){var a=t.apply(e,n);function c(t){r(a,o,i,c,u,"next",t)}function u(t){r(a,o,i,c,u,"throw",t)}c(void 0)}))}}n.d(e,{Z:function(){return o}})},318:function(t,e,n){n.d(e,{Z:function(){return o}});var r=n(6988);function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i=[],a=!0,c=!1;try{for(n=n.call(t);!(a=(r=n.next()).done)&&(i.push(r.value),!e||i.length!==e);a=!0);}catch(u){c=!0,o=u}finally{try{a||null==n.return||n.return()}finally{if(c)throw o}}return i}}(t,e)||(0,r.Z)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},3789:function(t,e,n){n.d(e,{Z:function(){return i}});var r=n(6586);var o=n(6988);function i(t){return function(t){if(Array.isArray(t))return(0,r.Z)(t)}(t)||function(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||(0,o.Z)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},6988:function(t,e,n){n.d(e,{Z:function(){return o}});var r=n(6586);function o(t,e){if(t){if("string"===typeof t)return(0,r.Z)(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?(0,r.Z)(t,e):void 0}}}}]);