"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[48283],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>w});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(n),p=i,w=u["".concat(l,".").concat(p)]||u[p]||m[p]||a;return n?r.createElement(w,o(o({ref:t},d),{},{components:n})):r.createElement(w,o({ref:t},d))}));function w(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},65343:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var r=n(87462),i=n(67294),a=n(3905);const o=()=>{const[e,t]=(0,i.useState)(null),[r,a]=(0,i.useState)([]),o=[{id:1,name:"CVEDIA-RT",link:"https://www.baidu.com/",scenes:[4]},{id:2,name:"Lumeo",link:"https://www.baidu.com/",scenes:[4]},{id:3,name:"alwaysAI",link:"https://www.baidu.com/",scenes:[1]},{id:4,name:"YOLOv8",link:"https://www.baidu.com/",scenes:[1,2,4]},{id:5,name:"YOLOv5",link:"https://www.baidu.com/",scenes:[2,4]},{id:6,name:"roboflow",link:"https://www.baidu.com/",scenes:[1,4]},{id:7,name:"Allxon1",link:"https://www.baidu.com/",scenes:[5]},{id:8,name:"Deci",link:"https://www.baidu.com/",scenes:[3]},{id:9,name:"Edge Impulse",link:"https://www.baidu.com/",scenes:[1,2,4]},{id:10,name:"Cochl.Sense",link:"https://www.baidu.com/",scenes:[4]}],s=[{id:1,name:"Data Upload & Label",link:"https://www.baidu.com/",img:"huang.png",brands:[3,4,6,9]},{id:2,name:"Train",link:"https://www.baidu.com/",img:"huang.png",brands:[4,5,9]},{id:3,name:"Optimize",link:"https://www.baidu.com/",img:"huang.png",brands:[8]},{id:4,name:"Deploy",link:"https://www.baidu.com/",img:"huang.png",brands:[1,2,4,5,6,9,10]},{id:5,name:"Remote Manage",link:"https://www.baidu.com/",img:"huang.png",brands:[7]}],l=()=>{t(null),a([])};return i.createElement("div",{className:"dvc_container"},i.createElement("div",{className:"brand-list "},i.createElement("ul",null,o.map((n=>i.createElement("li",{key:n.id,onMouseEnter:()=>(e=>{t(e);const n=s.filter((t=>t.brands.includes(e.id)));a(n)})(n),onMouseLeave:l,className:"padding--sm "+(e===n.id?"selected":"")},i.createElement("a",{target:"_blank",href:n.link},n.name)))))),i.createElement("div",{className:"scene-list"},i.createElement("ul",null,s.map((e=>i.createElement("li",{key:e.id,onMouseEnter:()=>(e=>{console.log(e),t(null);const n=e.brands,r=o.filter((e=>n.includes(e.id)));console.log(r[0].id),a([e]),r.length&&t(r[0].id)})(e),onMouseLeave:l,className:"padding--sm "+(r.find((t=>t.id===e.id))?"selected":"")},i.createElement("a",{className:"scene-item",target:"_blank",href:e.link},i.createElement("img",{src:n(52372).Z}),i.createElement("div",{className:"srene-title"},"  ",e.name))))))))},s={description:"Seeed Studio Jetson Series",title:"Seeed Studio Jetson Series",keywords:["Edge","reComputer"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",last_update:{date:"01/03/2023",author:"w0x7ce"}},l="Introduction2",c={unversionedId:"Edge/reComputer/RecomputerPage",id:"Edge/reComputer/RecomputerPage",title:"Seeed Studio Jetson Series",description:"Seeed Studio Jetson Series",source:"@site/docs/Edge/reComputer/RecomputerPage.mdx",sourceDirName:"Edge/reComputer",slug:"/Edge/reComputer/RecomputerPage",permalink:"/Edge/reComputer/RecomputerPage",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Edge/reComputer/RecomputerPage.mdx",tags:[],version:"current",lastUpdatedBy:"w0x7ce",lastUpdatedAt:1672704e3,formattedLastUpdatedAt:"Jan 3, 2023",frontMatter:{description:"Seeed Studio Jetson Series",title:"Seeed Studio Jetson Series",keywords:["Edge","reComputer"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",last_update:{date:"01/03/2023",author:"w0x7ce"}}},d={},u=[{value:"title 1",id:"title-1",level:3},{value:"title 2",id:"title-2",level:2}],m={toc:u};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"introduction2"},"Introduction2"),(0,a.kt)(o,{title:"My Page",mdxType:"RecomputerPage"}),(0,a.kt)("h3",{id:"title-1"},"title 1"),(0,a.kt)("h2",{id:"title-2"},"title 2"))}p.isMDXComponent=!0},52372:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/huang-b0a1a53bc58787d269d6819a4d9699fd.png"}}]);