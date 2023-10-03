"use strict";(self.webpackChunkairsdk_dev=self.webpackChunkairsdk_dev||[]).push([[90314],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>v});var a=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},h=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,o=e.originalType,c=e.parentName,h=r(e,["components","mdxType","originalType","parentName"]),p=l(n),u=s,v=p["".concat(c,".").concat(u)]||p[u]||d[u]||o;return n?a.createElement(v,i(i({ref:t},h),{},{components:n})):a.createElement(v,i({ref:t},h))}));function v(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=n.length,i=new Array(o);i[0]=u;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r[p]="string"==typeof e?e:s,i[1]=r;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},92507:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var a=n(87462),s=(n(67294),n(3905));const o={sidebar_position:1},i="Basics of handling events",r={unversionedId:"development/core-actionscript-classes/handling-events/basics-of-handling-events",id:"development/core-actionscript-classes/handling-events/basics-of-handling-events",title:"Basics of handling events",description:"You can think of events as occurrences of any kind in your SWF file that are of",source:"@site/docs/development/core-actionscript-classes/handling-events/basics-of-handling-events.md",sourceDirName:"development/core-actionscript-classes/handling-events",slug:"/development/core-actionscript-classes/handling-events/basics-of-handling-events",permalink:"/docs/development/core-actionscript-classes/handling-events/basics-of-handling-events",draft:!1,editUrl:"https://github.com/airsdk/airsdk.dev/edit/main/docs/development/core-actionscript-classes/handling-events/basics-of-handling-events.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"mainSidebar",previous:{title:"Handling Events",permalink:"/docs/development/core-actionscript-classes/handling-events/"},next:{title:"How ActionScript 3.0 event handling differs from earlier versions",permalink:"/docs/development/core-actionscript-classes/handling-events/how-actionscript-3.0-event-handling-differs-from-earlier-versions"}},c={},l=[{value:"Important concepts and terms",id:"important-concepts-and-terms",level:2},{value:"Bubbling",id:"bubbling",level:3},{value:"Bubbling phase",id:"bubbling-phase",level:3},{value:"Capture phase",id:"capture-phase",level:3},{value:"Default behavior",id:"default-behavior",level:3},{value:"Dispatch",id:"dispatch",level:3},{value:"Event",id:"event",level:3},{value:"Event flow",id:"event-flow",level:3},{value:"Event object",id:"event-object",level:3},{value:"Event target",id:"event-target",level:3},{value:"Listener",id:"listener",level:3},{value:"Target phase",id:"target-phase",level:3}],h={toc:l},p="wrapper";function d(e){let{components:t,...n}=e;return(0,s.kt)(p,(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"basics-of-handling-events"},"Basics of handling events"),(0,s.kt)("p",null,"You can think of events as occurrences of any kind in your SWF file that are of\ninterest to you as a programmer. For example, most SWF files support user\ninteraction of some sort\u2014whether it's something as simple as responding to a\nmouse click or something more complex, such as accepting and processing data\nentered into a form. Any such user interaction with your SWF file is considered\nan event. Events can also occur without any direct user interaction, such as\nwhen data has finished loading from a server or when an attached camera has\nbecome active."),(0,s.kt)("p",null,"In ActionScript 3.0, each event is represented by an event object, which is an\ninstance of the Event class or one of its subclasses. An event object not only\nstores information about a specific event, but also contains methods that\nfacilitate manipulation of the event object. For example, when Flash Player or\nAIR detects a mouse click, it creates an event object (an instance of the\nMouseEvent class) to represent that particular mouse click event."),(0,s.kt)("p",null,"After creating an event object, Flash Player or AIR ",(0,s.kt)("em",{parentName:"p"},"dispatches")," it, which means\nthat the event object is passed to the object that is the target of the event.\nAn object that serves as the destination for a dispatched event object is called\nan ",(0,s.kt)("em",{parentName:"p"},"event target"),'. For example, when an attached camera becomes active, Flash\nPlayer dispatches an event object directly to the event target, which in this\ncase is the object that represents the camera. If the event target is on the\ndisplay list, however, the event object is passed down through the display list\nhierarchy until it reaches the event target. In some cases, the event object\nthen "bubbles" back up the display list hierarchy along the same route. This\ntraversal of the display list hierarchy is called the ',(0,s.kt)("em",{parentName:"p"},"event flow"),"."),(0,s.kt)("p",null,'You can "listen" for event objects in your code using event listeners. ',(0,s.kt)("em",{parentName:"p"},"Event\nlisteners")," are the functions or methods that you write to respond to specific\nevents. To ensure that your program responds to events, you must add event\nlisteners either to the event target or to any display list object that is part\nof an event object's event flow."),(0,s.kt)("p",null,"Any time you write event listener code, it follows this basic structure\n(elements in bold are placeholders you'd fill in for your specific case):"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-actionscript"},"function eventResponse(eventObject:EventType):void \n{ \n    // Actions performed in response to the event go here. \n} \n \neventTarget.addEventListener(EventType.EVENT_NAME, eventResponse);\n")),(0,s.kt)("p",null,"This code does two things. First, it defines a function, which is the way to\nspecify the actions that will be performed in response to the event. Next, it\ncalls the ",(0,s.kt)("inlineCode",{parentName:"p"},"addEventListener()"),' method of the source object, in essence\n"subscribing" the function to the specified event so that when the event\nhappens, the function\'s actions are carried out. When the event actually\nhappens, the event target checks its list of all the functions and methods that\nare registered as event listeners. It then calls each one in turn, passing the\nevent object as a parameter.'),(0,s.kt)("p",null,"You need to alter four things in this code to create your own event listener.\nFirst, you must change the name of the function to the name you want to use\n(this must be changed in two places, where the code says ",(0,s.kt)("strong",{parentName:"p"},"eventResponse"),").\nSecond, you must specify the appropriate class name of the event object that is\ndispatched by the event you want to listen for (",(0,s.kt)("strong",{parentName:"p"},"EventType")," in the code), and\nyou must specify the appropriate constant for the specific event (",(0,s.kt)("strong",{parentName:"p"},"EVENT_NAME"),"\nin the listing). Third, you must call the ",(0,s.kt)("inlineCode",{parentName:"p"},"addEventListener()")," method on the\nobject that will dispatch the event (",(0,s.kt)("strong",{parentName:"p"},"eventTarget")," in this code). Optionally,\nyou can change the name of the variable used as the function's parameter\n(",(0,s.kt)("strong",{parentName:"p"},"eventObject")," in this code)."),(0,s.kt)("h2",{id:"important-concepts-and-terms"},"Important concepts and terms"),(0,s.kt)("p",null,"The following reference list contains important terms that you will encounter\nwhen writing event-handling routines:"),(0,s.kt)("h3",{id:"bubbling"},"Bubbling"),(0,s.kt)("p",null,"Bubbling occurs for some events so that a parent display object can respond to\nevents dispatched by its children."),(0,s.kt)("h3",{id:"bubbling-phase"},"Bubbling phase"),(0,s.kt)("p",null,"The part of the event flow in which an event propagates up to parent display\nobjects. The bubbling phase occurs after the capture and target phases."),(0,s.kt)("h3",{id:"capture-phase"},"Capture phase"),(0,s.kt)("p",null,"The part of the event flow in which an event propagates down from the most\ngeneral target to the most specific target object. The capture phase occurs\nbefore the target and bubbling phases."),(0,s.kt)("h3",{id:"default-behavior"},"Default behavior"),(0,s.kt)("p",null,"Some events include a behavior that normally happens along with the event, known\nas the default behavior. For example, when a user types text in a text field, a\ntext input event is raised. The default behavior for that event is to actually\ndisplay the character that was typed into the text field\u2014but you can override\nthat default behavior (if for some reason you don't want the typed character to\nbe displayed)."),(0,s.kt)("h3",{id:"dispatch"},"Dispatch"),(0,s.kt)("p",null,"To notify event listeners that an event has occurred."),(0,s.kt)("h3",{id:"event"},"Event"),(0,s.kt)("p",null,"Something that happens to an object that the object can tell other objects\nabout."),(0,s.kt)("h3",{id:"event-flow"},"Event flow"),(0,s.kt)("p",null,"When events happen to an object on the display list (an object displayed on the\nscreen), all the objects that contain the object are notified of the event and\nnotify their event listeners in turn. This process starts with the Stage and\nproceeds through the display list to the actual object where the event occurred,\nand then proceeds back to the Stage again. This process is known as the event\nflow."),(0,s.kt)("h3",{id:"event-object"},"Event object"),(0,s.kt)("p",null,"An object that contains information about a particular event's occurrence, which\nis sent to all listeners when an event is dispatched."),(0,s.kt)("h3",{id:"event-target"},"Event target"),(0,s.kt)("p",null,"The object that actually dispatches an event. For example, if the user clicks a\nbutton that is inside a Sprite that is in turn inside the Stage, all those\nobjects dispatch events, but the event target is the one where the event\nactually happened\u2014in this case, the clicked button."),(0,s.kt)("h3",{id:"listener"},"Listener"),(0,s.kt)("p",null,"An object or function that has registered itself with an object, to indicate\nthat it should be notified when a specific event takes place."),(0,s.kt)("h3",{id:"target-phase"},"Target phase"),(0,s.kt)("p",null,"The point of the event flow at which an event has reached the most specific\npossible target. The target phase occurs between the capture and the bubbling\nphases."))}d.isMDXComponent=!0}}]);