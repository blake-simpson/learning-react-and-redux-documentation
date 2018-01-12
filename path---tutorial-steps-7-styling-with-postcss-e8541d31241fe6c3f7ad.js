webpackJsonp([0x9cfc32e64ef2],{343:function(n,s){n.exports={data:{markdownRemark:{html:'<p>We now have the map rendered to the screen but we don\'t yet have any styles.\nLet\'s add the ability to style the project to make it look better. We could\nstyle the project with a regular CSS but instead let\'s look at using CSS\nmodules.</p>\n<h2>CSS Modules</h2>\n<p>Because we are using Webpack, we can easily add support for CSS modules. CSS\nModules allow us to split our CSS into separate files that map to different\ncomponents of our application. Since we are using React, which is based on\ncomponents these 2 technologies play very well together.</p>\n<p>An advantage of using CSS modules is that class names no longer need to be\nunique across the whole application. In one module you could have a class name\ncalled <code>.info</code> with a text color green. In another module you can also use the\nname <code>.info</code> but have red text.</p>\n<p>This is possible because when using a CSS module, you import it and apply an\nimported style as a class name. When the application is compiled a unique hash\nis built for each class name, so from your point of view as a developer 2\nmodules can use the same class name, in reality everything will be unique. For\nexample <sup id="fnref-1"><a href="#fn-1" class="footnote-ref">1</a></sup>:</p>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code>// styles.css\n\n.title {\n  background-color: red;\n}\n\n// index.js\n\nimport styles from "./styles.css";\n\nelement.innerHTML =\n  `<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>${styles.title}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n     An example heading\n   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>`;\n</code></pre>\n      </div>\n<p>This will compile to the final following HTML:</p>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code>// index.html\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text/css<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token style language-css">\n<span class="token selector">._styles__title_309571057</span> <span class="token punctuation">{</span>\n  <span class="token property">background-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>_styles__title_309571057<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  An example heading\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>\n</code></pre>\n      </div>\n<h2>PostCSS</h2>\n<p>CSS Modules are not in the official CSS spec, meaning we can not simply use them\nin the browser. However, they are available with <a href="http://postcss.org/">PostCSS</a>.\nPostCSS also offers the ability to use other new features available from "CSS\nNext" <sup id="fnref-2"><a href="#fn-2" class="footnote-ref">2</a></sup> (features which are planned for the CSS spec but not implemented yet)\nsuch as variables, mixins, nesting, and, functions. People who have used\nSASS/SCSS may be familiar with should be familiar with these, except now we do\nnot need to the SASS plugin or filetypes.</p>\n<h3>Installing PostCSS</h3>\n<p>Let\'s start by integrating PostCSS with our Webpack build. As always, let\'s\nfirst install the necessary dependencies. We will first the Webpack\n<code>postcss-loader</code>. PostCSS features are separated into different packages\ndepending on the features you need so we will also install <code>postcss</code> for the\ncore PostCSS functionality, <code>postcss-nested</code> to have a SASS-like nested syntax,\nand <code>autoprefixer</code> to automatically handle our vendor prefixes.</p>\n<p>Finally we will install <code>style-loader</code> and <code>css-loader</code> as fallback loaders for\nWebpack to use to process styles.</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code>yarn add postcss postcss-nested postcss-loader style-loader css-loader autoprefixer\n</code></pre>\n      </div>\n<p>Next we will set up a configuration file for PostCSS, detailing which plugins we\nwant it to use. Create a file in the root of the project called\n<code>postcss.config.js</code> and add the following configuration that tells PostCSS that\nwe want to use the nested and autoprefixer plugins.</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token comment">// postcss.config.js</span>\n\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  plugins<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'autoprefixer\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'postcss-nested\'</span><span class="token punctuation">)</span><span class="token punctuation">]</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>Finally we will extend the <code>loaders</code> section of our <code>webpack.config.js</code> file and\ninstruct Webpack to look for all <code>.css</code> files (except inside <code>node_modules/</code>)\nand use the loaders we installed, in order.</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code>loaders<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n  <span class="token operator">...</span>\n  <span class="token punctuation">{</span>\n    test<span class="token punctuation">:</span> <span class="token regex">/\\.css$/</span><span class="token punctuation">,</span>\n    exclude<span class="token punctuation">:</span> <span class="token regex">/node_modules/</span><span class="token punctuation">,</span>\n    use<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        loader<span class="token punctuation">:</span> <span class="token string">\'style-loader\'</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span>\n        loader<span class="token punctuation">:</span> <span class="token string">\'css-loader\'</span><span class="token punctuation">,</span>\n        options<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n          modules<span class="token punctuation">:</span> <span class="token boolean">true</span>\n        <span class="token punctuation">}</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span>\n        loader<span class="token punctuation">:</span> <span class="token string">\'postcss-loader\'</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">]</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">]</span>\n<span class="token operator">...</span>\n</code></pre>\n      </div>\n<p>First Webpack will try to parse styles and then look for regular CSS files. Note\nthat we tell Webpack that we plan to use CSS modules by passing <code>modules: true</code>\nto the <code>css-loader</code> options. Finally we apply the PostCSS loader which will take\ncare of handling all of the modern syntax that we will be writing.</p>\n<h2>Writing our first CSS Modules</h2>\n<p>Everything is now setup, let\'s add our first CSS module for the <code>&#x3C;Map /></code>\ncomponent.</p>\n<p>Create a file called <code>Map.css</code> in the Map component directory. There we will add\na simple class name for the map and write some simple CSS to center it on the\nscreen and add a border shadow.</p>\n<div class="gatsby-highlight">\n      <pre class="language-css"><code><span class="token comment">/* app/js/components/Map/Map.css */</span>\n\n<span class="token selector">.map</span> <span class="token punctuation">{</span>\n  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>\n  <span class="token property">margin</span><span class="token punctuation">:</span> 0 auto<span class="token punctuation">;</span>\n  <span class="token property">width</span><span class="token punctuation">:</span> 772px<span class="token punctuation">;</span>\n  <span class="token property">height</span><span class="token punctuation">:</span> 1518px<span class="token punctuation">;</span>\n  <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 0 20px 0 <span class="token function">rgba</span><span class="token punctuation">(</span>0, 0, 0, 0.4<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>Next we will import this CSS module into our React component and apply the\nstyles.</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code><span class="token comment">// app/js/components/Map/Map.jsx</span>\n\n<span class="token keyword">import</span> styles <span class="token keyword">from</span> <span class="token string">\'./Map.css\'</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>Next we will add a wrapper around our <code>&#x3C;img /></code> tag and apply the <code>.map</code> styles.</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code><span class="token comment">// app/js/components/Map/Map.jsx</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">Map</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>map<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>westeros<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>It is important to note here when using React due to "class" being a reserved\nword in JavaScript, and ultimately JSX compiles ot JavaScript you must always\napply classes with the <code>className</code> prop instead.</p>\n<p>Now run <code>yarn dev</code>, take a look at our web page and see that the map has been\nstyles applied and if you open the developer console, you will see the generated\nhash that is applied by the CSS module. You may also notice that our PostCSS\nplugins are working because the <code>box-shadow</code> rule has been automatically vendor\nprefixed.</p>\n<p><div>\n          <a\n            class="gatsby-resp-image-link"\n            title="original image"\n            href="/static/css-modules-3e05d9b4ed0f21b57766ec580aac6825-9945c.png"\n            style="display: block"\n            target="_blank"\n          >\n            <div\n              class="gatsby-resp-image-wrapper"\n              style="position: relative; z-index: -1; "\n            >\n              <div\n                class="gatsby-resp-image-background-image"\n                style="padding-bottom: 47.56554307116105%;position: relative; width: 100%; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsSAAALEgHS3X78AAACBElEQVQoz32SXWsTURCG9zdUTJvPprVQEEEMpsbWCOIPEIrinym9iXpn9ErwQvwLovcNmC4ImgsTthtRbJOYZjd79jPZZHfz8TrnBKpo6cDLDMPynmdmVtp99BiFnSKK9+6j9PQZVFWFoihoNBrQNR0Gs2DaLlzXheM4Z7nT6aDVaonc7XZFz7ZtSLe2i0iuriO7sYkHuw9RrVaFZFmGqTN4lodgHAGYnymKIgyGQ4RhiOl0KhSGAYIgIEOii6ezSGavoPzyBSqVAxxWDylXYPQNaO0eWJ+h/csW6ukOvMEADtEzgx70PMznc2E2Ho8hFe7cFYbLyTRKT0qo17/i6EjBl9pn+L4PS7OIMMBoFAmNg0gQOm0a+ecxbNMiukhQcmMpf3sHK6lVxBJpbFG9t7+P5+Uy1GYDo4GPYBjg35hMJvD0PlhPg8lMmJYFh3bLAaTcVgGX4ykizODScgKbV6/heu4mGe/Bc1zMprP/DPnuXMbg2HQId0hH88jUXhwlly9gKRYXpinaIyddiq1QvS4+OC844Yj2aJwewz1VMdSa8G19cRROyMm4Epk1MX4ikxW1QUs/L2azBbXxQ4by6Q1Oam8RdOuiJ93I/xmZ03Hxmv9KBrvYkJ3IeHfwGh/lV/BbtYWhGJno/jaME11qbQOMFn6R4ainwP/2AYPme4T976L3G4OPdpjhcCd7AAAAAElFTkSuQmCC\'); background-size: cover;"\n              >\n                <img\n                  class="gatsby-resp-image-image"\n                  style="width: 100%; margin: 0; vertical-align: middle; position: absolute; box-shadow: inset 0px 0px 0px 400px white;"\n                  alt="Img: CSS modules applied to the Map"\n                  title=""\n                  src="/static/css-modules-3e05d9b4ed0f21b57766ec580aac6825-ba9a0.png"\n                  srcset="/static/css-modules-3e05d9b4ed0f21b57766ec580aac6825-125fe.png 163w,/static/css-modules-3e05d9b4ed0f21b57766ec580aac6825-637de.png 325w,/static/css-modules-3e05d9b4ed0f21b57766ec580aac6825-ba9a0.png 650w,/static/css-modules-3e05d9b4ed0f21b57766ec580aac6825-31247.png 975w,/static/css-modules-3e05d9b4ed0f21b57766ec580aac6825-9945c.png 1068w"\n                  sizes="(max-width: 650px) 100vw, 650px"\n                />\n              </div>\n            </div>\n          </a>\n          </div></p>\n<h2>Exploring PostCSS and CSS Modules</h2>\n<p>We are no confident that we can apply CSS to the project but currently the map\nis not looking very good. Let\'s go ahead and theme the project that we have and\nat the same time learn how to use the "CSS Next" features that PostCSS is\nproviding us.</p>\n<p>First we will update the Map from using an <code>&#x3C;img /></code> tag to being a background\nimage. This will allow us to support high definition screens by using the\n<code>background-size</code> rule.</p>\n<div class="gatsby-highlight">\n      <pre class="language-diff"><code>/* app/js/components/Map/Map.css */\n\n.map {\n  position: relative;\n  margin: 0 auto;\n  width: 772px;\n  height: 1518px;\n  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.4);\n<span class="token inserted">+ background-image: url(\'../../../img/westeros.jpg\');</span>\n<span class="token inserted">+ background-size: 772px 1518px;</span>\n}\n</code></pre>\n      </div>\n<p>We can then also update the Map component because it no longer needs the\n`<img /> tag or the westeros graphic to be imported.</p>\n<div class="gatsby-highlight">\n      <pre class="language-diff"><code>// app/js/components/Map/Map.jsx\n\nimport React from \'react\';\n\nimport styles from \'./Map.css\';\n<span class="token deleted">- import westeros from \'../../../img/westeros.jpg\';</span>\n\nconst Map = () => {\n  return (\n<span class="token deleted">-    &lt;div className={styles.map}></span>\n<span class="token deleted">-      &lt;img src={westeros} />;</span>\n<span class="token deleted">-    &lt;/div></span>\n<span class="token inserted">+    &lt;div className={styles.map} /></span>\n  );\n};\n\nexport default Map;\n</code></pre>\n      </div>\n<p>If you run <code>yarn dev</code> again and view the changes, you will see the map is\nalready looking better.</p>\n<h4>Using CSS variables</h4>\n<p>Our CSS module is now using the width and height values twice. Let\'s clean this\nup by using CSS variables to set the value and apply them using the <code>var</code>\nsyntax.</p>\n<div class="gatsby-highlight">\n      <pre class="language-css"><code><span class="token comment">/* app/js/components/Map/Map.css */</span>\n\n<span class="token selector">.map</span> <span class="token punctuation">{</span>\n  <span class="token property">--mapWidth</span><span class="token punctuation">:</span> 772px<span class="token punctuation">;</span>\n  <span class="token property">--mapHeight</span><span class="token punctuation">:</span> 1518px<span class="token punctuation">;</span>\n\n  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>\n  <span class="token property">margin</span><span class="token punctuation">:</span> 0 auto<span class="token punctuation">;</span>\n  <span class="token property">width</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--mapWidth<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token property">height</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--mapHeight<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 0 20px 0 <span class="token function">rgba</span><span class="token punctuation">(</span>0, 0, 0, 0.4<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url">url(\'../../../img/westeros.jpg\')</span><span class="token punctuation">;</span>\n  <span class="token property">background-size</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--mapWidth<span class="token punctuation">)</span> <span class="token function">var</span><span class="token punctuation">(</span>--mapHeight<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<h4>Styling global elements</h4>\n<p>At this point it would be good to have the background of the page match the map\na little better. When using CSS modules with React, no module can be applied\ndirectly to the body but we can still style the body by adding rules for it in\nany CSS module.</p>\n<p>As it would be confusing to style the body inside the CSS component for the Map,\nit is a better practise to create a CSS module for your root <code>&#x3C;App /></code> component\nand put all global styles (and variables) there.</p>\n<p>Let\'s create an <code>App.css</code> file in the App component and back a background color.\nWe will also add some font rules that we will need later.</p>\n<div class="gatsby-highlight">\n      <pre class="language-css"><code><span class="token comment">/* app/js/components/App/App.css */</span>\n\n<span class="token selector">body</span> <span class="token punctuation">{</span>\n  <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>\n  <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>\n  <span class="token property">background</span><span class="token punctuation">:</span> #171a1d<span class="token punctuation">;</span>\n  <span class="token property">color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>\n  <span class="token property">font-family</span><span class="token punctuation">:</span> Palatino, Georgia, serif<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>We will then also import this module into the <code>&#x3C;App /></code> module. We will also\nhave to tell ESLint to ignore the <code>no-unused-vars</code> rule for that import since we\nhave to give a variable that the styles are imported to but in this case we have\nno class names to actually apply in our markup.</p>\n<div class="gatsby-highlight">\n      <pre class="language-diff"><code>// app/js/components/App/App.jsx\n\nimport Map from \'../Map\';\n\n<span class="token inserted">+ // eslint-disable-next-line no-unused-vars</span>\n<span class="token inserted">+ import styles from \'./App.css\';</span>\n</code></pre>\n      </div>\n<h4>Sharing variables via :root</h4>\n<p>Finally, let\'s move the generic values we are using in the <code>body</code> to CSS\nvariables so that they can be used later. Instead of storing them inside the\ndefinition for body, let\'s look at <code>:root</code>.</p>\n<blockquote>\n<p>The <code>:root</code> CSS pseudo-class matches the root element of a tree representing\nthe document. In HTML, <code>:root</code> represents the <code>&#x3C;html></code>element and is identical\nto the selector html, except that its specificity is higher. <sup id="fnref-3"><a href="#fn-3" class="footnote-ref">3</a></sup></p>\n</blockquote>\n<p>This means that definitions done inside of the <code>:root</code> selector will be global\nto the page, so in order to share variables across CSS modules we can move them\nthere. Let\'s now create variables for the generic styles and also move the Map\nvariables here away from the <code>Map.css</code> module.</p>\n<div class="gatsby-highlight">\n      <pre class="language-diff"><code>/* app/js/components/Map/Map.css */\n\n.map {\n<span class="token deleted">-  --mapWidth: 772px;</span>\n<span class="token deleted">-  --mapHeight: 1518px;</span>\n<span class="token deleted">-</span>\n  position: relative;\n  margin: 0 auto;\n  width: var(--mapWidth);\n  height: var(--mapHeight);\n  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.4);\n  background-image: url(\'../../../img/westeros.jpg\');\n  background-size: var(--mapWidth) var(--mapHeight);\n}\n</code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="language-css"><code><span class="token comment">/* app/js/components/App/App.css */</span>\n\n<span class="token selector">:root</span> <span class="token punctuation">{</span>\n  <span class="token property">--background</span><span class="token punctuation">:</span> #171a1d<span class="token punctuation">;</span>\n  <span class="token property">--text</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>\n  <span class="token property">--fontStack</span><span class="token punctuation">:</span> Palatino, Georgia, serif<span class="token punctuation">;</span>\n\n  <span class="token property">--mapWidth</span><span class="token punctuation">:</span> 772px<span class="token punctuation">;</span>\n  <span class="token property">--mapHeight</span><span class="token punctuation">:</span> 1518px<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token selector">body</span> <span class="token punctuation">{</span>\n  <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>\n  <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>\n  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--background<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--text<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--fontStack<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>Now run <code>yarn dev</code> again and refresh the changes to see the application now has\na dark background and the map is still positioned as before.</p>\n<p><div>\n          <a\n            class="gatsby-resp-image-link"\n            title="original image"\n            href="/static/styled-map-5172080aa7e6bcb18f285290bda12988-158bc.png"\n            style="display: block"\n            target="_blank"\n          >\n            <div\n              class="gatsby-resp-image-wrapper"\n              style="position: relative; z-index: -1; "\n            >\n              <div\n                class="gatsby-resp-image-background-image"\n                style="padding-bottom: 43.27628361858191%;position: relative; width: 100%; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYAAAAywQxIAAAACXBIWXMAAAsSAAALEgHS3X78AAABvUlEQVQoz43S70tTYRTAcf8HdZubc41b3ok6Ny0QglJZi375I+pFsebl6ti8RkW6Zv64K++dztpSepUZEaShkFGuN/sDRggj8C/69txrQgg5Xxye5835POec59S53C0chbPJi8fn5/PmJpVKhWq1SqlUsqNcLmMumXT1XCDQEcTrl3C4vTS6mvnXqDsOupp9FIpF9vd/cXDwm40PG6y/f8fut11KP3+wvfOFi5cuMxCJIMkBHFbO/0CHeK3B5aG9K8ytoWHerK3SF4mS0jS2tj6x932brzsfCYbCKMp9pFZZgCdU2PgXrHe6afL6uXb9Km6fxKSmkjfTrK/N8vbVNLeHo0Su9HNGOns60JpNR2c7gTaZnvMhph7FWEiPsvhcYVkfQxf3cWWIcHewFnhYXb0474xEGbzRT1IdYT79AHNhjJdzKgUjRdGY4MnEXUKhztqgVaHcFiDzNC6QBMvZJDl9nLyAXuc0VpceMjcdp7e3W4zFZ+ec+MvWOsRjN1kRwItZ1W5VfzaKqScp5CZZWUyRUAbtbXB6WmqD1uzyRhIjm8CYV8k8vifAONmMQsHUMETr2ZkYrfI5Gz0O/gG/tUIeFoqctAAAAABJRU5ErkJggg==\'); background-size: cover;"\n              >\n                <img\n                  class="gatsby-resp-image-image"\n                  style="width: 100%; margin: 0; vertical-align: middle; position: absolute; box-shadow: inset 0px 0px 0px 400px white;"\n                  alt="Img: The final styled map"\n                  title=""\n                  src="/static/styled-map-5172080aa7e6bcb18f285290bda12988-ba9a0.png"\n                  srcset="/static/styled-map-5172080aa7e6bcb18f285290bda12988-125fe.png 163w,/static/styled-map-5172080aa7e6bcb18f285290bda12988-637de.png 325w,/static/styled-map-5172080aa7e6bcb18f285290bda12988-ba9a0.png 650w,/static/styled-map-5172080aa7e6bcb18f285290bda12988-31247.png 975w,/static/styled-map-5172080aa7e6bcb18f285290bda12988-158bc.png 1227w"\n                  sizes="(max-width: 650px) 100vw, 650px"\n                />\n              </div>\n            </div>\n          </a>\n          </div></p>\n<h2>Next steps</h2>\n<p>If you have had enough of constantly typing <code>yarn dev</code> then luckily the next\nstep is to introduce <code>webpack-dev-server</code> which will take care of building out\napp each time we change a file.</p>\n<hr>\n<ul>\n<li><sup id="fn-1">[1]</sup>: <a href="https://css-tricks.com/css-modules-part-1-need/">https://css-tricks.com/css-modules-part-1-need/</a></li>\n<li><sup id="fn-2">[2]</sup>: <a href="http://cssnext.io/">http://cssnext.io/</a></li>\n<li><sup id="fn-3">[3]</sup>:\n<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/:root">https://developer.mozilla.org/en-US/docs/Web/CSS/:root</a></li>\n</ul>',frontmatter:{title:"CSS Modules and PostCSS",step:7}},allMarkdownRemark:{edges:[{node:{fields:{slug:"/tutorial/getting-started/"},frontmatter:{title:"Getting Started",step:null}}},{node:{fields:{slug:"/tutorial/links/"},frontmatter:{title:"Links",step:null}}},{node:{fields:{slug:"/tutorial/steps/1-setup-package/"},frontmatter:{title:"Generate the package.json",step:1}}},{node:{fields:{slug:"/tutorial/steps/10-pointer-details/"},frontmatter:{title:"Showing the Details of each Point",step:10}}},{node:{fields:{slug:"/tutorial/steps/11-favourite-places/"},frontmatter:{title:"Favourite Places",step:11}}},{node:{fields:{slug:"/tutorial/steps/12-favourites-list/"},frontmatter:{title:"Favourites List",step:12}}},{node:{fields:{slug:"/tutorial/steps/13-adding-redux/"},frontmatter:{title:"Starting with Redux",step:13}}},{node:{fields:{slug:"/tutorial/steps/14-managing-favourites-with-redux/"},frontmatter:{title:"Managing Favourites with Redux",step:14}}},{node:{fields:{slug:"/tutorial/steps/2-webpack/"},frontmatter:{title:"Setting up Webpack",step:2}}},{node:{fields:{slug:"/tutorial/steps/3-babel/"},frontmatter:{title:"Setting up Babel",step:3}}},{node:{fields:{slug:"/tutorial/steps/4-eslint-and-prettier/"},frontmatter:{title:"ESLint and Prettier",step:4}}},{node:{fields:{slug:"/tutorial/steps/5-starting-react/"},frontmatter:{title:"Starting with React",step:5}}},{node:{fields:{slug:"/tutorial/steps/6-adding-the-map/"},frontmatter:{title:"Adding the Map",step:6}}},{node:{fields:{slug:"/tutorial/steps/7-styling-with-postcss/"},frontmatter:{title:"CSS Modules and PostCSS",step:7}}},{node:{fields:{slug:"/tutorial/steps/8-webpack-dev-server/"},frontmatter:{title:"Webpack Dev Server",step:8}}},{node:{fields:{slug:"/tutorial/steps/9-adding-points-to-the-map/"},frontmatter:{title:"Adding Points to the Map",step:9}}},{node:{fields:{slug:"/tutorial/steps/15-removing-favourites-from-the-list/"},frontmatter:{title:"Removing Favourites from the List",step:15}}},{node:{fields:{slug:"/tutorial/steps/16-ids-for-points/"},frontmatter:{title:"Adding IDs to the Points Data",step:16}}},{node:{fields:{slug:"/tutorial/steps/17-testing-with-jest/"},frontmatter:{title:"Testing with Jest",step:17}}},{node:{fields:{slug:"/tutorial/steps/18-testing-redux-actions/"},frontmatter:{title:"Testing Redux Actions",step:18}}},{node:{fields:{slug:"/tutorial/steps/19-testing-redux-reducers/"},frontmatter:{title:"Testing Redux Reducers",step:19}}},{node:{fields:{slug:"/tutorial/steps/20-jest-component-configuration/"},frontmatter:{title:"Preparing Component testing with Jest",step:20}}},{node:{fields:{slug:"/tutorial/steps/21-testing-the-map/"},frontmatter:{title:"Testing the Map",step:21}}},{node:{fields:{slug:"/tutorial/steps/22-testing-connected-components/"},frontmatter:{title:"Testing Connected Components",step:22}}},{node:{fields:{slug:"/tutorial/steps/23-test-the-app-component/"},frontmatter:{title:"Testing the App Component",step:23}}},{node:{fields:{slug:"/tutorial/steps/24-test-favourites-list/"},frontmatter:{title:"Testing the Favourites List",step:24}}}]}},pathContext:{slug:"/tutorial/steps/7-styling-with-postcss/"}}}});
//# sourceMappingURL=path---tutorial-steps-7-styling-with-postcss-e8541d31241fe6c3f7ad.js.map