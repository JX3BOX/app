<template>
    <div id="app">
        <Header></Header>
        <Breadcrumb
            name="经脉模拟器"
            slug="meridians"
            root="/meridians"
            :feedbackEnable="true"
            :crumbEnable="false"
        >
            <img slot="logo" svg-inline src="../../assets/img/logos/meridians.svg" />
        </Breadcrumb>
        <LeftSidebar :open="false">
            <Nav />
        </LeftSidebar>
        <Main :withoutRight="true" :withoutLeft="true">
            <div class="m-meridians">
                <header class="m-meridians-header">
                    <h1 class="m-meridians-title">经脉模拟器</h1>
                    <div class="m-meridians-desc">
                        <span class="u-meta">
                            <em>❤️ 使用小贴士</em>
                            <b>左键点通节点、右键回退</b>
                        </span>
                        <a class="u-link" href="https://jq.qq.com/?_wv=1027&k=s6eiK59S" target="_blank"><span>【怀旧服交流群】</span><b>590349918</b></a>
                    </div>
                </header>
                <div class="m-meridians-content">
                    <div class="m-meridians-operation" @contextmenu.prevent="() => {return false}">
                        <detail :detailData="detailData"></detail>
                        <div class="left">
                            <div class="qixue-bg"></div>
                            <div
                                v-for="(item, index) in zhumai"
                                :key="item.id"
                                :class="['mai', item.class, item.nowLevel > 0 ? 'mai_act' : '']"
                            >
                                <div :class="'ap ap' + item.id">
                                    <h5>{{item.name}}</h5>
                                    <em :class="'level' + item.nowLevel">0</em>
                                    <a
                                        href="javascript:void(0)"
                                        :class="item.id === hover ? 'jm_mouse' : item.nowLevel === item.maxLevel ? 'jm_full' : item.requireSuccess ? 'jm_opened' :  ''"
                                        ref="left"
                                        @click="leftAction(item)"
                                        @contextmenu.prevent="leftReduce(item)"
                                        @mouseover="leftDetail(item, index)"
                                        @mouseout="leftOutDetail"
                                    ></a>
                                </div>
                            </div>
                            <a
                                v-for="(item, index) in mai"
                                :key="index"
                                @click="switchJingmai(item)"
                                @mouseover="maiDetail(item, index)"
                                @mouseout="maiOutDetail"
                                ref="mai"
                                :class="`state${item.state} idx-ap idx-ap-act ${item.class}`"
                                href="javascript:void(0)"
                            >{{item.title}}</a>
                        </div>
                        <div class="right">
                            <div class="jinmai home" v-if="previewType == 0"></div>
                            <!-- 任脉 玉堂 -->
                            <yutang
                                v-if="previewType == 1"
                                ref="jingmai"
                                @showDetail="showDetail"
                                @outDetail="outDetail"
                                @action="action"
                                @reduce="reduce"
                            ></yutang>
                            <!-- 任脉 曲骨 -->
                            <qugu
                                v-if="previewType == 2"
                                ref="jingmai"
                                @showDetail="showDetail"
                                @outDetail="outDetail"
                                @action="action"
                                @reduce="reduce"
                            ></qugu>
                            <!-- 督脉 悬枢 -->
                            <xuanshu
                                v-if="previewType == 3"
                                ref="jingmai"
                                @showDetail="showDetail"
                                @outDetail="outDetail"
                                @action="action"
                                @reduce="reduce"
                            ></xuanshu>
                            <!-- 督脉 命门 -->
                            <mingmen
                                v-if="previewType == 4"
                                ref="jingmai"
                                @showDetail="showDetail"
                                @outDetail="outDetail"
                                @action="action"
                                @reduce="reduce"
                            ></mingmen>
                            <!-- 督脉 腰俞 -->
                            <yaoshu
                                v-if="previewType == 5"
                                ref="jingmai"
                                @showDetail="showDetail"
                                @outDetail="outDetail"
                                @action="action"
                                @reduce="reduce"
                            ></yaoshu>
                            <!-- 带脉 天冲 -->
                            <tianchong
                                v-if="previewType == 6"
                                ref="jingmai"
                                @showDetail="showDetail"
                                @outDetail="outDetail"
                                @action="action"
                                @reduce="reduce"
                            ></tianchong>
                            <!-- 带脉 维道 -->
                            <weidao
                                v-if="previewType == 7"
                                ref="jingmai"
                                @showDetail="showDetail"
                                @outDetail="outDetail"
                                @action="action"
                                @reduce="reduce"
                            ></weidao>
                            <!-- 冲脉 大赫 -->
                            <dahe
                                v-if="previewType == 8"
                                ref="jingmai"
                                @showDetail="showDetail"
                                @outDetail="outDetail"
                                @action="action"
                                @reduce="reduce"
                            ></dahe>
                            <!-- 冲脉 横骨 -->
                            <henggu
                                v-if="previewType == 9"
                                ref="jingmai"
                                @showDetail="showDetail"
                                @outDetail="outDetail"
                                @action="action"
                                @reduce="reduce"
                            ></henggu>
                            <!-- 奇穴 -->
                            <qixue
                                v-if="previewType == 10"
                                ref="jingmai"
                                @showDetail="showDetail"
                                @outDetail="outDetail"
                                @action="action"
                                @reduce="reduce"
                            ></qixue>
                        </div>
                        <div class="dantian">{{dantian}}/100000</div>
                    </div>
                    <div class="m-meridians-preview">
                        <div class="content">
                            <p v-for="(item, index) of preview" :key="index">{{item}}</p>
                        </div>
                        <div class="reset" @click="reset">重置经脉点数</div>
                    </div>
                </div>
                <footer class="m-meridians-footer">
                    <el-checkbox v-model="isEfficient">下极俞<span>(消耗修为减少10%)</span></el-checkbox>
                </footer>
                <Footer class="meridians_footer"></Footer>
            </div>
        </Main>
    </div>
