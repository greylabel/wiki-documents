"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[94655],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||r;return n?o.createElement(h,a(a({ref:t},p),{},{components:n})):o.createElement(h,a({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:i,a[1]=s;for(var c=2;c<r;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},66436:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var o=n(87462),i=(n(67294),n(3905));const r={description:"TinyML Workshop Course.",title:"TinyML Workshop Course",keywords:["tinyml course"],image:"https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png",slug:"/tinyml_workshop_course_new",last_update:{date:"08/09/2023",author:"MengDu"}},a="TinyML Workshop Course",s={unversionedId:"TinyML/TinyML_Workshop/TinyML_workshop_course",id:"TinyML/TinyML_Workshop/TinyML_workshop_course",title:"TinyML Workshop Course",description:"TinyML Workshop Course.",source:"@site/docs/TinyML/TinyML_Workshop/TinyML_workshop_course.md",sourceDirName:"TinyML/TinyML_Workshop",slug:"/tinyml_workshop_course_new",permalink:"/tinyml_workshop_course_new",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/TinyML/TinyML_Workshop/TinyML_workshop_course.md",tags:[],version:"current",lastUpdatedBy:"MengDu",lastUpdatedAt:1691539200,formattedLastUpdatedAt:"Aug 9, 2023",frontMatter:{description:"TinyML Workshop Course.",title:"TinyML Workshop Course",keywords:["tinyml course"],image:"https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png",slug:"/tinyml_workshop_course_new",last_update:{date:"08/09/2023",author:"MengDu"}},sidebar:"ProductSidebar",previous:{title:"TinyML",permalink:"/tinyml_topic"},next:{title:"SenseCraft Model Assistant",permalink:"/sscma"}},l={},c=[{value:"Step 1: Familiarize the tools that we are using.",id:"step-1-familiarize-the-tools-that-we-are-using",level:3},{value:"Step 2: Experiment tinyML models with pre-built arduino library",id:"step-2-experiment-tinyml-models-with-pre-built-arduino-library",level:3},{value:"Step 3: Make your own tinyML project by collecting data and training your own.",id:"step-3-make-your-own-tinyml-project-by-collecting-data-and-training-your-own",level:3},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],p={toc:c};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"tinyml-workshop-course"},"TinyML Workshop Course"),(0,i.kt)("p",null,"Welcome to the course on using SenseCraft Model Assistant and Edge Impulse for TinyML on the XIAO ESP32S3 Sense! This course is a culmination of Seeed Studio's offline workshops, and it aims to provide you with a comprehensive understanding of how to utilize SenseCraft Model Assistant and Edge Impulse platforms effectively. We will explore the functionalities of SSCMA, learn about Edge Impulse's capabilities, and focus on implementing TinyML on the XIAO ESP32S3 development board."),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/tinyml-topic/3.jpg",style:{width:1e3,height:"auto"}})),(0,i.kt)("p",null,"Throughout this course, we will delve into the usage of SenseCraft Model Assistant(Beta) as a powerful online development environment. It will guide you through data management, preprocessing, feature engineering, model design, training, evaluation, and optimization. We will emphasize its graphical interface, which simplifies tasks such as data collection, preprocessing, and feature engineering, as well as selecting appropriate model architectures and training parameters."),(0,i.kt)("div",{class:"button_tech_support_container"},(0,i.kt)("a",{href:"https://sensecraftma.seeed.cc/",class:"button_edgelab"})),(0,i.kt)("p",null,"Next, we will shift our focus to the Edge Impulse platform. Designed specifically for embedded devices, Edge Impulse offers an end-to-end solution for developing and deploying TinyML models. We will learn how to export models trained in SenseCraft Model Assistant to Edge Impulse and deploy them on the XIAO ESP32S3. Additionally, we will explore Edge Impulse's features, including real-time data collection, model quantization and optimization, and the ability to perform real-time inference on the device."),(0,i.kt)("div",{class:"button_tech_support_container"},(0,i.kt)("a",{href:"https://edgeimpulse.com/",class:"button_edgeimpulse"})),(0,i.kt)("p",null,"By participating in this course, you will gain the following skills and knowledge:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Familiarity with the fundamental features and workflow of SenseCraft Model Assistant."),(0,i.kt)("li",{parentName:"ul"},"Proficiency in essential steps such as data preprocessing, model training, and evaluation."),(0,i.kt)("li",{parentName:"ul"},"Understanding of TinyML concepts and their application scenarios."),(0,i.kt)("li",{parentName:"ul"},"Ability to deploy models to the XIAO ESP32S3 using the Edge Impulse platform.")),(0,i.kt)("p",null,"Whether you are a beginner or an experienced developer with some machine learning background, this course will provide you with invaluable practical experience and skills to apply TinyML in IoT projects. Let's embark on this exciting learning journey together!"),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"To complete the workshop, we need go through the instructions below, and each page you have a assignment to complete, make sure to done that before going next step.")),(0,i.kt)("h3",{id:"step-1-familiarize-the-tools-that-we-are-using"},"Step 1: Familiarize the tools that we are using."),(0,i.kt)("div",{class:"all_container"},(0,i.kt)("div",{class:"getting_started"},(0,i.kt)("div",{class:"start_card_wrapper"},(0,i.kt)("a",{href:"/sscma",class:"getting_started_label2"},"1.1 SenseCraft Model Assistant"),(0,i.kt)("br",null),"Use pre-made tinyML models and experiment quickly.")),(0,i.kt)("div",{class:"getting_started"},(0,i.kt)("div",{class:"start_card_wrapper"},(0,i.kt)("a",{href:"/edgeimpulse",class:"getting_started_label2"},"1.2 Edge Impulse"),(0,i.kt)("br",null),"Create ML model and generate arduino libraries."))),(0,i.kt)("h3",{id:"step-2-experiment-tinyml-models-with-pre-built-arduino-library"},"Step 2: Experiment tinyML models with pre-built arduino library"),(0,i.kt)("div",{class:"all_container"},(0,i.kt)("div",{class:"getting_started"},(0,i.kt)("div",{class:"start_card_wrapper"},(0,i.kt)("a",{href:"/edgeimpulse#speech-keyword-recognition-yes--no-arduino-library",class:"getting_started_label2"},"2.1 Control Lights with Voice "),(0,i.kt)("br",null),"Learn how to intergrate arduino tinyML libraries.")),(0,i.kt)("div",{class:"getting_started"},(0,i.kt)("div",{class:"start_card_wrapper"},(0,i.kt)("a",{href:"/edgeimpulse#fruit-identification-apples-bananas-grapes-arduino-library",class:"getting_started_label2"},"2.2 Fruit identification "),(0,i.kt)("br",null),"Classify Apples, Banana and Grapes images using computervision."))),(0,i.kt)("h3",{id:"step-3-make-your-own-tinyml-project-by-collecting-data-and-training-your-own"},"Step 3: Make your own tinyML project by collecting data and training your own."),(0,i.kt)("div",{class:"all_container"},(0,i.kt)("div",{class:"getting_started"},(0,i.kt)("div",{class:"start_card_wrapper"},(0,i.kt)("a",{href:"/tinyml_course_Key_Word_Spotting",class:"getting_started_label2"},"3.1 Build Your own key word based project "),(0,i.kt)("br",null),"Learn how to build voice recognition tinyML project scratch.")),(0,i.kt)("div",{class:"getting_started"},(0,i.kt)("div",{class:"start_card_wrapper"},(0,i.kt)("a",{href:"/tinyml_course_Image_classification_project",class:"getting_started_label2"},"3.2 Build Your own Image classification project "),(0,i.kt)("br",null),"Learn how to build Image classification project from scratch."))),(0,i.kt)("p",null,"Please go one by one to the above topic and complete the ToDo to go to the next level. All the best and happy making \ud83d\ude4c."),(0,i.kt)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,i.kt)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,i.kt)("div",{class:"button_tech_support_container"},(0,i.kt)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,i.kt)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,i.kt)("div",{class:"button_tech_support_container"},(0,i.kt)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,i.kt)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}d.isMDXComponent=!0}}]);