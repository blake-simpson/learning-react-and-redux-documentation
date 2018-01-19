webpackJsonp([0xd86a0636b364],{328:function(e,n){e.exports={data:{markdownRemark:{html:'<p>Redux is a technology, or better thought of as an architecture, for managing\nstate within a JavaScript application. The architecture was originally developed\naround the idea of <a href="https://facebook.github.io/flux/">flux</a> but simplifies it a\nlittle. Redux is commonly used with larger React projects in order to centralise\nthe management of data.</p>\n<p>Here is the introduction to Redux given on the\n<a href="https://redux.js.org/">official Redux website</a>:</p>\n<blockquote>\n<p>Redux is a predictable state container for JavaScript apps. (Not to be\nconfused with a WordPress framework – Redux Framework.)</p>\n</blockquote>\n<blockquote>\n<p>It helps you write applications that behave consistently, run in different\nenvironments (client, server, and native), and are easy to test. On top of\nthat, it provides a great developer experience, such as live code editing\ncombined with a time traveling debugger.</p>\n</blockquote>\n<p>Redux can seem quite complicated if you have never worked with it before but\nonce you start to understand the concepts, it begins to make scaling your\napplication simple. Although we will be learning as we go along, in order to\nunderstand the fundamentals of Redux I would highly recommend reading the\n<a href="https://redux.js.org/docs/basics/">Redux basics</a> section of the documentation\nto understand the terminology such as action, reducer, and store before going\nforward.</p>\n<h2>Adding Redux to a React Application</h2>\n<p>Redux is often overused for smaller applications, so always consider if you\nreally need it. For this simple map application we could probably live without\nRedux but for the sake of learning we will convert our application to use it.</p>\n<h4>Installing Redux</h4>\n<p>The first step we will have to take is to add the necessary redux packager to\nour dependencies. We will be adding <code>redux</code> and since we plan to us redux with\nReact, we will also add <code>react-redux</code> that provides us with certain helpers.</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code>yarn add redux react-redux\n</code></pre>\n      </div>\n<h4>Connecting the Data</h4>\n<p>Assuming that you are familiar with the Redux basics, we will first of all move\nour <code>points</code> data out of the <code>App</code> component and into a points reducer. Reducers\ntake our data, better know an "state", and based on Redux actions they mutate\nthe state and return the new representation.</p>\n<p>Although reducers are not responsible for storing the data itself (this is the\nresponsibility of the store), they do provide the initial state of an empty\napplication. Normally you would not put all of your data (our points) in the\ninitial state but rather an empty array and then load your data from a backend\nAPI; We will however use the initial state to store our data since this is an\nexample app without a backend.</p>\n<p>We will begin be creating a directory our reducers.</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code><span class="token function">mkdir</span> app/js/reducers\n</code></pre>\n      </div>\n<p>We will then create a reducer with the filename <code>points.js</code> inside of this\ndirectory. We will start be creating the reducer function <code>points()</code> that\naccepts the state and an action. We will make this function the default export.</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token comment">// app/js/reducers/points.js</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">points</span> <span class="token operator">=</span> <span class="token punctuation">(</span>state<span class="token punctuation">,</span> action<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> points<span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>Reducers should then contain a <code>switch</code> statement that switches over the action\ntype and decided how to change the <code>state</code>. In this step we will not implement\nany actions so for now we will just have the <code>default</code> switch case which in a\nreducer will always return the state as-is. Update your reducer as so:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token comment">// app/js/reducers/points.js</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">points</span> <span class="token operator">=</span> <span class="token punctuation">(</span>state<span class="token punctuation">,</span> action<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">switch</span> <span class="token punctuation">(</span>action<span class="token punctuation">.</span>type<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">default</span><span class="token punctuation">:</span>\n      <span class="token keyword">return</span> state<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> points<span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>To finish off this reducer, we will now apply our initial state which as was\nalready discussed will be the <code>points</code> array that is currently in the <code>App</code>\ncomponent. Cut this array out of the <code>App</code> and move it to the reducer above the\nreducer function and name it <code>initialState</code>. We then pass <code>initialState</code> as the\ndefault state value of the reducer.</p>\n<div class="gatsby-highlight">\n      <pre class="language-diff"><code>// app/js/reducers/points.js\n\n<span class="token inserted">+ const initialState = [</span>\n<span class="token inserted">+   ... // This array is the points array from your &lt;App /> component</span>\n<span class="token inserted">+ ];</span>\n\n<span class="token deleted">- const points = (state, action) => {</span>\n<span class="token inserted">+ const points = (state = initialState, action) => {</span>\n    switch (action.type) {\n      default:\n        return state;\n    }\n  };\n\n  export default points;\n</code></pre>\n      </div>\n<h2>Combining Reducers</h2>\n<p>Although we can separate our data handling up in to different reducers, when you\ncreate a redux store your can only pass one "combined reducer". This means that\nwe use a Redux helper that will take al of our reducers and combine them\ntogether into one large object that the store can work with.</p>\n<p>This is usually done in an <code>index.js</code> file within your <code>reducers</code> directory. The\nindex file imports all reducers, combines them, and then exports the combined\nreducer. Even though we only have one reducer so far we still need to return a\ncombined version so we will do that now.</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token comment">// app/js/reducers/index.js</span>\n\n<span class="token keyword">import</span> <span class="token punctuation">{</span> combineReducers <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'redux\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">import</span> points <span class="token keyword">from</span> <span class="token string">\'./points\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">combineReducers</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  points\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<h2>Creating the Store</h2>\n<p>As mentioned in the last section, the Redux store needs a combined reducer in\norder to be created. Now that our reducer is ready we can go ahead and create\nthe store which will hold all of our state (data).</p>\n<p>We will do this in the top level <code>application.jsx</code> file as it is the root of our\napplication where we render the <code>App</code> component.</p>\n<p>First we import the <code>createStore</code> helper from Redux. We then import our combined\nreducers from the <code>reducers</code> directory and create a <code>store</code> constant.</p>\n<div class="gatsby-highlight">\n      <pre class="language-diff"><code>// app/js/application.jsx\n\n  import React from \'react\';\n  import { render } from \'react-dom\';\n<span class="token inserted">+ import { createStore } from \'redux\';</span>\n\n  import App from \'./components/App\';\n<span class="token inserted">+ import reducers from \'./reducers\';</span>\n\n<span class="token inserted">+ const store = createStore(</span>\n<span class="token inserted">+   reducers</span>\n<span class="token inserted">+ );</span>\n\n  render(&lt;App />, document.getElementById(\'app\'));\n</code></pre>\n      </div>\n<p>In order to make React aware of the redux store we have to use a helper\ncomponent from the <code>react-redux</code> package called <code>&#x3C;Provider /></code>. The <code>Provider</code>\nis a higher-order component (HoC) <sup id="fnref-1"><a href="#fn-1" class="footnote-ref">1</a></sup> that wraps around our application and\npasses props down to our child components for us.</p>\n<p>Basically the <code>Provider</code> makes the <code>store</code> that we pass to it available to its\nchildren components so that they can access that store later. Update the\n<code>application.jsx</code> to implement a <code>Provider</code>:</p>\n<div class="gatsby-highlight">\n      <pre class="language-diff"><code>// app/js/application.jsx\n\n  import React from \'react\';\n  import { render } from \'react-dom\';\n  import { createStore } from \'redux\';\n<span class="token inserted">+ import { Provider } from \'react-redux\';</span>\n\n  import App from \'./components/App\';\n  import reducers from \'./reducers\';\n\n  const store = createStore(\n    reducers\n  );\n\n<span class="token deleted">-  render(&lt;App />, document.getElementById(\'app\'));</span>\n<span class="token inserted">+  render(</span>\n<span class="token inserted">+    &lt;Provider store={store}></span>\n<span class="token inserted">+      &lt;App /></span>\n<span class="token inserted">+    &lt;/Provider>,</span>\n<span class="token inserted">+    document.getElementById(\'app\')</span>\n<span class="token inserted">+  );</span>\n</code></pre>\n      </div>\n<h4>Redux Developer Tools</h4>\n<p>If you have not yet installed them the\n<a href="https://github.com/zalmoxisus/redux-devtools-extension">redux developer tools</a>\nintegrate into the browser developer tools and lets you debug how your redux\nactions and state is changing. I would recommend installing the extension for\nyour preferred browser.</p>\n<p>In order to be able to use the Redux dev tools, they must be configured when\ncreating your store. This can be done like so:</p>\n<div class="gatsby-highlight">\n      <pre class="language-diff"><code>// app/js/application.jsx\n\n  const store = createStore(\n    reducers,\n<span class="token inserted">+   window.__REDUX_DEVTOOLS_EXTENSION__ &amp;&amp; window.__REDUX_DEVTOOLS_EXTENSION__()</span>\n  );\n</code></pre>\n      </div>\n<h2>Connected Components</h2>\n<p>In order for your components to get information from the store you must\n"connect" them with the redux store. There is an aptly named <code>connect</code> helper\nprovided by the <code>react-redux</code> package for this purpose.</p>\n<p>Basically instead of simply exporting the component from your JSX file, you will\nexport a version of the component wrapped by the <code>connect</code> method.</p>\n<p>The <code>connect</code> method allows you to pass a function called <code>mapStateToProps</code> that\nwill as the name suggests, takes state from the Redux store and then make it\navailable to your component via React props.</p>\n<p>This is an example of how that would look:</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> connect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react-redux\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">MyComponent</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>Hello <span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>accountName<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">mapStateToProps</span> <span class="token operator">=</span> state <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token punctuation">{</span>\n    accountName<span class="token punctuation">:</span> state<span class="token punctuation">.</span>account<span class="token punctuation">.</span>name\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> ConnectedMyComponent <span class="token operator">=</span> <span class="token function">connect</span><span class="token punctuation">(</span>mapStateToProps<span class="token punctuation">)</span><span class="token punctuation">(</span>MyComponent<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> ConnectedMyComponent<span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>In this example we imagine that there is a reducer called "account" that has a\nproperty called <code>name</code> inside of its state. The <code>mapStateToProps</code> function\naccepts the <code>state</code> argument which is a representation of the entire Redux store\n(all combined reducers), we then return the props that will be passed into the\ncomponent. In this case we only return one prop <code>accountName</code>. Whenever the\nstore changes (a Redux action was dispatched and the stored data has changed)\nthen all connected components will be triggered with an update so that the props\nwill be updated with the new data and the React life-cycle will trigger again,\njust as if you had called <code>setState</code> - therefore the <code>render</code> method is called\nagain and the new account name is displayed on the screen.</p>\n<h4>Connecting the map</h4>\n<p>That may be a lot to take in so it is best if we learn by implementing a\nconnected component within our application. We will start by connecting the\n<code>Map</code> component to Redux so that we can access the <code>points</code> array.</p>\n<p>As in the previous example we will first import the <code>connect</code> method, build a\n<code>mapStateToProps</code> function and create a new constant called <code>ConnectedMap</code>.</p>\n<div class="gatsby-highlight">\n      <pre class="language-diff"><code>// app/js/components/Map/Map.jsx\n\n  import React from \'react\';\n  import PropTypes from \'prop-types\';\n<span class="token inserted">+ import { connect } from \'react-redux\';</span>\n\n  import Pointer from \'../Pointer\';\n  import styles from \'./Map.css\';\n\n  const Map = ({ points }) => {\n    return (\n      &lt;div className={styles.map}>\n        {points.map((point, index) => &lt;Pointer {...point} key={index} />)}\n      &lt;/div>\n    );\n  };\n\n  Map.propTypes = {\n    points: PropTypes.arrayOf(PropTypes.object)\n  };\n\n<span class="token inserted">+ const mapStateToProps = state => {</span>\n<span class="token inserted">+   return {</span>\n<span class="token inserted">+     points: state.points</span>\n<span class="token inserted">+   };</span>\n<span class="token inserted">+ };</span>\n\n<span class="token inserted">+ const ConnectedMap = connect(mapStateToProps)(Map);</span>\n\n<span class="token deleted">- export default Map;</span>\n<span class="token inserted">+ export default ConnectedMap;</span>\n</code></pre>\n      </div>\n<p>We have now connected the <code>Map</code> with Redux. The <code>mapStateToProps</code> function will\nensure that the <code>Map</code> component always has a prop called <code>points</code>, which is the\nresult of the points reducer. As you hopefully remember from implementing the\nreducer earlier, the reducer simply returns the <code>points</code> array that we have been\nworking with, which will be the value of the <code>points</code> prop.</p>\n<h4>Separating Presentation from Logic</h4>\n<p>We now export the connected component as the default export. At this point is\nworth mentioning that it is normal to create a distinction between presentation\ncomponents and connected components in Redux applications. There is a an article\ntitled "Presentational and Container Components" <sup id="fnref-2"><a href="#fn-2" class="footnote-ref">2</a></sup> by Dan Abramov, the\ncreator of Redux, where he explains the concept of splitting presentational\ncomponents (the ones that describe how things look, are styled, etc.) from the\n"container" components, which are components that are connected to redux using\nthe <code>connect</code> method.</p>\n<p>In this manner, it is common in Redux applications for developers to put all\nconnected components in a directory called "containers" and have these\ncomponents connect with the store, convert the state to props and then the\ncontainer is responsible for delegating those props down to the presentational\ncomponents.</p>\n<p>In my experience I use a different approach which does not separate the\ncomponents as much. Instead of having "containers" and "components" directories\nI instead have everything in the "components" directory as it is now and simple\nexport both a connected and unconnected version of each component. Some\ncomponents never need to be connected, in which case only the "presentational"\ncomponent is exported.</p>\n<p>For example, if we look again at the earlier example where we examined how\n<code>connect</code> works, the original component (the presentational component) was\ncalled <code>MyComponent</code>. We then create a new constant called\n<code>ConnectedMyComponent</code> that was wrapped by <code>connect</code>.</p>\n<p>What I would now do is export both of these components from the file. The\nconnected version being the <code>default</code> and the presentational component being an\nextra export.</p>\n<div class="gatsby-highlight">\n      <pre class="language-diff"><code>  ...\n\n<span class="token deleted">-  class MyComponent extends Component {</span>\n<span class="token inserted">+  export class MyComponent extends Component {</span>\n    render() {\n      return &lt;h1>Hello {this.props.accountName}&lt;/h1>;\n    }\n  }\n\n  ...\n\n  const ConnectedMyComponent = connect(mapStateToProps)(MyComponent);\n\n  export default ConnectedMyComponent;\n</code></pre>\n      </div>\n<p>This means you can import either the presentation or connected version from the\nsame file.</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code><span class="token keyword">import</span> ConnectedMyComponent <span class="token keyword">from</span> <span class="token string">\'./MyComponent\'</span><span class="token punctuation">;</span>\n<span class="token comment">// or</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> MyComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'./MyComponent\'</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>The advantages of this approach are that it removes the complexity of having to\nconsider which components are containers that only access the store and which\nones are presentational. As your application grows certain components suddenly\nneed to access the store and it can be a pain to differentiate them. You do not\nneed to move components between directories as your application grows and\nchanges, also.</p>\n<p>This approach has worked well in my experience for smaller applications. Of\ncourse it may be advantageous to use the approach Dan Abramov explains for\nlarger applications. Due to the harder separation of presentation components,\nthey can become more reusable. I try to design my components to be reusable even\nif they are connected or not however, so for the example here let us explore\nthis slightly less orthodox approach to connected components.</p>\n<h4>Multiple Exports for the map</h4>\n<p>So after seeing the example of exporting connected and unconnected version of a\ncomponent, let\'s apply this to our <code>Map</code>. First we will export the raw <code>Map</code>\nclass from the <code>Map.jsx</code> file.</p>\n<div class="gatsby-highlight">\n      <pre class="language-diff"><code>// app/js/components/Map/Map.jsx\n\n<span class="token deleted">- const Map = ({ points }) => {</span>\n<span class="token inserted">+ export const Map = ({ points }) => {</span>\n</code></pre>\n      </div>\n<p>We will then have to update the <code>index.js</code> file within the Map component to\nexport not only the <code>default</code> export from <code>Map.jsx</code> but also all other exports.\nWe use the <code>*</code> wildcard so that the <code>Map</code> export is automatically exported along\nwith any other exports we may define in the future, meaning we will no longer\nneed to update the <code>index.js</code> file.</p>\n<div class="gatsby-highlight">\n      <pre class="language-diff"><code>// app/js/components/Map/index.js\n\n  export { default } from \'./Map\';\n<span class="token inserted">+ export * from \'./Map\';</span>\n</code></pre>\n      </div>\n<p>Although we will not be using the unconnected <code>Map</code> export right now, we will\nset up this pattern of exporting both versions of the component. This will come\nin very useful when we get to the steps concerning testing where we need to test\nthe connected and unconnected versions separately.</p>\n<h2>Connecting the FavouritesList</h2>\n<p>Since the <code>FavouritesList</code> component also relays on the <code>points</code> array, we will\nneed to connect this to the Redux store in exactly the same way we did for the\n<code>Map</code>. Let\'s apply those changes now.</p>\n<div class="gatsby-highlight">\n      <pre class="language-diff"><code>// app/js/components/FavouritesList/FavouritesList.jsx\n\n  import React from \'react\';\n  import PropTypes from \'prop-types\';\n<span class="token inserted">+ import { connect } from \'react-redux\';</span>\n\n  import styles from \'./FavouritesList.css\';\n\n<span class="token deleted">- const FavouritesList = ({ points }) => {</span>\n<span class="token inserted">+ export const FavouritesList = ({ points }) => {</span>\n    const favourites = points.filter(point => point.favourite);\n\n    return (\n      &lt;div className={styles.listWrapper}>\n        &lt;h3>Favourites&lt;/h3>\n        &lt;ul className={styles.list}>\n          {favourites.map((favourite, index) => (\n            &lt;li key={index}>{favourite.details.name}&lt;/li>\n          ))}\n        &lt;/ul>\n      &lt;/div>\n    );\n  };\n\n  FavouritesList.propTypes = {\n    points: PropTypes.arrayOf(PropTypes.object)\n  };\n\n<span class="token inserted">+ const mapStateToProps = state => {</span>\n<span class="token inserted">+   return {</span>\n<span class="token inserted">+     points: state.points</span>\n<span class="token inserted">+   };</span>\n<span class="token inserted">+ };</span>\n<span class="token inserted">+</span>\n<span class="token inserted">+  const ConnectedFavouritesList = connect(mapStateToProps)(FavouritesList);</span>\n\n<span class="token deleted">-  export default FavouritesList;</span>\n<span class="token inserted">+  export default ConnectedFavouritesList;</span>\n</code></pre>\n      </div>\n<p>We will then update the <code>index.js</code> file of the <code>FavouritesList</code> so that the\nunconnected version of the list if also available.</p>\n<div class="gatsby-highlight">\n      <pre class="language-diff"><code>// app/js/components/FavouritesList/index.js\n\n  export { default } from \'./FavouritesList\';\n<span class="token inserted">+ export * from \'./FavouritesList\';</span>\n</code></pre>\n      </div>\n<h2>Using the Connected Components</h2>\n<p>If you have been looking at the browser as you go along you will see the\napplication has not been working up until this point. The final step we need to\ntake is to implement the new connected versions of the components.</p>\n<p>The errors are happening because we are trying to pass the no longer existing\n<code>points</code> array as a prop to the <code>Map</code> and <code>FavouritesList</code> components inside of\n<code>App</code>. We will update the <code>App</code> component to import the connected map and\nconnected favourites list instead, since they already receive the points from\nRedux, which will fix the issue.</p>\n<div class="gatsby-highlight">\n      <pre class="language-diff"><code>// app/js/components/App/App.js\n\n  import React from \'react\';\n\n<span class="token deleted">- import Map from \'../Map\';</span>\n<span class="token deleted">- import FavouritesList from \'../FavouritesList\';</span>\n<span class="token inserted">+ import ConnectedMap from \'../Map\';</span>\n<span class="token inserted">+ import ConnectedFavouritesList from \'../FavouritesList\';</span>\n\n  // eslint-disable-next-line no-unused-vars\n  import styles from \'./App.css\';\n\n  const App = () => {\n    return (\n      &lt;section>\n<span class="token deleted">-       &lt;Map points={points} /></span>\n<span class="token deleted">-       &lt;FavouritesList points={points} /></span>\n<span class="token inserted">+       &lt;ConnectedMap /></span>\n<span class="token inserted">+       &lt;ConnectedFavouritesList /></span>\n      &lt;/section>\n    );\n  };\n\n  export default App;\n</code></pre>\n      </div>\n<p>Take a look at the browser again and you will see that the map and favourites\nlist are back to normal.</p>\n<p>Although the changes we have applied in this step have not added any usable\nfeature to the application, it has demonstrated how to apply Redux to an\napplication. We will use this groundwork in the next steps to apply actions\nwhich we can use to share the changes in favourite state between the map and the\nlist, allowing the two components to work together.</p>\n<hr>\n<ul>\n<li><sup id="fn-1">[1]</sup>:\n<a href="https://reactjs.org/docs/higher-order-components.html">https://reactjs.org/docs/higher-order-components.html</a></li>\n<li><sup id="fn-2">[2]</sup>:\n<a href="https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0">https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0</a></li>\n</ul>',frontmatter:{title:"Starting with Redux",step:13}},allMarkdownRemark:{edges:[{node:{fields:{slug:"/tutorial/links/"},frontmatter:{title:"Links",step:null}}},{node:{fields:{slug:"/tutorial/getting-started/"},frontmatter:{title:"Getting Started",step:null}}},{node:{fields:{slug:"/tutorial/steps/1-setup-package/"},frontmatter:{title:"Generate the package.json",step:1}}},{node:{fields:{slug:"/tutorial/steps/10-pointer-details/"},frontmatter:{title:"Showing the Details of each Point",step:10}}},{node:{fields:{slug:"/tutorial/steps/11-favourite-places/"},frontmatter:{title:"Favourite Places",step:11}}},{node:{fields:{slug:"/tutorial/steps/12-favourites-list/"},frontmatter:{title:"Favourites List",step:12}}},{node:{fields:{slug:"/tutorial/steps/13-adding-redux/"},frontmatter:{title:"Starting with Redux",step:13}}},{node:{fields:{slug:"/tutorial/steps/15-removing-favourites-from-the-list/"},frontmatter:{title:"Removing Favourites from the List",step:15}}},{node:{fields:{slug:"/tutorial/steps/16-ids-for-points/"},frontmatter:{title:"Adding IDs to the Points Data",step:16}}},{node:{fields:{slug:"/tutorial/steps/17-testing-with-jest/"},frontmatter:{title:"Testing with Jest",step:17}}},{node:{fields:{slug:"/tutorial/steps/14-managing-favourites-with-redux/"},frontmatter:{title:"Managing Favourites with Redux",step:14}}},{node:{fields:{slug:"/tutorial/steps/2-webpack/"},frontmatter:{title:"Setting up Webpack",step:2}}},{node:{fields:{slug:"/tutorial/steps/18-testing-redux-actions/"},frontmatter:{title:"Testing Redux Actions",step:18}}},{node:{fields:{slug:"/tutorial/steps/19-testing-redux-reducers/"},frontmatter:{title:"Testing Redux Reducers",step:19}}},{node:{fields:{slug:"/tutorial/steps/20-jest-component-configuration/"},frontmatter:{title:"Preparing Component testing with Jest",step:20}}},{node:{fields:{slug:"/tutorial/steps/21-testing-the-map/"},frontmatter:{title:"Testing the Map",step:21}}},{node:{fields:{slug:"/tutorial/steps/23-test-the-app-component/"},frontmatter:{title:"Testing the App Component",step:23}}},{node:{fields:{slug:"/tutorial/steps/22-testing-connected-components/"},frontmatter:{title:"Testing Connected Components",step:22}}},{node:{fields:{slug:"/tutorial/steps/24-test-favourites-list/"},frontmatter:{title:"Testing the Favourites List",step:24}}},{node:{fields:{slug:"/tutorial/steps/3-babel/"},frontmatter:{title:"Setting up Babel",step:3}}},{node:{fields:{slug:"/tutorial/steps/5-starting-react/"},frontmatter:{title:"Starting with React",step:5}}},{node:{fields:{slug:"/tutorial/steps/4-eslint-and-prettier/"},frontmatter:{title:"ESLint and Prettier",step:4}}},{node:{fields:{slug:"/tutorial/steps/25-test-the-pointer/"},frontmatter:{title:"Testing the Pointer",step:25}}},{node:{fields:{slug:"/tutorial/steps/8-webpack-dev-server/"},frontmatter:{title:"Webpack Dev Server",step:8}}},{node:{fields:{slug:"/tutorial/steps/6-adding-the-map/"},frontmatter:{title:"Adding the Map",step:6}}},{node:{fields:{slug:"/tutorial/steps/9-adding-points-to-the-map/"},frontmatter:{title:"Adding Points to the Map",step:9}}},{node:{fields:{slug:"/tutorial/steps/7-styling-with-postcss/"
},frontmatter:{title:"CSS Modules and PostCSS",step:7}}}]}},pathContext:{slug:"/tutorial/steps/13-adding-redux/"}}}});
//# sourceMappingURL=path---tutorial-steps-13-adding-redux-a0280af7039049df6877.js.map