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
                前往个人中心<a href="/dashboard/#/profile" target="_blank"
                    >资料修改</a
                >可绑定默认区服，否则默认将使用上一次搜索区服
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
                    <el-row :gutter="20" type="flex">
                        <el-col :span="7">
                            <el-select
                                class="u-server"
                                v-model="server"
                                filterable
                                placeholder="请输入服务器"
                                @change="search"
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
                        <el-col :span="7">
                            <el-select
                                class="u-type"
                                v-model="type"
                                placeholder="请选择花型"
                                @change="search"
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
                        <el-col :span="7">
                            <el-select
                                class="u-level"
                                v-model="level"
                                placeholder="请选择等级"
                                @change="search"
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
                        <el-col :span="3">
                            <el-button
                                class="u-button"
                                type="primary"
                                icon="el-icon-search"
                                :disabled="isGuest"
                                @click="search"
                                >查询</el-button
                            >
                        </el-col>
                    </el-row>
                </div>

                <div class="m-flower-submit">
                    <el-alert
                        class="u-tip"
                        v-if="isGuest"
                        title="请先登录"
                        type="info"
                        show-icon
                    ></el-alert>
                </div>

                <!-- <div class="m-flower-tip el-alert el-alert--info is-light">
                前往个人中心<a
                    href="/dashboard/#/profile"
                    target="_blank"
                    >资料修改</a
                >可绑定默认区服，否则默认将使用上一次搜索区服
            </div> -->

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
                                >{{ server }}
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
                    <el-button
                        class="m-archive-more"
                        :class="{ show: hasNextPage }"
                        type="primary"
                        :loading="loading"
                        @click="appendPage(++page)"
                        >加载更多</el-button
                    >
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
import Nav from "@/components/Nav.vue";
import {
    getFlowerPrice,
    getFlowerPrices,
    getFlowerRank,
} from "../../service/flower";
import { setFlowerServer, getServer } from "../../service/server";
import dateFormat from "../../utils/moment";
import servers from "@jx3box/jx3box-data/data/server/server_list.json";
import colors from "./colors.json";
import flowers from "./flowers.json";
import { __iconPath } from "@jx3box/jx3box-common/js/jx3box.json";

export default {
    name: "Flower",
    props: [],
    data: function() {
        return {
            servers,
            server: "梦江南",
            types: ["绣球花", "郁金香", "牵牛花", "玫瑰", "百合", "荧光菌"],
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
    },
    methods: {
        color: function(level) {
            if (this.type) {
                return this.colors[this.type][level];
            }
            return "";
        },
        search: function() {
            this.page = 1; //复位

            // 概览模式
            if (this.mode == 0) {
                this.loadRank();
                // 简略模式
            } else if (this.mode == 1) {
                this.loadOverview();
                // 完整模式
            } else {
                this.loadData(1);
            }
            setFlowerServer(this.server);
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
        loadRank: function() {
            this.loading = true;
            return getFlowerRank(this.server, this).then((data) => {
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
            });
        },
        loadOverview: function() {
            this.loading = true;
            return getFlowerPrices(
                {
                    server: this.server,
                    flower: this.type,
                },
                this
            ).then((res) => {
                let overview = [];
                for (let name in res.data) {
                    overview.push({
                        name: name,
                        price: res.data[name]["max"] + "园宅币",
                        map: res.data[name]["maxLine"].slice(0, 5),
                    });
                }
                this.overview = overview;
            });
        },
        loadData: function(i, append = false) {
            this.loading = true;
            return getFlowerPrice(
                {
                    server: this.server,
                    flower: this.level + this.type,
                    pageIndex: i,
                },
                this
            ).then((res) => {
                if (append) {
                    this.data = this.data.concat(res.data.data);
                } else {
                    this.data = res.data.data;
                }
                this.total = res.data.page.total;
                this.pages = res.data.page.pageTotal;
            });
        },
        appendPage: function(i) {
            this.loading = true;
            this.loadData(i, true);
        },
        changePage: function(i) {
            this.loading = true;
            this.loadData(i).then(() => {
                window.scrollTo(0, 0);
            });
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
    },
    filters: {
        iconURL: function(id) {
            return __iconPath + "icon/" + id + ".png";
        },
    },
    mounted: function() {
        getServer("flower_server")
            .then((server) => {
                if (server) {
                    this.server = server;
                }
            })
            .then(() => {
                this.loadRank();
            });
    },
    components: {
        Nav,
    },
};
</script>

<style lang="less">
@import "../../assets/css/flower.less";
</style>
