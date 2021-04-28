(window.webpackJsonp=window.webpackJsonp||[]).push([[172],{251:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return s}));var n=r(3),a=r(8),o=(r(0),r(266)),i={id:"release",title:"Release process",sidebar_label:"Release process"},l={unversionedId:"development/release",id:"version-0.11/development/release",isDocsHomePage:!1,title:"Release process",description:"The release process may be automated in the future.",source:"@site/versioned_docs/version-0.11/development/release.md",slug:"/development/release",permalink:"/docs/0.11/development/release",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/versioned_docs/version-0.11/development/release.md",version:"0.11",lastUpdatedBy:"Omry Yadan",lastUpdatedAt:1619645096,formattedLastUpdatedAt:"4/28/2021",sidebar_label:"Release process",sidebar:"version-0.11/docs",previous:{title:"Contributing",permalink:"/docs/0.11/development/contributing"}},c=[],p={toc:c};function s(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The release process may be automated in the future."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Checkout master"),Object(o.b)("li",{parentName:"ul"},"Update the Hydra version in ",Object(o.b)("inlineCode",{parentName:"li"},"hydra/__init__.py")),Object(o.b)("li",{parentName:"ul"},"Update NEWS.md with towncrier"),Object(o.b)("li",{parentName:"ul"},"Create a pip package for hydra-core: ",Object(o.b)("inlineCode",{parentName:"li"},"python setup.py sdist bdist_wheel")),Object(o.b)("li",{parentName:"ul"},"Upload pip package: ",Object(o.b)("inlineCode",{parentName:"li"},"python -m twine upload dist/*")),Object(o.b)("li",{parentName:"ul"},"Optional - Release plugins that needs to depend on new version of Hydra"),Object(o.b)("li",{parentName:"ul"},"Bump repo version")),Object(o.b)("p",null,"Announce release:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Release on GitHub"),Object(o.b)("li",{parentName:"ul"},"Announce on Twitter and Zulip")))}s.isMDXComponent=!0},266:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),s=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(r),b=n,m=u["".concat(i,".").concat(b)]||u[b]||d[b]||o;return r?a.a.createElement(m,l(l({ref:t},p),{},{components:r})):a.a.createElement(m,l({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);