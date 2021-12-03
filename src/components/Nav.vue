<template>
    <nav class="m-nav">
        <h5 class="u-title">PVE/PVP</h5>
        <div class="m-app-box">
            <a class="u-app" href="/app/database" :class="{on:isActive('database')}"
                ><i class="u-app-icon"><img svg-inline :src="getIcon('database')"/></i
                ><span>数据库</span></a
            >
            <a class="u-app" href="/app/icons" :class="{on:isActive('icons')}"
                ><i class="u-app-icon"><img svg-inline :src="getIcon('icons')"/></i
                ><span>图标库</span></a
            >
            <a class="u-app" href="/pz" target="_blank"
                ><i class="u-app-icon"><img svg-inline :src="getIcon('pz')"/></i
                ><span>在线配装</span
                ></a>

            <a class="u-app" href="/app/talent" :class="{on:isActive('talent')}"
                ><i class="u-app-icon"><img svg-inline :src="getIcon('talent')"/></i
                ><span>奇穴模拟</span></a
            >
            <a class="u-app" href="/app/talent2" :class="{on:isActive('talent')}"
                ><i class="u-app-icon"><img svg-inline :src="getIcon('talent2')"/></i
                ><span>镇派模拟</span></a
            >
            <a class="u-app" href="/app/meridians" :class="{on:isActive('meridians')}"
                ><i class="u-app-icon"><img svg-inline :src="getIcon('meridians')"/></i
                ><span>经脉模拟</span></a
            >

            <a class="u-app" href="/team" target="_blank"
                ><i class="u-app-icon"><img svg-inline :src="getIcon('team')"/></i
                ><span>团队管理</span></a
            >
            <a class="u-app" href="/dbm" target="_blank"
                ><i class="u-app-icon"><img svg-inline :src="getIcon('dbm')"/></i
                ><span>数据构建</span></a
            >
            <a class="u-app" href="/battle" target="_blank"
                ><i class="u-app-icon"><img svg-inline :src="getIcon('battle')"/></i
                ><span>战斗分析</span></a
            >
            
            <a class="u-app" href="/fb/#/skill" target="_blank"
                ><i class="u-app-icon"><img svg-inline :src="getIcon('fbdata')"/></i
                ><span>副本数据</span></a
            >
            <a class="u-app" href="/fb/#/drop" target="_blank"
                ><i class="u-app-icon"><img svg-inline :src="getIcon('fbdrop')"/></i
                ><span>副本掉落</span></a
            >
            <a class="u-app" href="/fb/#/gem" target="_blank"
                ><i class="u-app-icon"><img svg-inline :src="getIcon('fbgem')"/></i
                ><span>瑰石查询</span></a
            >

            <a class="u-app" href="/app/sandbox" :class="{on:isActive('sandbox')}"
                ><i class="u-app-icon"><img svg-inline :src="getIcon('sandbox')"/></i
                ><span>阵营沙盘</span></a
            >

            <a class="u-app" href="/app/haste" target="_blank"
                ><i class="u-app-icon"><img svg-inline :src="getIcon('haste')"/></i
                ><span>急速阈值</span
                ></a>
            <a class="u-app" href="/app/macroeditor" :class="{on:isActive('macroeditor')}"
                ><i class="u-app-icon"><img svg-inline :src="getIcon('macroeditor')"/></i
                ><span>宏编辑器</span></a
            >
            <a class="u-app" href="/app/translator" :class="{on:isActive('translator')}"
                ><i class="u-app-icon"><img svg-inline :src="getIcon('translator')"/></i
                ><span>轉換繁體</span></a
            >
        </div>
        <h5 class="u-title">PVX</h5>
        <div class="m-app-box">
            <a class="u-app" href="/app/servers" :class="{on:isActive('servers')}"
                ><i class="u-app-icon"><img svg-inline :src="getIcon('servers')"/></i
                ><span>开服监控</span></a
            >
            <a class="u-app" href="/app/price" :class="{on:isActive('price')}"
                ><i class="u-app-icon"><img svg-inline :src="getIcon('price')"/></i
                ><span>金价走势</span></a
            >
            <a class="u-app" href="/app/facedata" :class="{on:isActive('facedata')}"
                ><i class="u-app-icon"><img svg-inline :src="getIcon('facedata')"/></i
                ><span>妆容解析</span></a
            >

            <a class="u-app" href="https://j3cx.com/serendipity" target="_blank"
                ><i class="u-app-icon"><img svg-inline :src="getIcon('qiyu')"/></i
                ><span>奇遇查询</span
                ></a>
            <a class="u-app" href="https://j3cx.com/exam/" target="_blank"
                ><i class="u-app-icon"><img svg-inline :src="getIcon('keju')"/></i
                ><span>科举题库</span
                ></a>
        </div>
    </nav>
</template>

<script>
import {__imgPath} from '@jx3box/jx3box-common/data/jx3box.json'
export default {
    name: "Nav",
    data: function() {
        return {
        };
    },
    computed: {},
    methods: {
        isActive : function (val){
            return !!location.pathname.includes(val)
        },
        getIcon: function(key) {
            return __imgPath + "image/box/" + key + ".svg";
        },
    },
    mounted: function() {},
};
</script>

<style lang="less">
    @import '../assets/css/components/nav.less';
</style>