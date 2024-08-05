"use strict";(self.webpackChunkairsdk_dev=self.webpackChunkairsdk_dev||[]).push([[50377],{3905:(e,a,t)=>{t.d(a,{Zo:()=>c,kt:()=>m});var n=t(67294);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,o=function(e,a){if(null==e)return{};var t,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),d=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},c=function(e){var a=d(e.components);return n.createElement(l.Provider,{value:a},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=d(t),u=o,m=p["".concat(l,".").concat(u)]||p[u]||h[u]||r;return t?n.createElement(m,s(s({ref:a},c),{},{components:t})):n.createElement(m,s({ref:a},c))}));function m(e,a){var t=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var r=t.length,s=new Array(r);s[0]=u;var i={};for(var l in a)hasOwnProperty.call(a,l)&&(i[l]=a[l]);i.originalType=e,i[p]="string"==typeof e?e:o,s[1]=i;for(var d=2;d<r;d++)s[d]=t[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},28503:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var n=t(87462),o=(t(67294),t(3905));const r={sidebar_position:1},s="About local SQL databases",i={unversionedId:"development/files-and-data/working-with-local-sql-databases-in-air/about-local-sql-databases",id:"development/files-and-data/working-with-local-sql-databases-in-air/about-local-sql-databases",title:"About local SQL databases",description:"For a quick explanation and code examples of using SQL databases, see the",source:"@site/docs/development/files-and-data/working-with-local-sql-databases-in-air/about-local-sql-databases.md",sourceDirName:"development/files-and-data/working-with-local-sql-databases-in-air",slug:"/development/files-and-data/working-with-local-sql-databases-in-air/about-local-sql-databases",permalink:"/docs/development/files-and-data/working-with-local-sql-databases-in-air/about-local-sql-databases",draft:!1,editUrl:"https://github.com/airsdk/airsdk.dev/edit/main/docs/development/files-and-data/working-with-local-sql-databases-in-air/about-local-sql-databases.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"mainSidebar",previous:{title:"Working with local SQL databases in AIR",permalink:"/docs/development/files-and-data/working-with-local-sql-databases-in-air/"},next:{title:"Creating and modifying a database",permalink:"/docs/development/files-and-data/working-with-local-sql-databases-in-air/creating-and-modifying-a-database"}},l={},d=[{value:"Uses for local SQL databases",id:"uses-for-local-sql-databases",level:2},{value:"About AIR databases and database files",id:"about-air-databases-and-database-files",level:2},{value:"About relational databases",id:"about-relational-databases",level:2},{value:"About SQL",id:"about-sql",level:2},{value:"About SQL database classes",id:"about-sql-database-classes",level:2},{value:"About synchronous and asynchronous execution modes",id:"about-synchronous-and-asynchronous-execution-modes",level:2}],c={toc:d},p="wrapper";function h(e){let{components:a,...t}=e;return(0,o.kt)(p,(0,n.Z)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"about-local-sql-databases"},"About local SQL databases"),(0,o.kt)("p",null,"For a quick explanation and code examples of using SQL databases, see the\nfollowing quick start articles on the Adobe Developer Connection:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://web.archive.org/web/20111126102614/http://www.adobe.com/devnet/air/flex/quickstart/articles/simple_sql_database.html"},"Working asynchronously with a local SQL database"),"\n(Flex)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://web.archive.org/web/20111126104857/http://www.adobe.com/devnet/air/flex/quickstart/articles/sync_simple_sql_database.html"},"Working synchronously with a local SQL database"),"\n(Flex)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://web.archive.org/web/20111126104912/http://www.adobe.com/devnet/air/flex/quickstart/articles/encrypted_database.html"},"Using an encrypted database"),"\n(Flex)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://web.archive.org/web/20111126104852/http://www.adobe.com/devnet/air/flash/quickstart/articles/simple_sql_database.html"},"Working asynchronously with a local SQL database"),"\n(Flash)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://web.archive.org/web/20111126104902/http://www.adobe.com/devnet/air/flash/quickstart/articles/sync_simple_sql_database.html"},"Working synchronously with a local SQL database"),"\n(Flash)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://web.archive.org/web/20111126104907/http://www.adobe.com/devnet/air/flash/quickstart/articles/encrypted_database_flash.html"},"Using an encrypted database"),"\n(Flash)"))),(0,o.kt)("p",null,"Adobe AIR includes a SQL-based relational database engine that runs within the\nruntime, with data stored locally in database files on the computer on which the\nAIR application runs (for example, on the computer's hard drive). Because the\ndatabase runs and data files are stored locally, a database can be used by an\nAIR application regardless of whether a network connection is available. Thus,\nthe runtime's local SQL database engine provides a convenient mechanism for\nstoring persistent, local application data, particularly if you have experience\nwith SQL and relational databases."),(0,o.kt)("h2",{id:"uses-for-local-sql-databases"},"Uses for local SQL databases"),(0,o.kt)("p",null,"The AIR local SQL database functionality can be used for any purpose for which\nyou might want to store application data on a user's local computer. Adobe AIR\nincludes several mechanisms for storing data locally, each of which has\ndifferent advantages. The following are some possible uses for a local SQL\ndatabase in your AIR application:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"For a data-oriented application (for example an address book), a database can\nbe used to store the main application data.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"For a document-oriented application, where users create documents to save and\npossibly share, each document could be saved as a database file, in a\nuser-designated location. (Note, however, that unless the database is\nencrypted any AIR application would be able to open the database file.\nEncryption is recommended for potentially sensitive documents.)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"For a network-aware application, a database can be used to store a local cache\nof application data, or to store data temporarily when a network connection\nisn't available. You could create a mechanism for synchronizing the local\ndatabase with the network data store.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"For any application, a database can be used to store individual users'\napplication settings, such as user options or application information like\nwindow size and position."))),(0,o.kt)("h2",{id:"about-air-databases-and-database-files"},"About AIR databases and database files"),(0,o.kt)("p",null,"An individual Adobe AIR local SQL database is stored as a single file in the\ncomputer's file system. The runtime includes the SQL database engine that\nmanages creation and structuring of database files and manipulation and\nretrieval of data from a database file. The runtime does not specify how or\nwhere database data is stored on the file system; rather, each database is\nstored completely within a single file. You specify the location in the file\nsystem where the database file is stored. A single AIR application can access\none or many separate databases (that is, separate database files). Because the\nruntime stores each database as a single file on the file system, you can locate\nyour database as needed by the design of your application and file access\nconstraints of the operating system. Each user can have a separate database file\nfor their specific data, or a database file can be accessed by all application\nusers on a single computer for shared data. Because the data is local to a\nsingle computer, data is not automatically shared among users on different\ncomputers. The local SQL database engine doesn't provide any capability to\nexecute SQL statements against a remote or server-based database."),(0,o.kt)("h2",{id:"about-relational-databases"},"About relational databases"),(0,o.kt)("p",null,'A relational database is a mechanism for storing (and retrieving) data on a\ncomputer. Data is organized into tables: rows represent records or items, and\ncolumns (sometimes called "fields") divide each record into individual values.\nFor example, an address book application could contain a "friends" table. Each\nrow in the table would represent a single friend stored in the database. The\ntable\'s columns would represent data such as first name, last name, birth date,\nand so forth. For each friend row in the table, the database stores a separate\nvalue for each column.'),(0,o.kt)("p",null,'Relational databases are designed to store complex data, where one item is\nassociated with or related to items of another type. In a relational database,\nany data that has a one-to-many relationship\u2014where a single record can be\nrelated to multiple records of a different type\u2014should be divided among\ndifferent tables. For example, suppose you want your address book application to\nstore multiple phone numbers for each friend; this is a one-to-many\nrelationship. The "friends" table would contain all the personal information for\neach friend. A separate "phone numbers" table would contain all the phone\nnumbers for all the friends.'),(0,o.kt)("p",null,'In addition to storing the data about friends and phone numbers, each table\nwould need a piece of data to keep track of the relationship between the two\ntables\u2014to match individual friend records with their phone numbers. This data is\nknown as a primary key\u2014a unique identifier that distinguishes each row in a\ntable from other rows in that table. The primary key can be a "natural key,"\nmeaning it\'s one of the items of data that naturally distinguishes each record\nin a table. In the "friends" table, if you knew that none of your friends share\na birth date, you could use the birth date column as the primary key (a natural\nkey) of the "friends" table. If there isn\'t a natural key, you would create a\nseparate primary key column such as a "friend id" \u2014an artificial value that the\napplication uses to distinguish between rows.'),(0,o.kt)("p",null,'Using a primary key, you can set up relationships between multiple tables. For\nexample, suppose the "friends" table has a column "friend id" that contains a\nunique number for each row (each friend). The related "phone numbers" table can\nbe structured with two columns: one with the "friend id" of the friend to whom\nthe phone number belongs, and one with the actual phone number. That way, no\nmatter how many phone numbers a single friend has, they can all be stored in the\n"phone numbers" table and can be linked to the related friend using the "friend\nid" primary key. When a primary key from one table is used in a related table to\nspecify the connection between the records, the value in the related table is\nknown as a foreign key. Unlike many databases, the AIR local database engine\ndoes not allow you to create foreign key constraints, which are constraints that\nautomatically check that an inserted or updated foreign key value has a\ncorresponding row in the primary key table. Nevertheless, foreign key\nrelationships are an important part of the structure of a relational database,\nand foreign keys should be used when creating relationships between tables in\nyour database.'),(0,o.kt)("h2",{id:"about-sql"},"About SQL"),(0,o.kt)("p",null,"Structured Query Language (SQL) is used with relational databases to manipulate\nand retrieve data. SQL is a descriptive language rather than a procedural\nlanguage. Instead of giving the computer instructions on how it should retrieve\ndata, a SQL statement describes the set of data you want. The database engine\ndetermines how to retrieve that data."),(0,o.kt)("p",null,"The SQL language has been standardized by the American National Standards\nInstitute (ANSI). The Adobe AIR local SQL database supports most of the SQL-92\nstandard."),(0,o.kt)("p",null,"For specific descriptions of the SQL language supported in Adobe AIR, see\n",(0,o.kt)("a",{parentName:"p",href:"/docs/development/appendixes/sql-support-in-local-databases/"},"SQL support in local databases"),"."),(0,o.kt)("h2",{id:"about-sql-database-classes"},"About SQL database classes"),(0,o.kt)("p",null,"To work with local SQL databases in ActionScript 3.0, you use instances of these\nclasses in the flash.data package:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Class"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://airsdk.dev/reference/actionscript/3.0/flash/data/SQLConnection.html"},"flash.data.SQLConnection")),(0,o.kt)("td",{parentName:"tr",align:null},"Provides the means to create and open databases (database files), as well as methods for performing database-level operations and for controlling database transactions.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://airsdk.dev/reference/actionscript/3.0/flash/data/SQLStatement.html"},"flash.data.SQLStatement")),(0,o.kt)("td",{parentName:"tr",align:null},"Represents a single SQL statement (a single query or command) that is executed on a database, including defining the statement text and setting parameter values.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://airsdk.dev/reference/actionscript/3.0/flash/data/SQLResult.html"},"flash.data.SQLResult")),(0,o.kt)("td",{parentName:"tr",align:null},"Provides a way to get information about or results from executing a statement, such as the result rows from a ",(0,o.kt)("inlineCode",{parentName:"td"},"SELECT")," statement, the number of rows affected by an ",(0,o.kt)("inlineCode",{parentName:"td"},"UPDATE")," or ",(0,o.kt)("inlineCode",{parentName:"td"},"DELETE")," statement, and so forth.")))),(0,o.kt)("p",null,"To obtain schema information describing the structure of a database, you use\nthese classes in the flash.data package:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Class"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://airsdk.dev/reference/actionscript/3.0/flash/data/SQLSchemaResult.html"},"flash.data.SQLSchemaResult")),(0,o.kt)("td",{parentName:"tr",align:null},"Serves as a container for database schema results generated by calling the ",(0,o.kt)("inlineCode",{parentName:"td"},"SQLConnection.loadSchema()")," method.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://airsdk.dev/reference/actionscript/3.0/flash/data/SQLTableSchema.html"},"flash.data.SQLTableSchema")),(0,o.kt)("td",{parentName:"tr",align:null},"Provides information describing a single table in a database.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://airsdk.dev/reference/actionscript/3.0/flash/data/SQLViewSchema.html"},"flash.data.SQLViewSchema")),(0,o.kt)("td",{parentName:"tr",align:null},"Provides information describing a single view in a database.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://airsdk.dev/reference/actionscript/3.0/flash/data/SQLIndexSchema.html"},"flash.data.SQLIndexSchema")),(0,o.kt)("td",{parentName:"tr",align:null},"Provides information describing a single column of a table or view in a database.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://airsdk.dev/reference/actionscript/3.0/flash/data/SQLTriggerSchema.html"},"flash.data.SQLTriggerSchema")),(0,o.kt)("td",{parentName:"tr",align:null},"Provides information describing a single trigger in a database.")))),(0,o.kt)("p",null,"Other classes in the flash.data package provide constants that are used with the\nSQLConnection class and the SQLColumnSchema class:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Class"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://airsdk.dev/reference/actionscript/3.0/flash/data/SQLMode.html"},"flash.data.SQLMode")),(0,o.kt)("td",{parentName:"tr",align:null},"Defines a set of constants representing the possible values for the ",(0,o.kt)("inlineCode",{parentName:"td"},"openMode")," parameter of the ",(0,o.kt)("inlineCode",{parentName:"td"},"SQLConnection.open()")," and ",(0,o.kt)("inlineCode",{parentName:"td"},"SQLConnection.openAsync()")," methods.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://airsdk.dev/reference/actionscript/3.0/flash/data/SQLColumnNameStyle.html"},"flash.data.SQLColumnNameStyle")),(0,o.kt)("td",{parentName:"tr",align:null},"Defines a set of constants representing the possible values for the ",(0,o.kt)("inlineCode",{parentName:"td"},"SQLConnection.columnNameStyle")," property.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://airsdk.dev/reference/actionscript/3.0/flash/data/SQLTransactionLockType.html"},"flash.data.SQLTransactionLockType")),(0,o.kt)("td",{parentName:"tr",align:null},"Defines a set of constants representing the possible values for the option parameter of the ",(0,o.kt)("inlineCode",{parentName:"td"},"SQLConnection.begin()")," method.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://airsdk.dev/reference/actionscript/3.0/flash/data/SQLCollationType.html"},"flash.data.SQLCollationType")),(0,o.kt)("td",{parentName:"tr",align:null},"Defines a set of constants representing the possible values for the ",(0,o.kt)("inlineCode",{parentName:"td"},"SQLColumnSchema.defaultCollationType")," property and the ",(0,o.kt)("inlineCode",{parentName:"td"},"defaultCollationType")," parameter of the ",(0,o.kt)("inlineCode",{parentName:"td"},"SQLColumnSchema()")," constructor.")))),(0,o.kt)("p",null,"In addition, the following classes in the flash.events package represent the\nevents (and supporting constants) that you use:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Class"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://airsdk.dev/reference/actionscript/3.0/flash/events/SQLEvent.html"},"flash.events.SQLEvent")),(0,o.kt)("td",{parentName:"tr",align:null},"Defines the events that a SQLConnection or SQLStatement instance dispatches when any of its operations execute successfully. Each operation has an associated event type constant defined in the SQLEvent class.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://airsdk.dev/reference/actionscript/3.0/flash/events/SQLErrorEvent.html"},"flash.events.SQLErrorEvent")),(0,o.kt)("td",{parentName:"tr",align:null},"Defines the event that a SQLConnection or SQLStatement instance dispatches when any of its operations results in an error.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://airsdk.dev/reference/actionscript/3.0/flash/events/SQLUpdateEvent.html"},"flash.events.SQLUpdateEvent")),(0,o.kt)("td",{parentName:"tr",align:null},"Defines the event that a SQLConnection instances dispatches when table data in one of its connected databases changes as a result of an ",(0,o.kt)("inlineCode",{parentName:"td"},"INSERT"),", ",(0,o.kt)("inlineCode",{parentName:"td"},"UPDATE"),", or ",(0,o.kt)("inlineCode",{parentName:"td"},"DELETE")," SQL statement being executed.")))),(0,o.kt)("p",null,"Finally, the following classes in the flash.errors package provide information\nabout database operation errors:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Class"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://airsdk.dev/reference/actionscript/3.0/flash/errors/SQLError.html"},"flash.errors.SQLError")),(0,o.kt)("td",{parentName:"tr",align:null},"Provides information about a database operation error, including the operation that was being attempted and the cause of the failure.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://airsdk.dev/reference/actionscript/3.0/flash/errors/SQLErrorOperation.html"},"flash.errors.SQLErrorOperation")),(0,o.kt)("td",{parentName:"tr",align:null},"Defines a set of constants representing the possible values for the SQLError class's ",(0,o.kt)("inlineCode",{parentName:"td"},"operation")," property, which indicates the database operation that resulted in an error.")))),(0,o.kt)("h2",{id:"about-synchronous-and-asynchronous-execution-modes"},"About synchronous and asynchronous execution modes"),(0,o.kt)("p",null,"When you're writing code to work with a local SQL database, you specify that\ndatabase operations execution in one of two execution modes: asynchronous or\nsynchronous execution mode. In general, the code examples show how to perform\neach operation in both ways, so that you can use the example that's most\nappropriate for your needs."),(0,o.kt)("p",null,"In asynchronous execution mode, you give the runtime an instruction and the\nruntime dispatches an event when your requested operation completes or fails.\nFirst you tell the database engine to perform an operation. The database engine\ndoes its work in the background while the application continues running.\nFinally, when the operation is completed (or when it fails) the database engine\ndispatches an event. Your code, triggered by the event, carries out subsequent\noperations. This approach has a significant benefit: the runtime performs the\ndatabase operations in the background while the main application code continues\nexecuting. If the database operation takes a notable amount of time, the\napplication continues to run. Most importantly, the user can continue to\ninteract with it without the screen freezing. Nevertheless, asynchronous\noperation code can be more complex to write than other code. This complexity is\nusually in cases where multiple dependent operations must be divided up among\nvarious event listener methods."),(0,o.kt)("p",null,"Conceptually, it is simpler to code operations as a single sequence of steps\u2014a\nset of synchronous operations\u2014rather than a set of operations split into several\nevent listener methods. In addition to asynchronous database operations, Adobe\nAIR also allows you to execute database operations synchronously. In synchronous\nexecution mode, operations don't run in the background. Instead they run in the\nsame execution sequence as all other application code. You tell the database\nengine to perform an operation. The code then pauses at that point while the\ndatabase engine does its work. When the operation completes, execution continues\nwith the next line of your code."),(0,o.kt)("p",null,"Whether operations execute asynchronously or synchronously is set at the\nSQLConnection level. Using a single database connection, you can't execute some\noperations or statements synchronously and others asynchronously. You specify\nwhether a SQLConnection operates in synchronous or asynchronous execution mode\nby calling a SQLConnection method to open the database. If you call\n",(0,o.kt)("inlineCode",{parentName:"p"},"SQLConnection.open()")," the connection operates in synchronous execution mode,\nand if you call ",(0,o.kt)("inlineCode",{parentName:"p"},"SQLConnection.openAsync()")," the connection operates in\nasynchronous execution mode. Once a SQLConnection instance is connected to a\ndatabase using ",(0,o.kt)("inlineCode",{parentName:"p"},"open()")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"openAsync()"),", it is fixed to synchronous or\nasynchronous execution mode unless you close and reopen the connection to the\ndatabase."),(0,o.kt)("p",null,"Each execution mode has benefits. While most aspects of each mode are similar,\nthere are some differences you'll want to keep in mind when working in each\nmode. For more information on these topics, and suggestions for working in each\nmode, see\n",(0,o.kt)("a",{parentName:"p",href:"/docs/development/files-and-data/working-with-local-sql-databases-in-air/using-synchronous-and-asynchronous-database-operations/"},"Using synchronous and asynchronous database operations"),"."),(0,o.kt)("p",null,"More Help topics"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://web.archive.org/web/20130904212327/http://coenraets.org/blog/air-for-android-samples/employee-directory-for-android"},"Christophe Coenraets: Employee Directory on AIR for Android")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://web.archive.org/web/20101213041415/http://insideria.com/2009/09/jquery-and-air---moving-from-w-1.html"},"Raymond Camden: jQuery and AIR - Moving from web page to application")))}h.isMDXComponent=!0}}]);