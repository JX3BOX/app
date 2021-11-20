<template>
    <div id="app">
        <Header></Header>
        <Breadcrumb
            name="剑三数据库"
            slug="database"
            root="/app/database"
            :feedbackEnable="true"
            :crumbEnable="true"
        >
            <img slot="logo" svg-inline :src="getIcon('database')" />
            <div class="m-info"></div>
        </Breadcrumb>
        <LeftSidebar :open="false">
            <Nav />
        </LeftSidebar>
        <Main :withoutRight="true" :withoutLeft="true">
            <div class="m-database" v-loading="loading">
                <h1 class="m-database-title">剑三数据库</h1>

                <div class="m-database-search">
                    <el-input placeholder="请输入 ID 或 名称" v-model="query" @change="search">
                        <template slot="prepend">ID ／名称</template>
                        <el-button slot="append" icon="el-icon-search"></el-button>
                    </el-input>
                </div>
                <div class="m-databse-subtype">
                    <div class="u-subtype u-client">
                        <el-radio-group v-model="client" size="medium" @change="search">
                            <el-radio-button label="std">正式服</el-radio-button>
                            <el-radio-button label="origin">怀旧服</el-radio-button>
                        </el-radio-group>
                    </div>
                    <!-- <div class="u-label">
                        <i class="el-icon-s-operation"></i>追加条件
                    </div>-->
                    <div class="u-subtype u-strict">
                        <el-switch v-model="strict" active-text="精确匹配" @change="search"></el-switch>
                    </div>
                    <!-- <div class="u-subtype" v-show="type == 'skill'">
                        <el-select v-model="school" placeholder="门派" size="medium" @change="search">
                            <el-option
                                v-for="(label, key) in schools"
                                :key="key"
                                :label="label"
                                :value="key"
                            ></el-option>
                        </el-select>
                    </div> -->
                    <div class="u-subtype" v-show="type == 'skill' || type == 'buff'">
                        <el-input
                            size="medium"
                            placeholder="指定技能/Buff等级"
                            v-model="level"
                            @change="search"
                        >
                            <template slot="prepend">等级</template>
                        </el-input>
                    </div>
                    <div class="u-subtype" v-show="type == 'npc'">
                        <el-input
                            size="medium"
                            placeholder="指定NPC所在地图"
                            v-model="npc_map"
                            @change="search"
                        >
                            <template slot="prepend">地图</template>
                        </el-input>
                    </div>
                    <div class="u-subtype" v-show="type == 'npc'">
                        <el-input
                            size="medium"
                            placeholder="指定NPC等级"
                            v-model="npc_level"
                            @change="search"
                        >
                            <template slot="prepend">等级</template>
                        </el-input>
                    </div>
                    <div class="u-subtype" v-show="type == 'doodad'">
                        <el-input
                            size="medium"
                            placeholder="指定等级"
                            v-model="doodad_level"
                            @change="search"
                        >
                            <template slot="prepend">等级</template>
                        </el-input>
                    </div>
                </div>

                <el-tabs class="m-database-tabs" v-model="type" type="card" @tab-click="changeType">
                    <el-tab-pane label="Buff" name="buff">
                        <span slot="label">
                            <img
                                class="u-icon"
                                svg-inline
                                src="../../assets/img/database/skill3.svg"
                            />
                            <b>Buff</b>
                            <em class="u-count">{{ stat.buff }}</em>
                        </span>
                        <data-buff :data="buff" :vip="hasRight" :status="done" :client="client"/>
                    </el-tab-pane>
                    <el-tab-pane label="技能" name="skill">
                        <span slot="label">
                            <img
                                class="u-icon"
                                svg-inline
                                src="../../assets/img/database/skill4.svg"
                            />
                            <b>技能</b>
                            <em class="u-count">{{ stat.skill }}</em>
                        </span>
                        <data-skill :data="skill" :vip="hasRight" :status="done" :client="client"/>
                    </el-tab-pane>
                    <el-tab-pane label="NPC" name="npc">
                        <span slot="label">
                            <img class="u-icon" svg-inline src="../../assets/img/logos/skull.svg" />
                            <b>NPC</b>
                            <em class="u-count">{{ stat.npc }}</em>
                        </span>
                        <data-npc :data="npc" :vip="hasRight" :status="done" />
                    </el-tab-pane>
                    <el-tab-pane label="交互物件" name="doodad">
                        <span slot="label">
                            <img
                                class="u-icon"
                                svg-inline
                                src="../../assets/img/database/doodad.svg"
                            />
                            <b>交互物件</b>
                            <em class="u-count">{{ stat.doodad }}</em>
                        </span>
                        <data-doodad :data="doodad" :vip="hasRight" :status="done" :client="client" />
                    </el-tab-pane>
                    <el-tab-pane label="物品" name="item">
                        <span slot="label" href="/item" target="_blank">
                            <img class="u-icon" svg-inline src="../../assets/img/database/item.svg" />
                            <b>物品</b>
                            <em class="u-count">{{ stat.item }}</em>
                        </span>
                        <div class="u-tip">
                            <i class="el-icon-warning-outline"></i> 物品请前往独立「
                            <a class="u-item-link" href="/item" target="_blank">物品百科</a>」栏目
                        </div>
                    </el-tab-pane>
                </el-tabs>

                <template v-if="multipage">
                    <!-- 下一页 -->
                    <el-button
                        class="m-archive-more"
                        :class="{ show: hasNextPage }"
                        type="primary"
                        icon="el-icon-arrow-down"
                        @click="appendPage"
                    >加载更多</el-button>
                    <!-- 分页 -->
                    <el-pagination
                        class="m-archive-pages"
                        background
                        layout="total, prev, pager, next,jumper"
                        :hide-on-single-page="true"
                        :page-size="per"
                        :total="total"
                        :current-page.sync="page"
                        @current-change="changePage"
                    ></el-pagination>
                </template>

                <div class="m-database-tip" v-show="isBlank">❤ 请指定搜索条件回车</div>
            </div>
            <Footer></Footer>
        </Main>
    </div>
