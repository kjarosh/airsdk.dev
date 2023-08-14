"use strict";(self.webpackChunkairsdk_dev=self.webpackChunkairsdk_dev||[]).push([[92597],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},22717:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const i={},o="Avoiding security-related JavaScript errors",l={unversionedId:"development/html-content-in-air/programming-html-and-javascript-in-air/avoiding-security-related-javascript-errors",id:"development/html-content-in-air/programming-html-and-javascript-in-air/avoiding-security-related-javascript-errors",title:"Avoiding security-related JavaScript errors",description:"If you call code that is restricted from use in a sandbox due to these security",source:"@site/docs/development/html-content-in-air/programming-html-and-javascript-in-air/avoiding-security-related-javascript-errors.md",sourceDirName:"development/html-content-in-air/programming-html-and-javascript-in-air",slug:"/development/html-content-in-air/programming-html-and-javascript-in-air/avoiding-security-related-javascript-errors",permalink:"/docs/development/html-content-in-air/programming-html-and-javascript-in-air/avoiding-security-related-javascript-errors",draft:!1,editUrl:"https://github.com/airsdk/airsdk.dev/edit/main/docs/development/html-content-in-air/programming-html-and-javascript-in-air/avoiding-security-related-javascript-errors.md",tags:[],version:"current",frontMatter:{},sidebar:"mainSidebar",previous:{title:"Accessing HTML DOM and JavaScript objects from ActionScript",permalink:"/docs/development/html-content-in-air/programming-html-and-javascript-in-air/accessing-html-dom-and-javascript-objects-from-actionscript"},next:{title:"Converting Date and RegExp objects",permalink:"/docs/development/html-content-in-air/programming-html-and-javascript-in-air/converting-date-and-regexp-objects"}},s={},c=[{value:"Causes of security-related JavaScript errors",id:"causes-of-security-related-javascript-errors",level:2},{value:"Mapping application content to a different sandbox",id:"mapping-application-content-to-a-different-sandbox",level:2},{value:"eval() function",id:"eval-function",level:2},{value:"Assigning properties to an object",id:"assigning-properties-to-an-object",level:2},{value:"Creating a function with variables available in context",id:"creating-a-function-with-variables-available-in-context",level:2},{value:"Creating an object using the name of the class as a string parameter",id:"creating-an-object-using-the-name-of-the-class-as-a-string-parameter",level:2},{value:"setTimeout() and setInterval()",id:"settimeout-and-setinterval",level:2},{value:"Function constructor",id:"function-constructor",level:2},{value:"javascript: URLs",id:"javascript-urls",level:2},{value:"Event callbacks assigned through onevent attributes in innerHTML and outerHTML statements",id:"event-callbacks-assigned-through-onevent-attributes-in-innerhtml-and-outerhtml-statements",level:2},{value:"Loading JavaScript files from outside the application installation directory",id:"loading-javascript-files-from-outside-the-application-installation-directory",level:2},{value:"document.write() and document.writeln()",id:"documentwrite-and-documentwriteln",level:2},{value:"Synchronous XMLHttpRequests before the load event or during a load event handler",id:"synchronous-xmlhttprequests-before-the-load-event-or-during-a-load-event-handler",level:2},{value:"Dynamically created script elements",id:"dynamically-created-script-elements",level:2}],p={toc:c},d="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"avoiding-security-related-javascript-errors"},"Avoiding security-related JavaScript errors"),(0,r.kt)("p",null,'If you call code that is restricted from use in a sandbox due to these security\nrestrictions, the runtime dispatches a JavaScript error: "Adobe AIR runtime\nsecurity violation for JavaScript code in the application security sandbox." To\navoid this error, follow these coding practices.'),(0,r.kt)("h2",{id:"causes-of-security-related-javascript-errors"},"Causes of security-related JavaScript errors"),(0,r.kt)("p",null,"Code executing in the application sandbox is restricted from most operations\nthat involve evaluating and executing strings once the document ",(0,r.kt)("inlineCode",{parentName:"p"},"load")," event has\nfired and any ",(0,r.kt)("inlineCode",{parentName:"p"},"load")," event handlers have exited. Attempting to use the following\ntypes of JavaScript statements that evaluate and execute potentially insecure\nstrings generates JavaScript errors:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"#eval-function"},"eval() function"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"#settimeout-and-setinterval"},"setTimeout() and setInterval()"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"#function-constructor"},"Function constructor")),(0,r.kt)("p",{parentName:"li"},"In addition, the following types of JavaScript statements fail without\ngenerating an unsafe JavaScript error:")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"#javascript-urls"},"javascript: URLs"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"#event-callbacks-assigned-through-onevent-attributes-in-innerhtml-and-outerhtml-statements"},"Event callbacks assigned through onevent attributes in innerHTML and outerHTML statements"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"#loading-javascript-files-from-outside-the-application-installation-directory"},"Loading JavaScript files from outside the application installation directory"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"#documentwrite-and-documentwriteln"},"document.write() and document.writeln()"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"#synchronous-xmlhttprequests-before-the-load-event-or-during-a-load-event-handler"},"Synchronous XMLHttpRequests before the load event or during a load event handler"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"#dynamically-created-script-elements"},"Dynamically created script elements")),(0,r.kt)("p",{parentName:"li"},"Note: In some restricted cases, evaluation of strings is permitted. See\n",(0,r.kt)("a",{parentName:"p",href:"/docs/development/security/air-security/html-security-in-adobe-air#code-restrictions-for-content-in-different-sandboxes"},"Code restrictions for content in different sandboxes"),"\nfor more information."),(0,r.kt)("p",{parentName:"li"},"Adobe maintains a list of Ajax frameworks known to support the application\nsecurity sandbox, at ",(0,r.kt)("a",{parentName:"p",href:"https://web.archive.org/web/20110326163726/http://www.adobe.com/products/air/tools/ajax/community/"},"https://www.adobe.com/go/airappsandboxframeworks"),"."),(0,r.kt)("p",{parentName:"li"},"The following sections describe how to rewrite scripts to avoid these unsafe\nJavaScript errors and silent failures for code running in the application\nsandbox."))),(0,r.kt)("h2",{id:"mapping-application-content-to-a-different-sandbox"},"Mapping application content to a different sandbox"),(0,r.kt)("p",null,"In most cases, you can rewrite or restructure an application to avoid\nsecurity-related JavaScript errors. However, when rewriting or restructuring is\nnot possible, you can load the application content into a different sandbox\nusing the technique described in\n",(0,r.kt)("a",{parentName:"p",href:"/docs/development/html-content-in-air/programming-html-and-javascript-in-air/cross-scripting-content-in-different-security-sandboxes#loading-application-content-into-a-non-application-sandbox"},"Loading application content into a non-application sandbox"),".\nIf that content also must access AIR APIs, you can create a sandbox bridge, as\ndescribed in\n",(0,r.kt)("a",{parentName:"p",href:"/docs/development/html-content-in-air/programming-html-and-javascript-in-air/cross-scripting-content-in-different-security-sandboxes#setting-up-a-sandbox-bridge-interface"},"Setting up a sandbox bridge interface"),"."),(0,r.kt)("h2",{id:"eval-function"},"eval() function"),(0,r.kt)("p",null,"In the application sandbox, the ",(0,r.kt)("inlineCode",{parentName:"p"},"eval()")," function can only be used before the\npage ",(0,r.kt)("inlineCode",{parentName:"p"},"load")," event or during a ",(0,r.kt)("inlineCode",{parentName:"p"},"load")," event handler. After the page has loaded,\ncalls to ",(0,r.kt)("inlineCode",{parentName:"p"},"eval()")," will not execute code. However, in the following cases, you\ncan rewrite your code to avoid the use of ",(0,r.kt)("inlineCode",{parentName:"p"},"eval()"),"."),(0,r.kt)("h2",{id:"assigning-properties-to-an-object"},"Assigning properties to an object"),(0,r.kt)("p",null,"Instead of parsing a string to build the property accessor:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'eval("obj." + propName + " = " + val);\n')),(0,r.kt)("p",null,"access properties with bracket notation:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"obj[propName] = val;\n")),(0,r.kt)("h2",{id:"creating-a-function-with-variables-available-in-context"},"Creating a function with variables available in context"),(0,r.kt)("p",null,"Replace statements such as the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'function compile(var1, var2){\n    eval("var fn = function(){ this." + var1 + "(var2) }");\n    return fn;\n}\n')),(0,r.kt)("p",null,"with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"function compile(var1, var2) {\n    var self = this;\n    return function(){ self[var1](var2) };\n}\n")),(0,r.kt)("h2",{id:"creating-an-object-using-the-name-of-the-class-as-a-string-parameter"},"Creating an object using the name of the class as a string parameter"),(0,r.kt)("p",null,"Consider a hypothetical JavaScript class defined with the following code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"var CustomClass =\n{\n    Utils:\n    {\n        Parser: function(){ alert('constructor') }\n    },\n    Data:\n    {\n\n    }\n};\nvar constructorClassName = \"CustomClass.Utils.Parser\";\n")),(0,r.kt)("p",null,"The simplest way to create a instance would be to use ",(0,r.kt)("inlineCode",{parentName:"p"},"eval()"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"var myObj;\neval('myObj=new ' + constructorClassName +'()')\n")),(0,r.kt)("p",null,"However, you could avoid the call to ",(0,r.kt)("inlineCode",{parentName:"p"},"eval()")," by parsing each component of the\nclass name and building the new object using bracket notation:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"function getter(str)\n{\n    var obj = window;\n    var names = str.split('.');\n    for(var i=0;i<names.length;i++) {\n        if(typeof obj[names[i]]=='undefined') {\n            var undefstring = names[0];\n            for(var j=1;j<=i;j++)\n                undefstring+=\".\"+names[j];\n            throw new Error(undefstring+\" is undefined\");\n        }\n        obj = obj[names[i]];\n    }\n    return obj;\n}\n")),(0,r.kt)("p",null,"To create the instance, use:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"try {\nvar Parser = getter(constructorClassName);\nvar a = new Parser();\n} catch(e) {\n    alert(e);\n}\n")),(0,r.kt)("h2",{id:"settimeout-and-setinterval"},"setTimeout() and setInterval()"),(0,r.kt)("p",null,"Replace the string passed as the handler function with a function reference or\nobject. For example, replace a statement such as:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"setTimeout(\"alert('Timeout')\", 100);\n")),(0,r.kt)("p",null,"with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"setTimeout(function(){alert('Timeout')}, 100);\n")),(0,r.kt)("p",null,"Or, when the function requires the ",(0,r.kt)("inlineCode",{parentName:"p"},"this")," object to be set by the caller,\nreplace a statement such as:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'this.appTimer = setInterval("obj.customFunction();", 100);\n')),(0,r.kt)("p",null,"with the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"var _self = this;\nthis.appTimer = setInterval(function(){obj.customFunction.apply(_self);}, 100);\n")),(0,r.kt)("h2",{id:"function-constructor"},"Function constructor"),(0,r.kt)("p",null,"Calls to ",(0,r.kt)("inlineCode",{parentName:"p"},"new Function(param, body)")," can be replaced with an inline function\ndeclaration or used only before the page ",(0,r.kt)("inlineCode",{parentName:"p"},"load")," event has been handled."),(0,r.kt)("h2",{id:"javascript-urls"},"javascript: URLs"),(0,r.kt)("p",null,"The code defined in a link using the javascript: URL scheme is ignored in the\napplication sandbox. No unsafe JavaScript error is generated. You can replace\nlinks using javascript: URLs, such as:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'<a href="javascript:code()">Click Me</a>\n')),(0,r.kt)("p",null,"with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'<a href="#" onclick="code()">Click Me</a>\n')),(0,r.kt)("h2",{id:"event-callbacks-assigned-through-onevent-attributes-in-innerhtml-and-outerhtml-statements"},"Event callbacks assigned through onevent attributes in innerHTML and outerHTML statements"),(0,r.kt)("p",null,"When you use innerHTML or outerHTML to add elements to the DOM of a document,\nany event callbacks assigned within the statement, such as ",(0,r.kt)("inlineCode",{parentName:"p"},"onclick")," or\n",(0,r.kt)("inlineCode",{parentName:"p"},"onmouseover"),", are ignored. No security error is generated. Instead, you can\nassign an ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," attribute to the new elements and set the event handler callback\nfunctions using the ",(0,r.kt)("inlineCode",{parentName:"p"},"addEventListener()")," method."),(0,r.kt)("p",null,"For example, given a target element in a document, such as:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'<div id="container"></div>\n')),(0,r.kt)("p",null,"Replace statements such as:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"document.getElementById('container').innerHTML =\n    '<a href=\"#\" onclick=\"code()\">Click Me.</a>';\n")),(0,r.kt)("p",null,"with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"document.getElementById('container').innerHTML = '<a href=\"#\" id=\"smith\">Click Me.</a>';\ndocument.getElementById('smith').addEventListener(\"click\", function() { code(); });\n")),(0,r.kt)("h2",{id:"loading-javascript-files-from-outside-the-application-installation-directory"},"Loading JavaScript files from outside the application installation directory"),(0,r.kt)("p",null,"Loading script files from outside the application sandbox is not permitted. No\nsecurity error is generated. All script files that run in the application\nsandbox must be installed in the application directory. To use external scripts\nin a page, you must map the page to a different sandbox. See\n",(0,r.kt)("a",{parentName:"p",href:"/docs/development/html-content-in-air/programming-html-and-javascript-in-air/cross-scripting-content-in-different-security-sandboxes#loading-application-content-into-a-non-application-sandbox"},"Loading application content into a non-application sandbox"),"."),(0,r.kt)("h2",{id:"documentwrite-and-documentwriteln"},"document.write() and document.writeln()"),(0,r.kt)("p",null,"Calls to ",(0,r.kt)("inlineCode",{parentName:"p"},"document.write()")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"document.writeln()")," are ignored after the page\n",(0,r.kt)("inlineCode",{parentName:"p"},"load")," event has been handled. No security error is generated. As an\nalternative, you can load a new file, or replace the body of the document using\nDOM manipulation techniques."),(0,r.kt)("h2",{id:"synchronous-xmlhttprequests-before-the-load-event-or-during-a-load-event-handler"},"Synchronous XMLHttpRequests before the load event or during a load event handler"),(0,r.kt)("p",null,"Synchronous XMLHttpRequests initiated before the page ",(0,r.kt)("inlineCode",{parentName:"p"},"load")," event or during a\n",(0,r.kt)("inlineCode",{parentName:"p"},"load")," event handler do not return any content. Asynchronous XMLHttpRequests can\nbe initiated, but do not return until after the ",(0,r.kt)("inlineCode",{parentName:"p"},"load")," event. After the ",(0,r.kt)("inlineCode",{parentName:"p"},"load"),"\nevent has been handled, synchronous XMLHttpRequests behave normally."),(0,r.kt)("h2",{id:"dynamically-created-script-elements"},"Dynamically created script elements"),(0,r.kt)("p",null,"Dynamically created script elements, such as when created with innerHTML or\n",(0,r.kt)("inlineCode",{parentName:"p"},"document.createElement()")," method are ignored."))}u.isMDXComponent=!0}}]);