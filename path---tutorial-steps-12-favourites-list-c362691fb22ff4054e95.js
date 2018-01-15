webpackJsonp([17971265750924],{326:function(t,e){t.exports={data:{markdownRemark:{html:"<p>Our next task will be to create a component that displays a list of the places\non the map that we marked as our favourites. This will be a list that we render\nunder the map.</p>\n<p>We will begin by creating a directory in the application for this new component\nthat we will call <code>FavouritesList</code>. That means as before we will first create an\n<code>index.js</code> file that is responsible for exporting the actual component.</p>\n<h2>FavouriteList Component</h2>\n<pre><code class=\"language-js\">// app/js/components/FavouritesList/index.jsx\n\nexport { default } from './FavouritesList';\n</code></pre>\n<p>Next we will go ahead and define some CSS styles that will be used for the list.\nRemember that since the <code>--mapWidth</code> and <code>--text</code>variables are defined in\n<code>App.css</code>, they are available to this CSS module also.</p>\n<pre><code class=\"language-css\">/* app/js/components/FavouritesList/FavouritesList.css */\n\n.listWrapper {\n  width: var(--mapWidth);\n  margin: 10px auto 0;\n  color: var(--text);\n}\n\n.list {\n  padding: 0;\n  margin: 0;\n  list-style-type: none;\n\n  li {\n    padding: 10px 0;\n    border-bottom: 1px solid #333;\n\n    &#x26;:last-child {\n      border: none;\n    }\n  }\n}\n</code></pre>\n<p>To complete this new component, we will now add the <code>FavouritesList.jsx</code> file\nthat contains our markup and logic. We will build a stateless functional\ncomponent that accepts a prop called <code>points</code> (the list of points we specified\nin <code>Map.jsx</code>), filters them for points marked as favourites and then renders\nthese into a list.</p>\n<pre><code class=\"language-jsx\">// app/js/components/FavouritesList/FavouritesList.jsx\n\nimport React from 'react';\nimport PropTypes from 'prop-types';\n\nimport styles from './FavouritesList.css';\n\nconst FavouritesList = ({ points }) => {\n  const favourites = points.filter(point => point.favourite);\n\n  return (\n    &#x3C;div className={styles.listWrapper}>\n      &#x3C;h3>Favourites&#x3C;/h3>\n      &#x3C;ul className={styles.list}>\n        {favourites.map((favourite, index) => (\n          &#x3C;li key={index}>{favourite.details.name}&#x3C;/li>\n        ))}\n      &#x3C;/ul>\n    &#x3C;/div>\n  );\n};\n\nFavouritesList.propTypes = {\n  points: PropTypes.arrayOf(PropTypes.object)\n};\n\nexport default FavouritesList;\n</code></pre>\n<h2>Rendering the Favourites List</h2>\n<p>We now want to show our new list on the web page underneath the Map. First of\nall though we will need to refactor how our data is handled a little.</p>\n<p>Since the <code>points</code> data is specified inside of the <code>Map</code> component, the\nfavourites list does not know about it. Instead of copying all of the data into\nboth components we instead will move the data into the <code>App</code> component so that\nit can pass the <code>points</code> array down to both the <code>Map</code> and <code>FavouritesList</code> as a\nprop.</p>\n<p>You may have noticed that we already specified that the <code>FavouritesList</code> class\naccepts a <code>points</code> prop:</p>\n<pre><code class=\"language-jsx\">const FavouritesList = ({ points }) => {\n</code></pre>\n<p>We will now do the same to the <code>Map</code> component.</p>\n<pre><code class=\"language-diff\">// app/js/components/Map/Map.jsx\n\n- const Map = () => {\n+ const Map = ({ points }) => {\n    return (\n      &#x3C;div className={styles.map}>\n        {points.map((point, index) => &#x3C;Pointer {...point} key={index} />)}\n      &#x3C;/div>\n    );\n  };\n</code></pre>\n<p>Now that this component accepts props, we will also have to add a prop types\ndefinition.</p>\n<pre><code class=\"language-diff\">// app/js/components/Map/Map.jsx\n\n  import React from 'react';\n+ import PropTypes from 'prop-types';\n\n...\n\n+ Map.propTypes = {\n+   points: PropTypes.arrayOf(PropTypes.object)\n+ };\n\n  export default Map;\n</code></pre>\n<p>Finally we will cut the large <code>points</code> array out of the <code>Map.jsx</code> file and move\nit to the <code>App.jsx</code> component instead. We can then pass the <code>points</code> array as a\nprop to the <code>Map</code> and our newly added <code>FavouritesList</code>. We will also make the\nsecond entry in the posts array a favourite by default in order to show multiple\nitems in the list.</p>\n<p>Apply the following changes to the <code>App</code> component:</p>\n<pre><code class=\"language-diff\">// app/js/components/App/App.jsx\n\n  import React from 'react';\n\n  import Map from '../Map';\n+ import FavouritesList from '../FavouritesList';\n\n  // eslint-disable-next-line no-unused-vars\n  import styles from './App.css';\n\n+ const points = [\n+   {\n+     x: 450,\n+     y: 110,\n+     details: {\n+       name: 'The Wall',\n+       house: \"Night's Watch\",\n+       words: 'Night gathers, and now my watch begins.'\n+     },\n+     favourite: true\n+   },\n+   {\n+     x: 375,\n+     y: 355,\n+     details: {\n+       name: 'Winterfell',\n+       house: 'Stark',\n+       words: 'Winter is Coming'\n+     },\n+     favourite: true\n+   },\n+   {\n+     x: 345,\n+     y: 705,\n+     details: {\n+       name: 'The Twins',\n+       house: 'Frey',\n+       words: 'We Stand Together'\n+     }\n+   },\n+   {\n+     x: 155,\n+     y: 775,\n+     details: {\n+       name: 'The Iron Islands',\n+       house: 'Greyjoy',\n+       words: 'We Do Not Sow'\n+     }\n+   },\n+   {\n+     x: 150,\n+     y: 945,\n+     details: {\n+       name: 'Casterly Rock',\n+       house: 'Lannister',\n+       words: 'Hear me Roar!'\n+     }\n+   },\n+   {\n+     x: 545,\n+     y: 1000,\n+     details: {\n+       name: \"King's Landing\",\n+       house: 'Baratheon',\n+       words: 'Ours is the Fury'\n+     }\n+   },\n+   {\n+     x: 250,\n+     y: 1190,\n+     details: {\n+       name: 'Highgarden',\n+       house: 'Tyrell',\n+       words: 'Growing Strong'\n+     }\n+   }\n+ ];\n\n  const App = () => {\n    return (\n      &#x3C;section>\n+      &#x3C;Map points={points} />\n+      &#x3C;FavouritesList points={points} />\n-      &#x3C;Map />\n      &#x3C;/section>\n    );\n  };\n\n  export default App;\n</code></pre>\n<p>Take a look again in your browser at the changes we have added and if you scroll\nto the bottom of the map you will see the locations \"The Wall\" and \"Winterfell\"\nare in our favourites list, since both of these locations have the <code>favourite: true</code> property set in the <code>points</code> array.</p>\n<p>\n  <a\n    class=\"gatsby-resp-image-link\"\n    href=\"/learning-react-and-redux-documentation/static/initial-favourites-list-cf9abe703ec48112de6f7e4897f524da-2f078.png\"\n    style=\"display: block\"\n    target=\"_blank\"\n    rel=\"noopener\"\n  >\n  \n  <span\n    class=\"gatsby-resp-image-wrapper\"\n    style=\"position: relative; display: block; ; max-width: 803px; margin-left: auto; margin-right: auto;\"\n  >\n    <span\n      class=\"gatsby-resp-image-background-image\"\n      style=\"padding-bottom: 32.62764632627647%; position: relative; bottom: 0; left: 0; background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAAAsSAAALEgHS3X78AAABJ0lEQVQoz62Rb0vCUBTG9xlK3f/tXrep0+hFLwIZUxIEKRyZUSQUVEaKRUpRrQL7oxA16yM/nY38BntxONznPOd3HriCxh04bgVWsYSr8wDhuIdWs4abyw6+X3r4euji8/EA0dMhfqfHiKZ9RG8DLD6GWLwP8TMfYf58hpq3AY1ZEFZFBe2WB7fiQjV5IlpFF+F1F7O7PdwPdjC77WBysY3X8S72A58OtxFOjgh0iv5JAG47EFUDisEhrBAwK2tQCcQLZUq7Bp3b0EwGlrcSk2IwWtChGiYdzSdzZheoW0mA+B37MpJKCXMyspKGHEFljVGZEBUdis4ImodMXVLNf91IfEt/7Iu15U5GJKBfb2Cr0YREgzRK2Kz6YPQxqQGrXh2l8npqwD+yO9SPsqieIwAAAABJRU5ErkJggg=='); background-size: cover; display: block;\"\n    >\n      <img\n        class=\"gatsby-resp-image-image\"\n        style=\"width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;\"\n        alt=\"Img: Initial favourites list rendered below the map\"\n        title=\"\"\n        src=\"/learning-react-and-redux-documentation/static/initial-favourites-list-cf9abe703ec48112de6f7e4897f524da-2f078.png\"\n        srcset=\"/learning-react-and-redux-documentation/static/initial-favourites-list-cf9abe703ec48112de6f7e4897f524da-e2f53.png 250w,\n/learning-react-and-redux-documentation/static/initial-favourites-list-cf9abe703ec48112de6f7e4897f524da-68fe4.png 500w,\n/learning-react-and-redux-documentation/static/initial-favourites-list-cf9abe703ec48112de6f7e4897f524da-2f078.png 803w\"\n        sizes=\"(max-width: 803px) 100vw, 803px\"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<h2>Dodgy Data</h2>\n<p>How about trying to add new places to the list, though? Try toggling a location\nsuch as \"King's Landing\" to be a favourite on the map. Although the marker turns\nred to indicate a favourite the list does not update with the new entry. In the\nsame manner if you toggle \"Winterfell\" to no longer be a favourite the map\nupdates correctly but the list stays the same.</p>\n<p>This is because our data is stored inside the <code>App</code> component and is being\npassed down into the map and the list separately. Essentially we copy the data\nto each component and then the <code>Map</code>, <code>Pointer</code>, and <code>FavouritesList</code> components\nuse internal state / logic to decide what to render based on their initial\nprops.</p>\n<p>Adding the favourites list was not a critical feature but has allowed us to\ndemonstrate the problem, if even in a simple example, of how it can quickly\nbecome difficult to manage data and state throughout a React application. In the\nnext steps we will look at using \"Redux\" which will provide us with a method of\nstoring all of our data in a central location and then have every component\nrespond when that data is changed.</p>",frontmatter:{title:"Favourites List",step:12}},allMarkdownRemark:{edges:[{node:{fields:{slug:"/tutorial/links/"},frontmatter:{title:"Links",step:null}}},{node:{fields:{slug:"/tutorial/getting-started/"},frontmatter:{title:"Getting Started",step:null}}},{node:{fields:{slug:"/tutorial/steps/1-setup-package/"},frontmatter:{title:"Generate the package.json",step:1}}},{node:{fields:{slug:"/tutorial/steps/10-pointer-details/"},frontmatter:{title:"Showing the Details of each Point",step:10}}},{node:{fields:{slug:"/tutorial/steps/11-favourite-places/"},frontmatter:{title:"Favourite Places",step:11}}},{node:{fields:{slug:"/tutorial/steps/12-favourites-list/"},frontmatter:{title:"Favourites List",step:12}}},{node:{fields:{slug:"/tutorial/steps/13-adding-redux/"},frontmatter:{title:"Starting with Redux",step:13}}},{node:{fields:{slug:"/tutorial/steps/14-managing-favourites-with-redux/"},frontmatter:{title:"Managing Favourites with Redux",step:14}}},{node:{fields:{slug:"/tutorial/steps/15-removing-favourites-from-the-list/"},frontmatter:{title:"Removing Favourites from the List",step:15}}},{node:{fields:{slug:"/tutorial/steps/16-ids-for-points/"},frontmatter:{title:"Adding IDs to the Points Data",step:16}}},{node:{fields:{slug:"/tutorial/steps/17-testing-with-jest/"},frontmatter:{title:"Testing with Jest",step:17}}},{node:{fields:{slug:"/tutorial/steps/18-testing-redux-actions/"},frontmatter:{title:"Testing Redux Actions",step:18}}},{node:{fields:{slug:"/tutorial/steps/19-testing-redux-reducers/"},frontmatter:{title:"Testing Redux Reducers",step:19}}},{node:{fields:{slug:"/tutorial/steps/2-webpack/"},frontmatter:{title:"Setting up Webpack",step:2}}},{node:{fields:{slug:"/tutorial/steps/20-jest-component-configuration/"},frontmatter:{title:"Preparing Component testing with Jest",step:20}}},{node:{fields:{slug:"/tutorial/steps/21-testing-the-map/"},frontmatter:{title:"Testing the Map",step:21}}},{node:{fields:{slug:"/tutorial/steps/22-testing-connected-components/"},frontmatter:{title:"Testing Connected Components",step:22}}},{node:{fields:{slug:"/tutorial/steps/23-test-the-app-component/"},frontmatter:{title:"Testing the App Component",step:23}}},{node:{fields:{slug:"/tutorial/steps/24-test-favourites-list/"},frontmatter:{title:"Testing the Favourites List",step:24}}},{node:{fields:{slug:"/tutorial/steps/25-test-the-pointer/"},frontmatter:{title:"Testing the Pointer",step:25}}},{node:{fields:{slug:"/tutorial/steps/3-babel/"},frontmatter:{title:"Setting up Babel",step:3}}},{node:{fields:{slug:"/tutorial/steps/4-eslint-and-prettier/"},frontmatter:{title:"ESLint and Prettier",step:4}}},{node:{fields:{slug:"/tutorial/steps/6-adding-the-map/"},frontmatter:{title:"Adding the Map",step:6}}},{node:{fields:{slug:"/tutorial/steps/5-starting-react/"},frontmatter:{title:"Starting with React",step:5}}},{node:{fields:{slug:"/tutorial/steps/7-styling-with-postcss/"},frontmatter:{title:"CSS Modules and PostCSS",step:7}}},{node:{fields:{slug:"/tutorial/steps/9-adding-points-to-the-map/"},frontmatter:{title:"Adding Points to the Map",step:9}}},{node:{fields:{slug:"/tutorial/steps/8-webpack-dev-server/"},frontmatter:{title:"Webpack Dev Server",step:8}}}]}},pathContext:{slug:"/tutorial/steps/12-favourites-list/"}}}});
//# sourceMappingURL=path---tutorial-steps-12-favourites-list-c362691fb22ff4054e95.js.map