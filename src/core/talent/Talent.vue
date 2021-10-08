<template>
    <div id="app">
        <Header></Header>
        <Breadcrumb
            name="奇穴模拟器"
            slug="talent"
            root="/app/talent"
            :feedbackEnable="true"
            :crumbEnable="true"
        >
            <img slot="logo" svg-inline :src="getIcon('talent')" />
            <div class="m-info"></div>
        </Breadcrumb>
        <LeftSidebar :open="false">
            <Nav />
        </LeftSidebar>
        <Main :withoutRight="true" :withoutLeft="true">
            <div class="m-talent">
                <div class="m-talent-header">
                    <h1 class="m-talent-title">奇穴模拟器</h1>
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
                                ></el-option>
                            </el-select>
                        </div>
                        <!-- <div class="u-toolbar" v-if="isLogin">
                            <el-button plain @click="showList = false" icon="el-icon-refresh-left" size="small" v-if="showList">返回</el-button>
                            <el-button type="primary" @click="showList = true" icon="el-icon-setting" size="small" v-else>我的预设</el-button>
                        </div>-->
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
                        >
                            <img
                                class="u-pic"
                                :src="item.id | xficon"
                                :alt="item.name"
                            />
                            <span class="u-txt">{{ item.name }}</span>
                        </el-radio>
                    </div>
                    <h2 class="m-talent-subtitle">配置奇穴</h2>
                    <div class="qx-container"></div>
                    <h2 class="m-talent-subtitle">奇穴编码</h2>
                    <div class="m-talent-code">
                        <el-input
                            placeholder="粘贴编码亦可自动解析奇穴"
                            v-model="code"
                            @change="parseSchema"
                        ></el-input>
                        <div class="m-talent-op">
                            <el-button
                                type="primary"
                                icon="el-icon-document-copy"
                                v-clipboard:copy="code"
                                v-clipboard:success="onCopy"
                                v-clipboard:error="onError"
                                size="small"
                                class="u-btn"
                                >点击复制</el-button
                            >
                            <el-button
                                type="primary"
                                icon="el-icon-document-add"
                                size="small"
                                class="u-btn"
                                @click="save"
                                v-if="isLogin"
                                >保存为预设</el-button
                            >
                        </div>
                    </div>
                    <!-- <div class="m-talent-extend">
                        <el-tabs v-model="activeName" type="card">
                            <el-tab-pane label="通用编码" name="common">
                                <div class="m-talent-code">
                                    <el-input
                                        placeholder="粘贴编码亦可自动解析奇穴"
                                        v-model="code"
                                        @change="parseSchema"
                                    ></el-input>
                                    <div class="m-talent-op">
                                        <el-button
                                            type="primary"
                                            icon="el-icon-document-copy"
                                            v-clipboard:copy="code"
                                            v-clipboard:success="onCopy"
                                            v-clipboard:error="onError"
                                            size="small"
                                            class="u-btn"
                                        >点击复制</el-button>
                                        <el-button
                                            type="primary"
                                            icon="el-icon-document-add"
                                            size="small"
                                            class="u-btn"
                                            @click="save"
                                            v-if="isLogin"
                                        >保存为预设</el-button>
                                    </div>
                                </div>
                            </el-tab-pane>
                            <el-tab-pane label="配装器编码" name="pz">
                                <el-input
                                    placeholder="配装器编码"
                                    v-model="pzcode"
                                    type="textarea"
                                    :rows="4"
                                ></el-input>
                                <el-button
                                    type="primary"
                                    icon="el-icon-document-copy"
                                    v-clipboard:copy="pzcode"
                                    v-clipboard:success="onCopy"
                                    v-clipboard:error="onError"
                                    size="small"
                                    class="u-btn"
                                >点击复制</el-button>
                                <el-button
                                    type="primary"
                                    icon="el-icon-document-add"
                                    size="small"
                                    class="u-btn"
                                    @click="save"
                                    v-if="isLogin"
                                >保存为预设</el-button>
                            </el-tab-pane>
                        </el-tabs>
                    </div> -->
                </div>
                <div class="m-talent-my" v-if="isLogin">
                    <h2 class="m-talent-subtitle">预设方案</h2>
                    <div class="m-talent-list" v-loading="loading">
                        <ul v-if="list && list.length">
                            <li
                                class="m-talent-list-item"
                                v-for="(item, i) in list"
                                :key="i"
                            >
                                <span class="u-name">{{ item.name }}</span>
                                <el-button-group>
                                    <el-tooltip
                                        effect="dark"
                                        content="使用"
                                        placement="top"
                                    >
                                        <el-button
                                            size="mini"
                                            icon="el-icon-position"
                                            @click="use(item)"
                                        ></el-button>
                                    </el-tooltip>
                                    <el-tooltip
                                        effect="dark"
                                        content="改名"
                                        placement="top"
                                    >
                                        <el-button
                                            size="mini"
                                            icon="el-icon-edit"
                                            @click="edit(item)"
                                        ></el-button>
                                    </el-tooltip>
                                    <el-tooltip
                                        effect="dark"
                                        content="删除"
                                        placement="top"
                                    >
                                        <el-button
                                            size="mini"
                                            icon="el-icon-delete"
                                            @click="del(item)"
                                        ></el-button>
                                    </el-tooltip>
                                </el-button-group>
                            </li>

                            <el-pagination
                                class="u-list-pagination"
                                background
                                hide-on-single-page
                                layout="prev,pager,next,->,total"
                                :total="total"
                                :page-size="per"
                                :current-page.sync="page"
                            ></el-pagination>
                        </ul>
                        <el-alert
                            v-else
                            title="当前没有任何预设方案"
                            type="info"
                            show-icon
                        ></el-alert>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </Main>
    </div>
