"use strict";(self.webpackChunkairsdk_dev=self.webpackChunkairsdk_dev||[]).push([[16530],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=d(n),m=r,h=p["".concat(l,".").concat(m)]||p[m]||u[m]||s;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[p]="string"==typeof e?e:r,i[1]=o;for(var d=2;d<s;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},68005:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var a=n(87462),r=(n(67294),n(3905));const s={sidebar_position:7.2},i="Working with SQL statements",o={unversionedId:"development/files-and-data/working-with-local-sql-databases-in-air/working-with-sql-statements",id:"development/files-and-data/working-with-local-sql-databases-in-air/working-with-sql-statements",title:"Working with SQL statements",description:"An individual SQL statement (a query or command) is represented in the runtime",source:"@site/docs/development/files-and-data/working-with-local-sql-databases-in-air/working-with-sql-statements.md",sourceDirName:"development/files-and-data/working-with-local-sql-databases-in-air",slug:"/development/files-and-data/working-with-local-sql-databases-in-air/working-with-sql-statements",permalink:"/docs/development/files-and-data/working-with-local-sql-databases-in-air/working-with-sql-statements",draft:!1,editUrl:"https://github.com/airsdk/airsdk.dev/edit/main/docs/development/files-and-data/working-with-local-sql-databases-in-air/working-with-sql-statements.md",tags:[],version:"current",sidebarPosition:7.2,frontMatter:{sidebar_position:7.2},sidebar:"mainSidebar",previous:{title:"Connecting to a database",permalink:"/docs/development/files-and-data/working-with-local-sql-databases-in-air/connecting-to-a-database"},next:{title:"Using parameters in statements",permalink:"/docs/development/files-and-data/working-with-local-sql-databases-in-air/using-parameters-in-statements"}},l={},d=[{value:"Create a SQLStatement instance.",id:"create-a-sqlstatement-instance",level:4},{value:"Specify which database the query runs against.",id:"specify-which-database-the-query-runs-against",level:4},{value:"Specify the actual SQL statement.",id:"specify-the-actual-sql-statement",level:4},{value:"Define functions to handle the result of the execute operation (asynchronous execution mode only).",id:"define-functions-to-handle-the-result-of-the-execute-operation-asynchronous-execution-mode-only",level:4},{value:"If the statement text includes parameter definitions, assign values for those parameters.",id:"if-the-statement-text-includes-parameter-definitions-assign-values-for-those-parameters",level:4},{value:"Execute the SQL statement.",id:"execute-the-sql-statement",level:4}],c={toc:d},p="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"working-with-sql-statements"},"Working with SQL statements"),(0,r.kt)("p",null,"An individual SQL statement (a query or command) is represented in the runtime\nas a\n",(0,r.kt)("a",{parentName:"p",href:"https://airsdk.dev/reference/actionscript/3.0/flash/data/SQLStatement.html"},"SQLStatement"),"\nobject. Follow these steps to create and execute a SQL statement:"),(0,r.kt)("h4",{id:"create-a-sqlstatement-instance"},"Create a SQLStatement instance."),(0,r.kt)("p",null,"The SQLStatement object represents the SQL statement in your application."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"var selectData:SQLStatement = new SQLStatement();\n")),(0,r.kt)("h4",{id:"specify-which-database-the-query-runs-against"},"Specify which database the query runs against."),(0,r.kt)("p",null,"To do this, set the SQLStatement object's ",(0,r.kt)("inlineCode",{parentName:"p"},"sqlConnection")," property to the\n",(0,r.kt)("a",{parentName:"p",href:"https://airsdk.dev/reference/actionscript/3.0/flash/data/SQLConnection.html"},"SQLConnection"),"\ninstance that's connected with the desired database."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'// A SQLConnection named "conn" has been created previously\nselectData.sqlConnection = conn;\n')),(0,r.kt)("h4",{id:"specify-the-actual-sql-statement"},"Specify the actual SQL statement."),(0,r.kt)("p",null,"Create the statement text as a String and assign it to the SQLStatement\ninstance's ",(0,r.kt)("inlineCode",{parentName:"p"},"text")," property."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'selectData.text = "SELECT col1, col2 FROM my_table WHERE col1 = :param1";\n')),(0,r.kt)("h4",{id:"define-functions-to-handle-the-result-of-the-execute-operation-asynchronous-execution-mode-only"},"Define functions to handle the result of the execute operation (asynchronous execution mode only)."),(0,r.kt)("p",null,"Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"addEventListener()")," method to register functions as listeners for the\nSQLStatement instance's ",(0,r.kt)("inlineCode",{parentName:"p"},"result")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"error")," events."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"// using listener methods and addEventListener()\n\nselectData.addEventListener(SQLEvent.RESULT, resultHandler);\nselectData.addEventListener(SQLErrorEvent.ERROR, errorHandler);\n\nfunction resultHandler(event:SQLEvent):void\n{\n    // do something after the statement execution succeeds\n}\n\nfunction errorHandler(event:SQLErrorEvent):void\n{\n    // do something after the statement execution fails\n}\n")),(0,r.kt)("p",null,"Alternatively, you can specify listener methods using a\n",(0,r.kt)("a",{parentName:"p",href:"https://airsdk.dev/reference/actionscript/3.0/flash/net/Responder.html"},"Responder"),"\nobject. In that case you create the Responder instance and link the listener\nmethods to it."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"// using a Responder (flash.net.Responder)\n\nvar selectResponder = new Responder(onResult, onError);\n\nfunction onResult(result:SQLResult):void\n{\n    // do something after the statement execution succeeds\n}\n\nfunction onError(error:SQLError):void\n{\n    // do something after the statement execution fails\n}\n")),(0,r.kt)("h4",{id:"if-the-statement-text-includes-parameter-definitions-assign-values-for-those-parameters"},"If the statement text includes parameter definitions, assign values for those parameters."),(0,r.kt)("p",null,"To assign parameter values, use the SQLStatement instance's ",(0,r.kt)("inlineCode",{parentName:"p"},"parameters"),"\nassociative array property."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'selectData.parameters[":param1"] = 25;\n')),(0,r.kt)("h4",{id:"execute-the-sql-statement"},"Execute the SQL statement."),(0,r.kt)("p",null,"Call the SQLStatement instance's ",(0,r.kt)("inlineCode",{parentName:"p"},"execute()")," method."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"// using synchronous execution mode\n// or listener methods in asynchronous execution mode\nselectData.execute();\n")),(0,r.kt)("p",null,"Additionally, if you're using a Responder instead of event listeners in\nasynchronous execution mode, pass the Responder instance to the ",(0,r.kt)("inlineCode",{parentName:"p"},"execute()"),"\nmethod."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"// using a Responder in asynchronous execution mode\nselectData.execute(-1, selectResponder);\n")),(0,r.kt)("p",null,"For specific examples that demonstrate these steps, see the following topics:"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/development/files-and-data/working-with-local-sql-databases-in-air/retrieving-data-from-a-database"},"Retrieving data from a database")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/development/files-and-data/working-with-local-sql-databases-in-air/inserting-data"},"Inserting data")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/development/files-and-data/working-with-local-sql-databases-in-air/changing-or-deleting-data"},"Changing or deleting data")))}u.isMDXComponent=!0}}]);