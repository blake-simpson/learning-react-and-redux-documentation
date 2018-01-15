webpackJsonp([0xc2af3db1843d],{323:function(t,e){t.exports={data:{markdownRemark:{html:'<p>The first step will be for us to generate a <code>package.json</code> file with some basic\ninformation about the project. The <code>package.json</code> file holds all project\ninformation, such as the project version, author, license etc. which we will\ngenerate now.</p>\n<p>This file also holds information on production and development dependencies\n(other node modules) as well as configuration information.</p>\n<h2>Generating the package</h2>\n<p>Yarn has a wizard to generate the initial package for you, you can start this by\nrunning:</p>\n<pre><code class="language-bash">yarn init\n</code></pre>\n<p>Run this command and enter information into the prompts given, it will look\nsomething like this:</p>\n<pre><code class="language-bash">yarn init v1.3.2\nquestion name (a-map-of-thrones): a-map-of-thrones\nquestion version (1.0.0):\nquestion description: A React Tutorial of Ice and Fire\nquestion entry point (index.js):\nquestion repository url (git@github.com:BlakeSimpson/learning-react-and-redux-tutorial.git):\nquestion author (Blake Simpson &#x3C;blakersim@gmail.com>):\nquestion license (MIT):\nquestion private:\nsuccess Saved package.json\n✨  Done in 55.16s.\n</code></pre>\n<p>If you now look at the files of the generated <code>package.json</code> file it will look\nlike:</p>\n<pre><code class="language-json">{\n  "name": "a-map-of-thrones",\n  "version": "1.0.0",\n  "description": "A React Tutorial of Ice and Fire",\n  "main": "index.js",\n  "repository":\n    "git@github.com:BlakeSimpson/learning-react-and-redux-tutorial.git",\n  "author": "Blake Simpson &#x3C;blakersim@gmail.com>",\n  "license": "MIT"\n}\n</code></pre>\n<p>That is all we need to do for this step, in the next we will add Webpack and\nconfigure it to build a bundled JavaScript for us.</p>',frontmatter:{title:"Generate the package.json",step:1}},allMarkdownRemark:{edges:[{node:{fields:{slug:"/tutorial/getting-started/"},frontmatter:{title:"Getting Started",step:null}}},{node:{fields:{slug:"/tutorial/links/"},frontmatter:{title:"Links",step:null}}},{node:{fields:{slug:"/tutorial/steps/1-setup-package/"},frontmatter:{title:"Generate the package.json",step:1}}},{node:{fields:{slug:"/tutorial/steps/11-favourite-places/"},frontmatter:{title:"Favourite Places",step:11}}},{node:{fields:{slug:"/tutorial/steps/10-pointer-details/"},frontmatter:{title:"Showing the Details of each Point",step:10}}},{node:{fields:{slug:"/tutorial/steps/12-favourites-list/"},frontmatter:{title:"Favourites List",step:12}}},{node:{fields:{slug:"/tutorial/steps/13-adding-redux/"},frontmatter:{title:"Starting with Redux",step:13}}},{node:{fields:{slug:"/tutorial/steps/15-removing-favourites-from-the-list/"},frontmatter:{title:"Removing Favourites from the List",step:15}}},{node:{fields:{slug:"/tutorial/steps/14-managing-favourites-with-redux/"},frontmatter:{title:"Managing Favourites with Redux",step:14}}},{node:{fields:{slug:"/tutorial/steps/17-testing-with-jest/"},frontmatter:{title:"Testing with Jest",step:17}}},{node:{fields:{slug:"/tutorial/steps/16-ids-for-points/"},frontmatter:{title:"Adding IDs to the Points Data",step:16}}},{node:{fields:{slug:"/tutorial/steps/18-testing-redux-actions/"},frontmatter:{title:"Testing Redux Actions",step:18}}},{node:{fields:{slug:"/tutorial/steps/20-jest-component-configuration/"},frontmatter:{title:"Preparing Component testing with Jest",step:20}}},{node:{fields:{slug:"/tutorial/steps/19-testing-redux-reducers/"},frontmatter:{title:"Testing Redux Reducers",step:19}}},{node:{fields:{slug:"/tutorial/steps/2-webpack/"},frontmatter:{title:"Setting up Webpack",step:2}}},{node:{fields:{slug:"/tutorial/steps/21-testing-the-map/"},frontmatter:{title:"Testing the Map",step:21}}},{node:{fields:{slug:"/tutorial/steps/23-test-the-app-component/"},frontmatter:{title:"Testing the App Component",step:23}}},{node:{fields:{slug:"/tutorial/steps/24-test-favourites-list/"},frontmatter:{title:"Testing the Favourites List",step:24}}},{node:{fields:{slug:"/tutorial/steps/22-testing-connected-components/"},frontmatter:{title:"Testing Connected Components",step:22}}},{node:{fields:{slug:"/tutorial/steps/3-babel/"},frontmatter:{title:"Setting up Babel",step:3}}},{node:{fields:{slug:"/tutorial/steps/25-test-the-pointer/"},frontmatter:{title:"Testing the Pointer",step:25}}},{node:{fields:{slug:"/tutorial/steps/4-eslint-and-prettier/"},frontmatter:{title:"ESLint and Prettier",step:4}}},{node:{fields:{slug:"/tutorial/steps/5-starting-react/"},frontmatter:{title:"Starting with React",step:5}}},{node:{fields:{slug:"/tutorial/steps/9-adding-points-to-the-map/"},frontmatter:{title:"Adding Points to the Map",step:9}}},{node:{fields:{slug:"/tutorial/steps/6-adding-the-map/"},frontmatter:{title:"Adding the Map",step:6}}},{node:{fields:{slug:"/tutorial/steps/8-webpack-dev-server/"},frontmatter:{title:"Webpack Dev Server",step:8}}},{node:{fields:{slug:"/tutorial/steps/7-styling-with-postcss/"},frontmatter:{title:"CSS Modules and PostCSS",step:7}}}]}},pathContext:{slug:"/tutorial/steps/1-setup-package/"}}}});
//# sourceMappingURL=path---tutorial-steps-1-setup-package-073b2ee9a0ec456a07c8.js.map