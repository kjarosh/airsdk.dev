"use strict";(self.webpackChunkairsdk_dev=self.webpackChunkairsdk_dev||[]).push([[43066],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>c});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},y="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),y=p(n),h=r,c=y["".concat(l,".").concat(h)]||y[h]||m[h]||i;return n?a.createElement(c,o(o({ref:t},d),{},{components:n})):a.createElement(c,o({ref:t},d))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[y]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},41538:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={sidebar_position:1},o="Reading and writing a ByteArray",s={unversionedId:"development/files-and-data/working-with-bytearrays/reading-and-writing-a-bytearray",id:"development/files-and-data/working-with-bytearrays/reading-and-writing-a-bytearray",title:"Reading and writing a ByteArray",description:"The ByteArray class is part of the flash.utils package. To create a ByteArray",source:"@site/docs/development/files-and-data/working-with-bytearrays/reading-and-writing-a-bytearray.md",sourceDirName:"development/files-and-data/working-with-bytearrays",slug:"/development/files-and-data/working-with-bytearrays/reading-and-writing-a-bytearray",permalink:"/docs/development/files-and-data/working-with-bytearrays/reading-and-writing-a-bytearray",draft:!1,editUrl:"https://github.com/airsdk/airsdk.dev/edit/main/docs/development/files-and-data/working-with-bytearrays/reading-and-writing-a-bytearray.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"mainSidebar",previous:{title:"Working with byte arrays",permalink:"/docs/development/files-and-data/working-with-bytearrays/"},next:{title:"ByteArray example: Reading a .zip file",permalink:"/docs/development/files-and-data/working-with-bytearrays/bytearray-example-reading-a-zip-file"}},l={},p=[{value:"ByteArray methods",id:"bytearray-methods",level:2},{value:"The position property",id:"the-position-property",level:2},{value:"The bytesAvailable and length properties",id:"the-bytesavailable-and-length-properties",level:2},{value:"The endian property",id:"the-endian-property",level:2},{value:"The compress() and uncompress() methods",id:"the-compress-and-uncompress-methods",level:2},{value:"Reading and writing objects",id:"reading-and-writing-objects",level:2}],d={toc:p},y="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(y,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"reading-and-writing-a-bytearray"},"Reading and writing a ByteArray"),(0,r.kt)("p",null,"The ByteArray class is part of the flash.utils package. To create a ByteArray\nobject in ActionScript 3.0, import the ByteArray class and invoke the\nconstructor, as shown in the following example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"import flash.utils.ByteArray;\nvar stream:ByteArray = new ByteArray();\n")),(0,r.kt)("h2",{id:"bytearray-methods"},"ByteArray methods"),(0,r.kt)("p",null,"Any meaningful data stream is organized into a format that you can analyze to\nfind the information that you want. A record in a simple employee file, for\nexample, would probably include an ID number, a name, an address, a phone\nnumber, and so on. An MP3 audio file contains an ID3 tag that identifies the\ntitle, author, album, publishing date, and genre of the file that's being\ndownloaded. The format allows you to know the order in which to expect the data\non the data stream. It allows you to read the byte stream intelligently."),(0,r.kt)("p",null,"The ByteArray class includes several methods that make it easier to read from\nand write to a data stream. Some of these methods include ",(0,r.kt)("inlineCode",{parentName:"p"},"readBytes()")," and\n",(0,r.kt)("inlineCode",{parentName:"p"},"writeBytes()"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"readInt()")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"writeInt()"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"readFloat()")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"writeFloat()"),",\n",(0,r.kt)("inlineCode",{parentName:"p"},"readObject()")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"writeObject()"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"readUTFBytes()")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"writeUTFBytes()"),".\nThese methods enable you to read data from the data stream into variables of\nspecific data types and write from specific data types directly to the binary\ndata stream."),(0,r.kt)("p",null,"For example, the following code reads a simple array of strings and\nfloating-point numbers and writes each element to a ByteArray. The organization\nof the array allows the code to call the appropriate ByteArray methods (\n",(0,r.kt)("inlineCode",{parentName:"p"},"writeUTFBytes()")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"writeFloat()"),") to write the data. The repeating data\npattern makes it possible to read the array with a loop."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'// The following example reads a simple Array (groceries), made up of strings\n// and floating-point numbers, and writes it to a ByteArray.\n\nimport flash.utils.ByteArray;\n\n// define the grocery list Array\nvar groceries:Array = ["milk", 4.50, "soup", 1.79, "eggs", 3.19, "bread" , 2.35]\n// define the ByteArray\nvar bytes:ByteArray = new ByteArray();\n// for each item in the array\nfor (var i:int = 0; i < groceries.length; i++) {\n    bytes.writeUTFBytes(groceries[i++]); //write the string and position to the next item\n    bytes.writeFloat(groceries[i]);    // write the float\n    trace("bytes.position is: " + bytes.position);    //display the position in ByteArray\n}\ntrace("bytes length is: " +  bytes.length);    // display the length\n')),(0,r.kt)("h2",{id:"the-position-property"},"The position property"),(0,r.kt)("p",null,"The position property stores the current position of the pointer that indexes\nthe ByteArray during reading or writing. The initial value of the position\nproperty is 0 (zero) as shown in the following code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'var bytes:ByteArray = new ByteArray();\ntrace("bytes.position is initially: " + bytes.position);     // 0\n')),(0,r.kt)("p",null,"When you read from or write to a ByteArray, the method that you use updates the\nposition property to point to the location immediately following the last byte\nthat was read or written. For example, the following code writes a string to a\nByteArray and afterward the position property points to the byte immediately\nfollowing the string in the ByteArray:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'var bytes:ByteArray = new ByteArray();\ntrace("bytes.position is initially: " + bytes.position);     // 0\nbytes.writeUTFBytes("Hello World!");\ntrace("bytes.position is now: " + bytes.position);    // 12\n')),(0,r.kt)("p",null,"Likewise, a read operation increments the position property by the number of\nbytes read."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'var bytes:ByteArray = new ByteArray();\n\ntrace("bytes.position is initially: " + bytes.position);     // 0\nbytes.writeUTFBytes("Hello World!");\ntrace("bytes.position is now: " + bytes.position);    // 12\nbytes.position = 0;\ntrace("The first 6 bytes are: " + (bytes.readUTFBytes(6)));    //Hello\ntrace("And the next 6 bytes are: " + (bytes.readUTFBytes(6)));    // World!\n')),(0,r.kt)("p",null,"Notice that you can set the position property to a specific location in the\nByteArray to read or write at that offset."),(0,r.kt)("h2",{id:"the-bytesavailable-and-length-properties"},"The bytesAvailable and length properties"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"length")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"bytesAvailable"),' properties tell you how long a ByteArray is\nand how many bytes remain in it from the current position to the end. The\nfollowing example illustrates how you can use these properties. The example\nwrites a String of text to the ByteArray and then reads the ByteArray one byte\nat a time until it encounters either the character "a" or the end (\n',(0,r.kt)("inlineCode",{parentName:"p"},"bytesAvailable <= 0"),")."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'var bytes:ByteArray = new ByteArray();\nvar text:String = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Vivamus etc.";\n\nbytes.writeUTFBytes(text); // write the text to the ByteArray\ntrace("The length of the ByteArray is: " + bytes.length);    // 70\nbytes.position = 0; // reset position\nwhile (bytes.bytesAvailable > 0 && (bytes.readUTFBytes(1) != \'a\')) {\n    //read to letter a or end of bytes\n}\nif (bytes.position < bytes.bytesAvailable) {\n    trace("Found the letter a; position is: " + bytes.position);     // 23\n    trace("and the number of bytes available is: " + bytes.bytesAvailable);    // 47\n}\n')),(0,r.kt)("h2",{id:"the-endian-property"},"The endian property"),(0,r.kt)("p",null,"Computers can differ in how they store multibyte numbers, that is, numbers that\nrequire more than 1 byte of memory to store them. An integer, for example, can\ntake 4 bytes, or 32 bits, of memory. Some computers store the most significant\nbyte of the number first, in the lowest memory address, and others store the\nleast significant byte first. This attribute of a computer, or of byte ordering,\nis referred to as being either ",(0,r.kt)("em",{parentName:"p"},"big endian")," (most significant byte first) or\n",(0,r.kt)("em",{parentName:"p"},"little endian")," (least significant byte first). For example, the number\n0x31323334 would be stored as follows for big endian and little endian byte\nordering, where a0 represents the lowest memory address of the 4 bytes and a3\nrepresents the highest:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Big Endian"),(0,r.kt)("th",{parentName:"tr",align:null},"Big Endian"),(0,r.kt)("th",{parentName:"tr",align:null},"Big Endian"),(0,r.kt)("th",{parentName:"tr",align:null},"Big Endian"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"a0"),(0,r.kt)("td",{parentName:"tr",align:null},"a1"),(0,r.kt)("td",{parentName:"tr",align:null},"a2"),(0,r.kt)("td",{parentName:"tr",align:null},"a3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"31"),(0,r.kt)("td",{parentName:"tr",align:null},"32"),(0,r.kt)("td",{parentName:"tr",align:null},"33"),(0,r.kt)("td",{parentName:"tr",align:null},"34")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Little Endian"),(0,r.kt)("th",{parentName:"tr",align:null},"Little Endian"),(0,r.kt)("th",{parentName:"tr",align:null},"Little Endian"),(0,r.kt)("th",{parentName:"tr",align:null},"Little Endian"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"a0"),(0,r.kt)("td",{parentName:"tr",align:null},"a1"),(0,r.kt)("td",{parentName:"tr",align:null},"a2"),(0,r.kt)("td",{parentName:"tr",align:null},"a3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"34"),(0,r.kt)("td",{parentName:"tr",align:null},"33"),(0,r.kt)("td",{parentName:"tr",align:null},"32"),(0,r.kt)("td",{parentName:"tr",align:null},"31")))),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"endian")," property of the ByteArray class allows you to denote this byte\norder for multibyte numbers that you are processing. The acceptable values for\nthis property are either ",(0,r.kt)("inlineCode",{parentName:"p"},'"bigEndian"')," or ",(0,r.kt)("inlineCode",{parentName:"p"},'"littleEndian"')," and the Endian class\ndefines the constants ",(0,r.kt)("inlineCode",{parentName:"p"},"BIG_ENDIAN")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"LITTLE_ENDIAN")," for setting the ",(0,r.kt)("inlineCode",{parentName:"p"},"endian"),"\nproperty with these strings."),(0,r.kt)("h2",{id:"the-compress-and-uncompress-methods"},"The compress() and uncompress() methods"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"compress()")," method allows you to compress a ByteArray in accordance with a\ncompression algorithm that you specify as a parameter. The ",(0,r.kt)("inlineCode",{parentName:"p"},"uncompress()")," method\nallows you to uncompress a compressed ByteArray in accordance with a compression\nalgorithm. After calling ",(0,r.kt)("inlineCode",{parentName:"p"},"compress()")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"uncompress()"),", the length of the byte\narray is set to the new length and the position property is set to the end."),(0,r.kt)("p",null,"The CompressionAlgorithm class defines constants that you can use to specify the\ncompression algorithm. The ByteArray class supports the deflate (AIR-only),\nzlib, and lzma algorithms. The zlib compressed data format is described at\n",(0,r.kt)("a",{parentName:"p",href:"http://www.ietf.org/rfc/rfc1950.txt"},"http://www.ietf.org/rfc/rfc1950.txt"),". The lzma algorithm was added for Flash\nPlayer 11.4 and AIR 3.4. It is described at ",(0,r.kt)("a",{parentName:"p",href:"http://www.7-zip.org/7z.html"},"http://www.7-zip.org/7z.html"),"."),(0,r.kt)("p",null,"The deflate compression algorithm is used in several compression formats, such\nas zlib, gzip, and some zip implementations. The deflate compression algorithm\nis described at ",(0,r.kt)("a",{parentName:"p",href:"http://www.ietf.org/rfc/rfc1951.txt"},"http://www.ietf.org/rfc/rfc1951.txt"),"."),(0,r.kt)("p",null,"The following example compresses a ByteArray called ",(0,r.kt)("inlineCode",{parentName:"p"},"bytes")," using the lzma\nalgorithm:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"bytes.compress(CompressionAlgorithm.LZMA);\n")),(0,r.kt)("p",null,"The following example uncompresses a compressed ByteArray using the deflate\nalgorithm:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"bytes.uncompress(CompressionAlgorithm.LZMA);\n")),(0,r.kt)("h2",{id:"reading-and-writing-objects"},"Reading and writing objects"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"readObject()")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"writeObject()")," methods read an object from and write an\nobject to a ByteArray, encoded in serialized Action Message Format (AMF). AMF is\na proprietary message protocol created by Adobe and used by various ActionScript\n3.0 classes, including Netstream, NetConnection, NetStream, LocalConnection, and\nShared Objects."),(0,r.kt)("p",null,"A one-byte type marker describes the type of the encoded data that follows. AMF\nuses the following 13 data types:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"value-type = undefined-marker | null-marker | false-marker | true-marker | integer-type |\ndouble-type | string-type | xml-doc-type | date-type | array-type | object-type |\nxml-type | byte-array-type\n")),(0,r.kt)("p",null,"The encoded data follows the type marker unless the marker represents a single\npossible value, such as null or true or false, in which case nothing else is\nencoded."),(0,r.kt)("p",null,"There are two versions of AMF: AMF0 and AMF3. AMF 0 supports sending complex\nobjects by reference and allows endpoints to restore object relationships. AMF 3\nimproves AMF 0 by sending object traits and strings by reference, in addition to\nobject references, and by supporting new data types that were introduced in\nActionScript 3.0. The ",(0,r.kt)("inlineCode",{parentName:"p"},"ByteArray.objectEcoding")," property specifies the version\nof AMF that is used to encode the object data. The flash.net.ObjectEncoding\nclass defines constants for specifying the AMF version: ",(0,r.kt)("inlineCode",{parentName:"p"},"ObjectEncoding.AMF0"),"\nand ",(0,r.kt)("inlineCode",{parentName:"p"},"ObjectEncoding.AMF3"),"."),(0,r.kt)("p",null,"The following example calls ",(0,r.kt)("inlineCode",{parentName:"p"},"writeObject()")," to write an XML object to a\nByteArray, which it then compresses using the Deflate algorithm and writes to\nthe ",(0,r.kt)("inlineCode",{parentName:"p"},"order"),' file on the desktop. The example uses a label to display the message\n"Wrote order file to desktop!" in the AIR window when it is finished.'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"import flash.filesystem.*;\nimport flash.display.Sprite;\nimport flash.display.TextField;\nimport flash.utils.ByteArray;\n\npublic class WriteObjectExample extends Sprite\n{\n    public function WriteObjectExample()\n    {\n        var bytes:ByteArray = new ByteArray();\n        var myLabel:TextField = new TextField();\n        myLabel.x = 150;\n        myLabel.y = 150;\n        myLabel.width = 200;\n        addChild(myLabel);\n\n        var myXML:XML =\n            <order>\n                <item id='1'>\n                    <menuName>burger</menuName>\n                    <price>3.95</price>\n                </item>\n                <item id='2'>\n                    <menuName>fries</menuName>\n                    <price>1.45</price>\n                </item>\n            </order>;\n\n        // Write XML object to ByteArray\n        bytes.writeObject(myXML);\n        bytes.position = 0;        //reset position to beginning\n        bytes.compress(CompressionAlgorithm.DEFLATE);    // compress ByteArray\n        writeBytesToFile(\"order.xml\", bytes);\n        myLabel.text = \"Wrote order file to desktop!\";\n    }\n\n    private function writeBytesToFile(fileName:String, data:ByteArray):void\n    {\n        var outFile:File = File.desktopDirectory; // dest folder is desktop\n        outFile = outFile.resolvePath(fileName);  // name of file to write\n        var outStream:FileStream = new FileStream();\n        // open output file stream in WRITE mode\n        outStream.open(outFile, FileMode.WRITE);\n        // write out the file\n        outStream.writeBytes(data, 0, data.length);\n        // close it\n        outStream.close();\n    }\n}\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"readObject()")," method reads an object in serialized AMF from a ByteArray and\nstores it in an object of the specified type. The following example reads the\n",(0,r.kt)("inlineCode",{parentName:"p"},"order")," file from the desktop into a ByteArray ( ",(0,r.kt)("inlineCode",{parentName:"p"},"inBytes"),"), uncompresses it,\nand calls ",(0,r.kt)("inlineCode",{parentName:"p"},"readObject()")," to store it in the XML object ",(0,r.kt)("inlineCode",{parentName:"p"},"orderXML"),". The example\nuses a ",(0,r.kt)("inlineCode",{parentName:"p"},"for each()")," loop construct to add each node to a text area for display.\nThe example also displays the value of the ",(0,r.kt)("inlineCode",{parentName:"p"},"objectEncoding")," property along with\na header for the contents of the ",(0,r.kt)("inlineCode",{parentName:"p"},"order")," file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'import flash.filesystem.*;\nimport flash.display.Sprite;\nimport flash.display.TextField;\nimport flash.utils.ByteArray;\n\npublic class ReadObjectExample extends Sprite\n{\n    public function ReadObjectExample()\n    {\n        var inBytes:ByteArray = new ByteArray();\n        // define text area for displaying XML content\n        var myTxt:TextField = new TextField();\n        myTxt.width = 550;\n        myTxt.height = 400;\n        addChild(myTxt);\n        //display objectEncoding and file heading\n        myTxt.text = "Object encoding is: " + inBytes.objectEncoding + "\\n\\n" + "order file: \\n\\n";\n        readFileIntoByteArray("order", inBytes);\n\n        inBytes.position = 0; // reset position to beginning\n        inBytes.uncompress(CompressionAlgorithm.DEFLATE);\n        inBytes.position = 0;    //reset position to beginning\n        // read XML Object\n        var orderXML:XML = inBytes.readObject();\n\n        // for each node in orderXML\n        for each (var child:XML in orderXML)\n        {\n            // append child node to text area\n            myTxt.text += child + "\\n";\n        }\n    }\n\n    // read specified file into byte array\n    private function readFileIntoByteArray(fileName:String, data:ByteArray):void\n    {\n        var inFile:File = File.desktopDirectory; // source folder is desktop\n        inFile = inFile.resolvePath(fileName);  // name of file to read\n        var inStream:FileStream = new FileStream();\n        inStream.open(inFile, FileMode.READ);\n        inStream.readBytes(data);\n        inStream.close();\n    }\n}\n')))}m.isMDXComponent=!0}}]);