(function(e){function r(r){for(var n,o,i=r[0],c=r[1],l=r[2],v=0,f=[];v<i.length;v++)o=i[v],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&f.push(s[o][0]),s[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);u&&u(r);while(f.length)f.shift()();return a.push.apply(a,l||[]),t()}function t(){for(var e,r=0;r<a.length;r++){for(var t=a[r],n=!0,i=1;i<t.length;i++){var c=t[i];0!==s[c]&&(n=!1)}n&&(a.splice(r--,1),e=o(o.s=t[0]))}return e}var n={},s={servers:0},a=[];function o(r){if(n[r])return n[r].exports;var t=n[r]={i:r,l:!1,exports:{}};return e[r].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=e,o.c=n,o.d=function(e,r,t){o.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,r){if(1&r&&(e=o(e)),8&r)return e;if(4&r&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var n in e)o.d(t,n,function(r){return e[r]}.bind(null,n));return t},o.n=function(e){var r=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(r,"a",r),r},o.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},o.p="https://console.cnyixun.com/static/app/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=r,i=i.slice();for(var l=0;l<i.length;l++)r(i[l]);var u=c;a.push([9,"chunk-vendors","chunk-common"]),t()})({"264a":function(e,r,t){"use strict";t("2f85")},"2f85":function(e,r,t){},"5bf5":function(e,r,t){"use strict";t.r(r);t("e260"),t("e6cf"),t("cca6"),t("a79d");var n=t("2b0e"),s=t("5c96"),a=t.n(s),o=t("6a69"),i=(t("6b30"),t("c5b4"),function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"p-app-servers",attrs:{id:"app"}},[t("Header"),t("Breadcrumb",{staticClass:"m-app-servers-bread",attrs:{name:"开服监控",slug:"servers",root:"/app/servers",feedbackEnable:!0,crumbEnable:!0}},[t("img",{staticClass:"u-app-servers",attrs:{slot:"logo","svg-inline":"",src:e.getIcon("servers")},slot:"logo"})]),t("LeftSidebar",{attrs:{open:!1}},[t("Nav")],1),t("Main",{attrs:{withoutRight:!0,withoutLeft:!0}},[t("div",{staticClass:"m-app-servers"},[t("h1",{staticClass:"m-app-servers-title"},[e._v("剑三服务器实时监控面板")]),t("div",{staticClass:"searchbar-wrapper"},[t("el-input",{staticClass:"input-with-select",attrs:{placeholder:"搜索服务器"},model:{value:e.searchServerName,callback:function(r){e.searchServerName=r},expression:"searchServerName"}},[t("template",{slot:"prepend"},[e._v("服务器名")]),t("template",{slot:"append"},[t("i",{staticClass:"el-icon-search"})])],2)],1),e._l(e.serverData,(function(r,n){return t("div",{key:n,staticClass:"serverbox"},[r&&r.length>0?[t("h2",[e._v("[ "+e._s(e._f("serverName")(n))+" ]")]),t("el-row",{staticClass:"server-wrapper server-group-unpinned",attrs:{gutter:20}},e._l(r,(function(r,n){return t("ServerItem",{key:n,attrs:{server:r,pinned:!1},on:{"toogle-server":function(t){return e.clickServer(r)}}})})),1)]:e._e()],2)}))],2),t("Footer")],1)],1)}),c=[],l=t("2909"),u=(t("e9c4"),t("a434"),t("4de4"),t("d3b7"),t("99af"),t("6062"),t("3ca3"),t("ddb0"),t("ac1f"),t("1276"),t("159b"),t("d81d"),t("a15b"),t("216c")),v=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("el-col",{staticClass:"server-node",attrs:{span:3}},[t("div",{staticClass:"button-wrapper"},[t("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:e.server.ipAddress+":"+e.server.ipPort,placement:"bottom","popper-class":"tooltip-ipaddress",disabled:!e.server.ipAddress||""===e.server.ipAddress}},[t("el-button",{ref:"button",staticClass:"server-button",class:{"server-online":e.server.connectState,"server-offline":!1===e.server.connectState,"server-pinned":e.pinned},attrs:{plain:!e.focused,type:"plain"},on:{click:function(r){return e.$emit("toogle-server",e.server.serverName,e.server.gate)}}},[t("i",{staticClass:"u-server-icon"}),e._v(" "+e._s(e.server.serverName)+" ")])],1)],1),e.server.zoneName&&""!==e.server.zoneName?t("div",{staticClass:"text-wrapper"},[t("span",[e._v(e._s(e.server.zoneName)+" | "+e._s(e.server.mainServer))])]):e._e()])},f=[],p={name:"FServerNode",components:{},props:{width:{type:String,default:"auto"},server:{type:Object,default:function(){return{connectState:null,ipAddress:"",ipPort:"",mainServer:"",serverName:"双剑合璧",zoneName:""}}},pinned:{type:Boolean,default:!1},focused:{type:Boolean,default:!1}},data:function(){return{key:1}},computed:{},methods:{}},d=p,h=t("2877"),m=Object(h["a"])(d,v,f,!1,null,null,null),b=m.exports,g=t("c9d2"),S=t("99fc"),y=t("65c2"),_={name:"Servers",data:function(){return{searchServerName:"",isShowMainServer:!0,serverData:[],serverAllList:[],uid:0}},computed:{},methods:{getIcon:function(e){return y["__imgPath"]+"image/box/"+e+".svg"},clickServer:function(e){var r=this.serverData.fav||[],t=JSON.stringify(r).indexOf(JSON.stringify(e));if(-1!==t)for(var n=0;n<r.length;n++)r[n].mainServer==e.mainServer&&r.splice(n,1);else r.push(e);this.serverData.fav=r,this.setSavedServers()},loadAllServers:function(){var e=this;Object(S["a"])().then((function(r){var t=[],n=r.filter((function(e){return e.serverName===e.mainServer&&t.push(e),e.serverName!==e.mainServer}));e.sortServer(t),e.serverAllList=t.concat(n)}))},sortServer:function(e){var r=[],t=[],n=this.getFromLocal();e=e.filter((function(e){if(-1!==e.zoneName.indexOf("比赛专区")||-1==e.zoneName.indexOf("区"))t.unshift(e);else{if(-1===e.zoneName.indexOf("缘起"))return e;r.push(e)}})),this.serverData={fav:n,server:e,old:r,other:t}},getUserId:function(){g["a"].isLogin()&&(this.uid=g["a"].getInfo().uid)},getSavedServers:function(){var e=this;this.uid?Object(S["b"])().then((function(r){var t=e.serverFav(r),n=e.getFromLocal();e.serverData.fav=Object(l["a"])(new Set(t.concat(n)))})).catch((function(r){e.serverData.fav=e.getFromLocal()})):this.serverData.fav=this.getFromLocal()},serverFav:function(e){if(e){var r=[];return e=Object(l["a"])(new Set(e.split(","))).filter((function(e){return""!==e})),this.serverAllList.forEach((function(t){e.forEach((function(e){e==t.mainServer&&e==t.serverName&&r.push(t)}))})),r}},getFromLocal:function(){var e=localStorage.getItem("jx3_servers");return e?this.serverData.fav=JSON.parse(e):[]},setSavedServers:function(){if(console.log("22"),console.log(this.uid,"?"),this.uid){var e=this.serverData.fav;e=e.map((function(e){return e.serverName})),Object(S["e"])(e.join(",")).then((function(e){console.log(e,"setSavedServers")})).catch((function(e){console.log(e)}))}this.setToLocal()},setToLocal:function(){try{localStorage.setItem("jx3_servers",JSON.stringify(this.serverData.fav))}catch(e){localStorage.clear()}}},filters:{serverName:function(e){var r={server:"正式服",old:"怀旧服",other:"其他",fav:"收藏"};return r[e]}},mounted:function(){this.getUserId(),this.loadAllServers(),this.getSavedServers()},components:{Nav:u["a"],ServerItem:b}},N=_,O=(t("264a"),Object(h["a"])(N,i,c,!1,null,null,null)),w=O.exports;n["default"].config.productionTip=!1,n["default"].use(a.a),n["default"].use(o["a"]),new n["default"]({render:function(e){return e(w)}}).$mount("#app")},9:function(e,r,t){e.exports=t("5bf5")}});
//# sourceMappingURL=servers.1ec320cd.js.map