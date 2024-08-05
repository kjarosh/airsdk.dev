"use strict";(self.webpackChunkairsdk_dev=self.webpackChunkairsdk_dev||[]).push([[36368],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),u=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return i.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),p=a,h=d["".concat(l,".").concat(p)]||d[p]||m[p]||r;return n?i.createElement(h,o(o({ref:t},c),{},{components:n})):i.createElement(h,o({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,o[1]=s;for(var u=2;u<r;u++)o[u]=n[u];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},47193:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var i=n(87462),a=(n(67294),n(3905));const r={sidebar_position:2},o="About XML signatures",s={unversionedId:"development/networking-and-communication/xml-signature-validation-in-air/about-xml-signatures",id:"development/networking-and-communication/xml-signature-validation-in-air/about-xml-signatures",title:"About XML signatures",description:"An XML signature is a digital signature represented in XML syntax. The data in",source:"@site/docs/development/networking-and-communication/xml-signature-validation-in-air/about-xml-signatures.md",sourceDirName:"development/networking-and-communication/xml-signature-validation-in-air",slug:"/development/networking-and-communication/xml-signature-validation-in-air/about-xml-signatures",permalink:"/docs/development/networking-and-communication/xml-signature-validation-in-air/about-xml-signatures",draft:!1,editUrl:"https://github.com/airsdk/airsdk.dev/edit/main/docs/development/networking-and-communication/xml-signature-validation-in-air/about-xml-signatures.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"mainSidebar",previous:{title:"Basics of XML signature validation",permalink:"/docs/development/networking-and-communication/xml-signature-validation-in-air/basics-of-xml-signature-validation"},next:{title:"Implementing the IURIDereferencer interface",permalink:"/docs/development/networking-and-communication/xml-signature-validation-in-air/implementing-the-iuridereferencer-interface"}},l={},u=[{value:"Supported XML signature syntax",id:"supported-xml-signature-syntax",level:2},{value:"Certificates and trust",id:"certificates-and-trust",level:3},{value:"Certificate expiration and revocation",id:"certificate-expiration-and-revocation",level:4}],c={toc:u},d="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"about-xml-signatures"},"About XML signatures"),(0,a.kt)("p",null,"An XML signature is a digital signature represented in XML syntax. The data in\nan XML signature can be used to validate that the signed information has not\nbeen altered since signing. In addition, when a signing certificate has been\nissued by a trusted certification authority, the identity of the signer can be\nverified through the public key infrastructure."),(0,a.kt)("p",null,"An XML signature can be applied to any type of digital data (in binary or XML\nformat). XML signatures are typically used for such purposes as:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"checking whether external or downloaded resources have been modified")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"verifying that messages come from a known source")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"validating application license or subscription privileges"))),(0,a.kt)("h2",{id:"supported-xml-signature-syntax"},"Supported XML signature syntax"),(0,a.kt)("p",null,"AIR supports the following elements from the W3C recommendation for XML\nSignature Syntax and Processing:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"All core signature syntax elements (section 4 of the W3C recommendation\ndocument)\u2014except the KeyInfo element is not fully supported")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The KeyInfo element must only contain an X509Data element")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"An X509Data element must only contain an X509Certificate element")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The SHA256 digest method")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The RSA-SHA1 (PKCS1) signing algorithm")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},'The "Canonical XML without comments" canonicalization method and transform')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The enveloped signature transform")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"timestamps"))),(0,a.kt)("p",null,"The following document illustrates a typical XML signature (most of the\ncryptographic data has been removed to simplify the example):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'<Signature xmlns="http://www.w3.org/2000/09/xmldsig#">\n    <SignedInfo>\n        <CanonicalizationMethod Algorithm="http://www.w3.org/TR/2001/REC-xml-c14n-20010315"/>\n        <SignatureMethod Algorithm="http://www.w3.org/2000/09/xmldsig#rsa-sha1"/>\n        <Reference URI="URI_to_signed_data">\n            <Transforms>\n                <Transform Algorithm="http://www.w3.org/2000/09/xmldsig#enveloped-signature"/>            </Transforms>\n            <DigestMethod Algorithm="http://www.w3.org/2001/04/xmlenc#sha256"/>\n            <DigestValue>uoo...vY=</DigestValue>\n        </Reference>\n    </SignedInfo>\n    <SignatureValue>Ked...w==</SignatureValue>\n    <KeyInfo>\n        <X509Data>\n            <X509Certificate>i7d...w==</X509Certificate>\n        </X509Data>\n    </KeyInfo>\n</Signature>\n')),(0,a.kt)("p",null,"The key elements of a signature are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"SignedInfo \u2014 Contains references to the signed data and the computed digest\nvalues at the time of signing. The signed data itself may be included in the\nsame document as the XML signature or may be external.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"SignatureValue \u2014 Contains a digest of the SignedInfo element encrypted with\nthe signer's private key.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"KeyInfo \u2014 Contains the signing certificate, as well as any additional\ncertificates needed to establish the chain of trust. Note that although the\nKeyInfo element is technically optional, AIR cannot validate the signature if\nit is not included."))),(0,a.kt)("p",null,"There are three general types of XML signatures:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Enveloped \u2014 the signature is inserted inside the XML data that it is signing.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Enveloping \u2014 the signed XML data is contained within an Object element within\nthe Signature element.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Detached \u2014 the signed data is external to the XML signature. The signed data\nmight be in an external file. Alternately, it might be in the same XML\ndocument as the signature, just not a parent or child element of the Signature\nelement."))),(0,a.kt)("p",null,"XML signatures use URIs to reference the signed data. The signing and the\nvalidating applications must use the same conventions for resolving these URIs.\nWhen using the XMLSignatureValidator class, you must provide an implementation\nof the IURIDereferencer interface. This implementation is responsible for\nresolving the URI and returning the signed data as a ByteArray object. The\nreturned ByteArray object is digested using the same algorithm that produced the\ndigest in the signature."),(0,a.kt)("h3",{id:"certificates-and-trust"},"Certificates and trust"),(0,a.kt)("p",null,"A certificate consists of a public key, identifying information, and possibly\none or more certificates belonging to the issuing certification authority."),(0,a.kt)("p",null,"There are two ways to establish trust in a certificate. You can establish trust\nby obtaining a copy of the certificate directly from the signer, for example on\nphysical media, or through a secure digital transmission such as an SSL\ntransaction. You can also rely on a certification authority to determine whether\nthe signing certificate is trustworthy."),(0,a.kt)("p",null,"To rely on a certification authority, the signing certificate must be issued by\nan authority that is trusted on the computer upon which the signature is\nvalidated. Most operating system manufacturers place the root certificates of a\nnumber of certification authorities into the operating system trust store. Users\ncan also add and remove certificates from the store."),(0,a.kt)("p",null,"Even if a certificate is issued by a trusted certification authority, you must\nstill decide whether the certificate belongs to someone you trust. In many use\ncases, this decision is passed along to the end-user. For example, when an AIR\napplication is installed, the AIR installer displays the identifying information\nfrom the publisher's certificate when asking the user to verify whether they\nwant to install the application. In other cases, you might have to compare the\npublic key or other certificate information to a list of acceptable keys. (This\nlist must be secured, perhaps by its own signature, or by storing in the AIR\nencrypted local store, so that the list itself cannot be tampered with.)"),(0,a.kt)("p",null,'Note: While you can elect to trust the signing certificate without independent\nverification\u2014such as when a signature is "self-signed"\u2014you do not thereby gain\nmuch assurance of anything by verifying the signature. Without knowing who\ncreated a signature, the assurance that the signature has not been tampered\nwith, is of little, if any, value. The signature could be a validly signed\nforgery.'),(0,a.kt)("h4",{id:"certificate-expiration-and-revocation"},"Certificate expiration and revocation"),(0,a.kt)("p",null,"All certificates expire. Certificates can also be revoked by the issuing\ncertification authority if, for example, the private key related to the\ncertificate is compromised or stolen. If a signature is signed with an expired\nor revoked certificate, then the signature will be reported as invalid unless a\ntimestamp has been included as part of the signature. If a timestamp is present,\nthen the XMLSignatureValidator class will validate the signature as long as the\ncertificate was valid at the time of signing."),(0,a.kt)("p",null,"A timestamp is a signed digital message from a timestamp service that certifies\nthat the data was signed at a particular time and date. Timestamps are issued by\ntimestamp authorities and signed by the timestamp authority's own certificate.\nThe timestamp authority certificate embedded in the timestamp must be trusted on\nthe current machine for the timestamp to be considered valid. The\nXMLSignatureValidator does not provide an API for designating a different\ncertificate to use in validating the timestamp."))}m.isMDXComponent=!0}}]);