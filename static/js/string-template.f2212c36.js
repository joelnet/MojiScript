(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{"./string/template.mdx":function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return u});var r=t("./node_modules/react/index.js"),o=t.n(r),a=t("./node_modules/@mdx-js/tag/dist/index.js");function p(e){return(p="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function i(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,n){return!n||"object"!==p(n)&&"function"!==typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,n){return(m=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}var u=function(e){function n(e){var t;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),(t=l(this,s(n).call(this,e))).layout=null,t}var t,r,p;return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&m(e,n)}(n,o.a.Component),t=n,(r=[{key:"render",value:function(){var e=this.props,n=e.components;c(e,["components"]);return o.a.createElement(a.MDXTag,{name:"wrapper",components:n},o.a.createElement(a.MDXTag,{name:"h1",components:n,props:{id:"stringtemplate"}},"string/template"),o.a.createElement(a.MDXTag,{name:"p",components:n},o.a.createElement(a.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"template :: Template -> Function -> String")),o.a.createElement(a.MDXTag,{name:"p",components:n},"Creates a template function that returns a ",o.a.createElement(a.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"String"),"."),o.a.createElement(a.MDXTag,{name:"h2",components:n,props:{id:"example"}},"Example"),o.a.createElement(a.MDXTag,{name:"pre",components:n},o.a.createElement(a.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-javascript"}},"import { log, pipe, run, replace, $ } from 'mojiscript'\n\nconst state = { first: 'Luke', last: 'Skywalker' }\n\nconst nameTemplate = $`${'first'} ${'last'}`\n\nconst main = pipe ([\n  nameTemplate,\n  log\n])\n\nrun ({ state, main })\n// => \"Luke Skywalker\"\n")),o.a.createElement(a.MDXTag,{name:"h2",components:n,props:{id:"returns"}},"Returns"),o.a.createElement(a.MDXTag,{name:"p",components:n},"Formatted string."))}}])&&i(t.prototype,r),p&&i(t,p),n}();u.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}}}]);
//# sourceMappingURL=string-template.6317776c01d3a34764d4.js.map