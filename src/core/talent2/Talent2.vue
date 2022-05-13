<template>
    <div id="app">
        <Header></Header>
        <Breadcrumb name="镇派模拟器" slug="talent2" root="/app/talent2" :feedbackEnable="true" :crumbEnable="true">
            <img slot="logo" svg-inline :src="getIcon('talent2')" />
            <div class="m-info"></div>
        </Breadcrumb>
        <LeftSidebar :open="false">
            <Nav />
        </LeftSidebar>
        <Main :withoutRight="true" :withoutLeft="true">
            <div class="m-talent m-talent2">
                <div class="m-talent-header">
                    <h1 class="m-talent-title">镇派模拟器</h1>
                    <div class="m-talent-panel">
                        <div class="m-talent-version">
                            <span class="u-label">选择版本</span>
                            <el-select v-model="version" placeholder="请选择游戏版本" @change="reload">
                                <el-option v-for="item in versions" :key="item.version" :label="item.name" :value="item.version"></el-option>
                            </el-select>
                        </div>
                        <div class="u-toolbar" v-if="isLogin">
                            <el-button type="primary" @click="drawer = true" icon="el-icon-setting" size="small">我的预设</el-button>
                        </div>
                    </div>
                </div>
                <div class="m-talent-wrapper">
                    <h2 class="m-talent-subtitle">选择心法</h2>
                    <div class="m-talent-xf">
                        <el-radio v-for="(item, i) in xfMaps" v-model="xf" :label="item.name" :key="i" @change="reload" v-show="isOrigin(item)">
                            <img class="u-pic" :src="item.id | xficon" :alt="item.name" />
                            <span class="u-txt">{{ item.name }}</span>
                        </el-radio>
                    </div>
                    <h2 class="m-talent-subtitle">配置镇派</h2>
                    <div class="m-talent2-box">
                        <div class="m-talent2-main-title">镇派经脉模拟器</div>
                        <template v-if="xf">
                            <div class="m-talent2-surplus" :class="[total - totalCount > 0 ? '' : 'm-talent2-surplus-empty']">
                                剩余点数 :
                                <span>{{ surplus }}</span>
                            </div>
                            <div class="m-talent2-main">
                                <!-- LEFT -->
                                <div class="m-talent2-left">
                                    <div
                                        class="m-talent2-content"
                                        :style="{
                                            'background-image': xf ? `url(${talentBg('left', 1)})` : '',
                                        }"
                                    >
                                        <div class="m-talent2-title">
                                            <img class="m-talent2-xf-icon" :src="xfContent[0] | xficon" />
                                            <span class="m-talent2-title-count">{{ lCount }}</span>
                                            <span class="m-talent2-title-name">{{ l_name }}</span>
                                        </div>
                                        <div class="m-talent2-content-row" v-for="(row, index) in talentContent.left" :key="'l' + index">
                                            <template v-for="(item, i) in row">
                                                <div
                                                    v-if="item"
                                                    class=" m-talent2-content-item"
                                                    :class="[
                                                        {
                                                            'm-talent2-content-item-skill': item.type === 'skill',
                                                        },
                                                        canOperate(index, 'left') ? '' : 'm-talent2-content-item-disabled',
                                                        item.pretab ? 'm-talent2-pretab' : '',
                                                    ]"
                                                    :key="i"
                                                    @mouseover="$set(item, 'on', true)"
                                                    @mouseleave="$set(item, 'on', false)"
                                                >
                                                    <div
                                                        @click="leftTalentAdd(item, index, i)"
                                                        @click.right.prevent="leftTalentDecrease(index, i)"
                                                        :class="[
                                                            !canLeftItemOperate(index, i) ? (item.type === 'skill' ? 'm-talent2-skill-unselected' : 'm-talent2-unselected') : 'm-talent2-selected',
                                                            item.type === 'skill' ? '' : 'm-talent2-talent',
                                                            !surplus && !Number(l_data[index][i]) ? (item.type === 'skill' ? 'm-talent2-skill-unselected' : 'm-talent2-unselected') : '',
                                                        ]"
                                                    >
                                                        <!-- HAS PARENT -->
                                                        <span
                                                            v-if="item.pretab && !isLeftParentAdd(index, i) && canLeftItemOperate(index, i)"
                                                            :class="item.type === 'skill' ? 'is-add-skill' : 'is-add'"
                                                        ></span>
                                                        <!-- TOTAL ZERO -->
                                                        <span v-if="!surplus && !Number(l_data[index][i])" :class="item.type === 'skill' ? 'is-add-skill' : 'is-add'"></span>

                                                        <img
                                                            class="talent-img"
                                                            :class="{'skill-img': item.type === 'skill',}"
                                                            :src="talentIcon(item.icon)"
                                                            :alt="item.name"
                                                        />
                                                    </div>
                                                    <!-- COUNT -->
                                                    <span
                                                        v-if="Number(l_data[index][i])"
                                                        class="m-talent2-content-item-count"
                                                        :class="[Number(l_data[index][i]) < item.max ? 'm-talent2-content-item-count-under' : '']"
                                                    >
                                                        {{ l_data[index][i] }}
                                                    </span>

                                                    <!-- DESC -->
                                                    <span class="m-talent2-pop" :class="item.on ? 'on' : ''">
                                                        <b class="m-talent2-name">
                                                            <span>
                                                                {{ item.name }}
                                                                <small class="u-talent2-id" v-if="item.id">(ID: {{ item.id }})</small>
                                                            </span>
                                                            <span class="m-talent2-number">
                                                                第{{ Number(l_data[index][i]) + "/" + item.max }}重
                                                            </span>
                                                        </b>
                                                        <!-- <b class="m-talent2-type">
                                                            {{ item.type === 'talent' ? '被动招式': '主动招式' }}
                                                        </b>-->
                                                        <span class=" m-talent2-desc">
                                                            {{ !Number(l_data[index][i]) || xf === "通用" ? item.desc[0] : item.desc[l_data[index][i] - 1] }}
                                                        </span>
                                                        <span
                                                            v-if="Number(l_data[index][i]) && Number(l_data[index][i]) < item.max"
                                                            class="m-talent2-desc-next"
                                                        >
                                                            <span
                                                                v-if="xf !== '通用'"
                                                                class="m-next-text"
                                                                >下一重：</span>
                                                            <span>
                                                                {{ item.desc[l_data[index][i]] }}
                                                            </span>
                                                        </span>
                                                        <span v-if="Number(l_data[index][i]) === item.max" class="m-max">该招式已练至最高境界</span>
                                                        <span
                                                            class="m-talent-retrogress"
                                                            v-if="Number(l_data[index][i])"
                                                            >右键点击遗忘</span
                                                        >
                                                    </span>
                                                </div>
                                                <div
                                                    v-else
                                                    class="m-talent2-content-item-empty"
                                                    :key="i"
                                                ></div>
                                            </template>
                                        </div>
                                    </div>
                                </div>

                                <!-- RIGHT -->
                                <div class="m-talent2-right">
                                    <div
                                        class="m-talent2-content"
                                        :style="{
                                            'background-image': xf ? `url(${talentBg('right', 1)})` : '',
                                        }"
                                    >
                                        <div class="m-talent2-title">
                                            <img class="m-talent2-xf-icon" :src="xfContent[1] | xficon" />
                                            <span class="m-talent2-title-count">{{ rCount }}</span>
                                            <span class="m-talent2-title-name">{{ r_name }}</span>
                                        </div>
                                        <div class="m-talent2-content-row" v-for="(row, index) in talentContent.right" :key="'r' + index">
                                            <template v-for="(item, i) in row">
                                                <div
                                                    v-if="item"
                                                    class="m-talent2-content-item"
                                                    :class="[
                                                        {
                                                            'm-talent2-content-item-skill': item.type === 'skill',
                                                        },
                                                        !canOperate(index, 'right') ? 'm-talent2-content-item-disabled' : '',
                                                        item.pretab ? 'm-talent2-pretab' : '',
                                                    ]"
                                                    :key="i"
                                                    @mouseover="$set(item, 'on', true)"
                                                    @mouseleave="$set(item, 'on', false)"
                                                >
                                                    <div
                                                        @click="rightTalentAdd(item, index, i)"
                                                        @click.right.prevent="rightTalentDecrease(index, i)"
                                                        :class="[
                                                            !canRightItemOperate(index, i) ? (item.type === 'skill' ? 'm-talent2-skill-unselected' : 'm-talent2-unselected') : 'm-talent2-selected',
                                                            item.type === 'skill' ? '' : 'm-talent2-talent',
                                                            !surplus && !Number(r_data[index][i]) ? (item.type === 'skill' ? 'm-talent2-skill-unselected' : 'm-talent2-unselected') : '',
                                                        ]"
                                                    >
                                                        <!-- HAS PARENT -->
                                                        <span
                                                            v-if="item.pretab && !isRightParentAdd(index, i) && canRightItemOperate(index, i)"
                                                            :class="item.type === 'skill' ? 'is-add-skill' : 'is-add'"
                                                        ></span>
                                                        <!-- TOTAL ZERO -->
                                                        <span v-if="!surplus && !Number(r_data[index][i])" :class="item.type === 'skill' ? 'is-add-skill' : 'is-add'"></span>

                                                        <img
                                                            class="talent-img"
                                                            :class="{
                                                                'skill-img': item.type === 'skill',
                                                            }"
                                                            :src="talentIcon(item.icon)"
                                                            :alt="item.name"
                                                        />
                                                    </div>
                                                    <!-- COUNT -->
                                                    <span
                                                        v-if="Number(r_data[index][i])"
                                                        class="m-talent2-content-item-count"
                                                        :class="[Number(r_data[index][i]) < item.max ? 'm-talent2-content-item-count-under' : '']"
                                                    >
                                                        {{ r_data[index][i] }}
                                                    </span>

                                                    <!-- DESC -->
                                                    <span class="m-talent2-pop" :class="item.on ? 'on' : ''">
                                                        <b class="m-talent2-name">
                                                            <span>
                                                                {{ item.name }}
                                                                <small class="u-talent2-id" v-if="item.id">(ID: {{ item.id }})</small>
                                                            </span>
                                                            <span class="m-talent2-number">
                                                                第{{ Number(r_data[index][i]) + "/" + item.max }}重
                                                            </span>
                                                        </b>
                                                        <!-- <b class="m-talent2-type">
                                                            {{ item.type === 'talent' ? '被动招式': '主动招式' }}
                                                        </b>-->
                                                        <span
                                                            class="m-talent2-desc"
                                                        >
                                                            {{ !Number(r_data[index][i]) || xf === "通用" ? item.desc[0] : item.desc[r_data[index][i] - 1] }}
                                                        </span>
                                                        <span
                                                            v-if="Number(r_data[index][i]) && Number(r_data[index][i]) < item.max"
                                                            class="m-talent2-desc-next"
                                                        >
                                                            <span
                                                                v-if="xf !== '通用'"
                                                                class="m-next-text"
                                                                >下一重：</span
                                                            >
                                                            <span>
                                                                {{ item.desc[r_data[index][i]] }}
                                                            </span>
                                                        </span>
                                                        <span v-if="Number(r_data[index][i]) === item.max" class="m-max">该招式已练至最高境界</span>
                                                        <span
                                                            class="m-talent-retrogress"
                                                            v-if="Number(r_data[index][i])"
                                                            >右键点击遗忘</span
                                                        >
                                                    </span>
                                                </div>
                                                <div
                                                    v-else
                                                    class="m-talent2-content-item-empty"
                                                    :key="i"
                                                ></div>
                                            </template>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="m-talent2-actions">
                                <div class="rest-btn" :class="!totalCount ? 'm-talent2-actions-btn-disabled' : 'm-talent2-actions-btn'" @click="reload">
                                    重置
                                </div>
                            </div>
                        </template>
                    </div>
                    <h2 class="m-talent-subtitle">镇派编码</h2>
                    <div class="m-talent-code">
                        <el-input placeholder="粘贴编码亦可自动解析奇穴" v-model="code" @change="parseSchema">
                            <span slot="prepend" v-clipboard:copy="code" v-clipboard:success="onCopy" v-clipboard:error="onError" class="u-copy">
                                <i class="el-icon-document-copy"></i>
                                点击复制
                            </span>
                        </el-input>
                    </div>
                    <template v-if="isAdmin">
                        <h2 class="m-talent-subtitle">配装编码</h2>
                        <el-input placeholder="配装器编码" v-model="pzcode">
                            <span slot="prepend" v-clipboard:copy="pzcode" v-clipboard:success="onCopy" v-clipboard:error="onError" class="u-copy">
                                <i class="el-icon-document-copy"></i>
                                点击复制
                            </span>
                        </el-input>
                    </template>
                    <div class="m-talent-op" v-if="isLogin">
                        <el-button type="primary" :icon="currentSchema ? 'el-icon-check' : 'el-icon-document-add'" @click="save">{{ currentSchema ? "保存" : "保存为预设" }}</el-button>
                        <el-button v-if="isEditing" type="success" icon="el-icon-document-add" class="u-btn" @click="saveAs" plain>另存为</el-button>
                    </div>
                </div>

                <talent-drawer v-if="isLogin" :drawer="drawer" type="talent2" :client="client" @update-drawer="updateDrawer" @use="use"></talent-drawer>
            </div>
            <Footer></Footer>
        </Main>
    </div>
