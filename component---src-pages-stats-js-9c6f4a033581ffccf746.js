/*! For license information please see component---src-pages-stats-js-9c6f4a033581ffccf746.js.LICENSE.txt */
(self.webpackChunksponsorblock=self.webpackChunksponsorblock||[]).push([[33],{5900:function(e,t){var a;!function(){"use strict";var l={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var s=typeof a;if("string"===s||"number"===s)e.push(a);else if(Array.isArray(a)){if(a.length){var r=n.apply(null,a);r&&e.push(r)}}else if("object"===s)if(a.toString===Object.prototype.toString)for(var c in a)l.call(a,c)&&a[c]&&e.push(c);else e.push(a.toString())}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(a=function(){return n}.apply(t,[]))||(e.exports=a)}()},8678:function(e,t,a){"use strict";var l=a(7294),n=a(1082);t.Z=e=>{let{children:t}=e;return l.createElement(l.Fragment,null,l.createElement("div",{style:{backgroundColor:"#262626",display:"flex",justifyContent:"space-between",borderBottom:"1px #1c1c1c solid"}},l.createElement("ul",{className:"nav"},l.createElement("li",null,l.createElement(n.Link,{to:"/",className:"nav-link",style:{padding:"0.7rem 1.5rem"}},l.createElement("img",{src:"/logo.svg",alt:"Home",style:{height:"2.1rem",verticalAlign:"middle"}}))),l.createElement("li",null,l.createElement(n.Link,{to:"/",className:"nav-link"},"Home")),l.createElement("li",null,l.createElement(n.Link,{to:"/about",className:"nav-link"},"About")),l.createElement("li",null,l.createElement(n.Link,{to:"/stats",className:"nav-link"},"Stats")),l.createElement("li",null,l.createElement("a",{href:"https://sponsor.ajay.app/news",className:"nav-link"},"Blog")),l.createElement("li",null,l.createElement("a",{href:"https://wiki.sponsor.ajay.app/w/DeArrow/Guidelines",className:"nav-link"},"Guidelines")),l.createElement("li",null,l.createElement("a",{href:"https://wiki.sponsor.ajay.app/w/API_Docs/DeArrow",className:"nav-link"},"API"))),l.createElement("ul",{className:"nav"},l.createElement("li",{className:"author"},l.createElement("a",{href:"https://ajay.app/",className:"nav-link text-small profile"},"Created by Ajay Ramachandran",l.createElement("img",{src:"/ajay_profile.jpg",alt:"Ajay's avatar"}))),l.createElement("li",null,l.createElement("a",{href:"https://discord.gg/SponsorBlock",className:"nav-link",title:"Discord Invite"},l.createElement("i",{className:"fa fa-discord"}))),l.createElement("li",null,l.createElement("a",{href:"https://matrix.to/#/#sponsor:ajay.app?via=ajay.app&via=matrix.org&via=mozilla.org",className:"nav-link",title:"Matrix Invite"},l.createElement("i",{className:"fa fa-matrix-org"}))),l.createElement("li",null,l.createElement("a",{href:"https://fosstodon.org/@sponsorblock",className:"nav-link",rel:"me"},l.createElement("i",{className:"fa fa-mastodon"}))),l.createElement("li",null,l.createElement("a",{href:"https://twitter.com/SponsorBlock",className:"nav-link"},l.createElement("i",{className:"fa fa-twitter"}))),l.createElement("li",null,l.createElement("a",{href:"https://github.com/ajayyy/DeArrow",className:"nav-link"},l.createElement("i",{className:"fa fa-github"}))))),l.createElement("main",null,t))}},2513:function(e,t,a){"use strict";a.r(t);var l=a(5785),n=a(7294),s=(a(5900),a(8678)),r=a(262);const c="https://sponsor.ajay.app";let i=0;t.default=()=>{const{0:e,1:t}=(0,n.useState)({activeUsers:"Loading",titles:"Loading",thumbnails:"Loading"}),{0:a,1:o}=(0,n.useState)([]),{0:m,1:u}=(0,n.useState)(!0);function E(e){const t=new URL(c+"/api/getTopBrandingUsers?");return t.searchParams.append("sortType",i),fetch(t).then((e=>e.ok?e.json():Promise.reject(e))).then((t=>{e&&((0,l.Z)(document.getElementsByClassName("sorted")).forEach((e=>e.classList.remove("sorted"))),e.classList.add("sorted"),e.classList.remove("sort-loading")),o(t)})).catch((e=>console.error(e)))}return(0,n.useEffect)((()=>{fetch(c+"/api/brandingStats").then((e=>e.ok?e.json():Promise.reject(e))).then((e=>{u(!1),t(e)})).catch((e=>console.error(e))),E()}),[]),n.createElement(s.Z,null,n.createElement(r.Z,{title:"Stats"}),n.createElement("div",{className:"container"},n.createElement("h2",{className:"text-center"},"Overall Stats"),n.createElement("table",null,n.createElement("tbody",null,n.createElement("tr",null,n.createElement("td",null,"Active Users:"),n.createElement("td",{className:m?"loading":null},e.activeUsers.toLocaleString()," users")),n.createElement("tr",null,n.createElement("td",null,"Titles Submitted:"),n.createElement("td",{className:m?"loading":null},e.titles.toLocaleString()," ","submissions")),n.createElement("tr",null,n.createElement("td",null,"Thumbnails Submitted:"),n.createElement("td",{className:m?"loading":null},e.thumbnails.toLocaleString()," ","submissions")))),n.createElement("div",null,n.createElement("h2",{className:"text-center no-bottom-margin"},"Top Contributors"),n.createElement("div",{className:"text-center text-small"},"Click a column title to change the sort"))),n.createElement("div",{className:"container-fluid stats-table"},n.createElement("table",{className:"highlight-row-on-hover"},n.createElement("thead",null,n.createElement("tr",null,n.createElement("th",{className:"rank"},"Rank"),n.createElement("th",null,"User Name"),n.createElement("th",{className:"pointer sorted",onClick:e=>{e.target.classList.contains("sorted")||(e.target.classList.add("sort-loading"),i=0,E(e.target))}},"Titles"),n.createElement("th",{className:"pointer",onClick:e=>{e.target.classList.contains("sorted")||(e.target.classList.add("sort-loading"),i=1,E(e.target))}},"Thumbnails"))),n.createElement("tbody",null,0===a.length?n.createElement("tr",{className:"row--even"},n.createElement("td",{className:"topUsersLoading",colSpan:"5"},"Loading...")):a.map(((e,t)=>n.createElement("tr",{className:"row--"+(t%2?"odd":"even"),key:t},n.createElement("td",{className:"rank celltype-number"},t+1,"."),n.createElement("td",null,e.userName),n.createElement("td",{className:"celltype-number"},e.titles.toLocaleString()),n.createElement("td",{className:"celltype-number"},e.thumbnails))))))))}}}]);
//# sourceMappingURL=component---src-pages-stats-js-9c6f4a033581ffccf746.js.map