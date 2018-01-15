webpackJsonp([0xa652d30575cd],{333:function(t,n){t.exports={data:{markdownRemark:{html:'<p>The first item of our project we will be testing are the Redux actions.</p>\n<p>As mentioned in the previous step all of our spec files will live in a\n<code>__specs__</code> directory beside the files we are testing.</p>\n<p>First of all let\'s create this directory.</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code><span class="token function">mkdir</span> app/js/actions/__specs__\n</code></pre>\n      </div>\n<p>In this directory we will create a file called <code>points.spec.js</code>. It is important\nthat spec files always end with <code>.spec.js</code> so that Jest can find them.</p>\n<p>In this file we are going to import the two actions <code>addFavourite</code> and\n<code>removeFavourite</code> from the actions implementation file so that we can test what\nthey return. We also import the two <code>ADD_FAVOURITE</code> and <code>REMOVE_FAVOURITE</code>\nconstants that define the action types.</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token comment">// app/js/actions/__specs__/points.spec.js</span>\n\n<span class="token keyword">import</span> <span class="token punctuation">{</span> FAVOURITE_ADDED<span class="token punctuation">,</span> FAVOURITE_REMOVED <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'../../constants\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> addFavourite<span class="token punctuation">,</span> removeFavourite <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'../\'</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>Now we will begin by describing what we are testing. If you have used testing\nlibraries in the past this should look familiar to you. If not, the <code>describe</code>\nis what we wrap around our tests to describe the context that we are testing in.\nFor example here we have a top level <code>describe</code> stating that we are testing the\npoints actions. We then have one context for each action, in this case "add" and\n"remove". The purpose of this is that a correct message is built in the terminal\noutput while running your test that can easily be read. You will see this when\nwe run the test.</p>\n<p>You will notice that the <code>describe</code> (and also <code>it</code> that we will use in a moment)\ntakes the description as the first argument and an arrow function as the second\nwhich will be where all of our test code is defined.</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token comment">// app/js/actions/__specs__/points.spec.js</span>\n\n<span class="token keyword">import</span> <span class="token punctuation">{</span> FAVOURITE_ADDED<span class="token punctuation">,</span> FAVOURITE_REMOVED <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'../../constants\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> addFavourite<span class="token punctuation">,</span> removeFavourite <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'../\'</span><span class="token punctuation">;</span>\n\n<span class="token function">describe</span><span class="token punctuation">(</span><span class="token string">\'Points Actions\'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token function">describe</span><span class="token punctuation">(</span><span class="token string">\'adding a favourite\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token function">describe</span><span class="token punctuation">(</span><span class="token string">\'removing a favourite\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>Now that we have our structure let\'s add the our test to for the "add" action.\nWe define this using the <code>it</code> function. We could also use the <code>test</code> keyword\nsince <code>it</code> is just an alias but the "it" allows you as a developer to read the\nspec as a sentence.</p>\n<blockquote>\n<p>[the] Points Action adding a favourite, it builds the add action with the\ngiven ID in the payload.</p>\n</blockquote>\n<p>Inside of the test we build a constant called <code>expected</code> which is the output we\nexpect to receive when we actually run the <code>addFavourite</code> action.</p>\n<div class="gatsby-highlight">\n      <pre class="language-diff"><code>// app/js/actions/__specs__/points.spec.js\n\n  describe(\'Points Actions\', () => {\n<span class="token deleted">-    describe(\'adding a favourite\');</span>\n<span class="token inserted">+     it(\'builds the add action with the given ID in the payload\', () => {</span>\n<span class="token inserted">+       const expected = {</span>\n<span class="token inserted">+         type: FAVOURITE_ADDED,</span>\n<span class="token inserted">+         payload: {</span>\n<span class="token inserted">+           id: 42</span>\n<span class="token inserted">+         }</span>\n<span class="token inserted">+       };</span>\n<span class="token inserted">+     });</span>\n<span class="token inserted">+</span>\n    describe(\'removing a favourite\');\n  });\n</code></pre>\n      </div>\n<p>Now we will run the <code>addFavourite</code> action, store the returned action object into\na constant called <code>result</code>, then check that this result matches our <code>expected</code>\nvalue.</p>\n<div class="gatsby-highlight">\n      <pre class="language-diff"><code>// app/js/actions/__specs__/points.spec.js\n\n  describe(\'Points Actions\', () => {\n    describe(\'adding a favourite\', () => {\n      it(\'builds the add action with the given ID in the payload\', () => {\n        const expected = {\n          type: FAVOURITE_ADDED,\n          payload: {\n            id: 42\n          }\n        };\n<span class="token inserted">+       const result = addFavourite(42);</span>\n<span class="token inserted">+</span>\n<span class="token inserted">+       expect(result).toEqual(expected);</span>\n      });\n    });\n\n    describe(\'removing a favourite\');\n  });\n</code></pre>\n      </div>\n<p>We use the Jest <code>expect</code> function to given our expectation we can then chain on\na "matcher" such as <code>toEqual</code> to complete the expectation. There are also\n<a href="https://facebook.github.io/jest/docs/en/expect.html">other Jest matchers</a> <sup id="fnref-1"><a href="#fn-1" class="footnote-ref">1</a></sup>\nsuch as <code>toContain</code> for arrays, <code>toHaveBeenCalled</code> for functions, and many more\nthat you should look over in order to test in different ways.</p>\n<p>We can now run the tests in our terminal by running <code>yarn test</code>. You will see an\noutput similar to:</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code>$ jest\n FAIL  app/js/actions/__specs__/points.spec.js\n  Points Actions\n    ✕ encountered a declaration exception <span class="token punctuation">(</span>4ms<span class="token punctuation">)</span>\n    adding a favourite\n      ✓ builds the action with the given ID <span class="token keyword">in</span> the payload <span class="token punctuation">(</span>4ms<span class="token punctuation">)</span>\n\n  ● Points Actions › encountered a declaration exception\n\n    TypeError: Cannot <span class="token function">read</span> property <span class="token string">\'length\'</span> of undefined\n\n      16 <span class="token operator">|</span>     <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      17 <span class="token operator">|</span>   <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token operator">></span> 18 <span class="token operator">|</span>   describe<span class="token punctuation">(</span><span class="token string">\'removing a favourite\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      19 <span class="token operator">|</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      20 <span class="token operator">|</span>\n\n      at Env.describe <span class="token punctuation">(</span>node_modules/jest-jasmine2/build/jasmine/Env.js:301:27<span class="token punctuation">)</span>\n      at Suite.<span class="token operator">&lt;</span>anonymous<span class="token operator">></span> <span class="token punctuation">(</span>app/js/actions/__specs__/points.spec.js:18:3<span class="token punctuation">)</span>\n      at Object.<span class="token operator">&lt;</span>anonymous<span class="token operator">></span> <span class="token punctuation">(</span>app/js/actions/__specs__/points.spec.js:4:1<span class="token punctuation">)</span>\n\nTest Suites: 1 failed, 1 total\nTests:       1 failed, 1 passed, 2 total\nSnapshots:   0 total\nTime:        0.758s, estimated 1s\nRan all <span class="token function">test</span> suites.\nerror Command failed with <span class="token keyword">exit</span> code 1.\ninfo Visit https://yarnpkg.com/en/docs/cli/run <span class="token keyword">for</span> documentation about this command.\n</code></pre>\n      </div>\n<p>Although our test "builds the add action with the given ID in the payload"\npassed it is complaining that we have a <code>describe</code> without a callback function.</p>\n<p>In Jest you can always append the character "x" before a <code>describe</code>, <code>it</code>, or\n<code>test</code> to mark it as pending, meaning Jest will ignore trying to run that code.\nAdd an "x" to the second describe.</p>\n<div class="gatsby-highlight">\n      <pre class="language-diff"><code>// app/js/actions/__specs__/points.spec.js\n\n   });\n\n<span class="token deleted">-   describe(\'removing a favourite\');</span>\n<span class="token inserted">+   xdescribe(\'removing a favourite\');</span>\n  });\n</code></pre>\n      </div>\n<p>Run <code>yarn test</code> again and you will see the that our tests now succeed because\none is passing and the other is pending (waiting for implementation).</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code>$ jest\n PASS  app/js/actions/__specs__/points.spec.js\n  Points Actions\n    adding a favourite\n      ✓ builds the action with the given ID <span class="token keyword">in</span> the payload <span class="token punctuation">(</span>4ms<span class="token punctuation">)</span>\n    removing a favourite\n      ○ skipped 1 <span class="token function">test</span>\n\nTest Suites: 1 passed, 1 total\nTests:       1 skipped, 1 passed, 2 total\nSnapshots:   0 total\nTime:        1.045s\nRan all <span class="token function">test</span> suites.\n✨  Done <span class="token keyword">in</span> 1.64s.\n</code></pre>\n      </div>\n<p>Finally let\'s add the test for <code>removeFavourite</code>. We will remove the "x" from\nthe <code>xdescribe</code>, add a callback to the <code>describe</code>, add an <code>it</code> with an\nappropriate description and define our test with an expectation and result.</p>\n<div class="gatsby-highlight">\n      <pre class="language-diff"><code>// app/js/actions/__specs__/points.spec.js\n\n<span class="token deleted">- xdescribe(\'removing a favourite\');</span>\n<span class="token inserted">+ describe(\'removing a favourite\', () => {</span>\n<span class="token inserted">+   it(\'builds the remove action with the given ID in the payload\', () => {</span>\n<span class="token inserted">+     const expected = {</span>\n<span class="token inserted">+       type: FAVOURITE_REMOVED,</span>\n<span class="token inserted">+       payload: {</span>\n<span class="token inserted">+         id: 42</span>\n<span class="token inserted">+       }</span>\n<span class="token inserted">+     };</span>\n<span class="token inserted">+     const result = removeFavourite(42);</span>\n<span class="token inserted">+</span>\n<span class="token inserted">+     expect(result).toEqual(expected);</span>\n<span class="token inserted">+   });</span>\n<span class="token inserted">+ });</span>\n</code></pre>\n      </div>\n<p>Run <code>yarn test</code> in your terminal once more and see that now we have 2 passing\ntests.</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code>$ jest\n PASS  app/js/actions/__specs__/points.spec.js\n  Points Actions\n    adding a favourite\n      ✓ builds the add action with the given ID <span class="token keyword">in</span> the payload <span class="token punctuation">(</span>7ms<span class="token punctuation">)</span>\n    removing a favourite\n      ✓ builds the remove action with the given ID <span class="token keyword">in</span> the payload\n\nTest Suites: 1 passed, 1 total\nTests:       2 passed, 2 total\nSnapshots:   0 total\nTime:        1.515s\nRan all <span class="token function">test</span> suites.\n✨  Done <span class="token keyword">in</span> 2.19s.\n</code></pre>\n      </div>\n<p>Now that the Redux actions are tested it makes sense to go onto the next step\nand test our Redux reducer which the actions are associated with.</p>',frontmatter:{title:"Testing Redux Actions",step:18}},allMarkdownRemark:{edges:[{node:{fields:{slug:"/tutorial/links/"},frontmatter:{title:"Links",step:null}}},{node:{fields:{slug:"/tutorial/getting-started/"},frontmatter:{title:"Getting Started",step:null}}},{node:{fields:{slug:"/tutorial/steps/1-setup-package/"},frontmatter:{title:"Generate the package.json",step:1}}},{node:{fields:{slug:"/tutorial/steps/10-pointer-details/"},frontmatter:{title:"Showing the Details of each Point",step:10}}},{node:{fields:{slug:"/tutorial/steps/11-favourite-places/"},frontmatter:{title:"Favourite Places",step:11}}},{node:{fields:{slug:"/tutorial/steps/12-favourites-list/"},frontmatter:{title:"Favourites List",step:12}}},{node:{fields:{slug:"/tutorial/steps/13-adding-redux/"},frontmatter:{title:"Starting with Redux",step:13}}},{node:{fields:{slug:"/tutorial/steps/14-managing-favourites-with-redux/"},frontmatter:{title:"Managing Favourites with Redux",step:14}}},{node:{fields:{slug:"/tutorial/steps/15-removing-favourites-from-the-list/"},frontmatter:{title:"Removing Favourites from the List",step:15}}},{node:{fields:{slug:"/tutorial/steps/16-ids-for-points/"},frontmatter:{title:"Adding IDs to the Points Data",step:16}}},{node:{fields:{slug:"/tutorial/steps/17-testing-with-jest/"},frontmatter:{title:"Testing with Jest",step:17}}},{node:{fields:{slug:"/tutorial/steps/18-testing-redux-actions/"},frontmatter:{title:"Testing Redux Actions",step:18}}},{node:{fields:{slug:"/tutorial/steps/19-testing-redux-reducers/"},frontmatter:{title:"Testing Redux Reducers",step:19}}},{node:{fields:{slug:"/tutorial/steps/2-webpack/"},frontmatter:{title:"Setting up Webpack",step:2}}},{node:{fields:{slug:"/tutorial/steps/20-jest-component-configuration/"},frontmatter:{title:"Preparing Component testing with Jest",step:20}}},{node:{fields:{slug:"/tutorial/steps/21-testing-the-map/"},frontmatter:{title:"Testing the Map",step:21}}},{node:{fields:{slug:"/tutorial/steps/22-testing-connected-components/"},frontmatter:{title:"Testing Connected Components",step:22}}},{node:{fields:{slug:"/tutorial/steps/23-test-the-app-component/"},frontmatter:{title:"Testing the App Component",step:23}}},{node:{fields:{slug:"/tutorial/steps/24-test-favourites-list/"},frontmatter:{title:"Testing the Favourites List",step:24}}},{node:{fields:{slug:"/tutorial/steps/3-babel/"},frontmatter:{title:"Setting up Babel",step:3}}},{node:{fields:{slug:"/tutorial/steps/25-test-the-pointer/"},frontmatter:{title:"Testing the Pointer",step:25}}},{node:{fields:{slug:"/tutorial/steps/4-eslint-and-prettier/"},frontmatter:{title:"ESLint and Prettier",step:4}}},{node:{fields:{slug:"/tutorial/steps/5-starting-react/"},frontmatter:{title:"Starting with React",step:5}}},{node:{fields:{slug:"/tutorial/steps/6-adding-the-map/"},frontmatter:{title:"Adding the Map",step:6}}},{node:{fields:{slug:"/tutorial/steps/7-styling-with-postcss/"},frontmatter:{title:"CSS Modules and PostCSS",step:7}}},{node:{fields:{slug:"/tutorial/steps/8-webpack-dev-server/"},frontmatter:{title:"Webpack Dev Server",step:8}}},{node:{fields:{slug:"/tutorial/steps/9-adding-points-to-the-map/"},frontmatter:{title:"Adding Points to the Map",step:9}}}]}},pathContext:{slug:"/tutorial/steps/18-testing-redux-actions/"}}}});
//# sourceMappingURL=path---tutorial-steps-18-testing-redux-actions-45e0c3834f6da5fa5675.js.map