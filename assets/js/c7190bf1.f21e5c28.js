"use strict";(self.webpackChunkairsdk_dev=self.webpackChunkairsdk_dev||[]).push([[1656],{4137:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),g=p(n),m=r,h=g["".concat(c,".").concat(m)]||g[m]||d[m]||i;return n?a.createElement(h,o(o({ref:t},s),{},{components:n})):a.createElement(h,o({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=g;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},3555:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(7462),r=(n(7294),n(4137));const i={title:"Using Rectangle objects",sidebar_position:4},o=void 0,l={unversionedId:"development/display/working-with-geometry/using-rectangle-objects",id:"development/display/working-with-geometry/using-rectangle-objects",title:"Using Rectangle objects",description:"A Rectangle object defines a rectangular area. A Rectangle object has a position, defined by the x and y coordinates of its upper-left corner, a width property, and a height property. You can define these properties for a new Rectangle object by calling the Rectangle() constructor function, as follows:",source:"@site/docs/development/display/working-with-geometry/using-rectangle-objects.md",sourceDirName:"development/display/working-with-geometry",slug:"/development/display/working-with-geometry/using-rectangle-objects",permalink:"/docs/development/display/working-with-geometry/using-rectangle-objects",draft:!1,editUrl:"https://github.com/airsdk/airsdk.dev/edit/main/docs/development/display/working-with-geometry/using-rectangle-objects.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Using Rectangle objects",sidebar_position:4},sidebar:"mainSidebar",previous:{title:"Using Point objects",permalink:"/docs/development/display/working-with-geometry/using-point-objects"},next:{title:"Using Matrix objects",permalink:"/docs/development/display/working-with-geometry/using-matrix-objects"}},c={},p=[{value:"Resizing and repositioning Rectangle objects",id:"resizing-and-repositioning-rectangle-objects",level:2},{value:"Finding unions and intersections of Rectangle objects",id:"finding-unions-and-intersections-of-rectangle-objects",level:2},{value:"Other uses of Rectangle objects",id:"other-uses-of-rectangle-objects",level:2}],s={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"A Rectangle object defines a rectangular area. A Rectangle object has a position, defined by the x and y coordinates of its upper-left corner, a width property, and a height property. You can define these properties for a new Rectangle object by calling the Rectangle() constructor function, as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-actionscript"},"import flash.geom.Rectangle;\nvar rx:Number = 0;\nvar ry:Number = 0;\nvar rwidth:Number = 100;\nvar rheight:Number = 50;\nvar rect1:Rectangle = new Rectangle(rx, ry, rwidth, rheight);\n")),(0,r.kt)("h2",{id:"resizing-and-repositioning-rectangle-objects"},"Resizing and repositioning Rectangle objects"),(0,r.kt)("p",null,"There are a number of ways to resize and reposition Rectangle objects."),(0,r.kt)("p",null,"You can directly reposition the Rectangle object by changing its ",(0,r.kt)("inlineCode",{parentName:"p"},"x")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"y")," properties. This change has no effect on the width or height of the Rectangle object."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-actionscript"},"import flash.geom.Rectangle;\nvar x1:Number = 0;\nvar y1:Number = 0;\nvar width1:Number = 100;\nvar height1:Number = 50;\nvar rect1:Rectangle = new Rectangle(x1, y1, width1, height1);\ntrace(rect1) // (x=0, y=0, w=100, h=50)\nrect1.x = 20;\nrect1.y = 30;\ntrace(rect1); // (x=20, y=30, w=100, h=50)\n")),(0,r.kt)("p",null,"As the following code shows, when you change the ",(0,r.kt)("inlineCode",{parentName:"p"},"left")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"top")," property of a ",(0,r.kt)("inlineCode",{parentName:"p"},"Rectangle")," object, the rectangle is repositioned. The rectangle\u2019s x and y properties match the left and top properties, respectively. However, the position of the lower-left corner of the ",(0,r.kt)("inlineCode",{parentName:"p"},"Rectangle")," object does not change, so it is resized."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-actionscript"},"import flash.geom.Rectangle;\nvar x1:Number = 0;\nvar y1:Number = 0;\nvar width1:Number = 100;\nvar height1:Number = 50;\nvar rect1:Rectangle = new Rectangle(x1, y1, width1, height1);\ntrace(rect1) // (x=0, y=0, w=100, h=50)\nrect1.left = 20;\nrect1.top = 30;\ntrace(rect1); // (x=20, y=30, w=80, h=20)\n")),(0,r.kt)("p",null,"Similarly, as the following example shows, if you change the ",(0,r.kt)("inlineCode",{parentName:"p"},"bottom")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"right")," property of a Rectangle object, the position of its upper-left corner does not change. The rectangle is resized accordingly:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-actionscript"},"import flash.geom.Rectangle;\nvar x1:Number = 0;\nvar y1:Number = 0;\nvar width1:Number = 100;\nvar height1:Number = 50;\nvar rect1:Rectangle = new Rectangle(x1, y1, width1, height1);\ntrace(rect1) // (x=0, y=0, w=100, h=50)\nrect1.right = 60;\ntrect1.bottom = 20;\ntrace(rect1); // (x=0, y=0, w=60, h=20)\n")),(0,r.kt)("p",null,"You can also reposition a Rectangle object by using the ",(0,r.kt)("inlineCode",{parentName:"p"},"offset()")," method, as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-actionscript"},"import flash.geom.Rectangle;\nvar x1:Number = 0;\nvar y1:Number = 0;\nvar width1:Number = 100;\nvar height1:Number = 50;\nvar rect1:Rectangle = new Rectangle(x1, y1, width1, height1);\ntrace(rect1) // (x=0, y=0, w=100, h=50)\nrect1.offset(20, 30);\ntrace(rect1); // (x=20, y=30, w=100, h=50)\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"offsetPt()")," method works similarly, except that it takes a ",(0,r.kt)("inlineCode",{parentName:"p"},"Point")," object as its parameter, rather than ",(0,r.kt)("inlineCode",{parentName:"p"},"x")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"y")," offset values."),(0,r.kt)("p",null,"You can also resize a ",(0,r.kt)("inlineCode",{parentName:"p"},"Rectangle")," object by using the ",(0,r.kt)("inlineCode",{parentName:"p"},"inflate()")," method, which includes two parameters, ",(0,r.kt)("inlineCode",{parentName:"p"},"dx")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"dy")," . The ",(0,r.kt)("inlineCode",{parentName:"p"},"dx")," parameter represents the number of pixels that the left and right sides of the rectangle moves from the center. The ",(0,r.kt)("inlineCode",{parentName:"p"},"dy")," parameter represents the number of pixels that the top and bottom of the rectangle moves from the center:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-actionscript"},"import flash.geom.Rectangle;\nvar x1:Number = 0;\nvar y1:Number = 0;\nvar width1:Number = 100;\nvar height1:Number = 50;\nvar rect1:Rectangle = new Rectangle(x1, y1, width1, height1);\ntrace(rect1) // (x=0, y=0, w=100, h=50)\nrect1.inflate(6,4);\ntrace(rect1); // (x=-6, y=-4, w=112, h=58)\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"inflatePt() "),"method works similarly, except that it takes a ",(0,r.kt)("inlineCode",{parentName:"p"},"Point")," object as its parameter, rather than ",(0,r.kt)("inlineCode",{parentName:"p"},"dx")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"dy")," values."),(0,r.kt)("h2",{id:"finding-unions-and-intersections-of-rectangle-objects"},"Finding unions and intersections of Rectangle objects"),(0,r.kt)("p",null,"You use the ",(0,r.kt)("inlineCode",{parentName:"p"},"union()")," method to find the rectangular region formed by the boundaries of two rectangles:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-actionscript"},"import flash.display.*;\nimport flash.geom.Rectangle;\nvar rect1:Rectangle = new Rectangle(0, 0, 100, 100);\ntrace(rect1); // (x=0, y=0, w=100, h=100)\nvar rect2:Rectangle = new Rectangle(120, 60, 100, 100);\ntrace(rect2); // (x=120, y=60, w=100, h=100)\ntrace(rect1.union(rect2)); // (x=0, y=0, w=220, h=160)\n")),(0,r.kt)("p",null,"You use the ",(0,r.kt)("inlineCode",{parentName:"p"},"intersection()")," method to find the rectangular region formed by the overlapping region of two rectangles:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-actionscript"},"import flash.display.*;\nimport flash.geom.Rectangle;\nvar rect1:Rectangle = new Rectangle(0, 0, 100, 100);\ntrace(rect1); // (x=0, y=0, w=100, h=100)\nvar rect2:Rectangle = new Rectangle(80, 60, 100, 100);\ntrace(rect2); // (x=120, y=60, w=100, h=100)\ntrace(rect1.intersection(rect2)); // (x=80, y=60, w=20, h=40)\n")),(0,r.kt)("p",null,"You use the ",(0,r.kt)("inlineCode",{parentName:"p"},"intersects()")," method to find out whether two rectangles intersect. You can also use the ",(0,r.kt)("inlineCode",{parentName:"p"},"intersects()")," method to find out whether a display object is in a certain region of the Stage. For the following code example, assume the coordinate space of the display object container that contains the circle object is the same as that of the Stage. The example shows how to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"intersects()")," method to determine if a display object, circle , intersects specified regions of the ",(0,r.kt)("inlineCode",{parentName:"p"},"Stage"),", defined by the ",(0,r.kt)("inlineCode",{parentName:"p"},"target1")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"target2")," Rectangle objects:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-actionscript"},"import flash.display.*;\nimport flash.geom.Rectangle;\nvar circle:Shape = new Shape();\ncircle.graphics.lineStyle(2, 0xFF0000);\ncircle.graphics.drawCircle(250, 250, 100);\naddChild(circle);\nvar circleBounds:Rectangle = circle.getBounds(stage);\nvar target1:Rectangle = new Rectangle(0, 0, 100, 100);\ntrace(circleBounds.intersects(target1)); // false\nvar target2:Rectangle = new Rectangle(0, 0, 300, 300);\ntrace(circleBounds.intersects(target2)); // true\n")),(0,r.kt)("p",null,"Similarly, you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"intersects()")," method to find out whether the bounding rectangles of two display objects overlap. Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"getRect()")," method of the ",(0,r.kt)("inlineCode",{parentName:"p"},"DisplayObject")," class to include any additional space that the strokes of a display object add to a bounding region."),(0,r.kt)("h2",{id:"other-uses-of-rectangle-objects"},"Other uses of Rectangle objects"),(0,r.kt)("p",null,"Rectangle objects are used in the following methods and properties:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Class"),(0,r.kt)("th",{parentName:"tr",align:null},"Methods or properties"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BitmapData"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"applyFilter()"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"colorTransform()"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"copyChannel()"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"copyPixels()"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"draw()"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"drawWithQuality()"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"encode()"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"fillRect()"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"generateFilterRect()"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"getColorBoundsRect()"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"getPixels()"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"merge()"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"paletteMap()"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"pixelDissolve()"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"setPixels()"),", and ",(0,r.kt)("inlineCode",{parentName:"td"},"threshold()")),(0,r.kt)("td",{parentName:"tr",align:null},"Used as the type for some parameters to define a region of the BitmapData object.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DisplayObject"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"getBounds()"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"getRect()"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"scrollRect"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"scale9Grid")),(0,r.kt)("td",{parentName:"tr",align:null},"Used as the data type for the property or the data type returned.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PrintJob"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"addPage()")),(0,r.kt)("td",{parentName:"tr",align:null},"Used to define the ",(0,r.kt)("inlineCode",{parentName:"td"},"printArea")," parameter.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Sprite"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"startDrag()")),(0,r.kt)("td",{parentName:"tr",align:null},"Used to define the ",(0,r.kt)("inlineCode",{parentName:"td"},"bounds")," parameter.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TextField"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"getCharBoundaries()")),(0,r.kt)("td",{parentName:"tr",align:null},"Used as the return value type.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Transform"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pixelBounds")),(0,r.kt)("td",{parentName:"tr",align:null},"Used as the data type.")))))}d.isMDXComponent=!0}}]);