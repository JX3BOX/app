<template>
    <div id="app" class="p-app-index">
        <Header></Header>
        <Breadcrumb
            name="应用中心"
            slug="app"
            root="/app"
            :feedbackEnable="true"
        >
            <img
                class="u-app-index"
                slot="logo"
                svg-inline
                src="./assets/img/app.svg"
            />
        </Breadcrumb>
        <div class="m-app m-app-index">
            <h1 class="m-app-index-title">魔盒矩阵</h1>
            <el-row :gutter="20">
                <el-col :span="12">
                    <el-divider content-position="left">PVE/PVP</el-divider>
                    <el-row :gutter="20">
                        <el-col :span="12"
                            ><div class="u-item">
                                <a href="./database/">
                                    <span class="u-pic">
                                        <i class="u-icon"
                                            ><img
                                                svg-inline
                                                src="./assets/img/logos/db.svg"/></i
                                        ><span class="u-name">剑三数据库</span>
                                    </span>
                                    <span class="u-features">
                                        <span>✔️️ 助力开荒机制全摸透</span>
                                        <span>✔️️ 技能/Buff/NPC/物品查询</span>
                                        <span>✔️️ 同步最新版本</span>
                                        <span>✔️️ 支持全站正文插入</span></span
                                    ></a
                                >
                            </div></el-col
                        >
                        <el-col :span="12"
                            ><div class="u-item">
                                <a href="./icons">
                                    <span class="u-pic">
                                        <i class="u-icon"
                                            ><img
                                                svg-inline
                                                src="./assets/img/logos/icons.svg"/></i
                                        ><span class="u-name">图标大全</span>
                                    </span>
                                    <span class="u-features"
                                        ><span>✔️️ 美术收藏控必备</span
                                        ><span>✔️️ 官方图标/表情等</span>
                                        <span>✔️️ 支持定制收藏</span>
                                        <span>✔️️ 支持全站正文插入</span></span
                                    ></a
                                >
                            </div></el-col
                        >
                        <el-col :span="12"
                            ><div class="u-item">
                                <a href="./talent"
                                    ><span class="u-pic"
                                        ><i class="u-icon"
                                            ><img
                                                svg-inline
                                                src="./assets/img/logos/talent.svg"/></i
                                        ><span class="u-name"
                                            >奇穴模拟器</span
                                        ></span
                                    ><span class="u-features">
                                        <span class="u-desc"
                                            >✔️️ 同步游戏最新资料片</span
                                        >
                                        <span>✔️️ 完全模拟游戏界面</span>
                                        <span>✔️️ 支持不同历史版本</span>
                                        <span>✔️️ 支持全站正文插入</span></span
                                    ></a
                                >
                            </div></el-col
                        >
                        <el-col :span="12"
                            ><div class="u-item">
                                <a href="./macroeditor"
                                    ><span class="u-pic"
                                        ><i class="u-icon"
                                            ><img
                                                svg-inline
                                                src="./assets/img/logos/macroeditor.svg"/></i
                                        ><span class="u-name"
                                            >宏编辑器</span
                                        ></span
                                    ><span class="u-features">
                                        <span class="u-desc"
                                            >✔️️ 支持自动补全</span
                                        >
                                        <span>✔️️ 支持语法高亮</span>
                                        <span
                                            >✔️️ 支持中文式一键插入宏语句</span
                                        >
                                        <span>✔️️ 萌新写宏好助手</span></span
                                    ></a
                                >
                            </div></el-col
                        >
                        <el-col :span="12"
                            ><div class="u-item">
                                <a href="/fb/#/skill" target="_blank"
                                    ><span class="u-pic"
                                        ><i class="u-icon"
                                            ><img
                                                svg-inline
                                                src="./assets/img/logos/skull.svg"/></i
                                        ><span class="u-name"
                                            >副本解包</span
                                        ></span
                                    ><span class="u-features"
                                        ><span class="u-desc"
                                            >✔️ 副本技能元数据</span
                                        ><span>✔️ 血量防御全数值一览</span>
                                        <span>✔️ 开荒进度团必备</span>
                                        <span>✔️ 冲击五甲</span></span
                                    ></a
                                >
                            </div></el-col
                        >
                        <el-col :span="12"
                            ><div class="u-item">
                                <a href="https://www.j3pz.com/" target="_blank"
                                    ><span class="u-pic"
                                        ><i class="u-icon"
                                            ><img
                                                svg-inline
                                                src="./assets/img/logos/j3pz.svg"/></i
                                        ><span class="u-name"
                                            >在线配装</span
                                        ></span
                                    ><span class="u-features"
                                        ><span class="u-desc"
                                            >✔️ 在线配装分享</span
                                        ><span>✔️ 同步游戏最新版本</span>
                                        <span>✔️ DPS狂魔必备</span>
                                        <span>✔️ 深度合作伙伴</span></span
                                    ><img
                                        class="u-blank"
                                        svg-inline
                                        src="./assets/img/logos/blank.svg"
                                /></a></div
                        ></el-col>
                        <el-col :span="12"
                            ><div class="u-item">
                                <a
                                    href="https://www.j3pz.com/tools/haste/"
                                    target="_blank"
                                    ><span class="u-pic"
                                        ><i class="u-icon"
                                            ><img
                                                svg-inline
                                                src="./assets/img/logos/speed.svg"/></i
                                        ><span class="u-name"
                                            >急速阈值</span
                                        ></span
                                    ><img
                                        class="u-blank"
                                        svg-inline
                                        src="./assets/img/logos/blank.svg"
                                    /><span class="u-features"
                                        ><span class="u-desc"
                                            >✔️ 精确计算加速</span
                                        ><span>✔️ 同步游戏最新版本</span>
                                        <span>✔️ DPS狂魔必备</span>
                                        <span>✔️ 深度合作伙伴</span></span
                                    ></a
                                >
                            </div></el-col
                        >
                        <el-col :span="12"
                            ><div class="u-item">
                                <a
                                    href="https://www.j3pz.com/tools/prediction/"
                                    target="_blank"
                                    ><span class="u-pic"
                                        ><i class="u-icon"
                                            ><img
                                                svg-inline
                                                src="./assets/img/logos/guishi.svg"/></i
                                        ><span class="u-name"
                                            >瑰石查询</span
                                        ></span
                                    ><img
                                        class="u-blank"
                                        svg-inline
                                        src="./assets/img/logos/blank.svg"
                                    /><span class="u-features"
                                        ><span class="u-desc"
                                            >✔️ Boss掉落全知晓</span
                                        ><span>✔️ 瑰石列表大全</span>
                                        <span>✔️ 轻松包团不用愁</span>
                                        <span>✔️ 深度合作伙伴</span></span
                                    ></a
                                >
                            </div></el-col
                        >
                        <el-col :span="12"
                            ><div class="u-item">
                                <a
                                    href="http://minamistudio.online/jx3simulator/index.html"
                                    target="_blank"
                                    ><span class="u-pic"
                                        ><i class="u-icon"
                                            ><img
                                                svg-inline
                                                src="./assets/img/logos/minami.svg"/></i
                                        ><span class="u-name"
                                            >DPS模拟</span
                                        ></span
                                    ><img
                                        class="u-blank"
                                        svg-inline
                                        src="./assets/img/logos/blank.svg"
                                    /><span class="u-features"
                                        ><span class="u-desc"
                                            >✔️ Minami版模拟器</span
                                        ><span>✔️ 模拟战斗记录</span>
                                        <span>✔️ 自定义属性数据</span>
                                        <span>✔️ 深度合作伙伴</span></span
                                    ></a
                                >
                            </div></el-col
                        >
                    </el-row>
                </el-col>
                <el-col :span="12">
                    <el-divider content-position="left">PVX</el-divider>
                    <el-row :gutter="20">
                        <el-col :span="12"
                            ><div class="u-item">
                                <a href="./servers"
                                    ><span class="u-pic"
                                        ><i class="u-icon"
                                            ><img
                                                svg-inline
                                                src="./assets/img/logos/servers.svg"/></i
                                        ><span class="u-name"
                                            >开服监控</span
                                        ></span
                                    ><span class="u-features"
                                        ><span class="u-desc"
                                            >✔️ 实时开服状态监控</span
                                        ><span>✔️ 实时状态无延迟</span>
                                        <span>✔️ 支持置顶关注</span>
                                        <span>✔️ 不错过任何机会</span></span
                                    ></a
                                >
                            </div></el-col
                        >
                        <el-col :span="12"
                            ><div class="u-item">
                                <a href="./price"
                                    ><span class="u-pic"
                                        ><i class="u-icon"
                                            ><img
                                                svg-inline
                                                src="./assets/img/price/price.svg"/></i
                                        ><span class="u-name"
                                            >金价走势</span
                                        ></span
                                    ><span class="u-features"
                                        ><span class="u-desc"
                                            >✔️ 基三理财好帮手</span
                                        ><span>✔️ 官方万宝楼全数据</span>
                                        <span>✔️ 根据走势选择出入手</span>
                                        <span>✔️ 全服对比分布一览</span></span
                                    ></a
                                >
                            </div></el-col
                        >
                        <el-col :span="12"
                            ><div class="u-item">
                                <a href="./flower">
                                    <span class="u-pic">
                                        <i class="u-icon"
                                            ><img
                                                svg-inline
                                                src="./assets/img/logos/flower2.svg"/></i
                                        ><span class="u-name">花价查询</span>
                                    </span>
                                    <span class="u-features">
                                        <span>✔️️ 全区服线路精准数据</span>
                                        <span>✔️️ 每日更新</span>
                                        <span>✔️️ 支持关注区服</span>
                                        <span>✔️️ 支持多模式</span></span
                                    ></a
                                >
                            </div></el-col
                        >
                        <el-col :span="12"
                            ><div class="u-item">
                                <a href="./furniture">
                                    <span class="u-pic">
                                        <i class="u-icon"
                                            ><img
                                                svg-inline
                                                src="./assets/img/logos/f1.svg"/></i
                                        ><span class="u-name">家具图鉴</span>
                                    </span>
                                    <span class="u-features">
                                        <span>✔️️ 全家具图谱</span>
                                        <span>✔️️ 多模式筛选</span>
                                        <span>✔️️ 高清原图</span>
                                        <span>✔️️ 建筑师必备</span></span
                                    ></a
                                >
                            </div></el-col
                        >
                        <el-col :span="12"
                            ><div class="u-item">
                                <a href="./facedata"
                                    ><span class="u-pic"
                                        ><i class="u-icon"
                                            ><img
                                                svg-inline
                                                src="./assets/img/logos/mirror.svg"/></i
                                        ><span class="u-name"
                                            >妆容解析</span
                                        ></span
                                    ><span class="u-features"
                                        ><span class="u-desc"
                                            >✔️ 捏脸数据提取分析</span
                                        ><span>✔️ 提取局部设定</span>
                                        <span>✔️ 选择部分参考</span>
                                        <span>✔️ 轻松定制专属脸型</span></span
                                    ></a
                                >
                            </div></el-col
                        >
                        <el-col :span="12"
                            ><div class="u-item">
                                <a href="./translator"
                                    ><span class="u-pic"
                                        ><i class="u-icon"
                                            ><img
                                                svg-inline
                                                src="./assets/img/logos/translator.svg"/></i
                                        ><span class="u-name"
                                            >繁体转换</span
                                        ></span
                                    ><span class="u-features"
                                        ><span class="u-desc"
                                            >✔️ 國際服專用</span
                                        ><span>✔️ 標準簡繁轉換</span>
                                        <span>✔️ 劍網三特殊詞庫</span>
                                        <span>✔️ 歡迎貢獻詞表</span></span
                                    ></a
                                >
                            </div></el-col
                        >
                        <el-col :span="12"
                            ><div class="u-item">
                                <a href="./sudoku"
                                    ><span class="u-pic"
                                        ><i class="u-icon"
                                            ><img
                                                svg-inline
                                                src="./assets/img/logos/sudoku.svg"/></i
                                        ><span class="u-name"
                                            >九宫格计算器</span
                                        ></span
                                    ><span class="u-features"
                                        ><span class="u-desc"
                                            >✔️ 九宫格小助手</span
                                        ><span>✔️ 试炼模式</span>
                                        <span>✔️ 荻花前山模式</span>
                                        <span>✔️ 附地图指南</span></span
                                    ></a
                                >
                            </div></el-col
                        >
                        <el-col :span="12"
                            ><div class="u-item">
                                <a href="https://j3cx.com/exam/" target="_blank"
                                    ><span class="u-pic"
                                        ><i class="u-icon"
                                            ><img
                                                svg-inline
                                                src="./assets/img/logos/keju.svg"/></i
                                        ><span class="u-name"
                                            >科举题库</span
                                        ></span
                                    ><img
                                        class="u-blank"
                                        svg-inline
                                        src="./assets/img/logos/blank.svg"
                                    /><span class="u-features"
                                        ><span class="u-desc"
                                            >✔️ 最全科举题库</span
                                        ><span>✔️ 考试不再挂科</span>
                                        <span>✔️ 妈妈再也不骂我</span>
                                        <span>✔️ 深度合作伙伴</span></span
                                    ></a
                                >
                            </div></el-col
                        >
                        <el-col :span="12"
                            ><div class="u-item">
                                <a
                                    href="https://j3cx.com/serendipity"
                                    target="_blank"
                                    ><span class="u-pic"
                                        ><i class="u-icon"
                                            ><img
                                                svg-inline
                                                src="./assets/img/logos/qiyu.svg"/></i
                                        ><span class="u-name"
                                            >奇遇查询</span
                                        ></span
                                    ><img
                                        class="u-blank"
                                        svg-inline
                                        src="./assets/img/logos/blank.svg"
                                    /><span class="u-features"
                                        ><span class="u-desc"
                                            >✔️ 在线奇遇查询</span
                                        ><span>✔️ 查询全服情况</span>
                                        <span>✔️ 合理推算触发</span>
                                        <span>✔️ 深度合作伙伴</span></span
                                    ></a
                                >
                            </div></el-col
                        >
                    </el-row>
                </el-col>
            </el-row>
        </div>
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
        // Nav,
    },
};
</script>

<style lang="less">
@import "./assets/css/index.less";
</style>
