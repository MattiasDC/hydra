(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{130:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return d}));var r=n(3),i=n(8),o=(n(0),n(266)),a=n(273),c={id:"intro",title:"Introduction to Structured Configs",sidebar_label:"Introduction to Structured Configs"},s={unversionedId:"tutorials/structured_config/intro",id:"version-1.0/tutorials/structured_config/intro",isDocsHomePage:!1,title:"Introduction to Structured Configs",description:"This is an advanced tutorial that assumes that you are comfortable with the concepts introduced in the Basic Tutorial.",source:"@site/versioned_docs/version-1.0/tutorials/structured_config/0_intro.md",slug:"/tutorials/structured_config/intro",permalink:"/docs/tutorials/structured_config/intro",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/versioned_docs/version-1.0/tutorials/structured_config/0_intro.md",version:"1.0",lastUpdatedBy:"Omry Yadan",lastUpdatedAt:1619645096,formattedLastUpdatedAt:"4/28/2021",sidebar_label:"Introduction to Structured Configs",sidebar:"version-1.0/docs",previous:{title:"Tab completion",permalink:"/docs/tutorials/basic/running_your_app/tab_completion"},next:{title:"Minimal example",permalink:"/docs/tutorials/structured_config/minimal_example"}},u=[],l={toc:u};function d(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This is an advanced tutorial that assumes that you are comfortable with the concepts introduced in the ",Object(o.b)("a",{parentName:"p",href:"/docs/tutorials/basic/your_first_app/simple_cli"},"Basic Tutorial"),".\nThe examples in this tutorial are available ",Object(o.b)(a.b,{to:"examples/tutorials/structured_configs",mdxType:"GithubLink"},"here"),"."),Object(o.b)("p",null,"Structured Configs use Python ",Object(o.b)("a",{parentName:"p",href:"https://docs.python.org/3.7/library/dataclasses.html"},"dataclasses")," to\ndescribe your configuration structure and types. They enable:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Runtime type checking")," as you compose or mutate your config "),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Static type checking")," when using static type checkers (mypy, PyCharm, etc.)")),Object(o.b)("h4",{id:"structured-configs-supports"},"Structured Configs supports:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Primitive types (",Object(o.b)("inlineCode",{parentName:"li"},"int"),", ",Object(o.b)("inlineCode",{parentName:"li"},"bool"),", ",Object(o.b)("inlineCode",{parentName:"li"},"float"),", ",Object(o.b)("inlineCode",{parentName:"li"},"str"),", ",Object(o.b)("inlineCode",{parentName:"li"},"Enums"),") "),Object(o.b)("li",{parentName:"ul"},"Nesting of Structured Configs"),Object(o.b)("li",{parentName:"ul"},"Containers (List and Dict) containing primitives or Structured Configs"),Object(o.b)("li",{parentName:"ul"},"Optional fields")),Object(o.b)("h4",{id:"structured-configs-limitations"},"Structured Configs Limitations:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"Union")," types are not supported (except ",Object(o.b)("inlineCode",{parentName:"li"},"Optional"),")"),Object(o.b)("li",{parentName:"ul"},"User methods are not supported")),Object(o.b)("h4",{id:"there-are-two-primary-patterns-for-using-structured-configs"},"There are two primary patterns for using Structured configs"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"As a ",Object(o.b)("a",{parentName:"li",href:"/docs/tutorials/structured_config/minimal_example"},"config"),", in place of configuration files (often a starting place)"),Object(o.b)("li",{parentName:"ul"},"As a ",Object(o.b)("a",{parentName:"li",href:"/docs/tutorials/structured_config/schema"},"config schema")," validating configuration files (better for complex use cases)")),Object(o.b)("p",null,"With both patterns, you still get everything Hydra has to offer (config composition, Command line overrides etc).\nThis tutorial covers both. ","*",Object(o.b)("strong",{parentName:"p"},"Read it in order"),"*","."),Object(o.b)("p",null,"Hydra supports OmegaConf's Structured Configs via the ",Object(o.b)("inlineCode",{parentName:"p"},"ConfigStore")," API.\nThis tutorial does not assume any knowledge of them.\nIt is recommended that you visit the ",Object(o.b)("a",{class:"external",href:"https://omegaconf.readthedocs.io/en/latest/structured_config.html",target:"_blank"},"OmegaConf Structured Configs page")," to learn more later."),Object(o.b)("div",{class:"alert alert--info",role:"alert"},"1. The ConfigStore API is new and subject to change.",Object(o.b)("br",null),"2. OmegaConf's Structured Configs are new.",Object(o.b)("br",null),"Please report any issues.",Object(o.b)("br",null)),Object(o.b)("br",null))}d.isMDXComponent=!0},266:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=i.a.createContext({}),l=function(e){var t=i.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=l(e.components);return i.a.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},p=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),p=r,b=d["".concat(a,".").concat(p)]||d[p]||f[p]||o;return n?i.a.createElement(b,c(c({ref:t},u),{},{components:n})):i.a.createElement(b,c({ref:t},u))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var u=2;u<o;u++)a[u]=n[u];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},267:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return i}))},268:function(e,t,n){"use strict";var r=n(0),i=n.n(r),o=n(11),a=n(267),c=n(7),s=Object(r.createContext)({collectLink:function(){}}),u=n(269),l=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n};t.a=function(e){var t,n,d,f=e.isNavLink,p=e.to,b=e.href,g=e.activeClassName,m=e.isActive,v=e["data-noBrokenLinkCheck"],h=e.autoAddBaseUrl,O=void 0===h||h,j=l(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),y=Object(u.b)().withBaseUrl,D=Object(r.useContext)(s),w=p||b,C=Object(a.a)(w),A=null==w?void 0:w.replace("pathname://",""),P=void 0!==A?(n=A,O&&function(e){return e.startsWith("/")}(n)?y(n):n):void 0,x=Object(r.useRef)(!1),N=f?o.e:o.c,V=c.default.canUseIntersectionObserver;Object(r.useEffect)((function(){return!V&&C&&window.docusaurus.prefetch(P),function(){V&&d&&d.disconnect()}}),[P,V,C]);var _=null!==(t=null==P?void 0:P.startsWith("#"))&&void 0!==t&&t,S=!P||!C||_;return P&&C&&!_&&!v&&D.collectLink(P),S?i.a.createElement("a",Object.assign({href:P},w&&!C&&{target:"_blank",rel:"noopener noreferrer"},j)):i.a.createElement(N,Object.assign({},j,{onMouseEnter:function(){x.current||(window.docusaurus.preload(P),x.current=!0)},innerRef:function(e){var t,n;V&&e&&C&&(t=e,n=function(){window.docusaurus.prefetch(P)},(d=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(d.unobserve(t),d.disconnect(),n())}))}))).observe(t))},to:P||""},f&&{isActive:m,activeClassName:g}))}},269:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return a}));var r=n(10),i=n(267);function o(){var e=Object(r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var o=void 0===r?{}:r,a=o.forcePrependBaseUrl,c=void 0!==a&&a,s=o.absolute,u=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if(Object(i.b)(n))return n;if(c)return t+n;var l=n.startsWith(t)?n:t+n.replace(/^\//,"");return u?e+l:l}(o,n,e,t)}}}function a(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},270:function(e,t,n){try{e.exports=n(271)}catch(i){var r={};e.exports={useAllDocsData:function(){return r},useActivePluginAndVersion:function(){}}}},271:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useDocVersionSuggestions=t.useActiveDocContext=t.useActiveVersion=t.useLatestVersion=t.useVersions=t.useActivePluginAndVersion=t.useActivePlugin=t.useDocsData=t.useAllDocsData=void 0;var r=n(23),i=n(38),o=n(272);t.useAllDocsData=function(){return i.useAllPluginInstancesData("docusaurus-plugin-content-docs")},t.useDocsData=function(e){return i.usePluginData("docusaurus-plugin-content-docs",e)},t.useActivePlugin=function(e){void 0===e&&(e={});var n=t.useAllDocsData(),i=r.useLocation().pathname;return o.getActivePlugin(n,i,e)},t.useActivePluginAndVersion=function(e){void 0===e&&(e={});var n=t.useActivePlugin(e),i=r.useLocation().pathname;if(n)return{activePlugin:n,activeVersion:o.getActiveVersion(n.pluginData,i)}},t.useVersions=function(e){return t.useDocsData(e).versions},t.useLatestVersion=function(e){var n=t.useDocsData(e);return o.getLatestVersion(n)},t.useActiveVersion=function(e){var n=t.useDocsData(e),i=r.useLocation().pathname;return o.getActiveVersion(n,i)},t.useActiveDocContext=function(e){var n=t.useDocsData(e),i=r.useLocation().pathname;return o.getActiveDocContext(n,i)},t.useDocVersionSuggestions=function(e){var n=t.useDocsData(e),i=r.useLocation().pathname;return o.getDocVersionSuggestions(n,i)}},272:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDocVersionSuggestions=t.getActiveDocContext=t.getActiveVersion=t.getLatestVersion=t.getActivePlugin=void 0;var r=n(23);t.getActivePlugin=function(e,t,n){void 0===n&&(n={});var i=Object.entries(e).find((function(e){e[0];var n=e[1];return!!r.matchPath(t,{path:n.path,exact:!1,strict:!1})})),o=i?{pluginId:i[0],pluginData:i[1]}:void 0;if(!o&&n.failfast)throw new Error("Can't find active docs plugin for pathname="+t+", while it was expected to be found. Maybe you tried to use a docs feature that can only be used on a docs-related page? Existing docs plugin paths are: "+Object.values(e).map((function(e){return e.path})).join(", "));return o},t.getLatestVersion=function(e){return e.versions.find((function(e){return e.isLast}))},t.getActiveVersion=function(e,n){var i=t.getLatestVersion(e);return[].concat(e.versions.filter((function(e){return e!==i})),[i]).find((function(e){return!!r.matchPath(n,{path:e.path,exact:!1,strict:!1})}))},t.getActiveDocContext=function(e,n){var i,o,a=t.getActiveVersion(e,n),c=null==a?void 0:a.docs.find((function(e){return!!r.matchPath(n,{path:e.path,exact:!0,strict:!1})}));return{activeVersion:a,activeDoc:c,alternateDocVersions:c?(i=c.id,o={},e.versions.forEach((function(e){e.docs.forEach((function(t){t.id===i&&(o[e.name]=t)}))})),o):{}}},t.getDocVersionSuggestions=function(e,n){var r=t.getLatestVersion(e),i=t.getActiveDocContext(e,n),o=i.activeVersion!==r;return{latestDocSuggestion:o?null==i?void 0:i.alternateDocVersions[r.name]:void 0,latestVersionSuggestion:o?r:void 0}}},273:function(e,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return l}));var r=n(3),i=n(0),o=n.n(i),a=n(268),c=n(10),s=n(270);function u(e){return o.a.createElement(a.a,Object(r.a)({},e,{to:(t=e.to,i=Object(s.useActiveVersion)(),Object(c.default)().siteConfig.customFields.githubLinkVersionToBaseUrl[null!==(n=null==i?void 0:i.name)&&void 0!==n?n:"current"]+t),target:"_blank"}));var t,n,i}function l(e){var t,n=null!==(t=e.text)&&void 0!==t?t:"Example";return o.a.createElement(u,e,o.a.createElement("span",null,"\xa0"),o.a.createElement("img",{src:"https://img.shields.io/badge/-"+n+"-informational",alt:"Example"}))}}}]);