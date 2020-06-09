<template>
    <div id="app">
        <Header></Header>
        <Breadcrumb
            name="九宫格计算器"
            slug="sudoku"
            root="/sudoku"
            :feedbackEnable="true"
        >
            <img slot="logo" svg-inline src="../../assets/img/logos/sudoku.svg" />
            <!-- <Info /> -->
        </Breadcrumb>
        <LeftSidebar>
            <Nav />
        </LeftSidebar>
        <Main :withoutRight="false">
            <div class="m-sudoku">
                <h1 class="m-sudoku-title">九宫格计算器</h1>
                <!-- 填入数字 -->
                <div class="m-table">
                    <ul>
                        <li v-for="(n, i) in list" :key="i">
                            <input
                                type="text"
                                v-model="list[i]"
                                min="1"
                                max="9"
                                @input="check(list[i], i)"
                                :disabled="i == 4"
                            />
                        </li>
                    </ul>
                    <el-button type="primary" class="u-clear" @click="clear()"
                        >清空</el-button
                    >
                </div>

                <!-- 预览 -->
                <div class="m-preview">
                    <el-tabs v-model="activeName" @tab-click="handleClick">
                        <el-tab-pane label="试炼之地" name="sudoku1">
                            <h2 class="u-mode">{{ mode1 }}</h2>
                            <div class="u-imglist-1">
                                <el-image
                                    :src="url"
                                    :preview-src-list="srcList"
                                >
                                </el-image>
                            </div>
                        </el-tab-pane>
                        <el-tab-pane label="荻花宫" name="sudoku2">
                            <h2 class="u-mode">{{ mode2 }}</h2>
                            <div class="u-imglist-2">
                                <el-image v-for="(img,i) in srcList2" :key="'dh' + i"
                                    :src="showpic(i)"
                                    :preview-src-list="srcList2"
                                >
                                </el-image>
                            </div>
                            <ul class="u-demolist">
                                <h5>常见序列</h5>
                                <li>245361</li>
                                <li>423516</li>
                                <li>615324</li>
                                <li>163542</li>
                                <li>341562</li>
                                <li>265143</li>
                            </ul>
                        </el-tab-pane>
                    </el-tabs>
                </div>
            </div>
            <RightSidebar>
                <Github_REPO REPO="app" coder="383"></Github_REPO>
                <Extend />
            </RightSidebar>
            <Footer></Footer>
        </Main>
    </div>
</template>

<script>
// import Info from "@/components/Info.vue";
import Nav from "@/components/Nav.vue";
import Extend from "@/components/Extend.vue";
import {__ossMirror} from '@jx3box/jx3box-common/js/jx3box.json'
export default {
    name: "Sudoku",
    data: function() {
        return {
            activeName: "sudoku1",
            list: ["", "", "", "", "5", "", "", "", ""],
            url: __ossMirror + "image/app/sudoku/sudoku1.jpg",
            srcList: [__ossMirror + "image/app/sudoku/sudoku1.jpg"],
            srcList2: [
                __ossMirror + "image/app/sudoku/sudoku2/0.png",
                __ossMirror + "image/app/sudoku/sudoku2/1.png",
                __ossMirror + "image/app/sudoku/sudoku2/2.png",
                __ossMirror + "image/app/sudoku/sudoku2/3.png",
                __ossMirror + "image/app/sudoku/sudoku2/4.png",
                __ossMirror + "image/app/sudoku/sudoku2/5.png",
                __ossMirror + "image/app/sudoku/sudoku2/6.png",
            ],
        };
    },
    computed: {
        len: function() {
            return this.list.length;
        },
        isready: function() {
            let count = 0;
            let len = this.len;
            count += ~~(this.list[0] || this.list[len]);
            count += ~~(this.list[1] || this.list[len - 1]);
            count += ~~(this.list[2] || this.list[len - 2]);
            count += ~~(this.list[3] || this.list[len - 3]);
            return count >= 3 ? true : false;
        },
        matrix: function() {
            return [
                [this.list[0], this.list[1], this.list[2]],
                [this.list[3], this.list[4], this.list[5]],
                [this.list[6], this.list[7], this.list[8]],
            ];
        },
        matrixR: function() {
            return [
                [this.list[0], this.list[3], this.list[6]],
                [this.list[1], this.list[4], this.list[7]],
                [this.list[2], this.list[5], this.list[8]],
            ];
        },
        mode1: function() {
            return this.list.slice(0, 5).join(" ");
        },
        mode2: function() {
            let result = [];
            for (let i = 0; i < this.len; i++) {
                let val = this.list[i];
                if (parseInt(val) <= 6) {
                    result.push(val);
                }
            }
            return result.join(" ");
        },
    },
    methods: {
        check: function(val, label) {
            // 长度检测
            if (val.length > 1) {
                return (this.list[label] = val.slice(0, 1));
            }
            // 正则匹配
            if (!/^[12346789]$/.test(val)) {
                return (this.list[label] = "");
            }
            // 重复限制
            for (let i = 0; i <= this.len; i++) {
                if (this.list[i] == val && label != i) {
                    this.list[i] = "";
                    break;
                }
            }
            // 是否达到2个合格数
            if (this.isready) {
                this.compute();
            }
        },
        compute: function() {
            if (this.isdone()) return;
            this.scanX();
            this.scanY();
        },
        scanX: function(matrix) {
            for (let [no, row] of this.matrix.entries()) {
                if (this.hasSpecifiedTrueValue(row, 2)) {
                    let [result, i] = this.solve(row);
                    this.list[no * 3 + i] = result;
                }
            }
        },
        scanY: function() {
            for (let [no, col] of this.matrixR.entries()) {
                if (this.hasSpecifiedTrueValue(col, 2)) {
                    let [result, i] = this.solve(col);
                    this.list[i * 3 + no] = result;
                }
            }
        },
        hasSpecifiedTrueValue: function(arr, c) {
            let count = 0;
            arr.forEach(function(val) {
                count += Boolean(val);
            });
            return count == c;
        },
        solve: function(arr) {
            let result = 15;
            let pos = null;
            arr.forEach((val, i) => {
                if (val) {
                    result = result - parseInt(val);
                    // if(result > 0 && result < 10){
                    //     result = temp
                    // }else{
                    //     result = ''
                    // }
                } else {
                    pos = i;
                }
            });
            return [result, pos];
        },
        isdone: function() {
            for (let i = 0; i < this.len; i++) {
                let val = this.list[i];
                if (!val) return false;
            }
            return true;
        },
        clear: function() {
            this.list = ["", "", "", "", "5", "", "", "", ""];
        },
        handleClick: function() {},
        showpic : function (i){
            return __ossMirror + 'image/app/sudoku/sudoku2/' + i + '.png'
        }
    },
    filters: {
        
    },
    mounted: function() {},
    components: {
        Extend,
        Nav
    },
};
</script>

<style lang="less">
@import "../../assets/css/sudoku.less";
</style>