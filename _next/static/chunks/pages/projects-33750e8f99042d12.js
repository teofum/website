(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[327],{4184:function(e,n){var t;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],n=0;n<arguments.length;n++){var t=arguments[n];if(t){var a=typeof t;if("string"===a||"number"===a)e.push(t);else if(Array.isArray(t)){if(t.length){var l=o.apply(null,t);l&&e.push(l)}}else if("object"===a)if(t.toString===Object.prototype.toString)for(var i in t)r.call(t,i)&&t[i]&&e.push(i);else e.push(t.toString())}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(t=function(){return o}.apply(n,[]))||(e.exports=t)}()},4478:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects",function(){return t(9240)}])},5755:function(e,n,t){"use strict";t.d(n,{me:function(){return x},ZP:function(){return b},he:function(){return y}});var r=t(5893),o=t(7294),a=t(4184),l=t.n(a),i=t(5656),s=t(867),c=t.n(s);var u=function(e){var n,t,o,a=e.toggled;return(0,r.jsxs)("div",{className:l()(c().expandToggle,(n={},t=c().toggled,o=a,t in n?Object.defineProperty(n,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[t]=o,n)),children:[(0,r.jsx)("span",{style:{"--n":-1}}),(0,r.jsx)("span",{style:{"--n":0}}),(0,r.jsx)("span",{style:{"--n":1}})]})},f=t(2729),d=t.n(f);var g=function(e){var n,t,o,a=e.toggled;return(0,r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",width:"1em",height:"1em",className:l()(d().themeToggle,(n={},t=d().toggled,o=a,t in n?Object.defineProperty(n,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[t]=o,n)),fill:"currentColor",viewBox:"0 0 32 32",children:[(0,r.jsx)("clipPath",{id:"theme-toggle__within__clip",children:(0,r.jsx)("path",{d:"M0 0h32v32h-32ZM6 16A1 1 0 0026 16 1 1 0 006 16"})}),(0,r.jsx)("g",{clipPath:"url(#theme-toggle__within__clip)",children:(0,r.jsx)("path",{d:"M30.7 21.3 27.1 16l3.7-5.3c.4-.5.1-1.3-.6-1.4l-6.3-1.1-1.1-6.3c-.1-.6-.8-.9-1.4-.6L16 5l-5.4-3.7c-.5-.4-1.3-.1-1.4.6l-1 6.3-6.4 1.1c-.6.1-.9.9-.6 1.3L4.9 16l-3.7 5.3c-.4.5-.1 1.3.6 1.4l6.3 1.1 1.1 6.3c.1.6.8.9 1.4.6l5.3-3.7 5.3 3.7c.5.4 1.3.1 1.4-.6l1.1-6.3 6.3-1.1c.8-.1 1.1-.8.7-1.4zM16 25.1c-5.1 0-9.1-4.1-9.1-9.1 0-5.1 4.1-9.1 9.1-9.1s9.1 4.1 9.1 9.1c0 5.1-4 9.1-9.1 9.1z"})}),(0,r.jsx)("path",{className:d().themeToggleCircle,d:"M16 7.7c-4.6 0-8.2 3.7-8.2 8.2s3.6 8.4 8.2 8.4 8.2-3.7 8.2-8.2-3.6-8.4-8.2-8.4zm0 14.4c-3.4 0-6.1-2.9-6.1-6.2s2.7-6.1 6.1-6.1c3.4 0 6.1 2.9 6.1 6.2s-2.7 6.1-6.1 6.1z"}),(0,r.jsx)("path",{className:d().themeToggleInner,d:"M16 9.5c-3.6 0-6.4 2.9-6.4 6.4s2.8 6.5 6.4 6.5 6.4-2.9 6.4-6.4-2.8-6.5-6.4-6.5z"})]})},h=t(7584),p=t.n(h);var m=function(e){var n,t,o,a=e.toggled;return(0,r.jsxs)("div",{className:l()(p().fontToggle,(n={},t=p().toggled,o=a,t in n?Object.defineProperty(n,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[t]=o,n)),children:[(0,r.jsx)("span",{className:p().sans,children:"A"}),(0,r.jsx)("span",{className:p().serif,children:"A"})]})},_=t(1818),v=t.n(_);var b=function(e){var n,t,a,s=e.show,c=(0,o.useContext)(i.SettingsCtx),f=c.dark,d=c.setDark,h=c.serif,p=c.setSerif,_=(0,o.useState)(!1),b=_[0],y=_[1];return(0,r.jsx)("div",{className:v().anchor,children:(0,r.jsxs)("div",{className:l()(v().container,(n={},t=v().expanded,a=s.length<2||b,t in n?Object.defineProperty(n,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[t]=a,n)),children:[s.length>1&&(0,r.jsx)("button",{className:v().expandToggle,"aria-label":"Open/close settings",onClick:function(){return y(!b)},children:(0,r.jsx)(u,{toggled:b})}),s.includes("theme")&&(0,r.jsx)("button",{onClick:function(){return d(!f)},"aria-label":"Theme toggle",style:{"--n":1},children:(0,r.jsx)(g,{toggled:f})}),s.includes("font")&&(0,r.jsx)("button",{onClick:function(){return p(!h)},"aria-label":"Font toggle",style:{"--n":2},children:(0,r.jsx)(m,{toggled:h})})]})})},y=["theme"],x=["theme","font"]},255:function(e,n,t){"use strict";t.d(n,{Z:function(){return h}});var r=t(5893),o=t(9008),a=t(4184),l=t.n(a),i=t(1664),s=t(5957),c=t.n(s),u=function(e){var n=e.crumbs;return(0,r.jsx)("nav",{className:c().crumbs,children:n.map((function(e,n){return(0,r.jsxs)("span",{className:c().crumb,children:[(0,r.jsx)(i.default,{href:e.path,children:e.name}),"/"]},n)}))})},f=t(5755),d=t(2071),g=t.n(d),h=function(e){var n=e.title,t=e.crumbs,a=e.settings,i=e.children,s=a||f.he;return(0,r.jsxs)("div",{className:g().layoutRoot,children:[(0,r.jsx)(o.default,{children:(0,r.jsx)("title",{children:n})}),(0,r.jsx)("header",{className:l()(g().mainContent,g().header),children:(0,r.jsxs)("div",{className:g().headerContent,children:[t&&(0,r.jsx)(u,{crumbs:t}),(0,r.jsx)("h1",{children:n})]})}),(0,r.jsx)("aside",{className:l()(g().mainContent,g().settings),children:(0,r.jsx)(f.ZP,{show:s})}),(0,r.jsx)("main",{className:g().mainContent,children:i})]})}},8418:function(e,n,t){"use strict";function r(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function o(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,o,a=[],l=!0,i=!1;try{for(t=t.call(e);!(l=(r=t.next()).done)&&(a.push(r.value),!n||a.length!==n);l=!0);}catch(s){i=!0,o=s}finally{try{l||null==t.return||t.return()}finally{if(i)throw o}}return a}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return r(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return r(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.default=void 0;var a,l=(a=t(7294))&&a.__esModule?a:{default:a},i=t(6273),s=t(387),c=t(7190);var u={};function f(e,n,t,r){if(e&&i.isLocalURL(n)){e.prefetch(n,t,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;u[n+"%"+t+(o?"%"+o:"")]=!0}}var d=function(e){var n,t=!1!==e.prefetch,r=s.useRouter(),a=l.default.useMemo((function(){var n=o(i.resolveHref(r,e.href,!0),2),t=n[0],a=n[1];return{href:t,as:e.as?i.resolveHref(r,e.as):a||t}}),[r,e.href,e.as]),d=a.href,g=a.as,h=e.children,p=e.replace,m=e.shallow,_=e.scroll,v=e.locale;"string"===typeof h&&(h=l.default.createElement("a",null,h));var b=(n=l.default.Children.only(h))&&"object"===typeof n&&n.ref,y=o(c.useIntersection({rootMargin:"200px"}),2),x=y[0],j=y[1],T=l.default.useCallback((function(e){x(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,x]);l.default.useEffect((function(){var e=j&&t&&i.isLocalURL(d),n="undefined"!==typeof v?v:r&&r.locale,o=u[d+"%"+g+(n?"%"+n:"")];e&&!o&&f(r,d,g,{locale:n})}),[g,d,j,v,t,r]);var C={ref:T,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,t,r,o,a,l,s){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(t))&&(e.preventDefault(),n[o?"replace":"push"](t,r,{shallow:a,locale:s,scroll:l}))}(e,r,d,g,p,m,_,v)},onMouseEnter:function(e){n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),i.isLocalURL(d)&&f(r,d,g,{priority:!0})}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var w="undefined"!==typeof v?v:r&&r.locale,N=r&&r.isLocaleDomain&&i.getDomainLocale(g,w,r&&r.locales,r&&r.domainLocales);C.href=N||i.addBasePath(i.addLocale(g,w,r&&r.defaultLocale))}return l.default.cloneElement(n,C)};n.default=d},7190:function(e,n,t){"use strict";function r(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function o(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,o,a=[],l=!0,i=!1;try{for(t=t.call(e);!(l=(r=t.next()).done)&&(a.push(r.value),!n||a.length!==n);l=!0);}catch(s){i=!0,o=s}finally{try{l||null==t.return||t.return()}finally{if(i)throw o}}return a}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return r(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return r(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootRef,t=e.rootMargin,r=e.disabled||!i,u=a.useRef(),f=o(a.useState(!1),2),d=f[0],g=f[1],h=o(a.useState(n?n.current:null),2),p=h[0],m=h[1],_=a.useCallback((function(e){u.current&&(u.current(),u.current=void 0),r||d||e&&e.tagName&&(u.current=function(e,n,t){var r=function(e){var n,t={root:e.root||null,margin:e.rootMargin||""},r=c.find((function(e){return e.root===t.root&&e.margin===t.margin}));r?n=s.get(r):(n=s.get(t),c.push(t));if(n)return n;var o=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var n=o.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return s.set(t,n={id:t,observer:a,elements:o}),n}(t),o=r.id,a=r.observer,l=r.elements;return l.set(e,n),a.observe(e),function(){if(l.delete(e),a.unobserve(e),0===l.size){a.disconnect(),s.delete(o);var n=c.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));n>-1&&c.splice(n,1)}}}(e,(function(e){return e&&g(e)}),{root:p,rootMargin:t}))}),[r,p,t,d]);return a.useEffect((function(){if(!i&&!d){var e=l.requestIdleCallback((function(){return g(!0)}));return function(){return l.cancelIdleCallback(e)}}}),[d]),a.useEffect((function(){n&&m(n.current)}),[n]),[_,d]};var a=t(7294),l=t(9311),i="undefined"!==typeof IntersectionObserver;var s=new Map,c=[]},9240:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSG:function(){return c}});var r=t(5893),o=t(1664),a=t(255),l=t(4778),i=t(2071),s=t.n(i),c=!0;n.default=function(e){var n=e.projects;return(0,r.jsx)(a.Z,{title:"Projects",crumbs:[l.xr],children:(0,r.jsx)("div",{className:s().bigLinks,children:n.map((function(e,n){return(0,r.jsx)(o.default,{href:e.path,children:e.name},n)}))})})}},4778:function(e,n,t){"use strict";t.d(n,{xr:function(){return r},No:function(){return o},K7:function(){return a}});var r={name:"home",path:"/"},o={name:"articles",path:"/articles"},a={name:"projects",path:"/projects"}},2071:function(e){e.exports={layoutRoot:"Common_layoutRoot__VcayH",mainContent:"Common_mainContent__JJZd4",header:"Common_header__jh1_2",settings:"Common_settings__PgHOK",bigLinks:"Common_bigLinks__BuFz3"}},5957:function(e){e.exports={crumbs:"Crumbs_crumbs__ETs2q",crumb:"Crumbs_crumb__7lg_0"}},867:function(e){e.exports={expandToggle:"ExpandToggle_expandToggle__BYlBk",toggled:"ExpandToggle_toggled__8Hslv"}},7584:function(e){e.exports={fontToggle:"FontToggle_fontToggle__ojJQ1",sans:"FontToggle_sans__hUf61",serif:"FontToggle_serif__qkIvr",toggled:"FontToggle_toggled___ZGs_"}},1818:function(e){e.exports={anchor:"Settings_anchor__3UI96",container:"Settings_container__lx6oR",tooltip:"Settings_tooltip__FeCx6",expandToggle:"Settings_expandToggle__2bdJ3",expanded:"Settings_expanded__6zW9E"}},2729:function(e){e.exports={themeToggle:"ThemeToggle_themeToggle__1UodW",toggled:"ThemeToggle_toggled__ykoPB",themeToggleCircle:"ThemeToggle_themeToggleCircle__elMqT",themeToggleInner:"ThemeToggle_themeToggleInner__B9q16"}},9008:function(e,n,t){e.exports=t(5443)},1664:function(e,n,t){e.exports=t(8418)}},function(e){e.O(0,[774,888,179],(function(){return n=4478,e(e.s=n);var n}));var n=e.O();_N_E=n}]);