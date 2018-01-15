webpackJsonp([0x6b92a4649449],{330:function(e,t){e.exports={data:{markdownRemark:{html:"<p>As we saw in the last step, using an array index to manage our points data is\nnot the best approach as it quickly leads to bugs. We will now update our\n<code>points</code> array stored in the <code>points</code> reducer so that each item in the list has\nan <code>id</code> property.</p>\n<p>Add an <code>id</code> property to each item in the array starting with the format\n<code>point-[name]</code> separated by hyphens. Of course the ID could also be a number, a\nUUID, or any other unique value.</p>\n<pre><code class=\"language-diff\">// app/js/reducers/points.js\n\n  const initialState = [\n    {\n+     id: 'point-the-wall',\n      x: 450,\n      y: 110,\n      details: {\n        name: 'The Wall',\n        house: \"Night's Watch\",\n        words: 'Night gathers, and now my watch begins.'\n      },\n      favourite: true\n    },\n    {\n+     id: 'point-winterfell',\n      x: 375,\n      y: 355,\n      details: {\n        name: 'Winterfell',\n        house: 'Stark',\n        words: 'Winter is Coming'\n      },\n      favourite: true\n    },\n    {\n+     id: 'point-the-twins',\n      x: 345,\n      y: 705,\n      details: {\n        name: 'The Twins',\n        house: 'Frey',\n        words: 'We Stand Together'\n      }\n    },\n    {\n+     id: 'point-iron-islands',\n      x: 155,\n      y: 775,\n      details: {\n        name: 'The Iron Islands',\n        house: 'Greyjoy',\n        words: 'We Do Not Sow'\n      }\n    },\n    {\n+     id: 'point-casterly-rock',\n      x: 150,\n      y: 945,\n      details: {\n        name: 'Casterly Rock',\n        house: 'Lannister',\n        words: 'Hear me Roar!'\n      }\n    },\n    {\n+     id: 'point-kings-landing',\n      x: 545,\n      y: 1000,\n      details: {\n        name: \"King's Landing\",\n        house: 'Baratheon',\n        words: 'Ours is the Fury'\n      }\n    },\n    {\n+     id: 'point-highgarden',\n      x: 250,\n      y: 1190,\n      details: {\n        name: 'Highgarden',\n        house: 'Tyrell',\n        words: 'Growing Strong'\n      }\n    }\n  ];\n</code></pre>\n<p>The actual reducer and the <code>updateFavouriteState</code> function also have to be\nupdated to update the array by searching for the given ID instead of looking up\nan array index.</p>\n<pre><code class=\"language-diff\">// app/js/reducers/points.js\n\n\n- const updateFavouriteState = (index, newValue, points) => {\n-   const updatedPoint = points[index];\n+ const updateFavouriteState = (id, newValue, points) => {\n+   const updatedPoint = points.filter(point => point.id === id)[0];\n+   const index = points.indexOf(updatedPoint);\n+\n    updatedPoint.favourite = newValue;\n\n    return [...points.slice(0, index), updatedPoint, ...points.slice(index + 1)];\n  };\n\n  const points = (state = initialState, action) => {\n- let index;\n+ let id;\n\n  switch (action.type) {\n    case FAVOURITE_ADDED:\n-     index = action.payload.index;\n-     return updateFavouriteState(index, true, state);\n+     id = action.payload.id;\n+     return updateFavouriteState(id, true, state);\n\n    case FAVOURITE_REMOVED:\n-     index = action.payload.index;\n-     return updateFavouriteState(index, false, state);\n+     id = action.payload.id;\n+     return updateFavouriteState(id, false, state);\n\n    default:\n      return state;\n    }\n  };\n</code></pre>\n<p>Next we will update our two Redux actions to accept the <code>id</code> instead of the\n<code>index</code> and also set this inside of the <code>payload</code>.</p>\n<pre><code class=\"language-diff\">// app/js/actions/points.js\n\n-  export const addFavourite = index => {\n+  export const addFavourite = id => {\n    return {\n      type: FAVOURITE_ADDED,\n      payload: {\n-       index: index\n+       id: id\n      }\n    };\n  };\n\n- export const removeFavourite = index => {\n+ export const removeFavourite = id => {\n    return {\n      type: FAVOURITE_REMOVED,\n      payload: {\n-       index: index\n+       id: id\n      }\n    };\n  };\n</code></pre>\n<p>Next the <code>Map</code> component no longer needs to pass the <code>index</code> prop to the\n<code>Pointer</code> since the <code>id</code> is already inside of the <code>...point</code> that is spread as\nprops when the <code>Map</code> creates the <code>Pointer</code>.</p>\n<p>We will additionally update the <code>key</code> prop to be the ID since it is guaranteed\nto be unique and it is actually an anti-pattern <sup id=\"fnref-1\"><a href=\"#fn-1\" class=\"footnote-ref\">1</a></sup> to use array indexes for\nthe <code>key</code> property because as items are added or removed, the indexes are reused\nand React can get confused, meaning renders become buggy.</p>\n<pre><code class=\"language-diff\">// app/js/components/Map/Map.jsx\n\n  export const Map = ({ points }) => {\n    return (\n      &#x3C;div className={styles.map}>\n-       {points.map((point, index) => (\n-         &#x3C;Pointer {...point} index={index} key={index} />\n-       ))}\n+      {points.map(point => &#x3C;Pointer {...point} key={point.id} />)}\n      &#x3C;/div>\n    );\n  };\n</code></pre>\n<p>The <code>FavouritesList</code> now needs to stop passing the <code>index</code> of it's list row to\nthe <code>removeFavourite</code> action (which is causing the list bug) and instead pass\nthe ID.</p>\n<pre><code class=\"language-diff\">// app/js/components/FavouritesList/FavouritesList.jsx\n\n  export const FavouritesList = ({ points, remove }) => {\n    const favourites = points.filter(point => point.favourite);\n\n    return (\n      &#x3C;div className={styles.listWrapper}>\n        &#x3C;h3>Favourites&#x3C;/h3>\n        &#x3C;ul className={styles.list}>\n-         {favourites.map((favourite, index) => (\n+         {favourites.map(favourite => (\n-           &#x3C;li key={index}>\n+           &#x3C;li key={favourite.id}>\n-             &#x3C;button onClick={() => remove(index)} className={styles.remove}>\n+             &#x3C;button\n+               onClick={() => remove(favourite.id)}\n+               className={styles.remove}\n              >\n                &#x26;times;\n              &#x3C;/button>\n\n              &#x3C;span>{favourite.details.name}&#x3C;/span>\n            &#x3C;/li>\n          ))}\n        &#x3C;/ul>\n      &#x3C;/div>\n    );\n  };\n  ...\n\n  const mapDispatchToProps = dispatch => {\n    return {\n-     remove: index => {\n-       dispatch(removeFavourite(index));\n+     remove: id => {\n+       dispatch(removeFavourite(id));\n      }\n    };\n  };\n\n  ...\n</code></pre>\n<p>Finally we will also update the <code>Pointer</code> component to pass the ID instead of\nthe index. Notice that the when updating the <code>propTypes</code> not only does \"index\"\nchange to \"id\" but the type changes from <code>number</code> to <code>string</code>.</p>\n<pre><code class=\"language-diff\">// app/js/components/Pointer/Pointer.jsx\n\n  class Pointer extends Component {\n\n    ...\n\n    favourite () {\n-     const { index, favourite, removeFavourite, addFavourite } = this.props;\n+     const { id, favourite, removeFavourite, addFavourite } = this.props;\n\n      if (favourite) {\n-       removeFavourite(index);\n+       removeFavourite(id);\n      } else {\n-       addFavourite(index);\n+       addFavourite(id);\n      }\n    }\n\n    ...\n\n  }\n\n  ...\n\n  Pointer.propTypes = {\n    addFavourite: PropTypes.func,\n    removeFavourite: PropTypes.func,\n-   index: PropTypes.number,\n+   id: PropTypes.string,\n    details: PropTypes.object.isRequired,\n    x: PropTypes.number.isRequired,\n    y: PropTypes.number.isRequired,\n    favourite: PropTypes.bool\n  };\n\n  const mapDispatchToProps = dispatch => {\n    return {\n-     addFavourite: index => {\n-       dispatch(addFavourite(index));\n+     addFavourite: id => {\n+       dispatch(addFavourite(id));\n      },\n\n-     removeFavourite: index => {\n-       dispatch(removeFavourite(index));\n+     removeFavourite: id => {\n+       dispatch(removeFavourite(id));\n      }\n    };\n  };\n\n  ...\n</code></pre>\n<p>Take a look in the browser and again have a play around with adding favourites\non the map as well as removing them from the list and the map. You will see that\ndue to the unique IDs the map and list are now updating as expected.</p>\n<hr>\n<ul>\n<li><sup id=\"fn-1\">[1]</sup>:\n<a href=\"https://medium.com/@robinpokorny/index-as-a-key-is-an-anti-pattern-e0349aece318\">https://medium.com/@robinpokorny/index-as-a-key-is-an-anti-pattern-e0349aece318</a></li>\n</ul>",frontmatter:{title:"Adding IDs to the Points Data",step:16}},allMarkdownRemark:{edges:[{node:{fields:{slug:"/tutorial/getting-started/"},frontmatter:{title:"Getting Started",step:null}}},{node:{fields:{slug:"/tutorial/links/"},frontmatter:{title:"Links",step:null}}},{node:{fields:{slug:"/tutorial/steps/1-setup-package/"},frontmatter:{title:"Generate the package.json",step:1}}},{node:{fields:{slug:"/tutorial/steps/10-pointer-details/"},frontmatter:{title:"Showing the Details of each Point",step:10}}},{node:{fields:{slug:"/tutorial/steps/11-favourite-places/"},frontmatter:{title:"Favourite Places",step:11}}},{node:{fields:{slug:"/tutorial/steps/12-favourites-list/"},frontmatter:{title:"Favourites List",step:12}}},{node:{fields:{slug:"/tutorial/steps/13-adding-redux/"},frontmatter:{title:"Starting with Redux",step:13}}},{node:{fields:{slug:"/tutorial/steps/14-managing-favourites-with-redux/"},frontmatter:{title:"Managing Favourites with Redux",step:14}}},{node:{fields:{slug:"/tutorial/steps/15-removing-favourites-from-the-list/"},frontmatter:{title:"Removing Favourites from the List",step:15}}},{node:{fields:{slug:"/tutorial/steps/16-ids-for-points/"},frontmatter:{title:"Adding IDs to the Points Data",step:16}}},{node:{fields:{slug:"/tutorial/steps/17-testing-with-jest/"},frontmatter:{title:"Testing with Jest",step:17}}},{node:{fields:{slug:"/tutorial/steps/18-testing-redux-actions/"},frontmatter:{title:"Testing Redux Actions",step:18}}},{node:{fields:{slug:"/tutorial/steps/2-webpack/"},frontmatter:{title:"Setting up Webpack",step:2}}},{node:{fields:{slug:"/tutorial/steps/19-testing-redux-reducers/"},frontmatter:{title:"Testing Redux Reducers",step:19}}},{node:{fields:{slug:"/tutorial/steps/20-jest-component-configuration/"},frontmatter:{title:"Preparing Component testing with Jest",step:20}}},{node:{fields:{slug:"/tutorial/steps/21-testing-the-map/"},frontmatter:{title:"Testing the Map",step:21}}},{node:{fields:{slug:"/tutorial/steps/22-testing-connected-components/"},frontmatter:{title:"Testing Connected Components",step:22}}},{node:{fields:{slug:"/tutorial/steps/23-test-the-app-component/"},frontmatter:{title:"Testing the App Component",step:23}}},{node:{fields:{slug:"/tutorial/steps/24-test-favourites-list/"},frontmatter:{title:"Testing the Favourites List",step:24}}},{node:{fields:{slug:"/tutorial/steps/25-test-the-pointer/"},frontmatter:{title:"Testing the Pointer",step:25}}},{node:{fields:{slug:"/tutorial/steps/3-babel/"},frontmatter:{title:"Setting up Babel",step:3}}},{node:{fields:{slug:"/tutorial/steps/4-eslint-and-prettier/"},frontmatter:{title:"ESLint and Prettier",step:4}}},{node:{fields:{slug:"/tutorial/steps/5-starting-react/"},frontmatter:{title:"Starting with React",step:5}}},{node:{fields:{slug:"/tutorial/steps/6-adding-the-map/"},frontmatter:{title:"Adding the Map",step:6}}},{node:{fields:{slug:"/tutorial/steps/7-styling-with-postcss/"},frontmatter:{title:"CSS Modules and PostCSS",step:7}}},{node:{fields:{slug:"/tutorial/steps/8-webpack-dev-server/"},frontmatter:{title:"Webpack Dev Server",step:8}}},{node:{fields:{slug:"/tutorial/steps/9-adding-points-to-the-map/"},frontmatter:{title:"Adding Points to the Map",step:9}}}]}},pathContext:{slug:"/tutorial/steps/16-ids-for-points/"}}}});
//# sourceMappingURL=path---tutorial-steps-16-ids-for-points-a69ddea91652159ff6ef.js.map