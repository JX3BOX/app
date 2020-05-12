<template>
    <nav class="m-nav">
        <h5 class="u-title">站内应用</h5>
        <div class="m-nav-group">
            <!-- <a href="/app/database" :class="{on:isActive('database')}"
                ><i><img svg-inline src="../assets/img/logos/db.svg"/></i
                ><span>剑三数据库</span></a
            > -->
            <!-- <a href="/app/talent" :class="{on:isActive('talent')}"
                ><i><img svg-inline src="../assets/img/logos/talent.svg"/></i
                ><span>奇穴模拟器</span></a
            > -->
            <!-- <a href="/app/icons" :class="{on:isActive('icons')}"
                ><i><img svg-inline src="../assets/img/logos/icons.svg"/></i
                ><span>图标大全</span></a
            > -->
            <!-- <a href="/app/flog" :class="{on:isActive('flog')}"
                ><i><img svg-inline src="../assets/img/logos/flog.svg"/></i
                ><span>BOSS日志分析</span></a
            > -->
            <!-- <a href="/app/face" :class="{on:isActive('face')}"
                ><i><img svg-inline src="../assets/img/logos/face.svg"/></i
                ><span>脸型数据分析</span></a
            > -->
            <a href="/app/servers" :class="{on:isActive('servers')}"
                ><i><img svg-inline src="../assets/img/logos/servers.svg"/></i
                ><span>开服监控</span></a
            >
            <!-- <a href="/app/price" :class="{on:isActive('price')}"
                ><i><img svg-inline src="../assets/img/logos/price.svg"/></i
                ><span>金价走势</span></a
            > -->
        </div>
        <h5 class="u-title">站外应用</h5>
        <div class="m-nav-group">
            <a href="https://www.j3pz.com/" target="_blank"
                ><i><img svg-inline src="../assets/img/logos/j3pz.svg"/></i
                ><span>在线配装</span
                ><img
                    class="u-blank"
                    svg-inline
                    src="../assets/img/logos/blank.svg"
            /></a>
            <a href="https://www.j3pz.com/tools/haste/" target="_blank"
                ><i><img svg-inline src="../assets/img/logos/speed.svg"/></i
                ><span>急速阈值</span
                ><img
                    class="u-blank"
                    svg-inline
                    src="../assets/img/logos/blank.svg"
            /></a>
            <a href="https://j3cx.com/exam/" target="_blank"
                ><i><img svg-inline src="../assets/img/logos/keju.svg"/></i
                ><span>科举题库</span
                ><img
                    class="u-blank"
                    svg-inline
                    src="../assets/img/logos/blank.svg"
            /></a>
            <a href="https://jx3.derzh.com/serendipity/" target="_blank"
                ><i><img svg-inline src="../assets/img/logos/qiyu.svg"/></i
                ><span>奇遇查询</span
                ><img
                    class="u-blank"
                    svg-inline
                    src="../assets/img/logos/blank.svg"
            /></a>
            <a href="https://www.j3pz.com/tools/prediction/" target="_blank"
                ><i><img svg-inline src="../assets/img/logos/guishi.svg"/></i
                ><span>瑰石查询</span
                ><img
                    class="u-blank"
                    svg-inline
                    src="../assets/img/logos/blank.svg"
            /></a>
            <a
                href="http://minamistudio.online/jx3simulator/index.html"
                target="_blank"
                ><i><img svg-inline src="../assets/img/logos/minami.svg"/></i
                ><span>DPS模拟</span
                ><img
                    class="u-blank"
                    svg-inline
                    src="../assets/img/logos/blank.svg"
            /></a>
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
            return location.href.indexOf(val) > 0
        }
    },
    mounted: function() {},
};
</script>

<style lang="less">
    @import '../assets/css/components/nav.less';
</style>