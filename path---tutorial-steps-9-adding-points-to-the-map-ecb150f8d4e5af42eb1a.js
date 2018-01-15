webpackJsonp([0x967dcf7a4bb4],{347:function(e,t){e.exports={data:{markdownRemark:{html:'<p>We will now begin to add some pointers to the map. This will involve defining\ndata about what we want to show on the map and where; then building a new React\ncomponent that will display an icon at the positions we specified on the map.</p>\n<h2>Defining the pointer data</h2>\n<p>We are going to use a predefined list of "points" to apply to the map. You can\nimagine that we could load this data from a web server at some point but for now\nwe will use a static object.</p>\n<p>This data will live inside of the Map component, since it will be responsible\nfor rendering the pointers to the map.</p>\n<p>Take the following data and copy it to the <code>Map.jx</code> file, above the <code>Map</code>\nconstant.</p>\n<pre><code class="language-js">const points = [\n  {\n    x: 450,\n    y: 110,\n    details: {\n      name: \'The Wall\',\n      house: "Night\'s Watch",\n      words: \'Night gathers, and now my watch begins.\'\n    }\n  },\n  {\n    x: 375,\n    y: 355,\n    details: {\n      name: \'Winterfell\',\n      house: \'Stark\',\n      words: \'Winter is Coming\'\n    }\n  },\n  {\n    x: 345,\n    y: 705,\n    details: {\n      name: \'The Twins\',\n      house: \'Frey\',\n      words: \'We Stand Together\'\n    }\n  },\n  {\n    x: 155,\n    y: 775,\n    details: {\n      name: \'The Iron Islands\',\n      house: \'Greyjoy\',\n      words: \'We Do Not Sow\'\n    }\n  },\n  {\n    x: 150,\n    y: 945,\n    details: {\n      name: \'Casterly Rock\',\n      house: \'Lannister\',\n      words: \'Hear me Roar!\'\n    }\n  },\n  {\n    x: 545,\n    y: 1000,\n    details: {\n      name: "King\'s Landing",\n      house: \'Baratheon\',\n      words: \'Ours is the Fury\'\n    }\n  },\n  {\n    x: 250,\n    y: 1190,\n    details: {\n      name: \'Highgarden\',\n      house: \'Tyrell\',\n      words: \'Growing Strong\'\n    }\n  }\n];\n</code></pre>\n<h2>Pointer component</h2>\n<p>Next we will add a <code>&#x3C;Pointer /></code> component that will show each location on the\nmap. When clicking on this pointer a popup window will show with the extra\ndetails for each location.</p>\n<p>Since this component will have to manage state, we will not be using a stateless\nfunctional component but instead a class that extends <code>React.Component</code>.</p>\n<p>We will start by adding our <code>index.js</code> file in the directory for the Pointer\ncomponent that will manage our imports and exports.</p>\n<pre><code class="language-js">// app/js/components/Pointer/index.js\n\nexport { default } from \'./Pointer\';\n</code></pre>\n<p>Next we will create the <code>Pointer</code> class in the <code>Pointer.jsx</code> file. For now let\'s\nadd a simple render method that will return a <code>&#x3C;div /></code> that will control the\nstyles for our pointer. We will add a <code>style</code> prop that sets the <code>left</code> and\n<code>top</code> properties of the pointer which we read form the <code>x</code> and <code>y</code> values of our\ndata.</p>\n<pre><code class="language-jsx">// app/js/components/Pointer/Pointer.jsx\n\nimport React, { Component } from \'react\';\n\nclass Pointer extends Component {\n  render() {\n    const { x, y } = this.props;\n\n    return &#x3C;div style={{ left: x, top: y }} />;\n  }\n}\n\nexport default Pointer;\n</code></pre>\n<p>Notice that we are using the ES6 destructuring assignment <sup id="fnref-1"><a href="#fn-1" class="footnote-ref">1</a></sup> here to pull the\n<code>x</code> and <code>y</code> props into constants. This is a nice shorthand instead of having to\naccess the values manually.</p>\n<pre><code class="language-js">// Old\nvar x = this.props.x,\n  y = this.props.y;\n\n// New\nconst { x, y } = this.props;\n</code></pre>\n<h3>Adding PropTypes</h3>\n<p>At this point, ESLint should be highlighting the <code>x</code> and <code>y</code> values inside of\nyour editor on line 8 in red because there is an error here. React has a concept\nof "Prop Types" which allows you to specify for each component what data type\nyou expect for each of the incoming props. When you then supply an invalid type\n(for example, a number instead of a string), React will warn you in the console\n<sup id="fnref-2"><a href="#fn-2" class="footnote-ref">2</a></sup>.</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/learning-react-and-redux-documentation/static/prop-types-wrong-type-c4f70d8b5654a4d3f831e6f1945c0d26-f81aa.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 692px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 12.716763005780345%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAADCAYAAACTWi8uAAAACXBIWXMAAAsSAAALEgHS3X78AAAAcUlEQVQI15WOSw5AQBAF5/43k2CMb2J8Q8iwwNJGaZkTWFQ6/Un1U48xkGcQhVAUEARgaxh66FqYZ1hXGEeZDTBN0MuuaXzvHM9xcG8bzloUWkOWCiLVsacqQQ44z98oTCLfLCyLJOp8gq/uIryu38IXk2Xio+fS9JAAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="Img: Prop Types warning when wrong type is given"\n        title=""\n        src="/learning-react-and-redux-documentation/static/prop-types-wrong-type-c4f70d8b5654a4d3f831e6f1945c0d26-f81aa.png"\n        srcset="/learning-react-and-redux-documentation/static/prop-types-wrong-type-c4f70d8b5654a4d3f831e6f1945c0d26-27990.png 250w,\n/learning-react-and-redux-documentation/static/prop-types-wrong-type-c4f70d8b5654a4d3f831e6f1945c0d26-c6f9e.png 500w,\n/learning-react-and-redux-documentation/static/prop-types-wrong-type-c4f70d8b5654a4d3f831e6f1945c0d26-f81aa.png 692w"\n        sizes="(max-width: 692px) 100vw, 692px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>Let\'s add a Prop Types definition to this component in order to remove the\nerrors. The <code>PropTypes</code> class lives in a node module <code>prop-types</code>. Since this is\na dependency of <code>React</code> itself we already have this installed so now we can\nsimply import <code>PropTypes</code> and set the <code>propTypes</code> value of our class.</p>\n<p>We will specify that <code>Pointer</code> has <code>x</code> and <code>y</code> props that should be numbers and\nare not optional. <code>PropTypes</code> has an API for more complex data types, such as\nunions of types. Look at the documentation for more complex examples.</p>\n<pre><code class="language-diff">// app/js/components/Pointer/Pointer.jsx\n\nimport React, { Component } from \'react\';\n+ import PropTypes from \'prop-types\';\n\nclass Pointer extends Component {\n  ...\n}\n\n+ Pointer.propTypes = {\n+   x: PropTypes.number.isRequired,\n+   y: PropTypes.number.isRequired\n+ }\n\nexport default Pointer;\n</code></pre>\n<h2>Styling the pointer</h2>\n<p>Next we can add a CSS module to manage the styles of the pointer itself. We will\nbe using a background image, so go ahead and copy the <code>pointer.png</code> image from\n<code>.assets</code> into our application.</p>\n<pre><code class="language-bash">cp .assets/pointer.png app/img\n</code></pre>\n<p>Let\'s create a CSS module for the Pointer with some variables and basic styles.\nNotice that we set <code>position: absolute</code> on the pointer. Together with the <code>top</code>\nand <code>left</code> styles that are applied in the React component, this is how the\nPointer will be placed on the map.</p>\n<pre><code class="language-css">/* app/js/components/Pointer/Pointer.css */\n\n:root {\n  --pointerColor: #000;\n  --pointerSize: 20px;\n  --detailsBackground: #333;\n}\n\n.pointer {\n  position: absolute;\n  background: var(--pointerColor);\n  width: var(--pointerSize);\n  height: var(--pointerSize);\n  border-radius: var(--pointerSize);\n  box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.5);\n  background: url(\'../../../img/pointer.png\') center center no-repeat;\n  background-size: var(--pointerSize) var(--pointerSize);\n\n  &#x26;:hover {\n    cursor: pointer;\n  }\n}\n</code></pre>\n<p>Finally we will import the styles into the Pointer component and apply the\n<code>.pointer</code> class name to the pointer <code>&#x3C;div /></code>.</p>\n<pre><code class="language-diff">// app/js/components/Pointer/Pointer.jsx\n\nimport React, { Component } from \'react\';\nimport PropTypes from \'prop-types\';\n\n+ import styles from \'./Pointer.css\';\n\nclass Pointer extends Component {\n  render() {\n    const { x, y } = this.props;\n\n-   return &#x3C;div style={{ left: x, top: y }} />;\n+   return &#x3C;div className={styles.pointer} style={{ left: x, top: y }} />;\n  }\n}\n\n...\n</code></pre>\n<h2>Wiring the Pointer to the Map</h2>\n<p>Let\'s see if our <code>&#x3C;Pointer /></code> component is working by adding instances of them\nto the map. We will update the <code>&#x3C;Map /></code> component to import <code>Pointer</code> and then\nfor each item in the points data, render a <code>&#x3C;Pointer /></code> component inside of the\nmap.</p>\n<pre><code class="language-diff">// app/js/components/Map/Map.jsx\nimport React from \'react\';\n\n+ import Pointer from \'../Pointer\';\nimport styles from \'./Map.css\';\n\n...\n\nconst Map = () => {\n- return &#x3C;div className={styles.map} />;\n+ return (\n+   &#x3C;div className={styles.map}>\n+     {points.map((point, index) => &#x3C;Pointer {...point} key={index} />)}\n+   &#x3C;/div>\n+ );\n};\n</code></pre>\n<p>In this new code we are mapping over the <code>points</code> data array and for every\npoint, we return a <code>&#x3C;Pointer /></code> and we destructure the <code>point</code> object as the\nprops. This is the same as passing:</p>\n<pre><code class="language-jsx">&#x3C;Pointer x={point.x} y={point.y} details={point.details} />;\n</code></pre>\n<p>Finally we pass a <code>key</code> prop. The <code>key</code> is important when you are mapping over\ndata, this allows React to differentiate between each item in the list so that\nit can determine which ones have updated <sup id="fnref-3"><a href="#fn-3" class="footnote-ref">3</a></sup>. The key value must be unique for\neach element in the list, so we use the <code>index</code> of the array item that we are\ncurrently on. If you forget the <code>key</code> prop in a list, React will show a warning\n(and also ESLint will consider this an error and warn you too.)</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/learning-react-and-redux-documentation/static/missing-key-prop-warning-2a382ea7a66553298a45357d328ac436-f81aa.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 692px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 14.017341040462428%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAADCAYAAACTWi8uAAAACXBIWXMAAAsSAAALEgHS3X78AAAAgElEQVQI15WOMQ6DMBRDuf/NgAGxIQQkgWRqU9KpQ6W8Oik9QIenHyuW7QZjwDnYd9g2CB6OQ9qRvd7Wksu/LtLZGnLxFrx858ltXUnST9EwTdD30HWihVYMQw19KehxERX4u3eNePuruISWshAgJQWW9nGkLl0WmOfv0hir4V8+NVfhHPnXV/oAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="Img: Warning given if key prop is missing"\n        title=""\n        src="/learning-react-and-redux-documentation/static/missing-key-prop-warning-2a382ea7a66553298a45357d328ac436-f81aa.png"\n        srcset="/learning-react-and-redux-documentation/static/missing-key-prop-warning-2a382ea7a66553298a45357d328ac436-27990.png 250w,\n/learning-react-and-redux-documentation/static/missing-key-prop-warning-2a382ea7a66553298a45357d328ac436-c6f9e.png 500w,\n/learning-react-and-redux-documentation/static/missing-key-prop-warning-2a382ea7a66553298a45357d328ac436-f81aa.png 692w"\n        sizes="(max-width: 692px) 100vw, 692px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<h2>Next Steps</h2>\n<p>At this point if you look at the project in the browser, you will see yellow\nmarkers at different locations over the map.</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/learning-react-and-redux-documentation/static/map-with-first-pointers-d5934c286ba698be76e5f4a7aad8b289-61116.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 776px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 49.097938144329895%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsSAAALEgHS3X78AAACiklEQVQoz0WS7S+bURjG+ydsNqqtqpZOW0zGLEKFDdnYlgzDvFXL0JbplGg1VX2h1KNMbMk2i0jE7MM+sNWWWWK+C//Sb+d5ZNmHk/vknOf5neu67luVm2cgR6tnyu/n7OwPF5fnXFyccynqwZd9wpEI29sf2NnZ4cfPDJnMoajfODz6So3dTpGlhM7uLsrvVKDW6VHdUGsVoEZfgFoGT/s5PT0hc3xERVU10XiM9LrE54M9vh8d8Pt4l5NfGSQpSb7JzIOmRqRUnPqGOjRCnCorR4MM1eYblQO5NjQ2UVZRhbHYhtFsoa29nbdbEh/fp9nf3WDvU4rtdzEBqcV0y0ZnRwtmi4VsTR6q6zm5isJ/S1dQSLGthKet9eQVmKipsxObnyIcGCMV9bC1PMFq3M1mcgJX/xPKK+9itpZiMBVdAWV12Rqd8J+vHOgFJE9ALTYrOoMJu/0esaCTuel+IrMDrERGWAg42Vh0K/vIrJOFoIuu9ibkfigKZagMNJhMDPa0UlZ+m6b71Tj7HuPzdDL9qpvorINocFgBr8RHkKKjpIXSpIAGfD286Gi+UngtW83/xhh4Pd5LaMZFyN9PPDTE8oKb1cQYa0kP84FBpEUPG0kv6wk36YSXpfAQj5rtlJbZFIYqSwBlstwMa4lV/DBOIiysCDWL8yMshl8KsIP1pINEZFjARX4pn/jOKx520P6sEUOhGa08JcKlSvatMxjpaGum+/lDNlcnhRIXyaib6NwQwak+lgR4U5phOT6q3L9JTSIJdSF/L8VWq5KdvG7m6lDJ81daVkIq7iW15CGxIDKRc4oN4+htITwzoEDjoWERvmjGio+1pQmxd4iHnNTWVIr51SpA2e1f5B2U1uxTS5EAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="Img: Map with the pointers"\n        title=""\n        src="/learning-react-and-redux-documentation/static/map-with-first-pointers-d5934c286ba698be76e5f4a7aad8b289-61116.png"\n        srcset="/learning-react-and-redux-documentation/static/map-with-first-pointers-d5934c286ba698be76e5f4a7aad8b289-049f8.png 250w,\n/learning-react-and-redux-documentation/static/map-with-first-pointers-d5934c286ba698be76e5f4a7aad8b289-7d3fb.png 500w,\n/learning-react-and-redux-documentation/static/map-with-first-pointers-d5934c286ba698be76e5f4a7aad8b289-61116.png 776w"\n        sizes="(max-width: 776px) 100vw, 776px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>The next step will be to use the internal <code>state</code> of a React component to hide\nor show the details of each pointer.</p>\n<hr>\n<ul>\n<li><sup id="fn-1">[1]</sup>:\n<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment</a></li>\n<li><sup id="fn-2">[2]</sup>:\n<a href="https://reactjs.org/docs/typechecking-with-proptypes.html">https://reactjs.org/docs/typechecking-with-proptypes.html</a></li>\n<li><sup id="fn-3">[3]</sup>: <a href="https://reactjs.org/docs/lists-and-keys.html#keys">https://reactjs.org/docs/lists-and-keys.html#keys</a></li>\n</ul>',frontmatter:{title:"Adding Points to the Map",step:9}},allMarkdownRemark:{edges:[{node:{fields:{slug:"/tutorial/getting-started/"},frontmatter:{title:"Getting Started",step:null}}},{node:{fields:{slug:"/tutorial/links/"},frontmatter:{title:"Links",step:null}}},{node:{fields:{slug:"/tutorial/steps/1-setup-package/"},frontmatter:{title:"Generate the package.json",step:1}}},{node:{fields:{slug:"/tutorial/steps/11-favourite-places/"},frontmatter:{title:"Favourite Places",step:11}}},{node:{fields:{slug:"/tutorial/steps/10-pointer-details/"},frontmatter:{title:"Showing the Details of each Point",step:10}}},{node:{fields:{slug:"/tutorial/steps/12-favourites-list/"},frontmatter:{title:"Favourites List",step:12}}},{node:{fields:{slug:"/tutorial/steps/13-adding-redux/"},frontmatter:{title:"Starting with Redux",step:13}}},{node:{fields:{slug:"/tutorial/steps/15-removing-favourites-from-the-list/"},frontmatter:{title:"Removing Favourites from the List",step:15}}},{node:{fields:{slug:"/tutorial/steps/14-managing-favourites-with-redux/"},frontmatter:{title:"Managing Favourites with Redux",step:14}}},{node:{fields:{slug:"/tutorial/steps/17-testing-with-jest/"},frontmatter:{title:"Testing with Jest",step:17}}},{node:{fields:{slug:"/tutorial/steps/16-ids-for-points/"},frontmatter:{title:"Adding IDs to the Points Data",step:16}}},{node:{fields:{slug:"/tutorial/steps/18-testing-redux-actions/"},frontmatter:{title:"Testing Redux Actions",step:18}}},{node:{fields:{slug:"/tutorial/steps/20-jest-component-configuration/"},frontmatter:{title:"Preparing Component testing with Jest",step:20}}},{node:{fields:{slug:"/tutorial/steps/19-testing-redux-reducers/"},frontmatter:{title:"Testing Redux Reducers",step:19}}},{node:{fields:{slug:"/tutorial/steps/2-webpack/"},frontmatter:{title:"Setting up Webpack",step:2}}},{node:{fields:{slug:"/tutorial/steps/21-testing-the-map/"},frontmatter:{title:"Testing the Map",step:21}}},{node:{fields:{slug:"/tutorial/steps/23-test-the-app-component/"},frontmatter:{title:"Testing the App Component",step:23}}},{node:{fields:{slug:"/tutorial/steps/24-test-favourites-list/"},frontmatter:{title:"Testing the Favourites List",step:24}}},{node:{fields:{slug:"/tutorial/steps/22-testing-connected-components/"},frontmatter:{title:"Testing Connected Components",step:22}}},{node:{fields:{slug:"/tutorial/steps/3-babel/"},frontmatter:{title:"Setting up Babel",step:3}}},{node:{fields:{slug:"/tutorial/steps/25-test-the-pointer/"},frontmatter:{title:"Testing the Pointer",step:25}}},{node:{fields:{slug:"/tutorial/steps/4-eslint-and-prettier/"},frontmatter:{title:"ESLint and Prettier",step:4}}},{node:{fields:{slug:"/tutorial/steps/5-starting-react/"},frontmatter:{title:"Starting with React",step:5}}},{node:{fields:{slug:"/tutorial/steps/9-adding-points-to-the-map/"},frontmatter:{title:"Adding Points to the Map",step:9}}},{node:{fields:{slug:"/tutorial/steps/6-adding-the-map/"},frontmatter:{title:"Adding the Map",step:6}}},{node:{fields:{slug:"/tutorial/steps/8-webpack-dev-server/"},frontmatter:{title:"Webpack Dev Server",step:8}}},{node:{fields:{slug:"/tutorial/steps/7-styling-with-postcss/"},frontmatter:{title:"CSS Modules and PostCSS",step:7}}}]}},pathContext:{slug:"/tutorial/steps/9-adding-points-to-the-map/"}}}});
//# sourceMappingURL=path---tutorial-steps-9-adding-points-to-the-map-ecb150f8d4e5af42eb1a.js.map