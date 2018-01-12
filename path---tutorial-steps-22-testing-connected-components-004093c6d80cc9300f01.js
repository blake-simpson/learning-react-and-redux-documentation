webpackJsonp([0x954c0d802f4a],{336:function(e,t){e.exports={data:{markdownRemark:{html:'<p>Testing components that are connected with Redux is a little tricker as you\ncannot simply mount the component with enzyme until you have mocked the store,\notherwise errors will occur. In order to make this process simple we can use an\nopen source packages called <code>redux-mock-store</code>.</p>\n<p>Let\'s get started by installing this to our development dependencies.</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code>yarn add --dev redux-mock-store\n</code></pre>\n      </div>\n<p>No configuration is necessary so we can jump right back into the <code>Map</code> spec and\nbegin creating a mock store.</p>\n<p>We will add a new top-level <code>describe</code> context to the spec which will concern\nthe connected version of the <code>Map</code>. This means we will also have to import the\n<code>ConnectedMap</code> component.</p>\n<div class="gatsby-highlight">\n      <pre class="language-diff"><code>// app/js/components/Map/__specs__/Map.spec.jsx\n\n  import React from \'react\';\n  import { shallow } from \'enzyme\';\n\n  import { pointsMock } from \'../../../spec-helper\';\n<span class="token deleted">- import { Map } from \'../\';</span>\n<span class="token inserted">+ import ConnectedMap, { Map } from \'../\';</span>\n\n  describe(\'Map component\', () => {\n    describe(\'when there are no points\', () => {\n      it(\'matches the snapshot\', () => {\n        const wrapper = shallow(&lt;Map points={[]} />);\n\n        expect(wrapper).toMatchSnapshot();\n      });\n    });\n\n    describe(\'when there are points\', () => {\n      it(\'matches the snapshot\', () => {\n        const wrapper = shallow(&lt;Map points={pointsMock} />);\n\n        expect(wrapper).toMatchSnapshot();\n      });\n    });\n  });\n<span class="token inserted">+</span>\n<span class="token inserted">+ describe(\'ConnectedMap component\', () => {});</span>\n</code></pre>\n      </div>\n<p>We can now import the <code>configureStore</code> function from <code>redux-mock-store</code>. We call\nthis function and pass it Redux a list of middleware libraries that our\napplication uses. Since we do not have any custom middleware in this application\nwe will pass an empty array to <code>configureStore</code>. This function returns a new\nfunction which we will name <code>mockStore</code> that allows us to build a mocked Redux\nstore. We can pass any data we want to the <code>mockStore</code> function and it will be\nused as the store state. The returned value from <code>mockStore</code> is the Redux store\nobject which we must give to the connected component we want to test as a prop.</p>\n<p>We will pass the <code>pointsMock</code> mock data as our store value. We must however pass\nan object <code>{ points: pointsMock }</code> because we are telling the mock store that\nthe <code>pointsMock</code> array is the state of the <code>points</code> reducer. Basically, the keys\nof the object you pass must match the reducer names that were defined in your\n<code>combineReducers</code> call inside of <code>app/js/reducers/index.js</code>.</p>\n<p>The final step, as with the unconnected components, is to mount the component\nusing <code>shallow</code> and tell Jest to expect the mounted component matches the\nsnapshot.</p>\n<div class="gatsby-highlight">\n      <pre class="language-diff"><code>// app/js/components/Map/__specs__/Map.spec.jsx\n\n  import React from \'react\';\n  import { shallow } from \'enzyme\';\n<span class="token inserted">+ import configureStore from \'redux-mock-store\';</span>\n\n  describe(\'ConnectedMap component\', () => {\n<span class="token inserted">+   const mockStore = configureStore([]);</span>\n<span class="token inserted">+   const store = mockStore({ points: pointsMock });</span>\n<span class="token inserted">+</span>\n<span class="token inserted">+   it(\'maps store state to the props\', () => {</span>\n<span class="token inserted">+     const wrapper = shallow(&lt;ConnectedMap store={store} />);</span>\n<span class="token inserted">+</span>\n<span class="token inserted">+     expect(wrapper).toMatchSnapshot();</span>\n<span class="token inserted">+   });</span>\n  });\n</code></pre>\n      </div>\n<p>If you run the tests with <code>yarn test</code> in your terminal you should see all tests\npassing and a new snapshot for the connected component has been written.</p>\n<p>Take a look at the\n<code>app/js/components/Map/__specs__/__snapshots__/Map.spec.jsx.snap</code> file and you\nwill see the following snapshot has been written.</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code>exports<span class="token punctuation">[</span><span class="token template-string"><span class="token string">`ConnectedMap component maps store state to the props 1`</span></span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token template-string"><span class="token string">`\n&lt;Map\n  dispatch={[Function]}\n  points={\n    Array [\n      Object {\n        "details": Object {\n          "house": "Night\'s Watch",\n          "name": "The Wall",\n          "words": "Night gathers, and now my watch begins.",\n        },\n        "favourite": true,\n        "id": 1,\n        "x": 450,\n        "y": 110,\n      },\n      Object {\n        "details": Object {\n          "house": "Stark",\n          "name": "Winterfell",\n          "words": "Winter is Coming",\n        },\n        "favourite": false,\n        "id": 2,\n        "x": 375,\n        "y": 355,\n      },\n    ]\n  }\n  store={\n    Object {\n      "clearActions": [Function],\n      "dispatch": [Function],\n      "getActions": [Function],\n      "getState": [Function],\n      "replaceReducer": [Function],\n      "subscribe": [Function],\n    }\n  }\n  storeSubscription={\n    Subscription {\n      "listeners": Object {\n        "clear": [Function],\n        "get": [Function],\n        "notify": [Function],\n        "subscribe": [Function],\n      },\n      "onStateChange": [Function],\n      "parentSub": undefined,\n      "store": Object {\n        "clearActions": [Function],\n        "dispatch": [Function],\n        "getActions": [Function],\n        "getState": [Function],\n        "replaceReducer": [Function],\n        "subscribe": [Function],\n      },\n      "unsubscribe": [Function],\n    }\n  }\n/>\n`</span></span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>Although we don\'t see the actual <code>Pointer</code> instances that the <code>Map</code> would\ngenerate with this data as we can see in the unconnected snapshots, we do see\nwhat information Redux is passing to the <code>Map</code>. The <code>store</code>,\n<code>storeSubscription</code>, and <code>dispatch</code> props can be ignored as they are internals\nof <code>react-redux</code> but we do see the <code>points</code> prop that Redux will automatically\npass into the <code>Map</code> component is the mock data that we expected from the store.\nThis tells us the <code>mapStateToProps</code> function from the <code>Map</code> is working\ncorrectly.</p>\n<p>We now know how to test connected and unconnected components. We will continue\nin the next steps to cover the rest of our components, starting with the <code>App</code>.</p>',frontmatter:{title:"Testing Connected Components",step:22}},allMarkdownRemark:{edges:[{node:{fields:{slug:"/tutorial/getting-started/"},frontmatter:{title:"Getting Started",step:null}}},{node:{fields:{slug:"/tutorial/links/"},frontmatter:{title:"Links",step:null}}},{node:{fields:{slug:"/tutorial/steps/1-setup-package/"},frontmatter:{title:"Generate the package.json",step:1}}},{node:{fields:{slug:"/tutorial/steps/10-pointer-details/"},frontmatter:{title:"Showing the Details of each Point",step:10}}},{node:{fields:{slug:"/tutorial/steps/11-favourite-places/"},frontmatter:{title:"Favourite Places",step:11}}},{node:{fields:{slug:"/tutorial/steps/12-favourites-list/"},frontmatter:{title:"Favourites List",step:12}}},{node:{fields:{slug:"/tutorial/steps/13-adding-redux/"},frontmatter:{title:"Starting with Redux",step:13}}},{node:{fields:{slug:"/tutorial/steps/14-managing-favourites-with-redux/"},frontmatter:{title:"Managing Favourites with Redux",step:14}}},{node:{fields:{slug:"/tutorial/steps/2-webpack/"},frontmatter:{title:"Setting up Webpack",step:2}}},{node:{fields:{slug:"/tutorial/steps/3-babel/"},frontmatter:{title:"Setting up Babel",step:3}}},{node:{fields:{slug:"/tutorial/steps/4-eslint-and-prettier/"},frontmatter:{title:"ESLint and Prettier",step:4}}},{node:{fields:{slug:"/tutorial/steps/5-starting-react/"},frontmatter:{title:"Starting with React",step:5}}},{node:{fields:{slug:"/tutorial/steps/6-adding-the-map/"},frontmatter:{title:"Adding the Map",step:6}}},{node:{fields:{slug:"/tutorial/steps/7-styling-with-postcss/"},frontmatter:{title:"CSS Modules and PostCSS",step:7}}},{node:{fields:{slug:"/tutorial/steps/8-webpack-dev-server/"},frontmatter:{title:"Webpack Dev Server",step:8}}},{node:{fields:{slug:"/tutorial/steps/9-adding-points-to-the-map/"},frontmatter:{title:"Adding Points to the Map",step:9}}},{node:{fields:{slug:"/tutorial/steps/15-removing-favourites-from-the-list/"},frontmatter:{title:"Removing Favourites from the List",step:15}}},{node:{fields:{slug:"/tutorial/steps/16-ids-for-points/"},frontmatter:{title:"Adding IDs to the Points Data",step:16}}},{node:{fields:{slug:"/tutorial/steps/17-testing-with-jest/"},frontmatter:{title:"Testing with Jest",step:17}}},{node:{fields:{slug:"/tutorial/steps/18-testing-redux-actions/"},frontmatter:{title:"Testing Redux Actions",step:18}}},{node:{fields:{slug:"/tutorial/steps/19-testing-redux-reducers/"},frontmatter:{title:"Testing Redux Reducers",step:19}}},{node:{fields:{slug:"/tutorial/steps/20-jest-component-configuration/"},frontmatter:{title:"Preparing Component testing with Jest",step:20}}},{node:{fields:{slug:"/tutorial/steps/21-testing-the-map/"},frontmatter:{title:"Testing the Map",step:21}}},{node:{fields:{slug:"/tutorial/steps/22-testing-connected-components/"},frontmatter:{title:"Testing Connected Components",step:22}}},{node:{fields:{slug:"/tutorial/steps/23-test-the-app-component/"},frontmatter:{title:"Testing the App Component",step:23}}},{node:{fields:{slug:"/tutorial/steps/24-test-favourites-list/"},frontmatter:{title:"Testing the Favourites List",step:24}}}]}},pathContext:{slug:"/tutorial/steps/22-testing-connected-components/"}}}});
//# sourceMappingURL=path---tutorial-steps-22-testing-connected-components-004093c6d80cc9300f01.js.map