!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.singleSource=e():t.singleSource=e()}(this,function(){return function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="./",e(e.s=41)}([function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e){var n=t.exports={version:"2.5.4"};"number"==typeof __e&&(__e=n)},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e,n){var r=n(4),o=n(14);t.exports=n(5)?function(t,e,n){return r.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){var r=n(13),o=n(32),i=n(18),u=Object.defineProperty;e.f=n(5)?Object.defineProperty:function(t,e,n){if(r(t),e=i(e,!0),r(n),o)try{return u(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){t.exports=!n(6)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e,n){var r=n(35),o=n(19);t.exports=function(t){return r(o(t))}},function(t,e,n){var r=n(22)("wks"),o=n(15),i=n(0).Symbol,u="function"==typeof i;(t.exports=function(t){return r[t]||(r[t]=u&&i[t]||(u?i:o)("Symbol."+t))}).store=r},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,n){var r=n(34),o=n(23);t.exports=Object.keys||function(t){return r(t,o)}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.deepEqual=e.deepCopy=void 0;var r=n(82),o=function(t){return t&&t.__esModule?t:{default:t}}(r),i=e.deepCopy=function(t){return JSON.parse((0,o.default)(t))},u=e.deepEqual=function(t,e){return(0,o.default)(t)===(0,o.default)(e)};!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(i,"deepCopy","/Users/christian/Desktop/PROJECTS/single-source/src/components/deep.js"),__REACT_HOT_LOADER__.register(u,"deepEqual","/Users/christian/Desktop/PROJECTS/single-source/src/components/deep.js"))}()},function(t,e,n){var r=n(0),o=n(1),i=n(48),u=n(3),c=n(2),f=function(t,e,n){var s,a,p,l=t&f.F,d=t&f.G,y=t&f.S,_=t&f.P,v=t&f.B,b=t&f.W,h=d?o:o[e]||(o[e]={}),O=h.prototype,g=d?r:y?r[e]:(r[e]||{}).prototype;d&&(n=e);for(s in n)(a=!l&&g&&void 0!==g[s])&&c(h,s)||(p=a?g[s]:n[s],h[s]=d&&"function"!=typeof g[s]?n[s]:v&&a?i(p,r):b&&g[s]==p?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e.prototype=t.prototype,e}(p):_&&"function"==typeof p?i(Function.call,p):p,_&&((h.virtual||(h.virtual={}))[s]=p,t&f.R&&O&&!O[s]&&u(O,s,p)))};f.F=1,f.G=2,f.S=4,f.P=8,f.B=16,f.W=32,f.U=64,f.R=128,t.exports=f},function(t,e,n){var r=n(9);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},function(t,e){e.f={}.propertyIsEnumerable},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var o=n(59),i=r(o),u=n(71),c=r(u),f="function"==typeof c.default&&"symbol"==typeof i.default?function(t){return typeof t}:function(t){return t&&"function"==typeof c.default&&t.constructor===c.default&&t!==c.default.prototype?"symbol":typeof t};e.default="function"==typeof c.default&&"symbol"===f(i.default)?function(t){return void 0===t?"undefined":f(t)}:function(t){return t&&"function"==typeof c.default&&t.constructor===c.default&&t!==c.default.prototype?"symbol":void 0===t?"undefined":f(t)}},function(t,e,n){var r=n(9);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e,n){var r=n(22)("keys"),o=n(15);t.exports=function(t){return r[t]||(r[t]=o(t))}},function(t,e,n){var r=n(0),o=r["__core-js_shared__"]||(r["__core-js_shared__"]={});t.exports=function(t){return o[t]||(o[t]={})}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e,n){var r=n(19);t.exports=function(t){return Object(r(t))}},function(t,e){t.exports=!0},function(t,e){t.exports={}},function(t,e,n){var r=n(4).f,o=n(2),i=n(8)("toStringTag");t.exports=function(t,e,n){t&&!o(t=n?t:t.prototype,i)&&r(t,i,{configurable:!0,value:e})}},function(t,e,n){e.f=n(8)},function(t,e,n){var r=n(0),o=n(1),i=n(26),u=n(29),c=n(4).f;t.exports=function(t){var e=o.Symbol||(o.Symbol=i?{}:r.Symbol||{});"_"==t.charAt(0)||t in e||c(e,t,{value:u.f(t)})}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.dotPropSet=e.dotPropGet=void 0;var r=n(17),o=function(t){return t&&t.__esModule?t:{default:t}}(r),i=n(11),u=e.dotPropGet=function(t,e){if("object"!==(void 0===t?"undefined":(0,o.default)(t))||"string"!=typeof e)return t;if(e.match(".")){var n=e.split("."),r=(0,i.deepCopy)(t);return n.reduce(function(t,e){if(t[e])return t[e]},r)}return(0,i.deepCopy)(t)},c=e.dotPropSet=function(t,e,n){if("object"!==(void 0===t?"undefined":(0,o.default)(t))||"string"!=typeof e)return t;var r=e.split("."),u=(0,i.deepCopy)(t),c=r.length-1,f=u;return r.forEach(function(t,e){u[t]+"  "!="[object Object]"&&(u[t]={}),e===c&&(u[t]=n),u=u[t]}),f};!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(u,"dotPropGet","/Users/christian/Desktop/PROJECTS/single-source/src/components/dot-prop.js"),__REACT_HOT_LOADER__.register(c,"dotPropSet","/Users/christian/Desktop/PROJECTS/single-source/src/components/dot-prop.js"))}()},function(t,e,n){t.exports=!n(5)&&!n(6)(function(){return 7!=Object.defineProperty(n(33)("div"),"a",{get:function(){return 7}}).a})},function(t,e,n){var r=n(9),o=n(0).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,e,n){var r=n(2),o=n(7),i=n(51)(!1),u=n(21)("IE_PROTO");t.exports=function(t,e){var n,c=o(t),f=0,s=[];for(n in c)n!=u&&r(c,n)&&s.push(n);for(;e.length>f;)r(c,n=e[f++])&&(~i(s,n)||s.push(n));return s}},function(t,e,n){var r=n(36);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){"use strict";var r=n(26),o=n(12),i=n(38),u=n(3),c=n(27),f=n(63),s=n(28),a=n(66),p=n(8)("iterator"),l=!([].keys&&"next"in[].keys()),d=function(){return this};t.exports=function(t,e,n,y,_,v,b){f(n,e,y);var h,O,g,S=function(t){if(!l&&t in j)return j[t];switch(t){case"keys":case"values":return function(){return new n(this,t)}}return function(){return new n(this,t)}},m=e+" Iterator",E="values"==_,x=!1,j=t.prototype,T=j[p]||j["@@iterator"]||_&&j[_],P=T||S(_),C=_?E?S("entries"):P:void 0,R="Array"==e?j.entries||T:T;if(R&&(g=a(R.call(new t)))!==Object.prototype&&g.next&&(s(g,m,!0),r||"function"==typeof g[p]||u(g,p,d)),E&&T&&"values"!==T.name&&(x=!0,P=function(){return T.call(this)}),r&&!b||!l&&!x&&j[p]||u(j,p,P),c[e]=P,c[m]=d,_)if(h={values:E?P:S("values"),keys:v?P:S("keys"),entries:C},b)for(O in h)O in j||i(j,O,h[O]);else o(o.P+o.F*(l||x),e,h);return h}},function(t,e,n){t.exports=n(3)},function(t,e,n){var r=n(13),o=n(64),i=n(23),u=n(21)("IE_PROTO"),c=function(){},f=function(){var t,e=n(33)("iframe"),r=i.length;for(e.style.display="none",n(65).appendChild(e),e.src="javascript:",t=e.contentWindow.document,t.open(),t.write("<script>document.F=Object<\/script>"),t.close(),f=t.F;r--;)delete f.prototype[i[r]];return f()};t.exports=Object.create||function(t,e){var n;return null!==t?(c.prototype=r(t),n=new c,c.prototype=null,n[u]=t):n=f(),void 0===e?n:o(n,e)}},function(t,e,n){var r=n(34),o=n(23).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,e,n){t.exports=n(42)},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.makeReactConnect=e.createStore=void 0;var r=n(43),o=n(58);e.createStore=o.createStore,e.makeReactConnect=r.makeReactConnect},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.makeReactConnect=void 0;var o=n(44),i=r(o),u=n(54),c=r(u),f=function(t){return!!t.match(/^16\.3/)},s=function(t,e){var n=(0,c.default)(e),r={};return n.forEach(function(n){r[n]=t.getState(e[n])}),r},a=e.makeReactConnect=function(t,e,n){return function(r){var o=function(o){var u=(0,i.default)({},t.Component.prototype,{props:o,state:o}),a={state:s(e,n)};return(0,c.default)(n).forEach(function(t){var r=n[t];e.subscribe(r,function(e){a.state[t]=e,u.forceUpdate()})}),f(t.version)||(u.componentWillReceiveProps=function(t){return u.setState(t)}),u.render=function(){var e=u.state,n=u.props.children,o=(0,i.default)({},e,a.state);return t.createElement(r,o,n)},u};return f(t.version)&&(o.getDerivedStateFromProps=function(t){return t}),o}};!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(f,"isReact163","/Users/christian/Desktop/PROJECTS/single-source/src/make-react-connect.js"),__REACT_HOT_LOADER__.register(s,"createObjectFromStore","/Users/christian/Desktop/PROJECTS/single-source/src/make-react-connect.js"),__REACT_HOT_LOADER__.register(a,"makeReactConnect","/Users/christian/Desktop/PROJECTS/single-source/src/make-react-connect.js"))}()},function(t,e,n){"use strict";e.__esModule=!0;var r=n(45),o=function(t){return t&&t.__esModule?t:{default:t}}(r);e.default=o.default||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}},function(t,e,n){t.exports={default:n(46),__esModule:!0}},function(t,e,n){n(47),t.exports=n(1).Object.assign},function(t,e,n){var r=n(12);r(r.S+r.F,"Object",{assign:n(50)})},function(t,e,n){var r=n(49);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,n){"use strict";var r=n(10),o=n(24),i=n(16),u=n(25),c=n(35),f=Object.assign;t.exports=!f||n(6)(function(){var t={},e={},n=Symbol(),r="abcdefghijklmnopqrst";return t[n]=7,r.split("").forEach(function(t){e[t]=t}),7!=f({},t)[n]||Object.keys(f({},e)).join("")!=r})?function(t,e){for(var n=u(t),f=arguments.length,s=1,a=o.f,p=i.f;f>s;)for(var l,d=c(arguments[s++]),y=a?r(d).concat(a(d)):r(d),_=y.length,v=0;_>v;)p.call(d,l=y[v++])&&(n[l]=d[l]);return n}:f},function(t,e,n){var r=n(7),o=n(52),i=n(53);t.exports=function(t){return function(e,n,u){var c,f=r(e),s=o(f.length),a=i(u,s);if(t&&n!=n){for(;s>a;)if((c=f[a++])!=c)return!0}else for(;s>a;a++)if((t||a in f)&&f[a]===n)return t||a||0;return!t&&-1}}},function(t,e,n){var r=n(20),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,e,n){var r=n(20),o=Math.max,i=Math.min;t.exports=function(t,e){return t=r(t),t<0?o(t+e,0):i(t,e)}},function(t,e,n){t.exports={default:n(55),__esModule:!0}},function(t,e,n){n(56),t.exports=n(1).Object.keys},function(t,e,n){var r=n(25),o=n(10);n(57)("keys",function(){return function(t){return o(r(t))}})},function(t,e,n){var r=n(12),o=n(1),i=n(6);t.exports=function(t,e){var n=(o.Object||{})[t]||Object[t],u={};u[t]=e(n),r(r.S+r.F*i(function(){n(1)}),"Object",u)}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.createStore=void 0;var r=n(17),o=function(t){return t&&t.__esModule?t:{default:t}}(r),i=n(11),u=n(84),c=n(31),f=n(85),s=n(86),a=e.createStore=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e={state:(0,i.deepCopy)(t),subscriptionCollection:[]},n=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";if("string"!=typeof t||""===t)return(0,i.deepCopy)(e.state);var n=(0,c.dotPropGet)(e.state,t),r=void 0===n?"undefined":(0,o.default)(n);return"object"===r?(0,i.deepCopy)(n):"undefined"!==r?n:void 0};return{dispatch:function(t){var n=(0,i.deepCopy)(e.state),r=(0,u.extendStateObj)(e.state,t);if(!(0,i.deepEqual)(n,r)){e.state=r;var o=(0,f.filterSubscriptions)(e.subscriptionCollection,n,r);0!==o.length&&o.forEach(function(t){var n=(0,c.dotPropGet)(e.state,t.path);t.callback(n)})}},subscribe:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments[1],r=Date.now();return e.subscriptionCollection.push({path:t,callback:n,id:r}),{id:r}},unsubscribe:function(t){e.subscriptionCollection=(0,s.unsubscribe)(e.subscriptionCollection,t)},getState:n}};!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&__REACT_HOT_LOADER__.register(a,"createStore","/Users/christian/Desktop/PROJECTS/single-source/src/create-store.js")}()},function(t,e,n){t.exports={default:n(60),__esModule:!0}},function(t,e,n){n(61),n(67),t.exports=n(29).f("iterator")},function(t,e,n){"use strict";var r=n(62)(!0);n(37)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=r(e,n),this._i+=t.length,{value:t,done:!1})})},function(t,e,n){var r=n(20),o=n(19);t.exports=function(t){return function(e,n){var i,u,c=String(o(e)),f=r(n),s=c.length;return f<0||f>=s?t?"":void 0:(i=c.charCodeAt(f),i<55296||i>56319||f+1===s||(u=c.charCodeAt(f+1))<56320||u>57343?t?c.charAt(f):i:t?c.slice(f,f+2):u-56320+(i-55296<<10)+65536)}}},function(t,e,n){"use strict";var r=n(39),o=n(14),i=n(28),u={};n(3)(u,n(8)("iterator"),function(){return this}),t.exports=function(t,e,n){t.prototype=r(u,{next:o(1,n)}),i(t,e+" Iterator")}},function(t,e,n){var r=n(4),o=n(13),i=n(10);t.exports=n(5)?Object.defineProperties:function(t,e){o(t);for(var n,u=i(e),c=u.length,f=0;c>f;)r.f(t,n=u[f++],e[n]);return t}},function(t,e,n){var r=n(0).document;t.exports=r&&r.documentElement},function(t,e,n){var r=n(2),o=n(25),i=n(21)("IE_PROTO"),u=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?u:null}},function(t,e,n){n(68);for(var r=n(0),o=n(3),i=n(27),u=n(8)("toStringTag"),c="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),f=0;f<c.length;f++){var s=c[f],a=r[s],p=a&&a.prototype;p&&!p[u]&&o(p,u,s),i[s]=i.Array}},function(t,e,n){"use strict";var r=n(69),o=n(70),i=n(27),u=n(7);t.exports=n(37)(Array,"Array",function(t,e){this._t=u(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,o(1)):"keys"==e?o(0,n):"values"==e?o(0,t[n]):o(0,[n,t[n]])},"values"),i.Arguments=i.Array,r("keys"),r("values"),r("entries")},function(t,e){t.exports=function(){}},function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},function(t,e,n){t.exports={default:n(72),__esModule:!0}},function(t,e,n){n(73),n(79),n(80),n(81),t.exports=n(1).Symbol},function(t,e,n){"use strict";var r=n(0),o=n(2),i=n(5),u=n(12),c=n(38),f=n(74).KEY,s=n(6),a=n(22),p=n(28),l=n(15),d=n(8),y=n(29),_=n(30),v=n(75),b=n(76),h=n(13),O=n(9),g=n(7),S=n(18),m=n(14),E=n(39),x=n(77),j=n(78),T=n(4),P=n(10),C=j.f,R=T.f,A=x.f,w=r.Symbol,L=r.JSON,M=L&&L.stringify,k=d("_hidden"),D=d("toPrimitive"),H={}.propertyIsEnumerable,F=a("symbol-registry"),N=a("symbols"),J=a("op-symbols"),G=Object.prototype,I="function"==typeof w,U=r.QObject,q=!U||!U.prototype||!U.prototype.findChild,V=i&&s(function(){return 7!=E(R({},"a",{get:function(){return R(this,"a",{value:7}).a}})).a})?function(t,e,n){var r=C(G,e);r&&delete G[e],R(t,e,n),r&&t!==G&&R(G,e,r)}:R,W=function(t){var e=N[t]=E(w.prototype);return e._k=t,e},B=I&&"symbol"==typeof w.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof w},K=function(t,e,n){return t===G&&K(J,e,n),h(t),e=S(e,!0),h(n),o(N,e)?(n.enumerable?(o(t,k)&&t[k][e]&&(t[k][e]=!1),n=E(n,{enumerable:m(0,!1)})):(o(t,k)||R(t,k,m(1,{})),t[k][e]=!0),V(t,e,n)):R(t,e,n)},z=function(t,e){h(t);for(var n,r=v(e=g(e)),o=0,i=r.length;i>o;)K(t,n=r[o++],e[n]);return t},Y=function(t,e){return void 0===e?E(t):z(E(t),e)},Q=function(t){var e=H.call(this,t=S(t,!0));return!(this===G&&o(N,t)&&!o(J,t))&&(!(e||!o(this,t)||!o(N,t)||o(this,k)&&this[k][t])||e)},X=function(t,e){if(t=g(t),e=S(e,!0),t!==G||!o(N,e)||o(J,e)){var n=C(t,e);return!n||!o(N,e)||o(t,k)&&t[k][e]||(n.enumerable=!0),n}},Z=function(t){for(var e,n=A(g(t)),r=[],i=0;n.length>i;)o(N,e=n[i++])||e==k||e==f||r.push(e);return r},$=function(t){for(var e,n=t===G,r=A(n?J:g(t)),i=[],u=0;r.length>u;)!o(N,e=r[u++])||n&&!o(G,e)||i.push(N[e]);return i};I||(w=function(){if(this instanceof w)throw TypeError("Symbol is not a constructor!");var t=l(arguments.length>0?arguments[0]:void 0),e=function(n){this===G&&e.call(J,n),o(this,k)&&o(this[k],t)&&(this[k][t]=!1),V(this,t,m(1,n))};return i&&q&&V(G,t,{configurable:!0,set:e}),W(t)},c(w.prototype,"toString",function(){return this._k}),j.f=X,T.f=K,n(40).f=x.f=Z,n(16).f=Q,n(24).f=$,i&&!n(26)&&c(G,"propertyIsEnumerable",Q,!0),y.f=function(t){return W(d(t))}),u(u.G+u.W+u.F*!I,{Symbol:w});for(var tt="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),et=0;tt.length>et;)d(tt[et++]);for(var nt=P(d.store),rt=0;nt.length>rt;)_(nt[rt++]);u(u.S+u.F*!I,"Symbol",{for:function(t){return o(F,t+="")?F[t]:F[t]=w(t)},keyFor:function(t){if(!B(t))throw TypeError(t+" is not a symbol!");for(var e in F)if(F[e]===t)return e},useSetter:function(){q=!0},useSimple:function(){q=!1}}),u(u.S+u.F*!I,"Object",{create:Y,defineProperty:K,defineProperties:z,getOwnPropertyDescriptor:X,getOwnPropertyNames:Z,getOwnPropertySymbols:$}),L&&u(u.S+u.F*(!I||s(function(){var t=w();return"[null]"!=M([t])||"{}"!=M({a:t})||"{}"!=M(Object(t))})),"JSON",{stringify:function(t){for(var e,n,r=[t],o=1;arguments.length>o;)r.push(arguments[o++]);if(n=e=r[1],(O(e)||void 0!==t)&&!B(t))return b(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!B(e))return e}),r[1]=e,M.apply(L,r)}}),w.prototype[D]||n(3)(w.prototype,D,w.prototype.valueOf),p(w,"Symbol"),p(Math,"Math",!0),p(r.JSON,"JSON",!0)},function(t,e,n){var r=n(15)("meta"),o=n(9),i=n(2),u=n(4).f,c=0,f=Object.isExtensible||function(){return!0},s=!n(6)(function(){return f(Object.preventExtensions({}))}),a=function(t){u(t,r,{value:{i:"O"+ ++c,w:{}}})},p=function(t,e){if(!o(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!i(t,r)){if(!f(t))return"F";if(!e)return"E";a(t)}return t[r].i},l=function(t,e){if(!i(t,r)){if(!f(t))return!0;if(!e)return!1;a(t)}return t[r].w},d=function(t){return s&&y.NEED&&f(t)&&!i(t,r)&&a(t),t},y=t.exports={KEY:r,NEED:!1,fastKey:p,getWeak:l,onFreeze:d}},function(t,e,n){var r=n(10),o=n(24),i=n(16);t.exports=function(t){var e=r(t),n=o.f;if(n)for(var u,c=n(t),f=i.f,s=0;c.length>s;)f.call(t,u=c[s++])&&e.push(u);return e}},function(t,e,n){var r=n(36);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,e,n){var r=n(7),o=n(40).f,i={}.toString,u="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],c=function(t){try{return o(t)}catch(t){return u.slice()}};t.exports.f=function(t){return u&&"[object Window]"==i.call(t)?c(t):o(r(t))}},function(t,e,n){var r=n(16),o=n(14),i=n(7),u=n(18),c=n(2),f=n(32),s=Object.getOwnPropertyDescriptor;e.f=n(5)?s:function(t,e){if(t=i(t),e=u(e,!0),f)try{return s(t,e)}catch(t){}if(c(t,e))return o(!r.f.call(t,e),t[e])}},function(t,e){},function(t,e,n){n(30)("asyncIterator")},function(t,e,n){n(30)("observable")},function(t,e,n){t.exports={default:n(83),__esModule:!0}},function(t,e,n){var r=n(1),o=r.JSON||(r.JSON={stringify:JSON.stringify});t.exports=function(t){return o.stringify.apply(o,arguments)}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.extendStateObj=void 0;var r=n(11),o=n(31),i=e.extendStateObj=function(t,e){if(void 0!==t&&void 0!==e&&"string"==typeof e.path&&void 0!==e.payload){var n=e.path.replace(/\s/g,""),i=(0,r.deepCopy)(t),u="function"==typeof e.payload?e.payload((0,o.dotPropGet)(i,n)):e.payload;return""===n?u:(0,o.dotPropSet)(i,e.path,u)}};!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&__REACT_HOT_LOADER__.register(i,"extendStateObj","/Users/christian/Desktop/PROJECTS/single-source/src/components/extend-state-obj.js")}()},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.filterSubscriptions=void 0;var r=n(17),o=function(t){return t&&t.__esModule?t:{default:t}}(r),i=n(11),u=n(31),c=e.filterSubscriptions=function(t,e,n){return!Array.isArray(t)||t.length<=0||"object"!==(void 0===e?"undefined":(0,o.default)(e))||"object"!==(void 0===n?"undefined":(0,o.default)(n))||(0,i.deepEqual)(e,n)?[]:t.filter(function(t){var r=t.path,o=(0,u.dotPropGet)(e,r),c=(0,u.dotPropGet)(n,r);return!(0,i.deepEqual)(o,c)})};!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&__REACT_HOT_LOADER__.register(c,"filterSubscriptions","/Users/christian/Desktop/PROJECTS/single-source/src/components/filter-subscriptions.js")}()},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.unsubscribe=void 0;var r=n(17),o=function(t){return t&&t.__esModule?t:{default:t}}(r),i=n(11),u=e.unsubscribe=function(t,e){return Array.isArray(t)&&0!==t.length?"object"!==(void 0===e?"undefined":(0,o.default)(e))||"number"!=typeof e.id?(0,i.deepCopy)(t):t.filter(function(t){return t.id!==e.id}):[]};!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&__REACT_HOT_LOADER__.register(u,"unsubscribe","/Users/christian/Desktop/PROJECTS/single-source/src/components/unsubscribe.js")}()}])});