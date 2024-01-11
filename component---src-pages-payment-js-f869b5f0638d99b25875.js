"use strict";(self.webpackChunksponsorblock=self.webpackChunksponsorblock||[]).push([[485],{4153:function(e,t,a){var n=a(7294);t.Z=e=>{const{0:t,1:a}=(0,n.useState)(null),{0:r,1:o}=(0,n.useState)(!0),s=e=>{o(!1);const t=e.currentTarget.getBoundingClientRect(),n=(e.clientX||e.touches[0].clientX)-t.left;a(n/t.width)};return n.createElement("div",{onMouseMove:s,onTouchMove:s,className:"before-after-container"},n.createElement("div",{id:"image2",draggable:"false",className:"after-image"},n.createElement("img",{src:e.image2,className:"before-after-image",alt:"After"})),n.createElement("div",{id:"image1",draggable:"false",className:"draggable-before-image"+(r?" initial-animation":""),style:{width:null!=t?100*t+"%":void 0}},n.createElement("img",{src:e.image1,className:"before-after-image",alt:"Before"})))}},2157:function(e,t,a){a.r(t);var n=a(7294),r=a(262),o=a(5724),s=a(4153);const l="https://sponsor.ajay.app",i=432e5,c=(0,o.m)();let m=!1;if("undefined"!=typeof window){window.top!==window.self&&window.addEventListener("message",(e=>{if(!m&&!e.origin.match(/^https?:\/\//)&&"dearrow-payment-page"===e.data){m=!0;const e={freeTrial:u("freeTrial"),licenseKey:u("licenseKey"),freeAccess:u("freeAccess"),freeAccessWaitingPeriod:i};(e.freeTrial||e.licenseKey||e.freeAccess)&&(window.top.postMessage({message:"dearrow-payment-page-data",choices:e},"*"),localStorage.removeItem("freeTrial"),localStorage.removeItem("licenseKey"),localStorage.removeItem("freeAccess"))}}))}function u(e){try{return localStorage.getItem(e)}catch(t){return}}function d(e,t){try{return localStorage.setItem(e,t)}catch(a){return}}t.default=()=>{const{0:e,1:t}=(0,n.useState)(!1),{0:a,1:p}=(0,n.useState)(!1),{0:f,1:y}=(0,n.useState)(!1),{0:h,1:w}=(0,n.useState)(!1),{0:g,1:b}=(0,n.useState)(!1),{0:E,1:v}=(0,n.useState)(!1),{0:k,1:N}=(0,n.useState)(!1),{0:I,1:A}=(0,n.useState)(!1),{0:x,1:S}=(0,n.useState)(void 0);return(0,n.useEffect)((()=>{const e=window.top!==window.self;A(e),!1!==c.hideFreeTrial&&u("usedFreeTrial")||v(!0),c.hideRedeem||y(!0),c.hideRequestFreeAccessButton||N(!0),c.free&&w(!0),e||S(c.link?o.b[c.link]:navigator.userAgent.includes("Firefox")?o.b.firefox:o.b.chrome),t(!0)}),[]),n.createElement("div",null,n.createElement(r.Z,{title:"Payment"}),n.createElement("div",{className:"payment-container container"},n.createElement("p",null,"DeArrow is a paid browser extension. You can purchase an unlimited-use license key for ",n.createElement("b",null,"1$"),"."),n.createElement("p",null,"However, if you cannot, or do not want to pay,"," ",n.createElement("b",null,"click the button at the bottom to use DeArrow for free"),". No worries if you can't or don't want to pay :)"),E&&n.createElement("div",{className:"center row-item"},n.createElement("a",{href:x,className:"option-link side-by-side",target:"_blank",rel:"noreferrer",onClick:()=>{!function(e){e&&m?window.top.postMessage({message:"dearrow-payment-page-data",choices:{freeTrial:!0}},"*"):d("freeTrial",!0);d("usedFreeTrial",!0)}(I),v(!1)}},n.createElement("div",{className:"option-button side-by-side inline"},"Start a free 6 hour trial")),n.createElement("div",{className:"free-trial-text"},"No sign up or credit card required")),n.createElement("div",{className:"center row-item who-am-i"},n.createElement("p",{className:"header"},"Who am I?"),n.createElement("p",{className:"text"},"Hi, I'm Ajay. For the last 4 years, I've been working on SponsorBlock, an open-source privacy respecting browser extension and open API for skipping and identifying sponsors and other annoyances in YouTube videos. In June, I launched DeArrow, an extension targeting the next biggest annoyance on YouTube."),n.createElement("p",{className:"text"},"In January 2024, I will be graduating from university and hope to make SponsorBlock, DeArrow and future open-source user-focused tools my full time job. This DeArrow paywall is how I believe I'm going to make that possible."),n.createElement("p",{className:"text"},"With this paywall, I am trying to create a funding mechanism for my projects while still allowing universal access. That's why ",n.createElement("b",null,"if you cannot or do not want to pay, I still very much want you to be able to use DeArrow as much as anyone else using the button at the bottom.")," ","But, if you can pay, I would really appreciate you supporting the project.")),n.createElement("div",{className:"center row-item"},n.createElement("a",{href:"https://theajayyy.itch.io/dearrow",className:"option-link side-by-side",target:"_blank",rel:"noreferrer"},n.createElement("div",{id:"oneTimePurchase",className:"option-button inline"},"Buy for $1"))),f&&n.createElement("div",{className:"center row-item"},n.createElement("input",{id:"redeemCodeInput",className:"option-text-box",type:"text",placeholder:"Enter license key",onChange:e=>{p(e.target.value.length>0)}}),n.createElement("a",{className:"option-link",target:"_blank",rel:"noreferrer",onClick:()=>{a&&async function(e,t,a){e(!1);const n=document.getElementById("redeemCodeInput").value;if(!await async function(e){try{const t=await fetch(l+"/api/verifyToken?licenseKey="+e);if(200===t.status){return(await t.json()).allowed}return!0}catch(t){}return!0}(n))return alert("Invalid license key"),void e(!0);a&&m?window.top.postMessage({message:"dearrow-payment-page-data",choices:{licenseKey:n}},"*"):(d("licenseKey",n),alert("Redeem successful! Now install the extension"),window.open(t,"_blank"));e(!0)}(p,x,I)}},n.createElement("div",{className:"option-button side-by-side inline"+(a?"":" disabled")},"Redeem"))),n.createElement("div",{className:"flex-center"},n.createElement("p",{className:"smaller small-width no-top-margin"},"Privacy Note: Other than intially checking your license key,"," ","no requests to DeArrow servers contain your license key."," ","This means that fetching DeArrow data remains anonymous,"," ","and your DeArrow submissions cannot be linked to your payment details."),n.createElement("p",{className:"smaller no-margin small-width"},"Already paid but lost your key? Installed during the free beta but lost your key? Email dev@ajay.app")),n.createElement("br",null),n.createElement("div",{className:"center"+(k?"":" hidden")},n.createElement("a",{className:"option-link",target:"_blank",rel:"noreferrer",onClick:()=>{w(!0),b(!1)}},n.createElement("div",{className:"option-button inline"},"I can't/don't want to pay"))),n.createElement("div",{className:"center"+(k?"":" hidden")},n.createElement("a",{className:"option-link",target:"_blank",rel:"noreferrer",onClick:()=>{w(!0),b(!0)}},n.createElement("div",{className:"option-button inline"},"None of the payment methods work for me"))),n.createElement("div",{className:"center no-js-warning"+(e?" hidden":"")},n.createElement("p",{className:"text"},"Warning: This page is not fully functional when JavaScript is disabled")),h&&n.createElement("div",{className:"free-access-modal"},n.createElement("div",{className:"free-access-modal-content center"},g?n.createElement(n.Fragment,null,n.createElement("p",null,"I really appreciate you wanting to help support the project, but, unfortunately, I am unable to set up other payment methods at this time. I understand that you may have privacy concerns with credit cards, cannot pay due to sanctions or just don't have access to a credit card."),n.createElement("p",null,"You can use the button below to request free access (that lasts forever), but you'll have to wait up to ",n.createElement("b",null,"24 hours after installing")," to use it. If you want to speed this up, feel free to send me an email dev @ ajay.app"),n.createElement("p",null,"And if you still do want to support the project, you can check the list of"," ",n.createElement("a",{href:"https://dearrow.ajay.app/donate",target:"_blank",rel:"noreferrer"},"donation options")," to see if one works for you (it has a few more options), but don't worry if you still can't :)")):n.createElement("p",null,"If you cannot, or do not want to pay, you can use DeArrow after waiting some time. You will not be able to use DeArrow right away, but instead will receive free access (that lasts forever) up to ",n.createElement("b",null,"24 hours after installing"),"."),I?n.createElement("p",null,"It will notify you when you get access."):n.createElement("p",null,"Install the extension to get started, it will notify you when you get access."),n.createElement("a",{href:x,className:"option-link",target:"_blank",rel:"noreferrer",onClick:()=>{!function(e){e&&m?window.top.postMessage({message:"dearrow-payment-page-data",choices:{freeAccess:!0,freeAccessWaitingPeriod:i}},"*"):d("freeAccess",!0)}(I),w(!1),N(!1)}},n.createElement("div",{className:"option-button inline"},I?"I want free access":"Install extension")),n.createElement("br",null),n.createElement("a",{className:"option-link",target:"_blank",rel:"noreferrer",onClick:()=>{w(!1)}},n.createElement("div",{className:"option-button inline"},"Close")))),n.createElement("br",null),e&&n.createElement(s.Z,{image1:"/before.png",image2:"/after.jpg"})))}},5724:function(e,t,a){a.d(t,{b:function(){return n},m:function(){return r}});const n={chrome:"https://chrome.google.com/webstore/detail/enamippconapkdmgfgjchkhakpfinmaj",firefox:"https://addons.mozilla.org/firefox/addon/dearrow"};function r(){if("undefined"==typeof window)return{};return window.location.hash.slice(1).split("&").reduce(((e,t)=>{const[a,n]=t.split("=");return e[a]=function(e){if("true"===e)return!0;if("false"===e)return!1;if(Number.isFinite(e))return Number(e);return decodeURIComponent(e)}(n),e}),{})}}}]);
//# sourceMappingURL=component---src-pages-payment-js-f869b5f0638d99b25875.js.map