"use strict";(self.webpackChunkairsdk_dev=self.webpackChunkairsdk_dev||[]).push([[32717],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>f});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},h=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(t),h=i,f=m["".concat(s,".").concat(h)]||m[h]||d[h]||r;return t?a.createElement(f,o(o({ref:n},c),{},{components:t})):a.createElement(f,o({ref:n},c))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=h;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[m]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},69400:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=t(87462),i=(t(67294),t(3905));const r={},o="Controlling movie clip playback",l={unversionedId:"development/display/working-with-movie-clips/controlling-movie-clip-playback",id:"development/display/working-with-movie-clips/controlling-movie-clip-playback",title:"Controlling movie clip playback",description:"Flash uses the metaphor of a timeline to convey animation or a change in state.",source:"@site/docs/development/display/working-with-movie-clips/controlling-movie-clip-playback.md",sourceDirName:"development/display/working-with-movie-clips",slug:"/development/display/working-with-movie-clips/controlling-movie-clip-playback",permalink:"/docs/development/display/working-with-movie-clips/controlling-movie-clip-playback",draft:!1,editUrl:"https://github.com/airsdk/airsdk.dev/edit/main/docs/development/display/working-with-movie-clips/controlling-movie-clip-playback.md",tags:[],version:"current",frontMatter:{},sidebar:"mainSidebar",previous:{title:"Basics of movie clips",permalink:"/docs/development/display/working-with-movie-clips/basics-of-movie-clips"},next:{title:"Creating MovieClip objects with ActionScript",permalink:"/docs/development/display/working-with-movie-clips/creating-movieclip-objects-with-actionscript"}},s={},p=[{value:"Playing movie clips and stopping playback",id:"playing-movie-clips-and-stopping-playback",level:2},{value:"Fast-forwarding and rewinding",id:"fast-forwarding-and-rewinding",level:2},{value:"Jumping to a different frame and using frame labels",id:"jumping-to-a-different-frame-and-using-frame-labels",level:2},{value:"Working with scenes",id:"working-with-scenes",level:2}],c={toc:p},m="wrapper";function d(e){let{components:n,...t}=e;return(0,i.kt)(m,(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"controlling-movie-clip-playback"},"Controlling movie clip playback"),(0,i.kt)("p",null,"Flash uses the metaphor of a timeline to convey animation or a change in state.\nAny visual element that employs a timeline must be either a MovieClip object or\nextend from the MovieClip class. While ActionScript can direct any movie clip to\nstop, play, or go to another point on the timeline, it cannot be used to\ndynamically create a timeline or add content at specific frames; this is only\npossible using the Flash authoring tool."),(0,i.kt)("p",null,"When a MovieClip is playing, it progresses along its timeline at a speed\ndictated by the frame rate of the SWF file. Alternatively, you can override this\nsetting by setting the ",(0,i.kt)("inlineCode",{parentName:"p"},"Stage.frameRate")," property in ActionScript."),(0,i.kt)("h2",{id:"playing-movie-clips-and-stopping-playback"},"Playing movie clips and stopping playback"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"play()")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"stop()")," methods allow basic control of a movie clip across its\ntimeline. For example, suppose you have a movie clip symbol on the Stage which\ncontains an animation of a bicycle moving across the screen, with its instance\nname set to ",(0,i.kt)("inlineCode",{parentName:"p"},"bicycle"),". If the following code is attached to a keyframe on the\nmain timeline,"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"bicycle.stop();\n")),(0,i.kt)("p",null,"the bicycle will not move (its animation will not play). The bicycle's movement\ncould start through some other user interaction. For example, if you had a\nbutton named ",(0,i.kt)("inlineCode",{parentName:"p"},"startButton"),", the following code on a keyframe on the main\ntimeline would make it so that clicking the button causes the animation to play:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"// This function will be called when the button is clicked. It causes the\n// bicycle animation to play.\nfunction playAnimation(event:MouseEvent):void\n{\n    bicycle.play();\n}\n// Register the function as a listener with the button.\nstartButton.addEventListener(MouseEvent.CLICK, playAnimation);\n")),(0,i.kt)("h2",{id:"fast-forwarding-and-rewinding"},"Fast-forwarding and rewinding"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"play()")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"stop()")," methods are not the only way of controlling playback\nin a movie clip. You can also move the playhead forward or backward along the\ntimeline manually by using the ",(0,i.kt)("inlineCode",{parentName:"p"},"nextFrame()")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"prevFrame()")," methods. Calling\neither of these methods stops playback and moves the playhead one frame forward\nor backward, respectively."),(0,i.kt)("p",null,"Using the ",(0,i.kt)("inlineCode",{parentName:"p"},"play()")," method is analogous to calling ",(0,i.kt)("inlineCode",{parentName:"p"},"nextFrame()")," every time the\nmovie clip object's ",(0,i.kt)("inlineCode",{parentName:"p"},"enterFrame")," event is triggered. Along these lines, you\ncould make the ",(0,i.kt)("inlineCode",{parentName:"p"},"bicycle")," movie clip play backwards by creating an event listener\nfor the ",(0,i.kt)("inlineCode",{parentName:"p"},"enterFrame")," event and telling ",(0,i.kt)("inlineCode",{parentName:"p"},"bicycle")," to go to its previous frame in\nthe listener function, as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"// This function is called when the enterFrame event is triggered, meaning\n// it's called once per frame.\nfunction everyFrame(event:Event):void\n{\n    if (bicycle.currentFrame == 1)\n    {\n        bicycle.gotoAndStop(bicycle.totalFrames);\n    }\n    else\n    {\n        bicycle.prevFrame();\n    }\n}\nbicycle.addEventListener(Event.ENTER_FRAME, everyFrame);\n")),(0,i.kt)("p",null,"In normal playback, if a movie clip contains more than a single frame, it will\nloop indefinitely when playing; that is, it will return to Frame 1 if it\nprogresses past its final frame. When you use ",(0,i.kt)("inlineCode",{parentName:"p"},"prevFrame()")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"nextFrame()"),",\nthis behavior does not happen automatically (calling ",(0,i.kt)("inlineCode",{parentName:"p"},"prevFrame()")," when the\nplayhead is on Frame 1 doesn't move the playhead to the last frame). The ",(0,i.kt)("inlineCode",{parentName:"p"},"if"),"\ncondition in the example above checks to see if the playhead has progressed\nbackwards to the first frame, and sets the playhead ahead to its final frame,\neffectively creating a continuous loop of the movie clip playing backwards."),(0,i.kt)("h2",{id:"jumping-to-a-different-frame-and-using-frame-labels"},"Jumping to a different frame and using frame labels"),(0,i.kt)("p",null,"Sending a movie clip to a new frame is a simple affair. Calling either\n",(0,i.kt)("inlineCode",{parentName:"p"},"gotoAndPlay()")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"gotoAndStop()")," will jump the movie clip to the frame number\nspecified as a parameter. Alternatively, you can pass a string that matches the\nname of a frame label. Any frame on the timeline can be assigned a label. To do\nthis, select a frame on the timeline and then enter a name in the Frame Label\nfield on the Property inspector."),(0,i.kt)("p",null,'The advantages of using frame labels instead of numbers are particularly evident\nwhen creating a complex movie clip. When the number of frames, layers, and\ntweens in an animation becomes large, consider labeling important frames with\nexplanatory descriptions that represent shifts in the behavior of the movie clip\n(for example, "off," "walking," or "running"). This improves code readability\nand also provides flexibility, since ActionScript calls that go to a labeled\nframe are pointers to a single reference\u2014the label\u2014rather than a specific frame\nnumber. If later on you decide to move a particular segment of the animation to\na different frame, you will not need to change your ActionScript code as long as\nyou keep the same label for the frames in the new location.'),(0,i.kt)("p",null,"To represent frame labels in code, ActionScript 3.0 includes the FrameLabel\nclass. Each instance of this class represents a single frame label, and has a\n",(0,i.kt)("inlineCode",{parentName:"p"},"name")," property representing the name of the frame label as specified in the\nProperty inspector, and a ",(0,i.kt)("inlineCode",{parentName:"p"},"frame")," property representing the frame number of the\nframe where the label is placed on the timeline."),(0,i.kt)("p",null,"In order to get access to the FrameLabel instances associated with a movie clip\ninstance, the MovieClip class includes two properties that directly return\nFrameLabel objects. The ",(0,i.kt)("inlineCode",{parentName:"p"},"currentLabels")," property returns an array that consists\nof all FrameLabel objects across the entire timeline of a movie clip. The\n",(0,i.kt)("inlineCode",{parentName:"p"},"currentLabel")," property returns a string containing the name of the frame label\nencountered most recently along the timeline."),(0,i.kt)("p",null,"Suppose you were creating a movie clip named ",(0,i.kt)("inlineCode",{parentName:"p"},"robot")," and had labeled the various\nstates of its animation. You could set up a condition that checks the\n",(0,i.kt)("inlineCode",{parentName:"p"},"currentLabel")," property to access the current state of ",(0,i.kt)("inlineCode",{parentName:"p"},"robot"),", as in the\nfollowing code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'if (robot.currentLabel == "walking")\n{\n    // do something\n}\n')),(0,i.kt)("p",null,"Flash Player 11.3 and AIR 3.3 added the ",(0,i.kt)("inlineCode",{parentName:"p"},"frameLabel")," event to the FrameLabel\nclass. You can assign an event handler to the FrameLabel instance that\nrepresents a frame label. The event is dispatched when the playhead enters the\nframe."),(0,i.kt)("p",null,"The following example creates a FrameLabel instance for the second frame label\nin the Array of frame labels for the MovieClip. It then registers an event\nhandler for the ",(0,i.kt)("inlineCode",{parentName:"p"},"frameLabel")," event:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"var myFrameLabel:FrameLabel = robot.currentLabels[1];\nmyFrameLabel.addEventListener(Event.FRAME_LABEL, onFrameLabel);\n\nfunction onFrameLabel(e:Event):void {\n    // do something\n}\n")),(0,i.kt)("h2",{id:"working-with-scenes"},"Working with scenes"),(0,i.kt)("p",null,"In the Flash authoring environment, you can use scenes to demarcate a series of\ntimelines that a SWF file will progress through. Using the second parameter of\nthe ",(0,i.kt)("inlineCode",{parentName:"p"},"gotoAndPlay()")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"gotoAndStop()")," methods, you can specify a scene to send\nthe playhead to. All FLA files start with only the initial scene, but you can\ncreate new scenes."),(0,i.kt)("p",null,"Using scenes is not always the best approach because scenes have a number of\ndrawbacks. A Flash document that contains multiple scenes can be difficult to\nmaintain, particularly in multiauthor environments. Multiple scenes can also be\ninefficient in bandwidth, because the publishing process merges all scenes into\na single timeline. This causes a progressive download of all scenes, even if\nthey are never played. For these reasons, use of multiple scenes is often\ndiscouraged except for organizing lengthy multiple timeline-based animations."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"scenes")," property of the MovieClip class returns an array of Scene objects\nrepresenting all the scenes in the SWF file. The ",(0,i.kt)("inlineCode",{parentName:"p"},"currentScene")," property returns\na Scene object that represents the scene that is currently playing."),(0,i.kt)("p",null,"The Scene class has several properties that give information about a scene. The\n",(0,i.kt)("inlineCode",{parentName:"p"},"labels")," property returns an array of FrameLabel objects representing the frame\nlabels in that scene. The ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," property returns the scene's name as a string.\nThe ",(0,i.kt)("inlineCode",{parentName:"p"},"numFrames")," property returns an int representing the total number of frames\nin the scene."))}d.isMDXComponent=!0}}]);