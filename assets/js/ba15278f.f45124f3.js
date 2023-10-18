"use strict";(self.webpackChunkairsdk_dev=self.webpackChunkairsdk_dev||[]).push([[36944],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),h=o,u=m["".concat(s,".").concat(h)]||m[h]||d[h]||i;return n?a.createElement(u,r(r({ref:t},p),{},{components:n})):a.createElement(u,r({ref:t},p))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:o,r[1]=l;for(var c=2;c<i;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},90472:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(87462),o=(n(67294),n(3905));const i={title:"ASDoc Comments"},r=void 0,l={unversionedId:"development/asdoc-comments",id:"development/asdoc-comments",title:"ASDoc Comments",description:"It is a standard programming practice to include comments in source code. This section covers the elements ASDoc recognizes in comments.",source:"@site/docs/development/asdoc-comments.md",sourceDirName:"development",slug:"/development/asdoc-comments",permalink:"/docs/development/asdoc-comments",draft:!1,editUrl:"https://github.com/airsdk/airsdk.dev/edit/main/docs/development/asdoc-comments.md",tags:[],version:"current",frontMatter:{title:"ASDoc Comments"},sidebar:"mainSidebar",previous:{title:"AGAL bytecode format",permalink:"/docs/development/appendixes/adobe-graphics-assembly-language-agal/agal-bytecode-format"},next:{title:"Coding Conventions",permalink:"/docs/development/coding-conventions"}},s={},c=[{value:"Writing an ASDoc comment",id:"writing-an-asdoc-comment",level:2},{value:"Placing ASDoc comments",id:"placing-asdoc-comments",level:2},{value:"Formatting ASDoc comments",id:"formatting-asdoc-comments",level:2},{value:"Supported Tags",id:"supported-tags",level:2},{value:"<code>@copy reference</code>",id:"copy-reference",level:3},{value:"<code>@default value</code>",id:"default-value",level:3},{value:"<code>@eventType</code>",id:"eventtype",level:3},{value:"<code>@example exampleText</code>",id:"example-exampletext",level:3},{value:"<code>@exampleText string</code>",id:"exampletext-string",level:3},{value:"<code>@inheritDoc</code>",id:"inheritdoc",level:3},{value:"<code>@internal text</code>",id:"internal-text",level:3},{value:"<code>@param paramName description</code>",id:"param-paramname-description",level:3},{value:"<code>@private</code>",id:"private",level:3},{value:"<code>@return description</code>",id:"return-description",level:3},{value:"<code>@see</code>",id:"see",level:3},{value:"<code>@throws package.class.className description</code>",id:"throws-packageclassclassname-description",level:3},{value:"Supported meta-data",id:"supported-meta-data",level:2},{value:"<code>[Event]</code>",id:"event",level:2},{value:"Using the <code>@private</code> tag",id:"using-the-private-tag",level:2},{value:"Excluding an inherited element",id:"excluding-an-inherited-element",level:2},{value:"Using HTML tags",id:"using-html-tags",level:2},{value:"Using special characters",id:"using-special-characters",level:2},{value:"Hiding text in ASDoc comments",id:"hiding-text-in-asdoc-comments",level:2},{value:"Rules for parsing ASDoc comments",id:"rules-for-parsing-asdoc-comments",level:2}],p={toc:c},m="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(m,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"It is a standard programming practice to include comments in source code. This section covers the elements ASDoc recognizes in comments.\nCurrently ASDoc comments support XML syntax."),(0,o.kt)("h2",{id:"writing-an-asdoc-comment"},"Writing an ASDoc comment"),(0,o.kt)("p",null,"An ASDoc comment consists of the text between the characters ",(0,o.kt)("inlineCode",{parentName:"p"},"/**")," that\nmark the beginning of the ASDoc comment, and the characters ",(0,o.kt)("inlineCode",{parentName:"p"},"*/"),"\nthat mark the end of it. The text in a comment can continue onto multiple lines."),(0,o.kt)("p",null,"Use the following format for an ASDoc comment:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-actionscript"},"/**\n * Main comment text.\n *\n * @tag Tag text.\n */\n")),(0,o.kt)("p",null,"As a best practice, prefix each line of an ASDoc comment with an asterisk (star) character,\nfollowed by a single white space to make the comment more readable in the ActionScript file,\nand to ensure correct parsing of comments. When the ASDoc tool parses a comment,\nthe leading asterisk and white space characters on each line are discarded; blanks and tabs preceding the initial asterisk are also discarded."),(0,o.kt)("p",null,"The ASDoc comment in the previous example creates a single-paragraph description in the output.\nTo add additional comment paragraphs, enclose each subsequent paragraph in HTML paragraph tags, ",(0,o.kt)("inlineCode",{parentName:"p"},"<p></p>"),".\nYou must close the ",(0,o.kt)("inlineCode",{parentName:"p"},"<p>")," tag, in accordance with XHTML standards, as the following example shows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-actionscript"},"/**\n * First paragraph of a multiparagraph description.\n *\n * <p>Second paragraph of the description.</p>\n */\n")),(0,o.kt)("h2",{id:"placing-asdoc-comments"},"Placing ASDoc comments"),(0,o.kt)("p",null,"Place an ASDoc comment immediately before the declaration for a class, interface, constructor, method, property, or metadata tag that you want to document, as the following example shows for the ",(0,o.kt)("inlineCode",{parentName:"p"},"myMethod()")," method:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-actionscript"},"/**\n * This is the typical format of a simple\n * multiline (single paragraph) main description\n * for the myMethod() method, which is declared in\n * the ActionScript code below.\n * Notice the leading asterisks and single white space\n * following each asterisk.\n */\npublic function myMethod(param1:String, param2:Number):Boolean\n{\n}\n")),(0,o.kt)("p",null,"The ASDoc tool ignores comments placed in the body of a method and recognizes only one comment per ActionScript statement."),(0,o.kt)("p",null,"A common mistake is to put an import statement between the ASDoc comment for a class and the class declaration.\nBecause an ASDoc comment is associated with the next ActionScript statement in the file after the comment, this example associates the comment with the import statement, not the class declaration:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-actionscript",metastring:'title="Invalid"',title:'"Invalid"'},"/**\n * This is the class comment for the class MyClass.\n */\nimport flash.display.*; // MISTAKE - Do not to put import statement here.\nclass MyClass\n{\n}\n")),(0,o.kt)("h2",{id:"formatting-asdoc-comments"},"Formatting ASDoc comments"),(0,o.kt)("p",null,"The main body of an ASDoc comment begins immediately after the starting characters, ",(0,o.kt)("inlineCode",{parentName:"p"},"/**"),", and continues until the tag section, as the following example shows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-actionscript"},"/**\n * Main comment text continues until the first @ tag.\n *\n * @tag Tag text.\n */\n")),(0,o.kt)("p",null,"The first sentence of the main description of the ASDoc comment should contain a concise\nbut complete description of the declared entity.\nThe first sentence ends at the first period that is followed by a space, tab, or line terminator."),(0,o.kt)("p",null,"ASDoc uses the first sentence to populate the summary table at the top of the HTML page for the class.\nEach type of class element (method, property, event, effect, and style) has a separate summary table in the ASDoc output."),(0,o.kt)("p",null,"The tag section begins with the first ASDoc tag in the comment, which is defined by the first ",(0,o.kt)("inlineCode",{parentName:"p"},"@")," character that begins a line,\nignoring leading asterisks, white space, and the leading separator characters, ",(0,o.kt)("inlineCode",{parentName:"p"},"/**"),".\nThe main description cannot continue after the tag section begins."),(0,o.kt)("p",null,"The text following an ASDoc tag can span multiple lines. You can have any number of tags, where some tags can be repeated, such as the ",(0,o.kt)("inlineCode",{parentName:"p"},"@param")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"@see")," tags, while others cannot."),(0,o.kt)("p",null,"The following example shows an ASDoc comment that includes a main description and a tag section. Notice the use of white space and leading asterisks to make the comment more readable:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-actionscript"},"/**\n* Typical format of a simple multiline comment.\n* This text describes the myMethod() method, which is declared below.\n*\n* @param param1 Describe param1 here.\n* @param param2 Describe param2 here.\n*\n* @return Describe return value here.\n*\n* @see someOtherMethod\n*/\npublic function myMethod(param1:String, param2:Number):Boolean\n{\n}\n")),(0,o.kt)("h2",{id:"supported-tags"},"Supported Tags"),(0,o.kt)("h3",{id:"copy-reference"},(0,o.kt)("inlineCode",{parentName:"h3"},"@copy reference")),(0,o.kt)("p",null,"Copies an ASDoc comment from the referenced location. The main description, ",(0,o.kt)("inlineCode",{parentName:"p"},"@param"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"@return")," content is copied; other tags are not copied."),(0,o.kt)("p",null,"You typically use the ",(0,o.kt)("inlineCode",{parentName:"p"},"@copy")," tag to copy information from a source class or interface not in the inheritance list of the destination class. If the source class or interface is in the inheritance list, use the ",(0,o.kt)("inlineCode",{parentName:"p"},"@inheritDoc")," tag instead."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-actionscript",metastring:'title="Example"',title:'"Example"'},"@copy #stop\n\n@copy MovieClip#stop\n")),(0,o.kt)("h3",{id:"default-value"},(0,o.kt)("inlineCode",{parentName:"h3"},"@default value")),(0,o.kt)("p",null,"Specifies the default value for a property, style, or effect. The ASDoc tool automatically creates a sentence in the following form when it encounters an ",(0,o.kt)("inlineCode",{parentName:"p"},"@default")," tag: "),(0,o.kt)("p",null,"The default value is ",(0,o.kt)("inlineCode",{parentName:"p"},"value"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"@default 0xCCCCCC\n")),(0,o.kt)("h3",{id:"eventtype"},(0,o.kt)("inlineCode",{parentName:"h3"},"@eventType")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"@eventType package.class.CONSTANT\n@eventType String\n")),(0,o.kt)("p",null,"Use the first form in a comment for an ",(0,o.kt)("inlineCode",{parentName:"p"},"[Event]")," metadata tag. It specifies the constant that defines the value of the ",(0,o.kt)("inlineCode",{parentName:"p"},"Event.type")," property of the event object associated with the event. The ASDoc tool copies the description of the event constant to the referencing class."),(0,o.kt)("p",null,"Use the second form in the comment for the constant definition. It specifies the name of the event associated with the constant. If the tag is omitted, ASDoc cannot copy the constant's comment to a referencing class."),(0,o.kt)("h3",{id:"example-exampletext"},(0,o.kt)("inlineCode",{parentName:"h3"},"@example exampleText")),(0,o.kt)("p",null,"Applies style properties, generates a heading, and puts the code example in the correct location. Enclose the code in ",(0,o.kt)("inlineCode",{parentName:"p"},'<listing version="3.0"></listing>')," tags. Whitespace formatting is preserved and the code is displayed in a gray, horizontally scrolling box. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-actionscript",metastring:'title="Example"',title:'"Example"'},'/**\n * @example The following code sets the volume level for your sound:\n *\n * <listing version="3.0">\n *     var mySound:Sound = new Sound;\n *     mySound.setVolume(VOL_HIGH);\n * </listing>\n */\n')),(0,o.kt)("h3",{id:"exampletext-string"},(0,o.kt)("inlineCode",{parentName:"h3"},"@exampleText string")),(0,o.kt)("p",null,"Use this tag in an ASDoc comment in an external example file that is referenced by the ",(0,o.kt)("inlineCode",{parentName:"p"},"@example")," tag. The ASDoc comment must precede the first line of the example, or follow the last line of the example."),(0,o.kt)("p",null,"External example files support one comment before and one comment after example code."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-actionscript",metastring:'title="Example"',title:'"Example"'},"/** \n * This text does not appear\n * in the output.\n * @exampleText But this does.\n */\n")),(0,o.kt)("h3",{id:"inheritdoc"},(0,o.kt)("inlineCode",{parentName:"h3"},"@inheritDoc")),(0,o.kt)("p",null,"Use this tag in the comment of an overridden method or property. It copies the comment from the superclass into the subclass, or from an interface implemented by the subclass."),(0,o.kt)("p",null,"The main ASDoc comment, ",(0,o.kt)("inlineCode",{parentName:"p"},"@param"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"@return")," content are copied; other tags are not. You can add content to the comment before the ",(0,o.kt)("inlineCode",{parentName:"p"},"@inheritDoc")," tag."),(0,o.kt)("p",null,"When you include this tag, ASDoc uses the following search order:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Interfaces implemented by the current class (in no particular order) and all of their base-interfaces."),(0,o.kt)("li",{parentName:"ol"},"Immediate superclass of current class."),(0,o.kt)("li",{parentName:"ol"},"Interfaces of immediate superclass and all of their base-interfaces."),(0,o.kt)("li",{parentName:"ol"},"Repeat steps 2 and 3 until the Object class is reached.")),(0,o.kt)("p",null,"You can also use the ",(0,o.kt)("inlineCode",{parentName:"p"},"@copy")," tag, but the ",(0,o.kt)("inlineCode",{parentName:"p"},"@copy")," tag is for copying information from a source class or interface that is not in the inheritance chain of the subclass."),(0,o.kt)("h3",{id:"internal-text"},(0,o.kt)("inlineCode",{parentName:"h3"},"@internal text")),(0,o.kt)("p",null,"Hides the text attached to the tag in the generated output. The hidden text can be used for internal comments. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-actionscript",metastring:'title="Example"',title:'"Example"'},"@internal Please do not publicize the undocumented use of the third parameter in this method.\n")),(0,o.kt)("h3",{id:"param-paramname-description"},(0,o.kt)("inlineCode",{parentName:"h3"},"@param paramName description")),(0,o.kt)("p",null,"Adds a descriptive comment to a method parameter. The paramName argument must match a parameter definition in the method signature. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-actionscript",metastring:'title="Example"',title:'"Example"'},"@param fileName The name of the file to load.\n")),(0,o.kt)("h3",{id:"private"},(0,o.kt)("inlineCode",{parentName:"h3"},"@private")),(0,o.kt)("p",null,"Exclude the element from the generated output."),(0,o.kt)("p",null,"To omit an entire class, put the ",(0,o.kt)("inlineCode",{parentName:"p"},"@private")," tag in the ASDoc comment for the class; to omit a single class element, put the ",(0,o.kt)("inlineCode",{parentName:"p"},"@private")," tag in the ASDoc comment for the element"),(0,o.kt)("h3",{id:"return-description"},(0,o.kt)("inlineCode",{parentName:"h3"},"@return description")),(0,o.kt)("p",null,"Adds a Returns section to a method description with the specified text. ASDoc automatically determines the data type of the return value. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-actionscript",metastring:'title="Example"',title:'"Example"'},"@return The translated message.\n")),(0,o.kt)("h3",{id:"see"},(0,o.kt)("inlineCode",{parentName:"h3"},"@see")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"@see reference [displayText]")," "),(0,o.kt)("p",null,"Adds a See Also heading with a link to a class element. For more information, see Using the ",(0,o.kt)("inlineCode",{parentName:"p"},"@see")," tag."),(0,o.kt)("p",null,"Do not include HTML formatting characters in the arguments to the ",(0,o.kt)("inlineCode",{parentName:"p"},"@see")," tag."),(0,o.kt)("h3",{id:"throws-packageclassclassname-description"},(0,o.kt)("inlineCode",{parentName:"h3"},"@throws package.class.className description")),(0,o.kt)("p",null,"Documents an error that a method can throw. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-actionscript",metastring:'title="Example"',title:'"Example"'},"@throws SecurityError Local untrusted SWFs may not communicate with the Internet.\n")),(0,o.kt)("h2",{id:"supported-meta-data"},"Supported meta-data"),(0,o.kt)("h2",{id:"event"},(0,o.kt)("inlineCode",{parentName:"h2"},"[Event]")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"[Event]")," meta-data specifies an event that is likely to be dispatched by an ",(0,o.kt)("inlineCode",{parentName:"p"},"EventDispatcher")," subclass. It may be preceded by an ASDoc comment that applies to it."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-actionscript"},'[Event(name="eventName", type="T")]\n')),(0,o.kt)("p",null,"When attaching this meta-data to a class definition, it must precede the ASDoc comments that apply to the class itself; for example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-actionscript",metastring:'title="Example"',title:'"Example"'},'import flash.events.EventDispatcher;\n\n[Event(name="received", type="flash.events.Event")]\n/**\n * Represents a WebSocket communication.\n */\npublic final class WebSocket extends EventDispatcher {}\n')),(0,o.kt)("h2",{id:"using-the-private-tag"},"Using the ",(0,o.kt)("inlineCode",{parentName:"h2"},"@private")," tag"),(0,o.kt)("p",null,"By default, the ASDoc tool generates output for all public and protected elements in an ActionScript class, even if you omit the ASDoc comment.\nTo make ASDoc ignore an element, insert an ASDoc comment that contains the ",(0,o.kt)("inlineCode",{parentName:"p"},"@private")," tag anywhere in the comment.\nThe ASDoc comment can contain additional text along with the ",(0,o.kt)("inlineCode",{parentName:"p"},"@private")," tag, which is also excluded from the output."),(0,o.kt)("p",null,"ASDoc also generates output for all public classes in the list of input classes.\nYou can specify to ignore an entire class by inserting an ASDoc comment that contains the ",(0,o.kt)("inlineCode",{parentName:"p"},"@private")," tag\nbefore the class definition. The ASDoc comment can contain additional text along with the ",(0,o.kt)("inlineCode",{parentName:"p"},"@private")," tag, which is also excluded from the output."),(0,o.kt)("h2",{id:"excluding-an-inherited-element"},"Excluding an inherited element"),(0,o.kt)("p",null,"By default, the ASDoc tool copies information and a link for all ActionScript elements inherited by a subclass from a superclass.\nIn some cases, a subclass may not support an inherited element.\nYou can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"Exclude")," metadata tag to cause ASDoc to omit the inherited element from the list of inherited elements."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Exclude")," metadata tag has the following syntax:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-actionscript"},'[Exclude(name="elementName", kind="property|method|event|style|effect")]\n')),(0,o.kt)("p",null,"For example, to exclude documentation on the click event in the MyButton subclass of the Button class, insert the following ",(0,o.kt)("inlineCode",{parentName:"p"},"Exclude")," metadata tag in the MyButton.as file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-actionscript"},'[Exclude(name="click", kind="event")]\n')),(0,o.kt)("h2",{id:"using-html-tags"},"Using HTML tags"),(0,o.kt)("p",null,"You must write the text of an ASDoc comment in XHTML-compliant HTML.\nYou can use selected HTML entities and HTML tags to define paragraphs, format text, create lists, and add anchors."),(0,o.kt)("p",null,"The following example comment contains HTML tags to format the output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-actionscript"},"/**\n * This is the typical format of a simple multiline comment\n * for the myMethod() method.\n *\n * <p>This is the second paragraph of the main description\n * of the `myMethod` method.\n * Notice that you do not use the paragraph tag in the\n * first paragraph of the description.</p>\n *\n * @param param1 Describe param1 here.\n * @param param2 Describe param2 here.\n *\n * @return A value of `true` means this;\n * `false` means that.\n *\n * @see someOtherMethod\n */\npublic function myMethod(param1:String, param2:Number):Boolean\n{\n}\n")),(0,o.kt)("h2",{id:"using-special-characters"},"Using special characters"),(0,o.kt)("p",null,"The ASDoc tool might fail if your source files contain non-UTF-8 characters such as curly quotes.\nIf it does fail, the error messages it displays should refer to a line number in the interim XML file that was created for that class.\nThat can help you track down the location of the special character."),(0,o.kt)("p",null,"ASDoc passes all HTML tags and tag entities in a comment to the output.\nTherefore, if you want to use special characters in a comment, you must enter them using HTML code equivalents.\nFor example, to use a less-than (",(0,o.kt)("inlineCode",{parentName:"p"},"<"),") or greater-than (",(0,o.kt)("inlineCode",{parentName:"p"},">"),") symbols in a comment, use ",(0,o.kt)("inlineCode",{parentName:"p"},"&lt;")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"&gt;"),". To use the at-sign (",(0,o.kt)("inlineCode",{parentName:"p"},"@"),") in a comment, use ",(0,o.kt)("inlineCode",{parentName:"p"},"&#64;"),".\nOtherwise, these characters will be interpreted as literal HTML characters in the output."),(0,o.kt)("p",null,"For a list of common HTML tags and their entity equivalents, see Summary of commonly used HTML elements."),(0,o.kt)("p",null,"Because asterisks are used to delimit comments, ASDoc does not support asterisks within a comment.\nTo use an asterisk in an ASDoc comment, you must use the double tilde (",(0,o.kt)("inlineCode",{parentName:"p"},"~~"),")."),(0,o.kt)("h2",{id:"hiding-text-in-asdoc-comments"},"Hiding text in ASDoc comments"),(0,o.kt)("p",null,"The ASDoc style sheet contains a class called ",(0,o.kt)("inlineCode",{parentName:"p"},"hide"),", which you use to hide text in an ASDoc comment by setting the class attribute to ",(0,o.kt)("inlineCode",{parentName:"p"},"hide"),".\nHidden text does not appear in the ASDoc HTML output, but does appear in the generated HTML file so you should not use it for confidential information.\nThe following example uses the ",(0,o.kt)("inlineCode",{parentName:"p"},"hide")," class:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-actionscript"},'/**\n * Dispatched when the user presses the Button control.\n * If the `autoRepeat` property is `true`,\n * this event is dispatched repeatedly as long as the button stays down.\n *\n * <span class="hide">This text is hidden.</span>\n * @eventType mx.events.FlexEvent.BUTTON_DOWN\n */\n')),(0,o.kt)("h2",{id:"rules-for-parsing-asdoc-comments"},"Rules for parsing ASDoc comments"),(0,o.kt)("p",null,"The following rules summarize how ASDoc processes an ActionScript file:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If an ASDoc comment precedes an ActionScript element, ASDoc copies the comment and code element to the output file."),(0,o.kt)("li",{parentName:"ul"},"If an ActionScript element is not preceded by an ASDoc comment, ASDoc copies the code element to the output file with an empty description."),(0,o.kt)("li",{parentName:"ul"},"If an ASDoc comment contains the ",(0,o.kt)("inlineCode",{parentName:"li"},"@private")," ASDoc tag, the associated ActionScript element and the ASDoc comment are ignored."),(0,o.kt)("li",{parentName:"ul"},"The comment text should always precede any ",(0,o.kt)("inlineCode",{parentName:"li"},"@")," tags, otherwise the comment text is interpreted as an argument to an ",(0,o.kt)("inlineCode",{parentName:"li"},"@")," tag.\nThe only exception is the ",(0,o.kt)("inlineCode",{parentName:"li"},"@private")," tag, which can appear anywhere in an ASDoc comment."),(0,o.kt)("li",{parentName:"ul"},"HTML tags, such as ",(0,o.kt)("inlineCode",{parentName:"li"},"<p></p>"),", and ",(0,o.kt)("inlineCode",{parentName:"li"},"<ul></ul>"),", in ASDoc comments are passed through to the output."),(0,o.kt)("li",{parentName:"ul"},"HTML tags must use XML style conventions, which means there must be a beginning and ending tag. For example, an ",(0,o.kt)("inlineCode",{parentName:"li"},"<li>")," tag must always be closed by a ",(0,o.kt)("inlineCode",{parentName:"li"},"</li>")," tag.")))}d.isMDXComponent=!0}}]);