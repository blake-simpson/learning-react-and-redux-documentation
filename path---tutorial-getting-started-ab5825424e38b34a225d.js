webpackJsonp([0x6c0c136a8aef],{320:function(t,e){t.exports={data:{markdownRemark:{html:'<h2>What will we learn?</h2>\n<ul>\n<li>Yarn</li>\n<li>ES6</li>\n<li>Webpack</li>\n<li>PostCSS (and CSS modules)</li>\n<li>React</li>\n<li>Redux</li>\n<li>TypeScript</li>\n</ul>\n<h2>What do I need to know?</h2>\n<p><strong>JavaScript</strong></p>\n<p>In this tutorial it is assumed that you have worked with JavaScript before as\nwell as NPM (Node Package Manager). There is however no assumption that you have\nworked with Yarn, React, Redux, or TypeScript.</p>\n<p><strong>ES6 Basics</strong></p>\n<p>We will be using many ES6 JavaScript features in this tutorial. Although they\nwill be explained along the way, it will help to have some understanding of what\nthese features are, going in. If you have never worked with ES6 before take a\nlook at <a href="http://es6-features.org/">http://es6-features.org/</a> in order to see\nsome examples of the new features and how you can use them instead of common ES5\npatterns.</p>\n<p><strong>CSS</strong></p>\n<p>This tutorial will contain a little CSS, or rather PostCSS. For this reason a\nbasic understanding of CSS styling will be assumed, although you should still be\nable to follow along even without much experience.</p>\n<h2>What are we building?</h2>\n<p>Since it seems everyone loves <em>A Game of Thrones</em>, we will be building "A Map of\nThrones". This project is an interactive map of <em>Westeros</em> with pointers on the\nmap that we can click to view additional information. We can even add places to\nour favourites list.</p>\n<p>The application is fairly simple to build but it has enough complexity to it\nthat we need various Webpack loaders, we will have a few different React\ncomponents, and also have a simple use case to try out Redux.</p>\n<p>Finally we will take the completed app and convert it to TypeScript, in order to\nget a feel for the TypeScript syntax and start to understand why adding typing\ncan help improve your codebase.</p>\n<h2>What do I need to get started?</h2>\n<p>You will need to install node.js, Yarn, and have an editor ready, such as Visual\nStudio Code, WebStorm, etc.</p>\n<p><strong>node.js (v8.9.1+)</strong></p>\n<ul>\n<li><code>brew install node</code></li>\n<li><a href="https://nodejs.org/en/download/">https://nodejs.org/en/download/</a></li>\n</ul>\n<p><strong>Yarn(v1.3.2+)</strong></p>\n<ul>\n<li><code>brew install yarn</code></li>\n<li><a href="https://yarnpkg.com/en/">https://yarnpkg.com/en/</a></li>\n</ul>\n<p><strong>VS Code</strong></p>\n<ul>\n<li><a href="https://code.visualstudio.com/">https://code.visualstudio.com/</a></li>\n</ul>\n<h2>Clone the Repository</h2>\n<p>When you are ready to begin clone the following repository:</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>git clone git@github.com:BlakeSimpson/learning-react-and-redux-tutorial.git</code></pre>\n      </div>\n<p>Every step of the tutorial has an associated git tag, so to have the starting\npoint for step 9, you could simply checkout the git tag <code>step-9</code>. In that sense,\nif you want to see the completed code for step 9, checkout the next tag\n<code>step-10</code>.</p>\n<p>To follow along with the tutorial, checkout <code>step-1</code> from the git history:</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>git checkout step-1</code></pre>\n      </div>\n<h2>Working on your own branch</h2>\n<p>You will probably want to work on your own branch, instead of the master of this\ntutorial, so that you can build your own version of the app. I would suggest\ncreating a branch from tag <code>step-1</code> and continuing from there, i.e.:</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>git checkout step-1\ngit checkout -b your-name</code></pre>\n      </div>\n<p>If you ever find that your code is not working, or your code looks a lot\ndifferent from the tutorial, sync your local branch to a tutorial step to\nrestore the original tutorial onto your branch, for example to reset to <code>step-4</code>\n(all local changes are lost):</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>git clean -f\ngit reset --hard step-4</code></pre>\n      </div>\n<p>If you have everything set up, you can move on to Step 1 of the tutorial.</p>',frontmatter:{title:"Getting Started",step:null}},allMarkdownRemark:{edges:[{node:{fields:{slug:"/tutorial/getting-started/"},frontmatter:{title:"Getting Started",step:null}}},{node:{fields:{slug:"/tutorial/links/"},frontmatter:{title:"Links",step:null}}},{node:{fields:{slug:"/tutorial/steps/1-setup-package/"},frontmatter:{title:"Generate the package.json",step:1}}},{node:{fields:{slug:"/tutorial/steps/10-pointer-details/"},frontmatter:{title:"Showing the Details of each Point",step:10}}},{node:{fields:{slug:"/tutorial/steps/11-favourite-places/"},frontmatter:{title:"Favourite Places",step:11}}},{node:{fields:{slug:"/tutorial/steps/12-favourites-list/"},frontmatter:{title:"Favourites List",step:12}}},{node:{fields:{slug:"/tutorial/steps/13-adding-redux/"},frontmatter:{title:"Starting with Redux",step:13}}},{node:{fields:{slug:"/tutorial/steps/14-managing-favourites-with-redux/"},frontmatter:{title:"Managing Favourites with Redux",step:14}}},{node:{fields:{slug:"/tutorial/steps/2-webpack/"},frontmatter:{title:"Setting up Webpack",step:2}}},{node:{fields:{slug:"/tutorial/steps/3-babel/"},frontmatter:{title:"Setting up Babel",step:3}}},{node:{fields:{slug:"/tutorial/steps/4-eslint-and-prettier/"},frontmatter:{title:"ESLint and Prettier",step:4}}},{node:{fields:{slug:"/tutorial/steps/5-starting-react/"},frontmatter:{title:"Starting with React",step:5}}},{node:{fields:{slug:"/tutorial/steps/6-adding-the-map/"},frontmatter:{title:"Adding the Map",step:6}}},{node:{fields:{slug:"/tutorial/steps/7-styling-with-postcss/"},frontmatter:{title:"CSS Modules and PostCSS",step:7}}},{node:{fields:{slug:"/tutorial/steps/8-webpack-dev-server/"},frontmatter:{title:"Webpack Dev Server",step:8}}},{node:{fields:{slug:"/tutorial/steps/9-adding-points-to-the-map/"},frontmatter:{title:"Adding Points to the Map",step:9}}},{node:{fields:{slug:"/tutorial/steps/15-removing-favourites-from-the-list/"},frontmatter:{title:"Removing Favourites from the List",step:15}}},{node:{fields:{slug:"/tutorial/steps/16-ids-for-points/"},frontmatter:{title:"Adding IDs to the Points Data",step:16}}},{node:{fields:{slug:"/tutorial/steps/17-testing-with-jest/"},frontmatter:{title:"Testing with Jest",step:17}}},{node:{fields:{slug:"/tutorial/steps/18-testing-redux-actions/"},frontmatter:{title:"Testing Redux Actions",step:18}}},{node:{fields:{slug:"/tutorial/steps/19-testing-redux-reducers/"},frontmatter:{title:"Testing Redux Reducers",step:19}}},{node:{fields:{slug:"/tutorial/steps/20-jest-component-configuration/"},frontmatter:{title:"Preparing Component testing with Jest",step:20}}},{node:{fields:{slug:"/tutorial/steps/21-testing-the-map/"},frontmatter:{title:"Testing the Map",step:21}}},{node:{fields:{slug:"/tutorial/steps/22-testing-connected-components/"},frontmatter:{title:"Testing Connected Components",step:22}}},{node:{fields:{slug:"/tutorial/steps/23-test-the-app-component/"},frontmatter:{title:"Testing the App Component",step:23}}},{node:{fields:{slug:"/tutorial/steps/24-test-favourites-list/"},frontmatter:{title:"Testing the Favourites List",step:24}}}]}},pathContext:{slug:"/tutorial/getting-started/"}}}});
//# sourceMappingURL=path---tutorial-getting-started-ab5825424e38b34a225d.js.map