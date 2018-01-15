webpackJsonp([0x6ca4b44a2b96],{332:function(e,t){e.exports={data:{markdownRemark:{html:'<p>Our <em>Map of Thrones</em> application now has all of the features that we are going\nto build. However we are not coding cowboys <sup id="fnref-1"><a href="#fn-1" class="footnote-ref">1</a></sup> so we are going to make sure\nour application is fully tested.</p>\n<p>In my experience testing is far less common for frontend software than for\nbackend software. Or at least if the frontend is tested, it is not fully\ncovered. This is usually due to the complexity of testing frontend code due to\nvarious browsers, working with the DOM, network requests etc.</p>\n<p>Luckily for us when we are working with React and Redux there are great open\nsource tools our there that will make the job of testing our application a lot\neasier.</p>\n<p>We will be using the <a href="https://facebook.github.io/jest/">Jest</a> testing library\n<sup id="fnref-2"><a href="#fn-2" class="footnote-ref">2</a></sup> which will enable us to write tests for all of the aspects of our\napplication. Jest was written and maintained by Facebook, similar to React.</p>\n<p>Although Jest can be used with other JavaScript frameworks and projects it goes\nespecially well with React due to it\'s "snapshot testing" which allows us to\nrecord our expected component structure and watch if it changes unexpectedly.</p>\n<p>Here is what the Jest website has to say about Jest:</p>\n<blockquote>\n<p><em>Easy Setup</em></p>\n<p>Complete and easy to set-up JavaScript testing solution. Works out of the box\nfor any React project.</p>\n<p><em>Instant Feedback</em></p>\n<p>Fast interactive watch mode runs only test files related to changed files and\nis optimized to give signal quickly.</p>\n<p><em>Snapshot Testing</em></p>\n<p>Capture snapshots of React trees or other serializable values to simplify\ntesting and to analyze how state changes over time.</p>\n<p><em>Zero configuration testing platform</em></p>\n<p>Jest is used by Facebook to test all JavaScript code including React\napplications. One of Jest\'s philosophies is to provide an integrated\n"zero-configuration" experience. We observed that when engineers are provided\nwith ready-to-use tools, they end up writing more tests, which in turn results\nin more stable and healthy code bases.</p>\n</blockquote>\n<h2>Installing Jest</h2>\n<p>Since Jest is designed to be "zero configuration" it means it is easy to setup.\nWe basically just have to install it, no large configurations are needed like\nfor Webpack or ESLint.</p>\n<p>Let\'s go ahead and add <code>jest</code> to our development dependencies.</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code>yarn add --dev jest\n</code></pre>\n      </div>\n<p>That\'s it. Jest is now installed and ready to use.</p>\n<h2>Preparing our Application</h2>\n<p>Although we do not need to configure Jest itself we will add a few configuration\nchanges to the application that will make working with Jest easier.</p>\n<h4>ESLint environment for Jest</h4>\n<p>Since Jest has a few global variables such as <code>test</code>, <code>it</code>, <code>describe</code>, etc. we\ndo not want ESLint to complain that these variables are undefined. We can fix\nthis by telling ESLint that our environment now contains Jest. Update the\n<code>.eslintrc.js</code> file with to add an <code>env</code> key.</p>\n<div class="gatsby-highlight">\n      <pre class="language-diff"><code>// .eslintrc.js\n\n  module.exports = {\n    extends: [\'standard\', \'plugin:react/recommended\'],\n    plugins: [\'react\', \'import\'],\n    rules: {\n      semi: [\'error\', \'always\']\n    },\n<span class="token inserted">+   env: {</span>\n<span class="token inserted">+     jest: true</span>\n<span class="token inserted">+   }</span>\n  };\n</code></pre>\n      </div>\n<h4>Yarn Scripts</h4>\n<p>We will also add a few new scripts to the <code>"scripts"</code> section of the\n<code>package.json</code> that will allow us to run Yarn in different modes. Update the\n<code>package.json</code> with the follow 3 new scripts.</p>\n<div class="gatsby-highlight">\n      <pre class="language-diff"><code>// package.json\n\n  "scripts": {\n    "dev": "webpack-dev-server",\n    "build": "webpack -p",\n    "lint:all": "eslint app/js/*",\n<span class="token deleted">-    "lint:fix": "eslint app/js/* --fix"</span>\n<span class="token inserted">+    "lint:fix": "eslint app/js/* --fix",</span>\n<span class="token inserted">+    "test": "jest",</span>\n<span class="token inserted">+    "test:watch": "jest --watch",</span>\n<span class="token inserted">+    "test:coverage": "jest --coverage"</span>\n  },\n</code></pre>\n      </div>\n<p>You can already test this by running, for example, <code>yarn test:coverage</code> in the\nterminal and you will see an output telling you that no tests were found.</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code>yarn run v1.3.2\n$ jest\nNo tests found\n  21 files checked.\n  testMatch: **/__tests__/**/*.js?<span class="token punctuation">(</span>x<span class="token punctuation">)</span>,**/?<span class="token punctuation">(</span>*.<span class="token punctuation">)</span><span class="token punctuation">(</span>spec<span class="token operator">|</span>test<span class="token punctuation">)</span>.js?<span class="token punctuation">(</span>x<span class="token punctuation">)</span> - 0 matches\n  testPathIgnorePatterns: /node_modules/ - 21 matches\nPattern:  - 0 matches\nerror Command failed with <span class="token keyword">exit</span> code 1.\n</code></pre>\n      </div>\n<p>You may notice that Jest also has a "watch" mode which means Jest will stay\nrunning in the terminal and re-run the tests relevant to any project files that\nare saved. For example, imagine we had written a test for the <code>Pointer</code>\ncomponent and also a test for the points actions. If we then updated the\n<code>addFavourite</code> action in the <code>app/js/actions/points.js</code> file Jest would\nautomatically run the actions tests as well as <code>Pointer</code> component tests since\nthe component uses that action - but Jest would not run any other tests that\nwere irrelevant.</p>\n<h2>Jest Test Structure for React Applications</h2>\n<p>Unlike testing libraries you may be familiar with we will not be putting all of\nour specs into a global <code>specs/</code> or <code>tests/</code> directory.</p>\n<blockquote>\n<p>Note: "spec" is short for "specification" because spec files specify how our\nsoftware should act - our tests are defined in the spec files.</p>\n</blockquote>\n<p>Instead each directory of the application that contains code we want to test\nwill have its own specs directory named <code>__specs__</code>. The underscores before and\nafter "specs" are a common software development pattern to signal that this is\nnot regular application code, since the tests are inside of the <code>app/</code>\ndirectory. Jest inherited this pattern from the Python programming language and\nalso uses it as a standard.</p>\n<p>The idea of keeping your tests inside of your application can seem a little\nstrange at first but makes a lot of sense for component based applications. For\nexample our <code>Map</code> component has the following structure</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code>- app/js/component/Map\n  <span class="token operator">|</span>\n  -- index.js\n  -- Map.jsx\n  -- Map.css\n</code></pre>\n      </div>\n<p>We will then add the <code>__specs__</code> directory inside of this component.</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code>- app/js/component/Map\n  <span class="token operator">|</span>\n  -- index.js\n  -- Map.jsx\n  -- Map.css\n     <span class="token operator">|</span>\n     __specs__\n       <span class="token operator">|</span>\n       - Map.spec.jsx\n</code></pre>\n      </div>\n<p>The advantage of this is that if you extract the <code>Map</code> component from the\napplication and into another one, or you publish it as a standalone node module,\nthe tests are already bundled with the component instead of being bound to your\nproject.</p>\n<p>In JavaScript having the specs close to the implementation files also has the\nadvantage that importing the source objects is easier as the relevant import\nfiles are not so far away in the directory structure. e.g. <code>import foo from \'../foo\';</code> as opposed to <code>import foo from \'../../../../app/actions\';</code>.</p>\n<p>Now that we are ready to start testing. In the next step we will being writing\nspecs, starting with our Redux actions.</p>\n<hr>\n<ul>\n<li><sup id="fn-1">[1]</sup>: <a href="https://en.wikipedia.org/wiki/Cowboy_coding">https://en.wikipedia.org/wiki/Cowboy_coding</a></li>\n<li><sup id="fn-2">[2]</sup>: <a href="https://facebook.github.io/jest/">https://facebook.github.io/jest/</a></li>\n</ul>',frontmatter:{title:"Testing with Jest",step:17}},allMarkdownRemark:{edges:[{node:{fields:{slug:"/tutorial/links/"},frontmatter:{title:"Links",step:null}}},{node:{fields:{slug:"/tutorial/getting-started/"},frontmatter:{title:"Getting Started",step:null}}},{node:{fields:{slug:"/tutorial/steps/1-setup-package/"},frontmatter:{title:"Generate the package.json",step:1}}},{node:{fields:{slug:"/tutorial/steps/10-pointer-details/"},frontmatter:{title:"Showing the Details of each Point",step:10}}},{node:{fields:{slug:"/tutorial/steps/11-favourite-places/"},frontmatter:{title:"Favourite Places",step:11}}},{node:{fields:{slug:"/tutorial/steps/12-favourites-list/"},frontmatter:{title:"Favourites List",step:12}}},{node:{fields:{slug:"/tutorial/steps/13-adding-redux/"},frontmatter:{title:"Starting with Redux",step:13}}},{node:{fields:{slug:"/tutorial/steps/14-managing-favourites-with-redux/"},frontmatter:{title:"Managing Favourites with Redux",step:14}}},{node:{fields:{slug:"/tutorial/steps/15-removing-favourites-from-the-list/"},frontmatter:{title:"Removing Favourites from the List",step:15}}},{node:{fields:{slug:"/tutorial/steps/16-ids-for-points/"},frontmatter:{title:"Adding IDs to the Points Data",step:16}}},{node:{fields:{slug:"/tutorial/steps/17-testing-with-jest/"},frontmatter:{title:"Testing with Jest",step:17}}},{node:{fields:{slug:"/tutorial/steps/18-testing-redux-actions/"},frontmatter:{title:"Testing Redux Actions",step:18}}},{node:{fields:{slug:"/tutorial/steps/19-testing-redux-reducers/"},frontmatter:{title:"Testing Redux Reducers",step:19}}},{node:{fields:{slug:"/tutorial/steps/2-webpack/"},frontmatter:{title:"Setting up Webpack",step:2}}},{node:{fields:{slug:"/tutorial/steps/20-jest-component-configuration/"},frontmatter:{title:"Preparing Component testing with Jest",step:20}}},{node:{fields:{slug:"/tutorial/steps/21-testing-the-map/"},frontmatter:{title:"Testing the Map",step:21}}},{node:{fields:{slug:"/tutorial/steps/22-testing-connected-components/"},frontmatter:{title:"Testing Connected Components",step:22}}},{node:{fields:{slug:"/tutorial/steps/23-test-the-app-component/"},frontmatter:{title:"Testing the App Component",step:23}}},{node:{fields:{slug:"/tutorial/steps/24-test-favourites-list/"},frontmatter:{title:"Testing the Favourites List",step:24}}},{node:{fields:{slug:"/tutorial/steps/3-babel/"},frontmatter:{title:"Setting up Babel",step:3}}},{node:{fields:{slug:"/tutorial/steps/25-test-the-pointer/"},frontmatter:{title:"Testing the Pointer",step:25}}},{node:{fields:{slug:"/tutorial/steps/4-eslint-and-prettier/"},frontmatter:{title:"ESLint and Prettier",step:4}}},{node:{fields:{slug:"/tutorial/steps/5-starting-react/"},frontmatter:{title:"Starting with React",step:5}}},{node:{fields:{slug:"/tutorial/steps/6-adding-the-map/"},frontmatter:{title:"Adding the Map",step:6}}},{node:{fields:{slug:"/tutorial/steps/7-styling-with-postcss/"},frontmatter:{title:"CSS Modules and PostCSS",step:7}}},{node:{fields:{slug:"/tutorial/steps/8-webpack-dev-server/"},frontmatter:{title:"Webpack Dev Server",step:8}}},{node:{fields:{slug:"/tutorial/steps/9-adding-points-to-the-map/"},frontmatter:{title:"Adding Points to the Map",step:9}}}]}},pathContext:{slug:"/tutorial/steps/17-testing-with-jest/"}}}});
//# sourceMappingURL=path---tutorial-steps-17-testing-with-jest-922c750cca9760cb56b5.js.map