<template>
    <div id="app">
        <Header></Header>
        <Breadcrumb
            name="花价查询"
            slug="flower"
            root="/app/flower"
            :feedbackEnable="true"
        >
            <img
                slot="logo"
                svg-inline
                src="../../assets/img/logos/flower.svg"
            />
            <div class="m-info">
                <a href="/dashboard/#/profile" target="_blank">设置默认区服</a>
                |
                <a href="/tool/?pid=17667#/" target="_blank">自助上报</a>
            </div>
        </Breadcrumb>
        <LeftSidebar :open="false">
            <Nav />
        </LeftSidebar>
        <Main
            class="m-flower"
            :withoutRight="true"
            :withoutLeft="true"
            v-loading="loading"
        >
            <div class="m-flower-container">
                <h1 class="m-flower-title">全区服小区花价查询</h1>
                <el-divider class="m-flower-desc"
                    >精准数据·居家种田好帮手</el-divider
                >

                <div class="m-flower-search">
                    <el-row :gutter="20">
                        <el-col :span="5">
                            <el-select
                                class="u-server"
                                v-model="current_server"
                                filterable
                                placeholder="请选择服务器"
                            >
                                <el-option
                                    v-for="item in servers"
                                    :key="item"
                                    :label="item"
                                    :value="item"
                                >
                                </el-option>
                            </el-select>
                        </el-col>
                        <el-col :span="5">
                            <el-select
                                class="u-server"
                                v-model="current_map"
                                filterable
                                placeholder="请选择小区"
                            >
                                <el-option
                                    v-for="item in maps"
                                    :key="item"
                                    :label="item"
                                    :value="item"
                                >
                                </el-option>
                            </el-select>
                        </el-col>
                        <el-col :span="5">
                            <el-select
                                class="u-type"
                                v-model="type"
                                placeholder="请选择花型"
                            >
                                <el-option label="全部" value=""> </el-option>
                                <el-option
                                    v-for="item in types"
                                    :key="item"
                                    :label="item"
                                    :value="item"
                                >
                                </el-option>
                            </el-select>
                        </el-col>
                        <el-col :span="5">
                            <el-select
                                class="u-level"
                                v-model="level"
                                placeholder="请选择等级"
                            >
                                <el-option label="全部" value=""> </el-option>
                                <el-option
                                    v-for="item in levels"
                                    :key="item"
                                    :label="item"
                                    :value="item"
                                >
                                    <span v-if="item"
                                        >{{ item }} · {{ color(item) }}</span
                                    >
                                </el-option>
                            </el-select>
                        </el-col>
                        <el-col :span="4">
                            <el-button
                                class="u-button"
                                type="primary"
                                icon="el-icon-search"
                                :disabled="isGuest"
                                @click="loadData"
                                >查询</el-button
                            >
                        </el-col>
                    </el-row>
                </div>

                <div class="m-flower-all" v-if="mode == 0">
                    <div class="m-flower-result" v-if="rank">
                        <el-row :gutter="40">
                            <el-col
                                :span="12"
                                class="u-flower"
                                v-for="(item, i) in rank"
                                :key="i"
                            >
                                <span class="u-title">
                                    <span class="u-name">{{ item.name }}</span>
                                    <span class="u-icons">
                                        <i
                                            class="u-icon"
                                            v-for="(icon, key) in flowers[
                                                item.name
                                            ]"
                                            :key="key"
                                        >
                                            <el-tooltip
                                                effect="dark"
                                                :content="icon.color"
                                                placement="top"
                                            >
                                                <img
                                                    :src="icon.icon | iconURL"
                                                    :alt="icon.color"
                                                />
                                            </el-tooltip>
                                        </i>
                                    </span>
                                </span>
                                <div class="u-desc">
                                    当前最高分线 :
                                    <span
                                        class="u-line"
                                        v-for="(line, i) in item.line"
                                        :key="line + i"
                                        title="点击快速复制"
                                        v-clipboard:copy="line"
                                        v-clipboard:success="onCopy"
                                        v-clipboard:error="onError"
                                        ><b>{{ line }}</b
                                        >线</span
                                    >
                                    <span class="u-price"
                                        >价格 : {{ item.price }}园宅币</span
                                    >
                                </div>
                            </el-col>
                        </el-row>
                    </div>
                </div>

                <div class="m-flower-overview" v-if="mode == 1">
                    <el-table
                        v-if="overview && overview.length"
                        :data="overview"
                        :default-sort="{ prop: 'name', order: 'ascending' }"
                    >
                        <el-table-column
                            prop="name"
                            label="品种"
                            width="200px"
                            :formatter="nameFormat"
                        >
                        </el-table-column>
                        <el-table-column
                            prop="map"
                            label="地图分线"
                            min-width="300px"
                            ><template slot-scope="scope">
                                <el-tooltip
                                    class="u-line-wrapper"
                                    effect="dark"
                                    content="点击复制"
                                    placement="top"
                                    v-for="line in scope.row.map"
                                    :key="line"
                                >
                                    <span
                                        class="u-line"
                                        v-clipboard:copy="onlyLineNumber(line)"
                                        v-clipboard:success="onCopy"
                                        v-clipboard:error="onError"
                                        >{{ line.replace(" ", "") }}</span
                                    >
                                </el-tooltip>
                            </template></el-table-column
                        >
                        <el-table-column
                            prop="price"
                            label="当前价格（最高）"
                            width="160px"
                        >
                        </el-table-column>
                    </el-table>
                </div>

                <div class="m-flower-box" v-if="mode == 2">
                    <div class="m-flower-result" v-if="data && data.length">
                        <el-table
                            :data="data"
                            :default-sort="{
                                prop: 'date',
                                order: 'descending',
                            }"
                        >
                            <el-table-column prop="server" label="服务器"
                                >{{ current_server }}
                            </el-table-column>
                            <el-table-column prop="map" label="地图分线">
                            </el-table-column>
                            <el-table-column prop="unit" label="数量" sortable>
                            </el-table-column>
                            <el-table-column prop="price" label="价格" sortable>
                            </el-table-column>
                            <el-table-column
                                prop="time"
                                label="时间"
                                sortable
                                :formatter="dateFormat"
                            >
                            </el-table-column>
                        </el-table>
                    </div>
                    <el-alert
                        v-if="!data.length && done"
                        class="m-archive-null"
                        title="没有找到相关条目"
                        type="info"
                        center
                        show-icon
                    >
                    </el-alert>
                    <el-pagination
                        class="m-archive-pages"
                        :page-size="15"
                        background
                        :hide-on-single-page="true"
                        @current-change="changePage"
                        :current-page.sync="page"
                        layout="total, prev, pager, next, jumper"
                        :total="total"
                    >
                    </el-pagination>
                </div>

            </div>
            <Footer></Footer>
        </Main>
    </div>
