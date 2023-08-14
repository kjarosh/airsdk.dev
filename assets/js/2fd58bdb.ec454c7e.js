"use strict";(self.webpackChunkairsdk_dev=self.webpackChunkairsdk_dev||[]).push([[93239],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>g});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(a),u=r,g=c["".concat(s,".").concat(u)]||c[u]||h[u]||i;return a?n.createElement(g,o(o({ref:t},p),{},{components:a})):n.createElement(g,o({ref:t},p))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},55947:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var n=a(87462),r=(a(67294),a(3905));const i={sidebar_position:1},o="Basics of drag and drop in AIR",l={unversionedId:"development/user-interaction/drag-and-drop-in-air/basics-of-drag-and-drop-in-air",id:"development/user-interaction/drag-and-drop-in-air/basics-of-drag-and-drop-in-air",title:"Basics of drag and drop in AIR",description:"For a quick explanation and code examples of using drag and drop in an AIR",source:"@site/docs/development/user-interaction/drag-and-drop-in-air/basics-of-drag-and-drop-in-air.md",sourceDirName:"development/user-interaction/drag-and-drop-in-air",slug:"/development/user-interaction/drag-and-drop-in-air/basics-of-drag-and-drop-in-air",permalink:"/docs/development/user-interaction/drag-and-drop-in-air/basics-of-drag-and-drop-in-air",draft:!1,editUrl:"https://github.com/airsdk/airsdk.dev/edit/main/docs/development/user-interaction/drag-and-drop-in-air/basics-of-drag-and-drop-in-air.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"mainSidebar",previous:{title:"Drag and drop in AIR",permalink:"/docs/development/user-interaction/drag-and-drop-in-air/"},next:{title:"Supporting the drag-out gesture",permalink:"/docs/development/user-interaction/drag-and-drop-in-air/supporting-the-drag-out-gesture"}},s={},d=[{value:"Drag-and-drop gesture stages",id:"drag-and-drop-gesture-stages",level:4},{value:"The Clipboard object",id:"the-clipboard-object",level:4},{value:"Working with the Flex framework",id:"working-with-the-flex-framework",level:4}],p={toc:d},c="wrapper";function h(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"basics-of-drag-and-drop-in-air"},"Basics of drag and drop in AIR"),(0,r.kt)("p",null,"For a quick explanation and code examples of using drag and drop in an AIR\napplication, see the following quick start articles on the Adobe Developer\nConnection:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://web.archive.org/web/20150221112531/http://www.adobe.com/devnet/air/flex/quickstart/articles/scrappy_copy_paste.html"},"Supporting drag-and-drop and copy-and-paste"),"\n(Flex)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://web.archive.org/web/20150221035757/http://www.adobe.com/devnet/air/flash/quickstart/articles/scrappy_copy_paste.html"},"Supporting drag-and-drop and copy-and-paste"),"\n(Flash)"))),(0,r.kt)("p",null,"The drag-and-drop API contains the following classes."),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,(0,r.kt)("p",null,"Package")),(0,r.kt)("th",null,(0,r.kt)("p",null,"Classes")))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("p",null,"flash.desktop")),(0,r.kt)("td",null,(0,r.kt)("div",null,(0,r.kt)("ul",{class:"incremental"},(0,r.kt)("li",null,(0,r.kt)("p",null,(0,r.kt)("a",{href:"https://airsdk.dev/reference/actionscript/3.0/flash/desktop/NativeDragManager.html"},"NativeDragManager"))),(0,r.kt)("li",null,(0,r.kt)("p",null,(0,r.kt)("a",{href:"https://airsdk.dev/reference/actionscript/3.0/flash/desktop/NativeDragOptions.html"},"NativeDragOptions"))),(0,r.kt)("li",null,(0,r.kt)("p",null,(0,r.kt)("a",{href:"https://airsdk.dev/reference/actionscript/3.0/flash/desktop/Clipboard.html"},"Clipboard"))),(0,r.kt)("li",null,(0,r.kt)("p",null,(0,r.kt)("a",{href:"https://help.adobe.com/en_US/FlashPlatform/reference/actionscript/3/air/desktop/URLFilePromise.html"},"URLFilePromise"))),(0,r.kt)("li",null,(0,r.kt)("p",null,(0,r.kt)("a",{href:"https://airsdk.dev/reference/actionscript/3.0/flash/desktop/IFilePromise.html"},"IFilePromise"))))),(0,r.kt)("p",null,"Constants used with the drag-and-drop API are defined in the following classes:"),(0,r.kt)("div",null,(0,r.kt)("ul",{class:"incremental"},(0,r.kt)("li",null,(0,r.kt)("p",null,(0,r.kt)("a",{href:"https://airsdk.dev/reference/actionscript/3.0/flash/desktop/NativeDragActions.html"},"NativeDragActions"))),(0,r.kt)("li",null,(0,r.kt)("p",null,(0,r.kt)("a",{href:"https://airsdk.dev/reference/actionscript/3.0/flash/desktop/ClipboardFormats.html"},"ClipboardFormat"))),(0,r.kt)("li",null,(0,r.kt)("p",null,(0,r.kt)("a",{href:"https://airsdk.dev/reference/actionscript/3.0/flash/desktop/ClipboardTransferMode.html"},"ClipboardTransferModes"))))))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("p",null,"flash.events")),(0,r.kt)("td",null,(0,r.kt)("p",null,(0,r.kt)("a",{href:"https://airsdk.dev/reference/actionscript/3.0/flash/events/NativeDragEvent.html"},"NativeDragEvent")))))),(0,r.kt)("h4",{id:"drag-and-drop-gesture-stages"},"Drag-and-drop gesture stages"),(0,r.kt)("p",null,"The drag-and-drop gesture has three stages:"),(0,r.kt)("p",null,"Initiation",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("em",{parentName:"p"},"A user initiates a drag-and-drop operation by dragging from a component, or an\nitem in a component, while holding down the mouse button.")," The component that is\nthe source of the dragged item is typically designated as the drag initiator and\ndispatches ",(0,r.kt)("inlineCode",{parentName:"p"},"nativeDragStart")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"nativeDragComplete")," events. An Adobe AIR\napplication starts a drag operation by calling the ",(0,r.kt)("inlineCode",{parentName:"p"},"NativeDragManager.doDrag()"),"\nmethod in response to a ",(0,r.kt)("inlineCode",{parentName:"p"},"mouseDown")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"mouseMove")," event."),(0,r.kt)("p",null,"If the drag operation is initiated from outside an AIR application, there is no\ninitiator object to dispatch ",(0,r.kt)("inlineCode",{parentName:"p"},"nativeDragStart")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"nativeDragComplete")," events."),(0,r.kt)("p",null,"Dragging",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("em",{parentName:"p"},"While holding down the mouse button, the user moves the mouse cursor to another\ncomponent, application, or to the desktop.")," As long as the drag is underway, the\ninitiator object dispatches ",(0,r.kt)("inlineCode",{parentName:"p"},"nativeDragUpdate")," events. (However, this event is\nnot dispatched in AIR for Linux.) When the user moves the mouse over a possible\ndrop target in an AIR application, the drop target dispatches a\n",(0,r.kt)("inlineCode",{parentName:"p"},"nativeDragEnter")," event. The event handler can inspect the event object to\ndetermine whether the dragged data is available in a format that the target\naccepts and, if so, let the user drop the data onto it by calling the\n",(0,r.kt)("inlineCode",{parentName:"p"},"NativeDragManager.acceptDragDrop()")," method."),(0,r.kt)("p",null,"As long as the drag gesture remains over an interactive object, that object\ndispatches ",(0,r.kt)("inlineCode",{parentName:"p"},"nativeDragOver")," events. When the drag gesture leaves the interactive\nobject, it dispatches a ",(0,r.kt)("inlineCode",{parentName:"p"},"nativeDragExit")," event."),(0,r.kt)("p",null,"Drop",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("em",{parentName:"p"},"The user releases the mouse over an eligible drop target.")," If the target is an\nAIR application or component, then the target object dispatches a\n",(0,r.kt)("inlineCode",{parentName:"p"},"nativeDragDrop")," event. The event handler can access the transferred data from\nthe event object. If the target is outside AIR, the operating system or another\napplication handles the drop. In both cases, the initiating object dispatches a\n",(0,r.kt)("inlineCode",{parentName:"p"},"nativeDragComplete")," event (if the drag started from within AIR)."),(0,r.kt)("p",null,"The NativeDragManager class controls both drag-in and drag-out gestures. All the\nmembers of the NativeDragManager class are static, do not create an instance of\nthis class."),(0,r.kt)("h4",{id:"the-clipboard-object"},"The Clipboard object"),(0,r.kt)("p",null,"Data that is dragged into or out of an application or component is contained in\na Clipboard object. A single Clipboard object can make available different\nrepresentations of the same information to increase the likelihood that another\napplication can understand and use the data. For example, an image could be\nincluded as image data, a serialized Bitmap object, and as a file. Rendering of\nthe data in a format can be deferred to a rendering function that is not called\nuntil the data is read."),(0,r.kt)("p",null,"Once a drag gesture has started, the Clipboard object can only be accessed from\nwithin an event handler for the ",(0,r.kt)("inlineCode",{parentName:"p"},"nativeDragEnter"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"nativeDragOver"),", and\n",(0,r.kt)("inlineCode",{parentName:"p"},"nativeDragDrop")," events. After the drag gesture has ended, the Clipboard object\ncannot be read or reused."),(0,r.kt)("p",null,"An application object can be transferred as a reference and as a serialized\nobject. References are only valid within the originating application. Serialized\nobject transfers are valid between AIR applications, but can only be used with\nobjects that remain valid when serialized and deserialized. Objects that are\nserialized are converted into the Action Message Format for ActionScript 3\n(AMF3), a string-based data-transfer format."),(0,r.kt)("h4",{id:"working-with-the-flex-framework"},"Working with the Flex framework"),(0,r.kt)("p",null,"In most cases, it is better to use the Adobe\xae Flex\u2122 drag-and-drop API when\nbuilding Flex applications. The Flex framework provides an equivalent feature\nset when a Flex application is run in AIR (it uses the AIR NativeDragManager\ninternally). Flex also maintains a more limited feature set when an application\nor component is running within the more restrictive browser environment. AIR\nclasses cannot be used in components or applications that run outside the AIR\nrun-time environment."))}h.isMDXComponent=!0}}]);