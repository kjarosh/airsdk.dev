"use strict";(self.webpackChunkairsdk_dev=self.webpackChunkairsdk_dev||[]).push([[30017],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},w=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=d(n),w=i,m=c["".concat(l,".").concat(w)]||c[w]||h[w]||r;return n?a.createElement(m,o(o({ref:t},p),{},{components:n})):a.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=w;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:i,o[1]=s;for(var d=2;d<r;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}w.displayName="MDXCreateElement"},52127:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var a=n(87462),i=(n(67294),n(3905));const r={sidebar_position:4},o="Listening for window events",s={unversionedId:"development/client-system-interaction/working-with-air-native-windows/listening-for-window-events",id:"development/client-system-interaction/working-with-air-native-windows/listening-for-window-events",title:"Listening for window events",description:"To listen for the events dispatched by a window, register a listener with the",source:"@site/docs/development/client-system-interaction/working-with-air-native-windows/listening-for-window-events.md",sourceDirName:"development/client-system-interaction/working-with-air-native-windows",slug:"/development/client-system-interaction/working-with-air-native-windows/listening-for-window-events",permalink:"/docs/development/client-system-interaction/working-with-air-native-windows/listening-for-window-events",draft:!1,editUrl:"https://github.com/airsdk/airsdk.dev/edit/main/docs/development/client-system-interaction/working-with-air-native-windows/listening-for-window-events.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"mainSidebar",previous:{title:"Managing windows",permalink:"/docs/development/client-system-interaction/working-with-air-native-windows/managing-windows"},next:{title:"Displaying full-screen windows",permalink:"/docs/development/client-system-interaction/working-with-air-native-windows/displaying-full-screen-windows"}},l={},d=[],p={toc:d},c="wrapper";function h(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"listening-for-window-events"},"Listening for window events"),(0,i.kt)("p",null,"To listen for the events dispatched by a window, register a listener with the\nwindow instance. For example, to listen for the closing event, register a\nlistener with the window as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"myWindow.addEventListener(Event.CLOSING, onClosingEvent);\n")),(0,i.kt)("p",null,"When an event is dispatched, the ",(0,i.kt)("inlineCode",{parentName:"p"},"target")," property references the window sending\nthe event."),(0,i.kt)("p",null,"Most window events have two related messages. The first message signals that a\nwindow change is imminent (and can be canceled), while the second message\nsignals that the change has occurred. For example, when a user clicks the close\nbutton of a window, the closing event message is dispatched. If no listeners\ncancel the event, the window closes and the close event is dispatched to any\nlisteners."),(0,i.kt)("p",null,"Typically, the warning events, such as ",(0,i.kt)("inlineCode",{parentName:"p"},"closing"),", are only dispatched when\nsystem chrome has been used to trigger an event. Calling the window ",(0,i.kt)("inlineCode",{parentName:"p"},"close()"),"\nmethod, for example, does not automatically dispatch the ",(0,i.kt)("inlineCode",{parentName:"p"},"closing")," event\u2014only\nthe ",(0,i.kt)("inlineCode",{parentName:"p"},"close")," event is dispatched. You can, however, construct a closing event\nobject and dispatch it using the window ",(0,i.kt)("inlineCode",{parentName:"p"},"dispatchEvent()")," method."),(0,i.kt)("p",null,"The window events that dispatch an Event object are:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Event"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"activate"),(0,i.kt)("td",{parentName:"tr",align:null},"Dispatched when the window receives focus.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"deactivate"),(0,i.kt)("td",{parentName:"tr",align:null},"Dispatched when the window loses focus")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"closing"),(0,i.kt)("td",{parentName:"tr",align:null},"Dispatched when the window is about to close. This only occurs automatically when the system chrome close button is pressed or, on Mac OS X, when the Quit command is invoked.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"close"),(0,i.kt)("td",{parentName:"tr",align:null},"Dispatched when the window has closed.")))),(0,i.kt)("p",null,"The window events that dispatch an NativeWindowBoundsEvent object are:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Event"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"moving"),(0,i.kt)("td",{parentName:"tr",align:null},"Dispatched immediately before the top-left corner of the window changes position, either as a result of moving, resizing or changing the window display state.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"move"),(0,i.kt)("td",{parentName:"tr",align:null},"Dispatched after the top-left corner has changed position.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"resizing"),(0,i.kt)("td",{parentName:"tr",align:null},"Dispatched immediately before the window width or height changes either as a result of resizing or a display state change.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"resize"),(0,i.kt)("td",{parentName:"tr",align:null},"Dispatched after the window has changed size.")))),(0,i.kt)("p",null,"For NativeWindowBoundsEvent events, you can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"beforeBounds")," and\n",(0,i.kt)("inlineCode",{parentName:"p"},"afterBounds")," properties to determine the window bounds before and after the\nimpending or completed change."),(0,i.kt)("p",null,"The window events that dispatch an NativeWindowDisplayStateEvent object are:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Event"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"displayStateChanging"),(0,i.kt)("td",{parentName:"tr",align:null},"Dispatched immediately before the window display state changes.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"displayStateChange"),(0,i.kt)("td",{parentName:"tr",align:null},"Dispatched after the window display state has changed.")))),(0,i.kt)("p",null,"For NativeWindowDisplayStateEvent events, you can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"beforeDisplayState"),"\nand ",(0,i.kt)("inlineCode",{parentName:"p"},"afterDisplayState")," properties to determine the window display state before\nand after the impending or completed change."),(0,i.kt)("p",null,"On some Linux window managers, a display state change event is not dispatched\nwhen a window with a maximum size setting is maximized. (The window is set to\nthe maximized display state, but is not resized.)"))}h.isMDXComponent=!0}}]);