</template>

<script>
import Nav from "@/components/Nav.vue";
import Yutang from "./compnents/yutang";
import Qugu from "./compnents/qugu";
import Detail from "./compnents/detail";
import Xuanshu from "./compnents/xuanshu";
import Mingmen from "./compnents/mingmen";
import Yaoshu from "./compnents/yaoshu";
import Tianchong from "./compnents/tianchong";
import Weidao from "./compnents/weidao";
import Dahe from "./compnents/dahe";
import Henggu from "./compnents/henggu";
import Qixue from "./compnents/qixue";

import constDefine from "./data/v1";
import store from "../../store";

export default {
    name: "Meridians",
    data: function () {
        return {
            zhumai: [
                {
                    name: "任脉·会阴",
                    id: "60",
                    class: "renmai",
                    requireSuccess: true,
                },
                { name: "督脉·长强", id: "91", class: "dumai" },
                { name: "带脉·五枢", id: "118", class: "daimai" },
                { name: "冲脉·气冲", id: "156", class: "chongmai" },
            ],
            mai: [
                {
                    name: "任脉分之一：玉堂",
                    content: "修行方向：基础能力",
                    title: "玉堂",
                    class: "idx-yutang idx-ap1",
                    type: 1,
                    state: 0,
                },
                {
                    name: "任脉分之二：曲骨",
                    content: "修行方向：基础能力",
                    title: "曲骨",
                    class: "idx-qugu idx-ap2",
                    type: 2,
                    state: 0,
                },
                {
                    name: "督脉分支二：悬枢",
                    content: "修行方向：辅助能力",
                    title: "悬枢",
                    class: "idx-xuanshu idx-ap2",
                    type: 3,
                    state: 0,
                },
                {
                    name: "督脉分支一：命门",
                    content: "修行方向：辅助能力",
                    title: "命门",
                    class: "idx-mingmen idx-ap1",
                    type: 4,
                    state: 0,
                },
                {
                    name: "督脉分之三：腰俞",
                    content: "修行方向：辅助能力",
                    title: "腰俞",
                    class: "idx-yaoshu idx-ap3",
                    type: 5,
                    state: 0,
                },
                {
                    name: "带脉分之一：天冲",
                    content: "修行方向：外功能力",
                    title: "天冲",
                    class: "idx-tianchong idx-ap1",
                    type: 6,
                    state: 0,
                },
                {
                    name: "带脉分之二：维道",
                    content: "修行方向：外功能力",
                    title: "维道",
                    class: "idx-weidao idx-ap3",
                    type: 7,
                    state: 0,
                },
                {
                    name: "冲脉分之二：大赫",
                    content: "修行方向：内功能力",
                    title: "大赫",
                    class: "idx-dahe idx-ap3",
                    type: 8,
                    state: 0,
                },
                {
                    name: "冲脉分之一：横骨",
                    content: "修行方向：内功能力",
                    title: "横骨",
                    class: "idx-henggu idx-ap1",
                    type: 9,
                    state: 0,
                },
                {
                    name: "经脉寰通：奇穴",
                    content: "修行方向：综合能力",
                    content1:
                        "此奇门绝穴，可贯通神形。达天人之至境，得无双之绝学。",
                    class: "idx-qixue idx-ap3",
                    title: "奇穴",
                    type: 10,
                    state: 0,
                },
            ],
            detailData: {},
            previewType: 0,
            float: {},
            define: constDefine,
            mouseCoor: {},
            hover: "",
            isEfficient:false
        };
    },
    components: {
        Nav,
        Yutang,
        Qugu,
        Detail,
        Xuanshu,
        Mingmen,
        Yaoshu,
        Tianchong,
        Weidao,
        Dahe,
        Henggu,
        Qixue,
    },
    computed: {
        dantian() {
            let select = store.state.selectMeridians;
            let num = 0;
            select.forEach((item) => {
                for (let i = 0; i < item.nowLevel; i++) {
                    num += item.requirePower[i];
                }
            });
            return num;
        },
        preview() {
            let select = store.state.selectMeridians;
            let desc = [];
            select.forEach((item) => {
                desc.push(item.desc[item.nowLevel - 1]);
            });
            return desc;
        },
    },
    created() {
        this.init();
        this.updateZhumai();
    },
    methods: {
        // 初始化
        init() {
            let define = JSON.parse(JSON.stringify(this.define));
            define.forEach((item) => {
                if (item.requireNode.length > 0) {
                    item.requireNode = item.requireNode.reduce(function (a, b) {
                        return a.concat(b);
                    });
                }
                if (item.name === "任脉·会阴") {
                    item.requireSuccess = true;
                } else {
                    item.requireSuccess = false;
                }
                item.nowLevel = 0;
            });
            this.define = define;
            store.commit("setDefine", define);

            let zhumai = JSON.parse(JSON.stringify(this.zhumai));
            zhumai.forEach((item) => {
                for (let def of define) {
                    if (item.name === def.name) {
                        item = Object.assign(item, def);
                    }
                }
            });
            this.zhumai = zhumai;
        },
        // 切换经脉
        switchJingmai(item) {
            let mai = JSON.parse(JSON.stringify(this.mai));
            if (item.state !== 2 && item.state !== 4) {
                mai.forEach((element) => {
                    if (element.state === 0 || element.state === 2) {
                        element.state = 0;
                    } else {
                        element.state = 3;
                    }
                    if (element.name === item.name) {
                        if (item.state === 0) {
                            element.state = 2;
                        } else if (item.state === 3) {
                            element.state = 4;
                        }
                    }
                });
                this.mai = mai;
                this.previewType = item.type;
            }
        },
        // 左侧详情
        leftDetail(item, index) {
            if (item.requireSuccess && item.nowLevel < item.maxLevel) {
                this.hover = item.id;
            }
            let style = window.getComputedStyle(this.$refs.left[index], null);
            let data = {};
            if (item.name === "任脉·会阴") {
                data.left = parseInt(style.left) + 134;
                data.top = parseInt(style.top) + 148;
            } else if (item.name === "督脉·长强") {
                data.left = parseInt(style.left) + 229;
                data.top = parseInt(style.top) + 196;
            } else if (item.name === "带脉·五枢") {
                data.left = parseInt(style.left) + 119;
                data.top = parseInt(style.top) + 279;
            } else if (item.name === "冲脉·气冲") {
                data.left = parseInt(style.left) + 236;
                data.top = parseInt(style.top) + 273;
            }
            data = Object.assign(item, data);
            this.mouseCoor = data;
            this.showDetail(data);
        },
        leftOutDetail() {
            this.hover = "";
            this.detailData = { name: "" };
        },
        leftAction(item) {
            this.action(item, "left");
            this.updataMai();
        },
        leftReduce(item) {
            this.reduce(item, "left");
            this.updataMai();
        },
        updataMai() {
            let select = store.state.selectMeridians;
            let mai = JSON.parse(JSON.stringify(this.mai));
            select.forEach((item) => {
                if (item.name === "任脉·会阴") {
                    if (item.nowLevel >= 2) {
                        mai[0].state = 3;
                        mai[1].state = 3;
                        if (this.previewType === 1) mai[0].state = 4;
                        if (this.previewType === 2) mai[1].state = 4;
                    } else {
                        mai[0].state = 0;
                        mai[1].state = 0;
                        if (this.previewType === 1) mai[0].state = 2;
                        if (this.previewType === 2) mai[1].state = 2;
                    }
                } else if (item.name === "督脉·长强") {
                    if (item.nowLevel >= 2) {
                        mai[2].state = 3;
                        mai[3].state = 3;
                        mai[4].state = 3;
                        if (this.previewType === 3) mai[2].state = 4;
                        if (this.previewType === 4) mai[3].state = 4;
                        if (this.previewType === 5) mai[4].state = 4;
                    } else {
                        mai[2].state = 0;
                        mai[3].state = 0;
                        mai[4].state = 0;
                        if (this.previewType === 3) mai[2].state = 2;
                        if (this.previewType === 4) mai[3].state = 2;
                        if (this.previewType === 5) mai[4].state = 2;
                    }
                } else if (item.name === "带脉·五枢") {
                    if (item.nowLevel >= 2) {
                        mai[5].state = 3;
                        mai[6].state = 3;
                        if (this.previewType === 6) mai[5].state = 4;
                        if (this.previewType === 7) mai[6].state = 4;
                    } else {
                        mai[5].state = 0;
                        mai[6].state = 0;
                        if (this.previewType === 6) mai[5].state = 2;
                        if (this.previewType === 7) mai[6].state = 2;
                    }
                } else if (item.name === "冲脉·气冲") {
                    if (item.nowLevel >= 2) {
                        mai[7].state = 3;
                        mai[8].state = 3;
                        if (this.previewType === 8) mai[7].state = 4;
                        if (this.previewType === 9) mai[8].state = 4;
                    } else {
                        mai[7].state = 0;
                        mai[8].state = 0;
                        if (this.previewType === 8) mai[7].state = 2;
                        if (this.previewType === 9) mai[8].state = 2;
                    }
                }
            });
            this.mai = mai;
        },
        // 左侧脉详情
        maiDetail(item, index) {
            let style = window.getComputedStyle(this.$refs.mai[index], null);
            let data = {};
            data.left = parseInt(style.left) + 80;
            data.top = parseInt(style.top) + 70;
            this.detailData = Object.assign(data, item);
        },
        maiOutDetail() {
            this.detailData = { name: "" };
        },

        // 组件详情
        showDetail(data) {
            let select = store.state.selectMeridians;
            let i = 0;
            select.forEach((item) => {
                if (item.name === data.name) {
                    // 已点经脉中有
                    this.detailData = item;
                } else {
                    i++;
                }
            });
            if (i === select.length) {
                // 已点经脉中没有
                this.define.forEach((item) => {
                    if (item.name === data.name) {
                        let detailData = {};
                        detailData = item;
                        detailData.left = data.left;
                        detailData.top = data.top;
                        detailData.nowLevel = 0;
                        this.detailData = Object.assign({}, detailData);
                    }
                });
            }
        },
        outDetail() {
            this.detailData = { name: "" };
        },
        action(data, type) {
            if (data.requirePower[data.nowLevel] + this.dantian <= 100000) {
                let select = store.state.selectMeridians;
                let i = 0;
                select.forEach((item) => {
                    if (item.name === data.name) {
                        // 已点经脉中有
                        if (item.nowLevel < item.maxLevel) {
                            item.nowLevel++;
                            this.detailData = Object.assign({}, item);
                            store.commit("setSelect", select);
                            this.jurisdiction();
                            // 判断右侧奇穴是否处于打开状态
                            if (this.previewType !== 0) {
                                this.$refs.jingmai.init();
                            }
                            if (type === "left") {
                                this.updateZhumai();
                                if (item.nowLevel === item.maxLevel) {
                                    this.hover = "";
                                }
                            } else {
                                if (item.nowLevel === item.maxLevel) {
                                    this.$refs.jingmai.setHover();
                                }
                            }
                        }
                    } else {
                        i++;
                    }
                });
                if (i === select.length) {
                    // 已点经脉中没有
                    let define = store.state.defineMeridians;
                    define.forEach((item) => {
                        if (item.name === data.name) {
                            if (item.requireSuccess) {
                                let detailData = {};
                                detailData = item;
                                detailData.requireSuccess = true;
                                detailData.left = data.left;
                                detailData.top = data.top;
                                detailData.nowLevel = 1;
                                this.detailData = Object.assign({}, detailData);
                                select.push(detailData);
                                store.commit("setSelect", select);
                                this.jurisdiction();
                                // 判断是否更新右边
                                if (this.previewType !== 0) {
                                    this.$refs.jingmai.init();
                                }
                                // 更新主脉
                                if (type === "left") {
                                    this.updateZhumai();
                                }
                                // 判断主脉条件是否满足
                                if (data.name === "任脉·阴交") {
                                    this.zhumai[3].requireSuccess = true;
                                }
                                if (data.name === "任脉·石门") {
                                    this.zhumai[2].requireSuccess = true;
                                }
                                if (data.name === "任脉·关元") {
                                    this.zhumai[1].requireSuccess = true;
                                }
                            }
                        }
                    });
                }
            }
        },
        reduce(data, type) {
            if (data.nowLevel > 0) {
                let select = store.state.selectMeridians;
                let nodeNum = 0;
                let satisfyNum = 0;
                select.forEach((item) => {
                    for (let node of item.requireNode) {
                        if (node.name === data.name) {
                            // 已选奇穴中存在相关权限待验证
                            nodeNum++;
                            if (node.level < data.nowLevel) {
                                // 判断关联权限的level
                                satisfyNum++;
                            }
                        }
                    }
                });
                // 判断是否全部满足条件
                if (nodeNum === satisfyNum) {
                    select.forEach((item, index) => {
                        if (item.name === data.name) {
                            item.nowLevel--;
                            if (item.nowLevel === 0) {
                                select.splice(index, 1);
                            }
                            this.detailData = Object.assign({}, item);
                            store.commit("setSelect", select);
                            this.jurisdiction();
                            // 判断右侧奇穴是否处于打开状态
                            if (this.previewType !== 0) {
                                this.$refs.jingmai.init();
                            }
                            if (type === "left") {
                                this.updateZhumai();
                            }
                        }
                    });
                }
            }
        },
        // 更新主脉
        updateZhumai() {
            let define = store.state.defineMeridians;
            let zhumai = JSON.parse(JSON.stringify(this.zhumai));
            zhumai.forEach((item) => {
                for (let def of define) {
                    if (item.name === def.name) {
                        item = Object.assign(item, def);
                    }
                }
            });
            this.zhumai = zhumai;
        },
        // 更新权限
        jurisdiction() {
            let define = store.state.defineMeridians;
            let select = store.state.selectMeridians;
            define.forEach((def) => {
                let i = 0;
                for (let node of def.requireNode) {
                    for (let sel of select) {
                        if (node.name === sel.name) {
                            if (node.level <= sel.nowLevel) {
                                i++;
                                node.state = true;
                            } else {
                                node.state = false;
                            }
                        }
                    }
                }
                def.requireSuccess = i === def.requireNode.length;
            });
            store.commit("setDefine", define);
        },
        // 重置经脉
        reset() {
            store.commit("setDefine", constDefine);
            store.commit("setSelect", []);
            this.define = constDefine;
            this.init();
            this.$refs.jingmai.init();
            let mai = JSON.parse(JSON.stringify(this.mai));
            mai.forEach((item) => {
                item.state = 0;
            });
            this.mai = mai;
        },
    },
};
</script>

<style lang="less">
@import "../../assets/css/meridians.less";
</style>
