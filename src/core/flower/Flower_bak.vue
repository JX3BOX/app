<template>
    <div id="app">
        <Header></Header>
        <Breadcrumb
            name="花价查询"
            slug="flower"
            root="/app/flower"
            :feedbackEnable="true"
            :crumbEnable="true"
        >
            <img
                slot="logo"
                svg-inline
                src="../../assets/img/logos/flower.svg"
            />
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
                        <el-col :span="7">
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
                        <el-col :span="7">
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
                        <el-col :span="7">
                            <el-select
                                class="u-type"
                                v-model="type"
                                placeholder="请选择花型"
                            >
                                <el-option label="全部" value=""></el-option>
                                <el-option
                                    v-for="item in types"
                                    :key="item.name"
                                    :label="item.name"
                                    :value="item.key"
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
                                @click="loadData"
                                >查询</el-button
                            >
                        </el-col>
                    </el-row>
                </div>

                <div class="m-flower-all">
                    <div class="m-flower-result" v-if="rank">
                        <el-row :gutter="40">
                            <el-col
                                :span="12"
                                class="u-flower"
                                v-for="(item, i) in rank"
                                :key="i"
                                :class="{ isHidden: item.isHidden }"
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
                                        >价格 : 1.5倍率</span
                                    >
                                </div>
                            </el-col>
                        </el-row>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </Main>
    </div>
</template>

<script>
import User from "@jx3box/jx3box-common/js/user";
import Nav from "@/components/Nav.vue";
import {
    getFlowerPrice,
    getFlowerPrices,
    getFlowerRank,
} from "@/service/flower";
import { setFlowerServer, getProfile } from "@/service/server";
import {showDate as dateFormat} from "@jx3box/jx3box-common/js/moment";
import servers from "@jx3box/jx3box-data/data/server/flower_server.json";
import colors from "./colors.json";
import flowers from "./flowers.json";
import items from "./items.json";
import { __iconPath, __ossRoot } from "@jx3box/jx3box-common/data/jx3box.json";
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
                {
                    name: "绣球花",
                    key: "绣球花",
                },
                {
                    name: "郁金香",
                    key: "郁金香",
                },
                {
                    name: "牵牛花",
                    key: "牵牛花",
                },
                {
                    name: "玫瑰",
                    key: "玫瑰",
                },
                {
                    name: "百合",
                    key: "百合",
                },
                {
                    name: "荧光菌",
                    key: "荧光菌",
                },
                {
                    name: "羽扇豆花",
                    key: "羽扇豆花",
                },
                {
                    name: "葫芦",
                    key: "葫芦",
                },
                {
                    name: "麦子",
                    key: "麦",
                },
                {
                    name: "青菜",
                    key: "青菜",
                },
                {
                    name: "芜菁",
                    key: "芜菁",
                },
            ],
            type: "",
            level: "",
            colors,
            flowers,
            items,

            rank: "",
            overview: "",
            data: [],

            total: 1,
            pages: 1,
            page: 1,
            loading: false,
            done: false,
            isLogin: User.isLogin(),
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
            console.log("2.查询参数更新");
            return {
                server: this.current_server,
                map: this.current_map,
                // type: this.type,
                // level: this.level,
                // page: this.page,
            };
        },
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
            setFlowerServer(this.current_server);
            return this.loadRank();
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
        // changeServer : function (){
        //     this.type = ''
        // }
        filterTypes : function (){
            this.rank && this.rank.forEach((item) => {
                if (this.type) {
                    if (!item.name.includes(this.type)) {
                        item.isHidden = true;
                    } else {
                        item.isHidden = false;
                    }
                } else {
                    item.isHidden = false;
                }
                this.$forceUpdate()
            });
        }
    },
    watch: {
        map: function(newdata) {
            this.current_map = newdata;
        },
        params: {
            deep: true,
            handler: function() {
                console.log("3.数据加载");
                this.loadData().then(() => {
                    this.filterTypes()
                })
            },
        },
        type: function(val) {
            this.filterTypes()
        },
    },
    filters: {
        iconURL: function(id) {
            return __iconPath + "icon/" + id + ".png";
        },
    },
    mounted: function() {
        let game_params = new URLSearchParams(location.search);
        let game_server = game_params.get("server");
        let game_flower = game_params.get("item");

        if (game_server && game_flower) {
            this.current_server = game_server
            this.type = items[game_flower]
        } else {
            if (this.isLogin) {
                getProfile().then((data) => {
                    console.log("1.a.已登录,加载profile_server");
                    this.current_server = data && data.jx3_server || "蝶恋花";
                });
            } else {
                console.log("1.b.未登录,加载最后一次服务器");
                this.current_server =
                    localStorage.getItem("flower_server") || "蝶恋花";
            }
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
