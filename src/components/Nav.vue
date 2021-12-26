<template>
    <nav class="m-nav">
        <h5 class="u-title">应用入口</h5>
        <div class="m-app-box">
            <a class="u-app" v-for="item in data" :key="item.slug" :href="'../' + item.slug" :class="{on:isActive(item.slug)}"
                ><i class="u-app-icon"><img :src="getIcon(item.slug)"/></i
                ><span>{{item.abbr}}</span></a
            >
        </div>
    </nav>
</template>

<script>
import {__imgPath} from '@jx3box/jx3box-common/data/jx3box.json'
export default {
    name: "Nav",
    data: function() {
        return {
            data : [
                {
                    slug : 'database',
                    abbr : '数据库',
                },
                {
                    slug : 'icons',
                    abbr : '图标',
                },
                {
                    slug : 'talent',
                    abbr : '奇穴',
                },
                {
                    slug : 'talent2',
                    abbr : '镇派',
                },
                {
                    slug : 'meridians',
                    abbr : '经脉',
                },
                {
                    slug : 'haste',
                    abbr : '急速'
                },
                {
                    slug : 'macroeditor',
                    abbr : '写宏'
                },
                {
                    slug : 'translator',
                    abbr : '繁體'
                },
                {
                    slug : 'servers',
                    abbr : '开服'
                },
                {
                    slug : 'price',
                    abbr : '金价'
                },
                {
                    slug : 'sudoku',
                    abbr : '九宫格'
                },
            ]
        };
    },
    computed: {},
    methods: {
        isActive : function (val){
            return !!location.pathname.split('/').includes(val)
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