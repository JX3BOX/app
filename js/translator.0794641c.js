(function(e){function t(t){for(var r,i,o=t[0],c=t[1],l=t[2],u=0,p=[];u<o.length;u++)i=o[u],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&p.push(n[i][0]),n[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);d&&d(t);while(p.length)p.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],r=!0,o=1;o<a.length;o++){var c=a[o];0!==n[c]&&(r=!1)}r&&(s.splice(t--,1),e=i(i.s=a[0]))}return e}var r={},n={translator:0},s=[];function i(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=r,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(a,r,function(t){return e[t]}.bind(null,r));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="https://console.cnyixun.com/static/app/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var d=c;s.push([4,"chunk-vendors","chunk-common"]),a()})({"1f16":function(t,a,r){"use strict";r.r(a);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),s=r("5c96"),i=r.n(s),o=r("6a69"),c=(r("6b30"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("Header"),a("Breadcrumb",{attrs:{name:"簡繁轉換",slug:"translator",root:"/app/translator"}},[a("svg",{attrs:{slot:"logo",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1080 1080","svg-inline":"",role:"presentation",focusable:"false",tabindex:"-1"},slot:"logo"},[a("path",{attrs:{d:"M539.5 1056H110.4c-54.4 0-89-34.3-89-88.5v-859c0-53.8 34.5-88.5 88.1-88.5H972c44.2 0 77.6 28.1 84.6 71.1.8 4.8.8 9.8.8 14.8v864.2c0 50.5-35.6 85.9-86.3 85.9H539.5zm0-975.6H112.3c-3.8 0-7.6-.1-11.3.3-10.2 1.3-17.6 8.8-18.8 18.9-.4 3.5-.3 7-.3 10.4v855.4c0 3.8-.1 7.6.4 11.3 1.2 9.7 8.6 17 18.2 18.3 3.1.4 6.4.4 9.6.4h858.8c3.2 0 6.4.1 9.6-.4 9.7-1.4 16.9-8.7 18.2-18.4.4-3.4.4-7 .4-10.4V110c0-3.5.1-7-.3-10.4-1.2-10.1-8.6-17.6-18.7-18.8-3.7-.4-7.5-.3-11.3-.3-142.5-.1-284.9-.1-427.3-.1z"}}),a("path",{attrs:{d:"M207.6 490.1c2.8-2.8 6.3-6 9.3-9.6 4.2-5 10.2-9.8 11.7-15.6 3.7-14.5 5.3-29.6 7.8-45.4h-74.9V404h78.9c4.3-28.9 8.5-56.9 12.8-86.3-22.9 17.2-44.2 33.2-66.4 49.9-3.2-3.4-5.1-5.4-7.2-7.6 38.2-57.7 68.5-118.1 85.2-185.8 34.8 5.6 69.1 11.1 102.5 16.5 7 10.6 5.9 15.8-3.7 21.5-2.2 1.3-4.6 3-7 3.4-15.4 2.7-23.1 14.1-30.5 27h153.3c13.9-16.8 28.5-34.5 43.2-52.3 2.2 1.2 4 2.1 5.6 3.2 22.5 15.5 45 31 67.2 46.9 2.9 2.1 6.1 6.6 5.8 9.6-.3 3.1-4.3 7.2-7.6 8.2-7.7 2.3-15.8 4.1-23.8 4.1-83.4.3-166.9.2-250.3.2h-8.7c-10.1 10-19.1 18.9-28.9 28.5 15.2 4.4 30.2 8.5 45 13.2 13.1 4.1 26.4 5.9 40.2 5.7 27.6-.5 55.2-.2 83.3-.2 8.4-14 16.7-27.8 25.4-42.2 30.6 14 60.9 27.9 91.5 41.9 1.2 20.4-15.7 24-28.5 32.7-1.9 15.9-3.9 32.6-6.2 52 10.4-12.5 19.3-23.1 28.2-33.8 5.3 4 10 7.7 15.7 12 26.9-63.3 44.4-128.3 56.7-195.9 6.8 1.5 12.9 2.8 19 4.1l82.5 18c7.2 1.6 11.3 7 7.9 13.4-3 5.6-8.6 10.5-14.1 14-4.4 2.8-10.5 3.1-16 4.5-10.2 16-20.6 32.2-31.5 49.3h103.5c14.3-18.3 28.9-37.1 43.9-56.2 27.3 17.8 54.1 35.1 80.5 53.1 3.1 2.1 3.7 7.7 5.4 11.3-8.5 10-18.8 10.8-28.9 11.2-14.5.6-29 .1-44.2.1-16.9 46.5-34.4 92.5-65.9 133 43.8 16.3 88.5 24 134.3 31.6-.9 4.4-1.8 8.4-2.6 12.6-46.2 8.2-68.3 40.2-81.9 81.8-40.2-20.9-78.4-43.6-112.9-71.8-15.6 9.2-30.8 18.2-46.7 27.6 1.8 1.5 3.1 2.8 4.7 3.8 26.5 18.3 53.1 36.6 79.7 54.8 6.2 4.2 10.3 9.3 8.9 17.8-7.1 7.1-16.7 6.7-25.2 5.8-18.9-2.1-34.3 5.9-51.9 15.2 8.9 2 16.1 3.2 23 5.3 21.9 6.8 43.8 13.3 65.3 21.2 9.1 3.3 17.6 9.1 25.2 15.2 30 23.6 24.3 68.7-10.3 85.1-22.8 10.8-36.8 6.3-49.2-15.7-3.6-6.3-7.6-12.3-11.6-18.7-39.5 5.1-78.8 10.3-118.6 15.5-.1 2.6-.5 5.2-.4 7.7.8 31.7.9 63.4 2.8 95 1.4 23.9-8 41-27.9 53-21.1 12.7-44.8 17.2-68.7 20.6-7.1 1-14.3 1.5-22.2 2.3-1.5-51.3-39.5-64-78.4-75.6.5-6.8 4.9-6.2 9.3-6 23.8 1.1 47.6 2.1 71.4 2.9 11.9.4 18.3-4 18.6-14.6.6-24 .2-48.1.2-73.2-39.6-.5-77.4 7.5-118 12 3.8 2.4 5.4 3.6 7.2 4.5 18.1 9.1 36.3 18.3 54.5 27.3 5.4 2.6 10.4 6.3 8.5 12.3-1.3 4.2-5.8 9-9.9 10.5-6.6 2.4-14.2 1.9-21.3 3.2-6.1 1.1-12.7 1.6-18 4.5-63.9 34.6-130.6 61.8-201.2 79-1.1.3-2.2.4-3.9.7-1.9-2.8-3.8-5.6-6.2-9.1 56.8-34.7 110.7-72 149.4-126.9-.3-.9-.6-1.8-.8-2.7-11.6 1.1-23.1 2.1-34.1 3.1-3.8 5.8-6 11.6-10.3 15.2-4.3 3.5-10.8 6.9-15.7 6.3-3.7-.5-8.4-7-9.6-11.7-6.8-25.5-12.7-51.2-19-77.7 2.7-.2 4.9-.6 7-.3 37.7 4 74.2-1.3 109.6-14.2 37.3-13.6 74.5-27.7 111.7-41.7 2.9-1.1 5.6-2.7 10.3-5-51.4 7.1-100.6 13.8-150 20.6-1.7 4.1-2.6 10-6 13.4-3.7 3.7-9.8 6.8-14.7 6.7-3.4-.1-8.4-5.5-9.6-9.4-7.2-23.2-13.6-46.8-20.7-71.9 51.2-2.6 90.6-28.7 128.4-61.9H305.3c-7.6 8.4-16.2 17.9-24.6 27.2-31.4-17-68.9-44.5-73.1-55.3zm321.9-70.7c-2 23.4-4 46-5.9 68.5l1.8.6c6.5-8.3 13-16.6 19.8-25.2 14.4 10.6 28.1 20.9 42.1 30.6 6.3 4.4 9.9 9.3 6.6 18.9 28.9-22.3 55.2-44.3 77-71.6-20.4-29.7-32.5-62.3-40.8-97.3-14 13.1-27.1 25.2-40.5 37.7 11.2 8.3 21.7 16 31.7 23.4.3 8.2-3.5 12.3-10.5 13.2-6.3.8-12.7 1.1-19.1 1.1-20.6.2-41.1.1-62.2.1zm-217.3.4c-4.1 25.9-8.2 51.5-12.4 77.5h61.5c-2.4-23.8-1.5-47.9-15.1-69.3 2.9-1 4.3-2 5.5-1.8 19.9 4.2 39.7 9 56.1 22.1 6.5 5.2 9.1 12 8.6 20.7-.6 11.8-4 21.6-15.5 28.2h40.5c3.1-26.1 6.1-51.6 9.2-77.4H312.2zM661 619c-72.7 21.9-142.6 43-213.2 64.3 85.7-3 170.9-6 256.1-9.1.6-.9 1.1-1.8 1.7-2.7-15.3-17.9-30.6-35.9-44.6-52.5zm-261.7-33.6c2.6.2 3.7.4 4.8.4 55.8-.9 111.6-1.7 167.3-2.7 2.5 0 5.3-.5 7.4-1.7 28.9-16.4 56.6-34.5 78.8-59.6 1.5-1.7 2.8-3.7 3.7-4.9-35.3 14-70.7 28.1-106.4 42.3-2.9-6.1-4.7-9.9-6.5-13.7 13.8-9.8 27-19.2 40.1-28.5h-63.9c4.7 3.6 10 5 14.1 8 2.9 2.1 5.8 6.5 5.6 9.7-.2 3-3.9 6.9-7 8.4-4 2-9.2 3.2-13.5 2.5-14.2-2.1-26 3.7-38.1 9.3-3.4 1.6-6.9 3-10.5 4.2-24.7 8.6-49.6 17.2-75.9 26.3zm54.5-182.1c2.1-25.2 4.1-49.6 6.1-74.2H327.8c-4.1 24.9-8.2 49.2-12.2 73.9h56.5c-5-23.6-9.9-46.6-14.8-70 1.1-.4 2.6-1.4 3.7-1.2 19.6 4.3 39 9.4 55 22.5 8.1 6.6 11.8 15.6 8.9 25.6-2.4 8.2-6.9 15.7-10.3 23.3 12 .1 25 .1 39.2.1zm255-10.3c17-30 29.4-60.7 37.4-93.7H664c-5.9 9.4-11.7 18.7-17.7 28.1 16.8 25.4 37.3 46.8 62.5 65.6z"}}),a("path",{attrs:{d:"M626.8 743.2l4-6c50.3 4.2 100.2 8.4 147.9 24.3 14.9 5 29.7 12.1 42.8 20.9 20.1 13.4 24.2 31.7 15.8 56.1-7.2 20.8-25.5 34.8-46.7 33.9-6.5-.3-13.3-3.7-19.1-7.3-5.6-3.4-10.5-8.4-14.6-13.5-34.7-43.2-77.3-76.9-124.8-104.8-1.5-1-2.8-2-5.3-3.6z"}})])]),a("LeftSidebar",[a("Nav")],1),a("Main",{attrs:{withoutRight:!1}},[a("div",{staticClass:"m-translator"},[a("h1",{staticClass:"title"},[e._v("簡繁轉換工具")]),a("h3",{staticClass:"title"},[e._v("將宏或插件數據等轉為劍網三國際服專用繁體")]),a("el-tabs",{staticClass:"translate-wrapper",attrs:{type:"card","before-leave":e.tabClick},model:{value:e.activeTabName,callback:function(t){e.activeTabName=t},expression:"activeTabName"}},[a("el-tab-pane",{attrs:{label:"文字轉換",disabled:e.isLoading,name:"translate-str"}},[a("div",{staticClass:"translate-content"},[a("el-input",{staticClass:"textarea-translate textarea-translate-pre",attrs:{type:"textarea",placeholder:"请输入原文（简体）内容。建议不要超过1000个汉字。大段文字容易导致浏览器卡死，建议使用文件转换功能。","validate-event":!1,resize:"none",maxlength:"10000","show-word-limit":""},model:{value:e.preTranslateText,callback:function(t){e.preTranslateText=t},expression:"preTranslateText"}}),a("el-input",{staticClass:"textarea-translate textarea-translate-post",attrs:{type:"textarea",placeholder:"轉換（繁體）之後的內容","validate-event":!1,resize:"none",readonly:!1},model:{value:e.postTranslateText,callback:function(t){e.postTranslateText=t},expression:"postTranslateText"}})],1),e.percentage<0?a("el-button",{staticClass:"btn-convert",attrs:{type:"primary",loading:e.isLoading,size:"medium"},on:{click:e.convertText}},[e._v(" "+e._s(e.isLoading?"正在加載":"轉換")+" ")]):e._e(),e.isLoading&&e.percentage>=0?a("el-progress",{attrs:{"text-inside":!0,"stroke-width":20,percentage:e.percentage}}):e._e()],1),a("el-tab-pane",{attrs:{label:"文件轉換",disabled:e.isLoading,name:"translate-file"}},[a("transition",{attrs:{name:"el-zoom-in-top"}},[""!==e.downloadFileUrl?a("el-alert",{attrs:{title:"转换成功!",type:"success","show-icon":""}},[e._v(" 如果沒有自動下載的話, "),a("el-button",{staticClass:"btn-download",attrs:{type:"text"},on:{click:e.downloadByUrl}},[e._v("點此下載")])],1):e._e()],1),a("div",{staticClass:"translate-content"},[e.percentage<0?a("el-upload",{directives:[{name:"loading",rawName:"v-loading",value:e.isLoading,expression:"isLoading"}],staticClass:"upload-file",attrs:{drag:"",action:"javascript:void(0)","auto-upload":!0,"show-file-list":!1,"element-loading-text":"正在轉換,請稍後","http-request":e.uploadFile}},[a("i",{staticClass:"el-icon-upload"}),a("div",{staticClass:"el-upload__text"},[e._v(" 將文件拖到此處,或 "),a("em",[e._v("點擊上傳")])]),a("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v(" 暫不支持word等帶樣式文檔 ")])]):e._e(),e.isLoading&&e.percentage>=0?a("el-progress",{attrs:{type:"circle",percentage:e.percentage,format:e.progressFormat}}):e._e()],1)],1),a("el-tab-pane",{attrs:{label:"💖貢獻詞庫",disabled:e.isLoading,name:"add-dict"}})],1)],1),a("RightSidebar",[a("div",{staticClass:"m-translator-aside"},[a("Github_REPO",{attrs:{REPO:"app",coder:"172"}}),a("ins",{staticClass:"adsbygoogle",staticStyle:{display:"block",width:"100%",overflow:"hidden"},attrs:{"data-ad-client":"ca-pub-4388499329141185","data-ad-slot":"9773281887","data-ad-format":"auto","data-full-width-responsive":"true"}})],1),a("Extend")],1),a("Footer")],1)],1)}),l=[],d=(r("99af"),r("a15b"),r("b0c0"),r("d3b7"),r("ac1f"),r("3ca3"),r("5319"),r("ddb0"),r("2b3d"),r("96cf"),r("1da1")),u=(r("8f33"),r("216c")),p=r("408b"),f=r("ee8f"),g=r("f114"),m=new Blob([document.querySelector("#worker").textContent]),b=window.URL.createObjectURL(m),h=new Worker(b),v={name:"Translator",data:function(){return{worker:null,activeTabName:"translate-str",preTranslateText:"",postTranslateText:"",isLoading:!0,percentage:-1,downloadFileUrl:""}},computed:{},methods:{tabClick:function(e,t){if("add-dict"!==e)return!0;var a=document.createElement("a");a.href="https://github.com/JX3BOX/jx3box-dict/issues",a.target="_blank",a.click()},progressFormat:function(e){return 100===e?"完成":"".concat(e,"% \n正在轉換...")},initWorker:function(){var t=this;h.addEventListener("message",(function(e){var a=e.data;if(a.success)switch(a.type){case"str":t.postTranslateText=a.result,t.isLoading=!1,t.percentage=-1;break;case"file":t.downloadTranslatedFile(a.result),t.isLoading=!1,t.percentage=-1;break;case"progress":t.percentage=a.result;break;default:break}})),h.addEventListener("error",(function(a){t.$message.error("轉換出錯"),console.log(["ERROR: Line ",e.lineno," in ",e.filename,": ",e.message].join(""))}))},getDict:function(){var e=this,t="https://cdn.jsdelivr.net/npm/@jx3box/jx3box-dict/dict.json?v=".concat(Date.now());Object(p["a"])(t).then((function(t){e.dict=t,e.isLoading=!1})).catch((function(t){switch(t.code){case-1:e.$message.error(t.msg);break;default:console.log(t),e.$message.error("[".concat(t.code,"]").concat(t.msg))}}))},convertText:function(){var e=this;return Object(d["a"])(regeneratorRuntime.mark((function t(){var a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(a=e.preTranslateText,""!==a.replace(/\ /g,"")){t.next=3;break}return t.abrupt("return");case 3:if(r=!0,e.isLoading=!0,!(a.length>1e3)){t.next=13;break}return t.next=8,e.checkLogin();case 8:if(r=t.sent,r){t.next=13;break}return e.$message.warning("转换的字符超过1000个需要先登录再尝试转换~"),e.isLoading=!1,t.abrupt("return");case 13:e.percentage=0,h.postMessage({cmd:"translate-str",str:a,dict:e.dict});case 15:case"end":return t.stop()}}),t)})))()},uploadFile:function(e){var t=this;return Object(d["a"])(regeneratorRuntime.mark((function a(){var r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(!e.file){a.next=15;break}if(r=!0,t.isLoading=!0,!(e.file.size>1048576)){a.next=11;break}return a.next=6,t.checkLogin();case 6:if(r=a.sent,r){a.next=11;break}return t.$message.warning("转换的文件大小超过1MB需要先登录再尝试转换~"),t.isLoading=!1,a.abrupt("return");case 11:t.downloadFileUrl="",t.filename=e.file.name,t.percentage=0,h.postMessage({cmd:"translate-file",file:e.file,dict:t.dict});case 15:case"end":return a.stop()}}),a)})))()},downloadTranslatedFile:function(e){var t=document.createElement("a");t.download="JX3BOX轉換-".concat(this.filename);var a=URL.createObjectURL(e);t.href=a,this.downloadFileUrl=a,t.click(),this.isLoading=!1},downloadByUrl:function(){if(""!==this.downloadFileUrl){var e=document.createElement("a");e.download="JX3BOX轉換-".concat(this.filename);var t=this.downloadFileUrl;e.href=t,e.click()}},checkLogin:function(){var e=this;return Object(d["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(a=!0,e.uid){t.next=5;break}a=!1,t.next=8;break;case 5:return t.next=7,e.testCheckIsLogin();case 7:a=t.sent;case 8:return t.abrupt("return",new Promise((function(e,t){e(a)})));case 9:case"end":return t.stop()}}),t)})))()},testCheckIsLogin:function(){var e=this,t=f["JX3BOX"].__server+"user/meta";return Object(p["a"])(t,"GET",!0,{},{},{uid:this.uid,key:"jx3_servers"}).then((function(e){return 10050==e.code})).catch((function(t){switch(t.code){case-1:e.$message.error(t.msg),e.getFromLocal();break;case 9999:return e.$message.error("登录失效, 请重新登录"),f["User"].destroy(),setTimeout((function(){f["User"].toLogin()}),2e3),!1;default:e.$message.error("[".concat(t.code,"]").concat(t.msg)),e.getFromLocal()}return!1}))},getUserId:function(){f["User"].isLogin()&&(this.uid=f["User"].getInfo().uid)}},filters:{},created:function(){this.initWorker(),this.getDict()},mounted:function(){this.getUserId()},beforeDestroy:function(){h.terminate()},components:{Nav:u["a"],Extend:g["a"]}},w=v,x=(r("32cb"),r("2877")),k=Object(x["a"])(w,c,l,!1,null,null,null),y=k.exports;n["default"].config.productionTip=!1,n["default"].use(i.a),n["default"].use(o["a"]),new n["default"]({render:function(e){return e(y)}}).$mount("#app")},"32cb":function(e,t,a){"use strict";var r=a("831b"),n=a.n(r);n.a},4:function(e,t,a){e.exports=a("1f16")},"831b":function(e,t,a){}});
//# sourceMappingURL=translator.0794641c.js.map