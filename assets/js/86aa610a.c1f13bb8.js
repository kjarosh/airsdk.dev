"use strict";(self.webpackChunkairsdk_dev=self.webpackChunkairsdk_dev||[]).push([[7001],{4137:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=u(r),m=o,h=p["".concat(c,".").concat(m)]||p[m]||l[m]||i;return r?n.createElement(h,a(a({ref:t},d),{},{components:r})):n.createElement(h,a({ref:t},d))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},2489:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>l,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var n=r(7462),o=(r(7294),r(4137));const i={title:"Custom Resources"},a=void 0,s={unversionedId:"tutorials/platform/android/custom-resources",id:"tutorials/platform/android/custom-resources",title:"Custom Resources",description:"Resources are the additional files and static content that Android uses, such as bitmaps, layout definitions, user interface strings, animation instructions, and more.",source:"@site/docs/tutorials/platform/android/custom-resources.md",sourceDirName:"tutorials/platform/android",slug:"/tutorials/platform/android/custom-resources",permalink:"/docs/tutorials/platform/android/custom-resources",draft:!1,editUrl:"https://github.com/airsdk/airsdk.dev/edit/main/docs/tutorials/platform/android/custom-resources.md",tags:[],version:"current",frontMatter:{title:"Custom Resources"},sidebar:"mainSidebar",previous:{title:"Android TV Support",permalink:"/docs/tutorials/platform/android/android-tv-support"},next:{title:"Packaging Android App Bundles",permalink:"/docs/tutorials/platform/android/packaging-android-app-bundles"}},c={},u=[{value:"Resources Directory",id:"resources-directory",level:2},{value:"Specify the <code>resdir</code>",id:"specify-the-resdir",level:2},{value:"Creating Resources",id:"creating-resources",level:2},{value:"Notification Icons",id:"notification-icons",level:3}],d={toc:u};function l(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Resources are the additional files and static content that Android uses, such as bitmaps, layout definitions, user interface strings, animation instructions, and more."),(0,o.kt)("p",null,"They are used by native Android code in SDKs and ANEs that you may use in your application. For example, the following require custom resources:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"notification icons;"),(0,o.kt)("li",{parentName:"ul"},"layered application launch icons;"),(0,o.kt)("li",{parentName:"ul"},"Firebase configuration values;")),(0,o.kt)("p",null,"In the past you may have created a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/distriqt/ANE-CustomResources/"},'"Custom Resources" ANE'),", to package the resources into an extension and then included this extension in your application."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"This is no longer required!")," We now have the ability to directly include resources in an AIR application."),(0,o.kt)("h2",{id:"resources-directory"},"Resources Directory"),(0,o.kt)("p",null,"Create a directory in your application source for storing your resources. We suggest you use ",(0,o.kt)("inlineCode",{parentName:"p"},"res")," for the name of this directory to align with the official Android name for this directory but you can name it anything you desire."),(0,o.kt)("p",null,"This directory should be at the same level as your application descriptor, and your application swf when packaging your application."),(0,o.kt)("p",null,"eg"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},".\n|____libs\n  |____library.swc\n|____src\n  |____Application.as\n  |____Application-app.xml\n  |____res\n    |____values\n      |____values.xml\n")),(0,o.kt)("p",null,"You must include it as a packaged directory and ensure it ends up in your build directory. For example in IntelliJ, add it as a packaged directory in your module settings under the Android tab. Or if you are using ",(0,o.kt)("inlineCode",{parentName:"p"},"adt")," directly add it as ",(0,o.kt)("inlineCode",{parentName:"p"},"-C . res")," to the package command."),(0,o.kt)("h2",{id:"specify-the-resdir"},"Specify the ",(0,o.kt)("inlineCode",{parentName:"h2"},"resdir")),(0,o.kt)("p",null,"Next you need to indicate to AIR that this directory is to be treated as a resource directory. To do this we add a ",(0,o.kt)("inlineCode",{parentName:"p"},"resdir")," node to the application descriptor, just after the ",(0,o.kt)("inlineCode",{parentName:"p"},"android")," node:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"...\n    </android>\n    <resdir>res</resdir>\n...\n")),(0,o.kt)("p",null,"The value of this node should be the name of your resources directory."),(0,o.kt)("h2",{id:"creating-resources"},"Creating Resources"),(0,o.kt)("p",null,"There is no change to constructing the resources, follow the guide from whatever SDK or ANE you are using that requires the resources. Once you have created your resources you must place them in the directory you have created above in the Android resource directory structure. So you should have something like the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"res\n|____drawable-mdpi\n  |____ic_stat_icon.png\n|____drawable-hdpi\n  |____ic_stat_icon.png\n|____drawable-xhdpi\n  |____ic_stat_icon.png\n|____drawable-xxhdpi\n  |____ic_stat_icon.png\n|____drawable-xxxhdpi\n  |____ic_stat_icon.png\n|____values\n  |____values.xml\n")),(0,o.kt)("h3",{id:"notification-icons"},"Notification Icons"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://romannurik.github.io/AndroidAssetStudio/"},"Android Asset Studio")," is a great online resource which will convert your icon into the correct sizes and formats for an Android notification icon."),(0,o.kt)("p",null,"Your notification icon needs to be white(grey) and transparent and will be converted to meet these requirements if you provide something different."),(0,o.kt)("p",null,(0,o.kt)("img",{src:r(5268).Z,width:"370",height:"184"})),(0,o.kt)("p",null,"To generate these goto the Android Asset Studio ",(0,o.kt)("a",{parentName:"p",href:"https://romannurik.github.io/AndroidAssetStudio/icons-notification.html"},"Notification Icon Generator")," and upload your source image. Make sure you change the name of the icon. You will be using this name to reference this icon in notifications."),(0,o.kt)("p",null,(0,o.kt)("img",{src:r(330).Z,width:"335",height:"159"})))}l.isMDXComponent=!0},5268:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/android-group-e584fd041b650139f0544422f15c6b74.png"},330:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/example-icons-743f54ccd704cd88114a052a21b2e9e5.png"}}]);