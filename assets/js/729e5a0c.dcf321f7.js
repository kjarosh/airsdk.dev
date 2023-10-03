"use strict";(self.webpackChunkairsdk_dev=self.webpackChunkairsdk_dev||[]).push([[98404],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>h});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=a.createContext({}),s=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},d=function(e){var n=s(e.components);return a.createElement(c.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,l=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=s(t),m=o,h=p["".concat(c,".").concat(m)]||p[m]||u[m]||l;return t?a.createElement(h,r(r({ref:n},d),{},{components:t})):a.createElement(h,r({ref:n},d))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var l=t.length,r=new Array(l);r[0]=m;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i[p]="string"==typeof e?e:o,r[1]=i;for(var s=2;s<l;s++)r[s]=t[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},73347:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var a=t(87462),o=(t(67294),t(3905));const l={sidebar_position:6},r="Playing video in full-screen mode",i={unversionedId:"development/rich-media-content/working-with-video/playing-video-in-full-screen-mode",id:"development/rich-media-content/working-with-video/playing-video-in-full-screen-mode",title:"Playing video in full-screen mode",description:"Flash Player and AIR allow you to create a full-screen application for your",source:"@site/docs/development/rich-media-content/working-with-video/playing-video-in-full-screen-mode.md",sourceDirName:"development/rich-media-content/working-with-video",slug:"/development/rich-media-content/working-with-video/playing-video-in-full-screen-mode",permalink:"/docs/development/rich-media-content/working-with-video/playing-video-in-full-screen-mode",draft:!1,editUrl:"https://github.com/airsdk/airsdk.dev/edit/main/docs/development/rich-media-content/working-with-video/playing-video-in-full-screen-mode.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"mainSidebar",previous:{title:"Controlling video playback",permalink:"/docs/development/rich-media-content/working-with-video/controlling-video-playback"},next:{title:"Streaming video files",permalink:"/docs/development/rich-media-content/working-with-video/streaming-video-files"}},c={},s=[{value:"Enabling full-screen mode for Flash Player in a browser",id:"enabling-full-screen-mode-for-flash-player-in-a-browser",level:4},{value:"Initiating full-screen mode",id:"initiating-full-screen-mode",level:4},{value:"Leaving full-screen mode",id:"leaving-full-screen-mode",level:4},{value:"Full-screen hardware acceleration",id:"full-screen-hardware-acceleration",level:4}],d={toc:s},p="wrapper";function u(e){let{components:n,...t}=e;return(0,o.kt)(p,(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"playing-video-in-full-screen-mode"},"Playing video in full-screen mode"),(0,o.kt)("p",null,"Flash Player and AIR allow you to create a full-screen application for your\nvideo playback, and support scaling video to full screen."),(0,o.kt)("p",null,"For AIR content running in full-screen mode on the desktop, the system screen\nsaver and power-saving options are disabled during play until either the video\ninput stops or the user exits full-screen mode."),(0,o.kt)("p",null,"For full details on using full-screen mode, see\n",(0,o.kt)("a",{parentName:"p",href:"/docs/development/display/display-programming/working-with-display-objects/setting-stage-properties#working-with-full-screen-mode"},"Working with full-screen mode"),"."),(0,o.kt)("h4",{id:"enabling-full-screen-mode-for-flash-player-in-a-browser"},"Enabling full-screen mode for Flash Player in a browser"),(0,o.kt)("p",null,"Before you can implement full-screen mode for Flash Player in a browser, enable\nit through the Publish template for your application. Templates that allow full\nscreen include ",(0,o.kt)("inlineCode",{parentName:"p"},"<object>")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"<embed>")," tags that contain an ",(0,o.kt)("inlineCode",{parentName:"p"},"allowFullScreen"),"\nparameter. The following example shows the ",(0,o.kt)("inlineCode",{parentName:"p"},"allowFullScreen")," parameter in an\n",(0,o.kt)("inlineCode",{parentName:"p"},"<embed>")," tag."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"\n    id="fullScreen" width="100%" height="100%"\n    codebase="http://fpdownload.macromedia.com/get/flashplayer/current/swflash.cab">\n    ...\n    <param name="allowFullScreen" value="true" />\n    <embed src="fullScreen.swf" allowFullScreen="true" quality="high" bgcolor="#869ca7"\n        width="100%" height="100%" name="fullScreen" align="middle"\n        play="true"\n        loop="false"\n        quality="high"\n        allowScriptAccess="sameDomain"\n        type="application/x-shockwave-flash"\n        pluginspage="https://www.adobe.com/go/getflashplayer">\n    </embed>\n    ...\n</object>\n')),(0,o.kt)("p",null,"In Flash, select File -",">"," Publish Settings and in the Publish Settings dialog\nbox, on the HTML tab, select the Flash Only - Allow Full Screen template."),(0,o.kt)("p",null,"In Flex, ensure that the HTML template includes ",(0,o.kt)("inlineCode",{parentName:"p"},"<object>")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"<embed>")," tags\nthat support full screen."),(0,o.kt)("h4",{id:"initiating-full-screen-mode"},"Initiating full-screen mode"),(0,o.kt)("p",null,"For Flash Player content running in a browser, you initiate full-screen mode for\nvideo in response to either a mouse click or a keypress. For example, you can\ninitiate full-screen mode when the user clicks a button labeled Full Screen or\nselects a Full Screen command from a context menu. To respond to the user, add\nan event listener to the object on which the action occurs. The following code\nadds an event listener to a button that the user clicks to enter full-screen\nmode:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'var fullScreenButton:Button = new Button();\nfullScreenButton.label = "Full Screen";\naddChild(fullScreenButton);\nfullScreenButton.addEventListener(MouseEvent.CLICK, fullScreenButtonHandler);\n\nfunction fullScreenButtonHandler(event:MouseEvent)\n{\n    stage.displayState = StageDisplayState.FULL_SCREEN;\n}\n')),(0,o.kt)("p",null,"The code initiates full-screen mode by setting the ",(0,o.kt)("inlineCode",{parentName:"p"},"Stage.displayState")," property\nto ",(0,o.kt)("inlineCode",{parentName:"p"},"StageDisplayState.FULL_SCREEN"),". This code scales the entire stage to full\nscreen with the video scaling in proportion to the space it occupies on the\nstage."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"fullScreenSourceRect")," property allows you to specify a particular area of\nthe stage to scale to full screen. First, define the rectangle that you want to\nscale to full screen. Then assign it to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Stage.fullScreenSourceRect"),"\nproperty. This version of the ",(0,o.kt)("inlineCode",{parentName:"p"},"fullScreenButtonHandler()")," function adds two\nadditional lines of code that scale just the video to full screen."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"private function fullScreenButtonHandler(event:MouseEvent)\n{\n    var screenRectangle:Rectangle = new Rectangle(video.x, video.y, video.width, video.height);\n    stage.fullScreenSourceRect = screenRectangle;\n    stage.displayState = StageDisplayState.FULL_SCREEN;\n}\n")),(0,o.kt)("p",null,"Though this example invokes an event handler in response to a mouse click, the\ntechnique of going to full-screen mode is the same for both Flash Player and\nAIR. Define the rectangle that you want to scale and then set the\n",(0,o.kt)("inlineCode",{parentName:"p"},"Stage.displayState")," property. For more information, see the\n",(0,o.kt)("a",{parentName:"p",href:"https://airsdk.dev/reference/actionscript/3.0/index.html"},"ActionScript 3.0 Reference for the Adobe Flash Platform"),"."),(0,o.kt)("p",null,"The complete example, which follows, adds code that creates the connection and\nthe NetStream object for the video and begins to play it."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'package\n{\n    import flash.net.NetConnection;\n    import flash.net.NetStream;\n    import flash.media.Video;\n    import flash.display.StageDisplayState;\n    import fl.controls.Button;\n    import flash.display.Sprite;\n    import flash.events.MouseEvent;\n    import flash.events.FullScreenEvent;\n    import flash.geom.Rectangle;\n\n    public class FullScreenVideoExample extends Sprite\n    {\n        var fullScreenButton:Button = new Button();\n        var video:Video = new Video();\n\n        public function FullScreenVideoExample()\n        {\n            var videoConnection:NetConnection = new NetConnection();\n            videoConnection.connect(null);\n\n            var videoStream:NetStream = new NetStream(videoConnection);\n            videoStream.client = this;\n\n            addChild(video);\n\n            video.attachNetStream(videoStream);\n\n            videoStream.play("http://www.helpexamples.com/flash/video/water.flv");\n\n            fullScreenButton.x = 100;\n            fullScreenButton.y = 270;\n            fullScreenButton.label = "Full Screen";\n            addChild(fullScreenButton);\n            fullScreenButton.addEventListener(MouseEvent.CLICK, fullScreenButtonHandler);\n        }\n\n        private function fullScreenButtonHandler(event:MouseEvent)\n        {\n            var screenRectangle:Rectangle = new Rectangle(video.x, video.y, video.width, video.height);\n            stage.fullScreenSourceRect = screenRectangle;\n            stage.displayState = StageDisplayState.FULL_SCREEN;\n        }\n\n        public function onMetaData(infoObject:Object):void\n        {\n            // stub for callback function\n        }\n    }\n}\n')),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"onMetaData()")," function is a callback function for handling video metadata,\nif any exists. A callback function is a function that the runtime calls in\nresponse to some type of occurrence or event. In this example, the\n",(0,o.kt)("inlineCode",{parentName:"p"},"onMetaData()")," function is a stub that satisfies the requirement to provide the\nfunction. For more information, see\n",(0,o.kt)("a",{parentName:"p",href:"/docs/development/rich-media-content/working-with-video/writing-callback-methods-for-metadata-and-cue-points"},"Writing callback methods for metadata and cue points")),(0,o.kt)("h4",{id:"leaving-full-screen-mode"},"Leaving full-screen mode"),(0,o.kt)("p",null,"A user can leave full-screen mode by entering one of the keyboard shortcuts,\nsuch as the Escape key. You can end full-screen mode in ActionScript by setting\nthe ",(0,o.kt)("inlineCode",{parentName:"p"},"Stage.displayState")," property to ",(0,o.kt)("inlineCode",{parentName:"p"},"StageDisplayState.NORMAL"),". The code in the\nfollowing example ends full-screen mode when the NetStream.Play.Stop ",(0,o.kt)("inlineCode",{parentName:"p"},"netStatus"),"\nevent occurs."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'videoStream.addEventListener(NetStatusEvent.NET_STATUS, netStatusHandler);\n\nprivate function netStatusHandler(event:NetStatusEvent)\n{\n    if(event.info.code == "NetStream.Play.Stop")\n        stage.displayState = StageDisplayState.NORMAL;\n}\n')),(0,o.kt)("h4",{id:"full-screen-hardware-acceleration"},"Full-screen hardware acceleration"),(0,o.kt)("p",null,"When you rescale a rectangular area of the stage to full-screen mode, Flash\nPlayer or AIR uses hardware acceleration, if it's available and enabled. The\nruntime uses the video adapter on the computer to speed up scaling of the video,\nor a portion of the stage, to full-screen size. Under these circumstances, Flash\nPlayer applications can often profit by switching to the StageVideo class from\nthe Video class (or Camera class; Flash Player 11.4/AIR 3.4 and higher)."),(0,o.kt)("p",null,"For more information on hardware acceleration in full-screen mode, see\n",(0,o.kt)("a",{parentName:"p",href:"/docs/development/display/display-programming/working-with-display-objects/setting-stage-properties#working-with-full-screen-mode"},"Working with full-screen mode"),".\nFor more information on StageVideo, see\n",(0,o.kt)("a",{parentName:"p",href:"/docs/development/rich-media-content/working-with-video/using-the-stagevideo-class"},"Using the StageVideo class for hardware accelerated presentation"),"."))}u.isMDXComponent=!0}}]);