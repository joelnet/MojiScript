(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"./list/flatMap.mdx":function(e,n,a){"use strict";a.r(n),a.d(n,"default",function(){return u});var t=a("./node_modules/react/index.js"),o=a.n(t),r=a("./node_modules/@mdx-js/tag/dist/index.js");function m(e){return(m="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,n){if(null==e)return{};var a,t,o=function(e,n){if(null==e)return{};var a,t,o={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(o[a]=e[a]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}function c(e,n){for(var a=0;a<n.length;a++){var t=n[a];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function l(e,n){return!n||"object"!==m(n)&&"function"!==typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function i(e,n){return(i=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}var u=function(e){function n(e){var a;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),(a=l(this,s(n).call(this,e))).layout=null,a}var a,t,m;return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&i(e,n)}(n,o.a.Component),a=n,(t=[{key:"render",value:function(){var e=this.props,n=e.components;p(e,["components"]);return o.a.createElement(r.MDXTag,{name:"wrapper",components:n},o.a.createElement(r.MDXTag,{name:"h1",components:n,props:{id:"listflatmap"}},"list/flatMap"),o.a.createElement(r.MDXTag,{name:"p",components:n},o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"flatMap :: Function -> FlatMapable -> Any")),o.a.createElement(r.MDXTag,{name:"p",components:n},"Takes a function and a ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"FlatMapable")," and returns an ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"Object"),"."),o.a.createElement(r.MDXTag,{name:"p",components:n},"A ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"FlatMapable")," could be an ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"Array"),", an ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"Iterator"),", or ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"async Iterator"),", or an object that implements 'flatMap'."),o.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"array-example"}},"Array Example"),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-javascript"}},"import { flatMap } from 'mojiscript'\n\nconst andTimesTen = num => [ num, num * 10 ]\nconst array = [ 1, 2, 3 ]\n\nflatMap (andTimesTen) (array) //=> [ 1, 10, 2, 20, 3, 30 ]\n")),o.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"iterator-example"}},"Iterator Example"),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-javascript"}},"import { map, range } from 'mojiscript'\n\nconst andTimesTen = num => [ num, num * 10 ]\nconst array = [ 1, 2, 3 ]\n\nflatMap (andTimesTen) (range (1) (4)) //=> [ 1, 10, 2, 20, 3, 30 ]\n")),o.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"async-example"}},"Async Example"),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-javascript"}},"import { flatMap, pipe, sleep } from 'mojiscript'\n\nconst andTimesTen = num => [ num, num * 10 ]\nconst asyncAndTimesTen = pipe ([\n  sleep (1000), // <-- async function!\n  andTimesTen\n])\nconst array = [ 1, 2, 3 ]\n\nflatMap (asyncAndTimesTen) (array) //=> Promise ([ 1, 10, 2, 20, 3, 30 ]\u200b\u200b\u200b\u200b\u200b)\n")),o.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"parameters"}},"Parameters"),o.a.createElement(r.MDXTag,{name:"table",components:n},o.a.createElement(r.MDXTag,{name:"thead",components:n,parentName:"table"},o.a.createElement(r.MDXTag,{name:"tr",components:n,parentName:"thead"},o.a.createElement(r.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Name"),o.a.createElement(r.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Type"),o.a.createElement(r.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Description"))),o.a.createElement(r.MDXTag,{name:"tbody",components:n,parentName:"table"},o.a.createElement(r.MDXTag,{name:"tr",components:n,parentName:"tbody"},o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"function"),o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"Function")),o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"Function to apply to each item in the ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"Iterable"),".")),o.a.createElement(r.MDXTag,{name:"tr",components:n,parentName:"tbody"},o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"mappable"),o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"FlatMapable")),o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"FlatMapable")," to apply the function to.")))),o.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"returns"}},"Returns"),o.a.createElement(r.MDXTag,{name:"p",components:n},"Returns an ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"Object")," with the function applied to the ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"FlatMapable"),"."))}}])&&c(a.prototype,t),m&&c(a,m),n}();u.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}}}]);
//# sourceMappingURL=list-flat-map.6317776c01d3a34764d4.js.map