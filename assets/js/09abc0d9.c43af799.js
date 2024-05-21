"use strict";(self.webpackChunkairsdk_dev=self.webpackChunkairsdk_dev||[]).push([[95958],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var a=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,i=function(e,t){if(null==e)return{};var r,a,i={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=a.createContext({}),l=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=l(e.components);return a.createElement(u.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,i=e.mdxType,n=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(r),c=i,h=m["".concat(u,".").concat(c)]||m[c]||d[c]||n;return r?a.createElement(h,o(o({ref:t},p),{},{components:r})):a.createElement(h,o({ref:t},p))}));function h(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=r.length,o=new Array(n);o[0]=c;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[m]="string"==typeof e?e:i,o[1]=s;for(var l=2;l<n;l++)o[l]=r[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},57615:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>d,frontMatter:()=>n,metadata:()=>s,toc:()=>l});var a=r(87462),i=(r(67294),r(3905));const n={title:"Release 51.0.1.1",authors:["marchbold"],tags:["airsdk","updates"]},o=void 0,s={permalink:"/news/2024/05/07/air-release",source:"@site/news/2024-05-07-air-release.md",title:"Release 51.0.1.1",description:"AIR SDK 51.0.1.1 has been released by Harman.",date:"2024-05-07T00:00:00.000Z",formattedDate:"May 7, 2024",tags:[{label:"airsdk",permalink:"/news/tags/airsdk"},{label:"updates",permalink:"/news/tags/updates"}],readingTime:1.485,hasTruncateMarker:!1,authors:[{name:"Michael",title:"Developer at distriqt",url:"https://github.com/marchbold",imageURL:"https://avatars3.githubusercontent.com/u/442356?s=460&v=4",key:"marchbold"}],frontMatter:{title:"Release 51.0.1.1",authors:["marchbold"],tags:["airsdk","updates"]},nextItem:{title:"Release 50.2.5.1",permalink:"/news/2024/04/22/air-release"}},u={authorsImageUrls:[void 0]},l=[{value:"Features",id:"features",level:3},{value:"Bug fixes",id:"bug-fixes",level:3}],p={toc:l},m="wrapper";function d(e){let{components:t,...r}=e;return(0,i.kt)(m,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"AIR SDK 51.0.1.1")," has been released by Harman.  "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://airsdk.harman.com/api/versions/51.0.1.1/release-notes/Release_Notes_AIR_SDK_51.0.1.pdf"},"Release Notes"),"  "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://airsdk.harman.com/download/51.0.1.1"},"Download"),"  ")),(0,i.kt)("p",null,"Release 51.0.1.1 of the AIR SDK is a feature update in order to provide some of the additional\ncapabilities required to support Privacy Manifests for iPhone/iPad applications. There are some other\nminor functional changes plus recent bug fixes that have been implemented."),(0,i.kt)("h3",{id:"features"},"Features"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"AIR-6288: Implementation of digests and encryption using CommonCrypto for mac/ios"),(0,i.kt)("li",{parentName:"ul"},"AIR-6979: Colour profile conversion for macOS displays"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/airsdk/Adobe-Runtime-Support/issues/907"},"github-907"),": Adding support for fileType icon size 256x256"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/airsdk/Adobe-Runtime-Support/issues/3010"},"github-3010"),": Provide mechanism for remote linking an IPA's executables on a macOS machine"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/airsdk/Adobe-Runtime-Support/issues/3108"},"github-3108"),": Updating AIR xml signatures to use SHA-256 for signed info"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/airsdk/Adobe-Runtime-Support/issues/3116"},"github-3116"),": Adding support for PrivacyAdditions tag"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/airsdk/Adobe-Runtime-Support/issues/3171"},"github-3171"),": Allow Android manifestAdditions to override activity's screenOrientation attribute"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/airsdk/Adobe-Runtime-Support/issues/3172"},"github-3172"),": Mac bundle creation to generate CFBundleDisplayName tag"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/airsdk/Adobe-Runtime-Support/issues/3173"},"github-3173"),": Mac bundle creation to generate CFBundleSupportedPlatforms tag")),(0,i.kt)("h3",{id:"bug-fixes"},"Bug fixes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"AIR-6054: Ensuring zip extraction creates subfolders where needed"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/airsdk/Adobe-Runtime-Support/issues/2409"},"github-2409"),": Including new AS3 implementations into tvOS runtime"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/airsdk/Adobe-Runtime-Support/issues/2903"},"github-2903"),": Fixing instability when breaking into a debugger on uncaught error"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/airsdk/Adobe-Runtime-Support/issues/2976"},"github-2976"),": Adding 'property' as a supported Android Manifest tag"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/airsdk/Adobe-Runtime-Support/issues/3049"},"github-3049"),": Ensuring we avoid the hang on debugger on iOS with nagle check"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/airsdk/Adobe-Runtime-Support/issues/3049"},"github-3049"),": Eliminating instability in GC following socket thread querying the app descriptor"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/airsdk/Adobe-Runtime-Support/issues/3098"},"github-3098"),": Ensuring a/v from NetStream.appendBytes() works with SoundMixer.computeSpectrum()"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/airsdk/Adobe-Runtime-Support/issues/3126"},"github-3126"),": Fixing issue with Loader.loadBytes() throwing errors in Workers"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/airsdk/Adobe-Runtime-Support/issues/3154"},"github-3154"),": Preventing iOS worker crash caused by background alert"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/airsdk/Adobe-Runtime-Support/issues/3160"},"github-3160"),": Ensuring Linux bundles can be created even if the rpm/deb identification checks fail"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/airsdk/Adobe-Runtime-Support/issues/3195"},"github-3195"),": Fixing crash in Worker start-up caused by lack of Stage")),(0,i.kt)("admonition",{title:"Note",type:"note"},(0,i.kt)("p",{parentName:"admonition"},'For the "remote linker" capability on macOS, please read the details in the release notes PDF! Section 7.2, pp 20-22. Feedback welcomed!')))}d.isMDXComponent=!0}}]);