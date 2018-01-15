webpackJsonp([0xbc16c3d306ee],{324:function(e,t){e.exports={data:{markdownRemark:{html:'<p>Now that we have the pointers displayed on the map, the next step is to make\nthem clickable so that we can display the "details" information from our data in\na popup over each point.</p>\n<p>Let\'s jump back into the <code>Pointer.jsx</code> file and add some markup to our <code>render</code>\nmethod that will display the information. Update the <code>Pointer</code> class so that it\nlooks like:</p>\n<pre><code class="language-jsx">// app/js/components/Pointer/Pointer.jsx\n\nclass Pointer extends Component {\n  render() {\n    const { x, y, details } = this.props;\n    const { name, house, words } = details;\n\n    return (\n      &#x3C;div className={styles.pointer} style={{ left: x, top: y }}>\n        &#x3C;div className={styles.hidden}>\n          &#x3C;header className={styles.headline}>\n            &#x3C;h3>{name}&#x3C;/h3>\n            &#x3C;a href="#" className={styles.close}>\n              &#x26;times;\n            &#x3C;/a>\n          &#x3C;/header>\n\n          &#x3C;p>House: {house}&#x3C;/p>\n          &#x3C;p>Words: {words}&#x3C;/p>\n        &#x3C;/div>\n      &#x3C;/div>\n    );\n  }\n}\n</code></pre>\n<p>We must now also handle the <code>details</code> prop that we are accessing, so let\'s add\nit to the <code>propTypes</code> object.</p>\n<pre><code class="language-diff">Pointer.propTypes = {\n+ details: PropTypes.object.isRequired,\n  x: PropTypes.number.isRequired,\n  y: PropTypes.number.isRequired\n};\n</code></pre>\n<p>Next we will add new styles the <code>Pointer.css</code> file for these new elements. Add\nthe following new rules after the existing ones.</p>\n<pre><code class="language-css">/* app/js/components/Pointer/Pointer.css */\n\n.hidden {\n  display: none;\n}\n\n.details {\n  cursor: default;\n  background: var(--detailsBackground);\n  width: 300px;\n  border-radius: var(--pointerSize);\n  padding: 10px;\n  color: #fff;\n  position: relative;\n  top: -3px;\n  left: -3px;\n  box-shadow: inset 0 0 8px 3px rgba(0, 0, 0, 0.2);\n  border: 1px solid #555;\n\n  h3 {\n    margin: 5px 0;\n  }\n\n  p {\n    margin: 10px 0;\n    font-size: 14px;\n\n    &#x26;:last-child {\n      margin-bottom: 5px;\n    }\n  }\n}\n\n.headline {\n  display: flex;\n  justify-content: space-between;\n}\n\n.close {\n  align-self: center;\n  text-decoration: none;\n  color: #fff;\n  font-size: 20px;\n  padding: 0;\n  margin: 0;\n}\n</code></pre>\n<p>Refresh your browser and you will see nothing has changed because the wrapper\n<code>&#x3C;div /></code> has the <code>.hidden</code> style. Next we will work on toggling the information\nby clicking on the pointer.</p>\n<h2>Working with component state</h2>\n<p>We will track weather a popup should be shown or not be using state within the\ncomponent. Let\'s setup the default state in the component constructor. We will\nuse a state key <code>open</code> which will initially be false. Add the following\n<code>constructor</code> method above the <code>render</code> method.</p>\n<p>When adding a constructor you must <em>always</em> call <code>super</code> and pass the props to\nthe parent component.</p>\n<pre><code class="language-jsx">// app/js/components/Pointer/Pointer.jsx\n\nconstructor (props) {\n  super(props);\n\n  this.state = {\n    open: false\n  };\n}\n</code></pre>\n<p>Next we will add a <code>toggle</code> method which will switch the state when called. Add\nthis new method in-between the <code>constructor</code> and <code>render</code> methods.</p>\n<pre><code class="language-jsx">// app/js/components/Pointer/Pointer.jsx\n\ntoggle (event) {\n  event.preventDefault();\n\n  if (event.target === event.currentTarget) {\n    this.setState({ open: !this.state.open });\n  }\n}\n</code></pre>\n<p>This method will be called as an <code>onClick</code> handler, so it receives an <code>event</code>\nargument. This is not a native browser event but an event transformed to a React\n<code>SyntheticEvent</code> which is normalized so that it can be interacted with\ncross-browser <sup id="fnref-1"><a href="#fn-1" class="footnote-ref">1</a></sup>.</p>\n<p>We then call <code>preventDefault</code> on the event so that the default action (in this\ncase it will be a link click) does not bubble up to the browser.</p>\n<p>Next we check that the click is happening to the original element (DOM node)\nthat we specified.</p>\n<p>Finally we call the internal <code>setState</code> method which updates <code>this.state</code> and\ntriggers the life cycle <sup id="fnref-2"><a href="#fn-2" class="footnote-ref">2</a></sup> to run again (e.g. calling <code>componentDidUpdate</code> and\n<code>render</code> for you).</p>\n<p>Now we have to bind the <code>toggle</code> method to <code>this</code> in the constructor so that the\nmethod is in the context of the component instance instead of <code>window</code>.</p>\n<pre><code class="language-diff">constructor (props) {\n  super(props);\n\n  this.state = {\n    open: false\n  };\n\n+ this.toggle = this.toggle.bind(this);\n}\n</code></pre>\n<p>Now we will apply the <code>onClick</code> handlers to the pointer itself and the close\nlink so that clicking either of these elements will call the <code>toggle</code> method.\nUpdate the <code>render</code> method to add the <code>onClick</code> handlers.</p>\n<pre><code class="language-diff">// app/js/components/Pointer/Pointer.jsx\n\nreturn (\n-  &#x3C;div className={styles.pointer} style={{ left: x, top: y }}>\n+  &#x3C;div className={styles.pointer} style={{ left: x, top: y }} onClick={this.toggle}>\n    &#x3C;div className={styles.hidden}>\n      &#x3C;header className={styles.headline}>\n        &#x3C;h3>{name}&#x3C;/h3>\n-        &#x3C;a href="#" className={styles.close}>\n+        &#x3C;a href="#" className={styles.close} onClick={this.toggle}>\n          &#x26;times;\n        &#x3C;/a>\n      &#x3C;/header>\n\n      &#x3C;p>House: {house}&#x3C;/p>\n      &#x3C;p>Words: {words}&#x3C;/p>\n    &#x3C;/div>\n  &#x3C;/div>\n);\n</code></pre>\n<p>If you are using the\n<a href="https://github.com/facebook/react-devtools">React Developer Tools</a> you may see\nthat clicking on the pointer now toggles the <code>open</code> state but still there is no\npopup shown. This is because our details only has the class name <code>.hidden</code>. We\nwill now toggle the class names using the aptly named <code>classnames</code> library.</p>\n<h2>Working with class names</h2>\n<p>Let\'s go ahead and install the\n<a href="https://github.com/JedWatson/classnames">classnames</a> library that allows us to\nconditionally apply classes based on state. First we will install it via <code>yarn</code>.</p>\n<pre><code class="language-bash">yarn add classnames\n</code></pre>\n<p>We then import it at the top of <code>Pointer.jsx</code>.</p>\n<pre><code class="language-diff">// app/js/components/Pointer/Pointer.jsx\n\nimport React, { Component } from \'react\';\nimport PropTypes from \'prop-types\';\n+ import classNames from \'classnames\';\n</code></pre>\n<p>Finally in the <code>render</code> method we will build a custom set of class names to pass\nto our React component. Update the <code>render</code> method with this new code:</p>\n<pre><code class="language-diff">// app/js/components/Pointer/Pointer.jsx\n\nrender () {\n  const { x, y, details } = this.props;\n  const { name, house, words } = details;\n+ const detailsClasses = classNames(styles.details, {\n+   [styles.hidden]: !this.state.open\n+ });\n\n  return (\n    &#x3C;div\n      className={styles.pointer}\n      style={{ left: x, top: y }}\n      onClick={this.toggle}\n    >\n-     &#x3C;div className={styles.hidden}>\n+     &#x3C;div className={detailsClasses}>\n        &#x3C;header className={styles.headline}>\n          &#x3C;h3>{name}&#x3C;/h3>\n          &#x3C;a href="#" className={styles.close}>\n            &#x26;times;\n          &#x3C;/a>\n        &#x3C;/header>\n\n        &#x3C;p>House: {house}&#x3C;/p>\n        &#x3C;p>Words: {words}&#x3C;/p>\n      &#x3C;/div>\n    &#x3C;/div>\n  );\n}\n</code></pre>\n<p>Here we have asked <code>classnames</code> to always apply the <code>.details</code> style but\nconditionally add the <code>.hidden</code> class only is <code>this.state.open</code> is <code>false</code>.\n(Note: We have to use the ES6 <code>[]</code> object assignment syntax instead of just\n<code>hidden:</code> because we are using CSS modules - the class name is not <code>.hidden</code> but\na generated hash).</p>\n<p>Try it out! Now in your browser clicking on a pointer will open the details view\nand clicking the <code>×</code> link will close it again.</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/learning-react-and-redux-documentation/static/map-with-popup-2edd4fa7f1ec8009ac301e6cc8205fec-e3cf2.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 770px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 50.129870129870135%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsSAAALEgHS3X78AAACWElEQVQoz1WSe0/aABTF+QpzIvK0CAJq4gYEFZKFDWMWHaiDacobCoUim+zB0I1HoeUtELJkn/fstmRm++OmvUnvr+eeczVrG3psGMxPZbLaYXO6EHoTgHnbDt/xMSbDFn42KhiKVfye1jCTq1j0q2Cv38K+dwCrYxd6ixXrm0ZonusM0OpN0BlXwE3TFrYUkM8NA310eOSBeJ9Dq5GF2EjjsVemPovloIJRp4hGLYFa5QaX4aA6q1EUKlCd0QKL1Qr2wylc+3s49L1E5DwILh3Gl+oNml+T6Ld41O9YjHo8pt0S5pKAQZtHu54GlwqrwjTPtJv4q1JRyGWucHcbR4MG5SaHcVfAVCpjTorEhxwmBJn3BSyp5vKtqvIq8hpe74E6T0CdurvezMC566KBW0hNHr1mkYBFUlWkPo9CPopUPIJCLgo+H0M2eUl1gRT7Dh6PG2ZmewVUvFO8CgaPEQr58Wt6B5kgcruEzj2HVj2Db5/iYFkW6VQKJychUuP9r/yBABjbDgFpZQVmczgoQQGPQ1qBVnogT8ZSER/LUbS/Z1ApvEcymUIikUA4HMbZ2TkCBPkXqgDXtBsrhT4KYCKXIXU4SCIPucNjLBbw43McXfKtRT8QuCgZH6GfXEPgY+ALUeQpMDZ2CtuOkwK1r85GCcPMWOH3ewmUh0xABb6QSpi2OSzpfUbwBT2H1M+ULSiQQa9AV/AKoeARPO591TY15XW9UW0MFgZcNkIDVQxEOglZQIvWndF5jEQOoy6PfidHyi4wHQgYdvNwe16AsTthYmwqTDnBP7j+gPNpeZnSAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="Img: Showing the popup on the map"\n        title=""\n        src="/learning-react-and-redux-documentation/static/map-with-popup-2edd4fa7f1ec8009ac301e6cc8205fec-e3cf2.png"\n        srcset="/learning-react-and-redux-documentation/static/map-with-popup-2edd4fa7f1ec8009ac301e6cc8205fec-15673.png 250w,\n/learning-react-and-redux-documentation/static/map-with-popup-2edd4fa7f1ec8009ac301e6cc8205fec-5f7be.png 500w,\n/learning-react-and-redux-documentation/static/map-with-popup-2edd4fa7f1ec8009ac301e6cc8205fec-e3cf2.png 770w"\n        sizes="(max-width: 770px) 100vw, 770px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<h2>A note on binding click handlers</h2>\n<p>It would in theory be possible to call the <code>.bind(this)</code> the method inside the\n<code>onClick</code> handler, or elsewhere inside of the <code>render</code> method but this is an\nanti-pattern because React component <code>render</code> methods should be pure. The idea\nof React is not to "waste" renders by only changing the things that have really\nchanged but since calling <code>bind</code> creates a new function, every time render is\ncalled new functions are being created, making it impure. React can then never\nknow for sure what has changed and will always call the <code>render</code> method even if\nthe DOM would have been identical <sup id="fnref-3"><a href="#fn-3" class="footnote-ref">3</a></sup>.</p>\n<p>For that reason, we always bind functions that are used within <code>render</code> in the\n<code>constructor</code> instead.</p>\n<hr>\n<ul>\n<li><sup id="fn-1">[1]</sup>: <a href="https://reactjs.org/docs/events.html">https://reactjs.org/docs/events.html</a></li>\n<li><sup id="fn-3">[2]</sup>: <a href="https://reactjs.org/docs/state-and-lifecycle.html">https://reactjs.org/docs/state-and-lifecycle.html</a></li>\n<li><sup id="fn-2">[3]</sup>:\n<a href="https://medium.com/@esamatti/react-js-pure-render-performance-anti-pattern-fb88c101332f">https://medium.com/@esamatti/react-js-pure-render-performance-anti-pattern-fb88c101332f</a></li>\n</ul>',frontmatter:{title:"Showing the Details of each Point",step:10}},allMarkdownRemark:{edges:[{node:{fields:{slug:"/tutorial/getting-started/"},frontmatter:{title:"Getting Started",step:null}}},{node:{fields:{slug:"/tutorial/links/"},frontmatter:{title:"Links",step:null}}},{node:{fields:{slug:"/tutorial/steps/1-setup-package/"},frontmatter:{title:"Generate the package.json",step:1}}},{node:{fields:{slug:"/tutorial/steps/10-pointer-details/"},frontmatter:{title:"Showing the Details of each Point",step:10}}},{node:{fields:{slug:"/tutorial/steps/11-favourite-places/"},frontmatter:{title:"Favourite Places",step:11}}},{node:{fields:{slug:"/tutorial/steps/12-favourites-list/"},frontmatter:{title:"Favourites List",step:12}}},{node:{fields:{slug:"/tutorial/steps/13-adding-redux/"},frontmatter:{title:"Starting with Redux",step:13}}},{node:{fields:{slug:"/tutorial/steps/14-managing-favourites-with-redux/"},frontmatter:{title:"Managing Favourites with Redux",step:14}}},{node:{fields:{slug:"/tutorial/steps/15-removing-favourites-from-the-list/"},frontmatter:{title:"Removing Favourites from the List",step:15}}},{node:{fields:{slug:"/tutorial/steps/16-ids-for-points/"},frontmatter:{title:"Adding IDs to the Points Data",step:16}}},{node:{fields:{slug:"/tutorial/steps/17-testing-with-jest/"},frontmatter:{title:"Testing with Jest",step:17}}},{node:{fields:{slug:"/tutorial/steps/18-testing-redux-actions/"},frontmatter:{title:"Testing Redux Actions",step:18}}},{node:{fields:{slug:"/tutorial/steps/2-webpack/"},frontmatter:{title:"Setting up Webpack",step:2}}},{node:{fields:{slug:"/tutorial/steps/19-testing-redux-reducers/"},frontmatter:{title:"Testing Redux Reducers",step:19}}},{node:{fields:{slug:"/tutorial/steps/20-jest-component-configuration/"},frontmatter:{title:"Preparing Component testing with Jest",step:20}}},{node:{fields:{slug:"/tutorial/steps/21-testing-the-map/"},frontmatter:{title:"Testing the Map",step:21}}},{node:{fields:{slug:"/tutorial/steps/22-testing-connected-components/"},frontmatter:{title:"Testing Connected Components",step:22}}},{node:{fields:{slug:"/tutorial/steps/23-test-the-app-component/"},frontmatter:{title:"Testing the App Component",step:23}}},{node:{fields:{slug:"/tutorial/steps/24-test-favourites-list/"},frontmatter:{title:"Testing the Favourites List",step:24}}},{node:{fields:{slug:"/tutorial/steps/25-test-the-pointer/"},frontmatter:{title:"Testing the Pointer",step:25}}},{node:{fields:{slug:"/tutorial/steps/3-babel/"},frontmatter:{title:"Setting up Babel",step:3}}},{node:{fields:{slug:"/tutorial/steps/4-eslint-and-prettier/"},frontmatter:{title:"ESLint and Prettier",step:4}}},{node:{fields:{slug:"/tutorial/steps/5-starting-react/"},frontmatter:{title:"Starting with React",step:5}}},{node:{fields:{slug:"/tutorial/steps/6-adding-the-map/"},frontmatter:{title:"Adding the Map",step:6}}},{node:{fields:{slug:"/tutorial/steps/7-styling-with-postcss/"},frontmatter:{title:"CSS Modules and PostCSS",step:7}}},{node:{fields:{slug:"/tutorial/steps/8-webpack-dev-server/"},frontmatter:{title:"Webpack Dev Server",step:8}}},{node:{fields:{slug:"/tutorial/steps/9-adding-points-to-the-map/"},frontmatter:{title:"Adding Points to the Map",step:9}}}]}},pathContext:{slug:"/tutorial/steps/10-pointer-details/"}}}});
//# sourceMappingURL=path---tutorial-steps-10-pointer-details-496778f2383d0d904725.js.map