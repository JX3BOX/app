<template>
    <div class="m-talent2-box m-talent2-render-box">
        <template v-if="xf">
            <div class="m-talent2-main">
                <!-- LEFT -->
                <div class="m-talent2-left">

                    <div 
                        class="m-talent2-content"
                        :style="{
                            'background-image': xf ? (lCount ? `url(${talentBg('left', 1)})` : `url(${talentBg('left', 0)})`) : ''
                        }">
                        <div class="m-talent2-title">
                            <img class="m-talent2-xf-icon" :src="xfContent[0] | xficon">
                            <span class="m-talent2-title-count">{{ lCount }}</span>
                            <span class="m-talent2-title-name">{{ l_name }}</span>
                        </div>
                        <div
                            class="m-talent2-content-row"
                            v-for="(row, index) in talentContent.left" :key="'l'+index"
                        >
                            <template v-for="(item, i) in row">
                                <div
                                    v-if="item"
                                    class="m-talent2-content-item"
                                    :class="[
                                        {'m-talent2-content-item-skill': item.type === 'skill'},
                                        {'m-talent2-content-item-inactive': !Number(l_data[index][i])}
                                    ]"
                                    :key="i"
                                >
                                    <div class="m-talent2-skill" :title="item.desc">
                                        <img :src="item.icon | talentIcon" :alt="item.name">
                                    </div>
                                    <!-- COUNT -->
                                    <span v-if="Number(l_data[index][i])"
                                        class="m-talent2-content-item-count">{{ l_data[index][i] }}</span>
                                    <!-- CHILDREN -->
                                    <i v-if="item.children.length"
                                        class="el-icon-bottom m-talent2-content-item-relate"></i>
                                </div>
                                <div v-else class="m-talent2-content-item-empty" :key="i"></div>
                            </template>
                        </div>
                    </div>
                </div>


                <!-- RIGHT -->
                <div class="m-talent2-right">
                    <div
                        class="m-talent2-content"
                        :style="{
                            'background-image': xf ? (rCount ? `url(${talentBg('right', 1)})` : `url(${talentBg('right', 0)})`) : ''
                        }">
                        <div class="m-talent2-title">
                            <img class="m-talent2-xf-icon" :src="xfContent[1] | xficon">
                            <span class="m-talent2-title-count">{{ rCount }}</span>
                            <span class="m-talent2-title-name">{{ r_name }}</span>
                        </div>
                        <div
                            class="m-talent2-content-row"
                            v-for="(row, index) in talentContent.right"
                            :key="'l'+index"
                        >
                            <template v-for="(item, i) in row">
                                <div
                                    v-if="item"
                                    class="m-talent2-content-item" :class="[
                                        {'m-talent2-content-item-skill': item.type === 'skill'},
                                        {'m-talent2-content-item-inactive': !Number(r_data[index][i])}
                                    ]"
                                    :key="i"
                                >
                                    <div class="m-talent2-skill" :title="item.desc">
                                        <img :src="item.icon | talentIcon" :alt="item.name">
                                    </div>
                                    <!-- COUNT -->
                                    <span v-if="Number(r_data[index][i])"
                                        class="m-talent2-content-item-count">{{ r_data[index][i] }}</span>
                                    <!-- CHILDREN -->
                                    <i v-if="item.children.length"
                                        class="el-icon-bottom m-talent2-content-item-relate"></i>
                                </div>
                                <div v-else class="m-talent2-content-item-empty" :key="i"></div>
                            </template>
                        </div>
                    </div>
                </div>
            </div>
        </template>
    </div>
</template>

<script>
import xfmap from "@jx3box/jx3box-data/data/xf/xf.json";
import {
    __ossMirror,
    __imgPath,
    __ossRoot,
    __iconPath
} from "@jx3box/jx3box-common/data/jx3box.json";
import { xfConfigs } from './talent2.json';
export default {
    name: 'TalentRender',
    props: {
        talentCode: {
            type: String,
            default: ''
        }
    },
    data: () => ({
        xf: '',
        code:'',
        begin: '',
        l_name: '斩绝',
        r_name: '封魂',

        version : '',
        talents: [], // 镇派数据
        xfmap,
        total: 33,
        l_data: ["0000", "0000", "0000", "0000", "0000", "0000"],
        r_data: ["0000", "0000", "0000", "0000", "0000", "0000"],

        // 心法字符串对应的心法id，用于左右背景
        xfContent: [],
        // 心法镇派或技能
        talentContent: {
            left: [],
            right: []
        },

        parseCode: {}
    }),
    computed: {
        lCount: function() {
            return this.l_data.length ?
                this.l_data.map(l => l.split('')).flat().reduce((prev, current) => Number(prev) + Number(current))
                : 0;
        },
        rCount: function() {
            return this.r_data.length ?
                this.r_data.map(l => l.split('')).flat().reduce((prev, current) => Number(prev) + Number(current))
                : 0;
        }
    },
    methods: {
        // 渲染镇派
        async renderTalents() {
            try {
                this.parseCode = JSON.parse(this.talentCode);
                this.version = this.parseCode.version;
                await this.getTalents();
                this.xf = this.parseCode.xf;

                const _sq = this.parseCode.sq.split(",");
                if (this.begin === 'left') {
                    this.l_data = _sq.slice(0, 6);
                    this.r_data = _sq.slice(6, _sq.length)
                } else {
                    this.l_data = _sq.slice(6, _sq.length)
                }
                    
            } catch(e) {
                this.$message.error("编码格式错误");
            }
        },
        /**
         * 心法背景图片
         * @param {string} pos 位置信息
         * @param {number|string} num 图片编号
         */
        talentBg: function(pos, num) {
            if (!pos) return 
            if (pos === 'left') {
                return __imgPath + `image/talent/${this.xfContent[0]}_${num}.png`
            }
            return __imgPath + `image/talent/${this.xfContent[1]}_${num}.png`
        },
        async getTalents() {
            fetch(__ossRoot + 'data/talent2/' + this.version + '.json')
                .then(res => res.json())
                .then(response => {
                    this.talents = response;

                    const val = this.xf;
                    this.xfContent = xfConfigs[val]?.content;
                    this.begin = xfConfigs[val]?.begin;
                    this.talentContent.left = this.talents[xfConfigs[val].talent[0]];
                    this.talentContent.right = this.talents[xfConfigs[val].talent[1]];
                })
        }
    },
    filters: {
        xficon: function(id) {
            return __imgPath + "image/xf/" + id + ".png";
        },
        talentIcon: function(id) {
            return __iconPath + "icon/" + id + ".png";
        }
    },
    watch: {
        talentCode: function(val) {
            if (val) {
                this.renderTalents();
            }
        }
    }
}
</script>

<style lang="less">
@import "../../assets/css/talent.less";
@import "../../assets/css/talent2.less";
</style>