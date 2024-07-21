"use strict";(self.webpackChunkairsdk_dev=self.webpackChunkairsdk_dev||[]).push([[13165],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),p=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(r),m=n,f=c["".concat(l,".").concat(m)]||c[m]||d[m]||s;return r?a.createElement(f,i(i({ref:t},u),{},{components:r})):a.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,i=new Array(s);i[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[c]="string"==typeof e?e:n,i[1]=o;for(var p=2;p<s;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},48127:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const s={title:"Release 51.0.1.5",authors:["marchbold"],tags:["airsdk","updates"]},i=void 0,o={permalink:"/news/2024/07/21/air-release",source:"@site/news/2024-07-21-air-release.md",title:"Release 51.0.1.5",description:"AIR SDK 51.0.1.5 has been released by Harman.",date:"2024-07-21T00:00:00.000Z",formattedDate:"July 21, 2024",tags:[{label:"airsdk",permalink:"/news/tags/airsdk"},{label:"updates",permalink:"/news/tags/updates"}],readingTime:.425,hasTruncateMarker:!1,authors:[{name:"Michael",title:"Developer at distriqt",url:"https://github.com/marchbold",imageURL:"https://avatars3.githubusercontent.com/u/442356?s=460&v=4",key:"marchbold"}],frontMatter:{title:"Release 51.0.1.5",authors:["marchbold"],tags:["airsdk","updates"]},nextItem:{title:"Release 51.0.1.4",permalink:"/news/2024/07/08/air-release"}},l={authorsImageUrls:[void 0]},p=[{value:"Bug fixes",id:"bug-fixes",level:3}],u={toc:p},c="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(c,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"AIR SDK 51.0.1.5")," has been released by Harman.  "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://airsdk.harman.com/api/versions/51.0.1.5/release-notes/Release_Notes_AIR_SDK_51.0.1.pdf"},"Release Notes"),"  "),(0,n.kt)("li",{parentName:"ul"},"Download via AIR SDK Manager")),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"Please note that you cannot download this release from the website. It only contains an Android patch so the full zip files are not available.\nIf you need the fixes, please use the AIR SDK Manager: ",(0,n.kt)("a",{parentName:"p",href:"https://airsdk.dev/docs/basics/getting-started"},"https://airsdk.dev/docs/basics/getting-started"))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Release Notes")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://airsdk.harman.com/api/versions/51.0.1.5/release-notes/Release_Notes_AIR_SDK_51.0.1.pdf"},"https://airsdk.harman.com/api/versions/51.0.1.5/release-notes/Release_Notes_AIR_SDK_51.0.1.pdf")),(0,n.kt)("h3",{id:"bug-fixes"},"Bug fixes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/airsdk/Adobe-Runtime-Support/issues/3351"},"github-3351"),": Ensuring AndroidWebView is resumed properly on Android 14.0 devices"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/airsdk/Adobe-Runtime-Support/issues/3353"},"github-3353"),": Ensuring Android 32-bit libraries can write 4GB file sizes")))}d.isMDXComponent=!0}}]);