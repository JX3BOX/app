(function(e){function r(r){for(var s,i,o=r[0],c=r[1],u=r[2],v=0,p=[];v<o.length;v++)i=o[v],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&p.push(n[i][0]),n[i]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(e[s]=c[s]);l&&l(r);while(p.length)p.shift()();return a.push.apply(a,u||[]),t()}function t(){for(var e,r=0;r<a.length;r++){for(var t=a[r],s=!0,o=1;o<t.length;o++){var c=t[o];0!==n[c]&&(s=!1)}s&&(a.splice(r--,1),e=i(i.s=t[0]))}return e}var s={},n={servers:0},a=[];function i(r){if(s[r])return s[r].exports;var t=s[r]={i:r,l:!1,exports:{}};return e[r].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=e,i.c=s,i.d=function(e,r,t){i.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,r){if(1&r&&(e=i(e)),8&r)return e;if(4&r&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var s in e)i.d(t,s,function(r){return e[r]}.bind(null,s));return t},i.n=function(e){var r=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(r,"a",r),r},i.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},i.p="https://console.cnyixun.com/static/app/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=r,o=o.slice();for(var u=0;u<o.length;u++)r(o[u]);var l=c;a.push([8,"chunk-vendors","chunk-common"]),t()})({"35b1":function(e,r,t){"use strict";t("6e44")},"5bf5":function(e,r,t){"use strict";t.r(r);t("e260"),t("e6cf"),t("cca6"),t("a79d");var s=t("2b0e"),n=t("5c96"),a=t.n(n),i=t("6a69"),o=(t("6b30"),t("c5b4"),function(){var e=this,r=e._self._c;return r("div",{staticClass:"p-app-servers",attrs:{id:"app"}},[r("Header"),r("Breadcrumb",{staticClass:"m-app-servers-bread",attrs:{name:"开服监控",slug:"servers",root:"/app/servers",feedbackEnable:!0,crumbEnable:!0}},[r("img",{staticClass:"u-app-servers",attrs:{slot:"logo","svg-inline":"",src:e.getIcon("servers")},slot:"logo"})]),r("LeftSidebar",{attrs:{open:!1}},[r("Nav")],1),r("Main",{attrs:{withoutRight:!0,withoutLeft:!0}},[r("div",{staticClass:"m-app-servers"},[r("h1",{staticClass:"m-app-servers-title"},[e._v("剑三服务器实时监控面板")]),r("div",{staticClass:"searchbar-wrapper"},[r("el-input",{staticClass:"input-with-select",attrs:{placeholder:"搜索全部服务器"},model:{value:e.searchServerName,callback:function(r){e.searchServerName=r},expression:"searchServerName"}},[r("template",{slot:"prepend"},[e._v("服务器名")]),[r("i",{staticClass:"el-icon-search",attrs:{slot:"append"},slot:"append"})]],2)],1),e.favList.length?r("div",{staticClass:"serverbox"},[r("h2",[e._v("[ 收藏 ]")]),r("el-row",{staticClass:"server-wrapper server-group-unpinned",attrs:{gutter:20}},e._l(e.favList,(function(t,s){return r("ServerItem",{key:s,attrs:{server:t,pinned:!1},on:{"toogle-server":function(r){return e.clickServer(t)}}})})),1)],1):e._e(),e._l(e.list,(function(t,s){return r("div",{key:s,staticClass:"serverbox"},[t.length?[r("h2",[e._v("[ "+e._s(e._f("serverName")(s))+" ]")]),r("el-row",{staticClass:"server-wrapper server-group-unpinned",attrs:{gutter:20}},e._l(t,(function(t,s){return r("ServerItem",{key:s,attrs:{server:t,pinned:!1},on:{"toogle-server":function(r){return e.clickServer(t)}}})})),1)]:[r("h2",[e._v("[ "+e._s(e._f("serverName")(s))+" ]")]),r("el-alert",{staticClass:"u-alert",attrs:{title:"没有对应的服务器",type:"info",center:"","show-icon":""}})]],2)}))],2),r("Footer")],1)],1)}),c=[],u=t("b85c"),l=(t("d3b7"),t("6062"),t("3ca3"),t("ddb0"),t("4de4"),t("99af"),t("ac1f"),t("1276"),t("159b"),t("caad"),t("2532"),t("d81d"),t("a15b"),t("841c"),t("216c")),v=function(){var e=this,r=e._self._c;return r("el-col",{staticClass:"server-node",attrs:{span:3}},[r("div",{staticClass:"button-wrapper"},[r("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"".concat(e.server.ipAddress,":").concat(e.server.ipPort),placement:"bottom","popper-class":"tooltip-ipaddress",disabled:!e.server.ipAddress||""===e.server.ipAddress}},[r("el-button",{ref:"button",staticClass:"server-button",class:{"server-online":e.server.connectState,"server-offline":!1===e.server.connectState,"server-pinned":e.pinned},attrs:{plain:!e.focused,type:"plain"},on:{click:function(r){return e.$emit("toogle-server",e.server.serverName,e.server.gate)}}},[r("i",{staticClass:"u-server-icon"}),e._v(" "+e._s(e.server.serverName)+" ")])],1)],1),e.server.zoneName&&""!==e.server.zoneName?r("div",{staticClass:"text-wrapper"},[r("span",[e._v(e._s(e.server.zoneName)+" | "+e._s(e.server.mainServer))])]):e._e()])},p=[],f={name:"FServerNode",components:{},props:{width:{type:String,default:"auto"},server:{type:Object,default:function(){return{connectState:null,ipAddress:"",ipPort:"",mainServer:"",serverName:"双剑合璧",zoneName:""}}},pinned:{type:Boolean,default:!1},focused:{type:Boolean,default:!1}},data:function(){return{key:1}},computed:{},methods:{}},d=f,h=t("2877"),m=Object(h["a"])(d,v,p,!1,null,null,null),b=m.exports,S=t("c9d2"),g=(t("c7eb"),t("1da1"),t("bc3a")),y=t.n(g),_=t("65c2"),w=t("41cb"),N=y.a.create({baseURL:_["__spider"]});function j(){return Object(w["a"])().get("api/cms/user/my/meta",{params:{key:"jx3_servers"}}).then((function(e){return e.data.data}))}function C(e){return Object(w["a"])().post("api/cms/user/my/meta",{val:e},{params:{key:"jx3_servers"}}).then((function(e){return e.data.data}))}function k(){return N.get("/jx3servers")}var x=t("686d"),O={name:"Servers",data:function(){return{searchServerName:"",isShowMainServer:!0,serverData:{},searchData:{},serverList:[],serverAllList:[],favList:[]}},computed:{list:function(){return this.searchServerName?this.searchData:this.serverData},uid:function(){return S["a"].getInfo().uid||0}},methods:{getIcon:function(e){return _["__imgPath"]+"image/box/"+e+".svg"},clickServer:function(e){var r=new Set(this.favList),t=[];r.has(e)?r.delete(e):r.add(e);var s,n=Object(u["a"])(r.keys());try{for(n.s();!(s=n.n()).done;){var a=s.value;t.push(a)}}catch(i){n.e(i)}finally{n.f()}this.favList=t,this.setSavedServers()},loadAllServers:function(){var e=this;k().then((function(r){var t,s=[],n=null===(t=r.data.data)||void 0===t?void 0:t.filter((function(e){return e.serverName===e.mainServer&&s.push(e),e.serverName!==e.mainServer}));e.serverList=s,e.serverAllList=s.concat(n),e.sortServer(s),e.uid&&j().then((function(r){e.serverFav(r)}))}))},sortServer:function(e){var r=[],t=[];e.filter((function(e){x[e.serverName]&&("std"==x[e.serverName].client?t.push(e):r.push(e))})),this.serverData={server:t,old:r}},serverFav:function(e){var r=this;e&&(e=e.split(","),this.serverList.forEach((function(t){e.includes(t.mainServer)&&r.favList.push(t)})))},setSavedServers:function(){if(!this.uid)return S["a"].toLogin();var e=this.favList.map((function(e){return e.serverName}));C(e.join(",")).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))},searchServer:function(e){if(!e)return delete this.serverData.search;var r=[];this.serverAllList.forEach((function(t){-1!==t.serverName.indexOf(e)&&r.push(t)})),this.searchData={search:r}}},filters:{serverName:function(e){var r={search:"搜索结果",server:"重制",old:"缘起"};return r[e]}},created:function(){this.loadAllServers()},components:{Nav:l["a"],ServerItem:b},watch:{searchServerName:function(e){this.searchServer(e)}}},L=O,P=(t("35b1"),Object(h["a"])(L,o,c,!1,null,null,null)),A=P.exports;s["default"].config.productionTip=!1,s["default"].use(a.a),s["default"].use(i["a"]),new s["default"]({render:function(e){return e(A)}}).$mount("#app")},"6e44":function(e,r,t){},8:function(e,r,t){e.exports=t("5bf5")}});
//# sourceMappingURL=servers.2dd2430e.js.map