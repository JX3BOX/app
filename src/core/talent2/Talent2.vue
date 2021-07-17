<template>
    <div id="app">
        <Header></Header>
        <Breadcrumb
            name="镇派模拟器"
            slug="talent2"
            root="/app/talent2"
            :feedbackEnable="true"
            :crumbEnable="true"
        >
            <img
                slot="logo"
                svg-inline
                src="../../assets/img/logos/talent2.svg"
            />
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
                            <el-select
                                v-model="version"
                                placeholder="请选择游戏版本"
                                @change="reload"
                            >
                                <el-option
                                    v-for="item in versions"
                                    :key="item.version"
                                    :label="item.name"
                                    :value="item.version"
                                >
                                </el-option>
                            </el-select>
                        </div>
                    </div>
                </div>
                <div class="m-talent-wrapper">
                    <h2 class="m-talent-subtitle">选择心法</h2>
                    <div class="m-talent-xf">
                        <el-radio
                            v-for="(item, i) in xfmap"
                            v-model="xf"
                            :label="item.name"
                            :key="i"
                            @change="reload"
                            v-show="isOrigin(item)"
                        >
                            <img
                                class="u-pic"
                                :src="item.id | xficon"
                                :alt="item.name"
                            />
                            <span class="u-txt">{{ item.name }}</span>
                        </el-radio>
                    </div>
                    <h2 class="m-talent-subtitle">配置镇派</h2>
                    <div class="m-talent2-box">

                        <!-- LEFT -->
                        <div class="m-talent2-left">
                            <div class="m-talent2-title">
                                <span class="m-talent2-title-count">{{ lCount }}</span>
                                <span class="m-talent2-title-name">斩绝</span>
                            </div>
                            <div class="m-talent2-content">
                                <div
                                    class="m-talent2-content-row"
                                    :class="[
                                        !isDisabled(index, 'l_data') ? 'm-talent2-content-row-disabled' : ''
                                    ]"
                                    v-for="(row, index) in example.left"
                                    :key="'l'+index"
                                >
                                    <template v-for="(item, i) in row">
                                        <div
                                            v-if="item"
                                            class="m-talent2-content-item"
                                            :class="[
                                                {'m-talent2-content-item-skill': item.type === 'skill'},
                                                {'m-talent2-content-item-inactive': !Number(l_data[index][i])},
                                                !isDisabled(index, 'l_data') ? 'm-talent2-content-item-disabled' : ''
                                            ]"
                                            :key="i"
                                            @click="talentAdd(item, index, i, l_data)"
                                            @click.right.prevent="talentDecrease(index, i, l_data)"
                                        >
                                            <!-- <img src="" :alt="item.name"> -->
                                            <span>{{ item.name }}</span>
                                            <!-- COUNT -->
                                            <span class="m-talent2-content-item-count">{{ l_data[index][i] }}</span>
                                            <!-- CHILDREN -->
                                            <i v-if="item.children.length" class="el-icon-bottom m-talent2-content-item-relate"></i>
                                        </div>
                                        <div v-else class="m-talent2-content-item-empty" :key="i"></div>
                                    </template>
                                </div>
                            </div>
                        </div>


                        <!-- RIGHT -->
                        <div class="m-talent2-right">
                            <div class="m-talent2-title">
                                <span class="m-talent2-title-count">0</span>
                                <span class="m-talent2-title-name">封魂</span>
                            </div>
                        </div>
                    </div>
                    <h2 class="m-talent-subtitle">镇派编码</h2>
                    <div class="m-talent-code">
                        <el-input
                            placeholder="奇穴编码"
                            v-model="code"
                            @change="parseSchema"
                        >
                            <template slot="prepend">
                                <span
                                    class="u-copy"
                                    v-clipboard:copy="code"
                                    v-clipboard:success="onCopy"
                                    v-clipboard:error="onError"
                                >
                                    <i class="el-icon-document-copy"></i>
                                    <span>点击复制</span>
                                </span>
                            </template>
                        </el-input>
                    </div>
                    <p class="m-talent-tip">
                        <i class="el-icon-info"></i>
                        粘贴编码亦可自动解析镇派
                    </p>
                </div>
            </div>
            <Footer></Footer>
        </Main>
    </div>
</template>

<script>
import Nav from "@/components/Nav.vue";
import xfmap from "@jx3box/jx3box-data/data/xf/xf.json";
import {
    __ossMirror,
    __imgPath,
    __ossRoot,
} from "@jx3box/jx3box-common/data/jx3box.json";
import example from './example.json'
export default {
    name: "Talent2",
    props: [],
    data: function() {
        return {
            xf: "其它",
            code:'',

            version : '不删档公测',
            versions: [],
            xfmap,
            total: 33,
            l_data: ["0000", "0000", "0000", "0000", "0000", "0000"],
            r_data: [],
            series_open_need: 26,

            example
        };
    },
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
        },
        totalCount: function() {
            return this.lCount + this.rCount;
        }
    },
    methods: {
        reload: function(schema) {
        },
        onCopy: function(val) {
            this.$notify({
                title: "复制成功",
                message: "编码复制成功",
                type: "success",
            });
        },
        onError: function() {
            this.$notify.error({
                title: "复制失败",
                message: "请手动复制",
            });
        },
        isOrigin : function (item){
            return item['client'].includes('origin')
        },
        parseSchema : function (){
            
        },
        // talent 单项逻辑
        // -------------------
        /**
         * 判断该行是否可点
         * @param {number} rowIndex 行号
         * @param {string} target 左右心法
         */
        isDisabled: function(rowIndex, target) {
            if (target === 'l_data') {
                return this.lCount >= rowIndex * 5
            } else {
                return this.rCount >= rowIndex * 5
            }
        },
        /**
         * talent 增加层数
         * @param {Object} item talent
         * @param {number} rowIndex 行号
         * @param {number} colIndex 列号
         * @param {Array} target 操作对象
         */
        talentAdd: function(item, rowIndex, colIndex, target) {

            const { max, parent } = item;

            // HACK: 此处的parent是不是只用判断是否有就好
            if (parent?.length) {
                const [p] = parent;
                console.log(p)
                const pTalent = Number(target[p.row][p.index]);

                if (!pTalent) {
                    this.$message({
                        type: 'warning',
                        message: '该talent存在前置talent，需先激活前置talent'
                    })
                    return 
                }
            }

            if (this.totalCount >= this.total) {
                this.$message({
                    type: 'warning',
                    message: '最大加点数为' + this.total
                })
                return
            }

            let current = Number(target[rowIndex][colIndex]);

            if (current < max) {
                
                current++;
                // 替换指定talent的层数
                const row = target[rowIndex].split('');

                row[colIndex] = String(current);

                target.splice(rowIndex, 1, row.join(''));

            } else {
                this.$message({
                    type: 'warning',
                    message: '该talent已达最高层数'
                });
            }
        },
        /**
         * talent 减少层数
         * @param {number} rowIndex 行号
         * @param {number} colIndex 列号
         */
        talentDecrease: function(rowIndex, colIndex, target) {
            let current = Number(target[rowIndex][colIndex]);

            if (current > 0) {
                current--;
                // 替换指定talent的层数
                const row = target[rowIndex].split('');

                row[colIndex] = String(current);

                target.splice(rowIndex, 1, row.join(''));
            }
        }
    },
    filters: {
        xficon: function(id) {
            return __imgPath + "image/xf/" + id + ".png";
        },
    },
    mounted: function() {
    },
    components: {
        Nav,
    },
};
</script>

<style lang="less">
@import "../../assets/css/talent.less";
@import "../../assets/css/talent2.less";
</style>