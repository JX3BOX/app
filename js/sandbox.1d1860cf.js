(function(t){function a(a){for(var e,o,s=a[0],r=a[1],l=a[2],c=0,g=[];c<s.length;c++)o=s[c],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&g.push(i[o][0]),i[o]=0;for(e in r)Object.prototype.hasOwnProperty.call(r,e)&&(t[e]=r[e]);m&&m(a);while(g.length)g.shift()();return p.push.apply(p,l||[]),n()}function n(){for(var t,a=0;a<p.length;a++){for(var n=p[a],e=!0,s=1;s<n.length;s++){var r=n[s];0!==i[r]&&(e=!1)}e&&(p.splice(a--,1),t=o(o.s=n[0]))}return t}var e={},i={sandbox:0},p=[];function o(a){if(e[a])return e[a].exports;var n=e[a]={i:a,l:!1,exports:{}};return t[a].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=e,o.d=function(t,a,n){o.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,a){if(1&a&&(t=o(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var e in t)o.d(n,e,function(a){return t[a]}.bind(null,e));return n},o.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(a,"a",a),a},o.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},o.p="https://console.cnyixun.com/static/app/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],r=s.push.bind(s);s.push=a,s=s.slice();for(var l=0;l<s.length;l++)a(s[l]);var m=r;p.push([15,"chunk-vendors","chunk-common"]),n()})({"0167":function(t){t.exports=JSON.parse('{"list":[{"id":9,"name":"洛道","name_pinyin":"LuoDao"},{"id":13,"name":"金水镇","name_pinyin":"JinShuiZhen"},{"id":21,"name":"巴陵县","name_pinyin":"BaLingXian"},{"id":22,"name":"南屏山","name_pinyin":"NanPingShan"},{"id":23,"name":"龙门荒漠","name_pinyin":"LongMenHuangMo"},{"id":30,"name":"昆仑","name_pinyin":"KunLun"},{"id":35,"name":"瞿塘峡","name_pinyin":"QuTangXia"},{"id":100,"name":"白龙口","name_pinyin":"BaiLongKou"},{"id":101,"name":"无量山","name_pinyin":"WuLiangShan"},{"id":103,"name":"融天岭","name_pinyin":"RongTianLing"},{"id":104,"name":"黑龙沼","name_pinyin":"HeiLongZhao"},{"id":105,"name":"苍山洱海","name_pinyin":"CangShanErHai"},{"id":139,"name":"枫华谷·战乱","name_pinyin":"FengHuaGuZhanLuan"},{"id":153,"name":"马嵬驿","name_pinyin":"MaWeiYi"}]}')},15:function(t,a,n){t.exports=n("8684")},8684:function(t,a,n){"use strict";n.r(a);n("e260"),n("e6cf"),n("cca6"),n("a79d");var e=n("2b0e"),i=n("5c96"),p=n.n(i),o=n("6a69"),s=(n("6b30"),n("c5b4"),n("8c4f")),r=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{attrs:{id:"app"}},[n("Header"),n("Breadcrumb",{attrs:{name:"阵营沙盘",slug:"sandbox",root:"/app/sandbox",feedbackEnable:!0,crumbEnable:!0}},[n("img",{attrs:{slot:"logo","svg-inline":"",src:t.getIcon("sandbox")},slot:"logo"})]),n("LeftSidebar",{attrs:{open:!1}},[n("Nav")],1),n("Main",{attrs:{withoutRight:!0,withoutLeft:!0}},[n("div",{staticClass:"m-sandbox"},[n("h1",{staticClass:"m-sandbox-title"},[t._v("阵营沙盘")]),n("el-tabs",{attrs:{type:"card"},on:{"tab-click":t.changeServers},model:{value:t.activeName,callback:function(a){t.activeName=a},expression:"activeName"}},t._l(t.servers,(function(t){return n("el-tab-pane",{key:t.id,attrs:{label:t.server,name:t.server}})})),1),n("div",{staticClass:"m-sandbox-change"},[n("div",{staticClass:"m-alert el-alert el-alert--info is-light"},[n("span",[n("i",{staticClass:"el-icon-star-on"}),t._v("测试版本欢迎反馈 "),n("i",{staticClass:"el-icon-star-on"}),t._v("招募各个区服维护沙盘数据的小伙伴 ")]),n("span",[t._v("问题反馈&区服维护申请：QQ1416956452")])]),n("div",{staticClass:"m-change"},[n("div",{staticClass:"m-item"},[n("div",{staticClass:"m-title"},[t._v("选择阵营：")]),n("el-radio-group",{on:{change:t.changeCamp},model:{value:t.camp,callback:function(a){t.camp=a},expression:"camp"}},[n("el-radio-button",{attrs:{label:"恶人谷"}}),n("el-radio-button",{attrs:{label:"浩气盟"}})],1)],1),n("div",{staticClass:"m-item"},[n("div",{staticClass:"m-title"},[t._v("查看进攻路线：")]),n("el-switch",{model:{value:t.route,callback:function(a){t.route=a},expression:"route"}})],1),n("div",{staticClass:"m-item"},[n("span",{staticClass:"m-title"},[t._v("维护人员：")]),n("span",{staticClass:"u-name"},[t._v(t._s(this.maintain))])])])]),n("div",{staticClass:"m-sandbox-box",style:{background:"url("+t.imgbg+")"}},[n("div",{staticClass:"m-line",style:{background:"url("+t.imgline+")"}}),n("div",{staticClass:"m-box"},[n("div",{staticClass:"m-box-img"},[n("span",{staticClass:"u-img",style:t._f("placeImg")("eren")},[n("img",{attrs:{src:t._f("eImgPath")(27)}})]),n("span",{staticClass:"u-img",style:t._f("placeImg")("haoqi")},[n("img",{attrs:{src:t._f("hImgPath")(25)}})]),t._l(t.maplist,(function(a){return n("span",{key:a.id,staticClass:"u-img",style:t._f("placeImg")(a.name_pinyin)},[n("img",{attrs:{src:t._f("campmap")(a.camp,a.id)}})])}))],2),n("div",{staticClass:"m-box-arr"},t._l(t.attacks,(function(a){return n("span",{key:a.name,class:a.name_pinyin},[a.attacks.length>0?t._l(a.attacks,(function(e){return n("img",{key:e.id,staticClass:"u-img",class:e.name_pinyin,style:t._f("placeAttacks")(a.name_pinyin,e.name_pinyin),attrs:{src:t.camparr}})})):t._e(),t._l(a.castles,(function(a){return n("i",{key:a.name,class:a.name_pinyin},[a.attacks.length>0?t._l(a.attacks,(function(e){return n("img",{key:e.id,staticClass:"u-img",class:e.name_pinyin,style:t._f("placeArr")(a.name_pinyin,e.name_pinyin),attrs:{src:t.camparr}})})):t._e()],2)}))],2)})),0),n("div",{staticClass:"m-box-camp"},t._l(t.place.list,(function(a){return n("span",{key:a.id,staticClass:"u-img",style:t._f("placeCamp")(a.name_pinyin)},[n("img",{attrs:{src:t._f("campimg")(a.name_pinyin)}})])})),0),n("div",{staticClass:"m-box-name"},[n("div",{staticClass:"u-img eren",style:t._f("placeName")("eren")},[n("img",{attrs:{src:t.imgPath+"/image/camp/erengu.png"}}),n("span",[t._v("恶人谷")])]),n("div",{staticClass:"u-img haoqi",style:t._f("placeName")("haoqi")},[n("img",{attrs:{src:t.imgPath+"/image/camp/haoqimeng.png"}}),n("span",[t._v("浩气盟")])]),t._l(t.maplist,(function(a,e){return n("el-popover",{key:e,attrs:{placement:"top-start",width:"240",trigger:"hover"}},[n("div",{staticClass:"u-box"},[n("img",{attrs:{src:t._f("campimg")(a.name_pinyin)}}),n("div",{staticClass:"u-txt"},[n("div",{staticClass:"u-line"},[n("span",{staticClass:"u-camp"},[t._v(t._s(a.name))])]),n("div",{staticClass:"u-line"},[n("span",[t._v("占领势力：")]),n("span",{class:a.camp},[t._v("【"+t._s(t._f("campname")(a.camp))+"】")])]),n("div",{staticClass:"u-line u-gang"},[n("span",[t._v("占领帮会：")]),n("span",{class:a.camp},[t._v("- "+t._s(a.gang)+" -")])])]),n("div",{staticClass:"u-log",on:{click:function(n){return t.showlog(a.id,a.name,a.name_pinyin,a.description,a.link)}}},[n("i",{staticClass:"el-icon-date"})])]),n("div",{staticClass:"u-img",class:a.name_pinyin,style:t._f("placeName")(a.name_pinyin),attrs:{slot:"reference"},on:{click:function(n){return t.showlog(a.id,a.name,a.name_pinyin,a.description,a.link)}},slot:"reference"},[n("img",{attrs:{src:t._f("iconImg")(t._f("camptype")(a.camp,a.id),a.id)}}),n("span",[t._v(t._s(a.name))])])])})),t.show?n("div",{staticClass:"m-bgmark",on:{click:t.offshow}}):t._e()],2)]),t.show?n("div",{staticClass:"m-box-txt"},[n("div",{staticClass:"m-box-info"},[n("img",{staticClass:"u-img",attrs:{src:t._f("campimg")(t.camplist.img)}}),n("div",{staticClass:"u-box"},[n("span",{staticClass:"u-title"},[t._v(t._s(t.camplist.name))]),n("span",{staticClass:"u-desc"},[t._v(t._s(t._f("campdesc")(t.camplist.desc)))]),n("a",{staticClass:"u-baike",attrs:{href:t.camplist.link,target:"_blank"}},[t._v("查看百科 »")])])]),t.camplist.list.length>0?n("ul",{staticClass:"u-cont",staticStyle:{overflow:"auto"}},t._l(t.camplist.list,(function(a,e){return n("li",{key:e},[n("div",{staticClass:"u-line"},[n("span",{staticClass:"u-time"},[t._v(t._s(a.date))])]),n("div",{staticClass:"u-line"},[n("span",[t._v("占领势力：")]),n("span",{class:a.camp},[t._v("["+t._s(t._f("campname")(a.camp))+"]")])]),n("div",{staticClass:"u-line"},[n("span",[t._v("占领帮会：")]),n("span",{class:a.camp},[t._v(t._s(a.gang))])])])})),0):n("div",{staticClass:"u-cont"},[n("div",{staticClass:"u-nonedata"},[t._v("暂无数据")])])]):t._e()]),t.show?n("div",{staticClass:"m-bgmark",on:{click:t.offshow}}):t._e()],1),n("Footer")],1)],1)},l=[],m=(n("b0c0"),n("fb6a"),n("9911f"),n("ac1f"),n("1276"),n("a15b"),n("216c")),c=n("0167");function g(){return{eren:{left:"72px",top:"10px"},haoqi:{left:"683px",top:"523px"},QiuYuBao:{left:"623px",top:"318px"},HongLianGang:{left:"607px",top:"259px"},JinMenGuan:{left:"637px",top:"123px"},QingYunWu:{left:"733px",top:"144px"},PanLongWu:{left:"502px",top:"476px"},ZhuLuPing:{left:"573px",top:"391px"},WuWangCheng:{left:"562px",top:"430px"},LongMenZhen:{left:"395px",top:"117px"},FeiShaGuan:{left:"362px",top:"136px"},LinFengBao:{left:"149px",top:"65px"},BuKongGuan:{left:"392px",top:"368px"},JiLiuWu:{left:"432px",top:"431px"},WoLongPo:{left:"226px",top:"476px"},RiYueYa:{left:"257px",top:"356px"},ShuangGeBao:{left:"50px",top:"602px"},LanCangCheng:{left:"123px",top:"626px"},ShenChiLing:{left:"109px",top:"206px"},LieRiGang:{left:"12px",top:"271px"},JingQiuGu:{left:"11px",top:"386px"},FengMingBao:{left:"23px",top:"494px"},DaLiShanCheng:{left:"304px",top:"606px"},QianYanGuan:{left:"305px",top:"581px"},DanXingLin:{left:"502px",top:"152px"},FengHuZhai:{left:"496px",top:"203px"},ShiWaiPo:{left:"234px",top:"233px"},FuFengJun:{left:"295px",top:"187px"}}}function u(){return{eren:{left:"149px",top:"49px"},haoqi:{left:"762px",top:"622px"},QiuYuBao:{left:"654px",top:"370px"},HongLianGang:{left:"678px",top:"284px"},JinMenGuan:{left:"664px",top:"212px"},QingYunWu:{left:"748px",top:"178px"},PanLongWu:{left:"558px",top:"536px"},ZhuLuPing:{left:"602px",top:"434px"},WuWangCheng:{left:"686px",top:"560px"},LongMenZhen:{left:"430px",top:"162px"},FeiShaGuan:{left:"350px",top:"142px"},LinFengBao:{left:"264px",top:"132px"},BuKongGuan:{left:"460px",top:"392px"},JiLiuWu:{left:"438px",top:"466px"},WoLongPo:{left:"300px",top:"524px"},RiYueYa:{left:"312px",top:"428px"},ShuangGeBao:{left:"82px",top:"640px"},LanCangCheng:{left:"150px",top:"718px"},ShenChiLing:{left:"109px",top:"234px"},LieRiGang:{left:"68px",top:"348px"},JingQiuGu:{left:"112px",top:"444px"},FengMingBao:{left:"42px",top:"522px"},DaLiShanCheng:{left:"316px",top:"622px"},QianYanGuan:{left:"370px",top:"734px"},DanXingLin:{left:"496px",top:"172px"},FengHuZhai:{left:"558px",top:"240px"},ShiWaiPo:{left:"280px",top:"308px"},FuFengJun:{left:"306px",top:"222px"}}}function f(){return{LuoDao:{left:"724px",top:"326px"},JinShuiZhen:{left:"730px",top:"150px"},BaLingXian:{left:"644px",top:"486px"},NanPingShan:{left:"670px",top:"560px"},LongMenHuangMo:{left:"428px",top:"124px"},KunLun:{left:"252px",top:"142px"},QuTangXia:{left:"522px",top:"438px"},BaiLongKou:{left:"380px",top:"476px"},WuLiangShan:{left:"216px",top:"636px"},RongTianLing:{left:"170px",top:"290px"},HeiLongZhao:{left:"80px",top:"444px"},CangShanErHai:{left:"466px",top:"654px"},FengHuaGuZhanLuan:{left:"526px",top:"204px"},MaWeiYi:{left:"278px",top:"238px"}}}function x(){return{KunLun:{RongTianLing:{left:"192px",top:"212px",transform:"rotate(200deg)"},MaWeiYi:{left:"298px",top:"204px",transform:"rotate(170deg)"},LongMenHuangMo:{left:"178px",top:"110px",transform:"rotate(110deg)"}},MaWeiYi:{KunLun:{left:"300px",top:"184px",transform:"rotate(320deg)"},RongTianLing:{left:"218px",top:"280px",transform:"rotate(250deg)"},LongMenHuangMo:{left:"380px",top:"182px",transform:"rotate(50deg)"},BaiLongKou:{left:"312px",top:"346px",transform:"rotate(180deg)"}},LongMenHuangMo:{KunLun:{left:"378px",top:"108px",transform:"rotate(280deg)"},MaWeiYi:{left:"356px",top:"183px",transform:"rotate(220deg)"},FengHuaGuZhanLuan:{left:"504px",top:"144px",transform:"rotate(120deg)"}},FengHuaGuZhanLuan:{LongMenHuangMo:{left:"488px",top:"132px",transform:"rotate(300deg)"},JinShuiZhen:{left:"638px",top:"140px",transform:"rotate(90deg)"}},JinShuiZhen:{LuoDao:{left:"704px",top:"246px",transform:"rotate(200deg)"},FengHuaGuZhanLuan:{left:"618px",top:"142px",transform:"rotate(270deg)"}},LuoDao:{JinShuiZhen:{left:"666px",top:"228px",transform:"rotate(7deg)"},BaLingXian:{left:"644px",top:"382px",transform:"rotate(210deg)"},NanPingShan:{left:"726px",top:"414px",transform:"rotate(180deg)"}},BaLingXian:{LuoDao:{left:"642px",top:"368px",transform:"rotate(30deg)"},NanPingShan:{left:"674px",top:"512px",transform:"rotate(120deg)"},CangShanErHai:{left:"520px",top:"564px",transform:"rotate(200deg)"},QuTangXia:{left:"556px",top:"454px",transform:"rotate(290deg)"}},QuTangXia:{BaLingXian:{left:"568px",top:"466px",transform:"rotate(120deg)"},BaiLongKou:{left:"400px",top:"434px",transform:"rotate(270deg)"}},CangShanErHai:{BaLingXian:{left:"536px",top:"550px",transform:"rotate(40deg)"},NanPingShan:{left:"596px",top:"616px",transform:"rotate(70deg)"},WuLiangShan:{left:"282px",top:"652px",transform:"rotate(270deg)"}},WuLiangShan:{HeiLongZhao:{left:"114px",top:"598px",transform:"rotate(0deg)"},BaiLongKou:{left:"230px",top:"588px",transform:"rotate(40deg)"},CangShanErHai:{left:"300px",top:"652px",transform:"rotate(100deg)"}},BaiLongKou:{WuLiangShan:{left:"240px",top:"610px",transform:"rotate(200deg)"},QuTangXia:{left:"416px",top:"438px",transform:"rotate(70deg)"},MaWeiYi:{left:"316px",top:"336px",transform:"rotate(340deg)"}},HeiLongZhao:{WuLiangShan:{left:"114px",top:"600px",transform:"rotate(180deg)"},RongTianLing:{left:"162px",top:"390px",transform:"rotate(10deg)"}},RongTianLing:{KunLun:{left:"200px",top:"208px",transform:"rotate(30deg)"},MaWeiYi:{left:"244px",top:"236px",transform:"rotate(90deg)"},HeiLongZhao:{left:"98px",top:"384px",transform:"rotate(190deg)"}},NanPingShan:{BaLingXian:{left:"644px",top:"536px",transform:"rotate(300deg)"},LuoDao:{left:"730px",top:"402px",transform:"rotate(0deg)"},CangShanErHai:{left:"576px",top:"616px",transform:"rotate(240deg)"}}}}function h(){return{QiuYuBao:{HongLianGang:{left:"678px",top:"318px",transform:"rotate(10deg)"}},HongLianGang:{QiuYuBao:{left:"654px",top:"332px",transform:"rotate(180deg)"}},JinMenGuan:{QingYunWu:{left:"758px",top:"202px",transform:"rotate(70deg)"}},QingYunWu:{JinMenGuan:{left:"750px",top:"202px",transform:"rotate(250deg)"}},PanLongWu:{ZhuLuPing:{left:"604px",top:"470px",transform:"rotate(30deg)"}},ZhuLuPing:{PanLongWu:{left:"600px",top:"490px",transform:"rotate(210deg)"}},LongMenZhen:{FeiShaGuan:{left:"428px",top:"164px",transform:"rotate(240deg)"}},FeiShaGuan:{LongMenZhen:{left:"440px",top:"142px",transform:"rotate(90deg)"}},BuKongGuan:{JiLiuWu:{left:"438px",top:"482px",transform:"rotate(120deg)"}},JiLiuWu:{BuKongGuan:{left:"464px",top:"426px",transform:"rotate(320deg)"}},WoLongPo:{RiYueYa:{left:"312px",top:"466px",transform:"rotate(40deg)"}},RiYueYa:{WoLongPo:{left:"312px",top:"480px",transform:"rotate(200deg)"}},ShuangGeBao:{LanCangCheng:{left:"150px",top:"688px",transform:"rotate(100deg)"}},LanCangCheng:{ShuangGeBao:{left:"136px",top:"688px",transform:"rotate(290deg)"}},ShenChiLing:{LieRiGang:{left:"126px",top:"268px",transform:"rotate(210deg)"}},LieRiGang:{ShenChiLing:{left:"126px",top:"266px",transform:"rotate(30deg)"}},JingQiuGu:{FengMingBao:{left:"124px",top:"476px",transform:"rotate(30deg)"}},FengMingBao:{JingQiuGu:{left:"124px",top:"492px",transform:"rotate(210deg)"}},DaLiShanCheng:{QianYanGuan:{left:"348px",top:"670px",transform:"rotate(180deg)"}},QianYanGuan:{DaLiShanCheng:{left:"348px",top:"662px",transform:"rotate(0deg)"}},DanXingLin:{FengHuZhai:{left:"556px",top:"214px",transform:"rotate(120deg)"}},FengHuZhai:{DanXingLin:{left:"558px",top:"218px",transform:"rotate(320deg)"}},ShiWaiPo:{FuFengJun:{left:"338px",top:"258px",transform:"rotate(30deg)"}},FuFengJun:{ShiWaiPo:{left:"322px",top:"264px",transform:"rotate(210deg)"}}}}var d=n("65c2"),_=(n("99af"),n("41cb"));function v(){return Object(_["c"])().get("/api/sandmaps").then((function(t){return t.data}))}function L(t){return Object(_["c"])().get("/api/sandmap",{params:t}).then((function(t){return t.data}))}function b(t){return Object(_["c"])().get("/api/sandmap/detail",{params:t}).then((function(t){return t.data.data}))}function C(t,a){return Object(_["c"])().get("/api/sandmap/".concat(t,"/castle/").concat(a,"/logs")).then((function(t){return t.data}))}var y={name:"Sandbox",props:[],data:function(){return{servers:[],camp:"恶人谷",campId:1,campName:"",maintain:"",route:!1,time:"",place:c,show:!1,activeName:"斗转星移",maplist:[],maplists:[],imgPath:d["__imgPath"],camplist:{namme:"",img:"",desc:"",link:"",list:[]},elist:[],hlist:[],attack:{eren:[],haoqi:[]}}},computed:{imgbg:function(){return d["__imgPath"]+"image/camp/backgroud.png"},imgline:function(){return d["__imgPath"]+"image/camp/line.png"},camps:function(){return"恶人谷"==this.camp?"eren":"haoqi"},camparr:function(){return"恶人谷"==this.camp?d["__imgPath"]+"image/camp/cearr.png":d["__imgPath"]+"image/camp/charr.png"},attacks:function(){return"恶人谷"==this.camp?this.attack.eren:this.attack.haoqi}},methods:{getIcon:function(t){return d["__imgPath"]+"image/box/"+t+".svg"},getcamp:function(){var t=this,a=this.$route.query,n={sandmap_id:"",camp:""};a.id&&(this.campId=a.id,this.activeName=a.name),this.getservername(this.activeName),n.sandmap_id=this.campId,n.camp=this.camps,this.maplist=[],L(n).then((function(a){t.maplist=a.data.sandmap.castles,t.maplists.push({id:t.campId,camp:t.camps,list:a.data.sandmap.castles})}))},getcamps:function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.maplists,a=!1,n=0;n<t.length;n++)t[n].id==this.campId&&t[n].camp==this.camps&&(a=!0);if(1==a){this.maplist=[];for(var e=0;e<t.length;e++)t[e].id==this.campId&&(this.maplist=t[e].list)}else this.getcamp()},getcampdetail:function(){var t=this,a={sandmap_id:this.campId,camp:this.camps};b(a).then((function(a){"eren"==t.camps?(t.elist.push({id:a.sandmap.id,list:a.sandmap.maps}),t.attack.eren=a.sandmap.maps):(t.hattack=[],t.hlist.push({id:a.sandmap.id,list:a.sandmap.maps}),t.attack.haoqi=a.sandmap.maps)}))},getdetaillist:function(t){for(var a=!1,n=0;n<t.length;n++)t[n].id==this.campId&&(a=!0);if(1==a)for(var e=0;e<t.length;e++)t[e].id==this.campId&&("eren"==this.camps?this.attack.eren=t[e].list:this.attack.haoqi=t[e].list);else this.getcampdetail()},changeCamp:function(t){this.camp=t,1==this.route&&("eren"==this.camps?this.getdetaillist(this.elist):this.getdetaillist(this.hlist))},changeServers:function(t,a){var n=a.target.getAttribute("id").slice(4);this.getservername(n),this.$router.push({name:"index",query:{id:this.campId,name:this.campName}}),this.getcamps(),this.attack={eren:[],haoqi:[]},1==this.route&&("eren"==this.camps?this.getdetaillist(this.elist):this.getdetaillist(this.hlist))},getservername:function(t){for(var a=0;a<this.servers.length;a++)this.servers[a].server==t&&(this.campId=this.servers[a].id,this.campName=this.servers[a].server,this.maintain=this.servers[a].maintainer_name)},showlog:function(t,a,n,e,i){var p=this;this.show=!0,this.camplist.name=a,this.camplist.img=n,this.camplist.desc=e,this.camplist.link=i,C(this.campId,t).then((function(t){p.camplist.list=t.data.data}))},offshow:function(){this.show=!1}},mounted:function(){var t=this;v().then((function(a){for(var n=0;n<a.data.sandmaps.length;n++)a.data.sandmaps[n].id=a.data.sandmaps[n].id+"",t.campName=a.data.sandmaps[0].server,t.maintain=a.data.sandmaps[0].maintainer_name;t.servers=a.data.sandmaps,t.route=!1,t.camp="恶人谷",t.maplist=[],t.getcamp()}))},filters:{hImgPath:function(t){return d["__imgPath"]+"image/camp/h"+t+".png"},eImgPath:function(t){return d["__imgPath"]+"image/camp/e"+t+".png"},camptype:function(t,a){return 301==a?"haoqi"==t?d["__imgPath"]+"image/camp/h_1.png":d["__imgPath"]+"image/camp/e_1.png":221==a?"eren"==t?d["__imgPath"]+"image/camp/e_1.png":d["__imgPath"]+"image/camp/h_1.png":"eren"==t?d["__imgPath"]+"image/camp/e01.png":"haoqi"==t?d["__imgPath"]+"image/camp/h01.png":d["__imgPath"]+"image/camp/z01.png"},campmap:function(t,a){return"neutral"!==t?"eren"==t?d["__imgPath"]+"image/camp/e"+a+".png":d["__imgPath"]+"image/camp/h"+a+".png":301==a?d["__imgPath"]+"image/camp/e"+a+".png":221==a?d["__imgPath"]+"image/camp/h"+a+".png":d["__imgPath"]+"image/camp/tm.png"},iconImg:function(t,a){var n=t.split("1");return 301==a?n.join("lingfengbao"):221==a?n.join("wuwangcheng"):91==a||352==a||1532==a||1391==a||132==a||1052==a||232==a||1011==a||1032==a?n.join("1"):231==a||1031==a||92==a||1002==a?n.join("2"):1392==a||212==a||1012==a||1001==a?n.join("3"):131==a||1042==a||1051==a||351==a?n.join("4"):n.join("5")},campimg:function(t){return d["__imgPath"]+"image/camp/"+t+".png"},campname:function(t){return"eren"==t?"恶人谷":"haoqi"==t?"浩气盟":"中立"},campdesc:function(t){return t||"暂无介绍"},placeImg:function(t){return g()[t]},placeName:function(t){return u()[t]},placeCamp:function(t){return f()[t]},placeAttacks:function(t,a){return x()[t][a]},placeArr:function(t,a){return h()[t][a]}},watch:{route:{handler:function(t){1==t?"eren"==this.camps?this.getdetaillist(this.elist):this.getdetaillist(this.hlist):this.attacks=[]}}},components:{Nav:m["a"]}},P=y,S=(n("deb7"),n("2877")),k=Object(S["a"])(P,r,l,!1,null,"4e2b52d4",null),G=k.exports;e["default"].use(s["a"]);var W=new s["a"]({routes:[{path:"/",name:"index",component:G}]});e["default"].config.productionTip=!1,e["default"].use(p.a),e["default"].use(o["a"]),new e["default"]({router:W,render:function(t){return t(G)}}).$mount("#app")},db7d:function(t,a,n){},deb7:function(t,a,n){"use strict";n("db7d")}});
//# sourceMappingURL=sandbox.1d1860cf.js.map