</template>

<script>
import Nav from "@/components/Nav.vue";
import { loadResource, loadStat } from "../../service/database";
import { __iconPath, __ossRoot } from "@jx3box/jx3box-common/data/jx3box.json";
import User from "@jx3box/jx3box-common/js/user";
import schools from "@jx3box/jx3box-data/data/xf/forceid.json";
import data_buff from "./data_buff.vue";
import data_skill from "./data_skill.vue";
import data_npc from "./data_npc.vue";
import data_doodad from "./data_doodad.vue";
import {__imgPath} from '@jx3box/jx3box-common/data/jx3box.json'
export default {
    name: "Database",
    props: [],
    data: function () {
        return {
            type: "buff",
            query: "",
            npc_map: "",
            npc_level: "",
            doodad_level: "",
            strict: false,
            level: "",
            school: "",

            skill: [],
            advskill: [],
            buff: [],
            advbuff: [],
            npc: [],
            item: [],
            doodad: [],

            stat: {
                skill: 0,
                buff: 0,
                item: 0,
                npc: 0,
                doodad: 0,
            },
            done: false,
            loading: false,

            isSuperAuthor: User.isSuperAuthor(),
            schools,

            per: 10,
            page: 1,
            total: 1,
            pages: 1,

            hasRight: false,

            client : 'std'
        };
    },
    computed: {
        isBlank: function () {
            return !this.query && !this[this.type]["length"];
        },
        hasNextPage: function () {
            return this.total > 1 && this.page < this.pages;
        },
        multipage: function () {
            return this.done && this.pages > 1;
        },
    },
    methods: {
        getIcon(key){
            return __imgPath + 'image/box/' + key + '.svg'
        },
        getData: function (page = 1, append = false) {
            if (!this.query) return;

            this.loading = true;
            this.done = false;
            let query = this.query;

            let params = {
                strict: ~~this.strict,
                per: this.per,
                page: page,
                client : this.client
            };
            if (this.type == "npc") {
                if (this.npc_map) params.map = this.npc_map;
                if (this.npc_level) params.level = this.npc_level;
            }
            if (this.type == "skill" || this.type == "buff") {
                if (this.level) params.level = this.level;
            }
            if (this.type == "skill") {
                if (this.school || this.school == 0)
                    params.school = this.school;
            }
            if (this.type == "doodad") {
                if (this.doodad_level) params.level = this.doodad_level;
            }

            let mode = isNaN(query) ? "name" : "id";
            loadResource(this.type, mode, query, params)
                .then((data) => {
                    if (append) {
                        this[this.type] = this[this.type].concat(
                            this.transformData(data.list)
                        );
                    } else {
                        window.scroll(0, 0);
                        this[this.type] = this.transformData(data.list);
                    }
                    this.pages = data.pages;
                    this.total = data.total;
                })
                .finally(() => {
                    this.done = true;
                    this.loading = false;
                });
        },
        search: function () {
            this.page = 1;
            this.getData();
        },
        toggleProps: function (o) {
            o.isopen = !o.isopen;
        },
        transformData: function (data) {
            data.forEach((item) => {
                item.isopen = false;
            });
            return data;
        },
        appendPage: function () {
            this.getData(++this.page, true);
        },
        changePage: function (i) {
            this.getData(i);
        },
        changeType: function () {
            this.page = 1;
            this.getData();
        },
    },
    filters: {},
    created: function () {
        this.client = this.$store.state.client;

        loadStat(this.client).then((data) => {
            this.stat = data;
        });

        User.isLogin() &&
            User.isVIP().then((data) => {
                this.hasRight = data;
            });
    },
    mounted: function () {
        let params = new URLSearchParams(location.search);
        this.type = params.get("type") || "buff";
        this.query = params.get("query") || "";
        this.level = params.get("level") || "";
        this.search();
    },
    components: {
        Nav,
        "data-buff": data_buff,
        "data-skill": data_skill,
        "data-npc": data_npc,
        "data-doodad": data_doodad,
    },
};
</script>

<style lang="less">
@import "../../assets/css/database.less";
</style>
