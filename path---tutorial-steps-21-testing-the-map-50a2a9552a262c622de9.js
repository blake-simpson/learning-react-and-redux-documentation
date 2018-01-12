webpackJsonp([0xa2f25f0c7546],{336:function(t,e){t.exports={data:{markdownRemark:{html:'<p>We will now go ahead and test the (unconnected) <code>Map</code> component. First create a\n<code>__specs__</code> directory inside of <code>app/js/components/Map/</code> and add a file\n<code>Map.spec.jsx</code> to it.</p>\n<p>The first thing we need to do in a component test is import <code>React</code>, as with any\ncomponent.</p>\n<p>We will also import the <code>shallow</code> function from enzyme which will allow us to\nrender the component for our test.</p>\n<p>Next we will import the <code>Map</code> component that we want to test, along with the\nmock data that we defined in the spec helper from the previous step.</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code><span class="token comment">// app/js/components/Map/__specs__/Map.spec.jsx</span>\n\n<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">\'react\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> shallow <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'enzyme\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">import</span> <span class="token punctuation">{</span> pointsMock <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'../../../spec-helper\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Map <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'../\'</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>Next we will use a <code>describe</code> to set the context for the <code>Map</code> component. Inside\nof this context we will have 2 additional <code>describe</code> calls that define 2\nsub-contexts. One for when we have points on the map, one for where the map has\nno data.</p>\n<div class="gatsby-highlight">\n      <pre class="language-diff"><code>// app/js/components/Map/__specs__/Map.spec.jsx\n\n  import React from \'react\';\n  import { shallow } from \'enzyme\';\n\n  import { pointsMock } from \'../../../spec-helper\';\n  import { Map } from \'../\';\n\n<span class="token inserted">+ describe(\'Map component\', () => {</span>\n<span class="token inserted">+   describe(\'when there are no points\');</span>\n<span class="token inserted">+</span>\n<span class="token inserted">+   describe(\'when there are points\');</span>\n<span class="token inserted">+ });</span>\n</code></pre>\n      </div>\n<p>Inside of the first describe "when there are no points" we will define a test\nexpecting the mounted component to simply match the snapshot. We use the\n<code>shallow</code> method and pass the <code>Map</code> component to it. We pass an empty array of\npoints to the <code>Map</code> so that we can test how the <code>Map</code> snapshot looks without any\ndata.</p>\n<div class="gatsby-highlight">\n      <pre class="language-diff"><code>// app/js/components/Map/__specs__/Map.spec.jsx\n\n  describe(\'Map component\', () => {\n<span class="token deleted">-    describe(\'when there are no points\');</span>\n<span class="token inserted">+    describe(\'when there are no points\', () => {</span>\n<span class="token inserted">+     it(\'matches the snapshot\', () => {</span>\n<span class="token inserted">+       const wrapper = shallow(&lt;Map points={[]} />);</span>\n<span class="token inserted">+</span>\n<span class="token inserted">+       expect(wrapper).toMatchSnapshot();</span>\n<span class="token inserted">+     });</span>\n<span class="token inserted">+   });</span>\n\n    describe(\'when there are points\');\n  });\n</code></pre>\n      </div>\n<p>Calling the Jest matcher <code>toMatchSnapshot</code> automatically generates a snapshot\nand places it in a <code>__snapshots__</code> directory of your <code>__specs__</code> folder. The\nfirst time you run the test the snapshot is generated. Every time the test is\nrun after that Jest matches the snapshot from the test against the one saved in\nthe project and the test fails if they have changed.</p>\n<p>This means we can easily test if changes to our code have changed the way our\ncomponents render. If the changes to your component are expected though, for\nexample you have changed some text or added a new feature and you want to the\nsnapshot to reflect the new expected state you update all snapshots in your\nproject by running:</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code>yarn <span class="token function">test</span> -- -u\n</code></pre>\n      </div>\n<p>This will run all tests again but tell Jest to update the snapshots, now your\ntests will pass and the new component state will be saved for future test runs.</p>\n<blockquote>\n<p>Note: It is important that you add your snapshot files to the git repository\nso that they are shared between all developers on the project.</p>\n</blockquote>\n<p>Let\'s now add the second snapshot test for "when there are points".</p>\n<div class="gatsby-highlight">\n      <pre class="language-diff"><code>// app/js/components/Map/__specs__/Map.spec.jsx\n\n  describe(\'Map component\', () => {\n    describe(\'when there are no points\', () => {\n      it(\'matches the snapshot\', () => {\n        const wrapper = shallow(&lt;Map points={[]} />);\n\n        expect(wrapper).toMatchSnapshot();\n      });\n    });\n\n<span class="token deleted">-   describe(\'when there are points\');</span>\n<span class="token inserted">+   describe(\'when there are points\', () => {</span>\n<span class="token inserted">+     it(\'matches the snapshot\', () => {</span>\n<span class="token inserted">+       const wrapper = shallow(&lt;Map points={pointsMock} />);</span>\n<span class="token inserted">+</span>\n<span class="token inserted">+       expect(wrapper).toMatchSnapshot();</span>\n<span class="token inserted">+     });</span>\n<span class="token inserted">+   });</span>\n  });\n</code></pre>\n      </div>\n<p>You can now run and you will see that all test pass. Additionally jest will tell\nyou <code>› 1 snapshot written.</code> in the output under the <code>Map.spec.jsx</code> file.</p>\n<p>The snapshot can be viewed by opening the file\n<code>app/js/components/Map/__specs__/__snapshots__/Map.spec.jsx.snap</code> which you will\nsee has the following contents:</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code><span class="token comment">// Jest Snapshot v1, https://goo.gl/fbAQLP</span>\n\nexports<span class="token punctuation">[</span>\n  <span class="token template-string"><span class="token string">`Map component when there are no points matches the snapshot 1`</span></span>\n<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token template-string"><span class="token string">`&lt;div />`</span></span><span class="token punctuation">;</span>\n\nexports<span class="token punctuation">[</span><span class="token template-string"><span class="token string">`Map component when there are points matches the snapshot 1`</span></span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token template-string"><span class="token string">`\n&lt;div>\n  &lt;Connect(Pointer)\n    details={\n      Object {\n        "house": "Night\'s Watch",\n        "name": "The Wall",\n        "words": "Night gathers, and now my watch begins.",\n      }\n    }\n    favourite={true}\n    id={1}\n    key="1"\n    x={450}\n    y={110}\n  />\n  &lt;Connect(Pointer)\n    details={\n      Object {\n        "house": "Stark",\n        "name": "Winterfell",\n        "words": "Winter is Coming",\n      }\n    }\n    favourite={false}\n    id={2}\n    key="2"\n    x={375}\n    y={355}\n  />\n&lt;/div>\n`</span></span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>Notice that both snapshots from both test scenarios are in this file. The one\nwithout data simply returns a <code>&#x3C;div /></code> as our <code>Map</code> component is programmed to\ndo.</p>\n<p>In the test where we pass our mock points data the snapshot shows us that the\n<code>Map</code> component will return a connected <code>Pointer</code> component for each data item\nand pass each of the data fields as a prop to the <code>Pointer</code>.</p>\n<p>It is important that you really examine the snapshots generated by Jest so that\nyou can confirm your components are building the DOM that you expect.</p>\n<p>We have now tested the unconnected version of the <code>Map</code>. In the next step we\nwill look at how to test connected components by mocking the Redux store.</p>',frontmatter:{title:"Testing the Map",step:21}},allMarkdownRemark:{edges:[{node:{fields:{slug:"/tutorial/getting-started/"},frontmatter:{title:"Getting Started",step:null}}},{node:{fields:{slug:"/tutorial/links/"},frontmatter:{title:"Links",step:null}}},{node:{fields:{slug:"/tutorial/steps/1-setup-package/"},frontmatter:{title:"Generate the package.json",step:1}}},{node:{fields:{slug:"/tutorial/steps/10-pointer-details/"},frontmatter:{title:"Showing the Details of each Point",step:10}}},{node:{fields:{slug:"/tutorial/steps/11-favourite-places/"},frontmatter:{title:"Favourite Places",step:11}}},{node:{fields:{slug:"/tutorial/steps/12-favourites-list/"},frontmatter:{title:"Favourites List",step:12}}},{node:{fields:{slug:"/tutorial/steps/13-adding-redux/"},frontmatter:{title:"Starting with Redux",step:13}}},{node:{fields:{slug:"/tutorial/steps/14-managing-favourites-with-redux/"},frontmatter:{title:"Managing Favourites with Redux",step:14}}},{node:{fields:{slug:"/tutorial/steps/2-webpack/"},frontmatter:{title:"Setting up Webpack",step:2}}},{node:{fields:{slug:"/tutorial/steps/3-babel/"},frontmatter:{title:"Setting up Babel",step:3}}},{node:{fields:{slug:"/tutorial/steps/4-eslint-and-prettier/"},frontmatter:{title:"ESLint and Prettier",step:4}}},{node:{fields:{slug:"/tutorial/steps/5-starting-react/"},frontmatter:{title:"Starting with React",step:5}}},{node:{fields:{slug:"/tutorial/steps/6-adding-the-map/"},frontmatter:{title:"Adding the Map",step:6}}},{node:{fields:{slug:"/tutorial/steps/7-styling-with-postcss/"},frontmatter:{title:"CSS Modules and PostCSS",step:7}}},{node:{fields:{slug:"/tutorial/steps/8-webpack-dev-server/"},frontmatter:{title:"Webpack Dev Server",step:8}}},{node:{fields:{slug:"/tutorial/steps/9-adding-points-to-the-map/"},frontmatter:{title:"Adding Points to the Map",step:9}}},{node:{fields:{slug:"/tutorial/steps/15-removing-favourites-from-the-list/"},frontmatter:{title:"Removing Favourites from the List",step:15}}},{node:{fields:{slug:"/tutorial/steps/16-ids-for-points/"},frontmatter:{title:"Adding IDs to the Points Data",step:16}}},{node:{fields:{slug:"/tutorial/steps/17-testing-with-jest/"},frontmatter:{title:"Testing with Jest",step:17}}},{node:{fields:{slug:"/tutorial/steps/18-testing-redux-actions/"},frontmatter:{title:"Testing Redux Actions",step:18}}},{node:{fields:{slug:"/tutorial/steps/19-testing-redux-reducers/"},frontmatter:{title:"Testing Redux Reducers",step:19}}},{node:{fields:{slug:"/tutorial/steps/20-jest-component-configuration/"},frontmatter:{title:"Preparing Component testing with Jest",step:20}}},{node:{fields:{slug:"/tutorial/steps/21-testing-the-map/"},frontmatter:{title:"Testing the Map",step:21}}},{node:{fields:{slug:"/tutorial/steps/22-testing-connected-components/"},frontmatter:{title:"Testing Connected Components",step:22}}},{node:{fields:{slug:"/tutorial/steps/23-test-the-app-component/"},frontmatter:{title:"Testing the App Component",step:23}}},{node:{fields:{slug:"/tutorial/steps/24-test-favourites-list/"},frontmatter:{title:"Testing the Favourites List",step:24}}},{node:{fields:{slug:"/tutorial/steps/25-test-the-pointer/"},frontmatter:{title:"Testing the Pointer",step:25}}}]}},pathContext:{slug:"/tutorial/steps/21-testing-the-map/"}}}});
//# sourceMappingURL=path---tutorial-steps-21-testing-the-map-50a2a9552a262c622de9.js.map