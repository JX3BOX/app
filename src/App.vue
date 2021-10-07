<template>
    <div id="app" class="p-app-index">
        <Header></Header>
        <Breadcrumb name="应用中心" slug="app" root="/app" :feedbackEnable="true">
            <img class="u-app-index" slot="logo" svg-inline src="./assets/img/app.svg" />
        </Breadcrumb>
        <div class="m-app m-app-index">
            <h1 class="m-app-index-title">魔盒矩阵</h1>

            <div class="m-app-index-pve">
                <el-divider content-position="left">PVE</el-divider>
                <el-row :gutter="20">
                    <el-col :span="4">
                        <div class="u-item">
                            <a href="./database/">
                                <span class="u-pic">
                                    <i class="u-icon">
                                        <img svg-inline :src="getIcon('database')" />
                                    </i>
                                    <span class="u-name">剑三数据库</span>
                                </span>
                                <span class="u-features">
                                    <span>✔️️ 助力开荒机制全摸透</span>
                                    <span>✔️️ 技能/Buff/NPC/物品查询</span>
                                    <span>✔️️ 同步最新版本</span>
                                    <span>✔️️ 支持全站正文插入</span>
                                </span>
                            </a>
                        </div>
                    </el-col>
                    <el-col :span="4">
                        <div class="u-item">
                            <a href="./icons">
                                <span class="u-pic">
                                    <i class="u-icon">
                                        <img svg-inline :src="getIcon('icons')" />
                                    </i>
                                    <span class="u-name">图标大全</span>
                                </span>
                                <span class="u-features">
                                    <span>✔️️ 美术收藏控必备</span>
                                    <span>✔️️ 官方图标/表情等</span>
                                    <span>✔️️ 支持定制收藏</span>
                                    <span>✔️️ 支持全站正文插入</span>
                                </span>
                            </a>
                        </div>
                    </el-col>
                    <el-col :span="4">
                        <div class="u-item">
                            <a href="./talent">
                                <span class="u-pic">
                                    <i class="u-icon">
                                        <img svg-inline :src="getIcon('talent')" />
                                    </i>
                                    <span class="u-name">奇穴模拟器</span>
                                </span>
                                <span class="u-features">
                                    <span class="u-desc">✔️️ 同步游戏最新资料片</span>
                                    <span>✔️️ 完全模拟游戏界面</span>
                                    <span>✔️️ 支持不同历史版本</span>
                                    <span>✔️️ 支持全站正文插入</span>
                                </span>
                            </a>
                        </div>
                    </el-col>
                    <el-col :span="4">
                        <div class="u-item">
                            <a href="./talent2/">
                                <span class="u-pic">
                                    <i class="u-icon">
                                        <img svg-inline :src="getIcon('talent2')" />
                                    </i>
                                    <span class="u-name">镇派模拟器</span>
                                </span>
                                <span class="u-features">
                                    <span>✔️️ 同步怀旧服</span>
                                    <span>✔️️ 完全模拟游戏界面</span>
                                    <span>✔️️ 支持方案分享</span>
                                    <span>✔️️ 宏栏目联动</span>
                                </span>
                            </a>
                        </div>
                    </el-col>
                    <el-col :span="4">
                        <div class="u-item">
                            <a href="/dbm" target="_blank">
                                <span class="u-pic">
                                    <i class="u-icon">
                                        <img svg-inline :src="getIcon('dbm')" />
                                    </i>
                                    <span class="u-name">数据构建</span>
                                </span>
                                <span class="u-features">
                                    <span class="u-desc">✔️ 自定义未来数据</span>
                                    <span>✔️ 在线DIY数据</span>
                                    <span>✔️ 自动分析旧数据</span>
                                    <span>✔️ 一键云端数据</span>
                                </span>
                            </a>
                        </div>
                    </el-col>
                    <el-col :span="4">
                        <div class="u-item">
                            <a href="/battle" target="_blank">
                                <span class="u-pic">
                                    <i class="u-icon">
                                        <img svg-inline :src="getIcon('battle')" />
                                    </i>
                                    <span class="u-name">战斗分析</span>
                                </span>
                                <span class="u-features">
                                    <span class="u-desc">✔️ 团队情况分析</span>
                                    <span>✔️ BOSS时间轴推导</span>
                                    <span>✔️ 云端存储</span>
                                    <span>✔️ 自定义权限</span>
                                </span>
                            </a>
                        </div>
                    </el-col>
                    <el-col :span="4">
                        <div class="u-item">
                            <a href="/pz" target="_blank">
                                <span class="u-pic">
                                    <i class="u-icon">
                                        <img svg-inline :src="getIcon('pz')" />
                                    </i>
                                    <span class="u-name">在线配装</span>
                                </span>
                                <span class="u-features">
                                    <span class="u-desc">✔️ 在线配装分享</span>
                                    <span>✔️ DPS狂魔必备</span>
                                    <span>✔️ 支持多端</span>
                                    <span>✔️ 同步游戏最新版本</span>
                                </span>
                                <!-- <img class="u-blank" svg-inline src="./assets/img/logos/blank.svg" /> -->
                            </a>
                        </div>
                    </el-col>
                    <el-col :span="4">
                        <div class="u-item">
                            <a href="./haste/">
                                <span class="u-pic">
                                    <i class="u-icon">
                                        <img svg-inline :src="getIcon('haste')" />
                                    </i>
                                    <span class="u-name">急速阈值</span>
                                </span>
                                <span class="u-features">
                                    <span class="u-desc">✔️ 精确计算加速</span>
                                    <span>✔️ 同步游戏最新版本</span>
                                    <span>✔️ 支持门派自带</span>
                                    <span>✔️ DPS狂魔必备</span>
                                </span>
                            </a>
                        </div>
                    </el-col>
                    <el-col :span="4">
                        <div class="u-item">
                            <a href="/team" target="_blank">
                                <span class="u-pic">
                                    <i class="u-icon">
                                        <img svg-inline :src="getIcon('team')" />
                                    </i>
                                    <span class="u-name">团队管理</span>
                                </span>
                                <span class="u-features">
                                    <span class="u-desc">✔️ 一键排表</span>
                                    <span>✔️ 微信报名</span>
                                    <span>✔️ 游戏内一键加团</span>
                                    <span>✔️ DKP考勤</span>
                                </span>
                            </a>
                        </div>
                    </el-col>
                    <el-col :span="4">
                        <div class="u-item">
                            <a href="/rank" target="_blank">
                                <span class="u-pic">
                                    <i class="u-icon">
                                        <img svg-inline :src="getIcon('rank')" />
                                    </i>
                                    <span class="u-name">秘境百强</span>
                                </span>
                                <span class="u-features">
                                    <span class="u-desc">✔️ JDT赛事专题</span>
                                    <span>✔️ 副本挑战最高荣誉</span>
                                    <span>✔️ 每年两届</span>
                                    <span>✔️ 丰富奖池</span>
                                </span>
                            </a>
                        </div>
                    </el-col>
                    <el-col :span="4">
                        <div class="u-item">
                            <a href="/fb/#/skill" target="_blank">
                                <span class="u-pic">
                                    <i class="u-icon">
                                        <img svg-inline :src="getIcon('fbdata')" />
                                    </i>
                                    <span class="u-name">副本数据</span>
                                </span>
                                <span class="u-features">
                                    <span class="u-desc">✔️ 副本技能元数据</span>
                                    <span>✔️ 血量防御全数值一览</span>
                                    <span>✔️ 开荒进度团必备</span>
                                    <span>✔️ 冲击五甲</span>
                                </span>
                            </a>
                        </div>
                    </el-col>
                    <el-col :span="4">
                        <div class="u-item">
                            <a href="/fb/#/drop" target="_blank">
                                <span class="u-pic">
                                    <i class="u-icon">
                                        <img svg-inline :src="getIcon('fbdrop')" />
                                    </i>
                                    <span class="u-name">副本掉落</span>
                                </span>
                                <span class="u-features">
                                    <span class="u-desc">✔️ 副本掉落一览</span>
                                    <span>✔️ 不同难度区分</span>
                                    <span>✔️ 同步推栏最新</span>
                                    <span>✔️ 包含家具掉落</span>
                                </span>
                            </a>
                        </div>
                    </el-col>
                    <el-col :span="4">
                        <div class="u-item">
                            <a href="/fb/#/gem" target="_blank">
                                <span class="u-pic">
                                    <i class="u-icon">
                                        <img svg-inline :src="getIcon('fbgem')" />
                                    </i>
                                    <span class="u-name">瑰石大全</span>
                                </span>
                                <span class="u-features">
                                    <span class="u-desc">✔️ 瑰石掉落一览</span>
                                    <span>✔️ 不同难度区分</span>
                                    <span>✔️ 同步最新副本</span>
                                    <span>✔️ 物品完整详情</span>
                                </span>
                            </a>
                        </div>
                    </el-col>
                    <el-col :span="4">
                        <div class="u-item">
                            <a href="./meridians">
                                <span class="u-pic">
                                    <i class="u-icon">
                                        <img svg-inline :src="getIcon('meridians')" />
                                    </i>
                                    <span class="u-name">经脉模拟器</span>
                                </span>
                                <span class="u-features">
                                    <span class="u-desc">✔️ 原汁原味</span>
                                    <span>✔️ 经典怀旧</span>
                                    <span>✔️ 模拟加点</span>
                                    <span>✔️ 属性日志</span>
                                </span>
                            </a>
                        </div>
                    </el-col>
                    <el-col :span="4">
                        <div class="u-item">
                            <a href="./macroeditor">
                                <span class="u-pic">
                                    <i class="u-icon">
                                        <img svg-inline :src="getIcon('macroeditor')" />
                                    </i>
                                    <span class="u-name">宏编辑器</span>
                                </span>
                                <span class="u-features">
                                    <span class="u-desc">✔️️ 支持自动补全</span>
                                    <span>✔️️ 支持语法高亮</span>
                                    <span>✔️️ 支持中文式一键插入宏语句</span>
                                    <span>✔️️ 萌新写宏好助手</span>
                                </span>
                            </a>
                        </div>
                    </el-col>
                </el-row>
            </div>

            <div class="m-app-index-pvp">
                <el-divider content-position="left">PVP</el-divider>
                <el-row :gutter="20">
                    <el-col :span="4">
                        <div class="u-item">
                            <a href="./sandbox">
                                <span class="u-pic">
                                    <i class="u-icon">
                                        <img svg-inline :src="getIcon('sandbox')" />
                                    </i>
                                    <span class="u-name">阵营沙盘</span>
                                </span>
                                <span class="u-features">
                                    <span class="u-desc">✔️ 全服沙盘查询</span>
                                    <span>✔️ 攻防路线</span>
                                    <span>✔️ 据点回溯</span>
                                    <span>✔️ PVP党必备</span>
                                </span>
                            </a>
                        </div>
                    </el-col>
                    <el-col :span="4">
                        <div class="u-item">
                            <a href="/battle" target="_blank">
                                <span class="u-pic">
                                    <i class="u-icon">
                                        <img svg-inline :src="getIcon('battle')" />
                                    </i>
                                    <span class="u-name">战斗复盘</span>
                                </span>
                                <span class="u-features">
                                    <span class="u-desc">✔️ 战斗日志分析</span>
                                    <span>✔️ PVE/PVP多维度</span>
                                    <span>✔️ 云端存储</span>
                                    <span>✔️ 自定义权限</span>
                                </span>
                            </a>
                        </div>
                    </el-col>
                </el-row>
            </div>

            <div class="m-app-index-pvx">
                <el-divider content-position="left">PVX</el-divider>
                <el-row :gutter="20">
                    <el-col :span="4">
                        <div class="u-item">
                            <a href="./servers">
                                <span class="u-pic">
                                    <i class="u-icon">
                                        <img svg-inline :src="getIcon('servers')" />
                                    </i>
                                    <span class="u-name">开服监控</span>
                                </span>
                                <span class="u-features">
                                    <span class="u-desc">✔️ 实时开服状态监控</span>
                                    <span>✔️ 实时状态无延迟</span>
                                    <span>✔️ 支持置顶关注</span>
                                    <span>✔️ 不错过任何机会</span>
                                </span>
                            </a>
                        </div>
                    </el-col>
                    <el-col :span="4">
                        <div class="u-item">
                            <a href="./price">
                                <span class="u-pic">
                                    <i class="u-icon">
                                        <img svg-inline :src="getIcon('price')" />
                                    </i>
                                    <span class="u-name">金价走势</span>
                                </span>
                                <span class="u-features">
                                    <span class="u-desc">✔️ 基三理财好帮手</span>
                                    <span>✔️ 官方万宝楼全数据</span>
                                    <span>✔️ 根据走势选择出入手</span>
                                    <span>✔️ 全服对比分布一览</span>
                                </span>
                            </a>
                        </div>
                    </el-col>
                    <el-col :span="4">
                        <div class="u-item">
                            <a href="./facedata">
                                <span class="u-pic">
                                    <i class="u-icon">
                                        <img svg-inline :src="getIcon('facedata')" />
                                    </i>
                                    <span class="u-name">妆容解析</span>
                                </span>
                                <span class="u-features">
                                    <span class="u-desc">✔️ 怀旧服多端支持</span>
                                    <span>✔️ 捏脸数据提取分析</span>
                                    <span>✔️ 自定义修改导出</span>
                                    <span>✔️ 支持过滤付费数据</span>
                                </span>
                            </a>
                        </div>
                    </el-col>
                    <el-col :span="4">
                        <div class="u-item">
                            <a href="./flower">
                                <span class="u-pic">
                                    <i class="u-icon">
                                        <img svg-inline :src="getIcon('flower')" />
                                    </i>
                                    <span class="u-name">花价查询</span>
                                </span>
                                <span class="u-features">
                                    <span>✔️️ 全区服线路精准数据</span>
                                    <span>✔️️ 每日更新</span>
                                    <span>✔️️ 支持关注区服</span>
                                    <span>✔️️ 支持多模式</span>
                                </span>
                            </a>
                        </div>
                    </el-col>
                    <el-col :span="4">
                        <div class="u-item">
                            <a href="./translator">
                                <span class="u-pic">
                                    <i class="u-icon">
                                        <img svg-inline :src="getIcon('translator')" />
                                    </i>
                                    <span class="u-name">繁体转换</span>
                                </span>
                                <span class="u-features">
                                    <span class="u-desc">✔️ 國際服專用</span>
                                    <span>✔️ 標準簡繁轉換</span>
                                    <span>✔️ 劍網三特殊詞庫</span>
                                    <span>✔️ 歡迎貢獻詞表</span>
                                </span>
                            </a>
                        </div>
                    </el-col>
                    <el-col :span="4">
                        <div class="u-item">
                            <a href="./sudoku" target="_blank">
                                <span class="u-pic">
                                    <i class="u-icon">
                                        <img svg-inline src="./assets/img/logos/sudoku.svg" />
                                    </i>
                                    <span class="u-name">九宫格计算器</span>
                                </span>
                                <span class="u-features">
                                    <span class="u-desc">✔️ 九宫格小助手</span>
                                    <span>✔️ 试炼模式</span>
                                    <span>✔️ 荻花前山模式</span>
                                    <span>✔️ 附地图指南</span>
                                </span>
                            </a>
                        </div>
                    </el-col>
                    <el-col :span="4">
                        <div class="u-item">
                            <a href="https://j3cx.com/exam/" target="_blank">
                                <span class="u-pic">
                                    <i class="u-icon">
                                        <img svg-inline :src="getIcon('keju')" />
                                    </i>
                                    <span class="u-name">科举题库</span>
                                </span>
                                <img class="u-blank" svg-inline src="./assets/img/logos/blank.svg" />
                                <span class="u-features">
                                    <span class="u-desc">✔️ 最全科举题库</span>
                                    <span>✔️ 考试不再挂科</span>
                                    <span>✔️ 妈妈再也不骂我</span>
                                    <span>✔️ 深度合作伙伴</span>
                                </span>
                            </a>
                        </div>
                    </el-col>
                    <el-col :span="4">
                        <div class="u-item">
                            <a href="https://j3cx.com/serendipity" target="_blank">
                                <span class="u-pic">
                                    <i class="u-icon">
                                        <img svg-inline :src="getIcon('qiyu')" />
                                    </i>
                                    <span class="u-name">奇遇查询</span>
                                </span>
                                <img class="u-blank" svg-inline src="./assets/img/logos/blank.svg" />
                                <span class="u-features">
                                    <span class="u-desc">✔️ 在线奇遇查询</span>
                                    <span>✔️ 查询全服情况</span>
                                    <span>✔️ 合理推算触发</span>
                                    <span>✔️ 深度合作伙伴</span>
                                </span>
                            </a>
                        </div>
                    </el-col>
                </el-row>
            </div>
        </div>
    </div>
</template>

<script>
import Nav from "@/components/Nav.vue";
import {__imgPath} from '@jx3box/jx3box-common/data/jx3box.json'
export default {
    name: "App",
    data: function () {
        return {};
    },
    computed: {},
    methods: {
        getIcon(key){
            return __imgPath + 'image/box/' + key + '.svg'
        }
    },
    filters: {},
    mounted: function () {},
    components: {
        // Nav,
    },
};
</script>

<style lang="less">
@import "./assets/css/index.less";
</style>
