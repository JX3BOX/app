(function(e){function t(t){for(var l,a,s=t[0],r=t[1],c=t[2],f=0,d=[];f<s.length;f++)a=s[f],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&d.push(i[a][0]),i[a]=0;for(l in r)Object.prototype.hasOwnProperty.call(r,l)&&(e[l]=r[l]);u&&u(t);while(d.length)d.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],l=!0,s=1;s<n.length;s++){var r=n[s];0!==i[r]&&(l=!1)}l&&(o.splice(t--,1),e=a(a.s=n[0]))}return e}var l={},i={macroeditor:0},o=[];function a(t){if(l[t])return l[t].exports;var n=l[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=l,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)a.d(n,l,function(t){return e[t]}.bind(null,l));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="https://console.cnyixun.com/static/app/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],r=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var u=r;o.push([6,"chunk-vendors","chunk-common"]),n()})({"0a0b":function(e,t,n){},5383:function(e,t,n){"use strict";n("0a0b")},"5d99":function(e,t,n){"use strict";n("c5b5")},6:function(e,t,n){e.exports=n("6c37")},"6c37":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var l=n("2b0e"),i=n("5c96"),o=n.n(i),a=n("6a69"),s=(n("6b30"),n("c5b4"),n("b0c0"),n("caad"),n("2532"),function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("Header"),t("Breadcrumb",{attrs:{name:"宏编辑器",slug:"macroeditor",root:"/app/macroeditor",feedbackEnable:!0,crumbEnable:!0}},[t("img",{attrs:{slot:"logo","svg-inline":"",src:e.getIcon("macroeditor")},slot:"logo"}),t("div",{staticClass:"m-info"})]),t("LeftSidebar",{attrs:{open:!1}},[t("Nav")],1),t("Main",{staticClass:"m-macroeditor",attrs:{withoutRight:!0,withoutLeft:!0}},[t("h1",{staticClass:"m-macroeditor-title"},[e._v(" 智能宏编辑器 "),t("a",{staticClass:"u-help el-button el-button--success is-plain el-button--mini",attrs:{href:"/tool/265",target:"_blank"}},[t("i",{staticClass:"el-icon-s-management"}),e._v(" 宏语法参考手册 ")])]),t("div",{staticClass:"m-editor"},[t("el-row",[t("el-col",{attrs:{span:12}},[t("div",{staticClass:"m-col m-col-left"},[t("h2",{staticClass:"u-subtitle"},[t("svg",{class:"",attrs:{height:"512",viewBox:"0 0 512 512",width:"512",xmlns:"http://www.w3.org/2000/svg","svg-inline":"",role:"presentation",focusable:"false",tabindex:"-1"}},[t("path",{attrs:{d:"M504 275.09a8 8 0 00-5.27-7.52L384 225.85V92.23h-.31a7.922 7.922 0 00-4.96-9.66l-120-43.63a7.888 7.888 0 00-5.46 0l-120 43.63a8.018 8.018 0 00-5.06 5.78H128v137.5L13.27 267.57a8.018 8.018 0 00-5.06 5.78H8v141.82h.2a7.988 7.988 0 005.07 9.26l120 43.63a7.854 7.854 0 005.46 0L256 425.42l117.27 42.64a7.854 7.854 0 005.46 0l120-43.63a7.985 7.985 0 004.97-5.38h.3V277.23s-.006-1.416 0-2.14zM128 449.12L24 411.31v-124.8l104 37.82zm8-138.91l-96.59-35.12 95.96-34.9 96.6 35.13zm112 101.1l-104 37.81V324.33l104-37.82zm0-147.64l-104-37.82V101.51l104 37.82zM159.41 90.09L256 54.97l96.59 35.12L256 125.21zM368 101.51v124.34l-104 37.82V139.33zm0 347.61l-104-37.81v-124.8l104 37.82zm8-138.91l-95.97-34.89 96.6-35.13 95.96 34.9zm112 101.1l-104 37.81V324.33l104-37.82z"}})]),e._v("快捷插入")]),t("el-form",{ref:"form",staticClass:"u-cmds",attrs:{model:e.form,"label-width":"80px"}},[t("el-form-item",{attrs:{label:"释放方式"}},[t("el-radio-group",{model:{value:e.castType,callback:function(t){e.castType=t},expression:"castType"}},[t("el-radio",{attrs:{label:"cast"}},[e._v("释放(cast)")]),t("el-radio",{attrs:{label:"fcast"}},[e._v("强制施放(fcast)")])],1)],1),t("el-form-item",{attrs:{label:"技能名"}},[t("el-input",{model:{value:e.skill,callback:function(t){e.skill=t},expression:"skill"}})],1),t("el-form-item",{attrs:{label:"条件释放"}},[t("el-switch",{model:{value:e.isConditional,callback:function(t){e.isConditional=t},expression:"isConditional"}}),e.isConditional&&e.conditions.length>2?[t("span",{staticClass:"btn-help"},[t("el-button",{attrs:{plain:"",icon:"el-icon-info"},on:{click:e.showRealLogic}},[e._v("点击查看实际逻辑关系")])],1),t("el-alert",{attrs:{title:"请注意，此处选择的逻辑将不做处理，直接转换为宏中的 & 和 | ",type:"warning"}}),t("el-dialog",{attrs:{title:"实际逻辑",visible:e.logicDialogVisible,width:Math.min(640,.9*this.windowInnerWidth)+"px"},on:{"update:visible":function(t){e.logicDialogVisible=t}}},[t("span",[e._v(e._s(e.logicDialog))]),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{attrs:{type:"primary"},on:{click:function(t){e.logicDialogVisible=!1}}},[e._v("确 定")])],1)])]:e._e()],2),e.isConditional?e._l(e.conditions,(function(n,l){return t("el-form-item",{key:l,attrs:{label:"条件".concat(l+1)}},[l>=1?[t("el-form-item",{attrs:{label:""}},[t("el-radio-group",{model:{value:n.logic,callback:function(t){e.$set(n,"logic",t)},expression:"condition.logic"}},[t("el-radio",{attrs:{label:"&"}},[e._v("并且(and)")]),t("el-radio",{attrs:{label:"|"}},[e._v("或(or)")])],1)],1)]:e._e(),t("el-row",{attrs:{gutter:6}},[t("el-col",{attrs:{span:16}},[t("el-select",{attrs:{placeholder:"判断项目"},on:{change:function(t){return e.onConditionChange(l)}},model:{value:n.name,callback:function(t){e.$set(n,"name",t)},expression:"condition.name"}},[t("el-option",{attrs:{label:"自身有增减益效果",value:"buff"}}),t("el-option",{attrs:{label:"自身有增减益效果层数",value:"buff_level"}}),t("el-option",{attrs:{label:"目标有增减益效果",value:"tbuff"}}),t("el-option",{attrs:{label:"目标有增减益效果层数",value:"tbuff_level"}}),t("el-option",{attrs:{label:"自身增减益效果持续时间",value:"bufftime"}}),t("el-option",{attrs:{label:"目标增减益效果持续时间",value:"tbufftime"}}),t("el-option",{attrs:{label:"自身不存在某增减益效果",value:"nobuff"}}),t("el-option",{attrs:{label:"目标不存在某增减益效果",value:"tnobuff"}}),t("el-option",{attrs:{label:"目标NPC强度等级",value:"npclevel"}}),t("el-option",{attrs:{label:"生命值和最大血量的比值",value:"life"}}),t("el-option",{attrs:{label:"内力值和最大内力值的比值",value:"mana"}}),t("el-option",{attrs:{label:"剑气/尘身刀气/战意/怒气值",value:"rage"}}),t("el-option",{attrs:{label:"纯阳气点/少林禅那/七秀剑舞值",value:"qidian"}}),t("el-option",{attrs:{label:"神机/竹雾刀气/格挡值",value:"energy"}}),t("el-option",{attrs:{label:"日灵/金屏刀气值",value:"sun"}}),t("el-option",{attrs:{label:"月魂值",value:"moon"}}),t("el-option",{attrs:{label:"满日状态",value:"sun_power"}}),t("el-option",{attrs:{label:"满月状态",value:"moon_power"}}),t("el-option",{attrs:{label:"充能技能的当前充能层数",value:"skill_energy"}}),t("el-option",{attrs:{label:"存在某技能/奇穴ID",value:"skill"}}),t("el-option",{attrs:{label:"不存在某技能/奇穴ID",value:"noskill"}}),t("el-option",{attrs:{label:"该宏最后一次释放的技能",value:"last_skill"}}),t("el-option",{attrs:{label:"周围3尺以内敌人数量",value:"nearby_enemy"}}),t("el-option",{attrs:{label:"技能调息完成",value:"skill_notin_cd"}}),t("el-option",{attrs:{label:"药性点数",value:"yaoxing"}})],1),t("el-row",{attrs:{gutter:2}},[e.needsConditionParams.subname.includes(n.name)?t("el-col",{attrs:{span:10}},[t("el-input",{attrs:{placeholder:"名称"},model:{value:n.subname,callback:function(t){e.$set(n,"subname",t)},expression:"condition.subname"}})],1):e._e(),e.needsConditionParams.relation.includes(n.name)?t("el-col",{attrs:{span:7}},[e.needsConditionParams.relationRestricted.includes(n.name)?t("el-select",{model:{value:n.relation,callback:function(t){e.$set(n,"relation",t)},expression:"condition.relation"}},[t("el-option",{attrs:{label:"=",value:"="}}),t("el-option",{attrs:{label:"≠",value:"~="}})],1):t("el-select",{model:{value:n.relation,callback:function(t){e.$set(n,"relation",t)},expression:"condition.relation"}},[t("el-option",{attrs:{label:"=",value:"="}}),t("el-option",{attrs:{label:"＜",value:"<"}}),t("el-option",{attrs:{label:"＞",value:">"}}),t("el-option",{attrs:{label:"≥",value:">="}}),t("el-option",{attrs:{label:"≤",value:"<="}}),t("el-option",{attrs:{label:"≠",value:"~="}})],1)],1):e._e(),e.needsConditionParams.value.includes(n.name)?t("el-col",{attrs:{span:7}},[t("el-input",{attrs:{placeholder:"值"},model:{value:n.value,callback:function(t){e.$set(n,"value",t)},expression:"condition.value"}})],1):e._e()],1)],1),t("el-col",{attrs:{span:7}},[e.conditions.length>1?t("el-button",{attrs:{type:"danger",plain:"",circle:"",icon:"el-icon-minus"},on:{click:function(t){return e.clickMinusCondition(l)}}}):e._e(),l===e.conditions.length-1?t("el-button",{staticStyle:{"margin-left":"2px"},attrs:{type:"primary",plain:"",circle:"",icon:"el-icon-plus"},on:{click:e.clickPlusCondition}}):e._e()],1)],1)],2)})):e._e()],2),t("div",{staticClass:"u-submit"},[t("el-button",{staticClass:"u-btn",attrs:{type:"primary",icon:"el-icon-right"},on:{click:e.insertLine}},[e._v("插入")])],1)],1)]),t("el-col",{attrs:{span:12}},[t("div",{staticClass:"m-col m-col-right"},[t("h2",{staticClass:"u-subtitle"},[t("svg",{class:"",attrs:{height:"512",viewBox:"0 0 512 512",width:"512",xmlns:"http://www.w3.org/2000/svg","svg-inline":"",role:"presentation",focusable:"false",tabindex:"-1"}},[t("linearGradient",{attrs:{id:"a",gradientUnits:"userSpaceOnUse",x1:"63.155",x2:"450.135",y1:"579.855",y2:"80.38"}},[t("stop",{attrs:{offset:"0","stop-color":"#003f8a"}}),t("stop",{attrs:{offset:".518","stop-color":"#00d7df"}}),t("stop",{attrs:{offset:"1","stop-color":"#006df0"}})],1),t("path",{attrs:{d:"M504 275.09a8 8 0 00-5.27-7.52L384 225.85V92.23h-.31a7.922 7.922 0 00-4.96-9.66l-120-43.63a7.888 7.888 0 00-5.46 0l-120 43.63a8.018 8.018 0 00-5.06 5.78H128v137.5L13.27 267.57a8.018 8.018 0 00-5.06 5.78H8v141.82h.2a7.988 7.988 0 005.07 9.26l120 43.63a7.854 7.854 0 005.46 0L256 425.42l117.27 42.64a7.854 7.854 0 005.46 0l120-43.63a7.985 7.985 0 004.97-5.38h.3V277.23s-.006-1.416 0-2.14zM128 449.12L24 411.31v-124.8l104 37.82zm8-138.91l-96.59-35.12 95.96-34.9 96.6 35.13zm112 101.1l-104 37.81V324.33l104-37.82zm0-147.64l-104-37.82V101.51l104 37.82zM159.41 90.09L256 54.97l96.59 35.12L256 125.21zM368 101.51v124.34l-104 37.82V139.33zm0 347.61l-104-37.81v-124.8l104 37.82zm8-138.91l-95.97-34.89 96.6-35.13 95.96 34.9zm112 101.1l-104 37.81V324.33l104-37.82z",fill:"url(#a)"}})],1),e._v("宏编辑区")]),t("p",{staticClass:"u-tips"},[e._v("按下Tab键即可自动联想补全")]),t("codemirror",{ref:"cmEditor",attrs:{options:e.cmOptions},on:{input:e.onCmCodeChange},model:{value:e.code,callback:function(t){e.code=t},expression:"code"}}),t("div",{staticClass:"u-count"},[t("b",{class:{warning:e.code.length>128}},[e._v(e._s(e.code.length))]),e._v(" / 128 "),t("em",[e._v("（还可写 "+e._s(128-e.code.length)+" 字）")])])],1)])],1)],1),t("Footer")],1)],1)}),r=[],c=n("ade3"),u=(n("a434"),n("ac1f"),n("5319"),n("9911"),function(){var e=this,t=e._self._c;return t("div",{staticClass:"m-info"},[t("a",{staticClass:"u-channel",attrs:{href:e.APP_INFO.link}},[e._t("logo"),t("span",{staticClass:"u-title"},[e._v(e._s(e.APP_INFO.name))])],2),t("div",{staticClass:"u-stat"},[e._t("default")],2)])}),f=[],d={name:"Info",props:["APP_INFO"],data:function(){return{}},computed:{},methods:{},mounted:function(){}},b=d,m=(n("5383"),n("2877")),p=Object(m["a"])(b,u,f,!1,null,null,null),v=(p.exports,n("216c")),g=n("8f94"),h=(n("56b3"),n("a7be"),n("f9d4"),n("9b74"),n("f6b6"),n("8c33"),n("75e5"),n("65c2")),_={name:"Macro",data:function(){var e;return{windowInnerWidth:window.innerWidth,castType:"cast",form:null,skill:"",isConditional:!1,needsConditionParams:{subname:["buff","buff_level","nobuff","bufftime","skill_energy","skill","noskill","skill_notin_cd","tbuff","tbuff_level","tnobuff","tbufftime"],relation:["buff_level","tbuff_level","bufftime","life","mana","rage","qidian","energy","sun","moon","skill_energy","last_skill","npclevel","nearby_enemy","tbufftime","yaoxing"],value:["buff_level","tbuff_level","bufftime","life","mana","rage","qidian","energy","sun","moon","skill_energy","last_skill","npclevel","nearby_enemy","tbufftime","yaoxing"],relationRestricted:["skill","noskill","last_skill"]},conditions:[{name:"",relation:"=",value:"",logic:"&",subname:""}],conditionValueName:{buff:"存在增减益效果",buff_level:"增减益效果层数",nobuff:"不存在某增减益效果",bufftime:"增减益效果持续时间",life:"生命值和最大血量的比值",mana:"内力值和最大内力值的比值",rage:"剑气/尘身刀气/战意/怒气值",qidian:"纯阳气点",energy:"神机/竹雾刀气/格挡值",sun:"日灵/金屏刀气值",moon:"月魂值",sun_power:"满日状态",moon_power:"满月状态",skill_energy:"充能技能的当前充能层数",skill:"存在某技能/奇穴ID",noskill:"不存在某技能/奇穴ID",last_skill:"该宏最后一次释放的技能",npclevel:"目标NPC强度等级",nearby_enemy:"自身周围3尺以内敌人数量",skill_notin_cd:"技能调息完成",tbuff:"目标有增减益效果",tbuff_level:"目标有增减益效果层数",tnobuff:"目标不存在某增减益效果",tbufftime:"目标增减益效果持续时间"},logicDialogVisible:!1,logicDialog:"",region:"",cmOptions:(e={tabSize:4,lineNumbers:!0,line:!0,styleActiveLine:!0},Object(c["a"])(e,"lineNumbers",!0),Object(c["a"])(e,"mode","text/x-macro"),Object(c["a"])(e,"extraKeys",{Tab:"autocomplete"}),Object(c["a"])(e,"matchBrackets",!0),Object(c["a"])(e,"hintOptions",{completeSingle:!1}),e),code:""}},computed:{codemirror:function(){return this.$refs.cmEditor.codemirror}},methods:{getIcon:function(e){return h["__imgPath"]+"image/box/"+e+".svg"},clickPlusCondition:function(){this.conditions.push({name:"",relation:"=",value:"",logic:"&",subname:""})},clickMinusCondition:function(e){this.conditions.splice(e,1)},onConditionChange:function(e){var t=this.conditions[e].name,n=this.conditions[e].relation;"skill"!==t&&"noskill"!==t&&"last_skill"!==t||"="!==n&&"≠"!==n&&(this.conditions[e].relation="=")},insertLine:function(){var e="/"+this.castType+" ";if(this.isConditional){for(var t="[",n=0;n<this.conditions.length;++n){var l=this.conditions[n];0!==n&&(t+=l.logic),t+=l.name,this.needsConditionParams.subname.includes(l.name)&&(t=t+":"+l.subname),this.needsConditionParams.relation.includes(l.name)&&(t+=l.relation),this.needsConditionParams.value.includes(l.name)&&(t+=l.value)}t+="]",e=e+t+" "}e=e+this.skill+"\n",this.code+=e.replace(/buff_level/g,"buff")},onCmCodeChange:function(e){},showRealLogic:function(){if(this.conditions<=2)return!1;for(var e="",t=0;t<this.conditions.length;++t){var n=this.conditions[t];t===this.conditions.length-1?e+="&"===n.logic?" & ":" | ":0!==t&&(e+="&"===n.logic?" &（":" |（"),e+=n.name,this.needsConditionParams.subname.includes(n.name)&&(e=e+":"+n.subname),this.needsConditionParams.relation.includes(n.name)&&(e+=n.relation),this.needsConditionParams.value.includes(n.name)&&(e+=n.value)}for(var l=0;l<this.conditions.length-2;++l)e+="）";this.logicDialog=e.replace(/buff_level/g,"buff"),this.logicDialogVisible=!0},getUserId:function(){User.isLogin()&&(this.uid=User.getInfo().uid)}},filters:{},mounted:function(){},components:{codemirror:g["codemirror"],Nav:v["a"]}},k=_,C=(n("5d99"),Object(m["a"])(k,s,r,!1,null,null,null)),y=C.exports;l["default"].config.productionTip=!1,l["default"].use(o.a),l["default"].use(a["a"]),new l["default"]({render:function(e){return e(y)}}).$mount("#app")},"75e5":function(e,t,n){(function(e){var l,i,o,a=n("7037").default;n("ac1f"),n("1276"),n("caad"),n("466d"),n("4de4"),n("d3b7");var s=n("2ef0");s.after;(function(s){"object"==a(t)&&"object"==a(e)?s(n("56b3")):(i=[n("56b3")],l=s,o="function"===typeof l?l.apply(t,i):l,void 0===o||(e.exports=o))})((function(e){"use strict";e.defineMode("macro",(function(e,t){t.jsonld;function n(e){for(var t={},n=e.split(" "),l=0;l<n.length;++l)t[n[l]]=!0;return t}var l=n("/cast /fcast"),i=["&","|"],o=["<",">","<=",">=","=","~","~="],a=["buff","nobuff","bufftime","life","mana","rage","qidian","energy","sun","moon","sun_power","moon_power","skill_energy","skill","noskill","last_skill","npclevel","nearby_enemy","skill_notin_cd","tbuff","tnobuff","tbufftime"];function s(e,t){t.beforeParams;t.beforeParams=!1;var n=t.inCondition;t.inCondition=!1;t.afterOperator;var s=t.nextIsCondition;t.nextIsCondition=!1;var r=e.next();if(console.log("next",r),console.log("nextIsCondition",s),n){if("]"===r)return t.inCondition=!1,!1,t.afterOperator=!1,t.nextIsCondition=!1,"string-2";if(t.inCondition=!0,i.includes(r))return t.nextIsCondition=!0,"string-2";if(":"===r||o.includes(r))return t.afterOperator=!0,t.nextIsCondition=!1,"condition-operator";if(s){t.nextIsCondition=!0,e.match(/[a-z]+_?[a-z]+/);var c=e.current();if(a.includes(c))return"condition-name"}return console.log("this_current",e.current()),"condition-else"}if("["===r||i.includes(r))return console.log("ch",r),t.inCondition=!0,t.nextIsCondition=!0,"string-2";e.eatWhile(/[\w\$_{}\xa1-\uffff]/);var u=e.current();return l&&l.propertyIsEnumerable(u)?(t.beforeParams=!0,"keyword"):a&&a.includes(u)?(t.beforeParams=!0,"condition-name"):null}return{startState:function(){return{tokenize:s,beforeParams:!1,inParams:!1,inCondition:!1,afterOperator:!1,nextIsCondition:!1}},token:function(e,t){return e.eatSpace()?null:t.tokenize(e,t)}}})),e.registerHelper("hint","macro",(function(t){var n=["/cast","/fcast","buff","nobuff","bufftime","life","mana","rage","qidian","energy","sun","moon","sun_power","moon_power","skill_energy","skill","noskill","last_skill","npclevel","nearby_enemy","skill_notin_cd","tbuff","tnobuff","tbufftime"],l=t.getCursor(),i=t.getTokenAt(l),o=i.start,a=l.ch,s=i.string,r=n.filter((function(e){return 0===e.indexOf(s)}));if(r.length)return{list:r,from:e.Pos(l.line,o),to:e.Pos(l.line,a)}})),e.defineMIME("text/x-macro","macro")}))}).call(this,n("62e4")(e))},c5b5:function(e,t,n){}});
//# sourceMappingURL=macroeditor.7504caeb.js.map