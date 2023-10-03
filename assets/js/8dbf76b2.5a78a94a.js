"use strict";(self.webpackChunkairsdk_dev=self.webpackChunkairsdk_dev||[]).push([[73551],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,f=u["".concat(s,".").concat(d)]||u[d]||c[d]||i;return n?r.createElement(f,o(o({ref:t},m),{},{components:n})):r.createElement(f,o({ref:t},m))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},70275:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const i={sidebar_position:4},o="Formatting numbers",l={unversionedId:"development/internationalizing-applications/internationalizing-applications/formatting-numbers",id:"development/internationalizing-applications/internationalizing-applications/formatting-numbers",title:"Formatting numbers",description:"The display format of numeric values varies widely from region to region. For",source:"@site/docs/development/internationalizing-applications/internationalizing-applications/formatting-numbers.md",sourceDirName:"development/internationalizing-applications/internationalizing-applications",slug:"/development/internationalizing-applications/internationalizing-applications/formatting-numbers",permalink:"/docs/development/internationalizing-applications/internationalizing-applications/formatting-numbers",draft:!1,editUrl:"https://github.com/airsdk/airsdk.dev/edit/main/docs/development/internationalizing-applications/internationalizing-applications/formatting-numbers.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"mainSidebar",previous:{title:"Determining the locale",permalink:"/docs/development/internationalizing-applications/internationalizing-applications/determining-the-locale"},next:{title:"Formatting currency values",permalink:"/docs/development/internationalizing-applications/internationalizing-applications/formatting-currency-values"}},s={},p=[{value:"Using the NumberFormatter class",id:"using-the-numberformatter-class",level:2},{value:"Parsing strings that contain numeric values",id:"parsing-strings-that-contain-numeric-values",level:2}],m={toc:p},u="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"formatting-numbers"},"Formatting numbers"),(0,a.kt)("p",null,"The display format of numeric values varies widely from region to region. For\nexample, here is how the number 123456.78 is formatted for certain locales:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Locale"),(0,a.kt)("th",{parentName:"tr",align:null},"Number Format"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"en-US (English, USA)"),(0,a.kt)("td",{parentName:"tr",align:null},"-123,456.78")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"de-DE (German, Germany)"),(0,a.kt)("td",{parentName:"tr",align:null},"-123.456,78")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"fr-FR (France, French)"),(0,a.kt)("td",{parentName:"tr",align:null},"-123 456,78")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"de-CH (German, Switzerland)"),(0,a.kt)("td",{parentName:"tr",align:null},"-123'456.78")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"en-IN (English, India)"),(0,a.kt)("td",{parentName:"tr",align:null},"-1,23,456.78")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Many Arabic locales"),(0,a.kt)("td",{parentName:"tr",align:null},"123,456.78-")))),(0,a.kt)("p",null,"There are many factors that influence number formats, including:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Separators. The decimal separator is placed between the integer and fractional\nportions of a number. It can be a period, comma, or another character. The\ngrouping separator or thousands separator can be a period, a comma, a\nnon-breaking space, or another character.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Grouping patterns. The number of digits between each grouping separator to the\nleft of the decimal point can be two or three or another value.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Negative number indicators. Negative numbers can be shown with a minus sign to\nthe left or the right of the number, or within parentheses for financial\napplications. For example, negative 19 can be shown as -19, 19-, or (19).")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Leading and trailing zeroes. Some cultural conventions add leading or trailing\nzeroes to displayed numbers. For example the value 0.17 can be displayed as\n.17, 0.17, or 0.170, among other options.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Sets of digit characters. Many languages, including Hindi, Arabic, and\nJapanese, use different sets of digit characters. The flash.globalization\npackage supports any digit character sets that map to the digits 0-9."))),(0,a.kt)("p",null,"The NumberFormatter class considers all of these factors when formatting numeric\nvalues."),(0,a.kt)("h2",{id:"using-the-numberformatter-class"},"Using the NumberFormatter class"),(0,a.kt)("p",null,"The NumberFormatter class formats numeric values (of type int, uint, or Number)\naccording to the conventions of a specific locale."),(0,a.kt)("p",null,"The following example shows the simplest way to format a number using the\ndefault formatting properties provided by the user's operating system:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"var nf:NumberFormatter = new NumberFormatter(LocaleID.DEFAULT);\ntrace(nf.formatNumber(-123456.789))\n")),(0,a.kt)("p",null,"The result vary based on the user's locale settings and user preferences. For\nexample, if the user's locale is fr-FR then the formatted value would be:"),(0,a.kt)("p",null,"-123.456,789"),(0,a.kt)("p",null,"If you only want to format a number for a specific locale, regardless of the\nuser's settings, set the locale name specifically. For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'var nf:NumberFormatter = new NumberFormatter("de-CH");\ntrace(nf.formatNumber(-123456.789));\n')),(0,a.kt)("p",null,"The result in this case are:"),(0,a.kt)("p",null,"-123'456.789"),(0,a.kt)("p",null,"The formatNumber() method takes a Number as a parameter. The NumberFormatter\nclass also has a formatInt() method that takes an int as input, and a\nformatUint() method that takes a uint."),(0,a.kt)("p",null,"You can explicitly control the formatting logic by setting properties of the\nNumberFormatter class, as shown in this example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'var nf:NumberFormatter = new NumberFormatter("de-CH");\nnf.negativeNumberFormat = 0;\nnf.fractionalDigits = 5;\nnf.trailingZeros = true;\nnf.decimalSeparator = ",";\nnf.useGrouping = false;\ntrace(nf.formatNumber(-123456.789)); //(123456.78900)\n')),(0,a.kt)("p",null,"This example first creates a NumberFormatter object and then:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"sets the negative number format to use parentheses (as in financial\napplications);")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"sets the number of digits after the decimal separator to 5;")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"specifies that trailing zeroes be used to ensure five decimal places;")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"sets the decimal separator to a comma;")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"tells the formatter not to use any grouping separators."))),(0,a.kt)("p",null,"Note: When some of these properties change, the resulting number format no\nlonger corresponds to the preferred format for the specified locale. Use some of\nthese properties only when locale-awareness is not important; when you need\ndetailed control over a single aspect of the format, such as the number of\ntrailing zeroes; or when the user requests the change directly, for example,\nthrough the Windows Control Panel."),(0,a.kt)("h2",{id:"parsing-strings-that-contain-numeric-values"},"Parsing strings that contain numeric values"),(0,a.kt)("p",null,"The NumberFormatter class can also extract numeric values from strings that\nconform to locale-specific formatting requirements. The\nNumberFormatter.parseNumber() method extracts a single numeric value from a\nstring. For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'var nf:NumberFormatter = new NumberFormatter( "en-US" );\nvar inputNumberString:String =  "-1,234,567.890"\nvar parsedNumber:Number = nf.parseNumber(inputNumberString);\ntrace("Value:" + parsedNumber); // -1234567.89\ntrace("Status:" + nf.lastOperationStatus); // noError\n')),(0,a.kt)("p",null,"The parseNumber() method handles strings that contain only digits and number\nformatting characters such as negative signs and separators. If the string\ncontains other characters, an error code is set:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'var nf:NumberFormatter = new NumberFormatter( "en-US" );\nvar inputNumberString:String =  "The value is 1,234,567.890"\nvar parsedNumber:Number = nf.parseNumber(inputNumberString);\ntrace("Value:" + parsedNumber); // NaN\ntrace("Status:" + nf.lastOperationStatus); // parseError\n')),(0,a.kt)("p",null,"To extract numbers from strings that contain additional alphabetic characters,\nuse the NumberFormatter.parse() method:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'var nf:NumberFormatter = new NumberFormatter( "en-US" );\nvar inputNumberString:String = "The value is 123,456,7.890";\nvar parseResult:NumberParseResult = nf.parse(inputNumberString);\ntrace("Value:" + parseResult.value); // 1234567.89\ntrace("startIndex: " + parseResult.startIndex); // 14\ntrace("Status:" + nf.lastOperationStatus); // noError\n')),(0,a.kt)("p",null,"The parse() method returns a NumberParseResult object that contains the parsed\nnumeric value in its value property. The startIndex property indicates the index\nof the first numeric character that was found. You can use the startIndex and\nendIndex properties to extract the portions of the string that come before and\nafter the digits."))}c.isMDXComponent=!0}}]);