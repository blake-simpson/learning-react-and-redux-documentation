webpackJsonp([0xfea8d3637122],{342:function(t,e){t.exports={data:{markdownRemark:{html:'<p>As we saw in Step 2, we can now bundle our scripts together using Webpack but if\nwe have any ES6 syntax the production build will fail.</p>\n<p>We will now tell Webpack to run all of our files through\n<a href="https://babeljs.io/">Babel</a> which will transform the syntax from the ES6 we\nwrite in our editor down to ES5 that Webpack and the browser can understand.</p>\n<h2>Webpack Loaders</h2>\n<p>Webpack loaders are like tasks in other build systems, as Webpack is compiling\nyour bundled application loaders can transform certain files. For example, you\nmay have a loader to Base64 inline images in CSS files.</p>\n<p>There are many Webpack loaders available, for a list of some of the main loaders\navailable, see the\n<a href="https://webpack.github.io/docs/list-of-loaders.html">Webpack loaders list</a>.</p>\n<h2>Babel Loader</h2>\n<p>We will be using the Babel loader to transform ES6 to ES5. Installing the Babel\nWebpack loader is not enough to get everything transformed. We also need to\ninstall <code>babel-core</code>, the package that provides Babel itself as well as "Babel\npresets" which are a group of plugins that tell Babel how to transform your\nJavaScript. We will use 2 presets <code>babel-preset-es2015</code> (which transforms ES6\nsyntax to ES5) and <code>babel-preset-react</code> which allows Babel to handle the JSX\nsyntax that React uses.</p>\n<p>We will start by adding these dependencies via yarn:</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code>yarn add babel-core babel-preset-es2015 babel-preset-react babel-loader\n</code></pre>\n      </div>\n<p>Next we have to configure Babel, by telling which presets to use. This is dont\nin a file called <code>.babelrc</code>. Let\'s create that file and add the following\nconfiguration:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token comment">// .babelrc</span>\n\n<span class="token punctuation">{</span>\n  <span class="token string">"presets"</span> <span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">"es2015"</span><span class="token punctuation">,</span> <span class="token string">"react"</span><span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>Babel is now ready to go, so finally we just need to configure Webpack to use\nthe <code>babel-loader</code>. This is done by adding the <code>module</code> key to our Webpack\nconfig. We then define an array of <code>loaders</code>. This array means many loaders can\nbe added, for now we will start with just one. Add the following to your\n<code>webpack.config.js</code>:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token comment">// webpack.config.js</span>\n\n<span class="token operator">...</span>\n\nresolve<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n  extensions<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">\'.js\'</span><span class="token punctuation">,</span> <span class="token string">\'.jsx\'</span><span class="token punctuation">]</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span>\nmodule<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n  loaders<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">{</span>\n      test<span class="token punctuation">:</span> <span class="token regex">/\\.jsx?/</span><span class="token punctuation">,</span>\n      include<span class="token punctuation">:</span> JS_DIR<span class="token punctuation">,</span>\n      loader<span class="token punctuation">:</span> <span class="token string">\'babel-loader\'</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>This is telling Webpack to look for all files inside our JavaScript directory\nending with <code>.js</code> or <code>.jsx</code>. As mentioned earlier, React uses a special JSX\nsyntax that basically combines JavaScript and HTML. We will look further into\nthis in the next steps.</p>\n<p>We then specify which loader should be applied to the files that match the\n<code>test</code>, so we specify <code>loader: \'babel-loader\'</code>.</p>\n<p>After adding this configuration, we can now run the production build and now it\nwill succeed. Test it by running:</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code>yarn build\n</code></pre>\n      </div>\n<p>You will see an output similar to:</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code>yarn run v1.3.2\n$ webpack -p\nHash: f851c2f7d8b874af6a9e\nVersion: webpack 3.8.1\nTime: 615ms\n    Asset       Size  Chunks             Chunk Names\nbundle.js  522 bytes       0  <span class="token punctuation">[</span>emitted<span class="token punctuation">]</span>  main\n   <span class="token punctuation">[</span>0<span class="token punctuation">]</span> ./app/js/application.js 44 bytes <span class="token punctuation">{</span>0<span class="token punctuation">}</span> <span class="token punctuation">[</span>built<span class="token punctuation">]</span>\n✨  Done <span class="token keyword">in</span> 1.33s.\n</code></pre>\n      </div>\n<p>You will notice that the file <code>dist/bundle.js</code> is now minified and optimised for\na production environment.</p>\n<p>In the next step we will add ESLint and Prettier to the project so that we have\nlinting available as we continue and we will no longer have to worry about code\nformatting.</p>',frontmatter:{title:"Setting up Babel",step:3}},allMarkdownRemark:{edges:[{node:{fields:{slug:"/tutorial/links/"},frontmatter:{title:"Links",step:null}}},{node:{fields:{slug:"/tutorial/getting-started/"},frontmatter:{title:"Getting Started",step:null}}},{node:{fields:{slug:"/tutorial/steps/1-setup-package/"},frontmatter:{title:"Generate the package.json",step:1}}},{node:{fields:{slug:"/tutorial/steps/10-pointer-details/"},frontmatter:{title:"Showing the Details of each Point",step:10}}},{node:{fields:{slug:"/tutorial/steps/11-favourite-places/"},frontmatter:{title:"Favourite Places",step:11}}},{node:{fields:{slug:"/tutorial/steps/12-favourites-list/"},frontmatter:{title:"Favourites List",step:12}}},{node:{fields:{slug:"/tutorial/steps/13-adding-redux/"},frontmatter:{title:"Starting with Redux",step:13}}},{node:{fields:{slug:"/tutorial/steps/14-managing-favourites-with-redux/"},frontmatter:{title:"Managing Favourites with Redux",step:14}}},{node:{fields:{slug:"/tutorial/steps/15-removing-favourites-from-the-list/"},frontmatter:{title:"Removing Favourites from the List",step:15}}},{node:{fields:{slug:"/tutorial/steps/16-ids-for-points/"},frontmatter:{title:"Adding IDs to the Points Data",step:16}}},{node:{fields:{slug:"/tutorial/steps/17-testing-with-jest/"},frontmatter:{title:"Testing with Jest",step:17}}},{node:{fields:{slug:"/tutorial/steps/18-testing-redux-actions/"},frontmatter:{title:"Testing Redux Actions",step:18}}},{node:{fields:{slug:"/tutorial/steps/19-testing-redux-reducers/"},frontmatter:{title:"Testing Redux Reducers",step:19}}},{node:{fields:{slug:"/tutorial/steps/2-webpack/"},frontmatter:{title:"Setting up Webpack",step:2}}},{node:{fields:{slug:"/tutorial/steps/20-jest-component-configuration/"},frontmatter:{title:"Preparing Component testing with Jest",step:20}}},{node:{fields:{slug:"/tutorial/steps/21-testing-the-map/"},frontmatter:{title:"Testing the Map",step:21}}},{node:{fields:{slug:"/tutorial/steps/22-testing-connected-components/"},frontmatter:{title:"Testing Connected Components",step:22}}},{node:{fields:{slug:"/tutorial/steps/23-test-the-app-component/"},frontmatter:{title:"Testing the App Component",step:23}}},{node:{fields:{slug:"/tutorial/steps/24-test-favourites-list/"},frontmatter:{title:"Testing the Favourites List",step:24}}},{node:{fields:{slug:"/tutorial/steps/3-babel/"},frontmatter:{title:"Setting up Babel",step:3}}},{node:{fields:{slug:"/tutorial/steps/25-test-the-pointer/"},frontmatter:{title:"Testing the Pointer",step:25}}},{node:{fields:{slug:"/tutorial/steps/4-eslint-and-prettier/"},frontmatter:{title:"ESLint and Prettier",step:4}}},{node:{fields:{slug:"/tutorial/steps/5-starting-react/"},frontmatter:{title:"Starting with React",step:5}}},{node:{fields:{slug:"/tutorial/steps/6-adding-the-map/"},frontmatter:{title:"Adding the Map",step:6}}},{node:{fields:{slug:"/tutorial/steps/7-styling-with-postcss/"},frontmatter:{title:"CSS Modules and PostCSS",step:7}}},{node:{fields:{slug:"/tutorial/steps/8-webpack-dev-server/"},frontmatter:{title:"Webpack Dev Server",step:8}}},{node:{fields:{slug:"/tutorial/steps/9-adding-points-to-the-map/"},frontmatter:{title:"Adding Points to the Map",step:9}}}]}},pathContext:{slug:"/tutorial/steps/3-babel/"}}}});
//# sourceMappingURL=path---tutorial-steps-3-babel-a1d17fe2391489ed6874.js.map