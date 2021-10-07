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
                            <el-select v-model="version" placeholder="请选择游戏版本" @change="reload">
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
                            <img class="u-pic" :src="item.id | xficon" :alt="item.name" />
                            <span class="u-txt">{{ item.name }}</span>
                        </el-radio>
                    </div>
                    <h2 class="m-talent-subtitle">配置奇穴</h2>
                    <div class="qx-container"></div>
                    <h2 class="m-talent-subtitle">奇穴编码</h2>
                    <div class="m-talent-extend">
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
                    </div>
                </div>
                <div class="m-talent-my" v-if="isLogin">
                    <h2 class="m-talent-subtitle">预设方案</h2>
                    <div class="m-talent-list" v-loading="loading">
                        <ul v-if="list && list.length">
                            <li v-for="(item,i) in list" :key="i">
                                <span class="u-name">{{item.name}}</span>
                                <el-button-group>
                                    <el-button type="primary" icon="el-icon-position" @click="use">使用</el-button>
                                    <el-button type="primary" icon="el-icon-edit" @click="edit">改名</el-button>
                                    <el-button type="primary" icon="el-icon-delete" @click="del">删除</el-button>
                                </el-button-group>
                            </li>
                        </ul>
                        <el-alert v-else title="当前没有任何预设方案" type="info" show-icon></el-alert>
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
import { getTalentVersions } from "@/service/talent.js";
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
            loading: false,
        };
    },
    computed: {
        schema_group: function () {
            return schemas[this.xf];
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
        save : function (){
            
        },

    },
    filters: {
        xficon: function (id) {
            return __imgPath + "image/xf/" + id + ".png";
        },
    },
    mounted: function () {
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