</template>

<script>
import User from '@jx3box/jx3box-common/js/user'
import Nav from "@/components/Nav.vue";
import {
    getFlowerPrice,
    getFlowerPrices,
    getFlowerRank,
} from "@/service/flower";
import { setFlowerServer, getProfile } from "@/service/server";
import dateFormat from "@/utils/moment";
import servers from "@jx3box/jx3box-data/data/server/server_list.json";
import colors from "./colors.json";
import flowers from "./flowers.json";
import { __iconPath, __ossRoot } from "@jx3box/jx3box-common/js/jx3box.json";
// 繁體
import traditional_servers from "@jx3box/jx3box-data/data/server/server_international.json";
import dict from "./dict.json";
import maps from "./maps.json";

export default {
    name: "Flower",
    props: [],
    data: function() {
        return {
            servers,
            current_server: "",
            current_map: "广陵邑",
            types: [
                "绣球花",
                "郁金香",
                "牵牛花",
                "玫瑰",
                "百合",
                "荧光菌",
                "羽扇豆花",
                // "葫芦","麦子","青菜","芜菁"
            ],
            type: "",
            level: "",
            colors,
            flowers,

            rank: "",
            overview: "",
            data: [],

            total: 1,
            pages: 1,
            page: 1,
            loading: false,
            done: false,
            isLogin : User.isLogin()
        };
    },
    computed: {
        levels: function() {
            let levels = [];
            if (this.type) {
                return Object.keys(this.colors[this.type]);
            }
            return levels;
        },
        isGuest: function() {
            // return !User.isLogin();
            return false;
        },
        hasNextPage: function() {
            return this.total > 1 && this.page < this.pages;
        },
        mode: function() {
            if (!this.type && !this.level) {
                return 0;
            } else if (this.type && !this.level) {
                return 1;
            } else if (this.type && this.level) {
                return 2;
            }
            return 0;
        },
        isTraditional: function() {
            return traditional_servers.includes(this.current_server);
        },
        maps: function() {
            if (this.isTraditional) {
                return maps["tr"];
            }
            return maps["cn"];
        },
        map: function() {
            return this.maps[0] || "广陵邑";
        },
        params: function() {
            console.log('2.查询参数更新')
            return {
                server: this.current_server,
                map: this.current_map,
                type: this.type,
                level: this.level,
                page: this.page,
            };
        },
        primary_params : function (){
            return {
                server: this.current_server,
                map: this.current_map,
                type: this.type,
                level: this.level,
            }
        }
    },
    methods: {
        color: function(level) {
            if (this.type) {
                return this.colors[this.type][level];
            }
            return "";
        },
        dateFormat: function(row, column) {
            return dateFormat(row.time * 1000);
        },
        nameFormat: function(row, column) {
            let colors = [];
            flowers[row.name].forEach((item) => {
                colors.push(item.color);
            });
            colors = colors.join("/");
            return row.name + " ( " + colors + " ) ";
        },
        loadData: function() {

            // 概览模式
            if (this.mode == 0) {
                this.loadRank();
                // 简略模式
            } else if (this.mode == 1) {
                this.loadOverview();
                // 完整模式
            } else {
                this.loadAll();
            }
            setFlowerServer(this.current_server);
        },
        loadRank: function() {
            this.loading = true;
            return getFlowerRank(
                {
                    server: this.current_server,
                    map: this.current_map,
                },
                this
            )
                .then((data) => {
                    if (this.isTraditional) {
                        data = this.transformData(data);
                    }

                    let list = [];
                    for (let name in flowers) {
                        let lines = data[name]
                            ? data[name]["maxLine"].slice(0, 3)
                            : [];
                        lines.forEach((item, i) => {
                            lines[i] = item && item.replace(" 线", "");
                        });

                        let max = data[name] ? ~~data[name]["max"] : "-";
                        list.push({
                            name,
                            line: lines,
                            price: max,
                        });
                    }
                    this.rank = list;
                })
                .finally(() => {
                    this.loading = false;
                });
        },
        loadOverview: function() {
            this.loading = true;

            let qs = this.type;
            if (this.isTraditional) {
                qs = this.transformRequest(qs);
            }

            return getFlowerPrices(
                {
                    server: this.current_server,
                    flower: qs,
                    map: this.current_map,
                },
                this
            )
                .then((data) => {
                    if (this.isTraditional) {
                        data = this.transformData(data);
                    }

                    let overview = [];
                    for (let name in data) {
                        overview.push({
                            name: name,
                            price: data[name]["max"] + "园宅币",
                            map: data[name]["maxLine"].slice(0, 5),
                        });
                    }
                    this.overview = overview;
                })
                .finally(() => {
                    this.loading = false;
                });
        },
        loadAll: function() {
            this.loading = true;

            let qs = this.level + this.type;
            if (this.isTraditional) {
                qs = this.transformRequest(qs);
            }

            return getFlowerPrice(
                {
                    server: this.current_server,
                    map: this.current_map,
                    flower: qs,
                    pageIndex: this.page,
                },
                this
            )
                .then((data) => {
                    if (this.isTraditional) {
                        data = this.transformData(data);
                    }
                    this.data = data.data;
                    this.total = data.page.total;
                    this.pages = data.page.pageTotal;
                })
                .finally(() => {
                    this.loading = false;
                });
        },
        changePage: function() {
            window.scrollTo(0, 0);
        },
        onCopy: function(val) {
            this.$notify({
                title: "复制成功",
                message: "复制内容 : " + val.text,
                type: "success",
            });
        },
        onError: function() {
            this.$notify.error({
                title: "复制失败",
                message: "请手动复制",
            });
        },
        onlyLineNumber: function(val) {
            return val.replace("线", "");
        },
        transformData: function(data) {
            let _data = JSON.stringify(data);
            dict.tr.forEach((key, i) => {
                let re = new RegExp(key, "g");
                _data = _data.replace(re, dict.cn[i]);
            });
            return JSON.parse(_data);
        },
        transformRequest: function(str) {
            let _data = str;
            dict.cn.forEach((key, i) => {
                let re = new RegExp(key, "g");
                _data = _data.replace(re, dict.tr[i]);
            });
            return _data;
        },
    },
    watch: {
        map: function(newdata) {
            this.current_map = newdata;
        },
        params: {
            deep:true,
            handler : function() {
                console.log('3.数据加载')
                this.loadData();
            },
        },
        primary_params : {
            deep:true,
            handler : function() {
                // 复位翻页
                this.page = 1
            },
        }
    },
    filters: {
        iconURL: function(id) {
            return __iconPath + "icon/" + id + ".png";
        },
    },
    mounted: function() {
        if (this.isLogin) {
            getProfile().then((data) => {
                console.log('1.a.已登录,加载profile_server')
                this.current_server = data.jx3_server || "蝶恋花";
            });
        } else {
            console.log('1.b.未登录,加载最后一次服务器')
            this.current_server = localStorage.getItem("flower_server") || "蝶恋花";
        }
    },
    components: {
        Nav,
    },
};
</script>

<style lang="less">
@import "../../assets/css/flower.less";
</style>
