(function(e){function r(r){for(var n,i,o=r[0],c=r[1],l=r[2],u=0,p=[];u<o.length;u++)i=o[u],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&p.push(s[i][0]),s[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);v&&v(r);while(p.length)p.shift()();return a.push.apply(a,l||[]),t()}function t(){for(var e,r=0;r<a.length;r++){for(var t=a[r],n=!0,o=1;o<t.length;o++){var c=t[o];0!==s[c]&&(n=!1)}n&&(a.splice(r--,1),e=i(i.s=t[0]))}return e}var n={},s={servers:0},a=[];function i(r){if(n[r])return n[r].exports;var t=n[r]={i:r,l:!1,exports:{}};return e[r].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=e,i.c=n,i.d=function(e,r,t){i.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,r){if(1&r&&(e=i(e)),8&r)return e;if(4&r&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var n in e)i.d(t,n,function(r){return e[r]}.bind(null,n));return t},i.n=function(e){var r=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(r,"a",r),r},i.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},i.p="https://console.cnyixun.com/static/app/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=r,o=o.slice();for(var l=0;l<o.length;l++)r(o[l]);var v=c;a.push([2,"chunk-vendors","chunk-common"]),t()})({2:function(e,r,t){e.exports=t("5bf5")},"5bf5":function(e,r,t){"use strict";t.r(r);t("e260"),t("e6cf"),t("cca6"),t("a79d");var n=t("2b0e"),s=t("5c96"),a=t.n(s),i=t("6a69"),o=(t("6b30"),t("c5b4"),function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"p-app-servers",attrs:{id:"app"}},[t("Header"),t("Breadcrumb",{staticClass:"m-app-servers-bread",attrs:{name:"开服监控",slug:"servers",root:"/app/servers",feedbackEnable:!0,crumbEnable:!0}},[t("img",{staticClass:"u-app-servers",attrs:{slot:"logo","svg-inline":"",src:e.getIcon("servers")},slot:"logo"})]),t("LeftSidebar",{attrs:{open:!1}},[t("Nav")],1),t("Main",{attrs:{withoutRight:!0,withoutLeft:!0}},[t("div",{staticClass:"m-app-servers"},[t("h1",{staticClass:"m-app-servers-title"},[e._v("剑三服务器实时监控面板")]),t("div",{staticClass:"searchbar-wrapper"},[t("el-input",{staticClass:"input-with-select",attrs:{placeholder:"搜索服务器"},model:{value:e.searchServerName,callback:function(r){e.searchServerName=r},expression:"searchServerName"}},[t("template",{slot:"prepend"},[e._v("服务器名")]),t("template",{slot:"append"},[t("el-switch",{staticStyle:{display:"block"},attrs:{"active-color":"#13ce66","active-text":"只看主服"},model:{value:e.isShowMainServer,callback:function(r){e.isShowMainServer=r},expression:"isShowMainServer"}})],1)],2)],1),t("el-row",{directives:[{name:"show",rawName:"v-show",value:e.pinnedServerName.length>0&&e.serverList.length>0,expression:"\n                    pinnedServerName.length > 0 && serverList.length > 0\n                "}],staticClass:"server-wrapper server-group-pinned",attrs:{gutter:20}},[e._l(e.serverList,(function(r,n){return[t("f-server-node",{directives:[{name:"show",rawName:"v-show",value:e.pinnedServerName.includes(r.serverName),expression:"\n                            pinnedServerName.includes(server.serverName)\n                        "}],key:n,attrs:{server:r,pinned:!0},on:{"toogle-server":e.clickServer}})]}))],2),t("el-row",{staticClass:"server-wrapper server-group-unpinned",attrs:{gutter:20}},[e._l(e.serverList,(function(r,n){return[t("f-server-node",{directives:[{name:"show",rawName:"v-show",value:e.showUnpinnedServerCondition(r),expression:"showUnpinnedServerCondition(server)"}],key:n,attrs:{server:r,pinned:!1},on:{"toogle-server":e.clickServer}})]}))],2)],1),t("Footer")],1)],1)}),c=[],l=(t("ac1f"),t("5319"),t("caad"),t("2532"),t("a434"),t("4de4"),t("99af"),t("1276"),t("a15b"),t("216c")),v=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("el-col",{staticClass:"server-node",attrs:{span:3}},[t("div",{staticClass:"button-wrapper"},[t("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:e.server.ipAddress+":"+e.server.ipPort,placement:"bottom","popper-class":"tooltip-ipaddress",disabled:!e.server.ipAddress||""===e.server.ipAddress}},[t("el-button",{ref:"button",staticClass:"server-button",class:{"server-online":e.server.connectState,"server-offline":!1===e.server.connectState,"server-pinned":e.pinned},attrs:{plain:!e.focused,type:"plain"},on:{click:function(r){return e.$emit("toogle-server",e.server.serverName,e.server.gate)}}},[t("i",{staticClass:"u-server-icon"}),e._v(" "+e._s(e.server.serverName)+" "),e.server.serverName===e.server.mainServer?t("span",{staticClass:"u-server-ismain"},[e._v("[主]")]):e._e()])],1)],1),e.server.zoneName&&""!==e.server.zoneName?t("div",{staticClass:"text-wrapper"},[t("span",[e._v(e._s(e.server.zoneName)+" | "+e._s(e.server.mainServer))])]):e._e()])},u=[],p={name:"FServerNode",components:{},props:{width:{type:String,default:"auto"},server:{type:Object,default:function(){return{connectState:null,ipAddress:"",ipPort:"",mainServer:"",serverName:"双剑合璧",zoneName:""}}},pinned:{type:Boolean,default:!1},focused:{type:Boolean,default:!1}},data:function(){return{key:1}},computed:{},methods:{}},d=p,f=t("2877"),m=Object(f["a"])(d,v,u,!1,null,null,null),h=m.exports,S=t("408b"),g=t("ee8f"),b=(t("f114"),t("c9d2")),w=t("99fc"),N=t("65c2"),y={name:"Servers",data:function(){return{searchServerName:"",isShowMainServer:!0,serverList:[],pinnedServerName:[],uid:0}},computed:{},methods:{getIcon:function(e){return N["__imgPath"]+"image/box/"+e+".svg"},showUnpinnedServerCondition:function(e){var r=this.searchServerName.replace(/\ /g,""),t=""===r,n=-1!==e.serverName.indexOf(r),s=e.serverName===e.mainServer;return!this.pinnedServerName.includes(e.serverName)&&(!t&&n||t&&!this.isShowMainServer||t&&s)},clickServer:function(e){var r=this.pinnedServerName.indexOf(e);-1===r?this.pinnedServerName.push(e):this.pinnedServerName.splice(r,1),this.setSavedServers()},loadAllServers:function(){var e=this,r=g["JX3BOX"].__spider+"jx3servers";Object(S["a"])(r,"GET").then((function(r){if("success"===r.msg){var t=[],n=r.data.filter((function(e){return e.serverName===e.mainServer&&t.push(e),e.serverName!==e.mainServer}));e.serverList=t.concat(n)}})).catch((function(e){console.log(e)})).then((function(){}))},getUserId:function(){b["a"].isLogin()&&(this.uid=b["a"].getInfo().uid)},getSavedServers:function(){var e=this;this.uid?Object(w["a"])().then((function(r){var t=r;e.pinnedServerName=t?t.split(","):[]})).catch((function(r){e.getFromLocal()})):this.getFromLocal()},getFromLocal:function(){if(window.localStorage){var e=localStorage.getItem("jx3_servers");e&&(this.pinnedServerName=e.split(","))}},setSavedServers:function(){var e=this;this.uid?Object(w["d"])(this.pinnedServerName.join(",")).then((function(e){})).catch((function(r){e.setToLocal()})):this.setToLocal()},setToLocal:function(){if(window.localStorage){var e=this.pinnedServerName.join(",");localStorage.setItem("jx3_servers",e)}}},filters:{},mounted:function(){this.getUserId(),this.getSavedServers(),this.loadAllServers()},components:{Nav:l["a"],FServerNode:h}},_=y,x=(t("9de5"),Object(f["a"])(_,o,c,!1,null,null,null)),j=x.exports;n["default"].config.productionTip=!1,n["default"].use(a.a),n["default"].use(i["a"]),new n["default"]({render:function(e){return e(j)}}).$mount("#app")},"9de5":function(e,r,t){"use strict";t("a474")},a474:function(e,r,t){}});
//# sourceMappingURL=servers.d14bdb47.js.map