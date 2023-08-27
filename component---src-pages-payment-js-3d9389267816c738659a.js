"use strict";(self.webpackChunksponsorblock=self.webpackChunksponsorblock||[]).push([[485],{4153:function(e,t,a){var n=a(7294);t.Z=e=>{const{0:t,1:a}=(0,n.useState)(null),{0:r,1:o}=(0,n.useState)(!0),i=e=>{o(!1);const t=e.currentTarget.getBoundingClientRect(),n=(e.clientX||e.touches[0].clientX)-t.left;a(n/t.width)};return n.createElement("div",{onMouseMove:i,onTouchMove:i,className:"before-after-container"},n.createElement("div",{id:"image2",draggable:"false",className:"after-image"},n.createElement("img",{src:e.image2,className:"before-after-image",alt:"After"})),n.createElement("div",{id:"image1",draggable:"false",className:"draggable-before-image"+(r?" initial-animation":""),style:{width:null!=t?100*t+"%":void 0}},n.createElement("img",{src:e.image1,className:"before-after-image",alt:"Before"})))}},2157:function(e,t,a){a.r(t);var n=a(7294),r=a(262),o=a(5724),i=a(4153);const s="https://sponsor.ajay.app",l=(0,o.m)();let c=!1;if("undefined"!=typeof window){window.top!==window.self&&window.addEventListener("message",(e=>{if(!c&&!e.origin.match(/^https?:\/\//)&&"dearrow-payment-page"===e.data){c=!0;const e={freeTrial:m("freeTrial"),licenseKey:m("licenseKey"),freeAccess:m("freeAccess")};(e.freeTrial||e.licenseKey||e.freeAccess)&&(window.top.postMessage({message:"dearrow-payment-page-data",choices:e},"*"),localStorage.removeItem("freeTrial"),localStorage.removeItem("licenseKey"),localStorage.removeItem("freeAccess"))}}))}function m(e){try{return localStorage.getItem(e)}catch(t){return}}function u(e,t){try{return localStorage.setItem(e,t)}catch(a){return}}t.default=()=>{const{0:e,1:t}=(0,n.useState)(!1),{0:a,1:d}=(0,n.useState)(!1),{0:p,1:f}=(0,n.useState)(!1),{0:y,1:h}=(0,n.useState)(!1),{0:w,1:g}=(0,n.useState)(!1),{0:b,1:E}=(0,n.useState)(!1),{0:v,1:k}=(0,n.useState)(!1),{0:N,1:I}=(0,n.useState)(void 0);return(0,n.useEffect)((()=>{const e=window.top!==window.self;k(e),l.hideFreeTrial||m("usedFreeTrial")||g(!0),l.hideRedeem||f(!0),l.hideRequestFreeAccessButton||E(!0),e||I(l.link?o.b[l.link]:o.b.chrome),t(!0)}),[]),n.createElement("div",null,n.createElement(r.Z,{title:"Payment"}),n.createElement("div",{className:"payment-container container"},n.createElement("p",null,"DeArrow is a paid browser extension. You can purchase an unlimited-use license key for a one time payment."),n.createElement("p",null,"However, if you cannot, or do not want to pay,"," ",n.createElement("b",null,"there is an option to request free access at the bottom"),"."),w&&n.createElement("div",{className:"center row-item"},n.createElement("a",{href:N,className:"option-link side-by-side",target:"_blank",rel:"noreferrer",onClick:()=>{!function(e){e&&c?window.top.postMessage({message:"dearrow-payment-page-data",choices:{freeTrial:!0}},"*"):u("freeTrial",!0);u("usedFreeTrial",!0)}(v),g(!1)}},n.createElement("div",{className:"option-button side-by-side inline"},"Try it out for an hour (No credit card required)"))),n.createElement("div",{className:"center row-item who-am-i"},n.createElement("p",{className:"header"},"Who am I?"),n.createElement("p",{className:"text"},"Hi, I'm Ajay. For the last 4 years, I've been working on SponsorBlock, an open-source privacy respecting browser extension and open API for skipping and identifying sponsors and other annoyances in YouTube videos. In June, I launched DeArrow, an extension targeting the next biggest annoyance on YouTube."),n.createElement("p",{className:"text"},"In January 2024, I will be graduating from university and hope to make SponsorBlock, DeArrow and future open-source user-focused tools my full time job. This DeArrow paywall is how I believe I'm going to make that possible."),n.createElement("p",{className:"text"},"With this paywall, I am trying to create a funding mechanism for my projects while still allowing universal access. That's why ",n.createElement("b",null,"if you cannot or do not want to pay, I still very much want you to be able to use DeArrow as much as anyone else using the button at the bottom.")," ","But, if you can pay, I would really appreciate you supporting the project.")),n.createElement("div",{className:"center row-item"},n.createElement("a",{href:"https://theajayyy.itch.io/dearrow",className:"option-link side-by-side",target:"_blank",rel:"noreferrer"},n.createElement("div",{id:"oneTimePurchase",className:"option-button inline"},"Buy for $1"))),p&&n.createElement("div",{className:"center row-item"},n.createElement("input",{id:"redeemCodeInput",className:"option-text-box",type:"text",placeholder:"Enter license key",onChange:e=>{d(e.target.value.length>0)}}),n.createElement("a",{className:"option-link",target:"_blank",rel:"noreferrer",onClick:()=>{a&&async function(e,t,a){e(!1);const n=document.getElementById("redeemCodeInput").value;if(!await async function(e){try{const t=await fetch(s+"/api/verifyToken?licenseKey="+e);if(200===t.status){return(await t.json()).allowed}return!0}catch(t){}return!0}(n))return alert("Invalid license key"),void e(!0);a&&c?window.top.postMessage({message:"dearrow-payment-page-data",choices:{licenseKey:n}},"*"):(u("licenseKey",n),alert("Redeem successful! Now install the extension"),window.open(t,"_blank"));e(!0)}(d,N,v)}},n.createElement("div",{className:"option-button side-by-side inline"+(a?"":" disabled")},"Redeem"))),n.createElement("div",{className:"center row-item"},n.createElement("a",{href:"https://www.patreon.com/oauth2/authorize?response_type=code&client_id=-W7ib8J-LB3jowb1fqE07A7RDUovy45_pOoWcjby6yr5upo6At8Jlg2BPhWDXO2k&redirect_uri=https%3A%2F%2Fsponsor.ajay.app%2Fapi%2FgenerateToken%2Fpatreon",className:"option-link",target:"_blank",rel:"noreferrer"},n.createElement("div",{className:"option-button inline"},"Patreon Sign In"))),n.createElement("div",{className:"flex-center"},n.createElement("p",{className:"smaller small-width no-top-margin"},"Privacy Note: Other than intially checking your license key,"," ","no requests to DeArrow servers contain your license key."," ","This means that fetching DeArrow data remains anonymous,"," ","and your DeArrow submissions cannot be linked to your payment details."),n.createElement("p",{className:"smaller no-margin small-width"},"Already paid but lost your key? Installed during the free beta but lost your key? Email dev@ajay.app")),n.createElement("br",null),n.createElement("div",{className:"center"+(b?"":" hidden")},n.createElement("a",{className:"option-link",target:"_blank",rel:"noreferrer",onClick:()=>{h(!0)}},n.createElement("div",{className:"option-button inline"},"Request Free Access"))),n.createElement("div",{className:"center no-js-warning"+(b?" hidden":"")},n.createElement("p",{className:"text"},"Warning: This page is not fully functional when JavaScript is disabled")),y&&n.createElement("div",{className:"free-access-modal"},n.createElement("div",{className:"free-access-modal-content center"},n.createElement("p",null,"If you cannot, or do not want to pay, you can request free access. You will not be able to use the extension right away, but instead will recieve free access up to 3 weeks after installing."),v?n.createElement("p",null,"It will notify you when you get access."):n.createElement("p",null,"Install the extension to get started, it will notify you when you get access."),v?n.createElement("p",null,"You can disable the extension if you want, but if you do, you will not be notified when you get access, and will have to manually check."):n.createElement("p",null,"You can disable the extension after installing if you want, but if you do, you will not be notified when you get access, and will have to manually check."),n.createElement("a",{href:N,className:"option-link",target:"_blank",rel:"noreferrer",onClick:()=>{!function(e){e&&c?window.top.postMessage({message:"dearrow-payment-page-data",choices:{freeAccess:!0}},"*"):u("freeAccess",!0)}(v),h(!1),E(!1)}},n.createElement("div",{className:"option-button inline"},v?"Request free access":"Install extension")),n.createElement("br",null),n.createElement("a",{className:"option-link",target:"_blank",rel:"noreferrer",onClick:()=>{h(!1)}},n.createElement("div",{className:"option-button inline"},"Close")))),n.createElement("br",null),e&&n.createElement(i.Z,{image1:"/before.png",image2:"/after.jpg"})))}},5724:function(e,t,a){a.d(t,{b:function(){return n},m:function(){return r}});const n={chrome:"https://chrome.google.com/webstore/detail/enamippconapkdmgfgjchkhakpfinmaj",firefox:"https://addons.mozilla.org/firefox/addon/dearrow"};function r(){if("undefined"==typeof window)return{};return window.location.hash.slice(1).split("&").reduce(((e,t)=>{const[a,n]=t.split("=");return e[a]=function(e){if("true"===e)return!0;if("false"===e)return!1;if(Number.isFinite(e))return Number(e);return decodeURIComponent(e)}(n),e}),{})}}}]);
//# sourceMappingURL=component---src-pages-payment-js-3d9389267816c738659a.js.map