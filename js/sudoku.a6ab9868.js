(function(s){function t(t){for(var a,r,c=t[0],o=t[1],l=t[2],d=0,f=[];d<c.length;d++)r=c[d],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&f.push(i[r][0]),i[r]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(s[a]=o[a]);u&&u(t);while(f.length)f.shift()();return n.push.apply(n,l||[]),e()}function e(){for(var s,t=0;t<n.length;t++){for(var e=n[t],a=!0,c=1;c<e.length;c++){var o=e[c];0!==i[o]&&(a=!1)}a&&(n.splice(t--,1),s=r(r.s=e[0]))}return s}var a={},i={sudoku:0},n=[];function r(t){if(a[t])return a[t].exports;var e=a[t]={i:t,l:!1,exports:{}};return s[t].call(e.exports,e,e.exports,r),e.l=!0,e.exports}r.m=s,r.c=a,r.d=function(s,t,e){r.o(s,t)||Object.defineProperty(s,t,{enumerable:!0,get:e})},r.r=function(s){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(s,"__esModule",{value:!0})},r.t=function(s,t){if(1&t&&(s=r(s)),8&t)return s;if(4&t&&"object"===typeof s&&s&&s.__esModule)return s;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:s}),2&t&&"string"!=typeof s)for(var a in s)r.d(e,a,function(t){return s[t]}.bind(null,a));return e},r.n=function(s){var t=s&&s.__esModule?function(){return s["default"]}:function(){return s};return r.d(t,"a",t),t},r.o=function(s,t){return Object.prototype.hasOwnProperty.call(s,t)},r.p="https://console.cnyixun.com/static/app/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var u=o;n.push([10,"chunk-vendors"]),e()})({"03cb":function(s,t,e){},"0681":function(s,t,e){"use strict";e("03cb")},"0daa":function(s,t,e){},10:function(s,t,e){s.exports=e("7657")},"216c":function(s,t,e){"use strict";var a=function(){var s=this,t=s._self._c;return t("nav",{staticClass:"m-nav"},[t("h5",{staticClass:"u-title"},[s._v("应用入口")]),t("div",{staticClass:"m-app-box"},s._l(s.data,(function(e){return t("a",{key:e.slug,staticClass:"u-app",class:{on:s.isActive(e.slug)},attrs:{href:"../"+e.slug}},[t("i",{staticClass:"u-app-icon"},[t("img",{attrs:{src:s.getIcon(e.slug)}})]),t("span",[s._v(s._s(e.abbr))])])})),0)])},i=[],n=(e("caad"),e("2532"),e("65c2")),r={name:"Nav",data:function(){return{data:[{slug:"database",abbr:"数据库"},{slug:"icons",abbr:"图标"},{slug:"talent",abbr:"奇穴"},{slug:"talent2",abbr:"镇派"},{slug:"meridians",abbr:"经脉"},{slug:"haste",abbr:"急速"},{slug:"macroeditor",abbr:"写宏"},{slug:"translator",abbr:"繁體"},{slug:"servers",abbr:"开服"},{slug:"price",abbr:"金价"},{slug:"sudoku",abbr:"九宫格"}]}},computed:{},methods:{isActive:function(s){return!!location.pathname.split("/").includes(s)},getIcon:function(s){return n["__imgPath"]+"image/box/"+s+".svg"}},mounted:function(){}},c=r,o=(e("0681"),e("2877")),l=Object(o["a"])(c,a,i,!1,null,null,null);t["a"]=l.exports},4678:function(s,t,e){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function i(s){var t=n(s);return e(t)}function n(s){if(!e.o(a,s)){var t=new Error("Cannot find module '"+s+"'");throw t.code="MODULE_NOT_FOUND",t}return a[s]}i.keys=function(){return Object.keys(a)},i.resolve=n,s.exports=i,i.id="4678"},7657:function(s,t,e){"use strict";e.r(t);e("e260"),e("e6cf"),e("cca6"),e("a79d");var a=e("2b0e"),i=e("5c96"),n=e.n(i),r=e("6a69"),c=(e("6b30"),e("c5b4"),function(){var s=this,t=s._self._c;return t("div",{attrs:{id:"app"}},[t("Header"),t("Breadcrumb",{attrs:{name:"九宫格计算器",slug:"sudoku",root:"/app/sudoku",feedbackEnable:!0,crumbEnable:!1}},[t("svg",{attrs:{slot:"logo",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 463 463","svg-inline":"",role:"presentation",focusable:"false",tabindex:"-1"},slot:"logo"},[t("path",{attrs:{d:"M57.2 64.8H92l-28.3 37.8c-2.5 3.3-1.8 8 1.5 10.5 1.4 1 2.9 1.5 4.5 1.5 2.3 0 4.5-1.1 6-3L113 61.8c1.7-2.3 2-5.4.7-7.9s-3.9-4.1-6.7-4.1H57.2c-4.1 0-7.5 3.4-7.5 7.5s3.4 7.5 7.5 7.5zM350.6 112.4c1.5 1.5 3.4 2.2 5.3 2.2s3.8-.7 5.3-2.2l19.6-19.6 19.6 19.6c1.5 1.5 3.4 2.2 5.3 2.2s3.8-.7 5.3-2.2c2.9-2.9 2.9-7.7 0-10.6l-19.6-19.6L411 62.6c2.9-2.9 2.9-7.7 0-10.6-2.9-2.9-7.7-2.9-10.6 0l-19.6 19.6L361.2 52c-2.9-2.9-7.7-2.9-10.6 0-2.9 2.9-2.9 7.7 0 10.6l19.6 19.6-19.6 19.6c-2.9 2.9-2.9 7.7 0 10.6zM350.6 411c1.5 1.5 3.4 2.2 5.3 2.2s3.8-.7 5.3-2.2l19.6-19.6 19.6 19.6c1.5 1.5 3.4 2.2 5.3 2.2s3.8-.7 5.3-2.2c2.9-2.9 2.9-7.7 0-10.6l-19.6-19.6 19.6-19.6c2.9-2.9 2.9-7.7 0-10.6-2.9-2.9-7.7-2.9-10.6 0l-19.6 19.6-19.6-19.6c-2.9-2.9-7.7-2.9-10.6 0-2.9 2.9-2.9 7.7 0 10.6l19.6 19.6-19.6 19.6c-2.9 2.9-2.9 7.7 0 10.6zM82.8 421.3c12.8 0 23.7-10.8 23.7-23.7 0-6.2-2.6-12-6.7-16.3 4.1-4.4 6.7-10.5 6.7-17.3 0-12.8-10.8-23.7-23.7-23.7-13.7 0-24.9 10.6-24.9 23.7 0 6.9 2.5 13 6.8 17.4-4.2 4.2-6.8 9.9-6.8 16.2 0 13.1 11.2 23.7 24.9 23.7zm0-66c4.5 0 8.7 4.1 8.7 8.7 0 5.5-3.9 9.9-8.7 9.9-5.9.1-9.9-4-9.9-9.9 0-4.8 4.5-8.7 9.9-8.7zm0 33.6c4.5 0 8.7 4.1 8.7 8.7s-4.2 8.7-8.7 8.7c-5.5 0-9.9-3.9-9.9-8.7s4.5-8.7 9.9-8.7zM57.3 255.8h29.8v8.7c0 4.1 3.4 7.5 7.5 7.5 4.2 0 7.5-3.4 7.5-7.5v-8.7h4.9c4.1 0 7.5-3.4 7.5-7.5s-3.4-7.5-7.5-7.5h-4.9v-42.3c0-3.2-2-6.1-5.1-7.1-3.1-1-6.5 0-8.4 2.6l-37.3 49.8c-1.7 2.3-2 5.4-.7 7.9s3.9 4.1 6.7 4.1zM87.1 221v19.8H72.3L87.1 221zM201.3 261.7c1.5 1.5 3.4 2.2 5.3 2.2s3.8-.7 5.3-2.2l19.6-19.6 19.6 19.6c1.5 1.5 3.4 2.2 5.3 2.2s3.8-.7 5.3-2.2c2.9-2.9 2.9-7.7 0-10.6l-19.6-19.6 19.6-19.6c2.9-2.9 2.9-7.7 0-10.6-2.9-2.9-7.7-2.9-10.6 0l-19.6 19.6-19.6-19.6c-2.9-2.9-7.7-2.9-10.6 0-2.9 2.9-2.9 7.7 0 10.6l19.6 19.6-19.6 19.6c-2.9 2.9-2.9 7.7 0 10.6zM231.5 114.6c4.1 0 7.5-3.4 7.5-7.5V57.3c0-4.1-3.4-7.5-7.5-7.5s-7.5 3.4-7.5 7.5v49.8c0 4.1 3.4 7.5 7.5 7.5z"}}),t("path",{attrs:{d:"M455.5 0H7.5C3.4 0 0 3.4 0 7.5v448c0 4.1 3.4 7.5 7.5 7.5h448c4.1 0 7.5-3.4 7.5-7.5V7.5c0-4.1-3.4-7.5-7.5-7.5zM149.3 448H15V313.7h134.3V448zm0-149.4H15V164.3h134.3v134.3zm0-149.3H15V15h134.3v134.3zM298.7 448H164.4V313.7h134.3V448zm0-149.3H164.4V164.4h134.3v134.3zm0-149.4H164.4V15h134.3v134.3zM448 448H313.7V313.7H448V448zm0-149.3H313.7V164.4H448v134.3zm0-149.4H313.7V15H448v134.3z"}})])]),t("LeftSidebar",{attrs:{open:!1}},[t("Nav")],1),t("Main",{attrs:{withoutRight:!0,withoutLeft:!0}},[t("div",{staticClass:"m-sudoku"},[t("h1",{staticClass:"m-sudoku-title"},[s._v("九宫格计算器")]),t("el-tabs",{on:{"tab-click":s.handleClick},model:{value:s.activeName,callback:function(t){s.activeName=t},expression:"activeName"}},[t("el-tab-pane",{attrs:{label:"试炼之地",name:"sudoku1"}}),t("el-tab-pane",{attrs:{label:"荻花宫",name:"sudoku2"}})],1),t("div",{staticClass:"m-table"},[t("el-row",{staticClass:"u-list"},["sudoku1"===s.activeName?s._l(s.shList,(function(e,a){return t("el-col",{key:a,class:["u-item",{active:"number"===typeof e}],attrs:{span:8}},[t("input",{directives:[{name:"model",rawName:"v-model",value:s.shList[a],expression:"shList[i]"}],attrs:{type:"text",min:"1",max:"9",maxlength:"1"},domProps:{value:s.shList[a]},on:{input:[function(t){t.target.composing||s.$set(s.shList,a,t.target.value)},function(t){return s.shCheck(s.shList[a],a)}]}})])})):s._l(s.list,(function(e,a){return t("el-col",{key:a,staticClass:"u-item",attrs:{span:8}},[t("input",{directives:[{name:"model",rawName:"v-model",value:s.list[a],expression:"list[i]"}],attrs:{type:"text",min:"1",max:"9",disabled:4==a},domProps:{value:s.list[a]},on:{input:[function(t){t.target.composing||s.$set(s.list,a,t.target.value)},function(t){return s.check(s.list[a],a)}]}})])}))],2),t("el-button",{staticClass:"u-clear",attrs:{type:"primary"},on:{click:function(t){return s.clear()}}},[s._v("清空")])],1),t("div",{staticClass:"m-preview"},[t("el-tabs",{on:{"tab-click":s.handleClick},model:{value:s.activeName,callback:function(t){s.activeName=t},expression:"activeName"}},[t("el-tab-pane",{attrs:{label:"试炼之地",name:"sudoku1"}},[t("h2",{staticClass:"u-mode"},[s._v(s._s(s.mode1))]),t("div",{staticClass:"u-imglist-1"},[t("el-image",{attrs:{src:s.url,"preview-src-list":s.srcList}})],1)]),t("el-tab-pane",{attrs:{label:"荻花宫",name:"sudoku2"}},[t("h2",{staticClass:"u-mode"},[s._v(s._s(s.mode2))]),t("div",{staticClass:"u-imglist-2"},s._l(s.srcList2,(function(e,a){return t("el-image",{key:"dh"+a,attrs:{src:s.showpic(a),"preview-src-list":s.srcList2}})})),1),t("ul",{staticClass:"u-demolist"},[t("el-divider",{attrs:{"content-position":"left"}},[s._v("常见序列")]),t("li",[s._v("245361")]),t("li",[s._v("423516")]),t("li",[s._v("615324")]),t("li",[s._v("163542")]),t("li",[s._v("341562")]),t("li",[s._v("265143")])],1)])],1)],1)],1),t("Footer")],1)],1)}),o=[],l=e("3835"),u=e("b85c"),d=(e("a15b"),e("4de4"),e("d3b7"),e("14d9"),e("fb6a"),e("ac1f"),e("00b4"),e("ddb0"),e("159b"),e("7db0"),e("d81d"),e("216c")),f=e("65c2"),b={name:"Sudoku",data:function(){return{activeName:"sudoku1",list:["","","","","5","","","",""],url:f["__ossMirror"]+"image/app/sudoku/sudoku1.jpg",srcList:[f["__ossMirror"]+"image/app/sudoku/sudoku1.jpg"],srcList2:[f["__ossMirror"]+"image/app/sudoku/sudoku2/0.png",f["__ossMirror"]+"image/app/sudoku/sudoku2/1.png",f["__ossMirror"]+"image/app/sudoku/sudoku2/2.png",f["__ossMirror"]+"image/app/sudoku/sudoku2/3.png",f["__ossMirror"]+"image/app/sudoku/sudoku2/4.png",f["__ossMirror"]+"image/app/sudoku/sudoku2/5.png",f["__ossMirror"]+"image/app/sudoku/sudoku2/6.png"],shList:new Array(9)}},computed:{len:function(){return this.list.length},isready:function(){var s=0,t=this.len;return s+=~~(this.list[0]||this.list[t]),s+=~~(this.list[1]||this.list[t-1]),s+=~~(this.list[2]||this.list[t-2]),s+=~~(this.list[3]||this.list[t-3]),s>=3},matrix:function(){return[[this.list[0],this.list[1],this.list[2]],[this.list[3],this.list[4],this.list[5]],[this.list[6],this.list[7],this.list[8]]]},matrixR:function(){return[[this.list[0],this.list[3],this.list[6]],[this.list[1],this.list[4],this.list[7]],[this.list[2],this.list[5],this.list[8]]]},mode1:function(){return this.shList.filter((function(s){return"number"===typeof s})).join(" → ")},mode2:function(){for(var s=[],t=0;t<this.len;t++){var e=this.list[t];parseInt(e)<=6&&s.push(e)}return s.join(" ")}},methods:{getIcon:function(s){return f["__imgPath"]+"image/box/"+s+".svg"},check:function(s,t){if(s.length>1)return this.list[t]=s.slice(0,1);if(!/^[12346789]$/.test(s))return this.list[t]="";for(var e=0;e<=this.len;e++)if(this.list[e]==s&&t!=e){this.list[e]="";break}this.isready&&this.compute()},compute:function(){this.isdone()||(this.scanX(),this.scanY())},scanX:function(s){var t,e=Object(u["a"])(this.matrix.entries());try{for(e.s();!(t=e.n()).done;){var a=Object(l["a"])(t.value,2),i=a[0],n=a[1];if(this.hasSpecifiedTrueValue(n,2)){var r=this.solve(n),c=Object(l["a"])(r,2),o=c[0],d=c[1];this.list[3*i+d]=o}}}catch(f){e.e(f)}finally{e.f()}},scanY:function(){var s,t=Object(u["a"])(this.matrixR.entries());try{for(t.s();!(s=t.n()).done;){var e=Object(l["a"])(s.value,2),a=e[0],i=e[1];if(this.hasSpecifiedTrueValue(i,2)){var n=this.solve(i),r=Object(l["a"])(n,2),c=r[0],o=r[1];this.list[3*o+a]=c}}}catch(d){t.e(d)}finally{t.f()}},hasSpecifiedTrueValue:function(s,t){var e=0;return s.forEach((function(s){e+=Boolean(s)})),e==t},solve:function(s){var t=15,e=null;return s.forEach((function(s,a){s?t-=parseInt(s):e=a})),[t,e]},isdone:function(){for(var s=0;s<this.len;s++){var t=this.list[s];if(!t)return!1}return!0},clear:function(){this.list=["","","","","5","","","",""],this.shList=this.$options.data().shList},handleClick:function(){},showpic:function(s){return f["__ossMirror"]+"image/app/sudoku/sudoku2/"+s+".png"},shCheck:function(s,t){var e=this;/^\d$/.test(s)||(this.shList[t]=void 0);for(var a=0;a<this.shList.length;a++)if(this.shList[a]===s&&t!==a){this.shList[a]=void 0;break}var i,n=[[2,7,6,9,5,1,4,3,8],[2,9,4,7,5,3,6,1,8],[4,3,8,9,5,1,2,7,6],[4,9,2,3,5,7,8,1,6],[6,1,8,7,5,3,2,9,4],[6,7,2,1,5,9,8,3,4],[8,1,6,3,5,7,4,9,2],[8,3,4,1,5,9,6,7,2]];this.shList.filter((function(s){return s})).length>3&&(this.shList.forEach((function(s,t){return s&&n.forEach((function(e,a){return n[a]=e[t]===+s?e:""}))})),n.length?this.shList=null===(i=n.find((function(s){return s})))||void 0===i?void 0:i.map((function(s,t){return e.shList[t]||s})):(this.$message.warning("不存在这种序列"),this.shList=this.$options.data().shList))}},filters:{},mounted:function(){},components:{Nav:d["a"]}},h=b,j=(e("7d89"),e("2877")),m=Object(j["a"])(h,c,o,!1,null,null,null),p=m.exports;a["default"].config.productionTip=!1,a["default"].use(n.a),a["default"].use(r["a"]),new a["default"]({render:function(s){return s(p)}}).$mount("#app")},"7d89":function(s,t,e){"use strict";e("0daa")}});
//# sourceMappingURL=sudoku.a6ab9868.js.map