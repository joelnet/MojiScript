(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{"./list/range.mdx":function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return u});var a=t("./node_modules/react/index.js"),r=t.n(a),o=t("./node_modules/@mdx-js/tag/dist/index.js");function m(e){return(m="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}function c(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function l(e,n){return!n||"object"!==m(n)&&"function"!==typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,n){return(s=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}var u=function(e){function n(e){var t;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),(t=l(this,i(n).call(this,e))).layout=null,t}var t,a,m;return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&s(e,n)}(n,r.a.Component),t=n,(a=[{key:"render",value:function(){var e=this.props,n=e.components;p(e,["components"]);return r.a.createElement(o.MDXTag,{name:"wrapper",components:n},r.a.createElement(o.MDXTag,{name:"h1",components:n,props:{id:"listrange"}},"list/range"),r.a.createElement(o.MDXTag,{name:"p",components:n},r.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"range :: Number -> Number -> Iterable")),r.a.createElement(o.MDXTag,{name:"p",components:n},"Creates an ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"Iterable")," from ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"start")," up to but not including the ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"end"),"."),r.a.createElement(o.MDXTag,{name:"h2",components:n,props:{id:"example"}},"Example"),r.a.createElement(o.MDXTag,{name:"pre",components:n},r.a.createElement(o.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-javascript"}},"import { log, pipe, run, map, range } from 'mojiscript'\n\nconst main = pipe ([\n  range (0) (5),\n  map (log)\n])\n\nrun ({ main })\n//=> [ 0, 1, 2, 3, 4 ]\n")),r.a.createElement(o.MDXTag,{name:"h2",components:n,props:{id:"parameters"}},"Parameters"),r.a.createElement(o.MDXTag,{name:"table",components:n},r.a.createElement(o.MDXTag,{name:"thead",components:n,parentName:"table"},r.a.createElement(o.MDXTag,{name:"tr",components:n,parentName:"thead"},r.a.createElement(o.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Name"),r.a.createElement(o.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Type"),r.a.createElement(o.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Description"))),r.a.createElement(o.MDXTag,{name:"tbody",components:n,parentName:"table"},r.a.createElement(o.MDXTag,{name:"tr",components:n,parentName:"tbody"},r.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"start"),r.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},r.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"Number")),r.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"Start ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"Number")," of the range.")),r.a.createElement(o.MDXTag,{name:"tr",components:n,parentName:"tbody"},r.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"end"),r.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},r.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"Number")),r.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"End ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"Number")," to increment up to (but not including)")))),r.a.createElement(o.MDXTag,{name:"h2",components:n,props:{id:"returns"}},"Returns"),r.a.createElement(o.MDXTag,{name:"p",components:n},"Returns an ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"Iterable")," starting at ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"start")," and counting up to (but not including) ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"end"),"."))}}])&&c(t.prototype,a),m&&c(t,m),n}();u.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}}}]);
//# sourceMappingURL=list-range.6317776c01d3a34764d4.js.map