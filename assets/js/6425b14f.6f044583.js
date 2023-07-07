"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[86470],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(r),h=a,m=u["".concat(s,".").concat(h)]||u[h]||d[h]||o;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},10862:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={description:"XIAO ESP32C3-FAQ",title:"How to reflash the bootloader with factory firmware",slug:"/reflash_the_bootloader",last_update:{date:"6/30/2023",author:"cheng.tang"}},i=void 0,l={unversionedId:"FAQ/XIAO/reflash_the_bootloader",id:"FAQ/XIAO/reflash_the_bootloader",title:"How to reflash the bootloader with factory firmware",description:"XIAO ESP32C3-FAQ",source:"@site/docs/FAQ/XIAO/reflash_the_bootloader.md",sourceDirName:"FAQ/XIAO",slug:"/reflash_the_bootloader",permalink:"/reflash_the_bootloader",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/FAQ/XIAO/reflash_the_bootloader.md",tags:[],version:"current",lastUpdatedBy:"cheng.tang",lastUpdatedAt:1688083200,formattedLastUpdatedAt:"Jun 30, 2023",frontMatter:{description:"XIAO ESP32C3-FAQ",title:"How to reflash the bootloader with factory firmware",slug:"/reflash_the_bootloader",last_update:{date:"6/30/2023",author:"cheng.tang"}}},s={},p=[],c={toc:p};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"You can simply connect the board to a PC via ",(0,a.kt)("strong",{parentName:"p"},"USB Type-C")," and reflash the bootloader with factory firmware by using ",(0,a.kt)("strong",{parentName:"p"},"ESP RF Test Tool"),"."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Step 1.")," Hold on the ",(0,a.kt)("strong",{parentName:"p"},"BOOT BUTTON")," and connect XIAO ESP32C3 to the PC to enter ",(0,a.kt)("strong",{parentName:"p"},"bootloader mode"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Step 2.")," After it is connected, release the BOOT BUTTON")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Step 3.")," Visit ",(0,a.kt)("a",{parentName:"p",href:"https://www.espressif.com/en/support/download/other-tools"},"this page")," and download ",(0,a.kt)("strong",{parentName:"p"},"ESP RF Test Tool and Test Guide")))),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/XIAO_WiFi/esp-flash-tool-download.png",style:{width:1e3,height:"auto"}})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 4.")," Extract the ",(0,a.kt)("strong",{parentName:"li"},".zip"),", navigate to ",(0,a.kt)("inlineCode",{parentName:"li"},"ESP_RF_Test_EN\\ESP_RF_Test_EN\\EspRFTestTool_v2.8_Manual")," and open ",(0,a.kt)("strong",{parentName:"li"},"EspRFTestTool_v2.8_Manual.exe"))),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/XIAO_WiFi/esp-flash-tool-open.png",style:{width:500,height:"auto"}})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 5.")," Select ",(0,a.kt)("strong",{parentName:"li"},"ESP32C3")," as the ChipType, your COM port, ",(0,a.kt)("strong",{parentName:"li"},"115200")," as the BaudRate and click ",(0,a.kt)("strong",{parentName:"li"},"open"))),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/XIAO_WiFi/esp-flash-2.png",style:{width:500,height:"auto"}})),(0,a.kt)("p",null,"You will see the following output"),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/XIAO_WiFi/esp-flash-5.png",style:{width:500,height:"auto"}})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 6.")," Select ",(0,a.kt)("strong",{parentName:"li"},"Flash")," and click ",(0,a.kt)("strong",{parentName:"li"},"Select Bin"))),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/XIAO_WiFi/esp-flash-6.jpg",style:{width:500,height:"auto"}})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Step 7.")," Download the ",(0,a.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/XIAO_WiFi/Resources/ESP32-C3_RFTest_108_2b9b157_20211014.bin"},"factory firmware of XIAO ESP32C3")," and select it.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Step 8.")," Finally click ",(0,a.kt)("strong",{parentName:"p"},"Load Bin")))),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/XIAO_WiFi/esp-flash-8.png",style:{width:500,height:"auto"}})),(0,a.kt)("p",null,"You will see the following output when flashing is successful"),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/XIAO_WiFi/esp-flash-9.png",style:{width:500,height:"auto"}})))}u.isMDXComponent=!0}}]);