(function(t){function e(e){for(var a,l,r=e[0],o=e[1],c=e[2],d=0,m=[];d<r.length;d++)l=r[d],Object.prototype.hasOwnProperty.call(s,l)&&s[l]&&m.push(s[l][0]),s[l]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a]);u&&u(e);while(m.length)m.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,r=1;r<n.length;r++){var o=n[r];0!==s[o]&&(a=!1)}a&&(i.splice(e--,1),t=l(l.s=n[0]))}return t}var a={},s={talent2:0},i=[];function l(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=t,l.c=a,l.d=function(t,e,n){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)l.d(n,a,function(e){return t[e]}.bind(null,a));return n},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="https://console.cnyixun.com/static/app/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],o=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var u=o;i.push([15,"chunk-vendors","chunk-common"]),n()})({"11ba":function(t,e,n){},15:function(t,e,n){t.exports=n("b459")},"46f2":function(t,e,n){"use strict";n("11ba")},b459:function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),s=n("5c96"),i=n.n(s),l=n("4eb5"),r=n.n(l),o=n("6a69"),c=(n("6b30"),n("c5b4"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Header"),n("Breadcrumb",{attrs:{name:"镇派模拟器",slug:"talent2",root:"/app/talent2",feedbackEnable:!0,crumbEnable:!0}},[n("img",{attrs:{slot:"logo","svg-inline":"",src:t.getIcon("talent2")},slot:"logo"}),n("div",{staticClass:"m-info"})]),n("LeftSidebar",{attrs:{open:!1}},[n("Nav")],1),n("Main",{attrs:{withoutRight:!0,withoutLeft:!0}},[n("div",{staticClass:"m-talent m-talent2"},[n("div",{staticClass:"m-talent-header"},[n("h1",{staticClass:"m-talent-title"},[t._v("镇派模拟器")]),n("div",{staticClass:"m-talent-panel"},[n("div",{staticClass:"m-talent-version"},[n("span",{staticClass:"u-label"},[t._v("选择版本")]),n("el-select",{attrs:{placeholder:"请选择游戏版本"},on:{change:t.reload},model:{value:t.version,callback:function(e){t.version=e},expression:"version"}},t._l(t.versions,(function(t){return n("el-option",{key:t.version,attrs:{label:t.name,value:t.version}})})),1)],1)])]),n("div",{staticClass:"m-talent-wrapper"},[n("h2",{staticClass:"m-talent-subtitle"},[t._v("选择心法")]),n("div",{staticClass:"m-talent-xf"},t._l(t.xfmap,(function(e,a){return n("el-radio",{directives:[{name:"show",rawName:"v-show",value:t.isOrigin(e),expression:"isOrigin(item)"}],key:a,attrs:{label:e.name},on:{change:t.reload},model:{value:t.xf,callback:function(e){t.xf=e},expression:"xf"}},[n("img",{staticClass:"u-pic",attrs:{src:t._f("xficon")(e.id),alt:e.name}}),n("span",{staticClass:"u-txt"},[t._v(t._s(e.name))])])})),1),n("h2",{staticClass:"m-talent-subtitle"},[t._v("配置镇派")]),n("div",{staticClass:"m-talent2-box"},[n("div",{staticClass:"m-talent2-main-title"},[t._v("镇派经脉模拟器")]),t.xf?[n("div",{staticClass:"m-talent2-surplus",class:[t.total-t.totalCount>0?"":"m-talent2-surplus-empty"]},[t._v("剩余点数 : "),n("span",[t._v(t._s(t.surplus))])]),n("div",{staticClass:"m-talent2-main"},[n("div",{staticClass:"m-talent2-left"},[n("div",{staticClass:"m-talent2-content",style:{"background-image":t.xf?"url("+t.talentBg("left",1)+")":""}},[n("div",{staticClass:"m-talent2-title"},[n("img",{staticClass:"m-talent2-xf-icon",attrs:{src:t._f("xficon")(t.xfContent[0])}}),n("span",{staticClass:"m-talent2-title-count"},[t._v(t._s(t.lCount))]),n("span",{staticClass:"m-talent2-title-name"},[t._v(t._s(t.l_name))])]),t._l(t.talentContent.left,(function(e,a){return n("div",{key:"l"+a,staticClass:"m-talent2-content-row"},[t._l(e,(function(e,s){return[e?n("div",{key:s,staticClass:"m-talent2-content-item",class:[{"m-talent2-content-item-skill":"skill"===e.type},t.canOperate(a,"left")?"":"m-talent2-content-item-disabled",e.pretab?"m-talent2-pretab":""],on:{mouseover:function(n){return t.$set(e,"on",!0)},mouseleave:function(n){return t.$set(e,"on",!1)}}},[n("div",{class:[t.canLeftItemOperate(a,s)?"m-talent2-selected":"skill"===e.type?"m-talent2-skill-unselected":"m-talent2-unselected","skill"===e.type?"":"m-talent2-talent",t.surplus||Number(t.l_data[a][s])?"":"skill"===e.type?"m-talent2-skill-unselected":"m-talent2-unselected"],on:{click:function(n){return t.leftTalentAdd(e,a,s)},contextmenu:function(e){return e.preventDefault(),t.leftTalentDecrease(a,s)}}},[e.pretab&&!t.isLeftParentAdd(a,s)&&t.canLeftItemOperate(a,s)?n("span",{class:"skill"===e.type?"is-add-skill":"is-add"}):t._e(),t.surplus||Number(t.l_data[a][s])?t._e():n("span",{class:"skill"===e.type?"is-add-skill":"is-add"}),n("img",{staticClass:"talent-img",class:{"skill-img":"skill"===e.type},attrs:{src:t._f("talentIcon")(e.icon),alt:e.name}})]),Number(t.l_data[a][s])?n("span",{staticClass:"m-talent2-content-item-count",class:[Number(t.l_data[a][s])<e.max?"m-talent2-content-item-count-under":""]},[t._v(t._s(t.l_data[a][s]))]):t._e(),n("span",{staticClass:"m-talent2-pop",class:e.on?"on":""},[n("b",{staticClass:"m-talent2-name"},[n("span",[t._v(t._s(e.name))]),n("span",{staticClass:"m-talent2-number"},[t._v(" 第"+t._s(Number(t.l_data[a][s])+"/"+e.max)+"重 ")])]),n("span",{staticClass:"m-talent2-desc"},[t._v(" "+t._s(Number(t.l_data[a][s])&&"通用"!==t.xf?e.desc[t.l_data[a][s]-1]:e.desc[0])+" ")]),Number(t.l_data[a][s])&&Number(t.l_data[a][s])<e.max?n("span",{staticClass:"m-talent2-desc-next"},["通用"!==t.xf?n("span",{staticClass:"m-next-text"},[t._v("下一重：")]):t._e(),n("span",[t._v(" "+t._s(e.desc[t.l_data[a][s]])+" ")])]):t._e(),Number(t.l_data[a][s])===e.max?n("span",{staticClass:"m-max"},[t._v("该招式已练至最高境界")]):t._e(),Number(t.l_data[a][s])?n("span",{staticClass:"m-talent-retrogress"},[t._v("右键点击遗忘")]):t._e()])]):n("div",{key:s,staticClass:"m-talent2-content-item-empty"})]}))],2)}))],2)]),n("div",{staticClass:"m-talent2-right"},[n("div",{staticClass:"m-talent2-content",style:{"background-image":t.xf?"url("+t.talentBg("right",1)+")":""}},[n("div",{staticClass:"m-talent2-title"},[n("img",{staticClass:"m-talent2-xf-icon",attrs:{src:t._f("xficon")(t.xfContent[1])}}),n("span",{staticClass:"m-talent2-title-count"},[t._v(t._s(t.rCount))]),n("span",{staticClass:"m-talent2-title-name"},[t._v(t._s(t.r_name))])]),t._l(t.talentContent.right,(function(e,a){return n("div",{key:"r"+a,staticClass:"m-talent2-content-row"},[t._l(e,(function(e,s){return[e?n("div",{key:s,staticClass:"m-talent2-content-item",class:[{"m-talent2-content-item-skill":"skill"===e.type},t.canOperate(a,"right")?"":"m-talent2-content-item-disabled",e.pretab?"m-talent2-pretab":""],on:{mouseover:function(n){return t.$set(e,"on",!0)},mouseleave:function(n){return t.$set(e,"on",!1)}}},[n("div",{class:[t.canRightItemOperate(a,s)?"m-talent2-selected":"skill"===e.type?"m-talent2-skill-unselected":"m-talent2-unselected","skill"===e.type?"":"m-talent2-talent",t.surplus||Number(t.r_data[a][s])?"":"skill"===e.type?"m-talent2-skill-unselected":"m-talent2-unselected"],on:{click:function(n){return t.rightTalentAdd(e,a,s)},contextmenu:function(e){return e.preventDefault(),t.rightTalentDecrease(a,s)}}},[e.pretab&&!t.isRightParentAdd(a,s)&&t.canRightItemOperate(a,s)?n("span",{class:"skill"===e.type?"is-add-skill":"is-add"}):t._e(),t.surplus||Number(t.r_data[a][s])?t._e():n("span",{class:"skill"===e.type?"is-add-skill":"is-add"}),n("img",{staticClass:"talent-img",class:{"skill-img":"skill"===e.type},attrs:{src:t._f("talentIcon")(e.icon),alt:e.name}})]),Number(t.r_data[a][s])?n("span",{staticClass:"m-talent2-content-item-count",class:[Number(t.r_data[a][s])<e.max?"m-talent2-content-item-count-under":""]},[t._v(t._s(t.r_data[a][s]))]):t._e(),n("span",{staticClass:"m-talent2-pop",class:e.on?"on":""},[n("b",{staticClass:"m-talent2-name"},[n("span",[t._v(t._s(e.name))]),n("span",{staticClass:"m-talent2-number"},[t._v(" 第"+t._s(Number(t.r_data[a][s])+"/"+e.max)+"重 ")])]),n("span",{staticClass:"m-talent2-desc"},[t._v(" "+t._s(Number(t.r_data[a][s])&&"通用"!==t.xf?e.desc[t.r_data[a][s]-1]:e.desc[0])+" ")]),Number(t.r_data[a][s])&&Number(t.r_data[a][s])<e.max?n("span",{staticClass:"m-talent2-desc-next"},["通用"!==t.xf?n("span",{staticClass:"m-next-text"},[t._v("下一重：")]):t._e(),n("span",[t._v(" "+t._s(e.desc[t.r_data[a][s]])+" ")])]):t._e(),Number(t.r_data[a][s])===e.max?n("span",{staticClass:"m-max"},[t._v("该招式已练至最高境界")]):t._e(),Number(t.r_data[a][s])?n("span",{staticClass:"m-talent-retrogress"},[t._v("右键点击遗忘")]):t._e()])]):n("div",{key:s,staticClass:"m-talent2-content-item-empty"})]}))],2)}))],2)])]),n("div",{staticClass:"m-talent2-actions"},[n("div",{staticClass:"rest-btn",class:t.totalCount?"m-talent2-actions-btn":"m-talent2-actions-btn-disabled",on:{click:t.reload}},[t._v("重置")])])]:t._e()],2),n("h2",{staticClass:"m-talent-subtitle"},[t._v("镇派编码")]),n("div",{staticClass:"m-talent-extend"},[n("el-tabs",{attrs:{type:"card"},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[n("el-tab-pane",{attrs:{label:"通用编码",name:"common"}},[n("div",{staticClass:"m-talent-code"},[n("el-input",{attrs:{placeholder:"粘贴编码亦可自动解析奇穴"},on:{change:t.parseSchema},model:{value:t.code,callback:function(e){t.code=e},expression:"code"}}),n("div",{staticClass:"m-talent-op"},[n("el-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.code,expression:"code",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.onCopy,expression:"onCopy",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:t.onError,expression:"onError",arg:"error"}],staticClass:"u-btn",attrs:{type:"primary",icon:"el-icon-document-copy",size:"small"}},[t._v("点击复制")]),t.isLogin?n("el-button",{staticClass:"u-btn",attrs:{type:"primary",icon:"el-icon-document-add",size:"small"},on:{click:t.save}},[t._v("保存为预设")]):t._e()],1)],1)]),n("el-tab-pane",{attrs:{label:"配装器编码",name:"pz"}},[n("el-input",{attrs:{placeholder:"配装器编码",type:"textarea",rows:4},model:{value:t.pzcode,callback:function(e){t.pzcode=e},expression:"pzcode"}}),n("el-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.pzcode,expression:"pzcode",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.onCopy,expression:"onCopy",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:t.onError,expression:"onError",arg:"error"}],staticClass:"u-btn",attrs:{type:"primary",icon:"el-icon-document-copy",size:"small"}},[t._v("点击复制")]),t.isLogin?n("el-button",{staticClass:"u-btn",attrs:{type:"primary",icon:"el-icon-document-add",size:"small"},on:{click:t.save}},[t._v("保存为预设")]):t._e()],1)],1)],1)]),t.isLogin?n("div",{staticClass:"m-talent-my"},[n("h2",{staticClass:"m-talent-subtitle"},[t._v("预设方案")]),n("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"m-talent-list"},[t.list&&t.list.length?n("ul",[t._l(t.list,(function(e,a){return n("li",{key:a,staticClass:"m-talent-list-item"},[n("span",{staticClass:"u-name"},[t._v(t._s(e.name))]),n("el-button-group",[n("el-tooltip",{attrs:{effect:"dark",content:"使用",placement:"top"}},[n("el-button",{attrs:{size:"mini",icon:"el-icon-position"},on:{click:function(n){return t.use(e)}}})],1),n("el-tooltip",{attrs:{effect:"dark",content:"改名",placement:"top"}},[n("el-button",{attrs:{size:"mini",icon:"el-icon-edit"},on:{click:function(n){return t.edit(e)}}})],1),n("el-tooltip",{attrs:{effect:"dark",content:"删除",placement:"top"}},[n("el-button",{attrs:{size:"mini",icon:"el-icon-delete"},on:{click:function(n){return t.del(e)}}})],1)],1)],1)})),n("el-pagination",{staticClass:"u-list-pagination",attrs:{background:"","hide-on-single-page":"",layout:"prev,pager,next,->,total",total:t.listTotal,"page-size":t.per,"current-page":t.page},on:{"update:currentPage":function(e){t.page=e},"update:current-page":function(e){t.page=e}}})],2):n("el-alert",{attrs:{title:"当前没有任何预设方案",type:"info","show-icon":""}})],1)]):t._e()]),n("Footer")],1)],1)}),u=[],d=n("5530"),m=n("3835"),p=(n("0481"),n("d81d"),n("ac1f"),n("1276"),n("a9e3"),n("a15b"),n("99af"),n("caad"),n("2532"),n("159b"),n("fb6a"),n("a434"),n("d3b7"),n("b0c0"),n("4de4"),n("216c")),f=n("46d4"),h=n("65c2"),v=n("0401"),g=n("b2a2"),_=n("c9d2"),b=n("83e1"),C={name:"Talent2",data:function(){return{activeName:"common",xf:"",code:"0",pzcode:"",begin:"left",l_name:"山川",r_name:"日月",version:"",versions:[],talents:{},xfmap:f,total:0,l_data:["0000","0000","0000","0000","0000","0000"],r_data:["0000","0000","0000","0000","0000","0000"],series_open_need:0,xfContent:[],talentContent:{left:[],right:[]},isLogin:_["a"].isLogin(),showList:!1,list:[],per:10,page:1,listTotal:0,loading:!1}},computed:{lCount:function(){return this.l_data.length?this.l_data.map((function(t){return t.split("")})).flat().reduce((function(t,e){return Number(t)+Number(e)})):0},rCount:function(){return this.r_data.length?this.r_data.map((function(t){return t.split("")})).flat().reduce((function(t,e){return Number(t)+Number(e)})):0},leftLastIndex:function(){for(var t=0,e=this.l_data.length-1;e>0;e--)if(Number(this.l_data[e])){t=e;break}return t},rightLastIndex:function(){for(var t=0,e=this.r_data.length-1;e>0;e--)if(Number(this.r_data[e])){t=e;break}return t},totalCount:function(){return this.lCount+this.rCount},talent2Data:function(){return"left"===this.begin?this.l_data.concat(this.r_data).join(","):this.r_data.concat(this.l_data).join(",")},surplus:function(){return this.total-this.totalCount},client:function(){return location.href.includes("origin")?"origin":"std"},mount:function(){var t;return null===(t=this.xfmap[this.xf])||void 0===t?void 0:t.id},params:function(){var t=this.client,e=this.mount,n=this.version,a=this.code,s=this.pzcode,i=this.xf;return{client:t,type:"talent2",mount:e,version:n,code:JSON.parse(a),pzcode:JSON.parse(s),xf:i}}},methods:{getIcon:function(t){return h["__imgPath"]+"image/box/"+t+".svg"},reload:function(t){this.l_data=["0000","0000","0000","0000","0000","0000"],this.r_data=["0000","0000","0000","0000","0000","0000"]},reset:function(){},renderCode:function(){var t=this.version,e=this.xf,n=this.talent2Data,a=this.l_data,s=this.r_data,i=this.talentContent,l={version:t,xf:e,sq:n};this.code=JSON.stringify(l);var r=[];a.forEach((function(t,e){var n=t.split("").map((function(t){return parseInt(t)}));n.forEach((function(t,n){if(t){var a=i.left[e][n],s={id:a.id,icon:a.icon,level:t};r.push(s)}}))})),s.forEach((function(t,e){var n=t.split("").map((function(t){return parseInt(t)}));n.forEach((function(t,n){if(t){var a=i.right[e][n],s={id:a.id,icon:a.icon,level:t};r.push(s)}}))})),this.pzcode=JSON.stringify(r)},onCopy:function(t){this.$message({title:"复制成功",message:"编码复制成功",type:"success"})},onError:function(){this.$message.error({title:"复制失败",message:"请手动复制"})},isOrigin:function(t){return t["client"].includes("origin")},parseSchema:function(){try{var t,e,n,a,s=JSON.parse(this.code);this.version=s.version,this.xf=s.xf;var i=this.xf;this.xfContent=null===(t=v["a"][i])||void 0===t?void 0:t.content,this.begin=null===(e=v["a"][i])||void 0===e?void 0:e.begin,this.talentContent.left=this.talents[v["a"][i].talent[0]],this.l_name=null===(n=v["a"][i])||void 0===n?void 0:n.talent[0],this.talentContent.right=this.talents[v["a"][i].talent[1]],this.r_name=null===(a=v["a"][i])||void 0===a?void 0:a.talent[1];var l=s.sq.split(",");"left"===this.begin?(this.l_data=[].concat(l.slice(0,6)),this.r_data=l.slice(6,l.length)):(this.r_data=l.slice(0,6),this.l_data=l.slice(6,l.length)),console.log(this.l_data,this.r_data)}catch(r){this.$message.error("编码格式错误")}},canOperate:function(t,e){return"left"===e?this.lCount>=5*t:this.rCount>=5*t},canLeftItemOperate:function(t,e){var n=!1;return"left"===this.begin?t?this.lCount>0&&this.lCount>=5*t&&(n=!0):n=!0:"right"===this.begin&&this.rCount>=this.series_open_need&&this.lCount>=0&&this.lCount>=5*t&&(n=!0),n},isLeftParentAdd:function(t,e){return Number(this.l_data[t-1][e])},leftTalentAdd:function(t,e,n){if(this.canOperate(e,"left"))if(null===t||void 0===t||!t.pretab||this.isLeftParentAdd(e,n)){var a=t.max,s=t.parent;if("right"===this.begin&&this.rCount<this.series_open_need)this.$message.warning({message:"主天赋需要先激活".concat(this.series_open_need,"点，才能激活本区域的天赋")});else{if(null!==s&&void 0!==s&&s.length){var i=Object(m["a"])(s,1),l=i[0],r=Number(this.l_data[l.row][l.index]);if(!r)return void this.$message({type:"warning",message:"该天赋存在前置天赋，需先激活前置天赋"})}if(this.totalCount>=this.total)this.$message({type:"warning",message:"最大加点数为"+this.total});else{var o=Number(this.l_data[e][n]);if(o<a){o++;var c=this.l_data[e].split("");c[n]=String(o),this.l_data.splice(e,1,c.join(""))}else this.$message({type:"warning",message:"该天赋已达最高层数"})}}}else this.$message.warning({message:"要激活该天赋需要先激活对应的上层天赋"})},leftTalentDecrease:function(t,e){var n=Number(this.l_data[t][e]);if(n>0){if(t<this.l_data.length-1){var a=0,s=this.l_data.slice(0,t+1),i=this.l_data.map((function(t){return t.split("")})).flat().reduce((function(t,e){return Number(t)+Number(e)}));if(a=s.map((function(t){return t.split("")})).flat().reduce((function(t,e){return Number(t)+Number(e)})),a<=5*this.leftLastIndex&&i>a)return void this.$message.warning({title:"提醒",message:"不能再减啦"})}n--;var l=this.l_data[t].split("");l[e]=String(n),this.l_data.splice(t,1,l.join(""))}},canRightItemOperate:function(t,e){var n=!1;return"right"===this.begin?t?this.rCount>0&&this.rCount>=5*t&&(n=!0):n=!0:"left"===this.begin&&this.lCount>=this.series_open_need&&this.rCount>=0&&this.rCount>=5*t&&(n=!0),n},isRightParentAdd:function(t,e){return Number(this.r_data[t-1][e])},rightTalentAdd:function(t,e,n){if(this.canOperate(e,"right"))if(null===t||void 0===t||!t.pretab||this.isRightParentAdd(e,n)){var a=t.max,s=t.parent;if("left"===this.begin&&this.lCount<this.series_open_need)this.$message.warning({title:"提醒",message:"主天赋需要先激活".concat(this.series_open_need,"点，才能激活本区域的天赋")});else{if(null!==s&&void 0!==s&&s.length){var i=Object(m["a"])(s,1),l=i[0],r=Number(this.r_data[l.row][l.index]);if(!r)return void this.$message({type:"warning",message:"该天赋存在前置天赋，需先激活前置天赋"})}if(this.totalCount>=this.total)this.$message({type:"warning",message:"最大加点数为"+this.total});else{var o=Number(this.r_data[e][n]);if(o<a){o++;var c=this.r_data[e].split("");c[n]=String(o),this.r_data.splice(e,1,c.join(""))}else this.$message({type:"warning",message:"该天赋已达最高层数"})}}}else this.$message.warning({message:"要激活该天赋需要先激活对应的上层天赋"})},rightTalentDecrease:function(t,e){var n=Number(this.r_data[t][e]);if(n>0){if(t<this.r_data.length-1){var a=0,s=this.r_data.slice(0,t+1),i=this.r_data.map((function(t){return t.split("")})).flat().reduce((function(t,e){return Number(t)+Number(e)}));if(a=s.map((function(t){return t.split("")})).flat().reduce((function(t,e){return Number(t)+Number(e)})),a<=5*this.rightLastIndex&&i>a)return void this.$message.warning({title:"提醒",message:"不能再减啦"})}n--;var l=this.r_data[t].split("");l[e]=String(n),this.r_data.splice(t,1,l.join(""))}},talentBg:function(t,e){if(t)return"left"===t?h["__imgPath"]+"image/talent/".concat(this.xfContent[0],"_").concat(e,".png"):h["__imgPath"]+"image/talent/".concat(this.xfContent[1],"_").concat(e,".png")},getVersions:function(){var t=this;fetch(h["__ossRoot"]+"data/talent2/index.json").then((function(t){return t.json()})).then((function(e){var n;t.versions=e,t.version=null===(n=t.versions[0])||void 0===n?void 0:n.version}))},getTalents:function(){var t=this;fetch(h["__ossRoot"]+"data/talent2/"+this.version+".json").then((function(t){return t.json()})).then((function(e){t.talents=Object(d["a"])(Object(d["a"])({},e),g["b"]),t.xf="通用",t.total=66}))},save:function(){var t=this;this.mount?this.$prompt("请输入方案名称","提示",{confirmButtonText:"确定",cancelButtonText:"取消",inputErrorMessage:"输入不能为空",inputValidator:function(t){if(!t)return"输入不能为空"}}).then((function(e){var n=e.value;Object(b["a"])(Object(d["a"])(Object(d["a"])({},t.params),{},{name:n})).then((function(){t.$notify({type:"success",title:"成功",message:"预设方案保存成功"}),t.loadList()}))})):this.$notify({type:"warning",title:"提醒",message:"暂未选择心法，请先选择心法"})},loadList:function(){var t=this;this.loading=!0,Object(b["c"])({client:this.client}).then((function(e){t.list=e.data.data.list,t.page=e.data.data.page,t.per=e.data.data.per,t.listTotal=e.data.data.total})).finally((function(){t.loading=!1}))},use:function(t){var e=this,n=JSON.parse(this.code);this.xf=n.xf,setTimeout((function(){e.code=JSON.stringify(t.code),e.pzcode=JSON.stringify(t.pzcode),e.parseSchema()}))},edit:function(t){var e=this;this.$prompt("请输入方案名称","提示",{confirmButtonText:"确定",cancelButtonText:"取消",inputValue:t.name,inputErrorMessage:"输入不能为空",inputValidator:function(t){if(!t)return"输入不能为空"}}).then((function(n){var a=n.value;Object(b["d"])(t.id,{name:a}).then((function(){e.$notify({type:"success",title:"成功",message:"方案名称修改成功"}),t.name=a}))}))},del:function(t){var e=this;this.$confirm("确认删除预设方案[".concat(t.name,"]？"),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(b["e"])(t.id).then((function(){e.$notify({type:"success",title:"成功",message:"预设方案删除成功"}),e.list=e.list.filter((function(e){return e.id!==t.id}))}))}))}},filters:{xficon:function(t){return h["__imgPath"]+"image/xf/"+t+".png"},talentIcon:function(t){return t?h["__iconPath"]+"origin_icon/"+t+".png":""}},watch:{version:function(t){t&&this.getTalents()},xf:{immediate:!0,handler:function(t,e){var n,a,s,i,l,r,o=this;t&&(this.xfContent=null===(n=v["a"][t])||void 0===n?void 0:n.content,this.begin=null===(a=v["a"][t])||void 0===a?void 0:a.begin,this.talentContent.left=null===(s=this.talents[v["a"][t].talent[0]])||void 0===s?void 0:s.map((function(t){var e=t.map((function(t){return t&&o.$set(t,"on",!1),t}));return e})),this.l_name=null===(i=v["a"][t])||void 0===i?void 0:i.talent[0],this.talentContent.right=null===(l=this.talents[v["a"][t].talent[1]])||void 0===l?void 0:l.map((function(t){var e=t.map((function(t){return t&&o.$set(t,"on",!1),t}));return e})),this.r_name=null===(r=v["a"][t])||void 0===r?void 0:r.talent[1],this.total="通用"===t?66:g["a"].total,this.renderCode())}},talent2Data:function(){this.renderCode()}},mounted:function(){this.getVersions(),this.series_open_need=g["a"].series_open_need,this.loadList()},components:{Nav:p["a"]}},x=C,y=(n("46f2"),n("2877")),N=Object(y["a"])(x,c,u,!1,null,null,null),k=N.exports;a["default"].config.productionTip=!1,a["default"].use(i.a),a["default"].use(r.a),a["default"].use(o["a"]),new a["default"]({render:function(t){return t(k)}}).$mount("#app")}});
//# sourceMappingURL=talent2.d4bc1c52.js.map