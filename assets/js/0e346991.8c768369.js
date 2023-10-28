"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[80737],{3905:(e,t,i)=>{i.d(t,{Zo:()=>u,kt:()=>m});var n=i(67294);function l(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){l(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,n,l=function(e,t){if(null==e)return{};var i,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(l[i]=e[i]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(l[i]=e[i])}return l}var p=n.createContext({}),d=function(e){var t=n.useContext(p),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},u=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var i=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),s=d(i),k=l,m=s["".concat(p,".").concat(k)]||s[k]||c[k]||r;return i?n.createElement(m,a(a({ref:t},u),{},{components:i})):n.createElement(m,a({ref:t},u))}));function m(e,t){var i=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=i.length,a=new Array(r);a[0]=k;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[s]="string"==typeof e?e:l,a[1]=o;for(var d=2;d<r;d++)a[d]=i[d];return n.createElement.apply(null,a)}return n.createElement.apply(null,i)}k.displayName="MDXCreateElement"},63599:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>s,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var n=i(87462),l=(i(67294),i(3905));const r={description:"\u521b\u5efa\u4e00\u4e2a\u5177\u6709\u4e30\u5bcc\u5185\u5bb9\u7684\u6587\u6863\u9875\u9762",title:"XIAO\u7684IO\u6269\u6a21\u5757",image:"https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png",slug:"/cn/io_expander_for_xiao",last_update:{date:"10/26/2023",author:"\u91d1 \u83ca"}},a=void 0,o={unversionedId:"zh-CN/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_Expansion_board/cn_gpio_expander_for_xiao",id:"zh-CN/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_Expansion_board/cn_gpio_expander_for_xiao",title:"XIAO\u7684IO\u6269\u6a21\u5757",description:"\u521b\u5efa\u4e00\u4e2a\u5177\u6709\u4e30\u5bcc\u5185\u5bb9\u7684\u6587\u6863\u9875\u9762",source:"@site/docs/zh-CN/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_Expansion_board/cn_gpio_expander_for_xiao.md",sourceDirName:"zh-CN/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_Expansion_board",slug:"/cn/io_expander_for_xiao",permalink:"/cn/io_expander_for_xiao",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/zh-CN/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_Expansion_board/cn_gpio_expander_for_xiao.md",tags:[],version:"current",lastUpdatedBy:"\u91d1 \u83ca",lastUpdatedAt:1698278400,formattedLastUpdatedAt:"Oct 26, 2023",frontMatter:{description:"\u521b\u5efa\u4e00\u4e2a\u5177\u6709\u4e30\u5bcc\u5185\u5bb9\u7684\u6587\u6863\u9875\u9762",title:"XIAO\u7684IO\u6269\u6a21\u5757",image:"https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png",slug:"/cn/io_expander_for_xiao",last_update:{date:"10/26/2023",author:"\u91d1 \u83ca"}}},p={},d=[{value:"\u7279\u6027",id:"\u7279\u6027",level:2},{value:"\u89c4\u683c",id:"\u89c4\u683c",level:2},{value:"\u5e94\u7528\u9886\u57df",id:"\u5e94\u7528\u9886\u57df",level:2},{value:"\u786c\u4ef6\u6982\u8ff0",id:"\u786c\u4ef6\u6982\u8ff0",level:2},{value:"0. \u6807\u51c6XIAO\u5f15\u811a",id:"0-\u6807\u51c6xiao\u5f15\u811a",level:3},{value:"1. J1\u5f15\u811a",id:"1-j1\u5f15\u811a",level:3},{value:"2. MCP23017\u82af\u7247",id:"2-mcp23017\u82af\u7247",level:3},{value:"3. J2\u5f15\u811a",id:"3-j2\u5f15\u811a",level:3},{value:"4.MCP23017\u8f93\u51fa\u5f15\u811a",id:"4mcp23017\u8f93\u51fa\u5f15\u811a",level:3},{value:"5. Grove\u5f15\u811a",id:"5-grove\u5f15\u811a",level:3},{value:"6. VCC\u5f15\u811a",id:"6-vcc\u5f15\u811a",level:3},{value:"7. GND\u5f15\u811a",id:"7-gnd\u5f15\u811a",level:3},{value:"8. \u5176\u4ed6\u8f93\u51fa\u5f15\u811a",id:"8-\u5176\u4ed6\u8f93\u51fa\u5f15\u811a",level:3},{value:"\u5165\u95e8\u6307\u5357",id:"\u5165\u95e8\u6307\u5357",level:2},{value:"\u786c\u4ef6\u51c6\u5907",id:"\u786c\u4ef6\u51c6\u5907",level:3},{value:"\u8f6f\u4ef6\u51c6\u5907",id:"\u8f6f\u4ef6\u51c6\u5907",level:3},{value:"\u5f15\u811a\u5bfb\u5740/\u5f15\u811a\u7f16\u53f7",id:"\u5f15\u811a\u5bfb\u5740\u5f15\u811a\u7f16\u53f7",level:3},{value:"\u5e38\u89c1\u95ee\u9898\u89e3\u7b54",id:"\u5e38\u89c1\u95ee\u9898\u89e3\u7b54",level:2},{value:"1. \u4e3a\u4ec0\u4e48\u6211\u7684XIAO\u7684IO\u6269\u5c55\u677f\u6ca1\u6709\u54cd\u5e94\uff1f",id:"1-\u4e3a\u4ec0\u4e48\u6211\u7684xiao\u7684io\u6269\u5c55\u677f\u6ca1\u6709\u54cd\u5e94",level:3},{value:"2. \u6211\u53ef\u4ee5\u5c06IO\u6269\u5c55\u677f\u7528\u4e8e\u5176\u4ed6\u5fae\u63a7\u5236\u5668\u5417\uff1f",id:"2-\u6211\u53ef\u4ee5\u5c06io\u6269\u5c55\u677f\u7528\u4e8e\u5176\u4ed6\u5fae\u63a7\u5236\u5668\u5417",level:3},{value:"3. \u5982\u4f55\u66f4\u6539IO\u6269\u5c55\u677f\u4e0aMCP23017\u82af\u7247\u7684I2C\u5730\u5740\uff1f",id:"3-\u5982\u4f55\u66f4\u6539io\u6269\u5c55\u677f\u4e0amcp23017\u82af\u7247\u7684i2c\u5730\u5740",level:3},{value:"4. \u6211\u5728\u6211\u7684IO\u5f15\u811a\u4e0a\u9047\u5230\u566a\u58f0\u6216\u4e0d\u7a33\u5b9a\u7684\u884c\u4e3a\u3002\u53ef\u80fd\u7684\u539f\u56e0\u662f\u4ec0\u4e48\uff1f",id:"4-\u6211\u5728\u6211\u7684io\u5f15\u811a\u4e0a\u9047\u5230\u566a\u58f0\u6216\u4e0d\u7a33\u5b9a\u7684\u884c\u4e3a\u53ef\u80fd\u7684\u539f\u56e0\u662f\u4ec0\u4e48",level:3},{value:"\u6280\u672f\u652f\u6301\u548c\u4ea7\u54c1\u8ba8\u8bba",id:"\u6280\u672f\u652f\u6301\u548c\u4ea7\u54c1\u8ba8\u8bba",level:2}],u={toc:d};function s(e){let{components:t,...i}=e;return(0,l.kt)("wrapper",(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",{style:{textAlign:"center"}},(0,l.kt)("img",{src:"https://files.seeedstudio.com/wiki/gpio-expander-for-xiao/1.jpg",alt:"pir",width:500,height:"auto"})),(0,l.kt)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,l.kt)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/GPIO-Expander-for-XIAO-p-5795.html"},(0,l.kt)("strong",null,(0,l.kt)("span",null,(0,l.kt)("font",{color:"FFFFFF",size:"4"}," \u70b9\u51fb\u8d2d\u4e70 \ud83d\uddb1\ufe0f"))))),(0,l.kt)("br",null),(0,l.kt)("p",null,"XIAO\u7684IO\u6269\u5c55\u6a21\u5757\u662f\u4e00\u6b3e\u5148\u8fdb\u7684\u6269\u5c55\u677f\uff0c\u65e8\u5728\u589e\u5f3aSeeed Studio XIAO\u7cfb\u5217\u7684\u529f\u80fd\u3002\u8be5\u677f\u5757\u91c7\u7528MCP23017\u82af\u7247\uff0c\u63d0\u4f9b\u989d\u5916\u768416\u4e2aIO\u5f15\u811a\uff0c\u4f7f\u7528\u6237\u80fd\u591f\u5728\u9879\u76ee\u4e2d\u8fdb\u884c\u6269\u5c55\u800c\u65e0\u9700\u53d7\u9650\u3002\u65e0\u8bba\u60a8\u662f\u4e00\u4e2a\u60f3\u8981\u5c1d\u8bd5\u66f4\u591a\u7ec4\u4ef6\u7684\u7231\u597d\u8005\uff0c\u8fd8\u662f\u4e00\u4e2a\u5bfb\u6c42\u53ef\u9760\u7684IO\u6269\u5c55\u89e3\u51b3\u65b9\u6848\u7684\u4e13\u4e1a\u4eba\u58eb\uff0c\u8fd9\u4e2a\u677f\u5757\u90fd\u53ef\u4ee5\u6ee1\u8db3\u60a8\u7684\u9700\u6c42\u3002\u5b83\u4e0eXIAO\u7cfb\u5217\u7684\u517c\u5bb9\u6027\u786e\u4fdd\u4e86\u65e0\u7f1d\u96c6\u6210\uff0c\u4f7f\u60a8\u7684\u5f00\u53d1\u8fc7\u7a0b\u66f4\u52a0\u987a\u7545\u9ad8\u6548\u3002"),(0,l.kt)("h2",{id:"\u7279\u6027"},"\u7279\u6027"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4e0eXIAO\u7684\u65e0\u7f1d\u96c6\u6210\uff1a\u4e13\u4e3a\u4e0eSeeed Studio XIAO\u7cfb\u5217\u5b8c\u7f8e\u914d\u5408\u8bbe\u8ba1\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u989d\u5916\u768416\u4e2aIO\u5f15\u811a\uff1a\u91c7\u7528MCP23017\u82af\u7247\uff0c\u4e3a\u60a8\u7684\u9879\u76ee\u63d0\u4f9b\u4e8616\u4e2a\u989d\u5916\u7684IO\u5f15\u811a\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u53ef\u914d\u7f6e\u5730\u5740\u7684I2C\u63a5\u53e3\uff1a\u9ed8\u8ba4\u7684I2C\u5730\u5740\u4e3a0x21\uff0c\u4f46\u53ef\u4ee5\u914d\u7f6e\u4e3a0x20\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u575a\u56fa\u7684\u8bbe\u8ba1\uff1a\u91c7\u7528\u9ad8\u54c1\u8d28\u6750\u6599\u6784\u5efa\uff0c\u4ee5\u786e\u4fdd\u957f\u4e45\u8010\u7528\u548c\u53ef\u9760\u6027\u3002")),(0,l.kt)("h2",{id:"\u89c4\u683c"},"\u89c4\u683c"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u82af\u7247: MCP23017"),(0,l.kt)("li",{parentName:"ul"},"IO\u5f15\u811a\u6570\u91cf\uff1a16\u4e2a"),(0,l.kt)("li",{parentName:"ul"},"\u901a\u4fe1\u534f\u8bae\uff1aI2C"),(0,l.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4I2C\u5730\u5740\uff1a0x21\uff08\u53ef\u914d\u7f6e\u4e3a0x20\uff09"),(0,l.kt)("li",{parentName:"ul"},"\u5de5\u4f5c\u7535\u538b\uff1a3.3V"),(0,l.kt)("li",{parentName:"ul"},"\u5c3a\u5bf8\uff1a21mm x 17mm")),(0,l.kt)("h2",{id:"\u5e94\u7528\u9886\u57df"},"\u5e94\u7528\u9886\u57df"),(0,l.kt)("p",null,"XIAO\u7684IO\u6269\u5c55\u5668\u975e\u5e38\u7075\u6d3b\uff0c\u53ef\u4ee5\u5e94\u7528\u4e8e\u591a\u79cd\u5e94\u7528\u9886\u57df\uff0c\u5305\u62ec\u4f46\u4e0d\u9650\u4e8e\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5bb6\u5ead\u81ea\u52a8\u5316\u7cfb\u7edf\uff1a\u6269\u5c55\u60a8\u5728\u667a\u80fd\u5bb6\u5c45\u8bbe\u7f6e\u4e2d\u53ef\u4ee5\u63a7\u5236\u7684\u8bbe\u5907\u6570\u91cf\u3002\n-\u673a\u5668\u4eba\u6280\u672f\uff1a\u5728\u673a\u5668\u4eba\u4e0a\u6dfb\u52a0\u66f4\u591a\u7684\u4f20\u611f\u5668\u3001\u7535\u673a\u6216\u5176\u4ed6\u7ec4\u4ef6\uff0c\u800c\u4e0d\u4f1a\u8017\u5c3dIO\u5f15\u811a\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u6e38\u620f\u4e3b\u673a\uff1a\u8bbe\u8ba1\u5177\u6709\u5927\u91cf\u6309\u94ae\u548c\u5f00\u5173\u7684\u81ea\u5b9a\u4e49\u63a7\u5236\u5668\u6216\u5176\u4ed6\u5916\u56f4\u8bbe\u5907\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5de5\u4e1a\u63a7\u5236\u7cfb\u7edf\uff1a\u5728\u5de5\u4e1a\u73af\u5883\u4e2d\u7ba1\u7406\u66f4\u591a\u7684\u8bbe\u5907\u548c\u4f20\u611f\u5668\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u6559\u80b2\u9879\u76ee\uff1a\u5728\u6559\u5b66\u9879\u76ee\u4e2d\u5411\u5b66\u751f\u4ecb\u7ecd\u5fae\u63a7\u5236\u5668\u548c\u7535\u5b50\u5b66\uff0c\u4e0d\u53d7IO\u5f15\u811a\u6570\u91cf\u7684\u9650\u5236\u3002")),(0,l.kt)("h2",{id:"\u786c\u4ef6\u6982\u8ff0"},"\u786c\u4ef6\u6982\u8ff0"),(0,l.kt)("p",null,"\u672c\u8282\u5c06\u8be6\u7ec6\u4ecb\u7ecdXIAO IO\u6269\u5c55\u677f\u4e0a\u7684\u5404\u79cd\u7ec4\u4ef6\u548c\u63a5\u53e3\u3002"),(0,l.kt)("p",{style:{textAlign:"center"}},(0,l.kt)("img",{src:"https://files.seeedstudio.com/wiki/gpio-expander-for-xiao/2.png",alt:"pir",width:800,height:"auto"})),(0,l.kt)("h3",{id:"0-\u6807\u51c6xiao\u5f15\u811a"},"0. \u6807\u51c6XIAO\u5f15\u811a"),(0,l.kt)("p",null,"\u8fd9\u4e9b\u662f\u7528\u4e8e\u8fde\u63a5XIAO\u5fae\u63a7\u5236\u5668\u7684\u6807\u51c6\u5f15\u811a\u3002"),(0,l.kt)("h3",{id:"1-j1\u5f15\u811a"},"1. J1\u5f15\u811a"),(0,l.kt)("p",null,"J1\u5f15\u811a\u5141\u8bb8\u7528\u6237\u901a\u8fc7\u710a\u63a5\u51b3\u5b9a\u662f\u5426\u5c06MCP23017\u7684RST\u3001INTB\u548cINTA\u5f15\u811a\u8fde\u63a5\u5230XIAO\u7684D6\u3001D1\u548cD0\u5f15\u811a\u3002\u4ece\u4e0a\u5230\u4e0b\uff0c\u5b83\u4eec\u5206\u522b\u662fRST\u3001INTB\u3001INTA\u3002"),(0,l.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u5f53\u60a8\u4f7f\u7528\u6269\u5c55\u677f\u65f6\uff0c\u533a\u57df8\u7684\u9644\u52a0\u8f93\u51fa\u5f15\u811a\u662f\u542f\u7528\u7684\u3002\u5982\u679c\u60a8\u4e0d\u60f3\u542f\u7528\u5b83\u4eec\uff0c\u60a8\u9700\u8981\u4f7f\u7528\u5200\u7247\u5207\u5272\u533a\u57dfJ1\u4e2d\u76f8\u90bb\u7684\u4e24\u4e2a\u5f15\u811a\u3002"),(0,l.kt)("h3",{id:"2-mcp23017\u82af\u7247"},"2. MCP23017\u82af\u7247"),(0,l.kt)("p",null,"\u8fd9\u662f\u4e3b\u8981\u7684IO\u6269\u5c55\u82af\u7247\uff0c\u63d0\u4f9b\u989d\u5916\u768416\u4e2aIO\u5f15\u811a\u3002"),(0,l.kt)("h3",{id:"3-j2\u5f15\u811a"},"3. J2\u5f15\u811a"),(0,l.kt)("p",null,"\u8fd9\u4e2a\u5f15\u811a\u7528\u4e8e\u9009\u62e9I2C\u5730\u5740\u3002\u9ed8\u8ba4\u5730\u5740\u4e3a0x21\u3002\u5982\u679c\u710a\u63a5\u6b64\u5f15\u811a\uff0c\u5730\u5740\u53ef\u4ee5\u66f4\u6539\u4e3a0x20\u3002"),(0,l.kt)("h3",{id:"4mcp23017\u8f93\u51fa\u5f15\u811a"},"4.MCP23017\u8f93\u51fa\u5f15\u811a"),(0,l.kt)("p",null,"\u8fd9\u4e9b\u662f\u6765\u81eaMCP23017\u82af\u7247\u7684\u8f93\u51fa\u5f15\u811a\u3002\u6bcf\u4e2a\u5f15\u811a\u7684\u5b9a\u4e49\u53ef\u4ee5\u5728\u677f\u5b50\u7684\u80cc\u9762\u770b\u5230\u3002\u5b83\u4eec\u4ecePA0\u5230PB7\uff0c\u5171\u63d0\u4f9b\u4e8616\u4e2aIO\u5f15\u811a\u3002"),(0,l.kt)("h3",{id:"5-grove\u5f15\u811a"},"5. Grove\u5f15\u811a"),(0,l.kt)("p",null,"\u5982\u679c\u60a8\u60f3\u8fde\u63a5Grove\u6a21\u5757\uff0c\u53ef\u4ee5\u710a\u63a5\u63d0\u4f9b\u7684Grove\u63d2\u5ea7\u3002\u8be5Grove\u63a5\u53e3\u8fde\u63a5\u5230I2C\u603b\u7ebf\u3002\u5982\u679c\u60a8\u9009\u62e9\u5728\u6b64\u5904\u4f7f\u7528IIC\u5f15\u811a\uff0c\u5219\u65e0\u6cd5\u4f7f\u7528\u533a\u57df4\u4e2d\u7684\u6269\u5c55IO\u5f15\u811a\u3002"),(0,l.kt)("h3",{id:"6-vcc\u5f15\u811a"},"6. VCC\u5f15\u811a"),(0,l.kt)("p",null,"\u8fd9\u662f\u4e00\u4e2a\u8f93\u51fa\u5f15\u811a\uff0c\u53ef\u7528\u4e8e\u4e3a\u5176\u4ed6\u7ec4\u4ef6\u4f9b\u7535\u3002"),(0,l.kt)("h3",{id:"7-gnd\u5f15\u811a"},"7. GND\u5f15\u811a"),(0,l.kt)("p",null,"\u8fd9\u4e5f\u662f\u4e00\u4e2a\u8f93\u51fa\u5f15\u811a\uff0c\u53ef\u7528\u4e8e\u63a5\u5730\u5176\u4ed6\u7ec4\u4ef6\u3002"),(0,l.kt)("h3",{id:"8-\u5176\u4ed6\u8f93\u51fa\u5f15\u811a"},"8. \u5176\u4ed6\u8f93\u51fa\u5f15\u811a"),(0,l.kt)("p",null,"\u8fd9\u4e9b\u662f\u4e00\u4e9b\u989d\u5916\u7684\u8f93\u51fa\u5f15\u811a\uff0c\u5305\u62ecGND\u3001INTB\u3001INTA\u548cRST\u3002\u5982\u679c\u60a8\u5e0c\u671b\u710a\u63a5\u8fd9\u4e9b\u5f15\u811a\u4ee5\u4f9b\u5176\u4ed6\u7528\u9014\uff0c\u8bf7\u968f\u610f\u8fd9\u6837\u505a\u3002"),(0,l.kt)("h2",{id:"\u5165\u95e8\u6307\u5357"},"\u5165\u95e8\u6307\u5357"),(0,l.kt)("p",null,"\u6b22\u8fce\u4f7f\u7528IO\u6269\u5c55\u677f\u7684\u5feb\u901f\u5165\u95e8\u6307\u5357\u3002\u672c\u6307\u5357\u65e8\u5728\u5e2e\u52a9\u60a8\u4e0eXIAO RP2040\u4e3b\u63a7\u5236\u5668\u914d\u5408\u4f7f\u7528\uff0c\u8bbe\u7f6e\u548c\u5f00\u59cb\u4f7f\u7528\u65b0\u7684IO\u6269\u5c55\u677f\u3002"),(0,l.kt)("h3",{id:"\u786c\u4ef6\u51c6\u5907"},"\u786c\u4ef6\u51c6\u5907"),(0,l.kt)("p",null,"\u6709\u4e09\u79cd\u4e3b\u8981\u7684\u4f7f\u7528\u65b9\u5f0f\uff1a"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u6a21\u5f0f1\uff1aSMD\u6a21\u5f0f")),(0,l.kt)("p",null,"\u5982\u679c\u60a8\u7684XIAO\u4e3b\u677f\u4e0a\u7684\u5f15\u811a\u672a\u710a\u63a5\uff0c\u60a8\u53ef\u4ee5\u9009\u62e9\u76f4\u63a5\u7684SMD\u65b9\u6cd5\uff0c\u5c06XIAO\u4e3b\u677f\u548c\u6269\u5c55\u677f\u710a\u63a5\u5230PCB\u677f\u4e0a\uff0c\u4ee5\u4f7f\u7528GPIO\u6269\u5c55\u529f\u80fd\u3002"),(0,l.kt)("p",{style:{textAlign:"center"}},(0,l.kt)("img",{src:"https://files.seeedstudio.com/wiki/gpio-expander-for-xiao/4.jpg",alt:"pir",width:800,height:"auto"})),(0,l.kt)("p",null,":::\u6ce8\u610f\uff1a\u6240\u793a\u7684PCB\u677f\u4ec5\u7528\u4e8e\u5c55\u793a\uff0c\u4e14\u5728\u6587\u7ae0\u53d1\u5e03\u65f6\u5e76\u672a\u4e0a\u67b6\u9500\u552e\u3002\n:::"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u6a21\u5f0f2\uff1a\u901a\u8fc7\u5f15\u811a\u6392\u7ebf\uff0cXIAO\u76f4\u63a5\u4e0e\u6269\u5c55\u677f\u8fde\u63a5")),(0,l.kt)("p",null,"\u5728\u8fd9\u79cd\u65b9\u6cd5\u4e2d\uff0c\u60a8\u53ef\u4ee5\u9009\u62e9\u5c06\u8fde\u63a5\u7ebf\u76f4\u63a5\u710a\u63a5\u5230GPIO\u6269\u5c55\u677f\u4e0a\uff0c\u4ee5\u8fde\u63a5\u60a8\u7684\u76ee\u6807\u8bbe\u5907\u3002"),(0,l.kt)("p",{style:{textAlign:"center"}},(0,l.kt)("img",{src:"https://files.seeedstudio.com/wiki/gpio-expander-for-xiao/5.jpg",alt:"pir",width:800,height:"auto"})),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u6a21\u5f0f3\uff1aXIAO\u4e3b\u677f\u901a\u8fc7\u957f\u5f15\u811a\u6392\u7ebf\u4e0e\u6269\u5c55\u677f\u8fde\u63a5\uff0c\u5e76\u901a\u8fc7\u710a\u63a5\u5f15\u811a\u6392\u7ebf\u6765\u5b9e\u73b0\u6269\u5c55\u677f\u7684\u6269\u5c55")),(0,l.kt)("p",null,"\u901a\u8fc7\u8fd9\u79cd\u8fde\u63a5\u65b9\u6cd5\uff0c\u60a8\u53ef\u4ee5\u81ea\u7531\u5730\u5b89\u88c5\u675c\u90a6\u7ebf\u5230GPIO\u6269\u5c55\u677f\u4e0a\uff0c\u4e3a\u60a8\u7684\u5e94\u7528\u63d0\u4f9b\u4fbf\u6377\u7684\u5e03\u7ebf\u65b9\u5f0f\u3002"),(0,l.kt)("p",{style:{textAlign:"center"}},(0,l.kt)("img",{src:"https://files.seeedstudio.com/wiki/gpio-expander-for-xiao/6.jpg",alt:"pir",width:800,height:"auto"})),(0,l.kt)("p",null,"\u4e00\u65e6\u710a\u63a5\u5b8c\u6210\uff0c\u60a8\u53ef\u4ee5\u5f00\u59cb\u5c06\u6269\u5c55\u677f\u8fde\u63a5\u5230XIAO RP2040\u4e3b\u63a7\u5236\u5668\u4e0a\u3002"),(0,l.kt)("p",null,"\u8981\u5bf9XIAO RP2040\u8fdb\u884c\u7f16\u7a0b\uff0c\u60a8\u5c06\u9700\u8981\u4e00\u6839TYPE-C USB\u6570\u636e\u7ebf\u3002\u5c06\u4e00\u7aef\u8fde\u63a5\u5230XIAO RP2040\uff0c\u5c06\u53e6\u4e00\u7aef\u8fde\u63a5\u5230\u60a8\u7684\u8ba1\u7b97\u673a\u4e0a\u3002\u6709\u5173\u5bf9XIAO RP2040\u8fdb\u884c\u7f16\u7a0b\u7684\u8be6\u7ec6\u6307\u5357\uff0c\u8bf7\u53c2\u8003\u8fd9\u4e2a\u94fe\u63a5",(0,l.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/XIAO-RP2040/"},"Wiki"),"\u3002"),(0,l.kt)("p",{style:{textAlign:"center"}},(0,l.kt)("img",{src:"https://files.seeedstudio.com/wiki/gpio-expander-for-xiao/3.jpg",alt:"pir",width:600,height:"auto"})),(0,l.kt)("h3",{id:"\u8f6f\u4ef6\u51c6\u5907"},"\u8f6f\u4ef6\u51c6\u5907"),(0,l.kt)("p",null,"\u5728\u5f00\u59cb\u5bf9\u677f\u5b50\u8fdb\u884c\u7f16\u7a0b\u4e4b\u524d\uff0c\u60a8\u9700\u8981\u4e00\u4e2a\u9002\u7528\u4e8eXIAO\u7684\u7279\u5b9a\u5e93\u3002\u8bf7\u4ece\u8fd9\u4e2a\u94fe\u63a5\u4e0b\u8f7dMCP23017\u5e93 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/limengdu/Adafruit-MCP23017-Arduino-Library"},"GitHub link"),"\u3002\u4e0b\u8f7d\u5b8c\u6210\u540e\uff0c\u5c06\u8be5\u5e93\u5b89\u88c5\u5230\u60a8\u7684\u7f16\u7a0b\u73af\u5883\u4e2d\u3002"),(0,l.kt)("div",{class:"github_container",style:{textAlign:"center"}},(0,l.kt)("a",{class:"github_item",href:"https://github.com/limengdu/Adafruit-MCP23017-Arduino-Library"},(0,l.kt)("strong",null,(0,l.kt)("span",null,(0,l.kt)("font",{color:"FFFFFF",size:"4"}," \u4e0b\u8f7d\u5e93\u6587\u4ef6")))," ",(0,l.kt)("svg",{"aria-hidden":"true",focusable:"false",role:"img",className:"mr-2",viewBox:"-3 10 9 1",width:16,height:16,fill:"currentColor",style:{textAlign:"center",display:"inline-block",userSelect:"none",verticalAlign:"text-bottom",overflow:"visible"}},(0,l.kt)("path",{d:"M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"})))),(0,l.kt)("br",null),(0,l.kt)("p",null,"##\u6f14\u793a\uff1aIO\u8f93\u51fa\u9ad8\u7535\u5e73\u548c\u4f4e\u7535\u5e73"),(0,l.kt)("p",null,"\u5728Arduino IDE\u4e2d\uff0c\u6253\u5f00\u4e00\u4e2a\u65b0\u7684\u4ee3\u7801\u7a97\u53e3\uff0c\u5e76\u590d\u5236\u4ee5\u4e0b\u793a\u4f8b\u4ee3\u7801\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},'#include <Adafruit_MCP23X17.h>\n\nAdafruit_MCP23X17 mcp;\n\nvoid setup() {\n    Serial.begin(9600);\n    Serial.println("MCP23xxx Blink Test!");\n    if (!mcp.begin_I2C()) {\n        Serial.println("Error.");\n        while (1);\n    }\n\n    Serial.println("Looping...");\n\n    for(int i=0; i<16; i++) {\n        mcp.pinMode(i, OUTPUT);\n    }\n}\n\nvoid loop() {\n    mcp.digitalWrite(15, LOW); //PB7\n    mcp.digitalWrite(14, HIGH); //PB6\n    mcp.digitalWrite(13, HIGH); //PB5\n    mcp.digitalWrite(12, HIGH); //PB4\n    mcp.digitalWrite(11, HIGH); //PB3\n    mcp.digitalWrite(10, HIGH); //PB2\n    mcp.digitalWrite(9, HIGH); //PB1\n    mcp.digitalWrite(8, HIGH); //PB0\n    mcp.digitalWrite(7, HIGH); //PA7\n    mcp.digitalWrite(6, HIGH); //PA6\n    mcp.digitalWrite(5, HIGH); //PA5\n    mcp.digitalWrite(4, HIGH); //PA4\n    mcp.digitalWrite(3, HIGH); //PA3\n    mcp.digitalWrite(2, HIGH); //PA2\n    mcp.digitalWrite(1, HIGH); //PA1\n    mcp.digitalWrite(0, HIGH); //PA0\n    delay(1000);\n}\n')),(0,l.kt)("p",null,"\u5c06\u4e0a\u8ff0\u4ee3\u7801\u4e0a\u4f20\u5230\u60a8\u7684XIAO\u3002\u4ee3\u7801\u6210\u529f\u4e0a\u4f20\u540e\uff0c\u60a8\u4f1a\u53d1\u73b0\u9664\u4e86PB7\u5f15\u811a\u5916\uff0c\u6240\u6709\u5f15\u811a\u90fd\u662f3.3V\u9ad8\u7535\u5e73\u3002"),(0,l.kt)("p",null,":::\u6ce8\u610f\u4e8b\u9879\uff1a\n\u8be5\u6269\u5c55\u677f\u53ea\u80fd\u4f7f\u7528\u6570\u5b57\u8f93\u5165\u548c\u8f93\u51fa\u529f\u80fd\uff0c\u4e0d\u652f\u6301PWM\u6216\u6a21\u62df\u8f93\u5165\u548c\u8f93\u51fa\u529f\u80fd\u3002\n:::"),(0,l.kt)("h3",{id:"\u5f15\u811a\u5bfb\u5740\u5f15\u811a\u7f16\u53f7"},"\u5f15\u811a\u5bfb\u5740/\u5f15\u811a\u7f16\u53f7"),(0,l.kt)("p",null,"\u5728\u4f7f\u7528\u5355\u5f15\u811a\u64cd\u4f5c\uff08\u5982",(0,l.kt)("em",{parentName:"p"},"pinMode(pinId, dir)"),"\uff0cdigitalRead(pinId)\u6216",(0,l.kt)("em",{parentName:"p"},"digitalWrite(pinId, val)\uff09\u65f6\uff0c\u5f15\u811a\u4f7f\u7528\u4e0b\u9762\u7684ID\u8fdb\u884c\u5bfb\u5740\u3002\u4f8b\u5982\uff0c\u8981\u8bbe\u7f6e_GPB0"),"\u7684\u6a21\u5f0f\uff0c\u53ef\u4ee5\u4f7f\u7528",(0,l.kt)("em",{parentName:"p"},"pinMode(8, ...)\u3002 \u6ce8\u610f MCP23008\u548cMCP23S08\u53ea\u6709_GPAx"),"\u5f15\u811a\u3002\n| MCP23x17\u5f15\u811a # | \u5f15\u811a\u540d\u79f0 | \u5f15\u811aID\u7f16\u53f7 |\n| :------------: | :------: | :----: |\n|       21       |   GPA0   |   0    |\n|       22       |   GPA1   |   1    |\n|       23       |   GPA2   |   2    |\n|       24       |   GPA3   |   3    |\n|       25       |   GPA4   |   4    |\n|       26       |   GPA5   |   5    |\n|       27       |   GPA6   |   6    |\n|       28       |   GPA7   |   7    |\n|       1        |   GPB0   |   8    |\n|       2        |   GPB1   |   9    |\n|       3        |   GPB2   |   10   |\n|       4        |   GPB3   |   11   |\n|       5        |   GPB4   |   12   |\n|       6        |   GPB5   |   13   |\n|       7        |   GPB6   |   14   |\n|       8        |   GPB7   |   15   |"),(0,l.kt)("h2",{id:"\u5e38\u89c1\u95ee\u9898\u89e3\u7b54"},"\u5e38\u89c1\u95ee\u9898\u89e3\u7b54"),(0,l.kt)("h3",{id:"1-\u4e3a\u4ec0\u4e48\u6211\u7684xiao\u7684io\u6269\u5c55\u677f\u6ca1\u6709\u54cd\u5e94"},"1. \u4e3a\u4ec0\u4e48\u6211\u7684XIAO\u7684IO\u6269\u5c55\u677f\u6ca1\u6709\u54cd\u5e94\uff1f"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u56de\u7b54"),": \u8bf7\u786e\u4fddXIAO\u6a21\u5757\u6b63\u786e\u63d2\u5165\u6269\u5c55\u677f\u4e2d\u3002\u6b64\u5916\uff0c\u68c0\u67e5\u662f\u5426\u5df2\u5b89\u88c5\u5fc5\u8981\u7684\u5e93\uff0c\u5e76\u5728Arduino IDE\u4e2d\u9009\u62e9\u4e86\u6b63\u786e\u7684\u5f00\u53d1\u677f\u548c\u7aef\u53e3\u3002"),(0,l.kt)("h3",{id:"2-\u6211\u53ef\u4ee5\u5c06io\u6269\u5c55\u677f\u7528\u4e8e\u5176\u4ed6\u5fae\u63a7\u5236\u5668\u5417"},"2. \u6211\u53ef\u4ee5\u5c06IO\u6269\u5c55\u677f\u7528\u4e8e\u5176\u4ed6\u5fae\u63a7\u5236\u5668\u5417\uff1f"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u56de\u7b54"),": \u662f\u7684\uff0cIO\u6269\u5c55\u677f\u4e3b\u8981\u8bbe\u8ba1\u7528\u4e8eXIAO\u6a21\u5757\uff0c\u4f46\u4e5f\u53ef\u4ee5\u4e0e\u5176\u4ed6\u652f\u6301I2C\u901a\u4fe1\u7684\u5fae\u63a7\u5236\u5668\u4e00\u8d77\u4f7f\u7528\u3002\u60a8\u53ef\u80fd\u9700\u8981\u76f8\u5e94\u5730\u8c03\u6574\u4ee3\u7801\u548c\u8fde\u63a5\u3002"),(0,l.kt)("h3",{id:"3-\u5982\u4f55\u66f4\u6539io\u6269\u5c55\u677f\u4e0amcp23017\u82af\u7247\u7684i2c\u5730\u5740"},"3. \u5982\u4f55\u66f4\u6539IO\u6269\u5c55\u677f\u4e0aMCP23017\u82af\u7247\u7684I2C\u5730\u5740\uff1f"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u56de\u7b54"),': \u9ed8\u8ba4\u7684I2C\u5730\u5740\u8bbe\u7f6e\u4e3a0x21\u3002\u5982\u679c\u60a8\u60f3\u5c06\u5176\u66f4\u6539\u4e3a0x20\uff0c\u5728\u677f\u4e0a\u6709\u4e00\u4e2a\u6807\u8bb0\u4e3a"J2"\u7684\u8df3\u7ebf\u5e3d\u3002\u60a8\u9700\u8981\u710a\u63a5J2\u8df3\u7ebf\u5e3d\u6765\u66f4\u6539\u5730\u5740\u3002'),(0,l.kt)("h3",{id:"4-\u6211\u5728\u6211\u7684io\u5f15\u811a\u4e0a\u9047\u5230\u566a\u58f0\u6216\u4e0d\u7a33\u5b9a\u7684\u884c\u4e3a\u53ef\u80fd\u7684\u539f\u56e0\u662f\u4ec0\u4e48"},"4. \u6211\u5728\u6211\u7684IO\u5f15\u811a\u4e0a\u9047\u5230\u566a\u58f0\u6216\u4e0d\u7a33\u5b9a\u7684\u884c\u4e3a\u3002\u53ef\u80fd\u7684\u539f\u56e0\u662f\u4ec0\u4e48\uff1f"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u56de\u7b54"),": \u8bf7\u786e\u4fdd\u8fde\u63a5\u7262\u56fa\u4e14\u6ca1\u6709\u5e72\u6270\u3002\u4f7f\u7528\u4e0a\u62c9\u6216\u4e0b\u62c9\u7535\u963b\u53ef\u4ee5\u5e2e\u52a9\u7a33\u5b9a\u8f93\u5165\u5f15\u811a\u3002\u6b64\u5916\uff0c\u8bf7\u786e\u4fdd\u7535\u6e90\u7a33\u5b9a\uff0c\u5e76\u80fd\u4e3a\u6240\u6709\u8fde\u63a5\u7684\u8bbe\u5907\u63d0\u4f9b\u8db3\u591f\u7684\u7535\u6d41\u3002"),(0,l.kt)("p",null,"##\u8d44\u6e90"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"[ZIP]")," ",(0,l.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/gpio-expander-for-xiao/XIAO_IO.zip"},"Eagle\u6587\u4ef6")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"[PDF]")," ",(0,l.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/gpio-expander-for-xiao/MCP23017_Data_Sheet_DS20001952-2998473.pdf"},"MCP23017\u6570\u636e\u624b\u518c"))),(0,l.kt)("h2",{id:"\u6280\u672f\u652f\u6301\u548c\u4ea7\u54c1\u8ba8\u8bba"},"\u6280\u672f\u652f\u6301\u548c\u4ea7\u54c1\u8ba8\u8bba"),(0,l.kt)("p",null,"\u611f\u8c22\u60a8\u9009\u62e9\u6211\u4eec\u7684\u4ea7\u54c1\uff01\u6211\u4eec\u81f4\u529b\u4e8e\u4e3a\u60a8\u63d0\u4f9b\u4e0d\u540c\u7684\u652f\u6301\uff0c\u4ee5\u786e\u4fdd\u60a8\u5bf9\u6211\u4eec\u4ea7\u54c1\u7684\u4f53\u9a8c\u5c3d\u53ef\u80fd\u987a\u7545\u3002\u6211\u4eec\u63d0\u4f9b\u591a\u79cd\u6c9f\u901a\u6e20\u9053\uff0c\u4ee5\u6ee1\u8db3\u4e0d\u540c\u7684\u504f\u597d\u548c\u9700\u6c42\u3002"),(0,l.kt)("div",{class:"table-center"},(0,l.kt)("div",{class:"button_tech_support_container"},(0,l.kt)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,l.kt)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,l.kt)("div",{class:"button_tech_support_container"},(0,l.kt)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,l.kt)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"}))))}s.isMDXComponent=!0}}]);