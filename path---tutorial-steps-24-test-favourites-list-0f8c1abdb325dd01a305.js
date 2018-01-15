webpackJsonp([0x99b784486c5e],{339:function(e,t){e.exports={data:{markdownRemark:{html:"<p>We will now test the <code>FavouritesList</code> component. We will start with the\nunconnected version before continuing to test the connected Redux state. Finally\nwe will discover how to test user interactions by simulating a click on the\nremove button.</p>\n<h2>Testing the Unconnected FavouritesList</h2>\n<p>The testing of the unconnected component should be coming familiar to you now.\nWe will follow the same pattern as we have done with the previous components,\nthis spec is especially similar to the <code>Map</code> spec.</p>\n<p>First we import <code>React</code>, <code>shallow</code> from enzyme, the unconnected component we\nwant to test, and the mocked data.</p>\n<p>We then defined our <code>describe</code> contexts with the tests defined with <code>it</code> inside\nof them. We mount the components using <code>shallow</code> and use <code>expect</code> from Jest\nalong with the <code>toMatchSnapshot</code> matcher.</p>\n<p>The only difference we have here is that the <code>FavouritesList</code> expects a prop\ncalled <code>remove</code>, which if you remember, is the <code>removeFavourite</code> action being\npassed to the component by Redux via the <code>mapDispatchToProps</code> function inside of\nthe component. Since we are not testing the Redux functionality here we can\nsimply pass an empty function that does nothing, since the <code>remove</code> prop will\nnot be called form this test. We call this function <code>noop</code> which is a convention\nfor a function that does nothing. It is short for \"no operation\".</p>\n<pre><code class=\"language-jsx\">// app/js/components/FavouritesList/__specs__/FavouritesList.spec.jsx\n\nimport React from 'react';\nimport { shallow } from 'enzyme';\n\nimport { pointsMock } from '../../../spec-helper';\nimport { FavouritesList } from '../';\n\nconst noop = () => {};\n\ndescribe('FavouritesList component', () => {\n  describe('when there are no points', () => {\n    it('matches the snapshot', () => {\n      const wrapper = shallow(&#x3C;FavouritesList points={[]} remove={noop} />);\n\n      expect(wrapper).toMatchSnapshot();\n    });\n  });\n\n  describe('When there are points', () => {\n    it('matches the snapshot', () => {\n      const wrapper = shallow(\n        &#x3C;FavouritesList points={pointsMock} remove={noop} />\n      );\n\n      expect(wrapper).toMatchSnapshot();\n    });\n  });\n});\n</code></pre>\n<p>If you run the tests this new spec should be passing. You can take a look at the\nsnapshot to ensure the generated DOM is what you expect.</p>\n<h2>Testing the Connected FavouritesList</h2>\n<p>We will continue as we did with the <code>Map</code> component by importing\n<code>configureStore</code> as well as the connected version of the component.</p>\n<p>We then define a new <code>describe</code> context at the bottom of the file that contains\nthe test which will build our mock store, pass the mock data as the store state,\nmount the connected component using <code>shallow</code>, and finally expected that the\nmounted component matches the snapshot.</p>\n<pre><code class=\"language-diff\">// app/js/components/FavouritesList/__specs__/FavouritesList.spec.jsx\n\n  import React from 'react';\n  import { shallow } from 'enzyme';\n+ import configureStore from 'redux-mock-store';\n\n\n  import { pointsMock } from '../../../spec-helper';\n- import { FavouritesList } from '../';\n+ import ConnectedFavouritesList, { FavouritesList } from '../';\n\n  const noop = () => {};\n\n  describe('FavouritesList component', () => {\n    describe('when there are no points', () => {\n      it('matches the snapshot', () => {\n        const wrapper = shallow(&#x3C;FavouritesList points={[]} remove={noop} />);\n\n        expect(wrapper).toMatchSnapshot();\n      });\n    });\n\n    describe('When there are points', () => {\n      it('matches the snapshot', () => {\n        const wrapper = shallow(\n          &#x3C;FavouritesList points={pointsMock} remove={noop} />\n        );\n\n        expect(wrapper).toMatchSnapshot();\n      });\n    });\n  });\n+\n+ describe('ConnectedFavouritesList component', () => {\n+   const mockStore = configureStore([]);\n+   const store = mockStore({ points: pointsMock });\n+\n+   it('maps store state to the props', () => {\n+     const wrapper = shallow(&#x3C;ConnectedFavouritesList store={store} />);\n+\n+     expect(wrapper).toMatchSnapshot();\n+   });\n+ });\n</code></pre>\n<p>Run the tests again to ensure the connected spec is working as expected and your\nsnapshot file is re-written.</p>\n<h2>Simulating User Interactions</h2>\n<p>The final step of testing the <code>FavouritesList</code> component is testing that when\nthe remove button is clicked, the <code>removeFavourite</code> redux action is dispatched.</p>\n<p>We do this by first of all importing the <code>removeFavourite</code> action that we will\nexpect to be dispatched.</p>\n<pre><code class=\"language-diff\">// app/js/components/FavouritesList/__specs__/FavouritesList.spec.jsx\n\n  import { pointsMock } from '../../../spec-helper';\n+ import { removeFavourite } from '../../../actions';\n  import ConnectedFavouritesList, { FavouritesList } from '../';\n</code></pre>\n<p>Next we import the <code>mount</code> function from enzyme that will do a full mount of our\ncomponent, allowing us to trigger simulated events such as the button click.</p>\n<pre><code class=\"language-diff\">// app/js/components/FavouritesList/__specs__/FavouritesList.spec.jsx\n\n- import { shallow } from 'enzyme';\n+ import { shallow, mount } from 'enzyme';\n</code></pre>\n<p>Finally we will add a new context and test inside of the\n\"ConnectedFavouritesList component\" <code>describe</code> that will mount the connected\ncomponent using the <code>mount</code> function instead of <code>shallow</code>. We then use enzyme to\nto search inside the mounted component (<code>wrapper</code>) for the first <code>&#x3C;button></code> tag\nand simulate a click on it. It will find the first button in the list which is\nassociated with <code>point-1</code>.</p>\n<p>We define in <code>expectedAction</code> that we expect the <code>removeFavourite</code> to be called\nwith the ID of our point. Finally we use Jest to <code>expect</code> that the actions that\nbeen dispatched to the store match the ones we expected.</p>\n<p>By doing this we don't only test that the <code>remove</code> prop has been called but that\nthe Redux action has actually been dispatched and will reach the reducers.</p>\n<pre><code class=\"language-diff\">// app/js/components/FavouritesList/__specs__/FavouritesList.spec.jsx\n\n  describe('ConnectedFavouritesList component', () => {\n    const mockStore = configureStore([]);\n    const store = mockStore({ points: pointsMock });\n\n    it('maps store state to the props', () => {\n      const wrapper = shallow(&#x3C;ConnectedFavouritesList store={store} />);\n\n      expect(wrapper).toMatchSnapshot();\n    });\n+\n+    describe('when the delete button is clicked', () => {\n+      it('calls the removeFavourite action', () => {\n+        const wrapper = mount(&#x3C;ConnectedFavouritesList store={store} />);\n+        const expectedAction = [removeFavourite('point-1')];\n+\n+        wrapper.find('button').simulate('click');\n+\n+        expect(store.getActions()).toEqual(expectedAction);\n+      });\n+    });\n  });\n</code></pre>\n<p>Run the tests again and you should see everything is passing. We are nearly\ndone! The final step is to test the <code>Pointer</code> component.</p>",frontmatter:{title:"Testing the Favourites List",step:24}},allMarkdownRemark:{edges:[{node:{fields:{slug:"/tutorial/getting-started/"},frontmatter:{title:"Getting Started",step:null}}},{node:{fields:{slug:"/tutorial/links/"},frontmatter:{title:"Links",step:null}}},{node:{fields:{slug:"/tutorial/steps/1-setup-package/"},frontmatter:{title:"Generate the package.json",step:1}}},{node:{fields:{slug:"/tutorial/steps/10-pointer-details/"},frontmatter:{title:"Showing the Details of each Point",step:10}}},{node:{fields:{slug:"/tutorial/steps/11-favourite-places/"},frontmatter:{title:"Favourite Places",step:11}}},{node:{fields:{slug:"/tutorial/steps/12-favourites-list/"},frontmatter:{title:"Favourites List",step:12}}},{node:{fields:{slug:"/tutorial/steps/13-adding-redux/"},frontmatter:{title:"Starting with Redux",step:13}}},{node:{fields:{slug:"/tutorial/steps/14-managing-favourites-with-redux/"},frontmatter:{title:"Managing Favourites with Redux",step:14}}},{node:{fields:{slug:"/tutorial/steps/15-removing-favourites-from-the-list/"},frontmatter:{title:"Removing Favourites from the List",step:15}}},{node:{fields:{slug:"/tutorial/steps/16-ids-for-points/"},frontmatter:{title:"Adding IDs to the Points Data",step:16}}},{node:{fields:{slug:"/tutorial/steps/17-testing-with-jest/"},frontmatter:{title:"Testing with Jest",step:17}}},{node:{fields:{slug:"/tutorial/steps/18-testing-redux-actions/"},frontmatter:{title:"Testing Redux Actions",step:18}}},{node:{fields:{slug:"/tutorial/steps/2-webpack/"},frontmatter:{title:"Setting up Webpack",step:2}}},{node:{fields:{slug:"/tutorial/steps/19-testing-redux-reducers/"},frontmatter:{title:"Testing Redux Reducers",step:19}}},{node:{fields:{slug:"/tutorial/steps/20-jest-component-configuration/"},frontmatter:{title:"Preparing Component testing with Jest",step:20}}},{node:{fields:{slug:"/tutorial/steps/21-testing-the-map/"},frontmatter:{title:"Testing the Map",step:21}}},{node:{fields:{slug:"/tutorial/steps/22-testing-connected-components/"},frontmatter:{title:"Testing Connected Components",step:22}}},{node:{fields:{slug:"/tutorial/steps/23-test-the-app-component/"},frontmatter:{title:"Testing the App Component",step:23}}},{node:{fields:{slug:"/tutorial/steps/24-test-favourites-list/"},frontmatter:{title:"Testing the Favourites List",step:24}}},{node:{fields:{slug:"/tutorial/steps/25-test-the-pointer/"},frontmatter:{title:"Testing the Pointer",step:25}}},{node:{fields:{slug:"/tutorial/steps/3-babel/"},frontmatter:{title:"Setting up Babel",step:3}}},{node:{fields:{slug:"/tutorial/steps/4-eslint-and-prettier/"},frontmatter:{title:"ESLint and Prettier",step:4}}},{node:{fields:{slug:"/tutorial/steps/5-starting-react/"},frontmatter:{title:"Starting with React",step:5}}},{node:{fields:{slug:"/tutorial/steps/6-adding-the-map/"},frontmatter:{title:"Adding the Map",step:6}}},{node:{fields:{slug:"/tutorial/steps/7-styling-with-postcss/"},frontmatter:{title:"CSS Modules and PostCSS",step:7}}},{node:{fields:{slug:"/tutorial/steps/8-webpack-dev-server/"},frontmatter:{title:"Webpack Dev Server",step:8}}},{node:{fields:{slug:"/tutorial/steps/9-adding-points-to-the-map/"},frontmatter:{title:"Adding Points to the Map",step:9}}}]}},pathContext:{slug:"/tutorial/steps/24-test-favourites-list/"}}}});
//# sourceMappingURL=path---tutorial-steps-24-test-favourites-list-0f8c1abdb325dd01a305.js.map