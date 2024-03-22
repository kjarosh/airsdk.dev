"use strict";(self.webpackChunkairsdk_dev=self.webpackChunkairsdk_dev||[]).push([[82692],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),p=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(r),c=n,f=m["".concat(l,".").concat(c)]||m[c]||d[c]||i;return r?a.createElement(f,o(o({ref:t},u),{},{components:r})):a.createElement(f,o({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:n,o[1]=s;for(var p=2;p<i;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},29397:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const i={title:"Release 51.0.0.2",authors:["marchbold"],tags:["airsdk","updates"]},o=void 0,s={permalink:"/news/2024/02/26/air-release",source:"@site/news/2024-02-26-air-release.md",title:"Release 51.0.0.2",description:"AIR SDK 51.0.0.2 has been released by Harman.",date:"2024-02-26T00:00:00.000Z",formattedDate:"February 26, 2024",tags:[{label:"airsdk",permalink:"/news/tags/airsdk"},{label:"updates",permalink:"/news/tags/updates"}],readingTime:1.515,hasTruncateMarker:!1,authors:[{name:"Michael",title:"Developer at distriqt",url:"https://github.com/marchbold",imageURL:"https://avatars3.githubusercontent.com/u/442356?s=460&v=4",key:"marchbold"}],frontMatter:{title:"Release 51.0.0.2",authors:["marchbold"],tags:["airsdk","updates"]},prevItem:{title:"Release 51.0.0.4",permalink:"/news/2024/03/22/air-release"},nextItem:{title:"Release 50.2.4.4",permalink:"/news/2024/02/12/air-release"}},l={authorsImageUrls:[void 0]},p=[{value:"New features",id:"new-features",level:2},{value:"Bug fixes",id:"bug-fixes",level:2}],u={toc:p},m="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(m,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"AIR SDK 51.0.0.2")," has been released by Harman.  "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://airsdk.harman.com/api/versions/51.0.0.2/release-notes/Release_Notes_AIR_SDK_51.0.0.pdf"},"Release Notes"),"  "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://airsdk.harman.com/download/51.0.0.2"},"Download"),"  ")),(0,n.kt)("p",null,"Discussion on the new features can be found ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/airsdk/Adobe-Runtime-Support/discussions/3081"},"here"),"."),(0,n.kt)("h2",{id:"new-features"},"New features"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"AIR-309: Adding AS3 API for allowing AS3 to handle HTTPS certificate errors"),(0,n.kt)("li",{parentName:"ul"},"AIR-5963: Add ANE capabilities to render a Sprite using a MediaBuffer - initial support via BitmapData"),(0,n.kt)("li",{parentName:"ul"},"AIR-6012: AS3 API for StageWebView constructor changes"),(0,n.kt)("li",{parentName:"ul"},"AIR-6051, AIR-6053, AIR-6054: AIR zip support: Basic reading in of zip files to get entry details"),(0,n.kt)("li",{parentName:"ul"},"AIR-6063: Updated OpenSSL-based ELS key storage"),(0,n.kt)("li",{parentName:"ul"},"AIR-6279: AIR runtime support for float (removing float4 code)"),(0,n.kt)("li",{parentName:"ul"},"AIR-6288: AIR AS3 API for encrypting and decrypting a byte array"),(0,n.kt)("li",{parentName:"ul"},"AIR-6425: AS3 API for Socket.tcpNoDelay setting"),(0,n.kt)("li",{parentName:"ul"},"AIR-6579: AS3 String startsWith and endsWith"),(0,n.kt)("li",{parentName:"ul"},"AIR-6580: Add 'includes' and 'isEmpty' to Array and Vector classes"),(0,n.kt)("li",{parentName:"ul"},"AIR-6581: Adding ByteArray conversions to/from base16 and base64"),(0,n.kt)("li",{parentName:"ul"},"AIR-6707: Adding DatagramSocket.broadcast() method for UDP broadcasts"),(0,n.kt)("li",{parentName:"ul"},"AIR-6752: AIR Digest to include SHA-512 support"),(0,n.kt)("li",{parentName:"ul"},"AIR-6991: ByteArray write random bytes"),(0,n.kt)("li",{parentName:"ul"},"AIR-6992: Update SWF tag encryption to support custom keys"),(0,n.kt)("li",{parentName:"ul"},"AIR-7018: ADT move all iOS linker inputs into a single folder structure"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/airsdk/Adobe-Runtime-Support/issues/216"},"github-216"),": Support for WebSocket servers"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/airsdk/Adobe-Runtime-Support/issues/1242"},"github-1242"),": Allow images in HTML text fields via 'allowedDomains' property"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/airsdk/Adobe-Runtime-Support/issues/1858"},"github-1858"),": Adding horizontal mouse wheel support"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/airsdk/Adobe-Runtime-Support/issues/1936"},"github-1936"),": Allow windows.UseWebView2 'exclusive' mode to prevent IE/WebBrowser usage"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/airsdk/Adobe-Runtime-Support/issues/2625"},"github-2625"),": Adding NetworkInfo.disableNetworkChanges flag to prevent socket disconnects"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/airsdk/Adobe-Runtime-Support/issues/2742"},"github-2742"),": Adding Function.declaration property to find details of a function"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/airsdk/Adobe-Runtime-Support/issues/3060"},"github-3060"),": AS3 StageTextContentType class for StageText support for OTP SMS entry")),(0,n.kt)("h2",{id:"bug-fixes"},"Bug fixes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"AIR-6840: FileReference.upload() to cope with binary file responses (Windows)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/airsdk/Adobe-Runtime-Support/issues/2318"},"github-2318"),": Removing StageVideo viewport coordinate limits for AIR 51 apps"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/airsdk/Adobe-Runtime-Support/issues/3024"},"github-3024"),": Removing StageWebView viewport coordination limits for AIR 51 apps"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/airsdk/Adobe-Runtime-Support/issues/3062"},"github-3062"),": Updating Win32 camera handling to include better fallbacks where direct connect fails")))}d.isMDXComponent=!0}}]);