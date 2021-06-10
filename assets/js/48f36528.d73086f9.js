(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{165:function(e,n,a){"use strict";a.r(n),a.d(n,"frontMatter",(function(){return o})),a.d(n,"metadata",(function(){return c})),a.d(n,"toc",(function(){return l})),a.d(n,"default",(function(){return d}));var t=a(3),r=a(8),i=(a(0),a(344)),o={id:"hydra-command-line-flags",title:"Hydra's command line flags"},c={unversionedId:"advanced/hydra-command-line-flags",id:"version-1.0/advanced/hydra-command-line-flags",isDocsHomePage:!1,title:"Hydra's command line flags",description:"Hydra is using the command line for two things:",source:"@site/versioned_docs/version-1.0/advanced/hydra-command-line-flags.md",slug:"/advanced/hydra-command-line-flags",permalink:"/docs/1.0/advanced/hydra-command-line-flags",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/versioned_docs/version-1.0/advanced/hydra-command-line-flags.md",version:"1.0",lastUpdatedBy:"Omry Yadan",lastUpdatedAt:1623349300,formattedLastUpdatedAt:"6/10/2021",sidebar:"version-1.0/docs",previous:{title:"Nevergrad Sweeper plugin",permalink:"/docs/1.0/plugins/nevergrad_sweeper"},next:{title:"basic",permalink:"/docs/1.0/advanced/override_grammar/basic"}},l=[],p={toc:l};function d(e){var n=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(t.a)({},p,a,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Hydra is using the command line for two things:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Configuring your application (See ",Object(i.b)("a",{parentName:"li",href:"/docs/1.0/advanced/override_grammar/basic"},"Override Grammar"),")"),Object(i.b)("li",{parentName:"ul"},"Telling Hydra what to do.")),Object(i.b)("p",null,"Any argparse argument that is prefixed by ",Object(i.b)("inlineCode",{parentName:"p"},"--"),"  or ",Object(i.b)("inlineCode",{parentName:"p"},"'-")," is telling Hydra what to do.\nThe rest of the parameters are used to configure your application."),Object(i.b)("p",null,"You can view the Hydra specific flags via ",Object(i.b)("inlineCode",{parentName:"p"},"--hydra-help"),"."),Object(i.b)("details",null,Object(i.b)("summary",null,"Example output"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:'language-title="Example',metastring:'--hydra-help output"',"--hydra-help":!0,'output"':!0},"$ python my_app.py --hydra-help\nHydra (1.0.0rc3)\nSee https://hydra.cc for more info.\n\n== Flags ==\n--help,-h : Application's help\n--hydra-help : Hydra's help\n--version : Show Hydra's version and exit\n--cfg,-c : Show config instead of running [job|hydra|all]\n--package,-p : Config package to show\n--run,-r : Run a job\n--multirun,-m : Run multiple jobs with the configured launcher and sweeper\n--shell-completion,-sc : Install or Uninstall shell completion:\n    Bash - Install:\n    eval \"$(python my_app.py -sc install=bash)\"\n    Bash - Uninstall:\n    eval \"$(python my_app.py -sc uninstall=bash)\"\n\n    Fish - Install:\n    python my_app.py -sc install=fish | source\n    Fish - Uninstall:\n    python my_app.py -sc uninstall=fish | source\n\n--config-path,-cp : Overrides the config_path specified in hydra.main().\n                    The config_path is relative to the Python file declaring @hydra.main()\n--config-name,-cn : Overrides the config_name specified in hydra.main()\n--config-dir,-cd : Adds an additional config dir to the config search path\n--info,-i : Print Hydra information\nOverrides : Any key=value arguments to override config values (use dots for.nested=overrides)\n\n== Configuration groups ==\nCompose your configuration from those groups (For example, append hydra/job_logging=disabled to command line)\n\nhydra/help: default\nhydra/hydra_help: default\nhydra/hydra_logging: default, disabled, hydra_debug\nhydra/job_logging: default, disabled\nhydra/launcher: basic, rq, submitit_local, submitit_slurm\nhydra/output: default\nhydra/sweeper: ax, basic, nevergrad\n\n\nUse '--cfg hydra' to Show the Hydra config.\n"))),Object(i.b)("h4",{id:"--help-h-"},"--help,-h :"),Object(i.b)("p",null,"Shows the application's help. This can be ",Object(i.b)("a",{parentName:"p",href:"/docs/1.0/configure_hydra/app_help"},"customized"),"."),Object(i.b)("details",null,Object(i.b)("summary",null,"Example output"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"$ python my_app.py --help\nmy_app is powered by Hydra.\n\n== Configuration groups ==\nCompose your configuration from those groups (group=option)\n\ndb: mysql, postgresql\n\n\n== Config ==\nOverride anything in the config (foo.bar=value)\n\ndb:\n  driver: mysql\n  user: omry\n  pass: secret\n\n\nPowered by Hydra (https://hydra.cc)\nUse --hydra-help to view Hydra specific help\n"))),Object(i.b)("h4",{id:"--version"},"--version"),Object(i.b)("p",null,"Show Hydra's version and exit"),Object(i.b)("h4",{id:"--cfg-c"},"--cfg,-c"),Object(i.b)("p",null,"Show config instead of running. Takes as parameter one of ",Object(i.b)("inlineCode",{parentName:"p"},"job"),", ",Object(i.b)("inlineCode",{parentName:"p"},"hydra")," or ",Object(i.b)("inlineCode",{parentName:"p"},"all"),"."),Object(i.b)("details",null,Object(i.b)("summary",null,"Example output"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},"$ python my_app.py --cfg job\n# @package _global_\ndb:\n  driver: mysql\n  user: omry\n  pass: secret\n"))),Object(i.b)("h4",{id:"--package-p"},"--package,-p"),Object(i.b)("p",null,"Used in conjunction with --cfg.\n-p select a specific config package to show."),Object(i.b)("details",null,Object(i.b)("summary",null,"Example output"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},"$ python my_app.py --cfg hydra -p hydra.job\n# @package hydra.job\nname: my_app\noverride_dirname: ''\nid: ???\nnum: ???\nconfig_name: config\nenv_set: {}\nenv_copy: []\nconfig:\n  override_dirname:\n    kv_sep: '='\n    item_sep: ','\n    exclude_keys: []\n"))),Object(i.b)("h4",{id:"--run-r"},"--run,-r"),Object(i.b)("p",null,"Run is the default mode and is not normally needed."),Object(i.b)("h4",{id:"--multirun-m"},"--multirun,-m"),Object(i.b)("p",null,"Run multiple jobs with the configured launcher and sweeper. See ",Object(i.b)("a",{parentName:"p",href:"/docs/1.0/tutorials/basic/running_your_app/multi-run"}),"."),Object(i.b)("h4",{id:"--shell-completion-sc"},"--shell-completion,-sc"),Object(i.b)("p",null,"Install or Uninstall ",Object(i.b)("a",{parentName:"p",href:"/docs/1.0/tutorials/basic/running_your_app/tab_completion"},"shell tab completion"),"."),Object(i.b)("h4",{id:"--config-path-cp"},"--config-path,-cp"),Object(i.b)("p",null,"Overrides the config_path specified in hydra.main(). The config_path is relative to the Python file declaring @hydra.main()"),Object(i.b)("h4",{id:"--config-name-cn"},"--config-name,-cn"),Object(i.b)("p",null,"Overrides the config_name specified in hydra.main()"),Object(i.b)("h4",{id:"--config-dir-cd"},"--config-dir,-cd"),Object(i.b)("p",null,"Adds an additional config directory to the ",Object(i.b)("a",{parentName:"p",href:"/docs/1.0/advanced/search_path"},"config search path"),".\nThis is useful for installed apps that want to allow their users to provide additional configs."),Object(i.b)("h4",{id:"--info-i"},"--info,-i"),Object(i.b)("p",null,"Print Hydra information. This includes installed plugins, search path, composition trace, generated config and more."))}d.isMDXComponent=!0},344:function(e,n,a){"use strict";a.d(n,"a",(function(){return s})),a.d(n,"b",(function(){return h}));var t=a(0),r=a.n(t);function i(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function c(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){i(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function l(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=r.a.createContext({}),d=function(e){var n=r.a.useContext(p),a=n;return e&&(a="function"==typeof e?e(n):c(c({},n),e)),a},s=function(e){var n=d(e.components);return r.a.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},b=r.a.forwardRef((function(e,n){var a=e.components,t=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=d(a),b=t,h=s["".concat(o,".").concat(b)]||s[b]||u[b]||i;return a?r.a.createElement(h,c(c({ref:n},p),{},{components:a})):r.a.createElement(h,c({ref:n},p))}));function h(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var i=a.length,o=new Array(i);o[0]=b;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:t,o[1]=c;for(var p=2;p<i;p++)o[p]=a[p];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"}}]);