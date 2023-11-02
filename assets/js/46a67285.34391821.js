"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[87381],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),c=s(n),h=a,m=c["".concat(l,".").concat(h)]||c[h]||u[h]||i;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=h;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d[c]="string"==typeof e?e:a,o[1]=d;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},82930:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>d,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const i={description:"Create a doc page with rich content.",title:"IO Expander for XIAO",image:"https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png",slug:"/io_expander_for_xiao",last_update:{date:"09/18/2023",author:"Stephen Lo"}},o=void 0,d={unversionedId:"Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_Expansion_board/gpio_expander_for_xiao",id:"Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_Expansion_board/gpio_expander_for_xiao",title:"IO Expander for XIAO",description:"Create a doc page with rich content.",source:"@site/docs/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_Expansion_board/gpio_expander_for_xiao.md",sourceDirName:"Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_Expansion_board",slug:"/io_expander_for_xiao",permalink:"/io_expander_for_xiao",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_Expansion_board/gpio_expander_for_xiao.md",tags:[],version:"current",lastUpdatedBy:"Stephen Lo",lastUpdatedAt:1694995200,formattedLastUpdatedAt:"Sep 18, 2023",frontMatter:{description:"Create a doc page with rich content.",title:"IO Expander for XIAO",image:"https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png",slug:"/io_expander_for_xiao",last_update:{date:"09/18/2023",author:"Stephen Lo"}},sidebar:"ProductSidebar",previous:{title:"Getting Started with 6x10 RGB MATRIX for XIAO",permalink:"/rgb_matrix_for_xiao"},next:{title:"XIAO eInk Expansion Board",permalink:"/XIAO-eInk-Expansion-Board"}},l={},s=[{value:"Features",id:"features",level:2},{value:"Specification",id:"specification",level:2},{value:"Applications",id:"applications",level:2},{value:"Hardware Overview",id:"hardware-overview",level:2},{value:"0. Standard XIAO Pads",id:"0-standard-xiao-pads",level:3},{value:"1. J1 Pads",id:"1-j1-pads",level:3},{value:"2. MCP23017 Chip",id:"2-mcp23017-chip",level:3},{value:"3. J2 Pads",id:"3-j2-pads",level:3},{value:"4. MCP23017 Output Pins",id:"4-mcp23017-output-pins",level:3},{value:"5. Grove Pads",id:"5-grove-pads",level:3},{value:"6. VCC Pin",id:"6-vcc-pin",level:3},{value:"7. GND Pin",id:"7-gnd-pin",level:3},{value:"8. Additional Output Pads",id:"8-additional-output-pads",level:3},{value:"Getting Started",id:"getting-started",level:2},{value:"Hardware Preparation",id:"hardware-preparation",level:3},{value:"Software Preparation",id:"software-preparation",level:3},{value:"Demo: IO output high and low level",id:"demo-io-output-high-and-low-level",level:2},{value:"Pin Addressing",id:"pin-addressing",level:3},{value:"FAQ",id:"faq",level:2},{value:"1. Why isn&#39;t my IO Expander for XIAO responding?",id:"1-why-isnt-my-io-expander-for-xiao-responding",level:3},{value:"2. Can I use the IO Expander for XIAO with other microcontrollers?",id:"2-can-i-use-the-io-expander-for-xiao-with-other-microcontrollers",level:3},{value:"3. How do I change the I2C address of the MCP23017 chip on the IO Expander for XIAO?",id:"3-how-do-i-change-the-i2c-address-of-the-mcp23017-chip-on-the-io-expander-for-xiao",level:3},{value:"4. I&#39;m getting noise or erratic behavior on my IO pins. What could be the cause?",id:"4-im-getting-noise-or-erratic-behavior-on-my-io-pins-what-could-be-the-cause",level:3},{value:"Resources",id:"resources",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],p={toc:s};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/gpio-expander-for-xiao/1.jpg",alt:"pir",width:500,height:"auto"})),(0,a.kt)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,a.kt)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/GPIO-Expander-for-XIAO-p-5795.html"},(0,a.kt)("strong",null,(0,a.kt)("span",null,(0,a.kt)("font",{color:"FFFFFF",size:"4"}," Get One Now \ud83d\uddb1\ufe0f"))))),(0,a.kt)("br",null),(0,a.kt)("p",null,"The IO Expander for XIAO is a state-of-the-art expansion board designed to enhance the capabilities of the Seeed Studio XIAO series. Powered by the MCP23017 chip, this board offers an additional 16 IO pins, allowing users to expand their projects without constraints. Whether you're a hobbyist looking to experiment with more components or a professional seeking a reliable IO expansion solution, this board is tailored to meet your needs. Its compatibility with the XIAO series ensures seamless integration, making your development process smoother and more efficient."),(0,a.kt)("h2",{id:"features"},"Features"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Seamless Integration with XIAO: Designed to work perfectly with the Seeed Studio XIAO series."),(0,a.kt)("li",{parentName:"ul"},"16 Additional IO Pins: Powered by the MCP23017, it provides 16 extra IO pins for your projects."),(0,a.kt)("li",{parentName:"ul"},"I2C Interface with Configurable Address: Default I2C address is 0x21, but can be configured to 0x20."),(0,a.kt)("li",{parentName:"ul"},"Robust Design: Built with high-quality materials to ensure longevity and reliability.")),(0,a.kt)("h2",{id:"specification"},"Specification"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Chip: MCP23017"),(0,a.kt)("li",{parentName:"ul"},"Number of IO Pins: 16"),(0,a.kt)("li",{parentName:"ul"},"Communication Protocol: I2C"),(0,a.kt)("li",{parentName:"ul"},"Default I2C Address: 0x21 (Configurable to 0x20)"),(0,a.kt)("li",{parentName:"ul"},"Operating Voltage: 3.3V"),(0,a.kt)("li",{parentName:"ul"},"Dimensions: 21mm x 17mm")),(0,a.kt)("h2",{id:"applications"},"Applications"),(0,a.kt)("p",null,"The IO Expander for XIAO is versatile and can be used in a multitude of applications, including but not limited to:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Home Automation Systems: Expand the number of devices you can control in your smart home setup."),(0,a.kt)("li",{parentName:"ul"},"Robotics: Add more sensors, motors, or other components to your robot without running out of IO pins."),(0,a.kt)("li",{parentName:"ul"},"Gaming Consoles: Design custom controllers or other peripherals with a plethora of buttons and switches."),(0,a.kt)("li",{parentName:"ul"},"Industrial Control Systems: Manage more devices and sensors in your industrial setup."),(0,a.kt)("li",{parentName:"ul"},"Educational Projects: Teach students about microcontrollers and electronics without being limited by the number of IO pins.")),(0,a.kt)("h2",{id:"hardware-overview"},"Hardware Overview"),(0,a.kt)("p",null,"This section provides a detailed overview of the various components and interfaces on the XIAO IO Expander Board."),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/gpio-expander-for-xiao/2.png",alt:"pir",width:800,height:"auto"})),(0,a.kt)("h3",{id:"0-standard-xiao-pads"},"0. Standard XIAO Pads"),(0,a.kt)("p",null,"These are the standard pads for connecting the XIAO microcontroller."),(0,a.kt)("h3",{id:"1-j1-pads"},"1. J1 Pads"),(0,a.kt)("p",null,"The J1 pads allow users to decide whether to connect the MCP23017's RST, INTB, and INTA pins to the XIAO's D6, D1, and D0 pins through soldering. From top to bottom, they are RST, INTB, INTA."),(0,a.kt)("p",null,"By default, when you use the Expansion Board, the Additional Output Pads in area 8 are enabled. If you don't want to enable them, you need to cut the two adjacent pads in area J1 with a knife."),(0,a.kt)("h3",{id:"2-mcp23017-chip"},"2. MCP23017 Chip"),(0,a.kt)("p",null,"This is the main I/O expander chip, providing an additional 16 IOs."),(0,a.kt)("h3",{id:"3-j2-pads"},"3. J2 Pads"),(0,a.kt)("p",null,"This pad is for selecting the I2C address. The default address is 0x21. If you solder this pad, the address can be changed to 0x20."),(0,a.kt)("h3",{id:"4-mcp23017-output-pins"},"4. MCP23017 Output Pins"),(0,a.kt)("p",null,"These are the output pins from the MCP23017 chip. Each pin's definition can be seen on the back of the board. They range from PA0 to PB7, providing a total of 16 IOs."),(0,a.kt)("h3",{id:"5-grove-pads"},"5. Grove Pads"),(0,a.kt)("p",null,"If you wish to connect a Grove module, you can solder the provided Grove socket. This Grove interface is connected to the I2C bus. If you choose to use the IIC pins here, then you will not be able to use the extended IO pins in area 4."),(0,a.kt)("h3",{id:"6-vcc-pin"},"6. VCC Pin"),(0,a.kt)("p",null,"This is an output pin that can be used to power other components."),(0,a.kt)("h3",{id:"7-gnd-pin"},"7. GND Pin"),(0,a.kt)("p",null,"This is also an output pin that can be used for grounding other components."),(0,a.kt)("h3",{id:"8-additional-output-pads"},"8. Additional Output Pads"),(0,a.kt)("p",null,"These are some additional output pads, including GND, INTB, INTA, RST. If you wish to solder these pins for use elsewhere, you can do so."),(0,a.kt)("h2",{id:"getting-started"},"Getting Started"),(0,a.kt)("p",null,"Welcome to the quick start guide for the IO Expander for XIAO. This guide aims to help you set up and get started with your new IO Expander board in conjunction with the XIAO RP2040 main controller."),(0,a.kt)("h3",{id:"hardware-preparation"},"Hardware Preparation"),(0,a.kt)("p",null,"There are three main ways to use this expansion board, "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Mode 1: SMD")),(0,a.kt)("p",null,"If your XIAO is unsoldered pins, then you can choose the direct SMD method to solder the XIAO and the expansion board to the PCB board to use the function of GPIO expansion."),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/gpio-expander-for-xiao/4.jpg",alt:"pir",width:800,height:"auto"})),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"The PCBs pictured are for display only and were not on the shelves for sale as of the article.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Mode 2: XIAO connects directly with the expansion board through the row of pins")),(0,a.kt)("p",null,"In this approach, you have the option of soldering connecting wires directly to the GPIO expansion board to connect your target device."),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/gpio-expander-for-xiao/5.jpg",alt:"pir",width:800,height:"auto"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Mode 3: XIAO connects with the expansion board through the long row of pins, and the expansion board is expanded by soldering the row of pins")),(0,a.kt)("p",null,"With this connection method, you are free to install DuPont cables to the GPIO expansion board. Convenient wiring for your application."),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/gpio-expander-for-xiao/6.jpg",alt:"pir",width:800,height:"auto"})),(0,a.kt)("p",null,"Once the soldering is complete, you can proceed to connect the expansion board to the XIAO RP2040 main controller."),(0,a.kt)("p",null,"For programming the XIAO RP2040, you'll need a TYPE-C USB data cable. Connect one end to the XIAO RP2040 and the other to your computer. For a detailed guide on programming the XIAO RP2040, please refer to this ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/XIAO-RP2040/"},"Wiki"),"."),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/gpio-expander-for-xiao/3.jpg",alt:"pir",width:600,height:"auto"})),(0,a.kt)("h3",{id:"software-preparation"},"Software Preparation"),(0,a.kt)("p",null,"Before you can start programming the board, you'll need a specific library for XIAO. Download the MCP23017 library from this ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/limengdu/Adafruit-MCP23017-Arduino-Library"},"GitHub link"),". Once downloaded, install the library in your programming environment."),(0,a.kt)("div",{class:"github_container",style:{textAlign:"center"}},(0,a.kt)("a",{class:"github_item",href:"https://github.com/limengdu/Adafruit-MCP23017-Arduino-Library"},(0,a.kt)("strong",null,(0,a.kt)("span",null,(0,a.kt)("font",{color:"FFFFFF",size:"4"}," Download the Library")))," ",(0,a.kt)("svg",{"aria-hidden":"true",focusable:"false",role:"img",className:"mr-2",viewBox:"-3 10 9 1",width:16,height:16,fill:"currentColor",style:{textAlign:"center",display:"inline-block",userSelect:"none",verticalAlign:"text-bottom",overflow:"visible"}},(0,a.kt)("path",{d:"M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"})))),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"demo-io-output-high-and-low-level"},"Demo: IO output high and low level"),(0,a.kt)("p",null,"In the Arduino IDE, open a new sketch and copy the following example code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},'#include <Adafruit_MCP23X17.h>\n\nAdafruit_MCP23X17 mcp;\n\nvoid setup() {\n    Serial.begin(9600);\n    Serial.println("MCP23xxx Blink Test!");\n    if (!mcp.begin_I2C()) {\n        Serial.println("Error.");\n        while (1);\n    }\n\n    Serial.println("Looping...");\n\n    for(int i=0; i<16; i++) {\n        mcp.pinMode(i, OUTPUT);\n    }\n}\n\nvoid loop() {\n    mcp.digitalWrite(15, LOW); //PB7\n    mcp.digitalWrite(14, HIGH); //PB6\n    mcp.digitalWrite(13, HIGH); //PB5\n    mcp.digitalWrite(12, HIGH); //PB4\n    mcp.digitalWrite(11, HIGH); //PB3\n    mcp.digitalWrite(10, HIGH); //PB2\n    mcp.digitalWrite(9, HIGH); //PB1\n    mcp.digitalWrite(8, HIGH); //PB0\n    mcp.digitalWrite(7, HIGH); //PA7\n    mcp.digitalWrite(6, HIGH); //PA6\n    mcp.digitalWrite(5, HIGH); //PA5\n    mcp.digitalWrite(4, HIGH); //PA4\n    mcp.digitalWrite(3, HIGH); //PA3\n    mcp.digitalWrite(2, HIGH); //PA2\n    mcp.digitalWrite(1, HIGH); //PA1\n    mcp.digitalWrite(0, HIGH); //PA0\n    delay(1000);\n}\n')),(0,a.kt)("p",null,"Upload the above code to your XIAO. After the code is successfully uploaded, you will see that all pins are 3.3V high except for the PB7 pin."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"This expansion board can only use digital inputs and outputs, not PWM or analog input and output functions.")),(0,a.kt)("h3",{id:"pin-addressing"},"Pin Addressing"),(0,a.kt)("p",null,"When using single pin operations such as ",(0,a.kt)("em",{parentName:"p"},"pinMode(pinId, dir)")," or ",(0,a.kt)("em",{parentName:"p"},"digitalRead(pinId)"),"  or ",(0,a.kt)("em",{parentName:"p"},"digitalWrite(pinId, val)")," then the pins are addressed using the ID's below. For example, for set the mode of ",(0,a.kt)("em",{parentName:"p"},"GPB0")," then use ",(0,a.kt)("em",{parentName:"p"},"pinMode(8, ...)"),". ",(0,a.kt)("strong",{parentName:"p"},"NOTE")," The MCP23008 and MCP23S08 only have ",(0,a.kt)("em",{parentName:"p"},"GPAx")," pins."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"MCP23x17 Pin #"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Pin Name"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Pin ID"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"21"),(0,a.kt)("td",{parentName:"tr",align:"center"},"GPA0"),(0,a.kt)("td",{parentName:"tr",align:"center"},"0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"22"),(0,a.kt)("td",{parentName:"tr",align:"center"},"GPA1"),(0,a.kt)("td",{parentName:"tr",align:"center"},"1")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"23"),(0,a.kt)("td",{parentName:"tr",align:"center"},"GPA2"),(0,a.kt)("td",{parentName:"tr",align:"center"},"2")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"24"),(0,a.kt)("td",{parentName:"tr",align:"center"},"GPA3"),(0,a.kt)("td",{parentName:"tr",align:"center"},"3")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"25"),(0,a.kt)("td",{parentName:"tr",align:"center"},"GPA4"),(0,a.kt)("td",{parentName:"tr",align:"center"},"4")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"26"),(0,a.kt)("td",{parentName:"tr",align:"center"},"GPA5"),(0,a.kt)("td",{parentName:"tr",align:"center"},"5")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"27"),(0,a.kt)("td",{parentName:"tr",align:"center"},"GPA6"),(0,a.kt)("td",{parentName:"tr",align:"center"},"6")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"28"),(0,a.kt)("td",{parentName:"tr",align:"center"},"GPA7"),(0,a.kt)("td",{parentName:"tr",align:"center"},"7")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"1"),(0,a.kt)("td",{parentName:"tr",align:"center"},"GPB0"),(0,a.kt)("td",{parentName:"tr",align:"center"},"8")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"2"),(0,a.kt)("td",{parentName:"tr",align:"center"},"GPB1"),(0,a.kt)("td",{parentName:"tr",align:"center"},"9")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"3"),(0,a.kt)("td",{parentName:"tr",align:"center"},"GPB2"),(0,a.kt)("td",{parentName:"tr",align:"center"},"10")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"4"),(0,a.kt)("td",{parentName:"tr",align:"center"},"GPB3"),(0,a.kt)("td",{parentName:"tr",align:"center"},"11")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"5"),(0,a.kt)("td",{parentName:"tr",align:"center"},"GPB4"),(0,a.kt)("td",{parentName:"tr",align:"center"},"12")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"6"),(0,a.kt)("td",{parentName:"tr",align:"center"},"GPB5"),(0,a.kt)("td",{parentName:"tr",align:"center"},"13")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"7"),(0,a.kt)("td",{parentName:"tr",align:"center"},"GPB6"),(0,a.kt)("td",{parentName:"tr",align:"center"},"14")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"8"),(0,a.kt)("td",{parentName:"tr",align:"center"},"GPB7"),(0,a.kt)("td",{parentName:"tr",align:"center"},"15")))),(0,a.kt)("h2",{id:"faq"},"FAQ"),(0,a.kt)("h3",{id:"1-why-isnt-my-io-expander-for-xiao-responding"},"1. Why isn't my IO Expander for XIAO responding?"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Answer"),": Ensure that the XIAO module is correctly plugged into the expansion board. Also, check if the necessary libraries are installed and the correct board and port are selected in the Arduino IDE."),(0,a.kt)("h3",{id:"2-can-i-use-the-io-expander-for-xiao-with-other-microcontrollers"},"2. Can I use the IO Expander for XIAO with other microcontrollers?"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Answer"),": Yes, the IO Expander is designed primarily for the XIAO module, but it can be used with other microcontrollers that support I2C communication. You might need to adjust the code and connections accordingly."),(0,a.kt)("h3",{id:"3-how-do-i-change-the-i2c-address-of-the-mcp23017-chip-on-the-io-expander-for-xiao"},"3. How do I change the I2C address of the MCP23017 chip on the IO Expander for XIAO?"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Answer"),": The default I2C address is set to 0x21. If you want to change it to 0x20, there's a jumper labeled \"J2\" on the board. You'll need to solder the J2 jumper to change the address."),(0,a.kt)("h3",{id:"4-im-getting-noise-or-erratic-behavior-on-my-io-pins-what-could-be-the-cause"},"4. I'm getting noise or erratic behavior on my IO pins. What could be the cause?"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Answer"),": Ensure that the connections are secure and there's no interference. Using pull-up or pull-down resistors can help stabilize the input pins. Also, ensure that the power supply is stable and can provide the necessary current for all connected devices."),(0,a.kt)("h2",{id:"resources"},"Resources"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"[ZIP]")," ",(0,a.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/gpio-expander-for-xiao/XIAO_IO.zip"},"Eagle file")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"[PDF]")," ",(0,a.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/gpio-expander-for-xiao/MCP23017_Data_Sheet_DS20001952-2998473.pdf"},"Datasheet - MCP23017"))),(0,a.kt)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,a.kt)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,a.kt)("div",{class:"table-center"},(0,a.kt)("div",{class:"button_tech_support_container"},(0,a.kt)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,a.kt)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,a.kt)("div",{class:"button_tech_support_container"},(0,a.kt)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,a.kt)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"}))))}c.isMDXComponent=!0}}]);