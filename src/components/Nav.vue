<template>
    <nav class="m-nav">
        <h5 class="u-title">PVE/PVP</h5>
        <div class="m-app-box">
            <a class="u-app" href="https://www.jx3box.com./jx3-query/" target="_blank"
                ><i class="u-app-icon"><img svg-inline src="../assets/img/logos/db.svg"/></i
                ><span>数据库</span></a
            >
            <a class="u-app" href="/app/icons" :class="{on:isActive('icons')}"
                ><i class="u-app-icon"><img svg-inline src="../assets/img/logos/icons.svg"/></i
                ><span>图标库</span></a
            >
            <a class="u-app" href="/app/talent" :class="{on:isActive('talent')}"
                ><i class="u-app-icon"><img svg-inline src="../assets/img/logos/talent.svg"/></i
                ><span>奇穴模拟</span></a
            >
            <a class="u-app" href="https://v2.jx3box.com/fb/#/skill" target="_blank"
                ><i class="u-app-icon"><img svg-inline src="../assets/img/logos/skull.svg"/></i
                ><span>副本解包</span></a
            >
            <a class="u-app" href="https://www.j3pz.com/" target="_blank"
                ><i class="u-app-icon"><img svg-inline src="../assets/img/logos/j3pz.svg"/></i
                ><span>在线配装</span
                ></a>
            <a class="u-app" href="https://www.j3pz.com/tools/haste/" target="_blank"
                ><i class="u-app-icon"><img svg-inline src="../assets/img/logos/speed.svg"/></i
                ><span>急速阈值</span
                ></a>
            <a class="u-app" href="https://www.j3pz.com/tools/prediction/" target="_blank"
                ><i class="u-app-icon"><img svg-inline src="../assets/img/logos/guishi.svg"/></i
                ><span>瑰石查询</span
                ></a>
            <a class="u-app" 
                href="http://minamistudio.online/jx3simulator/index.html"
                target="_blank"
                ><i class="u-app-icon"><img svg-inline src="../assets/img/logos/minami.svg"/></i
                ><span>DPS模拟</span
                ></a>
            <a class="u-app" href="/app/translator" :class="{on:isActive('translator')}"
                ><i class="u-app-icon"><img svg-inline src="../assets/img/logos/translator.svg"/></i
                ><span>轉換繁體</span></a
            >
        </div>
        <h5 class="u-title">PVX</h5>
        <div class="m-app-box">
            <a class="u-app" href="/app/servers" :class="{on:isActive('servers')}"
                ><i class="u-app-icon"><img svg-inline src="../assets/img/logos/servers.svg"/></i
                ><span>开服监控</span></a
            >
            <a class="u-app" href="/app/price" :class="{on:isActive('price')}"
                ><i class="u-app-icon"><img svg-inline src="../assets/img/price/price.svg"/></i
                ><span>金价走势</span></a
            >
            <a class="u-app" href="https://v2.jx3box.com/house/#/flower" target="_blank"
                ><i class="u-app-icon"><img svg-inline src="../assets/img/logos/flower2.svg"/></i
                ><span>花价查询</span></a
            >
            <a class="u-app" href="https://v2.jx3box.com/house/#/furniture" target="_blank"
                ><i class="u-app-icon"><img svg-inline src="../assets/img/logos/f1.svg"/></i
                ><span>家具图鉴</span></a
            >
            <a class="u-app" href="https://j3cx.com/exam/" target="_blank"
                ><i class="u-app-icon"><img svg-inline src="../assets/img/logos/keju.svg"/></i
                ><span>科举题库</span
                ></a>
            <a class="u-app" href="https://jx3.derzh.com/serendipity/" target="_blank"
                ><i class="u-app-icon"><img svg-inline src="../assets/img/logos/qiyu.svg"/></i
                ><span>奇遇查询</span
                ></a>
            <a class="u-app" href="https://www.jx3box.com/app/facedat-analyzer" target="_blank"
                ><i class="u-app-icon"><img svg-inline src="../assets/img/logos/face.svg"/></i
                ><span>脸型分析</span></a
            >
            <a class="u-app" href="/app/sudoku"  :class="{on:isActive('sudoku')}"
                ><i class="u-app-icon"><img svg-inline src="../assets/img/logos/sudoku.svg"/></i
                ><span>九宫格</span></a
            >
        </div>
    </nav>
</template>

<script>
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
        }
    },
    mounted: function() {},
};
</script>

<style lang="less">
    @import '../assets/css/components/nav.less';
</style>