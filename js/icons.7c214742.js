(function(t){function e(e){for(var i,o,c=e[0],r=e[1],l=e[2],f=0,d=[];f<c.length;f++)o=c[f],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i]);u&&u(e);while(d.length)d.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],i=!0,c=1;c<n.length;c++){var r=n[c];0!==a[r]&&(i=!1)}i&&(s.splice(e--,1),t=o(o.s=n[0]))}return t}var i={},a={icons:0},s=[];function o(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=i,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(n,i,function(e){return t[e]}.bind(null,i));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="https://console.cnyixun.com/static/app/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],r=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=r;s.push([2,"chunk-vendors","chunk-common"]),n()})({2:function(t,e,n){t.exports=n("b93c")},"6ffc":function(t){t.exports=JSON.parse("[13,316,109,245,889,2178,2179,2180,2588,2589,2646,2647,2648,2789,3089,3111,3112,3113,3114,3115,3116,3117,3118,3119,3120,3121,3122,3123,3137,3138,3139,3140,3321,4704,4707,4708,4709,4710,4835,4853,5389,8848,10451,10452,10909]")},"86ce":function(t,e,n){},b8c4:function(t,e,n){"use strict";n("86ce")},b93c:function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("4ae6"),a=n.n(i),s=n("2b0e"),o=n("5c96"),c=n.n(o),r=n("6a69"),l=(n("6b30"),n("c5b4"),n("caad"),n("2532"),n("2f62"));s["default"].use(l["a"]);var u=new l["a"].Store({state:{client:location.href.includes("origin")?"origin":"std",favList:[]},mutations:{storeFav:function(t,e){t.favList=e}},getters:{},actions:{},modules:{}}),f=u,d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Header"),n("Breadcrumb",{attrs:{name:"图标大全",slug:"icons",root:"/app/icons",feedbackEnable:!0,crumbEnable:!0}},[n("img",{attrs:{slot:"logo","svg-inline":"",src:t.getIcon("icons")},slot:"logo"})]),n("LeftSidebar",{attrs:{open:!1}},[n("Nav")],1),n("Main",{attrs:{withoutRight:!0,withoutLeft:!0}},[n("div",{staticClass:"m-icons"},[n("h1",{staticClass:"m-icons-title"},[t._v("剑三图标库")]),n("div",{staticClass:"m-icons-box"},[n("el-tabs",{attrs:{type:"card"},model:{value:t.activeTabName,callback:function(e){t.activeTabName=e},expression:"activeTabName"}},[n("el-tab-pane",{attrs:{label:"图标库",name:"icon"}},[n("IconsSearch")],1),n("el-tab-pane",{attrs:{label:"收藏图标",name:"favicon"}},[n("IconsFav")],1),n("el-tab-pane",{attrs:{label:"表情包",name:"emoji"}},[n("IconsEmo")],1)],1)],1),n("Footer")],1)])],1)},h=[],p=n("216c"),m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"m-icons-emo"},[n("div",{staticClass:"m-icons-nav"},t._l(t.emoList,(function(e,i){return n("div",{key:i,staticClass:"u-btn",class:i==t.index?"active":"",on:{click:function(e){return t.toChangeEmo(i)}}},[n("span",[t._v(" "+t._s(e.name)+" "),n("b",[t._v("（"+t._s(e.total)+"）")])])])})),0),t.emoList.length>0?n("div",{staticClass:"m-icons-list"},t._l(t.emoList[t.index].total,(function(e,i){return n("el-image",{key:e,staticClass:"u-img",attrs:{src:""+t.EmojiPath+t.emoList[t.index].name+"/"+i+".gif"}},[n("div",{staticClass:"image-slot",attrs:{slot:"placeholder"},slot:"placeholder"},[n("i",{staticClass:"el-icon-loading"})]),n("div",{staticClass:"image-slot",attrs:{slot:"error"},slot:"error"},[n("i",{staticClass:"el-icon-warning-outline"})])])})),1):t._e(),n("el-button",{staticClass:"btn-download-emoji",attrs:{loading:t.isDownloadingEmoji,type:"primary",plain:"",icon:"el-icon-download"},nativeOn:{click:function(e){return e.stopPropagation(),t.handleDownloadEmoji.apply(null,arguments)}}},[n("div",{staticClass:"m-emotion-down"},[n("b",[t._v("立即下载")])])])],1)},v=[],g=(n("99af"),n("b0c0"),n("bc3a")),b=n.n(g),w=n("41cb"),_=n("65c2");function y(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"std";return Object(w["e"])().get("/icon/name/".concat(t),{params:{client:e}}).then((function(t){return t.data}))}function L(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"std",e="origin"==t?"origin_favicons":"favicons";return Object(w["b"])().get("/api/cms/user/my/meta",{params:{key:e}}).then((function(t){return t.data.data}))}function x(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"std",n="origin"==e?"origin_favicons":"favicons";return Object(w["b"])().post("/api/cms/user/my/meta",{val:t},{params:{key:n}}).then((function(t){return t.data.data}))}function I(){return b.a.get(_["__staticPath"].jsdelivr+"jx3-icon@1.1.0/emotion.json").then((function(t){return t.data}))}var j={name:"emo",props:["list"],data:function(){return{emoList:"",index:0,EmojiPath:_["__iconPath"]+"emotion/emotions/",isDownloadingEmoji:!1}},computed:{},watch:{},methods:{getData:function(){var t=this;I().then((function(e){t.emoList=e}))},toChangeEmo:function(t){this.index=t},handleDownloadEmoji:function(){this.isDownloadingEmoji=!0;var t=document.createElement("a");t.href="".concat(this.EmojiPath).concat(this.emoList[this.index].name,".zip"),t.download="".concat(this.emoList[this.index].name,".zip"),t.click(),this.isDownloadingEmoji=!1}},filters:{},created:function(){this.getData()},mounted:function(){}},C=j,k=n("2877"),O=Object(k["a"])(C,m,v,!1,null,null,null),E=O.exports,N=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"m-icons-fav"},[t.favList.length?t._e():n("el-alert",{staticClass:"m-icons-tips",attrs:{title:"没有收藏的图标，请搜索图标进行添加。",type:"info",center:"","show-icon":""}}),n("IconsMatrix",{attrs:{favList:t.favList}})],1)},S=[],F=n("2909"),$=n("1da1"),P=(n("96cf"),n("4de4"),n("d3b7"),n("a15b"),n("ac1f"),n("5319"),n("1276"),n("6062"),n("3ca3"),n("ddb0"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"m-icons-matrix"},t._l(t.matrix,(function(e,i){return n("div",{key:i,staticClass:"u-icons-item"},[n("div",{staticClass:"u-pic",on:{click:function(n){return t.myFavIcons(e)}}},[n("el-image",{staticClass:"u-img",attrs:{src:t.iconPath(e)}},[n("i",{staticClass:"el-icon-warning-outline u-error",attrs:{slot:"error"},slot:"error"})]),t.list?n("el-tooltip",{staticClass:"u-love",attrs:{disabled:!e.id,content:t.iconName(e),placement:"top-start"}},[n("i",{staticClass:"w-heart",class:{"w-heart-animation":t.handleHeart(e)}})]):n("span",{staticClass:"u-remove"})],1),t.list?n("span",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:e,expression:"icon",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.onCopy,expression:"onCopy",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:t.onError,expression:"onError",arg:"error"}],staticClass:"u-copy",attrs:{title:"点击快速复制"}},[t._v(t._s(t.iconId(e)))]):n("span",[t._v(t._s(t.iconId(e)))])])})),0)}),D=[],R=n("53ca"),M={name:"matrix",props:["list","favList"],data:function(){return{}},computed:{matrix:function(){return this.list?this.list:this.favList},client:function(){return this.$store.state.client}},methods:{iconName:function(t){return"object"==Object(R["a"])(t)?t.name:String(t)},iconId:function(t){return"object"==Object(R["a"])(t)?t.id:String(t)},handleHeart:function(t){return t=this.iconId(t),this.favList.includes(t)},myFavIcons:function(t){t=this.iconId(t);var e=this.favList;e.includes(t)?e=e.filter((function(e){return e!==t})):e.push(t),this.$store.commit("storeFav",e)},iconPath:function(t){return t=this.iconId(t),"origin"==this.client?"".concat(_["__iconPath"],"origin_icon/").concat(t,".png"):"".concat(_["__iconPath"],"icon/").concat(t,".png")},onCopy:function(t){t=this.iconId(t.value),this.$notify({title:"复制成功",message:"复制内容 : "+t,type:"success"})},onError:function(){this.$notify.error({title:"复制失败",message:"请手动复制"})}},mounted:function(){},created:function(){},watch:{matrix:function(t){console.log(t)}}},T=M,B=Object(k["a"])(T,P,D,!1,null,null,null),H=B.exports,J=n("c9d2"),z={name:"fav",props:[],components:{IconsMatrix:H},computed:{uid:function(){return J["a"].isLogin()?J["a"].getInfo().uid:0}},data:function(){return{favList:""}},methods:{handleFavorite:function(t){t=this.iconId(t),this.favList.includes(t)?this.favList=this.favList.filter((function(e){return e!==t})):this.favList.push(t),this.setIcons()},setIcons:function(){var t=this;return Object($["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.uid){e.next=3;break}return e.next=3,x(t.favList.join(","),t.client);case 3:t.setFavIcons();case 4:case"end":return e.stop()}}),e)})))()},setFavIcons:function(){var t=this.favList.join(",");window.localStorage&&window.localStorage.setItem("favicons",t)},getFavIcons:function(){var t=this;return Object($["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.uid){e.next=5;break}return e.next=3,L(t.client).then((function(e){var n=e;if(n){n.includes("[")&&(n=n.replace(/[\[\]"\ ]/g,""));var i=n.split(",");t.localFavList&&(i=i.concat(t.localFavList)),t.favList=Object(F["a"])(new Set(i))}else t.favList=[]})).catch((function(e){t.favList=t.localFavList}));case 3:e.next=6;break;case 5:t.favList=t.localFavList;case 6:t.$store.commit("storeFav",t.favList);case 7:case"end":return e.stop()}}),e)})))()},toRef:function(){this.$forceUpdate()}},watch:{"$store.state.favList":function(t){this.favList=t,this.setIcons()}},mounted:function(){this.getFavIcons()}},K=z,U=Object(k["a"])(K,N,S,!1,null,null,null),q=U.exports,A=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"m-icons-search"},[n("el-input",{staticClass:"input-with-select",attrs:{placeholder:"输入搜索条件，例如：3089、1-100、幽月乱花"},on:{"~change":function(e){return t.useSearchIcon.apply(null,arguments)}},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.onSearch.apply(null,arguments)}},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}},[n("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:t.onSearch},slot:"append"})],1),t._m(0),t.isNewbie?n("el-alert",{staticClass:"m-icons-tips",attrs:{title:"以下为部分图标展示，请在上方自定义搜索范围，点击图标即可收藏。",type:"warning",center:"","show-icon":""}}):t._e(),t.searchList.length?t._e():n("el-alert",{staticClass:"m-icons-tips",attrs:{title:"没有找到对应的图标，请重新输入关键词搜索图标。",type:"info",center:"","show-icon":""}}),n("IconsMatrix",{attrs:{list:t.searchList,favList:t.favList}})],1)},G=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"m-icon-search-tip"},[n("ul",[n("li",[t._v("输入单个数字，例如1，返回IconID为1的图标；")]),n("li",[t._v("输入多个数字，例如2,4,6（支持中英文逗号“,”,顿号“、”,斜杠“/”,竖杠“|”），返回IconID分别为2,4,6的三个图标；")]),n("li",[t._v("输入范围区间，例如1~100或1-100，返回IconID从1至100的100个图标；")]),n("li",[t._v("可以同时输入多个数字和多个范围，例如2,3,11-14,17，返回IconID分别为2,3,11,12,13,14,17的7个图标；")]),n("li",[t._v("输入单个图标名称，可以根据名称模糊搜索相关图标，例如：幽月、幽月乱花。")]),n("li",[t._v("每次上限500个")])])])}],Q=(n("841c"),n("00b4"),n("159b"),n("fb6a"),n("6ffc")),V={name:"search",props:[],components:{IconsMatrix:H},data:function(){return{search:"",searchList:"",isNewbie:!0,favList:""}},computed:{client:function(){return this.$store.state.client}},methods:{useSearchIcon:function(){this.isNewbie=!1},onSearch:function(){this.search&&this.getSearchData(this.search)},getSearchData:function(t){var e=this;return Object($["a"])(regeneratorRuntime.mark((function n(){var i,a,s,o,c,r,l;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(t!=e.searchKey){n.next=2;break}return n.abrupt("return");case 2:if(t=t.replace(/\ /g,""),i=0,a=1,s=[],o=[],c=[],t=t.replace(/，|、|\/|\||\\/g,","),t=t.replace(/~/g,"-"),r=/^[0-9]+$/,t.includes(",")||t.includes("-")||r.test(t)){n.next=17;break}return n.next=14,e.searchIconByName(t);case 14:return l=n.sent,console.log(l,"results"),n.abrupt("return");case 17:t.includes(",")&&t.includes("-"),t.includes(",")&&(c=t.split(",")),0===c.length&&(c=[t]),c.forEach((function(t){if(t.includes("-")){if(s=t.split("-"),i=parseInt(s[0]),a=parseInt(s[s.length-1]),!isNaN(i)&&!isNaN(a))if(i>a)for(var e=a;e<=i;++e)o.includes(e)||o.push(e);else for(var n=i;n<=a;++n)o.includes(n)||o.push(n)}else isNaN(parseInt(t))||o.push(parseInt(t))})),e.searchList=o.slice(0,500);case 22:case"end":return n.stop()}}),n)})))()},searchIconByName:function(t){var e=this;return Object($["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:y(t,e.client).then((function(t){var n=[],i=[],a=[];a=a.concat(t.item,t.skill,t.buff),a.forEach((function(t){var e=t.iconID+"";i.includes(e)||(i.push(e),n.push({id:e,name:t.Name}))})),e.searchList=n})).catch((function(t){console.log("Error:",t)}));case 1:case"end":return n.stop()}}),n)})))()},getFavList:function(){var t,e=(null===(t=window.localStorage.getItem("favicons"))||void 0===t?void 0:t.split(","))||[];this.$store.state.favList&&(e=Object(F["a"])(new Set(e.concat(this.$store.state.favList)))),this.favList=e}},watch:{"$store.state.favList":function(t){"undefined"!==typeof t&&(this.favList=t)}},filters:{},created:function(){this.searchList=Q,this.getFavList()},mounted:function(){}},W=V,X=Object(k["a"])(W,A,G,!1,null,null,null),Y=X.exports,Z={name:"Icons",data:function(){return{activeTabName:"icon"}},computed:{},methods:{getIcon:function(t){return _["__imgPath"]+"image/box/"+t+".svg"}},filters:{},mounted:function(){},components:{Nav:p["a"],IconsEmo:E,IconsFav:q,IconsSearch:Y}},tt=Z,et=(n("b8c4"),Object(k["a"])(tt,d,h,!1,null,null,null)),nt=et.exports;s["default"].config.productionTip=!1,s["default"].use(a.a),s["default"].use(c.a),s["default"].use(r["a"]),new s["default"]({store:f,render:function(t){return t(nt)}}).$mount("#app")}});
//# sourceMappingURL=icons.7c214742.js.map