(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{160:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return d}));var a=n(3),i=n(8),o=(n(0),n(266)),r=n(273),c={id:"specializing_config",title:"Specializing configuration"},s={unversionedId:"patterns/specializing_config",id:"patterns/specializing_config",isDocsHomePage:!1,title:"Specializing configuration",description:"In some cases the desired configuration should depend on other configuration choices.",source:"@site/docs/patterns/specializing_config.md",slug:"/patterns/specializing_config",permalink:"/docs/next/patterns/specializing_config",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/docs/patterns/specializing_config.md",version:"current",lastUpdatedBy:"Omry Yadan",lastUpdatedAt:1619645096,formattedLastUpdatedAt:"4/28/2021",sidebar:"docs",previous:{title:"Selecting multiple configs from a Config Group",permalink:"/docs/next/patterns/select_multiple_configs_from_config_group"},next:{title:"Read-only config",permalink:"/docs/next/patterns/write_protect_config_node"}},l=[{value:"initial config.yaml",id:"initial-configyaml",children:[]},{value:"modified config.yaml",id:"modified-configyaml",children:[]},{value:"dataset_model/cifar10_alexnet.yaml",id:"dataset_modelcifar10_alexnetyaml",children:[]}],u={toc:l};function d(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)(r.a,{text:"Example application",to:"examples/patterns/specializing_config-select",mdxType:"ExampleGithubLink"}),Object(o.b)("p",null,"In some cases the desired configuration should depend on other configuration choices.\nFor example, You may want to use only 5 layers in your Alexnet model if the dataset of choice is cifar10, and the dafault 7 otherwise."),Object(o.b)("p",null,"We can start with a config that looks like this:"),Object(o.b)("h3",{id:"initial-configyaml"},"initial config.yaml"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},"defaults:\n  - dataset: imagenet\n  - model: alexnet\n")),Object(o.b)("p",null,"We want to specialize the config based on the choice of the selected dataset and model:\nFurthermore, we only want to do it for cifar10 and alexnet and not for 3 other combinations."),Object(o.b)("p",null,"OmegaConf supports value interpolation, we can construct a value that would - at runtime - be a function of other values.\nThe idea is that we can add another element to the defaults list that would load a file name that depends on those two values:"),Object(o.b)("h3",{id:"modified-configyaml"},"modified config.yaml"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},"defaults:\n  - dataset: imagenet\n  - model: alexnet\n  - optional dataset_model: ${dataset}_${model}\n")),Object(o.b)("p",null,"Let's break this down:"),Object(o.b)("h4",{id:"dataset_model"},"dataset_model"),Object(o.b)("p",null,"The key ",Object(o.b)("inlineCode",{parentName:"p"},"dataset_model")," is an arbitrary directory, it can be anything unique that makes sense, including nested directory like ",Object(o.b)("inlineCode",{parentName:"p"},"dataset/model"),"."),Object(o.b)("h4",{id:"dataset_model-1"},"${dataset}_${model}"),Object(o.b)("p",null,"the value ",Object(o.b)("inlineCode",{parentName:"p"},"${dataset}_${model}")," is using OmegaConf's ",Object(o.b)("a",{parentName:"p",href:"https://omegaconf.readthedocs.io/en/latest/usage.html#variable-interpolation"},"variable interpolation")," syntax.\nAt runtime, that value would resolve to ",Object(o.b)("em",{parentName:"p"},"imagenet_alexnet"),", or ",Object(o.b)("em",{parentName:"p"},"cifar_resnet")," - depending on the values of defaults.dataset and defaults.model."),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"This is non-standard interpolation and there are some subtle differences and limitations."))),Object(o.b)("h4",{id:"optional"},"optional"),Object(o.b)("p",null,"By default, Hydra fails with an error if a config specified in the defaults does not exist.\nIn this case we only want to specialize cifar10 + alexnet, not all 4 combinations.\nthe keyword ",Object(o.b)("inlineCode",{parentName:"p"},"optional")," tells Hydra to just continue if it can't find this file."),Object(o.b)("p",null,"When specializing config, you usually want to only specify what's different, and not the whole thing.\nWe want the model for alexnet, when trained on cifar - to have 5 layers."),Object(o.b)("h3",{id:"dataset_modelcifar10_alexnetyaml"},"dataset_model/cifar10_alexnet.yaml"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},"model:\n  num_layers: 5\n")),Object(o.b)("p",null,"Let's check. Running with the default uses imagenet, so we don't get the specialized version of:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},"$ python example.py \ndataset:\n  name: imagenet\n  path: /datasets/imagenet\nmodel:\n  num_layers: 7\n  type: alexnet\n")),Object(o.b)("p",null,"Running with cifar10 dataset, we do get 5 for num_layers:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},"$ python example.py dataset=cifar10\ndataset:\n  name: cifar10\n  path: /datasets/cifar10\nmodel:\n  num_layers: 5\n  type: alexnet\n")))}d.isMDXComponent=!0},266:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),u=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=u(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},p=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(n),p=a,m=d["".concat(r,".").concat(p)]||d[p]||f[p]||o;return n?i.a.createElement(m,c(c({ref:t},l),{},{components:n})):i.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var l=2;l<o;l++)r[l]=n[l];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},267:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!a(e)}n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return i}))},268:function(e,t,n){"use strict";var a=n(0),i=n.n(a),o=n(11),r=n(267),c=n(7),s=Object(a.createContext)({collectLink:function(){}}),l=n(269),u=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(a=Object.getOwnPropertySymbols(e);i<a.length;i++)t.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(e,a[i])&&(n[a[i]]=e[a[i]])}return n};t.a=function(e){var t,n,d,f=e.isNavLink,p=e.to,m=e.href,b=e.activeClassName,g=e.isActive,v=e["data-noBrokenLinkCheck"],h=e.autoAddBaseUrl,y=void 0===h||h,O=u(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),j=Object(l.b)().withBaseUrl,w=Object(a.useContext)(s),x=p||m,D=Object(r.a)(x),_=null==x?void 0:x.replace("pathname://",""),A=void 0!==_?(n=_,y&&function(e){return e.startsWith("/")}(n)?j(n):n):void 0,N=Object(a.useRef)(!1),P=f?o.e:o.c,V=c.default.canUseIntersectionObserver;Object(a.useEffect)((function(){return!V&&D&&window.docusaurus.prefetch(A),function(){V&&d&&d.disconnect()}}),[A,V,D]);var k=null!==(t=null==A?void 0:A.startsWith("#"))&&void 0!==t&&t,C=!A||!D||k;return A&&D&&!k&&!v&&w.collectLink(A),C?i.a.createElement("a",Object.assign({href:A},x&&!D&&{target:"_blank",rel:"noopener noreferrer"},O)):i.a.createElement(P,Object.assign({},O,{onMouseEnter:function(){N.current||(window.docusaurus.preload(A),N.current=!0)},innerRef:function(e){var t,n;V&&e&&D&&(t=e,n=function(){window.docusaurus.prefetch(A)},(d=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(d.unobserve(t),d.disconnect(),n())}))}))).observe(t))},to:A||""},f&&{isActive:g,activeClassName:b}))}},269:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return r}));var a=n(10),i=n(267);function o(){var e=Object(a.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var o=void 0===a?{}:a,r=o.forcePrependBaseUrl,c=void 0!==r&&r,s=o.absolute,l=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if(Object(i.b)(n))return n;if(c)return t+n;var u=n.startsWith(t)?n:t+n.replace(/^\//,"");return l?e+u:u}(o,n,e,t)}}}function r(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},270:function(e,t,n){try{e.exports=n(271)}catch(i){var a={};e.exports={useAllDocsData:function(){return a},useActivePluginAndVersion:function(){}}}},271:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useDocVersionSuggestions=t.useActiveDocContext=t.useActiveVersion=t.useLatestVersion=t.useVersions=t.useActivePluginAndVersion=t.useActivePlugin=t.useDocsData=t.useAllDocsData=void 0;var a=n(23),i=n(38),o=n(272);t.useAllDocsData=function(){return i.useAllPluginInstancesData("docusaurus-plugin-content-docs")},t.useDocsData=function(e){return i.usePluginData("docusaurus-plugin-content-docs",e)},t.useActivePlugin=function(e){void 0===e&&(e={});var n=t.useAllDocsData(),i=a.useLocation().pathname;return o.getActivePlugin(n,i,e)},t.useActivePluginAndVersion=function(e){void 0===e&&(e={});var n=t.useActivePlugin(e),i=a.useLocation().pathname;if(n)return{activePlugin:n,activeVersion:o.getActiveVersion(n.pluginData,i)}},t.useVersions=function(e){return t.useDocsData(e).versions},t.useLatestVersion=function(e){var n=t.useDocsData(e);return o.getLatestVersion(n)},t.useActiveVersion=function(e){var n=t.useDocsData(e),i=a.useLocation().pathname;return o.getActiveVersion(n,i)},t.useActiveDocContext=function(e){var n=t.useDocsData(e),i=a.useLocation().pathname;return o.getActiveDocContext(n,i)},t.useDocVersionSuggestions=function(e){var n=t.useDocsData(e),i=a.useLocation().pathname;return o.getDocVersionSuggestions(n,i)}},272:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDocVersionSuggestions=t.getActiveDocContext=t.getActiveVersion=t.getLatestVersion=t.getActivePlugin=void 0;var a=n(23);t.getActivePlugin=function(e,t,n){void 0===n&&(n={});var i=Object.entries(e).find((function(e){e[0];var n=e[1];return!!a.matchPath(t,{path:n.path,exact:!1,strict:!1})})),o=i?{pluginId:i[0],pluginData:i[1]}:void 0;if(!o&&n.failfast)throw new Error("Can't find active docs plugin for pathname="+t+", while it was expected to be found. Maybe you tried to use a docs feature that can only be used on a docs-related page? Existing docs plugin paths are: "+Object.values(e).map((function(e){return e.path})).join(", "));return o},t.getLatestVersion=function(e){return e.versions.find((function(e){return e.isLast}))},t.getActiveVersion=function(e,n){var i=t.getLatestVersion(e);return[].concat(e.versions.filter((function(e){return e!==i})),[i]).find((function(e){return!!a.matchPath(n,{path:e.path,exact:!1,strict:!1})}))},t.getActiveDocContext=function(e,n){var i,o,r=t.getActiveVersion(e,n),c=null==r?void 0:r.docs.find((function(e){return!!a.matchPath(n,{path:e.path,exact:!0,strict:!1})}));return{activeVersion:r,activeDoc:c,alternateDocVersions:c?(i=c.id,o={},e.versions.forEach((function(e){e.docs.forEach((function(t){t.id===i&&(o[e.name]=t)}))})),o):{}}},t.getDocVersionSuggestions=function(e,n){var a=t.getLatestVersion(e),i=t.getActiveDocContext(e,n),o=i.activeVersion!==a;return{latestDocSuggestion:o?null==i?void 0:i.alternateDocVersions[a.name]:void 0,latestVersionSuggestion:o?a:void 0}}},273:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return u}));var a=n(3),i=n(0),o=n.n(i),r=n(268),c=n(10),s=n(270);function l(e){return o.a.createElement(r.a,Object(a.a)({},e,{to:(t=e.to,i=Object(s.useActiveVersion)(),Object(c.default)().siteConfig.customFields.githubLinkVersionToBaseUrl[null!==(n=null==i?void 0:i.name)&&void 0!==n?n:"current"]+t),target:"_blank"}));var t,n,i}function u(e){var t,n=null!==(t=e.text)&&void 0!==t?t:"Example";return o.a.createElement(l,e,o.a.createElement("span",null,"\xa0"),o.a.createElement("img",{src:"https://img.shields.io/badge/-"+n+"-informational",alt:"Example"}))}}}]);