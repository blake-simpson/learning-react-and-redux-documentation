webpackJsonp([0xd2a57dc1d883],{64:function(n,e){"use strict";function t(n,e,t){var o=r.map(function(t){if(t.plugin[n]){var o=t.plugin[n](e,t.options);return o}});return o=o.filter(function(n){return"undefined"!=typeof n}),o.length>0?o:t?[t]:[]}function o(n,e,t){return r.reduce(function(t,o){return o.plugin[n]?t.then(function(){return o.plugin[n](e,o.options)}):t},Promise.resolve())}e.__esModule=!0,e.apiRunner=t,e.apiRunnerAsync=o;var r=[]},173:function(n,e,t){"use strict";var o;e.components={"component---src-templates-post-js":t(281),"component---src-pages-404-js":t(279),"component---src-pages-index-js":t(280)},e.json=(o={"layout-index.json":t(7),"tutorial-getting-started.json":t(285)},o["layout-index.json"]=t(7),o["tutorial-links.json"]=t(286),o["layout-index.json"]=t(7),o["tutorial-steps-1-setup-package.json"]=t(287),o["layout-index.json"]=t(7),o["tutorial-steps-10-pointer-details.json"]=t(288),o["layout-index.json"]=t(7),o["tutorial-steps-11-favourite-places.json"]=t(289),o["layout-index.json"]=t(7),o["tutorial-steps-12-favourites-list.json"]=t(290),o["layout-index.json"]=t(7),o["tutorial-steps-13-adding-redux.json"]=t(291),o["layout-index.json"]=t(7),o["tutorial-steps-14-managing-favourites-with-redux.json"]=t(292),o["layout-index.json"]=t(7),o["tutorial-steps-2-webpack.json"]=t(296),o["layout-index.json"]=t(7),o["tutorial-steps-3-babel.json"]=t(297),o["layout-index.json"]=t(7),o["tutorial-steps-4-eslint-and-prettier.json"]=t(298),o["layout-index.json"]=t(7),o["tutorial-steps-5-starting-react.json"]=t(299),o["layout-index.json"]=t(7),o["tutorial-steps-6-adding-the-map.json"]=t(300),o["layout-index.json"]=t(7),o["tutorial-steps-7-styling-with-postcss.json"]=t(301),o["layout-index.json"]=t(7),o["tutorial-steps-8-webpack-dev-server.json"]=t(302),o["layout-index.json"]=t(7),o["tutorial-steps-9-adding-points-to-the-map.json"]=t(303),o["layout-index.json"]=t(7),o["tutorial-steps-15-removing-favourites-from-the-list.json"]=t(293),o["layout-index.json"]=t(7),o["tutorial-steps-16-ids-for-points.json"]=t(294),o["layout-index.json"]=t(7),o["tutorial-steps-17-testing-with-jest.json"]=t(295),o["layout-index.json"]=t(7),o["404.json"]=t(282),o["layout-index.json"]=t(7),o["index.json"]=t(284),o["layout-index.json"]=t(7),o["404-html.json"]=t(283),o),e.layouts={"component---src-layouts-index-js":t(278)}},174:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}function r(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function a(n,e){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?n:e}function u(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(n,e):n.__proto__=e)}e.__esModule=!0;var s=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o])}return n},i=t(4),c=o(i),l=t(9),p=o(l),f=t(111),d=o(f),m=t(47),h=o(m),g=t(64),y=function(n){var e=n.children;return c.default.createElement("div",null,e())},j=function(n){function e(t){r(this,e);var o=a(this,n.call(this));return o.state={location:t.location,pageResources:d.default.getResourcesForPathname(t.location.pathname)},o}return u(e,n),e.prototype.componentWillReceiveProps=function(n){var e=this;if(this.state.location.pathname!==n.location.pathname){var t=d.default.getResourcesForPathname(n.location.pathname);t?this.setState({location:n.location,pageResources:t}):d.default.getResourcesForPathname(n.location.pathname,function(t){e.setState({location:n.location,pageResources:t})})}},e.prototype.componentDidMount=function(){var n=this;h.default.on("onPostLoadPageResources",function(e){e.page.path===d.default.getPage(n.state.location.pathname).path&&n.setState({pageResources:e.pageResources})})},e.prototype.shouldComponentUpdate=function(n,e){return!e.pageResources||(!(this.state.pageResources||!e.pageResources)||(this.state.pageResources.component!==e.pageResources.component||(this.state.pageResources.json!==e.pageResources.json||!(this.state.location.key===e.location.key||!e.pageResources.page||!e.pageResources.page.matchPath&&!e.pageResources.page.path))))},e.prototype.render=function(){var n=(0,g.apiRunner)("replaceComponentRenderer",{props:s({},this.props,{pageResources:this.state.pageResources}),loader:f.publicLoader}),e=n[0];return this.props.page?this.state.pageResources?e||(0,i.createElement)(this.state.pageResources.component,s({key:this.props.location.pathname},this.props,this.state.pageResources.json)):null:this.props.layout?e||(0,i.createElement)(this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:y,s({key:this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:"DefaultLayout"},this.props)):null},e}(c.default.Component);j.propTypes={page:p.default.bool,layout:p.default.bool,location:p.default.object},e.default=j,n.exports=e.default},47:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var r=t(334),a=o(r),u=(0,a.default)();n.exports=u},175:function(n,e,t){"use strict";var o=t(63),r={};n.exports=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return function(t){var a=decodeURIComponent(t),u=a.slice(e.length);if(u.split("#").length>1&&(u=u.split("#").slice(0,-1).join("")),u.split("?").length>1&&(u=u.split("?").slice(0,-1).join("")),r[u])return r[u];var s=void 0;return n.some(function(n){if(n.matchPath){if((0,o.matchPath)(u,{path:n.path})||(0,o.matchPath)(u,{path:n.matchPath}))return s=n,r[u]=n,!0}else{if((0,o.matchPath)(u,{path:n.path,exact:!0}))return s=n,r[u]=n,!0;if((0,o.matchPath)(u,{path:n.path+"index.html"}))return s=n,r[u]=n,!0}return!1}),s}}},176:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var r=t(87),a=o(r),u=t(64),s=(0,u.apiRunner)("replaceHistory"),i=s[0],c=i||(0,a.default)();n.exports=c},283:function(n,e,t){t(5),n.exports=function(n){return t.e(0xa2868bfb69fc,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(310)})})}},282:function(n,e,t){t(5),n.exports=function(n){return t.e(0xe70826b53c04,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(311)})})}},284:function(n,e,t){t(5),n.exports=function(n){return t.e(0x81b8806e4260,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(312)})})}},7:function(n,e,t){t(5),n.exports=function(n){return t.e(60335399758886,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(90)})})}},285:function(n,e,t){t(5),n.exports=function(n){return t.e(0x6c0c136a8aef,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(313)})})}},286:function(n,e,t){t(5),n.exports=function(n){return t.e(0x7b4b6d93028e,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(314)})})}},287:function(n,e,t){t(5),n.exports=function(n){return t.e(0xc2af3db1843d,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(315)})})}},288:function(n,e,t){t(5),n.exports=function(n){return t.e(0xbc16c3d306ee,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(316)})})}},289:function(n,e,t){t(5),n.exports=function(n){return t.e(0x78f16d3ae3ce,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(317)})})}},290:function(n,e,t){t(5),n.exports=function(n){return t.e(17971265750924,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(318)})})}},291:function(n,e,t){t(5),n.exports=function(n){return t.e(0xd86a0636b364,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(319)})})}},292:function(n,e,t){t(5),n.exports=function(n){return t.e(0xf0aae823ad,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(320)})})}},293:function(n,e,t){t(5),n.exports=function(n){return t.e(0xa4d2c945eacc,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(321)})})}},294:function(n,e,t){t(5),n.exports=function(n){return t.e(0x6b92a4649449,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(322)})})}},295:function(n,e,t){t(5),n.exports=function(n){return t.e(0x6ca4b44a2b96,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(323)})})}},296:function(n,e,t){t(5),n.exports=function(n){return t.e(86486738803091,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(324)})})}},297:function(n,e,t){t(5),n.exports=function(n){return t.e(0xfea8d3637122,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(325)})})}},298:function(n,e,t){t(5),n.exports=function(n){return t.e(46414529011902,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(326)})})}},299:function(n,e,t){t(5),n.exports=function(n){return t.e(97838741517688,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(327)})})}},300:function(n,e,t){t(5),n.exports=function(n){return t.e(0xd6766a76fe20,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(328)})})}},301:function(n,e,t){t(5),n.exports=function(n){return t.e(0x9cfc32e64ef2,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(329)})})}},302:function(n,e,t){t(5),n.exports=function(n){return t.e(46098157417510,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(330)})})}},303:function(n,e,t){t(5),n.exports=function(n){return t.e(0x967dcf7a4bb4,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(331)})})}},278:function(n,e,t){t(5),n.exports=function(n){return t.e(0x67ef26645b2a,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(177)})})}},111:function(n,e,t){(function(n){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}e.__esModule=!0,e.publicLoader=void 0;var r=t(4),a=(o(r),t(175)),u=o(a),s=t(47),i=o(s),c=void 0,l={},p={},f={},d={},m={},h=[],g=[],y={},j=[],x={},v=function(n){return n&&n.default||n},R=void 0,C=!0;R=t(178)({getNextQueuedResources:function(){return j.slice(-1)[0]},createResourceDownload:function(n){k(n,function(){j=j.filter(function(e){return e!==n}),R.onResourcedFinished(n)})}}),i.default.on("onPreLoadPageResources",function(n){R.onPreLoadPageResources(n)}),i.default.on("onPostLoadPageResources",function(n){R.onPostLoadPageResources(n)});var N=function(n,e){return x[n]>x[e]?1:x[n]<x[e]?-1:0},b=function(n,e){return y[n]>y[e]?1:y[n]<y[e]?-1:0},k=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};if(d[e])n.nextTick(function(){t(null,d[e])});else{var o="component---"===e.slice(0,12)?p.components[e]||p.layouts[e]:p.json[e];o(function(n,o){d[e]=o,t(n,o)})}},w=function(e,t){m[e]?n.nextTick(function(){t(null,m[e])}):k(e,function(n,o){if(n)t(n);else{var r=v(o());m[e]=r,t(n,r)}})},P=1,_={empty:function(){g=[],y={},x={},j=[],h=[]},addPagesArray:function(n){h=n;var e="";e="/learning-react-and-redux-documentation",c=(0,u.default)(n,e)},addDevRequires:function(n){l=n},addProdRequires:function(n){p=n},dequeue:function(n){return g.pop()},enqueue:function(n){if(!h.some(function(e){return e.path===n}))return!1;var e=1/P;P+=1,y[n]?y[n]+=1:y[n]=1,_.has(n)||g.unshift(n),g.sort(b);var t=c(n);return t.jsonName&&(x[t.jsonName]?x[t.jsonName]+=1+e:x[t.jsonName]=1+e,j.indexOf(t.jsonName)!==-1||d[t.jsonName]||j.unshift(t.jsonName)),t.componentChunkName&&(x[t.componentChunkName]?x[t.componentChunkName]+=1+e:x[t.componentChunkName]=1+e,j.indexOf(t.componentChunkName)!==-1||d[t.jsonName]||j.unshift(t.componentChunkName)),j.sort(N),R.onNewResourcesAdded(),!0},getResources:function(){return{resourcesArray:j,resourcesCount:x}},getPages:function(){return{pathArray:g,pathCount:y}},getPage:function(n){return c(n)},has:function(n){return g.some(function(e){return e===n})},getResourcesForPathname:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};C&&navigator&&navigator.serviceWorker&&navigator.serviceWorker.controller&&"activated"===navigator.serviceWorker.controller.state&&(c(e)||navigator.serviceWorker.getRegistrations().then(function(n){for(var e=n,t=Array.isArray(e),o=0,e=t?e:e[Symbol.iterator]();;){var r;if(t){if(o>=e.length)break;r=e[o++]}else{if(o=e.next(),o.done)break;r=o.value}var a=r;a.unregister()}window.location.reload()})),C=!1;var o=c(e);if(!o)return void console.log("A page wasn't found for \""+e+'"');if(e=o.path,f[e])return n.nextTick(function(){t(f[e]),i.default.emit("onPostLoadPageResources",{page:o,pageResources:f[e]})}),f[e];i.default.emit("onPreLoadPageResources",{path:e});var r=void 0,a=void 0,u=void 0,s=function(){if(r&&a&&(!o.layoutComponentChunkName||u)){f[e]={component:r,json:a,layout:u,page:o};var n={component:r,json:a,layout:u,page:o};t(n),i.default.emit("onPostLoadPageResources",{page:o,pageResources:n})}};return w(o.componentChunkName,function(n,e){n&&console.log("Loading the component for "+o.path+" failed"),r=e,s()}),w(o.jsonName,function(n,e){n&&console.log("Loading the JSON for "+o.path+" failed"),a=e,s()}),void(o.layoutComponentChunkName&&w(o.layoutComponentChunkName,function(n,e){n&&console.log("Loading the Layout for "+o.path+" failed"),u=e,s()}))},peek:function(n){return g.slice(-1)[0]},length:function(){return g.length},indexOf:function(n){return g.length-g.indexOf(n)-1}};e.publicLoader={getResourcesForPathname:_.getResourcesForPathname};e.default=_}).call(e,t(91))},332:function(n,e){n.exports=[{componentChunkName:"component---src-templates-post-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"tutorial-getting-started.json",path:"/tutorial/getting-started/"},{componentChunkName:"component---src-templates-post-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"tutorial-links.json",path:"/tutorial/links/"},{componentChunkName:"component---src-templates-post-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"tutorial-steps-1-setup-package.json",path:"/tutorial/steps/1-setup-package/"},{componentChunkName:"component---src-templates-post-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"tutorial-steps-10-pointer-details.json",path:"/tutorial/steps/10-pointer-details/"},{componentChunkName:"component---src-templates-post-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"tutorial-steps-11-favourite-places.json",path:"/tutorial/steps/11-favourite-places/"},{componentChunkName:"component---src-templates-post-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"tutorial-steps-12-favourites-list.json",path:"/tutorial/steps/12-favourites-list/"},{componentChunkName:"component---src-templates-post-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"tutorial-steps-13-adding-redux.json",path:"/tutorial/steps/13-adding-redux/"},{componentChunkName:"component---src-templates-post-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"tutorial-steps-14-managing-favourites-with-redux.json",path:"/tutorial/steps/14-managing-favourites-with-redux/"},{componentChunkName:"component---src-templates-post-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"tutorial-steps-2-webpack.json",path:"/tutorial/steps/2-webpack/"},{componentChunkName:"component---src-templates-post-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"tutorial-steps-3-babel.json",path:"/tutorial/steps/3-babel/"},{componentChunkName:"component---src-templates-post-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"tutorial-steps-4-eslint-and-prettier.json",path:"/tutorial/steps/4-eslint-and-prettier/"},{componentChunkName:"component---src-templates-post-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"tutorial-steps-5-starting-react.json",path:"/tutorial/steps/5-starting-react/"},{componentChunkName:"component---src-templates-post-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"tutorial-steps-6-adding-the-map.json",path:"/tutorial/steps/6-adding-the-map/"},{componentChunkName:"component---src-templates-post-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"tutorial-steps-7-styling-with-postcss.json",path:"/tutorial/steps/7-styling-with-postcss/"},{componentChunkName:"component---src-templates-post-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"tutorial-steps-8-webpack-dev-server.json",path:"/tutorial/steps/8-webpack-dev-server/"},{componentChunkName:"component---src-templates-post-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"tutorial-steps-9-adding-points-to-the-map.json",path:"/tutorial/steps/9-adding-points-to-the-map/"},{componentChunkName:"component---src-templates-post-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"tutorial-steps-15-removing-favourites-from-the-list.json",path:"/tutorial/steps/15-removing-favourites-from-the-list/"},{componentChunkName:"component---src-templates-post-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"tutorial-steps-16-ids-for-points.json",path:"/tutorial/steps/16-ids-for-points/"},{componentChunkName:"component---src-templates-post-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"tutorial-steps-17-testing-with-jest.json",path:"/tutorial/steps/17-testing-with-jest/"},{componentChunkName:"component---src-pages-404-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"404.json",path:"/404/"},{componentChunkName:"component---src-pages-index-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"index.json",path:"/"},{componentChunkName:"component---src-pages-404-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"404-html.json",path:"/404.html"}]},178:function(n,e){"use strict";n.exports=function(n){var e=n.getNextQueuedResources,t=n.createResourceDownload,o=[],r=[],a=function(){var n=e();n&&(r.push(n),t(n))},u=function(n){switch(n.type){case"RESOURCE_FINISHED":r=r.filter(function(e){return e!==n.payload});break;case"ON_PRE_LOAD_PAGE_RESOURCES":o.push(n.payload.path);break;case"ON_POST_LOAD_PAGE_RESOURCES":o=o.filter(function(e){return e!==n.payload.page.path});break;case"ON_NEW_RESOURCES_ADDED":}setTimeout(function(){0===r.length&&0===o.length&&a()},0)};return{onResourcedFinished:function(n){u({type:"RESOURCE_FINISHED",payload:n})},onPreLoadPageResources:function(n){u({type:"ON_PRE_LOAD_PAGE_RESOURCES",payload:n})},onPostLoadPageResources:function(n){u({type:"ON_POST_LOAD_PAGE_RESOURCES",payload:n})},onNewResourcesAdded:function(){u({type:"ON_NEW_RESOURCES_ADDED"})},getState:function(){return{pagesLoading:o,resourcesDownloading:r}},empty:function(){o=[],r=[]}}}},0:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var r=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o])}return n},a=t(64),u=t(4),s=o(u),i=t(142),c=o(i),l=t(63),p=t(307),f=t(262),d=o(f),m=t(176),h=o(m),g=t(47),y=o(g),j=t(332),x=o(j),v=t(333),R=o(v),C=t(174),N=o(C),b=t(173),k=o(b),w=t(111),P=o(w);t(252),window.___emitter=y.default,P.default.addPagesArray(x.default),P.default.addProdRequires(k.default),window.asyncRequires=k.default,window.___loader=P.default,window.matchPath=l.matchPath;var _=R.default.reduce(function(n,e){return n[e.fromPath]=e,n},{}),E=function(n){var e=_[n];return null!=e&&(h.default.replace(e.toPath),!0)};E(window.location.pathname),(0,a.apiRunnerAsync)("onClientEntry").then(function(){function n(n){window.___history||(window.___history=n,n.listen(function(n,e){E(n.pathname)||(0,a.apiRunner)("onRouteUpdate",{location:n,action:e})}))}function e(n,e){var t=e.location.pathname,o=(0,a.apiRunner)("shouldUpdateScroll",{prevRouterProps:n,pathname:t});if(o.length>0)return o[0];if(n){var r=n.location.pathname;if(r===t)return!1}return!0}(0,a.apiRunner)("registerServiceWorker").length>0&&t(179);var o=function(n){function e(t){t.page.path===P.default.getPage(n).path&&(y.default.off("onPostLoadPageResources",e),clearTimeout(o),window.___history.push(n))}var t=_[n];if(t&&(n=t.toPath),window.location.pathname!==n){var o=setTimeout(function(){y.default.off("onPostLoadPageResources",e),y.default.emit("onDelayedLoadPageResources",{pathname:n}),window.___history.push(n)},1e3);P.default.getResourcesForPathname(n)?(clearTimeout(o),window.___history.push(n)):y.default.on("onPostLoadPageResources",e)}};window.___navigateTo=o,(0,a.apiRunner)("onRouteUpdate",{location:h.default.location,action:h.default.action});var i=(0,a.apiRunner)("replaceRouterComponent",{history:h.default})[0],f=function(n){var e=n.children;return s.default.createElement(l.Router,{history:h.default},e)},m=(0,l.withRouter)(N.default);P.default.getResourcesForPathname(window.location.pathname,function(){var t=function(){return(0,u.createElement)(i?i:f,null,(0,u.createElement)(p.ScrollContext,{shouldUpdateScroll:e},(0,u.createElement)(m,{layout:!0,children:function(e){return(0,u.createElement)(l.Route,{render:function(t){n(t.history);var o=e?e:t;return P.default.getPage(o.location.pathname)?(0,u.createElement)(N.default,r({page:!0},o)):(0,u.createElement)(N.default,{location:{page:!0,pathname:"/404.html"}})}})}})))},o=(0,a.apiRunner)("wrapRootComponent",{Root:t},t)[0];(0,d.default)(function(){return c.default.render(s.default.createElement(o,null),"undefined"!=typeof window?document.getElementById("___gatsby"):void 0,function(){(0,a.apiRunner)("onInitialClientRender")})})})})},333:function(n,e){n.exports=[]},179:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var r=t(47),a=o(r),u="/";u="/learning-react-and-redux-documentation/","serviceWorker"in navigator&&navigator.serviceWorker.register(u+"sw.js").then(function(n){n.addEventListener("updatefound",function(){var e=n.installing;console.log("installingWorker",e),e.addEventListener("statechange",function(){switch(e.state){case"installed":navigator.serviceWorker.controller?window.location.reload():(console.log("Content is now available offline!"),a.default.emit("sw:installed"));break;case"redundant":console.error("The installing service worker became redundant.")}})})}).catch(function(n){console.error("Error during service worker registration:",n)})},262:function(n,e,t){!function(e,t){n.exports=t()}("domready",function(){var n,e=[],t=document,o=t.documentElement.doScroll,r="DOMContentLoaded",a=(o?/^loaded|^c/:/^loaded|^i|^c/).test(t.readyState);return a||t.addEventListener(r,n=function(){for(t.removeEventListener(r,n),a=1;n=e.shift();)n()}),function(n){a?setTimeout(n,0):e.push(n)}})},5:function(n,e,t){"use strict";function o(){function n(n){var e=o.lastChild;return"SCRIPT"!==e.tagName?void("undefined"!=typeof console&&console.warn&&console.warn("Script is not a script",e)):void(e.onload=e.onerror=function(){e.onload=e.onerror=null,setTimeout(n,0)})}var e,o=document.querySelector("head"),r=t.e,a=t.s;t.e=function(o,u){var s=!1,i=!0,c=function(n){u&&(u(t,n),u=null)};return!a&&e&&e[o]?void c(!0):(r(o,function(){s||(s=!0,i?setTimeout(function(){c()}):c())}),void(s||(i=!1,n(function(){s||(s=!0,a?a[o]=void 0:(e||(e={}),e[o]=!0),c(!0))}))))}}o()},89:function(n,e){"use strict";var t={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,mixins:!0,propTypes:!0,type:!0},o={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},r=Object.defineProperty,a=Object.getOwnPropertyNames,u=Object.getOwnPropertySymbols,s=Object.getOwnPropertyDescriptor,i=Object.getPrototypeOf,c=i&&i(Object);n.exports=function n(e,l,p){if("string"!=typeof l){if(c){var f=i(l);f&&f!==c&&n(e,f,p)}var d=a(l);u&&(d=d.concat(u(l)));for(var m=0;m<d.length;++m){var h=d[m];if(!(t[h]||o[h]||p&&p[h])){var g=s(l,h);try{r(e,h,g)}catch(n){}}}return e}return e}},334:function(n,e){function t(n){return n=n||Object.create(null),{on:function(e,t){(n[e]||(n[e]=[])).push(t)},off:function(e,t){n[e]&&n[e].splice(n[e].indexOf(t)>>>0,1)},emit:function(e,t){(n[e]||[]).map(function(n){n(t)}),(n["*"]||[]).map(function(n){n(e,t)})}}}n.exports=t},91:function(n,e){function t(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function r(n){if(l===setTimeout)return setTimeout(n,0);if((l===t||!l)&&setTimeout)return l=setTimeout,setTimeout(n,0);try{return l(n,0)}catch(e){try{return l.call(null,n,0)}catch(e){return l.call(this,n,0)}}}function a(n){if(p===clearTimeout)return clearTimeout(n);if((p===o||!p)&&clearTimeout)return p=clearTimeout,clearTimeout(n);try{return p(n)}catch(e){try{return p.call(null,n)}catch(e){return p.call(this,n)}}}function u(){h&&d&&(h=!1,d.length?m=d.concat(m):g=-1,m.length&&s())}function s(){if(!h){var n=r(u);h=!0;for(var e=m.length;e;){for(d=m,m=[];++g<e;)d&&d[g].run();g=-1,e=m.length}d=null,h=!1,a(n)}}function i(n,e){this.fun=n,this.array=e}function c(){}var l,p,f=n.exports={};!function(){try{l="function"==typeof setTimeout?setTimeout:t}catch(n){l=t}try{p="function"==typeof clearTimeout?clearTimeout:o}catch(n){p=o}}();var d,m=[],h=!1,g=-1;f.nextTick=function(n){var e=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)e[t-1]=arguments[t];m.push(new i(n,e)),1!==m.length||h||r(s)},i.prototype.run=function(){this.fun.apply(null,this.array)},f.title="browser",f.browser=!0,f.env={},f.argv=[],f.version="",f.versions={},f.on=c,f.addListener=c,f.once=c,f.off=c,f.removeListener=c,f.removeAllListeners=c,f.emit=c,f.prependListener=c,f.prependOnceListener=c,f.listeners=function(n){return[]},f.binding=function(n){throw new Error("process.binding is not supported")},f.cwd=function(){return"/"},f.chdir=function(n){throw new Error("process.chdir is not supported")},f.umask=function(){return 0}},279:function(n,e,t){t(5),n.exports=function(n){return t.e(0x9427c64ab85d,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(181)})})}},280:function(n,e,t){t(5),n.exports=function(n){return t.e(35783957827783,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(182)})})}},281:function(n,e,t){t(5),n.exports=function(n){return t.e(0xb1abc741118f,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(183)})})}}});
//# sourceMappingURL=app-65e0f0a6b28f31c00c34.js.map