"use strict";(self.webpackChunkairsdk_dev=self.webpackChunkairsdk_dev||[]).push([[84688],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>u});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",A={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),p=s(r),g=a,u=p["".concat(c,".").concat(g)]||p[g]||A[g]||o;return r?n.createElement(u,i(i({ref:t},l),{},{components:r})):n.createElement(u,i({ref:t},l))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=g;var d={};for(var c in t)hasOwnProperty.call(t,c)&&(d[c]=t[c]);d.originalType=e,d[p]="string"==typeof e?e:a,i[1]=d;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},7856:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>A,frontMatter:()=>o,metadata:()=>d,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const o={sidebar_position:14},i="Using the StageVideo class for hardware accelerated presentation",d={unversionedId:"development/rich-media-content/working-with-video/using-the-stagevideo-class",id:"development/rich-media-content/working-with-video/using-the-stagevideo-class",title:"Using the StageVideo class for hardware accelerated presentation",description:"Flash Player optimizes video performance by using hardware acceleration for",source:"@site/docs/development/rich-media-content/working-with-video/using-the-stagevideo-class.md",sourceDirName:"development/rich-media-content/working-with-video",slug:"/development/rich-media-content/working-with-video/using-the-stagevideo-class",permalink:"/docs/development/rich-media-content/working-with-video/using-the-stagevideo-class",draft:!1,editUrl:"https://github.com/airsdk/airsdk.dev/edit/main/docs/development/rich-media-content/working-with-video/using-the-stagevideo-class.md",tags:[],version:"current",sidebarPosition:14,frontMatter:{sidebar_position:14},sidebar:"mainSidebar",previous:{title:"Video example: Video Jukebox",permalink:"/docs/development/rich-media-content/working-with-video/video-example-video-jukebox"},next:{title:"About hardware acceleration using StageVideo",permalink:"/docs/development/rich-media-content/working-with-video/about-hardware-acceleration-using-stagevideo"}},c={},s=[],l={toc:s},p="wrapper";function A(e){let{components:t,...o}=e;return(0,a.kt)(p,(0,n.Z)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"using-the-stagevideo-class-for-hardware-accelerated-presentation"},"Using the StageVideo class for hardware accelerated presentation"),(0,a.kt)("p",null,"Flash Player optimizes video performance by using hardware acceleration for\nH.264 decoding. You can enhance performance further by using the StageVideo API.\nStage video lets your application take advantage of hardware accelerated\npresentation."),(0,a.kt)("p",null,"Runtimes that support the StageVideo API include:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Flash Player 10.2 and later")),(0,a.kt)("p",null,"Note: In Flash Player 11.4/AIR 3.4 and higher, you can use camera input with\nStageVideo."),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(20307).Z,width:"16",height:"16"})," Downloadable source code and additional details for\nthe stage video feature are available at\n",(0,a.kt)("a",{parentName:"p",href:"hhttps://web.archive.org/web/20150228093631/http://www.adobe.com/devnet/flashplayer/articles/stage_video.html"},"Getting Started with Stage Video"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(20307).Z,width:"16",height:"16"})," For a StageVideo quick start tutorial, see\n",(0,a.kt)("a",{parentName:"p",href:"https://web.archive.org/web/20150306015537/http://corlan.org/2010/12/01/working-with-stage-video"},"Working with Stage Video"),"."),(0,a.kt)("p",null,"More Help topics"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/development/rich-media-content/working-with-video/about-hardware-acceleration-using-stagevideo"},"About hardware acceleration using StageVideo")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/development/rich-media-content/working-with-video/using-the-stagevideo-apis"},"Using the StageVideo APIs")))}A.isMDXComponent=!0},20307:(e,t,r)=>{r.d(t,{Z:()=>n});const n="data:image/png;base64,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"}}]);