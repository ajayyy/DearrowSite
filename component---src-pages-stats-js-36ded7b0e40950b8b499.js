/*! For license information please see component---src-pages-stats-js-36ded7b0e40950b8b499.js.LICENSE.txt */
(self.webpackChunksponsorblock=self.webpackChunksponsorblock||[]).push([[33],{5900:function(e,t){var a;!function(){"use strict";var l={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var s=typeof a;if("string"===s||"number"===s)e.push(a);else if(Array.isArray(a)){if(a.length){var r=n.apply(null,a);r&&e.push(r)}}else if("object"===s)if(a.toString===Object.prototype.toString)for(var o in a)l.call(a,o)&&a[o]&&e.push(o);else e.push(a.toString())}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(a=function(){return n}.apply(t,[]))||(e.exports=a)}()},2513:function(e,t,a){"use strict";a.r(t);var l=a(5785),n=a(7294),s=a(5900),r=a.n(s),o=a(8678),c=a(262);const i="https://sponsor.ajay.app";let m="/api/getTopUsers?categoryStats=true",u=0,d="all",p=!1;t.default=()=>{const{0:e,1:t}=(0,n.useState)({apiUsers:0,activeUsers:0,userCount:0,totalSubmissions:0,minutesSaved:0,viewCount:0}),{0:a,1:s}=(0,n.useState)({visible:!1,data:[]}),E=["Sponsor","Intro","Outro","Interaction","Self Promotion","Non-Music Section","Preview","Highlight","Filler","Exclusive Access","Chapter"],g=["#00d400","#00ffff","#0202ed","#cc00ff","#ffff00","#ff9900","#008fd6","#ff1684","#6600ff","#008a5c","#ffd679"];const{0:v,1:h}=(0,n.useState)([]),{0:f,1:S}=(0,n.useState)(!0);function b(e){const t=new URL(""+i+m);return t.searchParams.append("sortType",u),t.searchParams.append("category",d),fetch(t).then((e=>e.ok?e.json():Promise.reject(e))).then((t=>{let a=t.userNames.length;e&&((0,l.Z)(document.getElementsByClassName("sorted")).forEach((e=>e.classList.remove("sorted"))),e.classList.add("sorted"),e.classList.remove("sort-loading"));const n=[];for(let e=0;e<a;e++){const a=Math.floor(t.minutesSaved[e]/60/24),l=(t.minutesSaved[e]/60%24).toFixed(1);let s=!1;if("categoryStats"in t){const a=t.categoryStats[e].reduce(((e,t)=>e+t),0);s=t.categoryStats[e].map((e=>[e,(e/a*100).toFixed(2)]))}n.push({userName:t.userNames[e],viewCount:t.viewCounts[e],totalSubmissions:t.totalSubmissions[e],minutesSaved:(a>0?a+"d ":"")+(l>0?l+"h ":""),categoryStats:s})}h(n)})).catch((e=>console.error(e)))}(0,n.useEffect)((()=>{fetch(i+"/api/getTotalStats?countContributingUsers=true").then((e=>e.ok?e.json():Promise.reject(e))).then((e=>{S(!1),t(e)})).catch((e=>console.error(e))),b()}),[]);return n.createElement(o.Z,null,n.createElement(c.Z,{title:"Stats"}),n.createElement("div",{className:"container"},n.createElement("h2",{className:"text-center"},"Overall Stats"),n.createElement("table",null,n.createElement("tbody",null,n.createElement("tr",null,n.createElement("td",null,"Active Users:"),n.createElement("td",{className:f?"loading":null},e.apiUsers.toLocaleString()," users")),n.createElement("tr",null,n.createElement("td",null,"Contributing Users:"),n.createElement("td",{className:f?"loading":null},e.userCount.toLocaleString()," users")),n.createElement("tr",null,n.createElement("td",null,"Submissions:"),n.createElement("td",{className:f?"loading":null},e.totalSubmissions.toLocaleString()," ","segments")),n.createElement("tr",null,n.createElement("td",null,"Time Saved:"),n.createElement("td",{className:f?"loading":null},Math.floor(e.minutesSaved/60/24/365)," ","years"," ",Math.floor(e.minutesSaved/60/24)%365," ","days"," ",(e.minutesSaved/60%24).toFixed(1)," ","hours")),n.createElement("tr",null,n.createElement("td",null,"Skip Count:"),n.createElement("td",{className:f?"loading":null},e.viewCount.toLocaleString()," skips")))),n.createElement("div",null,n.createElement("h2",{className:"text-center no-bottom-margin"},"Top Contributors"),n.createElement("div",{className:"text-center text-small"},"Click a column title to change the sort"),n.createElement("div",{className:"text-center text-small"},n.createElement("label",null,n.createElement("input",{type:"checkbox",value:p,onChange:e=>{p=e.target.checked}})," ","Show category stats on hover")),n.createElement("div",{className:"text-center text-small"},n.createElement("label",{id:"filterlabel"},"Filter by Category:",n.createElement("select",{defaultValue:"all",onChange:e=>{m="/api/getTopCategoryUsers",d=e.target.value,"all"===d&&(m="/api/getTopUsers");const t=document.querySelector("label#filterlabel");t.classList.add("sort-loading"),b().then((()=>t.classList.remove("sort-loading")))}},n.createElement("option",{value:"all"},"All"),n.createElement("option",{value:"sponsor"},"Sponsor"),n.createElement("option",{value:"intro"},"Intro"),n.createElement("option",{value:"outro"},"Endcards/ Credits"),n.createElement("option",{value:"interaction"},"Interaction Reminder"),n.createElement("option",{value:"selfpromo"},"Unpaid/ Self Promotion"),n.createElement("option",{value:"music_offtopic"},"Non-Music"),n.createElement("option",{value:"preview"},"Preview"),n.createElement("option",{value:"poi_highlight"},"Highlight"),n.createElement("option",{value:"filler"},"Filler"),n.createElement("option",{value:"exclusive_access"},"Exclusive Access"),n.createElement("option",{value:"chapter"},"Chapter")))))),n.createElement("div",{className:"container-fluid stats-table"},n.createElement("table",{className:"highlight-row-on-hover"},n.createElement("thead",null,n.createElement("tr",null,n.createElement("th",{className:"rank"},"Rank"),n.createElement("th",null,"User Name"),n.createElement("th",{className:"pointer",onClick:e=>{e.target.classList.contains("sorted")||(e.target.classList.add("sort-loading"),u=2,b(e.target))}},"Submissions"),n.createElement("th",{className:"pointer sorted",onClick:e=>{e.target.classList.contains("sorted")||(e.target.classList.add("sort-loading"),u=0,b(e.target))}},"Time Saved"),n.createElement("th",{className:"pointer",onClick:e=>{e.target.classList.contains("sorted")||(e.target.classList.add("sort-loading"),u=1,b(e.target))}},"Total Skips"))),n.createElement("tbody",null,0===v.length?n.createElement("tr",{className:"row--even"},n.createElement("td",{className:"topUsersLoading",colSpan:"5"},"Loading...")):v.map(((e,t)=>n.createElement("tr",{className:"row--"+(t%2?"odd":"even"),key:t,onMouseEnter:t=>{var a;!1!==(a=e.categoryStats)&&p&&s({visible:!0,data:a})},onMouseLeave:e=>{s({visible:!1,data:[]})}},n.createElement("td",{className:"rank celltype-number"},t+1,"."),n.createElement("td",null,e.userName),n.createElement("td",{className:"celltype-number has--categorystats"},e.totalSubmissions.toLocaleString()),n.createElement("td",{className:"celltype-number"},e.minutesSaved),n.createElement("td",{className:"celltype-number"},e.viewCount.toLocaleString())))))),n.createElement("div",{className:r()("categorystats",{"categorystats--hidden":!a.visible})},n.createElement("table",null,n.createElement("thead",null,n.createElement("tr",null,n.createElement("th",null,"Category"),n.createElement("th",{colSpan:"2"},"Submissions"))),n.createElement("tbody",null,a.data.map(((e,t)=>n.createElement("tr",{className:r()({dim:0===e[0]}),style:{color:g[t]},key:t},n.createElement("td",null,E[t]),n.createElement("td",{className:"celltype-number"},e[0]),n.createElement("td",{className:"celltype-number"},e[1],"%")))))),n.createElement("div",{className:"categorystats-piechart",style:{background:function(e){let t=0;return"conic-gradient("+e.map(((e,a)=>{const l=parseFloat(e[1]),n=g[a]+" 0 "+(t+l)+"%";return t+=l,n})).join(",")+")"}(a.data)}}))))}}}]);
//# sourceMappingURL=component---src-pages-stats-js-36ded7b0e40950b8b499.js.map