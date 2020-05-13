<template>
    <div id="app" class="p-app-index">
        <Header></Header>
        <Breadcrumb name="应用中心" slug="app" root="/app">
            <img
                class="u-app-index"
                slot="logo"
                svg-inline
                src="./assets/img/app.svg"
            />
        </Breadcrumb>
        <LeftSidebar>
            <Nav />
        </LeftSidebar>
        <Main :withoutRight="true" class="m-app-index">
            <ul>
                <a href="/app/database"
                    ><i class="u-icon"
                        ><img svg-inline src="./assets/img/logos/db.svg"/></i
                    ><span class="u-name">剑三数据库</span
                    ><span class="u-desc">助力开荒机制全摸透</span
                    ><span class="u-features">
                        <span>✔️️ 技能/Buff/装备查询</span>
                        <span>✔️️ 最新副本解包</span>
                        <span>✔️️ 支持全站正文插入</span></span
                    ></a
                >
                <a href="/app/talent"
                    ><i class="u-icon"
                        ><img
                            svg-inline
                            src="./assets/img/logos/talent.svg"/></i
                    ><span class="u-name">奇穴模拟器</span
                    ><span class="u-desc">同步游戏最新资料片</span
                    ><span class="u-features">
                        <span>✔️️ 完全模拟游戏界面</span>
                        <span>✔️️ 支持不同历史版本</span>
                        <span>✔️️ 支持全站正文插入</span></span
                    ></a
                >
                <a href="/app/icons"
                    ><i class="u-icon"
                        ><img svg-inline src="./assets/img/logos/icons.svg"/></i
                    ><span class="u-name">图标大全</span
                    ><span class="u-desc">美术收藏控必备</span
                    ><span class="u-features"
                        ><span>✔️️ 官方图标/表情等</span>
                        <span>✔️️ 支持定制收藏</span>
                        <span>✔️️ 支持全站正文插入</span></span
                    ></a
                >
                <a href="/app/flog"
                    ><i class="u-icon"
                        ><img svg-inline src="./assets/img/logos/flog.svg"/></i
                    ><span class="u-name">BOSS日志分析</span
                    ><span class="u-desc">开荒必备</span
                    ><span class="u-features"
                        ><span>✔️ 战斗日志完全分析</span>
                        <span>✔️ 轻松提取时间轴</span>
                        <span>✔️ 团控数据制作者必备</span></span
                    ></a
                >
                <a href="/app/face"
                    ><i class="u-icon"
                        ><img svg-inline src="./assets/img/logos/face.svg"/></i
                    ><span class="u-name">脸型数据分析</span
                    ><span class="u-desc">捏脸数据提取分析</span
                    ><span class="u-features"
                        ><span>✔️ 提取局部设定</span>
                        <span>✔️ 选择部分参考</span>
                        <span>✔️ 轻松定制专属脸型</span></span
                    ></a
                >
                <a href="/app/servers"
                    ><i class="u-icon"
                        ><img
                            svg-inline
                            src="./assets/img/logos/servers.svg"/></i
                    ><span class="u-name">开服监控</span
                    ><span class="u-desc">实时开服状态监控</span
                    ><span class="u-features"
                        ><span>✔️ 实时状态无延迟</span>
                        <span>✔️ 支持置顶关注</span>
                        <span>✔️ 不错过任何机会</span></span
                    ></a
                >
                <a href="/app/price"
                    ><i class="u-icon"
                        ><img svg-inline src="./assets/img/logos/price.svg"/></i
                    ><span class="u-name">金价走势</span
                    ><span class="u-desc">基三理财好帮手</span
                    ><span class="u-features"
                        ><span>✔️ 官方万宝楼全数据</span>
                        <span>✔️ 根据走势选择出入手</span>
                        <span>✔️ 全服对比分布一览</span></span
                    ></a
                >
                <a href="/app/translator"
                    ><i class="u-icon"
                        ><img
                            svg-inline
                            src="./assets/img/logos/translator.svg"/></i
                    ><span class="u-name">繁体转换</span
                    ><span class="u-desc">國際服專用</span
                    ><span class="u-features"
                        ><span>✔️ 標準簡繁轉換</span>
                        <span>✔️ 劍網三特殊詞庫</span>
                        <span>✔️ 歡迎貢獻詞表</span></span
                    ></a
                >
                <a href="https://www.j3pz.com/" target="_blank"
                    ><i class="u-icon"
                        ><img svg-inline src="./assets/img/logos/j3pz.svg"/></i
                    ><span class="u-name">在线配装</span
                    ><img
                        class="u-blank"
                        svg-inline
                        src="./assets/img/logos/blank.svg"
                    /><span class="u-desc">在线配装分享</span
                    ><span class="u-features"
                        ><span>✔️ 同步游戏最新版本</span>
                        <span>✔️ DPS狂魔必备</span>
                        <span>✔️ 深度合作伙伴</span></span
                    ></a
                >
                <a href="https://www.j3pz.com/tools/haste/" target="_blank"
                    ><i class="u-icon"
                        ><img svg-inline src="./assets/img/logos/speed.svg"/></i
                    ><span class="u-name">急速阈值</span
                    ><img
                        class="u-blank"
                        svg-inline
                        src="./assets/img/logos/blank.svg"
                    /><span class="u-desc">精确计算加速</span
                    ><span class="u-features"
                        ><span>✔️ 同步游戏最新版本</span>
                        <span>✔️ DPS狂魔必备</span>
                        <span>✔️ 深度合作伙伴</span></span
                    ></a
                >
                <a href="https://j3cx.com/exam/" target="_blank"
                    ><i class="u-icon"
                        ><img svg-inline src="./assets/img/logos/keju.svg"/></i
                    ><span class="u-name">科举题库</span
                    ><img
                        class="u-blank"
                        svg-inline
                        src="./assets/img/logos/blank.svg"
                    /><span class="u-desc">最全科举题库</span
                    ><span class="u-features"
                        ><span>✔️ 考试不再挂科</span>
                        <span>✔️ 妈妈再也不骂我</span>
                        <span>✔️ 深度合作伙伴</span></span
                    ></a
                >
                <a href="https://jx3.derzh.com/serendipity/" target="_blank"
                    ><i class="u-icon"
                        ><img svg-inline src="./assets/img/logos/qiyu.svg"/></i
                    ><span class="u-name">奇遇查询</span
                    ><img
                        class="u-blank"
                        svg-inline
                        src="./assets/img/logos/blank.svg"
                    /><span class="u-desc">在线奇遇查询</span
                    ><span class="u-features"
                        ><span>✔️ 查询全服情况</span>
                        <span>✔️ 合理推算触发</span>
                        <span>✔️ 深度合作伙伴</span></span
                    ></a
                >
                <a href="https://www.j3pz.com/tools/prediction/" target="_blank"
                    ><i class="u-icon"
                        ><img
                            svg-inline
                            src="./assets/img/logos/guishi.svg"/></i
                    ><span class="u-name">瑰石查询</span
                    ><img
                        class="u-blank"
                        svg-inline
                        src="./assets/img/logos/blank.svg"
                    /><span class="u-desc">Boss掉落全知晓</span
                    ><span class="u-features"
                        ><span>✔️ 瑰石列表大全</span>
                        <span>✔️ 轻松包团不用愁</span>
                        <span>✔️ 深度合作伙伴</span></span
                    ></a
                >
                <a
                    href="http://minamistudio.online/jx3simulator/index.html"
                    target="_blank"
                    ><i class="u-icon"
                        ><img
                            svg-inline
                            src="./assets/img/logos/minami.svg"/></i
                    ><span class="u-name">DPS模拟</span
                    ><img
                        class="u-blank"
                        svg-inline
                        src="./assets/img/logos/blank.svg"
                    /><span class="u-desc">Minami版模拟器</span
                    ><span class="u-features"
                        ><span>✔️ 模拟战斗记录</span>
                        <span>✔️ 自定义属性数据</span>
                        <span>✔️ 深度合作伙伴</span></span
                    ></a
                >
            </ul>
        </Main>
    </div>
</template>

<script>
import Nav from "@/components/Nav.vue";

export default {
    name: "App",
    data: function() {
        return {};
    },
    computed: {},
    methods: {},
    filters: {},
    mounted: function() {},
    components: {
        Nav,
    },
};
</script>

<style lang="less">
@import "./assets/css/index.less";
</style>
