(window.webpackJsonp=window.webpackJsonp||[]).push([[251],{330:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return i})),t.d(r,"metadata",(function(){return s})),t.d(r,"toc",(function(){return l})),t.d(r,"default",(function(){return p}));var n=t(3),a=t(8),o=(t(0),t(344)),i={id:"intro",title:"Introduction",sidebar_label:"Introduction"},s={unversionedId:"upgrades/intro",id:"version-1.1/upgrades/intro",isDocsHomePage:!1,title:"Introduction",description:"Upgrading to a new Hydra version is usually an easy process.",source:"@site/versioned_docs/version-1.1/upgrades/intro.md",slug:"/upgrades/intro",permalink:"/docs/upgrades/intro",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/versioned_docs/version-1.1/upgrades/intro.md",version:"1.1",lastUpdatedBy:"Omry Yadan",lastUpdatedAt:1623349300,formattedLastUpdatedAt:"6/10/2021",sidebar_label:"Introduction",sidebar:"version-1.1/docs",previous:{title:"Release process",permalink:"/docs/development/release"},next:{title:"Changes to @hydra.main() and hydra.initialize()",permalink:"/docs/upgrades/1.0_to_1.1/changes_to_hydra_main_config_path"}},l=[{value:"Major version upgrades",id:"major-version-upgrades",children:[]},{value:"Patch version upgrades",id:"patch-version-upgrades",children:[]},{value:"Dev release upgrades",id:"dev-release-upgrades",children:[]}],c={toc:l};function p(e){var r=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},c,t,{components:r,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Upgrading to a new Hydra version is usually an easy process."),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"NOTE")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Hydra versioning has only major versions and patch versions. A bump of the first two version digits is considered a major release.\nA major release may have multiple followup patch releases that will fix bugs without introducing new functionality."))),Object(o.b)("h2",{id:"major-version-upgrades"},"Major version upgrades"),Object(o.b)("p",null,"Hydra will typically provide helpful warnings about required changes, sometimes pointing to an upgrade page that provides more details about the required changes."),Object(o.b)("p",null,"For a smooth upgrade experience, please follow these simple rules:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Upgrade to the latest patch version first"),".\ne.g: If you are upgrading from 1.0 to 1.1, be sure to upgrade to the latest 1.0 version first (1.0.6)."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Address ALL runtime warnings issued by Hydra."),Object(o.b)("br",{parentName:"li"}),"A warning in one version is likely to become a far less friendly error in the next major version."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Do not skip major versions"),".",Object(o.b)("br",{parentName:"li"}),"e.g: If you are upgrading from Hydra 1.0 to Hydra 1.2 - Do it by",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Upgrading from 1.0 to 1.1, addressing all the warnings."),Object(o.b)("li",{parentName:"ul"},"Upgrading from 1.1 to 1.2, addressing all the warnings.")))),Object(o.b)("h2",{id:"patch-version-upgrades"},"Patch version upgrades"),Object(o.b)("p",null,"Patch releases normally contains only bug fixes and are thus safe and easy to upgrade (e.g. ",Object(o.b)("strong",{parentName:"p"},"1.0.3")," to ",Object(o.b)("strong",{parentName:"p"},"1.0.6"),").",Object(o.b)("br",{parentName:"p"}),"\n","In rare cases, patch releases will introduce new warnings. Be sure to address them before upgrading to the next major version."),Object(o.b)("h2",{id:"dev-release-upgrades"},"Dev release upgrades"),Object(o.b)("p",null,"Development releases are subject to breaking changes without notice. Please be aware that upgrading to a new development release\nis more likely to introduce some breakage. No attempt will be made to make upgrading between development releases easy."))}p.isMDXComponent=!0},344:function(e,r,t){"use strict";t.d(r,"a",(function(){return d})),t.d(r,"b",(function(){return m}));var n=t(0),a=t.n(n);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=a.a.createContext({}),p=function(e){var r=a.a.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},d=function(e){var r=p(e.components);return a.a.createElement(c.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},b=a.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(t),b=n,m=d["".concat(i,".").concat(b)]||d[b]||u[b]||o;return t?a.a.createElement(m,s(s({ref:r},c),{},{components:t})):a.a.createElement(m,s({ref:r},c))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=b;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=t[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);