</template>

<script>
import Nav from "@/components/Nav.vue";
import xfmap from "@jx3box/jx3box-data/data/xf/xf.json";
import { __ossMirror, __imgPath, __ossRoot, __iconPath } from "@jx3box/jx3box-common/data/jx3box.json";
import { xfConfigs } from "@jx3box/jx3box-talent2/src/talent2.json";
import { defaultXf, defaultConfigs } from "@jx3box/jx3box-talent2/src/default.json";
import User from "@jx3box/jx3box-common/js/user";
import cloneDeep from "lodash/cloneDeep";
import talentDrawer from "../talent/talent_drawer.vue";
import { addTalent, putTalent } from "@/service/talent.js";
import { iconLink } from "@jx3box/jx3box-common/js/utils";
export default {
    name: "Talent2",
    data: function() {
        return {
            activeName: "common",
            xf: "",
            code: "0",
            pzcode: "",
            begin: "left",
            l_name: "山川",
            r_name: "日月",

            version: "",
            versions: [], // 版本列表
            talents: {}, // 镇派数据
            total: 0,
            l_data: ["0000", "0000", "0000", "0000", "0000", "0000"],
            r_data: ["0000", "0000", "0000", "0000", "0000", "0000"],
            series_open_need: 0,

            // 心法字符串对应的心法id，用于左右背景
            xfContent: [],
            // 心法镇派或技能
            talentContent: {
                left: [],
                right: [],
            },

            isLogin: User.isLogin(),
            isAdmin: false,
            showList: false,
            drawer: false,

            currentShemaName: "",
            currentSchema: "",

            // 初始化请求
            isInit: true,
        };
    },
    computed: {
        lCount: function() {
            return this.l_data.length
                ? this.l_data
                      .map((l) => l.split(""))
                      .flat()
                      .reduce((prev, current) => Number(prev) + Number(current))
                : 0;
        },
        rCount: function() {
            return this.r_data.length
                ? this.r_data
                      .map((l) => l.split(""))
                      .flat()
                      .reduce((prev, current) => Number(prev) + Number(current))
                : 0;
        },
        leftLastIndex: function() {
            let index = 0;
            for (let i = this.l_data.length - 1; i > 0; i--) {
                if (Number(this.l_data[i])) {
                    index = i;
                    break;
                }
            }
            return index;
        },
        rightLastIndex: function() {
            let index = 0;
            for (let i = this.r_data.length - 1; i > 0; i--) {
                if (Number(this.r_data[i])) {
                    index = i;
                    break;
                }
            }
            return index;
        },
        totalCount: function() {
            return this.lCount + this.rCount;
        },
        talent2Data: function() {
            return this.begin === "left" ? this.l_data.concat(this.r_data).join(",") : this.r_data.concat(this.l_data).join(",");
        },
        surplus: function() {
            return this.total - this.totalCount;
        },

        client: function() {
            return location.href.includes("origin") ? "origin" : "std";
        },
        mount: function() {
            return xfmap[this.xf]?.id;
        },
        params: function() {
            const { mount, version, code, pzcode, xf } = this;
            return {
                // 保证在正式服创建的镇派也是只在怀旧服使用
                client: "origin",
                type: "talent2",
                mount,
                version,
                code: JSON.parse(code),
                pzcode: JSON.parse(pzcode),
                xf,
            };
        },
        xfMaps: function() {
            const xfMaps = cloneDeep(xfmap);
            // delete xfMaps["山居剑意"];
            return xfMaps;
        },
        isEditing: function() {
            return !!this.currentSchema;
        },
    },
    methods: {
        updateDrawer: function(val) {
            this.drawer = val;
        },
        getIcon(key) {
            return __imgPath + "image/box/" + key + ".svg";
        },
        reload: function(schema) {
            this.currentSchema = "";
            this.l_data = ["0000", "0000", "0000", "0000", "0000", "0000"];
            this.r_data = ["0000", "0000", "0000", "0000", "0000", "0000"];
        },
        reset: function() {},
        // 生成code
        renderCode: function() {
            const { version, xf, talent2Data, l_data, r_data, talentContent } = this;
            const _code = {
                version,
                xf,
                sq: talent2Data,
            };
            this.code = JSON.stringify(_code);

            const _pzcode = [];

            l_data.forEach((l, lIndex) => {
                const leftCode = l.split("").map((c) => parseInt(c));

                leftCode.forEach((code, codeIndex) => {
                    if (code) {
                        const talent = talentContent.left[lIndex][codeIndex];
                        const _talent = {
                            id: talent.id,
                            icon: talent.icon,
                            level: code,
                            name: talent.name,
                        };

                        _pzcode.push(_talent);
                    }
                });
            });

            r_data.forEach((r, rIndex) => {
                const rightCode = r.split("").map((c) => parseInt(c));

                rightCode.forEach((code, codeIndex) => {
                    if (code) {
                        const talent = talentContent.right[rIndex][codeIndex];
                        const _talent = {
                            id: talent.id,
                            icon: talent.icon,
                            level: code,
                            name: talent.name,
                        };

                        _pzcode.push(_talent);
                    }
                });
            });

            this.pzcode = JSON.stringify(_pzcode);
        },
        onCopy: function(val) {
            this.$message({
                title: "复制成功",
                message: "编码复制成功",
                type: "success",
            });
        },
        onError: function() {
            this.$message.error({
                title: "复制失败",
                message: "请手动复制",
            });
        },
        isOrigin: function(item) {
            return item["client"].includes("origin");
        },
        parseSchema: function() {
            try {
                const _code = JSON.parse(this.code);
                this.version = _code.version;
                this.xf = _code.xf;

                const val = this.xf;
                this.xfContent = xfConfigs[val]?.content;
                this.begin = xfConfigs[val]?.begin;

                this.talentContent.left = this.talents[xfConfigs[val].talent[0]];
                this.l_name = xfConfigs[val]?.talent[0];

                this.talentContent.right = this.talents[xfConfigs[val].talent[1]];
                this.r_name = xfConfigs[val]?.talent[1];

                const _sq = _code.sq.split(",");

                if (this.begin === "left") {
                    this.l_data = [].concat(_sq.slice(0, 6));
                    this.r_data = _sq.slice(6, _sq.length);
                } else {
                    this.r_data = _sq.slice(0, 6);
                    this.l_data = _sq.slice(6, _sq.length);
                }
            } catch (e) {
                this.$message.error("编码格式错误");
            }
        },
        // talent 单项逻辑
        // -------------------
        /**
         * 判断该行是否可点
         * @param {number} rowIndex 行号
         * @param {string} target 左右区域
         * @returns {boolean} true表示可以编辑
         */
        canOperate: function(rowIndex, target) {
            if (target === "left") {
                return this.lCount >= rowIndex * 5;
            } else {
                return this.rCount >= rowIndex * 5;
            }
        },
        /**
         * 判断left该项是否可点
         * @param {number} rowIndex 行号
         * @param {number} index 列号
         * @param {string} target 左右区域
         * @returns {boolean} 是否可以修改
         */
        canLeftItemOperate: function(rowIndex, colIndex) {
            let canOperate = false;
            // 初始为left的第一行点亮
            if (this.begin === "left") {
                if (!rowIndex) {
                    canOperate = true;
                } else if (this.lCount > 0 && this.lCount >= rowIndex * 5) {
                    canOperate = true;
                }
            } else if (this.begin === "right") {
                if (this.rCount >= this.series_open_need && this.lCount >= 0 && this.lCount >= rowIndex * 5) {
                    canOperate = true;
                }
            }

            return canOperate;
        },
        /**
         * 判断left该项父项是否加点
         */
        isLeftParentAdd: function(rowIndex, colIndex) {
            return Number(this.l_data[rowIndex - 1][colIndex]);
        },
        /**
         * talent left 增加层数
         * @param {Object} item talent
         * @param {number} rowIndex 行号
         * @param {number} colIndex 列号
         * @param {Array} target 操作对象
         */
        leftTalentAdd: function(item, rowIndex, colIndex) {
            if (!this.canOperate(rowIndex, "left")) return;
            // 当父项有层数，才可以进行增加层数操作
            if (item?.pretab && !this.isLeftParentAdd(rowIndex, colIndex)) {
                this.$message.warning({
                    message: "要激活该天赋需要先激活对应的上层天赋",
                });
                return;
            }

            const { max, parent } = item;

            if (this.begin === "right") {
                if (this.rCount < this.series_open_need) {
                    this.$message.warning({
                        message: `主天赋需要先激活${this.series_open_need}点，才能激活本区域的天赋`,
                    });
                    return;
                }
            }

            // HACK: 此处的parent是不是只用判断是否有就好
            if (parent?.length) {
                const [p] = parent;
                const pTalent = Number(this.l_data[p.row][p.index]);

                if (!pTalent) {
                    this.$message({
                        type: "warning",
                        message: "该天赋存在前置天赋，需先激活前置天赋",
                    });
                    return;
                }
            }

            // 限定最大加点数
            if (this.totalCount >= this.total) {
                this.$message({
                    type: "warning",
                    message: "最大加点数为" + this.total,
                });
                return;
            }

            let current = Number(this.l_data[rowIndex][colIndex]);

            if (current < max) {
                current++;
                // 替换指定talent的层数
                const row = this.l_data[rowIndex].split("");

                row[colIndex] = String(current);

                this.l_data.splice(rowIndex, 1, row.join(""));
            } else {
                this.$message({
                    type: "warning",
                    message: "该天赋已达最高层数",
                });
            }
        },
        /**
         * talent left 减少层数
         * @param {number} rowIndex 行号
         * @param {number} colIndex 列号
         * @param {Array} target 操作对象
         */
        leftTalentDecrease: function(rowIndex, colIndex) {
            let current = Number(this.l_data[rowIndex][colIndex]);

            if (current > 0) {
                if (rowIndex < this.l_data.length - 1) {
                    let currentCount = 0;
                    // 当前行之前的行
                    const currentArr = this.l_data.slice(0, rowIndex + 1);
                    // 左边或右边总共的点数
                    const targetCount = this.l_data
                        .map((l) => l.split(""))
                        .flat()
                        .reduce((prev, current) => Number(prev) + Number(current));

                    // 当前行之前的行的点数
                    currentCount = currentArr
                        .map((l) => l.split(""))
                        .flat()
                        .reduce((prev, current) => Number(prev) + Number(current));

                    if (currentCount <= this.leftLastIndex * 5 && targetCount > currentCount) {
                        this.$message.warning({
                            title: "提醒",
                            message: "不能再减啦",
                        });
                        return;
                    }
                }
                current--;
                // 替换指定talent的层数
                const row = this.l_data[rowIndex].split("");

                row[colIndex] = String(current);

                this.l_data.splice(rowIndex, 1, row.join(""));
            }
        },
        /**
         * 判断right该项是否可点
         * @param {number} rowIndex 行号
         * @param {number} index 列号
         * @param {string} target 左右区域
         * @returns {boolean} 是否可以修改
         */
        canRightItemOperate: function(rowIndex, colIndex) {
            let canOperate = false;
            // 初始为left的第一行点亮
            if (this.begin === "right") {
                if (!rowIndex) {
                    canOperate = true;
                } else if (this.rCount > 0 && this.rCount >= rowIndex * 5) {
                    canOperate = true;
                }
            } else if (this.begin === "left") {
                if (this.lCount >= this.series_open_need && this.rCount >= 0 && this.rCount >= rowIndex * 5) {
                    canOperate = true;
                }
            }

            return canOperate;
        },
        /**
         * 判断right该项父项是否加点
         */
        isRightParentAdd: function(rowIndex, colIndex) {
            return Number(this.r_data[rowIndex - 1][colIndex]);
        },
        /**
         * talent right 增加层数
         * @param {Object} item talent
         * @param {number} rowIndex 行号
         * @param {number} colIndex 列号
         * @param {Array} target 操作对象
         */
        rightTalentAdd: function(item, rowIndex, colIndex) {
            if (!this.canOperate(rowIndex, "right")) return;

            // 当父项有层数，才可以进行增加层数操作
            if (item?.pretab && !this.isRightParentAdd(rowIndex, colIndex)) {
                this.$message.warning({
                    message: "要激活该天赋需要先激活对应的上层天赋",
                });
                return;
            }

            const { max, parent } = item;

            if (this.begin === "left") {
                if (this.lCount < this.series_open_need) {
                    this.$message.warning({
                        title: "提醒",
                        message: `主天赋需要先激活${this.series_open_need}点，才能激活本区域的天赋`,
                    });
                    return;
                }
            }

            // HACK: 此处的parent是不是只用判断是否有就好
            if (parent?.length) {
                const [p] = parent;
                const pTalent = Number(this.r_data[p.row][p.index]);

                if (!pTalent) {
                    this.$message({
                        type: "warning",
                        message: "该天赋存在前置天赋，需先激活前置天赋",
                    });
                    return;
                }
            }

            // 限定最大加点数
            if (this.totalCount >= this.total) {
                this.$message({
                    type: "warning",
                    message: "最大加点数为" + this.total,
                });
                return;
            }

            let current = Number(this.r_data[rowIndex][colIndex]);

            if (current < max) {
                current++;
                // 替换指定talent的层数
                const row = this.r_data[rowIndex].split("");

                row[colIndex] = String(current);

                this.r_data.splice(rowIndex, 1, row.join(""));
            } else {
                this.$message({
                    type: "warning",
                    message: "该天赋已达最高层数",
                });
            }
        },
        /**
         * talent right 减少层数
         * @param {number} rowIndex 行号
         * @param {number} colIndex 列号
         * @param {Array} target 操作对象
         */
        rightTalentDecrease: function(rowIndex, colIndex) {
            let current = Number(this.r_data[rowIndex][colIndex]);

            if (current > 0) {
                if (rowIndex < this.r_data.length - 1) {
                    let currentCount = 0;
                    // 当前行之前的行
                    const currentArr = this.r_data.slice(0, rowIndex + 1);
                    // 左边或右边总共的点数
                    const targetCount = this.r_data
                        .map((l) => l.split(""))
                        .flat()
                        .reduce((prev, current) => Number(prev) + Number(current));
                    // 当前行之前的行的点数
                    currentCount = currentArr
                        .map((l) => l.split(""))
                        .flat()
                        .reduce((prev, current) => Number(prev) + Number(current));

                    if (currentCount <= this.rightLastIndex * 5 && targetCount > currentCount) {
                        this.$message.warning({
                            title: "提醒",
                            message: "不能再减啦",
                        });
                        return;
                    }
                }
                current--;
                // 替换指定talent的层数
                const row = this.r_data[rowIndex].split("");

                row[colIndex] = String(current);

                this.r_data.splice(rowIndex, 1, row.join(""));
            }
        },
        /**
         * 心法背景图片
         * @param {string} pos 位置信息
         * @param {number|string} num 图片编号
         */
        talentBg: function(pos, num) {
            if (!pos) return;
            if (pos === "left") {
                return __imgPath + `image/talent/${this.xfContent[0]}_${num}.png`;
            }
            return __imgPath + `image/talent/${this.xfContent[1]}_${num}.png`;
        },

        //  区域逻辑
        // ----------------

        // 请求逻辑
        // ---------------------
        // 获取版本列表
        getVersions: function() {
            fetch(__ossRoot + "data/talent2/index.json")
                .then((res) => res.json())
                .then((response) => {
                    this.versions = response;
                    this.version = this.versions[0]?.version;
                });
        },
        getTalents: function() {
            fetch(__ossRoot + "data/talent2/" + this.version + ".json")
                .then((res) => res.json())
                .then((response) => {
                    this.talents = { ...response, ...defaultXf };
                    if (this.isInit) {
                        this.xf = "通用";
                        this.isInit = false;
                    }
                    this.total = 66;
                });
        },

        // 预设方案
        save: function() {
            if (!this.mount) {
                this.$notify({
                    type: "warning",
                    title: "提醒",
                    message: "暂未选择心法，请先选择心法",
                });
                return;
            }

            if (this.isEditing) {
                putTalent(this.currentSchema.id, {
                    ...this.params,
                }).then(() => {
                    this.$notify({
                        type: "success",
                        title: "成功",
                        message: "修改成功",
                    });
                });
            } else {
                this.$prompt("请输入方案名称", "提示", {
                    confirmButtonText: "确定",
                    cancelButtonText: "取消",
                    inputErrorMessage: "输入不能为空",
                    inputValidator: (value) => {
                        // 点击按钮时，对文本框里面的值进行验证
                        if (!value) {
                            return "输入不能为空";
                        }
                    },
                }).then(({ value }) => {
                    addTalent({
                        ...this.params,
                        name: value,
                    }).then(() => {
                        this.$notify({
                            type: "success",
                            title: "成功",
                            message: "预设方案保存成功",
                        });
                    });
                });
            }
        },
        saveAs: function() {
            this.$prompt("方案另存为", "提示", {
                confirmButtonText: "确定",
                cancelButtonText: "取消",
                inputErrorMessage: "输入不能为空",
                inputValue: this.currentSchema?.name,
                inputValidator: (value) => {
                    // 点击按钮时，对文本框里面的值进行验证
                    if (!value) {
                        return "输入不能为空";
                    }
                },
            }).then(({ value }) => {
                addTalent({
                    ...this.params,
                    name: value,
                }).then(() => {
                    this.$message({
                        type: "success",
                        message: "方案保存成功",
                    });
                });
            });
        },
        use: function(item) {
            const parseCode = item.code;
            this.currentSchema = item;

            this.xf = parseCode.xf;
            setTimeout(() => {
                this.code = JSON.stringify(item.code);
                this.pzcode = JSON.stringify(item.pzcode);

                this.parseSchema();
            });
        },
        talentIcon: function(id) {
            if (this.xf == '通用') return iconLink(id)
            return iconLink(id, 'origin');
        },
    },
    filters: {
        xficon: function(id) {
            return __imgPath + "image/xf/" + id + ".png";
        },
    },
    watch: {
        version: function(val) {
            if (val) {
                this.getTalents();
            }
        },
        xf: {
            immediate: true,
            handler(val, oVal) {
                if (val) {
                    this.xfContent = xfConfigs[val]?.content;
                    this.begin = xfConfigs[val]?.begin;

                    // 新增pop显示控制
                    this.talentContent.left = this.talents[xfConfigs[val].talent?.[0]]?.map((left) => {
                        const _left = left.map((l) => {
                            if (l) this.$set(l, "on", false);
                            return l;
                        });
                        return _left;
                    });
                    this.l_name = xfConfigs[val]?.talent[0];

                    this.talentContent.right = this.talents[xfConfigs[val].talent?.[1]]?.map((right) => {
                        const _right = right.map((r) => {
                            if (r) this.$set(r, "on", false);
                            return r;
                        });
                        return _right;
                    });
                    this.r_name = xfConfigs[val]?.talent[1];

                    if (val === "通用") {
                        this.total = 66;
                    } else {
                        this.total = defaultConfigs.total;
                    }

                    // 初始化code
                    this.renderCode();
                }
            },
        },
        talent2Data: function() {
            this.renderCode();
        },
    },
    mounted: function() {
        this.getVersions();
        this.series_open_need = defaultConfigs.series_open_need;

        this.isAdmin = User.isAdmin();
    },
    components: {
        Nav,
        talentDrawer,
    },
};
</script>

<style lang="less">
@import "../../assets/css/talent.less";
@import "../../assets/css/talent2.less";
</style>
