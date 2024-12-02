"use strict";(self.webpackChunksponsorblock=self.webpackChunksponsorblock||[]).push([[678],{4153:function(e,t,a){var r=a(7294);t.Z=e=>{const{0:t,1:a}=(0,r.useState)(null),{0:n,1:l}=(0,r.useState)(!0),o=e=>{l(!1);const t=e.currentTarget.getBoundingClientRect(),r=(e.clientX||e.touches[0].clientX)-t.left;a(r/t.width)};return r.createElement("div",{onMouseMove:o,onTouchMove:o,className:"before-after-container"},r.createElement("div",{id:"image2",draggable:"false",className:"after-image"},r.createElement("img",{src:e.image2,className:"before-after-image",alt:"After"})),r.createElement("div",{id:"image1",draggable:"false",className:"draggable-before-image"+(n?" initial-animation":""),style:{width:null!=t?100*t+"%":void 0}},r.createElement("img",{src:e.image1,className:"before-after-image",alt:"Before"})))}},8678:function(e,t,a){var r=a(7294),n=a(1082);t.Z=e=>{let{children:t}=e;return r.createElement(r.Fragment,null,r.createElement("div",{style:{backgroundColor:"#262626",display:"flex",justifyContent:"space-between",borderBottom:"1px #1c1c1c solid"}},r.createElement("ul",{className:"nav"},r.createElement("li",null,r.createElement(n.Link,{to:"/",className:"nav-link",style:{padding:"0.7rem 1.5rem"}},r.createElement("img",{src:"/logo.svg",alt:"Home",style:{height:"2.1rem",verticalAlign:"middle"}}))),r.createElement("li",null,r.createElement(n.Link,{to:"/",className:"nav-link"},"Home")),r.createElement("li",null,r.createElement(n.Link,{to:"/about",className:"nav-link"},"About")),r.createElement("li",null,r.createElement(n.Link,{to:"/stats",className:"nav-link"},"Stats")),r.createElement("li",null,r.createElement("a",{href:"https://sponsor.ajay.app/news",className:"nav-link"},"Blog")),r.createElement("li",null,r.createElement("a",{href:"https://wiki.sponsor.ajay.app/w/DeArrow/Guidelines",className:"nav-link"},"Guidelines")),r.createElement("li",null,r.createElement("a",{href:"https://wiki.sponsor.ajay.app/w/API_Docs/DeArrow",className:"nav-link"},"API"))),r.createElement("ul",{className:"nav"},r.createElement("li",{className:"author"},r.createElement("a",{href:"https://ajay.app/",className:"nav-link text-small profile"},"Created by Ajay Ramachandran",r.createElement("img",{src:"/ajay_profile.jpg",alt:"Ajay's avatar"}))),r.createElement("li",null,r.createElement("a",{href:"https://discord.gg/SponsorBlock",className:"nav-link",title:"Discord Invite"},r.createElement("i",{className:"fa fa-discord"}))),r.createElement("li",null,r.createElement("a",{href:"https://matrix.to/#/#sponsor:ajay.app?via=ajay.app&via=matrix.org&via=mozilla.org",className:"nav-link",title:"Matrix Invite"},r.createElement("i",{className:"fa fa-matrix-org"}))),r.createElement("li",null,r.createElement("a",{href:"https://fosstodon.org/@sponsorblock",className:"nav-link",rel:"me"},r.createElement("i",{className:"fa fa-mastodon"}))),r.createElement("li",null,r.createElement("a",{href:"https://twitter.com/SponsorBlock",className:"nav-link"},r.createElement("i",{className:"fa fa-twitter"}))),r.createElement("li",null,r.createElement("a",{href:"https://github.com/ajayyy/DeArrow",className:"nav-link"},r.createElement("i",{className:"fa fa-github"}))))),r.createElement("main",null,t))}},6558:function(e,t,a){a.r(t);var r=a(7294),n=a(1082),l=a(8678),o=a(262),s=a(5724),i=a(4153);t.default=()=>{const{0:e,1:t}=(0,r.useState)({activeUsers:"Loading",titles:"Loading",thumbnails:"Loading"}),{0:a,1:c}=(0,r.useState)(s.b.chrome),{0:m,1:p}=(0,r.useState)(s.b.firefox);return(0,r.useEffect)((()=>{c("payment#link=chrome"),p("payment#link=firefox")})),(0,r.useEffect)((()=>{fetch("https://sponsor.ajay.app/api/brandingStats").then((e=>e.json())).then((e=>void 0!==e.activeUsers?t({...e,activeUsers:Math.max(e.activeUsers,89922)}):null))}),[]),r.createElement(l.Z,null,r.createElement(o.Z,{title:"DeArrow - A Browser Extension for Better Titles and Thumbnails"}),r.createElement("div",{className:"title"},r.createElement("img",{src:"/logo.svg",alt:"Logo"}),r.createElement("span",{style:{color:"white"}},"DeArrow")),r.createElement("div",{className:"container"},r.createElement("div",{className:""},r.createElement("p",null,"DeArrow is an open source browser extension for crowdsourcing better titles and thumbnails on YouTube. The goal is to make titles accurate and reduce sensationalism. No more arrows, ridiculous faces, and no more clickbait."),r.createElement(i.Z,{image1:"/before.png",image2:"/after.jpg"}),r.createElement("p",null,"\"Clickbait\" isn't the exception anymore, it's becoming the norm. Many have even started going through their entire backlog, changing old titles and thumbnails to be more attention grabbing and vague."),r.createElement("p",null,"It's no one's fault. It's a system that creates a race to the bottom."),r.createElement("p",null,"DeArrow hopes to stop this cycle. It's time to return to a more peaceful experience."),r.createElement("div",{className:"text-center"},r.createElement("h2",null,"Download"),r.createElement("a",{href:a},r.createElement("img",{src:"/ChromeWebStore_BadgeWBorder_v2_206x58.png",alt:"Download for Chrome"})),r.createElement("a",{href:m,style:{paddingLeft:"15px"}},r.createElement("img",{src:"/AMO-button_1.png",alt:"Download for Firefox"})),r.createElement("a",{href:"https://apps.apple.com/app/dearrow-for-youtube/id6451469297",style:{paddingLeft:"15px"}},r.createElement("img",{src:"/safari.svg",alt:"Download for Safari on macOS or iOS",style:{height:"58px"}})),r.createElement("a",{href:a,style:{paddingLeft:"15px"}},r.createElement("img",{src:"/edge.png",alt:"Download for Edge",style:{height:"58px"}})),r.createElement("a",{href:a,style:{paddingLeft:"15px"}},r.createElement("img",{src:"/opera.png",alt:"Download for Opera"})),r.createElement("a",{href:"https://github.com/ajayyy/DeArrow/wiki/Android",style:{paddingLeft:"15px"}},r.createElement("img",{src:"/android.png",alt:"Download for Android",style:{height:"58px"}})),r.createElement("a",{href:"https://apps.apple.com/app/dearrow-for-youtube/id6451469297",style:{paddingLeft:"15px"}},r.createElement("img",{src:"/IOS_logo.png",alt:"Download for iOS",style:{height:"58px"}})),r.createElement("h3",null,"3rd Party Ports"),r.createElement("a",{href:"https://wiki.sponsor.ajay.app/w/DeArrow/Community#Desktop",style:{paddingLeft:"15px"}},r.createElement("img",{src:"/computer.svg",alt:"Download for Desktop",style:{height:"30px"}})),r.createElement("a",{href:"https://github.com/ajayyy/DeArrow/issues/39#issuecomment-1622742284",style:{paddingLeft:"15px"}},r.createElement("img",{src:"/invidious-logo.svg",alt:"Userscript for Invidious",style:{height:"30px"}})),r.createElement("a",{href:"https://wiki.sponsor.ajay.app/w/DeArrow/Community#Discord",style:{paddingLeft:"15px"}},r.createElement("img",{src:"/discord.png",alt:"Download for Discord Integrations",style:{height:"30px"}})),r.createElement("a",{href:"https://wiki.sponsor.ajay.app/w/DeArrow/Community#TV",style:{paddingLeft:"15px"}},r.createElement("img",{src:"/tv.png",alt:"Download for TV",style:{height:"30px"}})),r.createElement("a",{href:"https://smarttubeapp.github.io/",style:{paddingLeft:"15px"}},r.createElement("img",{src:"/androidtv.png",alt:"Download for Android TV",style:{height:"30px"}}))),r.createElement("p",null,"There are currently"," ",r.createElement("strong",null,e.activeUsers.toLocaleString())," ","users who have submitted"," ",r.createElement("strong",null,e.titles.toLocaleString())," ","titles and"," ",r.createElement("strong",null,e.thumbnails.toLocaleString())," ","thumbnails."),r.createElement("p",null,"Watch a demo below!"),r.createElement("a",{href:"https://www.youtube.com/watch?v=QjjpDhHh_QI",target:"_blank",rel:"noreferrer"},r.createElement("img",{src:"/video.png",alt:"Demo video"})),r.createElement("p",null,"Titles can be any arbitrary text. Thumbnails are screenshots from specific timestamps in the video. These are user submitted and voted on. By default, if there are no submissions, it will format the original title to the user-specified format, and set a screenshot from a random timestamp as the thumbnail. This can be configured in the options to disable formatting, or show the original thumbnail by default."),r.createElement("p",null,"Check"," ",r.createElement("a",{href:"https://status.sponsor.ajay.app"},"status.sponsor.ajay.app")," ","for server status."),r.createElement("p",null,"The"," ",r.createElement("a",{href:"https://github.com/ajayyy/DeArrow"},"source code")," ","is fully open and the"," ",r.createElement("a",{href:"https://sponsor.ajay.app/database"},"database")," ","can be downloaded by anyone. I want to keep this as open as possible! You can view the docs for the"," ",r.createElement("a",{href:"https://wiki.sponsor.ajay.app/w/API_Docs/DeArrow"},"public API")," ","or"," ",r.createElement("a",{href:"https://github.com/mchangrh/sb-mirror"},"host a mirror"),"."),r.createElement("p",{className:"text-center"},"Check out ",r.createElement(n.Link,{to:"/about"},"how it works"),"."),r.createElement("p",{className:"text-center"},"Come chat with us on"," ",r.createElement("a",{href:"https://discord.gg/SponsorBlock"},"Discord")," or"," ",r.createElement("a",{href:"https://matrix.to/#/#sponsor:ajay.app?via=ajay.app&via=matrix.org&via=mozilla.org"},"Matrix"),"."),r.createElement("h4",{className:"text-center"},"Credit"),r.createElement("p",{className:"text-center"},"Built and maintained by"," ",r.createElement("a",{href:"https://ajay.app/"},"Ajay Ramachandran")),r.createElement("p",{className:"text-center"},"Website rewritten by"," ",r.createElement("a",{href:"https://jeremyplsek.com/"},"Jeremy Plsek")),r.createElement("p",null,"Thanks to all"," ",r.createElement("a",{href:"https://github.com/ajayyy/DeArrow/graphs/contributors"},"DeArrow contributors"),","," ",r.createElement("a",{href:"https://github.com/ajayyy/SponsorBlockServer/graphs/contributors"},"SponsorBlockServer contributors"),", "," ",r.createElement("a",{href:"https://github.com/ajayyy/DeArrowSite/graphs/contributors"},"DeArrowSite contributors"),", and replacement title and thumbnail contributors"," ","such as ",r.createElement("a",{href:"https://mchang.name/"},"Michael Chang"),","," ",r.createElement("a",{href:"https://github.com/mschae23"},"mschae23"),","," ",r.createElement("a",{href:"https://github.com/SuperManifolds"},"Alex Sørlie"),","," ",r.createElement("a",{href:"https://mlnr.dev/"},"cane"),","," ","UnventedManicotti,"," ","jiraph"," ","and more."),r.createElement("p",{className:"text-center"},r.createElement("a",{href:"https://gist.github.com/ajayyy/9bfec83d57ea34f5182658ec8445aa9d"},"Privacy Policy (Human Readable)"),", ",r.createElement("a",{href:"https://gist.github.com/ajayyy/9e8100f069348e0bc062641f34d6af12"},"Terms of Use"),", ",r.createElement("a",{href:"donate"},"Donate")),r.createElement("p",{className:"text-center"},r.createElement("a",{href:"free"},"DeArrow Free")))))}},5724:function(e,t,a){a.d(t,{b:function(){return r},m:function(){return n}});const r={chrome:"https://chrome.google.com/webstore/detail/enamippconapkdmgfgjchkhakpfinmaj",firefox:"https://addons.mozilla.org/firefox/addon/dearrow"};function n(){if("undefined"==typeof window)return{};return window.location.hash.slice(1).split("&").reduce(((e,t)=>{const[a,r]=t.split("=");return e[a]=function(e){if("true"===e)return!0;if("false"===e)return!1;if(Number.isFinite(e))return Number(e);return decodeURIComponent(e)}(r),e}),{})}}}]);
//# sourceMappingURL=component---src-pages-index-js-e414933bd119af1279e5.js.map