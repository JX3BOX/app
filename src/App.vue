<template>
    <div id="app" class="p-app-index">
        <Header></Header>
        <Breadcrumb name="魔盒矩阵" slug="app" root="/app" :feedbackEnable="true">
            <img class="u-app-index" slot="logo" svg-inline src="./assets/img/app.svg" />
        </Breadcrumb>
        <div class="m-app m-app-index">
            <h1 class="m-app-index-title">魔盒矩阵</h1>

            <div class="m-app-index-block">
                <el-divider content-position="left"><i class="el-icon-box"></i> 通用</el-divider>
                <el-row :gutter="20">
                    <el-col :span="6">
                        <div class="u-item">
                            <a href="./database/" target="_blank">
                                <span class="u-pic">
                                    <i class="u-icon">
                                        <img svg-inline :src="getIcon('database')" />
                                    </i>
                                </span>
                                <span class="u-features">
                                    <span class="u-name">剑三数据库</span>
                                    <span class="u-desc">技能/Buff/NPC/交互查询</span>
                                </span>
                            </a>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div class="u-item">
                            <a href="./icons" target="_blank">
                                <span class="u-pic">
                                    <i class="u-icon">
                                        <img svg-inline :src="getIcon('icons')" />
                                    </i>
                                </span>
                                <span class="u-features">
                                    <span class="u-name">图标大全</span>
                                    <span class="u-desc">剑三图标库/官方聊天表情</span>
                                </span>
                            </a>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div class="u-item">
                            <a href="/jx3dat" target="_blank">
                                <span class="u-pic">
                                    <i class="u-icon">
                                        <img svg-inline :src="getIcon('jx3dat')" />
                                    </i>
                                </span>
                                <span class="u-features">
                                    <span class="u-name">数据中心</span>
                                    <span class="u-desc">剑三插件数据/用户云数据</span>
                                </span>
                            </a>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div class="u-item">
                            <a href="/tool" target="_blank">
                                <span class="u-pic">
                                    <i class="u-icon">
                                        <img svg-inline :src="getIcon('tool')" />
                                    </i>
                                </span>
                                <span class="u-features">
                                    <span class="u-name">工具教程</span>
                                    <span class="u-desc">剑三小工具/插件指南</span>
                                </span>
                            </a>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div class="u-item">
                            <a href="/bbs" target="_blank">
                                <span class="u-pic">
                                    <i class="u-icon">
                                        <img svg-inline :src="getIcon('bbs')" />
                                    </i>
                                </span>
                                <span class="u-features">
                                    <span class="u-name">剑三茶馆</span>
                                    <span class="u-desc">剑三攻略心得分享</span>
                                </span>
                            </a>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div class="u-item">
                            <a href="/bbs/#/joke" target="_blank">
                                <span class="u-pic">
                                    <i class="u-icon">
                                        <img svg-inline :src="getIcon('joke')" />
                                    </i>
                                </span>
                                <span class="u-features">
                                    <span class="u-name">剑三骚话</span>
                                    <span class="u-desc">剑三骚话大全</span>
                                </span>
                            </a>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div class="u-item">
                            <a href="/bbs/#/emotion" target="_blank">
                                <span class="u-pic">
                                    <i class="u-icon">
                                        <img svg-inline :src="getIcon('emotion')" />
                                    </i>
                                </span>
                                <span class="u-features">
                                    <span class="u-name">剑三表情</span>
                                    <span class="u-desc">剑三表情大全</span>
                                </span>
                            </a>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div class="u-item">
                            <a href="/bbs/#/namespace" target="_blank">
                                <span class="u-pic">
                                    <i class="u-icon">
                                        <img svg-inline :src="getIcon('namespace')" />
                                    </i>
                                </span>
                                <span class="u-features">
                                    <span class="u-name">剑三铭牌</span>
                                    <span class="u-desc">剑网3.com</span>
                                </span>
                            </a>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div class="u-item">
                            <a href="/calendar" target="_blank">
                                <span class="u-pic">
                                    <i class="u-icon">
                                        <img svg-inline :src="getIcon('calendar')" />
                                    </i>
                                </span>
                                <span class="u-features">
                                    <span class="u-name">剑三日历</span>
                                    <span class="u-desc">剑三编年史</span>
                                </span>
                            </a>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div class="u-item">
                            <a href="/topic" target="_blank">
                                <span class="u-pic">
                                    <i class="u-icon">
                                        <img svg-inline :src="getIcon('topic')" />
                                    </i>
                                </span>
                                <span class="u-features">
                                    <span class="u-name">专题导航</span>
                                    <span class="u-desc">历届资料片专题</span>
                                </span>
                            </a>
                        </div>
                    </el-col>
                </el-row>
            </div>

            <div class="m-app-index-block">
                <el-divider content-position="left"><i class="el-icon-box"></i> PVE·门派</el-divider>
                <el-row :gutter="20">
                    <el-col :span="6">
                        <div class="u-item">
                            <a href="/macro" target="_blank">
                                <span class="u-pic">
                                    <i class="u-icon">
                                        <img svg-inline :src="getIcon('macro')" />
                                    </i>
                                </span>
                                <span class="u-features">
                                    <span class="u-name">宏库</span>
                                    <span class="u-desc">剑三全门派宏</span>
                                </span>
                            </a>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div class="u-item">
                            <a href="./macroeditor" target="_blank">
                                <span class="u-pic">
                                    <i class="u-icon">
                                        <img svg-inline :src="getIcon('macroeditor')" />
                                    </i>
                                </span>
                                <span class="u-features">
                                    <span class="u-name">宏编辑器</span>
                                    <span class="u-desc">在线宏编辑器</span>
                                </span>
                            </a>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div class="u-item">
                            <a href="./talent" target="_blank">
                                <span class="u-pic">
                                    <i class="u-icon">
                                        <img svg-inline :src="getIcon('talent')" />
                                    </i>
                                </span>
                                <span class="u-features">
                                    <span class="u-name">奇穴模拟器</span>
                                    <span class="u-desc">奇穴模拟,多版本支持</span>
                                </span>
                            </a>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div class="u-item">
                            <a href="./talent2" target="_blank">
                                <span class="u-pic">
                                    <i class="u-icon">
                                        <img svg-inline :src="getIcon('talent2')" />
                                    </i>
                                </span>
                                <span class="u-features">
                                    <span class="u-name">镇派模拟器</span>
                                    <span class="u-desc">镇派模拟,多版本支持</span>
                                </span>
                            </a>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div class="u-item">
                            <a href="/bps" target="_blank">
                                <span class="u-pic">
                                    <i class="u-icon">
                                        <img svg-inline :src="getIcon('bps')" />
                                    </i>
                                </span>
                                <span class="u-features">
                                    <span class="u-name">白皮书</span>
                                    <span class="u-desc">剑三全门派攻略</span>
                                </span>
                            </a>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div class="u-item">
                            <a href="/bps/#/raw" target="_blank">
                                <span class="u-pic">
                                    <i class="u-icon">
                                        <img svg-inline :src="getIcon('bps-raw')" />
                                    </i>
                                </span>
                                <span class="u-features">
                                    <span class="u-name">技能数据</span>
                                    <span class="u-desc">门派技能原始数据</span>
                                </span>
                            </a>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div class="u-item">
                            <a href="/bps/#/recipe" target="_blank">
                                <span class="u-pic">
                                    <i class="u-icon">
                                        <img svg-inline :src="getIcon('bps-recipe')" />
                                    </i>
                                </span>
                                <span class="u-features">
                                    <span class="u-name">秘籍大全</span>
                                    <span class="u-desc">全门派秘籍大全</span>
                                </span>
                            </a>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div class="u-item">
                            <a href="/bps/#/collection" target="_blank">
                                <span class="u-pic">
                                    <i class="u-icon">
                                        <img svg-inline :src="getIcon('bps-collection')" />
                                    </i>
                                </span>
                                <span class="u-features">
                                    <span class="u-name">技能合集</span>
                                    <span class="u-desc">技能分类集合</span>
                                </span>
                            </a>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div class="u-item">
                            <a href="/pz" target="_blank">
                                <span class="u-pic">
                                    <i class="u-icon">
                                        <img svg-inline :src="getIcon('pz')" />
                                    </i>
                                </span>
                                <span class="u-features">
                                    <span class="u-name">配装器</span>
                                    <span class="u-desc">在线配装模拟/对比/分享</span>
                                </span>
                            </a>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div class="u-item">
                            <a href="/battle" target="_blank" class="disabled">
                                <span class="u-pic">
                                    <i class="u-icon">
                                        <img svg-inline :src="getIcon('battle')" />
                                    </i>
                                </span>
                                <span class="u-features">
                                    <span class="u-name">战斗分析</span>
                                    <span class="u-desc">茗伊团队战斗统计分析</span>
                                </span>
                            </a>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div class="u-item">
                            <a href="/bps/#/haste" target="_blank">
                                <span class="u-pic">
                                    <i class="u-icon">
                                        <img svg-inline :src="getIcon('haste')" />
                                    </i>
                                </span>
                                <span class="u-features">
                                    <span class="u-name">加速阈值</span>
                                    <span class="u-desc">急速断点一览</span>
                                </span>
                            </a>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div class="u-item">
                            <a href="/bps/#/dps" target="_blank">
                                <span class="u-pic">
                                    <i class="u-icon">
                                        <img svg-inline :src="getIcon('dps')" />
                                    </i>
                                </span>
                                <span class="u-features">
                                    <span class="u-name">DPS计算器</span>
                                    <span class="u-desc">全门派DPS计算器</span>
                                </span>
                            </a>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div class="u-item">
                            <a href="/bbs/#/collection" target="_blank">
                                <span class="u-pic">
                                    <i class="u-icon">
                                        <img svg-inline :src="getIcon('collection')" />
                                    </i>
                                </span>
                                <span class="u-features">
                                    <span class="u-name">剑三小册</span>
                                    <span class="u-desc">文集小册</span>
                                </span>
                            </a>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div class="u-item">
                            <a href="/exam" target="_blank">
                                <span class="u-pic">
                                    <i class="u-icon">
                                        <img svg-inline :src="getIcon('exam')" />
                                    </i>
                                </span>
                                <span class="u-features">
                                    <span class="u-name">剑三考试</span>
                                    <span class="u-desc">趣味题目/试卷</span>
                                </span>
                            </a>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div class="u-item">
                            <a href="./meridians" target="_blank">
                                <span class="u-pic">
                                    <i class="u-icon">
                                        <img svg-inline :src="getIcon('meridians')" />
                                    </i>
                                </span>
                                <span class="u-features">
                                    <span class="u-name">经脉模拟器</span>
                                    <span class="u-desc">通你妹,原汁原味</span>
                                </span>
                            </a>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div class="u-item">
                            <a href="./translator" target="_blank">
                                <span class="u-pic">
                                    <i class="u-icon">
                                        <img svg-inline :src="getIcon('translator')" />
                                    </i>
                                </span>
                                <span class="u-features">
                                    <span class="u-name">繁简转换</span>
                                    <span class="u-desc">国际服剑三技能词库</span>
                                </span>
                            </a>
                        </div>
                    </el-col>
                </el-row>
            </div>

            <div class="m-app-index-block">
                <el-divider content-position="left"><i class="el-icon-box"></i> PVE·副本</el-divider>
                <el-row :gutter="20">
                    <el-col :span="6">
                        <div class="u-item">
                            <a href="/fb" target="_blank">
                                <span class="u-pic">
                                    <i class="u-icon">
                                        <img svg-inline :src="getIcon('fb')" />
                                    </i>
                                </span>
                                <span class="u-features">
                                    <span class="u-name">副本攻略</span>
                                    <span class="u-desc">开荒首发机制全解</span>
                                </span>
                            </a>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div class="u-item">
                            <a href="/rank" target="_blank">
                                <span class="u-pic">
                                    <i class="u-icon">
                                        <img svg-inline :src="getIcon('rank')" />
                                    </i>
                                </span>
                                <span class="u-features">
                                    <span class="u-name">秘境百强</span>
                                    <span class="u-desc">剑三秘境百强榜</span>
                                </span>
                            </a>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div class="u-item">
                            <a href="/team" target="_blank">
                                <span class="u-pic">
                                    <i class="u-icon">
                                        <img svg-inline :src="getIcon('team')" />
                                    </i>
                                </span>
                                <span class="u-features">
                                    <span class="u-name">团队平台</span>
                                    <span class="u-desc">团队管理/快照/排表</span>
                                </span>
                            </a>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div class="u-item">
                            <a href="/dbm" target="_blank" class="disabled">
                                <span class="u-pic">
                                    <i class="u-icon">
                                        <img svg-inline :src="getIcon('dbm')" />
                                    </i>
                                </span>
                                <span class="u-features">
                                    <span class="u-name">在线构建</span>
                                    <span class="u-desc">团控数据在线构建</span>
                                </span>
                            </a>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div class="u-item">
                            <a href="/fb/#/npc" target="_blank">
                                <span class="u-pic">
                                    <i class="u-icon">
                                        <img svg-inline :src="getIcon('fb-boss')" />
                                    </i>
                                </span>
                                <span class="u-features">
                                    <span class="u-name">首领数据</span>
                                    <span class="u-desc">BOSS属性一览</span>
                                </span>
                            </a>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div class="u-item">
                            <a href="/fb/#/skill" target="_blank">
                                <span class="u-pic">
                                    <i class="u-icon">
                                        <img svg-inline :src="getIcon('fb-skill')" />
                                    </i>
                                </span>
                                <span class="u-features">
                                    <span class="u-name">首领技能</span>
                                    <span class="u-desc">BOSS技能一览</span>
                                </span>
                            </a>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div class="u-item">
                            <a href="/fb/#/attr" target="_blank">
                                <span class="u-pic">
                                    <i class="u-icon">
                                        <img svg-inline :src="getIcon('fb-attr')" />
                                    </i>
                                </span>
                                <span class="u-features">
                                    <span class="u-name">特殊机制</span>
                                    <span class="u-desc">穿透/穿刺/贯体一览</span>
                                </span>
                            </a>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div class="u-item">
                            <a href="/fb/#/drop" target="_blank">
                                <span class="u-pic">
                                    <i class="u-icon">
                                        <img svg-inline :src="getIcon('fb-drop')" />
                                    </i>
                                </span>
                                <span class="u-features">
                                    <span class="u-name">副本掉落</span>
                                    <span class="u-desc">副本掉落大全</span>
                                </span>
                            </a>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div class="u-item">
                            <a href="/fb/#/gem" target="_blank">
                                <span class="u-pic">
                                    <i class="u-icon">
                                        <img svg-inline :src="getIcon('fb-gem')" />
                                    </i>
                                </span>
                                <span class="u-features">
                                    <span class="u-name">副本瑰石</span>
                                    <span class="u-desc">副本预测掉落,帮会瑰石大全</span>
                                </span>
                            </a>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div class="u-item">
                            <a href="/fb/#/story" target="_blank">
                                <span class="u-pic">
                                    <i class="u-icon">
                                        <img svg-inline :src="getIcon('fb-story')" />
                                    </i>
                                </span>
                                <span class="u-features">
                                    <span class="u-name">副本传说</span>
                                    <span class="u-desc">副本背景故事,官方资料</span>
                                </span>
                            </a>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div class="u-item">
                            <a href="/fb/#/map" target="_blank">
                                <span class="u-pic">
                                    <i class="u-icon">
                                        <img svg-inline :src="getIcon('fb-map')" />
                                    </i>
                                </span>
                                <span class="u-features">
                                    <span class="u-name">副本地图</span>
                                    <span class="u-desc">高清副本地图大全</span>
                                </span>
                            </a>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div class="u-item">
                            <a href="/battle" target="_blank" class="disabled">
                                <span class="u-pic">
                                    <i class="u-icon">
                                        <img svg-inline :src="getIcon('battle')" />
                                    </i>
                                </span>
                                <span class="u-features">
                                    <span class="u-name">战斗分析</span>
                                    <span class="u-desc">茗伊JCL首领战斗分析</span>
                                </span>
                            </a>
                        </div>
                    </el-col>
                </el-row>
            </div>

            <div class="m-app-index-block">
                <el-divider content-position="left"><i class="el-icon-box"></i> PVX·休闲</el-divider>
                <el-row :gutter="20">
                    <el-col :span="6">
                        <div class="u-item">
                            <a href="/cj" target="_blank">
                                <span class="u-pic">
                                    <i class="u-icon">
                                        <img svg-inline :src="getIcon('cj')" />
                                    </i>
                                </span>
                                <span class="u-features">
                                    <span class="u-name">成就百科</span>
                                    <span class="u-desc">最新最全成就百科</span>
                                </span>
                            </a>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div class="u-item">
                            <a href="/item" target="_blank">
                                <span class="u-pic">
                                    <i class="u-icon">
                                        <img svg-inline :src="getIcon('item')" />
                                    </i>
                                </span>
                                <span class="u-features">
                                    <span class="u-name">物品百科</span>
                                    <span class="u-desc">物品百科,全服交易行价格</span>
                                </span>
                            </a>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div class="u-item">
                            <a href="/quest" target="_blank">
                                <span class="u-pic">
                                    <i class="u-icon">
                                        <img svg-inline :src="getIcon('quest')" />
                                    </i>
                                </span>
                                <span class="u-features">
                                    <span class="u-name">任务百科</span>
                                    <span class="u-desc">任务与剧情全流程指南</span>
                                </span>
                            </a>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div class="u-item">
                            <a href="/knowledge" target="_blank">
                                <span class="u-pic">
                                    <i class="u-icon">
                                        <img svg-inline :src="getIcon('knowledge')" />
                                    </i>
                                </span>
                                <span class="u-features">
                                    <span class="u-name">通识百科</span>
                                    <span class="u-desc">剑三世界概念</span>
                                </span>
                            </a>
                        </div>
                    </el-col>

                    <el-col :span="6">
                        <div class="u-item">
                            <a href="https://j3cx.com/exam/" target="_blank">
                                <span class="u-pic">
                                    <i class="u-icon">
                                        <img svg-inline :src="getIcon('keju')" />
                                    </i>
                                </span>
                                <span class="u-features">
                                    <span class="u-name">科举答题</span>
                                    <span class="u-desc">最新剑三科举题库</span>
                                </span>
                            </a>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div class="u-item">
                            <a href="/book" target="_blank" class="disabled">
                                <span class="u-pic">
                                    <i class="u-icon">
                                        <img svg-inline :src="getIcon('knowledge')" />
                                    </i>
                                </span>
                                <span class="u-features">
                                    <span class="u-name">书籍大全</span>
                                    <span class="u-desc">我们都是读书人</span>
                                </span>
                            </a>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div class="u-item">
                            <a href="/book" target="_blank" class="disabled">
                                <span class="u-pic">
                                    <i class="u-icon">
                                        <img svg-inline :src="getIcon('knowledge')" />
                                    </i>
                                </span>
                                <span class="u-features">
                                    <span class="u-name">声望大全</span>
                                    <span class="u-desc">声望剧情党手册</span>
                                </span>
                            </a>
                        </div>
                    </el-col>
                    <el-col :span="6">
                    </el-col>

                    <el-col :span="6">
                        <div class="u-item">
                            <a href="/pet" target="_blank">
                                <span class="u-pic">
                                    <i class="u-icon">
                                        <img svg-inline :src="getIcon('pet')" />
                                    </i>
                                </span>
                                <span class="u-features">
                                    <span class="u-name">宠物大全</span>
                                    <span class="u-desc">宠物获取攻略</span>
                                </span>
                            </a>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div class="u-item">
                            <a href="/horse" target="_blank" class="disabled">
                                <span class="u-pic">
                                    <i class="u-icon">
                                        <img svg-inline :src="getIcon('pet')" />
                                    </i>
                                </span>
                                <span class="u-features">
                                    <span class="u-name">坐骑大全</span>
                                    <span class="u-desc">坐骑属性一览</span>
                                </span>
                            </a>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div class="u-item">
                            <a href="/adventure" target="_blank">
                                <span class="u-pic">
                                    <i class="u-icon">
                                        <img svg-inline :src="getIcon('qiyu')" />
                                    </i>
                                </span>
                                <span class="u-features">
                                    <span class="u-name">奇遇大全</span>
                                    <span class="u-desc">奇遇触发一览</span>
                                </span>
                            </a>
                        </div>
                    </el-col>

                    <el-col :span="6">
                        <div class="u-item">
                            <a href="https://j3cx.com/serendipity" target="_blank">
                                <span class="u-pic">
                                    <i class="u-icon">
                                        <img svg-inline :src="getIcon('qiyu')" />
                                    </i>
                                </span>
                                <span class="u-features">
                                    <span class="u-name">奇遇查询</span>
                                    <span class="u-desc">全服奇遇查询</span>
                                </span>
                            </a>
                        </div>
                    </el-col>

                    <el-col :span="6">
                        <div class="u-item">
                            <a href="/furniture" target="_blank">
                                <span class="u-pic">
                                    <i class="u-icon">
                                        <img svg-inline :src="getIcon('furniture')" />
                                    </i>
                                </span>
                                <span class="u-features">
                                    <span class="u-name">家具大全</span>
                                    <span class="u-desc">家具数据大全</span>
                                </span>
                            </a>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div class="u-item">
                            <a href="/homeland/flower" target="_blank">
                                <span class="u-pic">
                                    <i class="u-icon">
                                        <img svg-inline :src="getIcon('flower')" />
                                    </i>
                                </span>
                                <span class="u-features">
                                    <span class="u-name">家园花价</span>
                                    <span class="u-desc">全服花价数据</span>
                                </span>
                            </a>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div class="u-item">
                            <a href="/homeland/maps" target="_blank">
                                <span class="u-pic">
                                    <i class="u-icon">
                                        <img svg-inline :src="getIcon('blueprint')" />
                                    </i>
                                </span>
                                <span class="u-features">
                                    <span class="u-name">家园指南</span>
                                    <span class="u-desc">家园地图与攻略</span>
                                </span>
                            </a>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div class="u-item">
                            <a href="https://jx3.xoyo.com/zt/2020/09/24/blueprint/#/" target="_blank">
                                <span class="u-pic">
                                    <i class="u-icon">
                                        <img svg-inline :src="getIcon('blueprint')" />
                                    </i>
                                </span>
                                <span class="u-features">
                                    <span class="u-name">蓝图数据</span>
                                    <span class="u-desc">家园蓝图下载</span>
                                </span>
                            </a>
                        </div>
                    </el-col>

                    <el-col :span="6">
                        <div class="u-item">
                            <a href="/share" target="_blank">
                                <span class="u-pic">
                                    <i class="u-icon">
                                        <img svg-inline :src="getIcon('share')" />
                                    </i>
                                </span>
                                <span class="u-features">
                                    <span class="u-name">捏脸数据</span>
                                    <span class="u-desc">捏脸数据下载</span>
                                </span>
                            </a>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div class="u-item">
                            <a href="/share/facedata" target="_blank">
                                <span class="u-pic">
                                    <i class="u-icon">
                                        <img svg-inline :src="getIcon('facedata')" />
                                    </i>
                                </span>
                                <span class="u-features">
                                    <span class="u-name">妆容解析</span>
                                    <span class="u-desc">捏脸数据解析,支持双端</span>
                                </span>
                            </a>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div class="u-item">
                            <a href="/exterior" target="_blank" class="disabled">
                                <span class="u-pic">
                                    <i class="u-icon">
                                        <img svg-inline :src="getIcon('facedata')" />
                                    </i>
                                </span>
                                <span class="u-features">
                                    <span class="u-name">外观大全</span>
                                    <span class="u-desc">全外观预览</span>
                                </span>
                            </a>
                        </div>
                    </el-col>
                    <el-col :span="6">
                    </el-col>

                    <el-col :span="6">
                        <div class="u-item">
                            <a href="/pvg/manufacture" target="_blank">
                                <span class="u-pic">
                                    <i class="u-icon">
                                        <img svg-inline :src="getIcon('manufacture')" />
                                    </i>
                                </span>
                                <span class="u-features">
                                    <span class="u-name">技艺助手</span>
                                    <span class="u-desc">生活技艺模拟器</span>
                                </span>
                            </a>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div class="u-item">
                            <a href="/item/#/plan_list" target="_blank">
                                <span class="u-pic">
                                    <i class="u-icon">
                                        <img svg-inline :src="getIcon('item_plan')" />
                                    </i>
                                </span>
                                <span class="u-features">
                                    <span class="u-name">物品清单</span>
                                    <span class="u-desc">自定义清单物品清单</span>
                                </span>
                            </a>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div class="u-item">
                            <a href="./servers" target="_blank">
                                <span class="u-pic">
                                    <i class="u-icon">
                                        <img svg-inline :src="getIcon('servers')" />
                                    </i>
                                </span>
                                <span class="u-features">
                                    <span class="u-name">开服监控</span>
                                    <span class="u-desc">剑三服务器开服监控</span>
                                </span>
                            </a>
                        </div>
                    </el-col>

                    <el-col :span="6">
                        <div class="u-item">
                            <a href="./price" target="_blank">
                                <span class="u-pic">
                                    <i class="u-icon">
                                        <img svg-inline :src="getIcon('price')" />
                                    </i>
                                </span>
                                <span class="u-features">
                                    <span class="u-name">全服金价</span>
                                    <span class="u-desc">全服金价走势</span>
                                </span>
                            </a>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div class="u-item">
                            <a href="https://jx3.seasunwbl.com/buyer?t=coin" target="_blank">
                                <span class="u-pic">
                                    <i class="u-icon">
                                        <img svg-inline :src="getIcon('wbl')" />
                                    </i>
                                </span>
                                <span class="u-features">
                                    <span class="u-name">万宝楼</span>
                                    <span class="u-desc">官方交易平台（重制）</span>
                                </span>
                            </a>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div class="u-item">
                            <a href="https://jx3yq.seasunwbl.com/buyer?t=coin" target="_blank">
                                <span class="u-pic">
                                    <i class="u-icon">
                                        <img svg-inline :src="getIcon('wbl')" />
                                    </i>
                                </span>
                                <span class="u-features">
                                    <span class="u-name">万宝楼</span>
                                    <span class="u-desc">官方交易平台（缘起）</span>
                                </span>
                            </a>
                        </div>
                    </el-col>

                </el-row>
            </div>

            <div class="m-app-index-block">
                <el-divider content-position="left"><i class="el-icon-box"></i> PVP·竞技</el-divider>
                <el-row :gutter="20">
                    <el-col :span="6">
                        <div class="u-item">
                            <a href="/pvp/sandbox" target="_blank">
                                <span class="u-pic">
                                    <i class="u-icon">
                                        <img svg-inline :src="getIcon('sandbox')" />
                                    </i>
                                </span>
                                <span class="u-features">
                                    <span class="u-name">沙盘查询</span>
                                    <span class="u-desc">全服攻防沙盘</span>
                                </span>
                            </a>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div class="u-item">
                            <a href="/battle" target="_blank" class="disabled" >
                                <span class="u-pic">
                                    <i class="u-icon">
                                        <img svg-inline :src="getIcon('battle')" />
                                    </i>
                                </span>
                                <span class="u-features">
                                    <span class="u-name">战斗分析</span>
                                    <span class="u-desc">官方战斗统计PVP分析</span>
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
import { __imgPath } from "@jx3box/jx3box-common/data/jx3box.json";
export default {
    name: "App",
    data: function() {
        return {};
    },
    computed: {},
    methods: {
        getIcon(key) {
            // return `/logos/${key}.svg`;
            return __imgPath + "image/box/" + key + ".svg";
        },
    },
    filters: {},
    mounted: function() {},
    components: {
    },
};
</script>

<style lang="less">
@import "./assets/css/index.less";
</style>
