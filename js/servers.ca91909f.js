(function(e){function r(r){for(var s,o,i=r[0],c=r[1],l=r[2],u=0,p=[];u<i.length;u++)o=i[u],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&p.push(n[o][0]),n[o]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(e[s]=c[s]);v&&v(r);while(p.length)p.shift()();return a.push.apply(a,l||[]),t()}function t(){for(var e,r=0;r<a.length;r++){for(var t=a[r],s=!0,i=1;i<t.length;i++){var c=t[i];0!==n[c]&&(s=!1)}s&&(a.splice(r--,1),e=o(o.s=t[0]))}return e}var s={},n={servers:0},a=[];function o(r){if(s[r])return s[r].exports;var t=s[r]={i:r,l:!1,exports:{}};return e[r].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=e,o.c=s,o.d=function(e,r,t){o.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,r){if(1&r&&(e=o(e)),8&r)return e;if(4&r&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var s in e)o.d(t,s,function(r){return e[r]}.bind(null,s));return t},o.n=function(e){var r=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(r,"a",r),r},o.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},o.p="https://console.cnyixun.com/static/app/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=r,i=i.slice();for(var l=0;l<i.length;l++)r(i[l]);var v=c;a.push([2,"chunk-vendors","chunk-common"]),t()})({2:function(e,r,t){e.exports=t("5bf5")},"5bf5":function(e,r,t){"use strict";t.r(r);t("e260"),t("e6cf"),t("cca6"),t("a79d");var s=t("2b0e"),n=t("5c96"),a=t.n(n),o=t("6a69"),i=(t("6b30"),function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"p-app-servers",attrs:{id:"app"}},[t("Header"),t("Breadcrumb",{staticClass:"m-app-servers-bread",attrs:{name:"开服监控",slug:"servers",root:"/app/servers",feedbackEnable:!0}},[t("svg",{class:"u-app-servers",attrs:{slot:"logo",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 60 60","svg-inline":"",role:"presentation",focusable:"false",tabindex:"-1"},slot:"logo"},[t("path",{attrs:{d:"M.835 22A4.512 4.512 0 000 24.608v11.783A4.613 4.613 0 004.608 41H29v8.101A5.016 5.016 0 0025.101 53H1a1 1 0 100 2h24.101c.465 2.279 2.484 4 4.899 4s4.434-1.721 4.899-4H59a1 1 0 100-2H34.899A5.016 5.016 0 0031 49.101V41h24.392A4.613 4.613 0 0060 36.392V24.608A4.51 4.51 0 0059.165 22H.835zM10.5 35C8.019 35 6 32.981 6 30.5S8.019 26 10.5 26s4.5 2.019 4.5 4.5-2.019 4.5-4.5 4.5zM33 54c0 1.654-1.346 3-3 3s-3-1.346-3-3 1.346-3 3-3 3 1.346 3 3zm1-24a1 1 0 110-2 1 1 0 010 2zm2 3a1 1 0 110-2 1 1 0 010 2zm2-3a1 1 0 110-2 1 1 0 010 2zm2 3a1 1 0 110-2 1 1 0 010 2zm2-3a1 1 0 110-2 1 1 0 010 2zm2 3a1 1 0 110-2 1 1 0 010 2zm2-3a1 1 0 110-2 1 1 0 010 2zm2 3a1 1 0 110-2 1 1 0 010 2zm2-3a1 1 0 110-2 1 1 0 010 2zm2 3a1 1 0 110-2 1 1 0 010 2zM55.392 1H4.608A4.613 4.613 0 000 5.608v11.783C0 18.365.314 19.26.835 20h58.329c.522-.74.836-1.635.836-2.608V5.608A4.613 4.613 0 0055.392 1zM10.5 16C8.019 16 6 13.981 6 11.5S8.019 7 10.5 7 15 9.019 15 11.5 12.981 16 10.5 16zM34 11a1 1 0 110-2 1 1 0 010 2zm2 3a1 1 0 110-2 1 1 0 010 2zm2-3a1 1 0 110-2 1 1 0 010 2zm2 3a1 1 0 110-2 1 1 0 010 2zm2-3a1 1 0 110-2 1 1 0 010 2zm2 3a1 1 0 110-2 1 1 0 010 2zm2-3a1 1 0 110-2 1 1 0 010 2zm2 3a1 1 0 110-2 1 1 0 010 2zm2-3a1 1 0 110-2 1 1 0 010 2zm2 3a1 1 0 110-2 1 1 0 010 2z"}})]),t("div",{staticClass:"u-misc"},[e._v(" 常用链接 : "),t("a",{attrs:{href:"http://zt.xoyo.com/jx3/server/"}},[e._v("合服查询")])])]),t("LeftSidebar",[t("Nav")],1),t("Main",{attrs:{withoutRight:!0}},[t("div",{staticClass:"m-app-servers"},[t("h1",{staticClass:"m-app-servers-title"},[e._v("剑三服务器实时监控面板")]),t("div",{staticClass:"searchbar-wrapper"},[t("el-input",{staticClass:"input-with-select",attrs:{placeholder:"搜索服务器"},model:{value:e.searchServerName,callback:function(r){e.searchServerName=r},expression:"searchServerName"}},[t("template",{slot:"prepend"},[e._v("服务器名")]),t("template",{slot:"append"},[t("el-switch",{staticStyle:{display:"block"},attrs:{"active-color":"#13ce66","active-text":"只看主服"},model:{value:e.isShowMainServer,callback:function(r){e.isShowMainServer=r},expression:"isShowMainServer"}})],1)],2)],1),t("el-row",{directives:[{name:"show",rawName:"v-show",value:e.pinnedServerName.length>0&&e.serverList.length>0,expression:"\n                    pinnedServerName.length > 0 && serverList.length > 0\n                "}],staticClass:"server-wrapper server-group-pinned",attrs:{gutter:20}},[e._l(e.serverList,(function(r,s){return[t("f-server-node",{directives:[{name:"show",rawName:"v-show",value:e.pinnedServerName.includes(r.serverName),expression:"\n                            pinnedServerName.includes(server.serverName)\n                        "}],key:s,attrs:{server:r,pinned:!0},on:{"toogle-server":e.clickServer}})]}))],2),t("el-row",{staticClass:"server-wrapper server-group-unpinned",attrs:{gutter:20}},[e._l(e.serverList,(function(r,s){return[t("f-server-node",{directives:[{name:"show",rawName:"v-show",value:e.showUnpinnedServerCondition(r),expression:"showUnpinnedServerCondition(server)"}],key:s,attrs:{width:"200px",server:r,pinned:!1},on:{"toogle-server":e.clickServer}})]}))],2)],1),t("Footer")],1)],1)}),c=[],l=(t("99af"),t("4de4"),t("caad"),t("c975"),t("a15b"),t("a434"),t("ac1f"),t("2532"),t("5319"),t("1276"),t("216c")),v=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("el-col",{staticClass:"server-node",attrs:{span:4}},[t("div",{staticClass:"button-wrapper"},[t("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:e.server.ipAddress+":"+e.server.ipPort,placement:"bottom","popper-class":"tooltip-ipaddress",disabled:!e.server.ipAddress||""===e.server.ipAddress}},[t("el-button",{ref:"button",staticClass:"server-button",class:{"server-online":e.server.connectState,"server-offline":!1===e.server.connectState,"server-pinned":e.pinned},attrs:{plain:!e.focused,type:"plain"},on:{click:function(r){return e.$emit("toogle-server",e.server.serverName,e.server.gate)}}},[t("i",{staticClass:"u-server-icon"}),e._v(" "+e._s(e.server.serverName)+" "),e.server.serverName===e.server.mainServer?t("span",{staticClass:"u-server-ismain"},[e._v("[主]")]):e._e()])],1)],1),e.server.zoneName&&""!==e.server.zoneName?t("div",{staticClass:"text-wrapper"},[t("span",[e._v(e._s(e.server.zoneName)+" | "+e._s(e.server.mainServer))])]):e._e()])},u=[],p={name:"FServerNode",components:{},props:{width:{type:String,default:"auto"},server:{type:Object,default:function(){return{connectState:null,ipAddress:"",ipPort:"",mainServer:"",serverName:"双剑合璧",zoneName:""}}},pinned:{type:Boolean,default:!1},focused:{type:Boolean,default:!1}},data:function(){return{key:1}},computed:{},methods:{}},d=p,m=t("2877"),f=Object(m["a"])(d,v,u,!1,null,null,null),h=f.exports,S=t("408b"),g=t("ee8f"),b=(t("f114"),{name:"Servers",data:function(){return{searchServerName:"",isShowMainServer:!0,serverList:[],pinnedServerName:[]}},computed:{},methods:{showUnpinnedServerCondition:function(e){var r=this.searchServerName.replace(/\ /g,""),t=""===r,s=-1!==e.serverName.indexOf(r),n=e.serverName===e.mainServer;return!this.pinnedServerName.includes(e.serverName)&&(!t&&s||t&&!this.isShowMainServer||t&&n)},clickServer:function(e){var r=this.pinnedServerName.indexOf(e);-1===r?this.pinnedServerName.push(e):this.pinnedServerName.splice(r,1),this.setSavedServers()},loadAllServers:function(){var e=this,r=g["JX3BOX"].__spider+"jx3servers";Object(S["a"])(r,"GET").then((function(r){if("success"===r.msg){var t=[],s=r.data.filter((function(e){return e.serverName===e.mainServer&&t.push(e),e.serverName!==e.mainServer}));e.serverList=t.concat(s)}})).catch((function(e){console.log(e)})).then((function(){}))},getUserId:function(){g["User"].isLogin()&&(this.uid=g["User"].getInfo().uid)},getSavedServers:function(){var e=this,r=g["JX3BOX"].__server+"user/meta";this.uid?Object(S["a"])(r,"GET",!0,{},{},{uid:this.uid,key:"jx3_servers"}).then((function(r){if(10050==r.code){var t=r.data.value;e.pinnedServerName=t?t.split(","):[]}})).catch((function(r){switch(r.code){case-1:e.$message.error(r.msg),e.getFromLocal();break;case 9999:e.$message.error("登录失效, 请重新登录"),g["User"].destroy(),setTimeout((function(){g["User"].toLogin()}),2e3);break;default:e.$message.error("[".concat(r.code,"]").concat(r.msg)),e.getFromLocal()}})).then((function(){})):this.getFromLocal()},getFromLocal:function(){if(window.localStorage){var e=localStorage.getItem("jx3_servers");e&&(this.pinnedServerName=e.split(","))}},setSavedServers:function(){var e=this;if(this.uid){var r=g["JX3BOX"].__server+"user/meta";Object(S["a"])(r,"POST",!0,{uid:this.uid,key:"jx3_servers",value:this.pinnedServerName.join(",")}).then((function(e){e.code})).catch((function(r){switch(r.code){case-1:e.$message.error(r.msg),e.setToLocal();break;case 9999:e.$message.error("登录失效, 请重新登录"),g["User"].destroy(),setTimeout((function(){g["User"].toLogin()}),2e3);break;default:e.$message.error("[".concat(r.code,"]").concat(r.msg)),e.setToLocal()}})).then((function(){}))}else this.setToLocal()},setToLocal:function(){if(window.localStorage){var e=this.pinnedServerName.join(",");localStorage.setItem("jx3_servers",e)}}},filters:{},mounted:function(){this.getUserId(),this.getSavedServers(),this.loadAllServers()},components:{Nav:l["a"],FServerNode:h}}),w=b,N=(t("9de5"),Object(m["a"])(w,i,c,!1,null,null,null)),_=N.exports;s["default"].config.productionTip=!1,s["default"].use(a.a),s["default"].use(o["a"]),new s["default"]({render:function(e){return e(_)}}).$mount("#app")},"9de5":function(e,r,t){"use strict";var s=t("a474"),n=t.n(s);n.a},a474:function(e,r,t){}});
//# sourceMappingURL=servers.ca91909f.js.map