webpackJsonp([0xd2a57dc1d883],{64:function(n,t){"use strict";function e(n,t,e){var o=r.map(function(e){if(e.plugin[n]){var o=e.plugin[n](t,e.options);return o}});return o=o.filter(function(n){return"undefined"!=typeof n}),o.length>0?o:e?[e]:[]}function o(n,t,e){return r.reduce(function(e,o){return o.plugin[n]?e.then(function(){return o.plugin[n](t,o.options)}):e},Promise.resolve())}t.__esModule=!0,t.apiRunner=e,t.apiRunnerAsync=o;var r=[]},173:function(n,t,e){"use strict";var o;t.components={"component---src-templates-post-js":e(281),"component---src-pages-404-js":e(279),"component---src-pages-index-js":e(280)},t.json=(o={"layout-index.json":e(3),"tutorial-getting-started.json":e(285)},o["layout-index.json"]=e(3),o["tutorial-links.json"]=e(286),o["layout-index.json"]=e(3),o["tutorial-steps-1-setup-package.json"]=e(287),o["layout-index.json"]=e(3),o["tutorial-steps-10-pointer-details.json"]=e(288),o["layout-index.json"]=e(3),o["tutorial-steps-11-favourite-places.json"]=e(289),o["layout-index.json"]=e(3),o["tutorial-steps-12-favourites-list.json"]=e(290),o["layout-index.json"]=e(3),o["tutorial-steps-13-adding-redux.json"]=e(291),o["layout-index.json"]=e(3),o["tutorial-steps-14-managing-favourites-with-redux.json"]=e(292),o["layout-index.json"]=e(3),o["tutorial-steps-15-removing-favourites-from-the-list.json"]=e(293),o["layout-index.json"]=e(3),o["tutorial-steps-16-ids-for-points.json"]=e(294),o["layout-index.json"]=e(3),o["tutorial-steps-17-testing-with-jest.json"]=e(295),o["layout-index.json"]=e(3),o["tutorial-steps-18-testing-redux-actions.json"]=e(296),o["layout-index.json"]=e(3),o["tutorial-steps-2-webpack.json"]=e(298),o["layout-index.json"]=e(3),o["tutorial-steps-19-testing-redux-reducers.json"]=e(297),o["layout-index.json"]=e(3),o["tutorial-steps-20-jest-component-configuration.json"]=e(299),o["layout-index.json"]=e(3),o["tutorial-steps-21-testing-the-map.json"]=e(300),o["layout-index.json"]=e(3),o["tutorial-steps-22-testing-connected-components.json"]=e(301),o["layout-index.json"]=e(3),o["tutorial-steps-23-test-the-app-component.json"]=e(302),o["layout-index.json"]=e(3),o["tutorial-steps-24-test-favourites-list.json"]=e(303),o["layout-index.json"]=e(3),o["tutorial-steps-25-test-the-pointer.json"]=e(304),o["layout-index.json"]=e(3),o["tutorial-steps-3-babel.json"]=e(305),o["layout-index.json"]=e(3),o["tutorial-steps-4-eslint-and-prettier.json"]=e(306),o["layout-index.json"]=e(3),o["tutorial-steps-5-starting-react.json"]=e(307),o["layout-index.json"]=e(3),o["tutorial-steps-6-adding-the-map.json"]=e(308),o["layout-index.json"]=e(3),o["tutorial-steps-7-styling-with-postcss.json"]=e(309),o["layout-index.json"]=e(3),o["tutorial-steps-8-webpack-dev-server.json"]=e(310),o["layout-index.json"]=e(3),o["tutorial-steps-9-adding-points-to-the-map.json"]=e(311),o["layout-index.json"]=e(3),o["404.json"]=e(282),o["layout-index.json"]=e(3),o["index.json"]=e(284),o["layout-index.json"]=e(3),o["404-html.json"]=e(283),o),t.layouts={"component---src-layouts-index-js":e(278)}},174:function(n,t,e){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}function r(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function a(n,t){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?n:t}function u(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(n,t):n.__proto__=t)}t.__esModule=!0;var s=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o])}return n},i=e(6),c=o(i),l=e(9),p=o(l),d=e(111),f=o(d),m=e(47),h=o(m),g=e(64),y=function(n){var t=n.children;return c.default.createElement("div",null,t())},j=function(n){function t(e){r(this,t);var o=a(this,n.call(this));return o.state={location:e.location,pageResources:f.default.getResourcesForPathname(e.location.pathname)},o}return u(t,n),t.prototype.componentWillReceiveProps=function(n){var t=this;if(this.state.location.pathname!==n.location.pathname){var e=f.default.getResourcesForPathname(n.location.pathname);e?this.setState({location:n.location,pageResources:e}):f.default.getResourcesForPathname(n.location.pathname,function(e){t.setState({location:n.location,pageResources:e})})}},t.prototype.componentDidMount=function(){var n=this;h.default.on("onPostLoadPageResources",function(t){t.page.path===f.default.getPage(n.state.location.pathname).path&&n.setState({pageResources:t.pageResources})})},t.prototype.shouldComponentUpdate=function(n,t){return!t.pageResources||(!(this.state.pageResources||!t.pageResources)||(this.state.pageResources.component!==t.pageResources.component||(this.state.pageResources.json!==t.pageResources.json||!(this.state.location.key===t.location.key||!t.pageResources.page||!t.pageResources.page.matchPath&&!t.pageResources.page.path))))},t.prototype.render=function(){var n=(0,g.apiRunner)("replaceComponentRenderer",{props:s({},this.props,{pageResources:this.state.pageResources}),loader:d.publicLoader}),t=n[0];return this.props.page?this.state.pageResources?t||(0,i.createElement)(this.state.pageResources.component,s({key:this.props.location.pathname},this.props,this.state.pageResources.json)):null:this.props.layout?t||(0,i.createElement)(this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:y,s({key:this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:"DefaultLayout"},this.props)):null},t}(c.default.Component);j.propTypes={page:p.default.bool,layout:p.default.bool,location:p.default.object},t.default=j,n.exports=t.default},47:function(n,t,e){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var r=e(350),a=o(r),u=(0,a.default)();n.exports=u},175:function(n,t,e){"use strict";var o=e(63),r={};n.exports=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return function(e){var a=decodeURIComponent(e),u=a.slice(t.length);if(u.split("#").length>1&&(u=u.split("#").slice(0,-1).join("")),u.split("?").length>1&&(u=u.split("?").slice(0,-1).join("")),r[u])return r[u];var s=void 0;return n.some(function(n){if(n.matchPath){if((0,o.matchPath)(u,{path:n.path})||(0,o.matchPath)(u,{path:n.matchPath}))return s=n,r[u]=n,!0}else{if((0,o.matchPath)(u,{path:n.path,exact:!0}))return s=n,r[u]=n,!0;if((0,o.matchPath)(u,{path:n.path+"index.html"}))return s=n,r[u]=n,!0}return!1}),s}}},176:function(n,t,e){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var r=e(87),a=o(r),u=e(64),s=(0,u.apiRunner)("replaceHistory"),i=s[0],c=i||(0,a.default)();n.exports=c},283:function(n,t,e){e(2),n.exports=function(n){return e.e(0xa2868bfb69fc,function(t,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return e(318)})})}},282:function(n,t,e){e(2),n.exports=function(n){return e.e(0xe70826b53c04,function(t,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return e(319)})})}},284:function(n,t,e){e(2),n.exports=function(n){return e.e(0x81b8806e4260,function(t,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return e(320)})})}},3:function(n,t,e){e(2),n.exports=function(n){return e.e(60335399758886,function(t,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return e(90)})})}},285:function(n,t,e){e(2),n.exports=function(n){return e.e(0x6c0c136a8aef,function(t,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return e(321)})})}},286:function(n,t,e){e(2),n.exports=function(n){return e.e(0x7b4b6d93028e,function(t,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return e(322)})})}},287:function(n,t,e){e(2),n.exports=function(n){return e.e(0xc2af3db1843d,function(t,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return e(323)})})}},288:function(n,t,e){e(2),n.exports=function(n){return e.e(0xbc16c3d306ee,function(t,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return e(324)})})}},289:function(n,t,e){e(2),n.exports=function(n){return e.e(0x78f16d3ae3ce,function(t,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return e(325)})})}},290:function(n,t,e){e(2),n.exports=function(n){return e.e(17971265750924,function(t,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return e(326)})})}},291:function(n,t,e){e(2),n.exports=function(n){return e.e(0xd86a0636b364,function(t,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return e(327)})})}},292:function(n,t,e){e(2),n.exports=function(n){return e.e(0xf0aae823ad,function(t,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return e(328)})})}},293:function(n,t,e){e(2),n.exports=function(n){return e.e(0xa4d2c945eacc,function(t,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return e(329)})})}},294:function(n,t,e){e(2),n.exports=function(n){return e.e(0x6b92a4649449,function(t,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return e(330)})})}},295:function(n,t,e){e(2),n.exports=function(n){return e.e(0x6ca4b44a2b96,function(t,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return e(331)})})}},296:function(n,t,e){e(2),n.exports=function(n){return e.e(0xa652d30575cd,function(t,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return e(332)})})}},297:function(n,t,e){e(2),n.exports=function(n){return e.e(0x9529c6c246bd,function(t,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return e(333)})})}},298:function(n,t,e){e(2),n.exports=function(n){return e.e(86486738803091,function(t,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return e(334)})})}},299:function(n,t,e){e(2),n.exports=function(n){return e.e(0xae9e437ce91b,function(t,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return e(335)})})}},300:function(n,t,e){e(2),n.exports=function(n){return e.e(0xa2f25f0c7546,function(t,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return e(336)})})}},301:function(n,t,e){e(2),n.exports=function(n){return e.e(0x954c0d802f4a,function(t,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return e(337)})})}},302:function(n,t,e){e(2),n.exports=function(n){return e.e(0xcead1603146d,function(t,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return e(338)})})}},303:function(n,t,e){e(2),n.exports=function(n){return e.e(0x99b784486c5e,function(t,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return e(339)})})}},304:function(n,t,e){e(2),n.exports=function(n){return e.e(0xb433e2318288,function(t,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return e(340)})})}},305:function(n,t,e){e(2),n.exports=function(n){return e.e(0xfea8d3637122,function(t,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return e(341)})})}},306:function(n,t,e){e(2),n.exports=function(n){return e.e(46414529011902,function(t,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return e(342)})})}},307:function(n,t,e){e(2),n.exports=function(n){return e.e(97838741517688,function(t,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return e(343)})})}},308:function(n,t,e){e(2),n.exports=function(n){return e.e(0xd6766a76fe20,function(t,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return e(344)})})}},309:function(n,t,e){e(2),n.exports=function(n){return e.e(0x9cfc32e64ef2,function(t,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return e(345)})})}},310:function(n,t,e){e(2),n.exports=function(n){return e.e(46098157417510,function(t,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return e(346)})})}},311:function(n,t,e){e(2),n.exports=function(n){return e.e(0x967dcf7a4bb4,function(t,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return e(347)})})}},278:function(n,t,e){e(2),n.exports=function(n){return e.e(0x67ef26645b2a,function(t,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return e(177)})})}},111:function(n,t,e){(function(n){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}t.__esModule=!0,t.publicLoader=void 0;var r=e(6),a=(o(r),e(175)),u=o(a),s=e(47),i=o(s),c=void 0,l={},p={},d={},f={},m={},h=[],g=[],y={},j=[],x={},v=function(n){return n&&n.default||n},C=void 0,N=!0;C=e(178)({getNextQueuedResources:function(){return j.slice(-1)[0]},createResourceDownload:function(n){R(n,function(){j=j.filter(function(t){return t!==n}),C.onResourcedFinished(n)})}}),i.default.on("onPreLoadPageResources",function(n){C.onPreLoadPageResources(n)}),i.default.on("onPostLoadPageResources",function(n){C.onPostLoadPageResources(n)});var b=function(n,t){return x[n]>x[t]?1:x[n]<x[t]?-1:0},k=function(n,t){return y[n]>y[t]?1:y[n]<y[t]?-1:0},R=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};if(f[t])n.nextTick(function(){e(null,f[t])});else{var o="component---"===t.slice(0,12)?p.components[t]||p.layouts[t]:p.json[t];o(function(n,o){f[t]=o,e(n,o)})}},w=function(t,e){m[t]?n.nextTick(function(){e(null,m[t])}):R(t,function(n,o){if(n)e(n);else{var r=v(o());m[t]=r,e(n,r)}})},P=1,_={empty:function(){g=[],y={},x={},j=[],h=[]},addPagesArray:function(n){h=n;var t="";t="/learning-react-and-redux-documentation",c=(0,u.default)(n,t)},addDevRequires:function(n){l=n},addProdRequires:function(n){p=n},dequeue:function(n){return g.pop()},enqueue:function(n){if(!h.some(function(t){return t.path===n}))return!1;var t=1/P;P+=1,y[n]?y[n]+=1:y[n]=1,_.has(n)||g.unshift(n),g.sort(k);var e=c(n);return e.jsonName&&(x[e.jsonName]?x[e.jsonName]+=1+t:x[e.jsonName]=1+t,j.indexOf(e.jsonName)!==-1||f[e.jsonName]||j.unshift(e.jsonName)),e.componentChunkName&&(x[e.componentChunkName]?x[e.componentChunkName]+=1+t:x[e.componentChunkName]=1+t,j.indexOf(e.componentChunkName)!==-1||f[e.jsonName]||j.unshift(e.componentChunkName)),j.sort(b),C.onNewResourcesAdded(),!0},getResources:function(){return{resourcesArray:j,resourcesCount:x}},getPages:function(){return{pathArray:g,pathCount:y}},getPage:function(n){return c(n)},has:function(n){return g.some(function(t){return t===n})},getResourcesForPathname:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};N&&navigator&&navigator.serviceWorker&&navigator.serviceWorker.controller&&"activated"===navigator.serviceWorker.controller.state&&(c(t)||navigator.serviceWorker.getRegistrations().then(function(n){for(var t=n,e=Array.isArray(t),o=0,t=e?t:t[Symbol.iterator]();;){var r;if(e){if(o>=t.length)break;r=t[o++]}else{if(o=t.next(),o.done)break;r=o.value}var a=r;a.unregister()}window.location.reload()})),N=!1;var o=c(t);if(!o)return void console.log("A page wasn't found for \""+t+'"');if(t=o.path,d[t])return n.nextTick(function(){e(d[t]),i.default.emit("onPostLoadPageResources",{page:o,pageResources:d[t]})}),d[t];i.default.emit("onPreLoadPageResources",{path:t});var r=void 0,a=void 0,u=void 0,s=function(){if(r&&a&&(!o.layoutComponentChunkName||u)){d[t]={component:r,json:a,layout:u,page:o};var n={component:r,json:a,layout:u,page:o};e(n),i.default.emit("onPostLoadPageResources",{page:o,pageResources:n})}};return w(o.componentChunkName,function(n,t){n&&console.log("Loading the component for "+o.path+" failed"),r=t,s()}),w(o.jsonName,function(n,t){n&&console.log("Loading the JSON for "+o.path+" failed"),a=t,s()}),void(o.layoutComponentChunkName&&w(o.layoutComponentChunkName,function(n,t){n&&console.log("Loading the Layout for "+o.path+" failed"),u=t,s()}))},peek:function(n){return g.slice(-1)[0]},length:function(){return g.length},indexOf:function(n){return g.length-g.indexOf(n)-1}};t.publicLoader={getResourcesForPathname:_.getResourcesForPathname};t.default=_}).call(t,e(91))},348:function(n,t){n.exports=[{componentChunkName:"component---src-templates-post-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"tutorial-getting-started.json",path:"/tutorial/getting-started/"},{componentChunkName:"component---src-templates-post-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"tutorial-links.json",path:"/tutorial/links/"},{componentChunkName:"component---src-templates-post-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"tutorial-steps-1-setup-package.json",path:"/tutorial/steps/1-setup-package/"},{componentChunkName:"component---src-templates-post-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"tutorial-steps-10-pointer-details.json",path:"/tutorial/steps/10-pointer-details/"},{componentChunkName:"component---src-templates-post-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"tutorial-steps-11-favourite-places.json",path:"/tutorial/steps/11-favourite-places/"},{componentChunkName:"component---src-templates-post-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"tutorial-steps-12-favourites-list.json",path:"/tutorial/steps/12-favourites-list/"},{componentChunkName:"component---src-templates-post-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"tutorial-steps-13-adding-redux.json",path:"/tutorial/steps/13-adding-redux/"},{componentChunkName:"component---src-templates-post-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"tutorial-steps-14-managing-favourites-with-redux.json",path:"/tutorial/steps/14-managing-favourites-with-redux/"},{componentChunkName:"component---src-templates-post-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"tutorial-steps-15-removing-favourites-from-the-list.json",path:"/tutorial/steps/15-removing-favourites-from-the-list/"},{componentChunkName:"component---src-templates-post-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"tutorial-steps-16-ids-for-points.json",path:"/tutorial/steps/16-ids-for-points/"},{componentChunkName:"component---src-templates-post-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"tutorial-steps-17-testing-with-jest.json",path:"/tutorial/steps/17-testing-with-jest/"},{componentChunkName:"component---src-templates-post-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"tutorial-steps-18-testing-redux-actions.json",path:"/tutorial/steps/18-testing-redux-actions/"},{componentChunkName:"component---src-templates-post-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"tutorial-steps-2-webpack.json",path:"/tutorial/steps/2-webpack/"},{componentChunkName:"component---src-templates-post-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"tutorial-steps-19-testing-redux-reducers.json",path:"/tutorial/steps/19-testing-redux-reducers/"},{componentChunkName:"component---src-templates-post-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"tutorial-steps-20-jest-component-configuration.json",path:"/tutorial/steps/20-jest-component-configuration/"},{componentChunkName:"component---src-templates-post-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"tutorial-steps-21-testing-the-map.json",path:"/tutorial/steps/21-testing-the-map/"},{componentChunkName:"component---src-templates-post-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"tutorial-steps-22-testing-connected-components.json",path:"/tutorial/steps/22-testing-connected-components/"},{componentChunkName:"component---src-templates-post-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"tutorial-steps-23-test-the-app-component.json",path:"/tutorial/steps/23-test-the-app-component/"},{componentChunkName:"component---src-templates-post-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"tutorial-steps-24-test-favourites-list.json",path:"/tutorial/steps/24-test-favourites-list/"},{componentChunkName:"component---src-templates-post-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"tutorial-steps-25-test-the-pointer.json",path:"/tutorial/steps/25-test-the-pointer/"},{componentChunkName:"component---src-templates-post-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"tutorial-steps-3-babel.json",path:"/tutorial/steps/3-babel/"},{componentChunkName:"component---src-templates-post-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"tutorial-steps-4-eslint-and-prettier.json",path:"/tutorial/steps/4-eslint-and-prettier/"},{componentChunkName:"component---src-templates-post-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"tutorial-steps-5-starting-react.json",path:"/tutorial/steps/5-starting-react/"},{componentChunkName:"component---src-templates-post-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"tutorial-steps-6-adding-the-map.json",path:"/tutorial/steps/6-adding-the-map/"},{componentChunkName:"component---src-templates-post-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"tutorial-steps-7-styling-with-postcss.json",path:"/tutorial/steps/7-styling-with-postcss/"},{componentChunkName:"component---src-templates-post-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"tutorial-steps-8-webpack-dev-server.json",path:"/tutorial/steps/8-webpack-dev-server/"},{componentChunkName:"component---src-templates-post-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"tutorial-steps-9-adding-points-to-the-map.json",path:"/tutorial/steps/9-adding-points-to-the-map/"},{componentChunkName:"component---src-pages-404-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"404.json",path:"/404/"},{componentChunkName:"component---src-pages-index-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"index.json",path:"/"},{componentChunkName:"component---src-pages-404-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"404-html.json",path:"/404.html"}]},178:function(n,t){"use strict";n.exports=function(n){var t=n.getNextQueuedResources,e=n.createResourceDownload,o=[],r=[],a=function(){var n=t();n&&(r.push(n),e(n))},u=function(n){switch(n.type){case"RESOURCE_FINISHED":r=r.filter(function(t){return t!==n.payload});break;case"ON_PRE_LOAD_PAGE_RESOURCES":o.push(n.payload.path);break;case"ON_POST_LOAD_PAGE_RESOURCES":o=o.filter(function(t){return t!==n.payload.page.path});break;case"ON_NEW_RESOURCES_ADDED":}setTimeout(function(){0===r.length&&0===o.length&&a()},0)};return{onResourcedFinished:function(n){u({type:"RESOURCE_FINISHED",payload:n})},onPreLoadPageResources:function(n){u({type:"ON_PRE_LOAD_PAGE_RESOURCES",payload:n})},onPostLoadPageResources:function(n){u({type:"ON_POST_LOAD_PAGE_RESOURCES",payload:n})},onNewResourcesAdded:function(){u({type:"ON_NEW_RESOURCES_ADDED"})},getState:function(){return{pagesLoading:o,resourcesDownloading:r}},empty:function(){o=[],r=[]}}}},0:function(n,t,e){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var r=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o])}return n},a=e(64),u=e(6),s=o(u),i=e(142),c=o(i),l=e(63),p=e(315),d=e(262),f=o(d),m=e(176),h=o(m),g=e(47),y=o(g),j=e(348),x=o(j),v=e(349),C=o(v),N=e(174),b=o(N),k=e(173),R=o(k),w=e(111),P=o(w);e(252),window.___emitter=y.default,P.default.addPagesArray(x.default),P.default.addProdRequires(R.default),window.asyncRequires=R.default,window.___loader=P.default,window.matchPath=l.matchPath;var _=C.default.reduce(function(n,t){return n[t.fromPath]=t,n},{}),E=function(n){var t=_[n];return null!=t&&(h.default.replace(t.toPath),!0)};E(window.location.pathname),(0,a.apiRunnerAsync)("onClientEntry").then(function(){function n(n){window.___history||(window.___history=n,n.listen(function(n,t){E(n.pathname)||(0,a.apiRunner)("onRouteUpdate",{location:n,action:t})}))}function t(n,t){var e=t.location.pathname,o=(0,a.apiRunner)("shouldUpdateScroll",{prevRouterProps:n,pathname:e});if(o.length>0)return o[0];if(n){var r=n.location.pathname;if(r===e)return!1}return!0}(0,a.apiRunner)("registerServiceWorker").length>0&&e(179);var o=function(n){function t(e){e.page.path===P.default.getPage(n).path&&(y.default.off("onPostLoadPageResources",t),clearTimeout(o),window.___history.push(n))}var e=_[n];if(e&&(n=e.toPath),window.location.pathname!==n){var o=setTimeout(function(){y.default.off("onPostLoadPageResources",t),y.default.emit("onDelayedLoadPageResources",{pathname:n}),window.___history.push(n)},1e3);P.default.getResourcesForPathname(n)?(clearTimeout(o),window.___history.push(n)):y.default.on("onPostLoadPageResources",t)}};window.___navigateTo=o,(0,a.apiRunner)("onRouteUpdate",{location:h.default.location,action:h.default.action});var i=(0,a.apiRunner)("replaceRouterComponent",{history:h.default})[0],d=function(n){var t=n.children;return s.default.createElement(l.Router,{history:h.default},t)},m=(0,l.withRouter)(b.default);P.default.getResourcesForPathname(window.location.pathname,function(){var e=function(){return(0,u.createElement)(i?i:d,null,(0,u.createElement)(p.ScrollContext,{shouldUpdateScroll:t},(0,u.createElement)(m,{layout:!0,children:function(t){return(0,u.createElement)(l.Route,{render:function(e){n(e.history);var o=t?t:e;return P.default.getPage(o.location.pathname)?(0,u.createElement)(b.default,r({page:!0},o)):(0,u.createElement)(b.default,{location:{page:!0,pathname:"/404.html"}})}})}})))},o=(0,a.apiRunner)("wrapRootComponent",{Root:e},e)[0];(0,f.default)(function(){return c.default.render(s.default.createElement(o,null),"undefined"!=typeof window?document.getElementById("___gatsby"):void 0,function(){(0,a.apiRunner)("onInitialClientRender")})})})})},349:function(n,t){n.exports=[]},179:function(n,t,e){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var r=e(47),a=o(r),u="/";u="/learning-react-and-redux-documentation/","serviceWorker"in navigator&&navigator.serviceWorker.register(u+"sw.js").then(function(n){n.addEventListener("updatefound",function(){var t=n.installing;console.log("installingWorker",t),t.addEventListener("statechange",function(){switch(t.state){case"installed":navigator.serviceWorker.controller?window.location.reload():(console.log("Content is now available offline!"),a.default.emit("sw:installed"));break;case"redundant":console.error("The installing service worker became redundant.")}})})}).catch(function(n){console.error("Error during service worker registration:",n)})},262:function(n,t,e){!function(t,e){n.exports=e()}("domready",function(){var n,t=[],e=document,o=e.documentElement.doScroll,r="DOMContentLoaded",a=(o?/^loaded|^c/:/^loaded|^i|^c/).test(e.readyState);return a||e.addEventListener(r,n=function(){for(e.removeEventListener(r,n),a=1;n=t.shift();)n()}),function(n){a?setTimeout(n,0):t.push(n)}})},2:function(n,t,e){"use strict";function o(){function n(n){var t=o.lastChild;return"SCRIPT"!==t.tagName?void("undefined"!=typeof console&&console.warn&&console.warn("Script is not a script",t)):void(t.onload=t.onerror=function(){t.onload=t.onerror=null,setTimeout(n,0)})}var t,o=document.querySelector("head"),r=e.e,a=e.s;e.e=function(o,u){var s=!1,i=!0,c=function(n){u&&(u(e,n),u=null)};return!a&&t&&t[o]?void c(!0):(r(o,function(){s||(s=!0,i?setTimeout(function(){c()}):c())}),void(s||(i=!1,n(function(){s||(s=!0,a?a[o]=void 0:(t||(t={}),t[o]=!0),c(!0))}))))}}o()},89:function(n,t){"use strict";var e={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,mixins:!0,propTypes:!0,type:!0},o={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},r=Object.defineProperty,a=Object.getOwnPropertyNames,u=Object.getOwnPropertySymbols,s=Object.getOwnPropertyDescriptor,i=Object.getPrototypeOf,c=i&&i(Object);n.exports=function n(t,l,p){if("string"!=typeof l){if(c){var d=i(l);d&&d!==c&&n(t,d,p)}var f=a(l);u&&(f=f.concat(u(l)));for(var m=0;m<f.length;++m){var h=f[m];if(!(e[h]||o[h]||p&&p[h])){var g=s(l,h);try{r(t,h,g)}catch(n){}}}return t}return t}},350:function(n,t){function e(n){return n=n||Object.create(null),{on:function(t,e){(n[t]||(n[t]=[])).push(e)},off:function(t,e){n[t]&&n[t].splice(n[t].indexOf(e)>>>0,1)},emit:function(t,e){(n[t]||[]).map(function(n){n(e)}),(n["*"]||[]).map(function(n){n(t,e)})}}}n.exports=e},91:function(n,t){function e(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function r(n){if(l===setTimeout)return setTimeout(n,0);if((l===e||!l)&&setTimeout)return l=setTimeout,setTimeout(n,0);try{return l(n,0)}catch(t){try{return l.call(null,n,0)}catch(t){return l.call(this,n,0)}}}function a(n){if(p===clearTimeout)return clearTimeout(n);if((p===o||!p)&&clearTimeout)return p=clearTimeout,clearTimeout(n);try{return p(n)}catch(t){try{return p.call(null,n)}catch(t){return p.call(this,n)}}}function u(){h&&f&&(h=!1,f.length?m=f.concat(m):g=-1,m.length&&s())}function s(){if(!h){var n=r(u);h=!0;for(var t=m.length;t;){for(f=m,m=[];++g<t;)f&&f[g].run();g=-1,t=m.length}f=null,h=!1,a(n)}}function i(n,t){this.fun=n,this.array=t}function c(){}var l,p,d=n.exports={};!function(){try{l="function"==typeof setTimeout?setTimeout:e}catch(n){l=e}try{p="function"==typeof clearTimeout?clearTimeout:o}catch(n){p=o}}();var f,m=[],h=!1,g=-1;d.nextTick=function(n){var t=new Array(arguments.length-1);if(arguments.length>1)for(var e=1;e<arguments.length;e++)t[e-1]=arguments[e];m.push(new i(n,t)),1!==m.length||h||r(s)},i.prototype.run=function(){this.fun.apply(null,this.array)},d.title="browser",d.browser=!0,d.env={},d.argv=[],d.version="",d.versions={},d.on=c,d.addListener=c,d.once=c,d.off=c,d.removeListener=c,d.removeAllListeners=c,d.emit=c,d.prependListener=c,d.prependOnceListener=c,d.listeners=function(n){return[]},d.binding=function(n){throw new Error("process.binding is not supported")},d.cwd=function(){return"/"},d.chdir=function(n){throw new Error("process.chdir is not supported")},d.umask=function(){return 0}},279:function(n,t,e){e(2),n.exports=function(n){return e.e(0x9427c64ab85d,function(t,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return e(181)})})}},280:function(n,t,e){e(2),n.exports=function(n){return e.e(35783957827783,function(t,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return e(182)})})}},281:function(n,t,e){e(2),n.exports=function(n){return e.e(0xb1abc741118f,function(t,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return e(183)})})}}});
//# sourceMappingURL=app-7dc438bd67617a981ba3.js.map