"use strict";(self.webpackChunkairsdk_dev=self.webpackChunkairsdk_dev||[]).push([[49194],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(r),d=n,f=c["".concat(s,".").concat(d)]||c[d]||m[d]||i;return r?a.createElement(f,o(o({ref:t},u),{},{components:r})):a.createElement(f,o({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:n,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},47251:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const i={title:"Release 51.0.0.4",authors:["marchbold"],tags:["airsdk","updates"]},o=void 0,l={permalink:"/news/2024/03/22/air-release",source:"@site/news/2024-03-22-air-release.md",title:"Release 51.0.0.4",description:"AIR SDK 51.0.0.4 has been released by Harman.",date:"2024-03-22T00:00:00.000Z",formattedDate:"March 22, 2024",tags:[{label:"airsdk",permalink:"/news/tags/airsdk"},{label:"updates",permalink:"/news/tags/updates"}],readingTime:1.14,hasTruncateMarker:!1,authors:[{name:"Michael",title:"Developer at distriqt",url:"https://github.com/marchbold",imageURL:"https://avatars3.githubusercontent.com/u/442356?s=460&v=4",key:"marchbold"}],frontMatter:{title:"Release 51.0.0.4",authors:["marchbold"],tags:["airsdk","updates"]},nextItem:{title:"Release 51.0.0.2",permalink:"/news/2024/02/26/air-release"}},s={authorsImageUrls:[void 0]},p=[{value:"New features",id:"new-features",level:2},{value:"Bug fixes",id:"bug-fixes",level:2}],u={toc:p},c="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(c,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"AIR SDK 51.0.0.4")," has been released by Harman.  "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://airsdk.harman.com/api/versions/51.0.0.4/release-notes/Release_Notes_AIR_SDK_51.0.0.pdf"},"Release Notes"),"  "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://airsdk.harman.com/download/51.0.0.4"},"Download"),"  ")),(0,n.kt)("h2",{id:"new-features"},"New features"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"AIR-6054: Adding support for file modification times for zip entries"),(0,n.kt)("li",{parentName:"ul"},"AIR-6055: AIR Zip support for creation and saving of zip archives"),(0,n.kt)("li",{parentName:"ul"},"AIR-7046: Adding ZipArchive.load/saveFromByteArray implementations"),(0,n.kt)("li",{parentName:"ul"},"AIR-6866: Enable NativeWindow class for Android"),(0,n.kt)("li",{parentName:"ul"},"AIR-7018: ADT add IPALinkFolder build configuration and linker script for macOS remote build"),(0,n.kt)("li",{parentName:"ul"},"AIR-7044: AIR TextLine embedded fonts to support COLR tables"),(0,n.kt)("li",{parentName:"ul"},"AIR-7045: AIR TextLine embedded fonts to support CBDT tables"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/airsdk/Adobe-Runtime-Support/issues/149"},"github-149"),": Implementing FontDescription.createFromByteArray to load an OpenType/TrueType font for FTE"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/airsdk/Adobe-Runtime-Support/issues/216"},"github-216"),": WebSocket client connection and handshaking"),(0,n.kt)("li",{parentName:"ul"},"Github-pad20: Updating NetStream.play() to accept IDataInput argument")),(0,n.kt)("h2",{id:"bug-fixes"},"Bug fixes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"AIR-6743: Update icon list in descriptor XSD"),(0,n.kt)("li",{parentName:"ul"},"AIR-7031: AIRSDK Android dependency lists"),(0,n.kt)("li",{parentName:"ul"},"AIR-7035: String.fromCharCode() should support all unicode code points"),(0,n.kt)("li",{parentName:"ul"},"AIR-7036: Adding platform-specific fallback fonts for Emoji character ranges in Flash Text Engine"),(0,n.kt)("li",{parentName:"ul"},"AIR-7059: Fixing AIR crash on iOS around network authentication (see AIR-6479)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/airsdk/Adobe-Runtime-Support/issues/1917"},"github-1917"),": Correcting Linux bundle creation to support ARM64 ANEs"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/airsdk/Adobe-Runtime-Support/issues/2807"},"github-2807"),": Removing ANRs caused by access of nativeGetTextBoxBounds from wrong thread"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/airsdk/Adobe-Runtime-Support/issues/2871"},"github-2871"),": Switching to a 64-bit version of the LLVM ld64 linker"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/airsdk/Adobe-Runtime-Support/issues/3098"},"github-3098"),": Allowing a/v data access for NetStream in data generation mode"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/airsdk/Adobe-Runtime-Support/issues/3102"},"github-3102"),": Preventing crash when using Workers in a beta/prerelease build"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/airsdk/Adobe-Runtime-Support/issues/3106"},"github-3106"),": MacOS EncryptedLocalStore updating key storage mechanisms")))}m.isMDXComponent=!0}}]);