</template>

<script>
// import Info from "@/components/Info.vue";
import Nav from "@/components/Nav.vue";
import Extend from "@/components/Extend.vue";
import xfmap from "@jx3box/jx3box-data/data/xf/xf.json";
import {
    __ossMirror,
    __imgPath,
    __ossRoot,
} from "@jx3box/jx3box-common/data/jx3box.json";
import JX3_QIXUE from "@jx3box/jx3box-talent";
import $ from "jquery";
import schema from "./schema.vue";
import schemas from "./schemas.json";
import {
    getTalentVersions,
    getTalents,
    addTalent,
    putTalent,
    removeTalent,
    getTalent,
} from "@/service/talent.js";
import User from "@jx3box/jx3box-common/js/user";
export default {
    name: "Talent",
    props: [],
    data: function () {
        return {
            activeName: "common",
            xf: "其它",
            sq: "1,1,1,1,1,1,1,1,1,1,1,1",
            driver: "",
            code: "",
            pzcode: "",

            version: "",
            versions: [],
            xfmap,
            schemas,

            isLogin: User.isLogin(),
            showList: false,
            list: [],
            per: 10,
            page: 1,
            total: 0,
            loading: false,
        };
    },
    computed: {
        schema_group: function () {
            return schemas[this.xf];
        },
        client: function () {
            return location.href.includes("origin") ? "origin" : "std";
        },
        mount: function () {
            return this.xfmap[this.xf]?.id;
        },
        params: function () {
            const { client, mount, version, code, pzcode, xf } = this;
            return {
                client,
                type: "talent",
                mount,
                version,
                code: JSON.parse(code),
                pzcode: JSON.parse(pzcode),
                xf,
            };
        },
    },
    methods: {
        getIcon(key) {
            return __imgPath + "image/box/" + key + ".svg";
        },
        parseSchema: function () {
            this.driver.then((talent) => {
                // 为空不操作
                if (!this.code) return;

                let _schema = {};
                try {
                    _schema = JSON.parse(this.code);
                    talent.load(_schema);
                    this.$message({
                        message: "编码解析成功",
                        type: "success",
                    });
                } catch (e) {
                    this.$message.error("编码格式错误");
                }
            });
        },
        reload: function (schema) {
            this.driver.then((talent) => {
                talent.load({
                    version: this.version,
                    xf: this.xf,
                    sq: this.sq,
                    editable: true,
                });
            });
        },
        onCopy: function (val) {
            this.$notify({
                title: "复制成功",
                message: "奇穴编码复制成功",
                type: "success",
            });
        },
        onError: function () {
            this.$notify.error({
                title: "复制失败",
                message: "请手动复制",
            });
        },

        // 预设方案
        save: function () {
            if (!this.mount) {
                this.$notify({
                    type: "warning",
                    title: "提醒",
                    message: "暂未选择心法，请先选择心法",
                });
                return;
            }
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
                    this.loadList();
                });
            });
        },
        loadList: function () {
            this.loading = true;
            getTalents({
                client: this.client,
            })
                .then((res) => {
                    this.list = res.data.data.list;
                    this.page = res.data.data.page;
                    this.per = res.data.data.per;
                    this.total = res.data.data.total;
                })
                .finally(() => {
                    this.loading = false;
                });
        },
        use: function (item) {
            this.code = JSON.stringify(item.code);
            this.pzcode = JSON.stringify(item.pzcode);

            const parseCode = JSON.parse(this.code);

            this.xf = parseCode.xf;

            this.parseSchema();
        },
        edit: function (item) {
            this.$prompt("请输入方案名称", "提示", {
                confirmButtonText: "确定",
                cancelButtonText: "取消",
                inputValue: item.name,
                inputErrorMessage: "输入不能为空",
                inputValidator: (value) => {
                    // 点击按钮时，对文本框里面的值进行验证
                    if (!value) {
                        return "输入不能为空";
                    }
                },
            }).then(({ value }) => {
                putTalent(item.id, { name: value }).then(() => {
                    this.$notify({
                        type: "success",
                        title: "成功",
                        message: "方案名称修改成功",
                    });
                    item.name = value;
                });
            });
        },
        del: function (item) {
            this.$confirm(`确认删除预设方案[${item.name}]？`, "提示", {
                confirmButtonText: "确定",
                cancelButtonText: "取消",
                type: "warning",
            }).then(() => {
                removeTalent(item.id).then(() => {
                    this.$notify({
                        type: "success",
                        title: "成功",
                        message: "预设方案删除成功",
                    });

                    this.list = this.list.filter((li) => li.id !== item.id);
                });
            });
        },

        init: function () {
            getTalentVersions().then((res) => {
                this.versions = res.data;
                this.version =
                    this.versions &&
                    this.versions.length &&
                    this.versions[0]["version"];

                this.driver = new JX3_QIXUE({
                    version: this.version,
                    editable: true,
                });
                const vm = this;
                $(document).on("JX3_QIXUE_Change", function (e, ins) {
                    let __data = {};
                    __data.version = ins.version;
                    __data.xf = ins.xf;
                    __data.sq = ins.sq.join(",");
                    vm.code = JSON.stringify(__data);
                    // console.log(ins)

                    vm.pzcode = JSON.stringify(ins.overview);
                });
            });

            this.isLogin && this.loadList();
        },
    },
    filters: {
        xficon: function (id) {
            return __imgPath + "image/xf/" + id + ".png";
        },
    },
    mounted: function () {
        this.init();
    },
    components: {
        // Info,
        Nav,
        // Extend,
        // schema,
    },
};
</script>

<style lang="less">
@import "../../assets/css/talent.less";
</style>
