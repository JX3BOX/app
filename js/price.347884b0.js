(function(e){function t(t){for(var s,n,c=t[0],o=t[1],l=t[2],u=0,m=[];u<c.length;u++)n=c[u],Object.prototype.hasOwnProperty.call(r,n)&&r[n]&&m.push(r[n][0]),r[n]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(e[s]=o[s]);d&&d(t);while(m.length)m.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],s=!0,c=1;c<a.length;c++){var o=a[c];0!==r[o]&&(s=!1)}s&&(i.splice(t--,1),e=n(n.s=a[0]))}return e}var s={},r={price:0},i=[];function n(t){if(s[t])return s[t].exports;var a=s[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=s,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)n.d(a,s,function(t){return e[t]}.bind(null,s));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="https://console.cnyixun.com/static/app/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var d=o;i.push([11,"chunk-vendors"]),a()})({"03cb":function(e,t,a){},"0681":function(e,t,a){"use strict";a("03cb")},11:function(e,t,a){e.exports=a("e422")},"16f1":function(e,t,a){},"216c":function(e,t,a){"use strict";var s=function(){var e=this,t=e._self._c;return t("nav",{staticClass:"m-nav"},[t("h5",{staticClass:"u-title"},[e._v("应用入口")]),t("div",{staticClass:"m-app-box"},e._l(e.data,(function(a){return t("a",{key:a.slug,staticClass:"u-app",class:{on:e.isActive(a.slug)},attrs:{href:"../"+a.slug}},[t("i",{staticClass:"u-app-icon"},[t("img",{attrs:{src:e.getIcon(a.slug)}})]),t("span",[e._v(e._s(a.abbr))])])})),0)])},r=[],i=(a("caad"),a("2532"),a("65c2")),n={name:"Nav",data:function(){return{data:[{slug:"database",abbr:"数据库"},{slug:"icons",abbr:"图标"},{slug:"talent",abbr:"奇穴"},{slug:"talent2",abbr:"镇派"},{slug:"meridians",abbr:"经脉"},{slug:"haste",abbr:"急速"},{slug:"macroeditor",abbr:"写宏"},{slug:"translator",abbr:"繁體"},{slug:"servers",abbr:"开服"},{slug:"price",abbr:"金价"},{slug:"sudoku",abbr:"九宫格"}]}},computed:{},methods:{isActive:function(e){return!!location.pathname.split("/").includes(e)},getIcon:function(e){return i["__imgPath"]+"image/box/"+e+".svg"}},mounted:function(){}},c=n,o=(a("0681"),a("2877")),l=Object(o["a"])(c,s,r,!1,null,null,null);t["a"]=l.exports},"408b":function(e,t,a){"use strict";a.d(t,"a",(function(){return n})),a.d(t,"b",(function(){return c}));a("b64b"),a("d3b7");var s=a("bc3a"),r=a.n(s);function i(e){return new Promise((function(t,a){var s=r.a.create({headers:{"Content-Type":"application/json",Accept:"application/json"},timeout:1e4});s(e).then((function(e){t(e.data)})).catch((function(e){console.log(e.response),e.response?e.response.data.code?a(e.response.data):a({msg:e.response.data,code:e.response.status}):a({msg:"网络请求异常",code:-1})}))}))}function n(e,t,a,s,r,n){var c={url:""+e,method:t||"GET"};return c["withCredentials"]=void 0!==a&&a,void 0!=s&&Object.keys(s).length>0&&(c["data"]=s),void 0!=r&&""!==r&&(c["headers"]=r),void 0!=n&&Object.keys(n).length>0&&(c["params"]=n),i(c)}function c(e,t){return e+t}},4678:function(e,t,a){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function r(e){var t=i(e);return a(t)}function i(e){if(!a.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}r.keys=function(){return Object.keys(s)},r.resolve=i,e.exports=r,r.id="4678"},"5aac":function(e,t,a){"use strict";a("16f1")},e422:function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),r=a("5c96"),i=a.n(r),n=a("6a69"),c=(a("6b30"),a("c5b4"),a("9ca8")),o=(a("15af"),a("94b1"),a("fa52"),a("ef97"),a("007d"),a("db0e"),a("95a8"),a("0a6d"),function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("Header"),t("Breadcrumb",{attrs:{name:"金价走势",slug:"price",root:"/app/price",feedbackEnable:!0,crumbEnable:!0}},[t("img",{attrs:{slot:"logo","svg-inline":"",src:e.getIcon("price")},slot:"logo"})]),t("LeftSidebar",{attrs:{open:!1}},[t("Nav")],1),t("Main",{attrs:{withoutRight:!0,withoutLeft:!0}},[t("div",{staticClass:"m-price"},[t("h1",{staticClass:"m-price-title"},[e._v("剑三全区服金价走势")]),t("div",{directives:[{name:"loading",rawName:"v-loading",value:""===e.currentGate,expression:"currentGate === ''"}],staticClass:"m-price-box"},[t("div",{staticClass:"m-price-board board-wrapper"},[t("div",{staticClass:"m-price-header title-wrapper"},[t("span",{staticClass:"title-server-name"},[e._v(" "+e._s(""!==e.currentServer?e.currentServer:"请选择一个服务器")+" ")]),t("p",{staticClass:"title-origin"},[e._v(" 数据来源： "),t("el-link",{attrs:{type:"primary",href:"https://jx3.seasunwbl.com/",target:"_blank"}},[e._v("万宝楼")])],1)]),t("div",{staticClass:"m-price-nav"},[t("el-tabs",{attrs:{"tab-position":"top"},on:{"tab-click":e.changeServer},model:{value:e.currentGate,callback:function(t){e.currentGate=t},expression:"currentGate"}},e._l(e.serverList,(function(e,a){return t("el-tab-pane",{key:a,attrs:{label:e.serverName,name:e.serverName}})})),1)],1),t("div",{staticClass:"m-price-notice hint"},[e._v(" ♥ 请选择正规平台！警惕交易陷阱！部分虚假交易平台会用低价骗取您购买，但充值后又提示该订单已被出售或无货，导致你的钱在一段时间无法及时提现，而且你提现时又要再次收取手续费。 "),t("span",{staticStyle:{color:"#c00","font-weight":"bold"}},[e._v("单价越高，表示1元能买到更多的金，也就说明金价越便宜喔！")])]),e.singleServerPrice.today?t("div",{staticClass:"m-price-overview"},[t("el-row",{staticClass:"card-wrapper card-wrapper-single-server",attrs:{gutter:20}},[t("el-col",{attrs:{xs:24,md:8}},[t("el-card",[t("div",{staticClass:"card-price-summary u-lowest"},[t("div",{staticClass:"price-summary-title"},[e._v("昨日统计 （金/￥）")]),t("div",{staticClass:"price-summary-price"},[t("div",{staticClass:"price-summary-detail"},[t("span",{staticClass:"price-summary-number"},[e._v(" "+e._s(e.singleServerPrice.yesterday["official"])+" ")])]),t("div",{staticClass:"price-summary-detail"},[t("span",{staticClass:"price-summary-number"},[e._v(" "+e._s(e.singleServerPrice.yesterday["5173"])+" ")])]),t("div",{staticClass:"price-summary-detail"},[t("span",{staticClass:"price-summary-number"},[e._v(" "+e._s(e.singleServerPrice.yesterday["post"])+" ")])])]),t("div",{staticClass:"price-summary-price"},[t("div",{staticClass:"price-summary-detail"},[t("span",{staticClass:"price-summary-mini"},[e._v("万宝楼")])]),t("div",{staticClass:"price-summary-detail"},[t("span",{staticClass:"price-summary-mini"},[e._v("5173")])]),t("div",{staticClass:"price-summary-detail"},[t("span",{staticClass:"price-summary-mini"},[e._v("贴吧")])])])])])],1),t("el-col",{attrs:{xs:24,md:8}},[t("el-card",[t("div",{staticClass:"card-price-summary u-highest"},[t("div",{staticClass:"price-summary-title"},[e._v("今日数据 （金/￥）")]),t("div",{staticClass:"price-summary-price"},[t("div",{staticClass:"price-summary-detail"},[t("span",{staticClass:"price-summary-number"},[e._v(" "+e._s(e.mean(e.singleServerPrice.today["official"]))+" ")])]),t("div",{staticClass:"price-summary-detail"},[t("span",{staticClass:"price-summary-number"},[e._v(" "+e._s(e.mean(e.singleServerPrice.today["5173"]))+" ")])]),t("div",{staticClass:"price-summary-detail"},[t("span",{staticClass:"price-summary-number"},[e._v(" "+e._s(e.mean(e.singleServerPrice.today["post"]))+" ")])])]),t("div",{staticClass:"price-summary-price"},[t("div",{staticClass:"price-summary-detail"},[t("span",{staticClass:"price-summary-mini"},[e._v("万宝楼")])]),t("div",{staticClass:"price-summary-detail"},[t("span",{staticClass:"price-summary-mini"},[e._v("5173")])]),t("div",{staticClass:"price-summary-detail"},[t("span",{staticClass:"price-summary-mini"},[e._v("贴吧")])])])])])],1),t("el-col",{attrs:{xs:24,md:8}},[t("el-card",[t("div",{staticClass:"card-price-summary card-price-recommend"},[t("div",{staticClass:"price-summary-title"},[e._v("建议成交价")]),t("div",{staticClass:"price-summary-price"},[t("b",[e._v(" "+e._s(e.singleServerPrice.recommend)+" ")]),e._v(" 金 / ￥100 ")]),t("div",{staticClass:"price-summary-server"},[e._v(" 近三天平均成交价 在扣除手续费及提现费之前的价格 ")])])])],1)],1)],1):e._e(),t("div",{staticClass:"m-price-chart chart-wrapper"},[t("div",{directives:[{name:"show",rawName:"v-show",value:""!==e.currentGate,expression:"currentGate !== ''"}],staticClass:"chart-div chart-line"},[t("v-chart",{attrs:{options:e.lineOption,autoresize:!0},on:{legendselectchanged:e.onLineChartLegendselectchanged}})],1)])])])]),t("Footer")],1)],1)}),l=[],d=a("b85c"),u=a("3835"),m=a("2909"),p=a("c7eb"),b=a("1da1"),f=(a("99af"),a("b0c0"),a("a15b"),a("d3b7"),a("3ca3"),a("ddb0"),a("4e82"),a("b680"),a("4fad"),a("14d9"),a("159b"),a("d81d"),a("8237"),a("216c")),h=a("408b"),v=a("ee8f"),y=a("c9d2"),g=a("f9cf"),j=a("b2ba"),S=a("65c2"),w={name:"Price",data:function(){return{searchServerName:"",isShowMainServer:!0,serverList:{},pinnedServerName:"gate0000",currentServer:"",currentGate:"",allPriceDataRaw:{},allServersPrice:{},singleServerPrice:{},singleServerDisplayTotalFull:!1,scatterOption:{tooltip:{show:!0,formatter:function(e){return"服务器：".concat(e.name,"<br />金价：").concat(e.data[0],"金/￥")}},grid:{show:!0,height:"80%",left:56,right:16},xAxis:{scale:!0},yAxis:{type:"category",data:[],axisLine:{show:!0},boundaryGap:!1,axisTick:{show:!1,alignWithLabel:!1,inside:!0},splitLine:{show:!0,interval:0}},series:[{symbolSize:10,data:[],itemStyle:{color:"rgba(64,158,255, 0.5)"},type:"scatter"}]},barOption:{tooltip:{show:!0,formatter:"{b}<br />均价 {c}金/￥"},grid:{height:"80%",left:38,right:8},xAxis:{type:"category",data:[],axisTick:{show:!1},axisLabel:{fontSize:10}},yAxis:{type:"value",name:"均价",nameLocation:"end",nameGap:10,scale:!0},series:[{data:[],type:"bar",itemStyle:{color:"rgb(64,158,255)"}}]},boxplotOption:{tooltip:{trigger:"item",axisPointer:{type:"shadow"}},grid:{left:12,right:16,bottom:"20%"},yAxis:{type:"category",data:[],show:!1},xAxis:{type:"value",splitArea:{show:!1},scale:!0,nameTextStyle:{},axisLabel:{}},series:[{name:"boxplot",type:"boxplot",data:[],tooltip:{formatter:function(e){return["可靠最高价："+e.data[5],"上四分位价："+e.data[4],"较可靠均价："+e.data[3],"下四分位价："+e.data[2],"可靠最低价："+e.data[1]].join("<br/>")}},itemStyle:{borderColor:"rgb(255, 70, 131)"}},{name:"outlier",type:"scatter",data:[],itemStyle:{color:"rgba(64,158,255, 0)"},tooltip:{formatter:function(e){return"极端价："+e.data[0]}}},{symbolSize:10,data:[],type:"scatter",encode:{x:1,y:2},silent:!0,itemStyle:{color:"rgba(64,158,255, 0.5)"}}]},lineOption:{legend:{show:!0,top:0},tooltip:{trigger:"item",axisPointer:{type:"cross"},formatter:function(e){return e.seriesName?"[".concat(e.seriesName,"]<br />").concat(e.name,"<br />").concat(e.value,"金/￥"):"".concat(e.name,"<br />").concat(e.value,"金/￥")}},grid:{bottom:60,top:50,left:38,right:50},xAxis:{type:"category",data:[],axisTick:{show:!0,alignWithLabel:!0},boundaryGap:["10%","10%"],inverse:!0},yAxis:{type:"value",scale:!0,axisPointer:{label:{precision:0}}},dataZoom:[{start:0,end:100,bottom:0}],series:[{type:"line",name:"5173",animationDuration:300,smooth:!1,symbol:"circle",symbolSize:10,sampling:"average",itemStyle:{color:"rgb(255, 70, 131)"},data:[],markPoint:{data:[{type:"max",name:"[5173]最大值"},{type:"min",name:"[5173]最小值"}],itemStyle:{color:"rgb(255, 70, 131)"},symbolOffset:[0,"-10%"]},markLine:{data:[{type:"median",label:{position:"start",formatter:"[5173]\n均价\n{c}"},name:"[5173]均价"}],lineStyle:{color:"rgb(255, 70, 131)",width:3,type:"dotted"},symbol:"none"}},{type:"line",animationDuration:300,smooth:!1,symbol:"none",symbolSize:0,sampling:"average",itemStyle:{color:"rgb(255, 70, 131)"},data:[],connectNulls:!0,lineStyle:{type:"dashed"},silent:!0},{type:"line",name:"万宝楼",animationDuration:300,smooth:!1,symbol:"circle",symbolSize:10,sampling:"average",itemStyle:{color:"rgb(64,158,255)"},data:[],markPoint:{data:[{type:"max",name:"[万宝楼]最大值"},{type:"min",name:"[万宝楼]最小值"}],itemStyle:{color:"rgb(64,158,255)"},symbolOffset:[0,"-10%"]},markLine:{data:[{type:"median",label:{position:"start",formatter:"[万宝楼]\n均价\n{c}"},name:"[万宝楼]均价"}],lineStyle:{color:"rgb(64,158,255)",width:3,type:"dotted"},symbol:"none"}},{type:"line",animationDuration:300,smooth:!1,symbol:"none",symbolSize:0,sampling:"average",itemStyle:{color:"rgb(64,158,255)"},data:[],connectNulls:!0,lineStyle:{type:"dashed"},silent:!0},{type:"line",name:"贴吧",animationDuration:300,smooth:!1,symbol:"circle",symbolSize:10,sampling:"average",itemStyle:{color:"#22c3aa"},data:[],markPoint:{data:[{type:"max",name:"[贴吧]最大值"},{type:"min",name:"[贴吧]最小值"}],itemStyle:{color:"#22c3aa"},symbolOffset:[0,"-10%"]},markLine:{data:[{type:"median",label:{position:"start",formatter:"[贴吧]\n均价\n{c}"},name:"[贴吧]均价"}],lineStyle:{color:"#22c3aa",width:3,type:"dotted"},symbol:"none"}},{type:"line",animationDuration:300,smooth:!1,symbol:"none",symbolSize:0,sampling:"average",itemStyle:{color:"#22c3aa"},data:[],connectNulls:!0,lineStyle:{type:"dashed"},silent:!0}]},defaultServer:"蝶恋花"}},computed:{},methods:{getIcon:function(e){return S["__imgPath"]+"image/box/"+e+".svg"},prepareMounted:function(){var e=this;return Object(b["a"])(Object(p["a"])().mark((function t(){var a,s,r,i,n,c,o,l;return Object(p["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:a={},s="https://spider.jx3box.com/jx3price",r={},i=Object(h["a"])(s,"GET",!1,{},{},r),n=e.defaultServer,e.uid?(c=Object(h["b"])(v["JX3BOX"].__cms,"api/cms/user/my/profile"),n=Object(h["a"])(c,"GET",!0)):n=e.getFromLocal(),o=e.defaultServer,l=!1,Promise.all([n,i]).then((function(t){if(j&&j.server_dict)for(var s in j.server_dict)a[s]={serverName:j.server_dict[s],isPinned:!1,gate:s};e.serverList=a,o=t[0].data.jx3_server||e.defaultServer;var r=t[1];void 0!==r.code&&0===r.code&&(e.allPriceDataRaw=r.data),e.currentGate=o,l=!0})).then((function(){l&&(e.parsePriceData(),e.showServer())})).catch((function(e){console.log(e)}));case 9:case"end":return t.stop()}}),t)})))()},median:function(e){var t=Math.floor(e.length/2),a=Object(m["a"])(e).sort((function(e,t){return e-t}));return e.length%2!==0?a[t]:(a[t-1]+a[t])/2},mean:function(e){for(var t=0,a=0,s=0;s<e.length;s++){var r=e[s];r&&0!=r&&(t+=r,++a)}return 0===a?"无数据":(Math.floor(t/a*100)/100).toFixed(2)},calcRecommend:function(){for(var e=0,t=0;t<3;++t){var a=this.singleServerPrice.trend[t],s=Math.max(a["5173"],a["post"],a["official"]/.9405);e+=s}return Math.floor(e/3*100)},clickServer:function(e,t){this.currentGate!==t&&(this.currentGate=t,this.showServer(),this.parsePriceData())},changeServer:function(e,t){this.showServer(),this.parsePriceData()},showServer:function(){this.currentServer=this.currentGate},loadAllServers:function(){var e=v["JX3BOX"].__spider+"jx3servers";Object(h["a"])(e,"GET").then((function(e){e.msg})).catch((function(e){console.log(e)})).then((function(){}))},parsePriceData:function(){this.parseSingleServerData()},parseAllServersData:function(){var e=this.allPriceDataRaw["gate0000"];this.allServersPrice={median:this.median(e.average_arr.split(",")),highest:e.highest,highest_server:this.serverList[e.highest_server].serverName,lowest:e.lowest,lowest_server:this.serverList[e.lowest_server].serverName},this.drawScatterChart(),this.drawBarChart()},drawScatterChart:function(){var e=this;if(!(this.scatterOption.series[0].data.length>0)){for(var t=[],a=0,s=Object.entries(this.serverList);a<s.length;a++){var r=Object(u["a"])(s[a],2),i=(r[0],r[1]);t.push(i.serverName)}t.push(""),this.scatterOption.yAxis.data=t;for(var n=[],c=function(){var t=Object(u["a"])(l[o],2),a=t[0],s=t[1];if("gate0000"===a)return"continue";s.current.split(",").forEach((function(t){n.push([parseInt(t),e.serverList[a].serverName])}))},o=0,l=Object.entries(this.allPriceDataRaw);o<l.length;o++)c();this.scatterOption.series[0].data=n}},drawBarChart:function(){if(!(this.barOption.series[0].data.length>0)){for(var e=[],t=[],a=0,s=Object.entries(this.allPriceDataRaw);a<s.length;a++){var r=Object(u["a"])(s[a],2),i=r[0],n=r[1];"gate0000"!==i&&(e.push(this.serverList[i].serverName),t.push(无parseInt(n.average)))}this.barOption.xAxis.data=e,this.barOption.series[0].data=t}},parseSingleServerData:function(){this.singleServerPrice=this.allPriceDataRaw[this.currentGate],this.drawLineChart(),this.singleServerPrice.recommend=this.calcRecommend()},drawBoxplotChart:function(){var e=this.singleServerPrice.today,t=(e["5173"],e["official"],e["post"],e["5173"].concat(e.official).concat(e.post)),a=Object(g["prepareBoxplotData"])([t],{layout:"vertical"});this.boxplotOption.yAxis.data=a.axisData,this.boxplotOption.series[0].data=a.boxData,this.boxplotOption.series[1].data=a.outliers;var s=t.map((function(e){return[1,parseInt(e)]}));this.boxplotOption.series[2].data=s},drawLineChart:function(){for(var e=this,t=this.parseTrend(this.singleServerPrice.trend),a=0,s=function(){var t=Object(u["a"])(i[r],2),s=(t[0],t[1]),n=!1,c=s.map((function(e){return"0"==e?(n=!0,null):parseInt(e)}));e.lineOption.series[a].data=c,e.lineOption.series[a+1].data=n?c:[],a+=2},r=0,i=Object.entries(t);r<i.length;r++)s();this.lineOption.xAxis.data=this.getThirtyDaysArr()},parseTrend:function(e){var t,a={5173:[],official:[],post:[]},s=function(){return function(e,t){return e["date"]<t["date"]?1:-1}},r=e.sort(s()),i=Object(d["a"])(r);try{for(i.s();!(t=i.n()).done;){var n=t.value;a["5173"].push(n["5173"]),a["official"].push(n["official"]),a["post"].push(n["post"])}}catch(c){i.e(c)}finally{i.f()}return this.singleServerPrice.yesterday={official:r[0]["official"]&&0!=r[0]["official"]?r[0]["official"].toFixed(2):"无数据",5173:r[0]["5173"]&&0!=r[0]["5173"]?r[0]["5173"].toFixed(2):"无数据",post:r[0]["post"]&&0!=r[0]["post"]?r[0]["post"].toFixed(2):"无数据"},a},getThirtyDaysArr:function(){for(var e=new Date,t=[],a=1;a<=30;++a)e=new Date,e.setDate(e.getDate()-a),t.push("".concat(e.getMonth()+1,"-").concat(e.getDate()));return t},getUserId:function(){y["a"].isLogin()&&(this.uid=y["a"].getInfo().uid)},onLineChartLegendselectchanged:function(e){switch(e.name){case"5173":!1===e.selected["5173"]?this.lineOption.series[1].data=[]:this.lineOption.series[1].data=this.lineOption.series[0].data;break;case"万宝楼":!1===e.selected["万宝楼"]?this.lineOption.series[3].data=[]:this.lineOption.series[3].data=this.lineOption.series[2].data;break;case"贴吧":!1===e.selected["贴吧"]?this.lineOption.series[5].data=[]:this.lineOption.series[5].data=this.lineOption.series[4].data;break;default:break}},getFromLocal:function(){return new Promise((function(e,t){e({code:0,data:{jx3_server:"蝶恋花"}})}))}},filters:{},mounted:function(){this.getUserId(),this.prepareMounted()},components:{Nav:f["a"]}},x=w,O=(a("5aac"),a("2877")),_=Object(O["a"])(x,o,l,!1,null,null,null),C=_.exports;s["default"].config.productionTip=!1,s["default"].use(i.a),s["default"].use(n["a"]),s["default"].component("v-chart",c["a"]),new s["default"]({render:function(e){return e(C)}}).$mount("#app")}});
//# sourceMappingURL=price.347884b0.js.map