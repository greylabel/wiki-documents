"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[56051],{3905:(e,t,i)=>{i.d(t,{Zo:()=>c,kt:()=>k});var n=i(67294);function o(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){o(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,n,o=function(e,t){if(null==e)return{};var i,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(o[i]=e[i]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}var s=n.createContext({}),d=function(e){var t=n.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},c=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var i=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(i),h=o,k=p["".concat(s,".").concat(h)]||p[h]||u[h]||r;return i?n.createElement(k,a(a({ref:t},c),{},{components:i})):n.createElement(k,a({ref:t},c))}));function k(e,t){var i=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=i.length,a=new Array(r);a[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,a[1]=l;for(var d=2;d<r;d++)a[d]=i[d];return n.createElement.apply(null,a)}return n.createElement.apply(null,i)}h.displayName="MDXCreateElement"},65404:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var n=i(87462),o=(i(67294),i(3905));const r={description:"Get_Started_with_Wio_Tracker_1110",title:"Get Started",keywords:["Tracker","Wio"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Get_Started_with_Wio-Trakcer_1110",last_update:{date:"9/11/2023",author:"Jessie"}},a=void 0,l={unversionedId:"Sensor/Wio_Series/Wio_Tracker_1110_Dev_Board/Get_Started",id:"Sensor/Wio_Series/Wio_Tracker_1110_Dev_Board/Get_Started",title:"Get Started",description:"Get_Started_with_Wio_Tracker_1110",source:"@site/docs/Sensor/Wio_Series/Wio_Tracker_1110_Dev_Board/Get_Started.md",sourceDirName:"Sensor/Wio_Series/Wio_Tracker_1110_Dev_Board",slug:"/Get_Started_with_Wio-Trakcer_1110",permalink:"/Get_Started_with_Wio-Trakcer_1110",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Wio_Series/Wio_Tracker_1110_Dev_Board/Get_Started.md",tags:[],version:"current",lastUpdatedBy:"Jessie",lastUpdatedAt:1694390400,formattedLastUpdatedAt:"Sep 11, 2023",frontMatter:{description:"Get_Started_with_Wio_Tracker_1110",title:"Get Started",keywords:["Tracker","Wio"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Get_Started_with_Wio-Trakcer_1110",last_update:{date:"9/11/2023",author:"Jessie"}},sidebar:"ProductSidebar",previous:{title:"Wio Tracker 1110 Introduction",permalink:"/Wio-Tracker_Introduction"},next:{title:"Introduction",permalink:"/Wio-WM1110_Dev_Kit/Introduction"}},s={},d=[{value:"Setup your toolchian",id:"setup-your-toolchian",level:3},{value:"Install Arduino IDE",id:"install-arduino-ide",level:4},{value:"Add Seeed Board",id:"add-seeed-board",level:4},{value:"Wio Tracker 1110 examples",id:"wio-tracker-1110-examples",level:4},{value:"Configure the region",id:"configure-the-region",level:3},{value:"Bind the dev board",id:"bind-the-dev-board",level:3},{value:"Add Grove Sensor(optional)",id:"add-grove-sensoroptional",level:3},{value:"Check the data",id:"check-the-data",level:3}],c={toc:d};function p(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In this tutorial, we will guide users to quickly set up the Wio Tracker 1110 development board through the factory firmware, connect it to SenseCAP cloud and check the data."),(0,o.kt)("h3",{id:"setup-your-toolchian"},"Setup your toolchian"),(0,o.kt)("h4",{id:"install-arduino-ide"},"Install Arduino IDE"),(0,o.kt)("p",null,"The Arduino IDE (Integrated Development Environment) is an open-source software, mainly used for writing, compiling & uploading code to almost all Arduino Modules.\nIt is available for all operating systems i.e. MAC, Windows, Linux and runs on the Java Platform that comes with inbuilt functions and commands that play a vital role in debugging, editing and compiling the code."),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/arduino-wio.png",alt:"pir",width:800,height:"auto"})),(0,o.kt)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,o.kt)("a",{class:"get_one_now_item",href:"https://www.arduino.cc/en/software"},(0,o.kt)("strong",null,(0,o.kt)("span",null,(0,o.kt)("font",{color:"FFFFFF",size:"4"}," Arduino IDE Download "))))),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"If this is your first time using Arduino, we highly recommend you to refer to ",(0,o.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Getting_Started_with_Arduino/"},"Getting Started with Arduino"),".")),(0,o.kt)("h4",{id:"add-seeed-board"},"Add Seeed Board"),(0,o.kt)("p",null,"Navigate to ",(0,o.kt)("inlineCode",{parentName:"p"},"Arduino IDE")," -> ",(0,o.kt)("inlineCode",{parentName:"p"},"Preferences")),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/arduino-add.png",alt:"pir",width:800,height:"auto"})),(0,o.kt)("p",null,"Copy this URL to ",(0,o.kt)("inlineCode",{parentName:"p"},"Additional boards manager URLs"),", then click ",(0,o.kt)("inlineCode",{parentName:"p"},"OK"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"https://files.seeedstudio.com/arduino/package_seeeduino_boards_index.json\n")),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/copy-urls.png",alt:"pir",width:800,height:"auto"})),(0,o.kt)("p",null,"Click ",(0,o.kt)("inlineCode",{parentName:"p"},"Board Manager"),".\nSearch ",(0,o.kt)("inlineCode",{parentName:"p"},"Seeed nRF52 Boards")," and install it."),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/install-boa.png",alt:"pir",width:800,height:"auto"})),(0,o.kt)("p",null,"Then need to select the Board and Port.",(0,o.kt)("br",null),"\nSearch ",(0,o.kt)("inlineCode",{parentName:"p"},"Seeed Wio Tracker 1110")," and select it, choose the port and click ",(0,o.kt)("inlineCode",{parentName:"p"},"OK"),"."),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/port.png",alt:"pir",width:800,height:"auto"})),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"The port should be like 'Serial Port(USB)'")),(0,o.kt)("h4",{id:"wio-tracker-1110-examples"},"Wio Tracker 1110 examples"),(0,o.kt)("p",null,"SenseCAP provides ",(0,o.kt)("inlineCode",{parentName:"p"},"Wio Tracker 1110 Examples")," for users to get started quickly."),(0,o.kt)("p",null,"Navigate to the ",(0,o.kt)("inlineCode",{parentName:"p"},"File")," tab, select ",(0,o.kt)("inlineCode",{parentName:"p"},"Example"),"-> ",(0,o.kt)("inlineCode",{parentName:"p"},"Wio Tracker 1110 Examples"),", then choose the one you need."),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/example.png",alt:"pir",width:800,height:"auto"})),(0,o.kt)("h3",{id:"configure-the-region"},"Configure the region"),(0,o.kt)("p",null,"The default region of the factory firmware is EU868, to configure the region, replace the 'Region' part in the LoRaWAN example."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"REGION = SMTC_MODEM_REGION_'Region'\n")),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/set-region.png",alt:"pir",width:800,height:"auto"})),(0,o.kt)("h3",{id:"bind-the-dev-board"},"Bind the dev board"),(0,o.kt)("p",null,"Download the SenseCAP Mate APP."),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Tracker/app_downlaod.png",alt:"pir",width:500,height:"auto"})),(0,o.kt)("admonition",{title:"Note",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Please select the ",(0,o.kt)("strong",{parentName:"p"},"Global")," version when registering.")),(0,o.kt)("p",null,"Click ",(0,o.kt)("inlineCode",{parentName:"p"},"+")," -> ",(0,o.kt)("inlineCode",{parentName:"p"},"Add Device"),"."),(0,o.kt)("p",null,"Then scan the QR code on the board label."),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/bind-board.png",alt:"pir",width:500,height:"auto"})),(0,o.kt)("p",null,"Name your device and select the ",(0,o.kt)("inlineCode",{parentName:"p"},"Device Group"),"(optional), then click ",(0,o.kt)("inlineCode",{parentName:"p"},"Bind to account"),".",(0,o.kt)("br",null)),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/bind-dev.png",alt:"pir",width:300,height:"auto"})),(0,o.kt)("p",null,"Go back to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Device")," page, then you will see the dev board has been bound."),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/bind-done.png",alt:"pir",width:300,height:"auto"})),(0,o.kt)("h3",{id:"add-grove-sensoroptional"},"Add Grove Sensor(optional)"),(0,o.kt)("p",null,"In addition to the onboard sensors, the possibilities of the Wio-tracker 1110 dev board are endless. The Grove sensor in the following list is also allowed to access the dev board and is automatically recognised."),(0,o.kt)("table",{align:"center"},(0,o.kt)("caption",null," ",(0,o.kt)("h2",null,"Grove Modules")," "),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("h4",null,"Sensor")),(0,o.kt)("td",null,(0,o.kt)("h4",null,"Get One Now")),(0,o.kt)("td",null,(0,o.kt)("h4",null,"Sensor")),(0,o.kt)("td",null,(0,o.kt)("h4",null,"Get One Now"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,"Sound Sensor-Based on LM358 amplifier"),(0,o.kt)("td",null,(0,o.kt)("div",{class:"document"},(0,o.kt)("a",{href:"https://www.seeedstudio.com/Grove-Sound-Sensor-Based-on-LM358-amplifier-Arduino-Compatible.html",target:"_blank",rel:"noopener"},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-Analog-Microphone/img/c_6.png",alt:"",width:200,height:"auto"})))),(0,o.kt)("td",null,"High Precision Barometer Sensor-DPS310"),(0,o.kt)("td",null,(0,o.kt)("div",{class:"document"},(0,o.kt)("a",{href:"https://www.seeedstudio.com/Grove-High-Precision-Barometer-Sensor-DPS310-p-4397.html",target:"_blank",rel:"noopener"},(0,o.kt)("img",{src:"https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/g/r/grove-high-precision-barometer-sensor-dps310-preview.jpg",alt:"",width:200,height:"auto"}))))),(0,o.kt)("tr",null,(0,o.kt)("td",null,"Air Quality Sensor(SGP41)"),(0,o.kt)("td",null,(0,o.kt)("div",{class:"document"},(0,o.kt)("a",{href:"https://www.seeedstudio.com/Grove-Air-Quality-Sensor-SGP41-p-5687.html",target:"_blank",rel:"noopener"},(0,o.kt)("img",{src:"https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-voc-and-eco2-gas-sensor_sgp41_-v1.0-45font.jpg",alt:"",width:200,height:"auto"})))),(0,o.kt)("td",null,"Sunlight sensor-SI1151"),(0,o.kt)("td",null,(0,o.kt)("div",{class:"document"},(0,o.kt)("a",{href:"https://www.seeedstudio.com/Grove-Sunlight-Sensor.html",target:"_blank",rel:"noopener"},(0,o.kt)("img",{src:"https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/h/t/httpsstatics3.seeedstudio.comseeedfile2018-07bazaar885583_3.jpg",alt:"",width:200,height:"auto"}))))),(0,o.kt)("tr",null,(0,o.kt)("td",null,"Ultrasonic Distance Sensor"),(0,o.kt)("td",null,(0,o.kt)("div",{class:"document"},(0,o.kt)("a",{href:"https://www.seeedstudio.com/Grove-Ultrasonic-Distance-Sensor.html",target:"_blank",rel:"noopener"},(0,o.kt)("img",{src:"https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/g/r/grove---ultrasonic-distance-sensor-preview_1.png",alt:"",width:200,height:"auto"}))))))),(0,o.kt)("p",null,"You can also use a ",(0,o.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Grove-I2C-Hub.html"},"Grove-I2C Hub")," to connect multiply I2C sensors to the board."),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/introduction/perphi.jpeg",alt:"pir",width:1e3,height:"auto"})),(0,o.kt)("h3",{id:"check-the-data"},"Check the data"),(0,o.kt)("p",null,"Power on the dev board, and please make sure you have network coverage nearby\uff0cwhen the dev board is successfully connected to the network, it will show ",(0,o.kt)("inlineCode",{parentName:"p"},"online")," on the ",(0,o.kt)("inlineCode",{parentName:"p"},"Device")," page."),(0,o.kt)("p",null,"If your area suffers from poor signal, just simply install a LoRaWAN gateway - it's as simple as setting up a Wi-Fi router. The beauty of LoRa lies in its flexibility and ease of network expansion. This reliable solution is also cost-effective. For instance, the ",(0,o.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-EU868-p-5471.html"},"SenseCAP M2 Indoor LoRaWAN Gateway"),",it can extend your coverage up to 10km!"),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://wdcdn.qpic.cn/MTY4ODg1NTkyNTI4NTI1MQ_873855_RPfBjpKfW2xWddri_1693817031?w=680&h=446&type=image/png",alt:"pir",width:600,height:"auto"})),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Please put your dev board by the window or in an unobstructed place, so that there will be a better GPS signal, and then the board can successfully obtain the location data.")),(0,o.kt)("p",null,"You can check the location and sensor data on SenseCAP Mate APP or SenseCAP Portal."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"SenseCAP Mate APP")),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/app-data.png",alt:"pir",width:500,height:"auto"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"SenseCAP Portal")),(0,o.kt)("p",null,"If you have created an account through the APP, you can log in directly.\nNavigate to your device page, click ",(0,o.kt)("inlineCode",{parentName:"p"},"Data")," to check."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("a",{parentName:"p",href:"https://sensecap-docs.seeed.cc/quickstart.html"},"SenseCAP Portal User Guide"))),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/por.png",alt:"pir",width:800,height:"auto"})),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/portal-da.png",alt:"pir",width:800,height:"auto"})))}p.isMDXComponent=!0}}]);