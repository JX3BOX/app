<template>
    <div id="app">
        <Header></Header>
        <Breadcrumb
            name="奇穴模拟器"
            slug="talent"
            root="/talent"
            :feedbackEnable="true"
        >
            <img
                slot="logo"
                svg-inline
                src="../../assets/img/logos/talent.svg"
            />
            <!-- <Info /> -->
            <div class="m-info"></div>
        </Breadcrumb>
        <LeftSidebar>
            <Nav />
        </LeftSidebar>
        <Main :withoutRight="true">
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
                                    v-for="item in talent_versions"
                                    :key="item.version"
                                    :label="item.name"
                                    :value="item.version"
                                >
                                </el-option>
                            </el-select>
                        </div>
                    </div>
                </div>
                <el-row class="m-talent-wrapper">
                    <el-col :span="8"
                        ><div class="m-talent-left">
                            <!-- <h2 class="m-talent-subtitle">1.选择心法</h2> -->
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
                        </div></el-col
                    >
                    <el-col :span="16"
                        ><div class="m-talent-right">
                            <h2 class="m-talent-subtitle">配置奇穴</h2>
                            <div class="qx-container"></div>
                            <h2 class="m-talent-subtitle">奇穴编码</h2>
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
                                粘贴编码亦可自动解析奇穴
                            </p>
                        </div></el-col
                    >
                </el-row>
                <div class="m-talent-shortcut">
                    <el-divider content-position="left">常用配置</el-divider>
                    <ul>
                        <li v-for="(item, i) in schema_group" :key="i">
                            <schema
                                :config="item"
                                :version="version"
                                :xf="xf"
                            />
                        </li>
                    </ul>
                </div>
            </div>

            <!-- <RightSidebar>
                <Github_REPO REPO="jx3box-talent" coder="8"></Github_REPO>
                <Extend />
            </RightSidebar> -->
            <Footer></Footer>
        </Main>
    </div>
</template>

<script>
// import Info from "@/components/Info.vue";
import Nav from "@/components/Nav.vue";
import Extend from "@/components/Extend.vue";
import xfmap from "@jx3box/jx3box-data/data/xf/xf.json";
import { __ossMirror } from "@jx3box/jx3box-common/js/jx3box.json";
import JX3_QIXUE from "@jx3box/jx3box-talent";
import $ from "jquery";
import schema from "./schema.vue";
import schemas from "./schemas.json";

export default {
    name: "Talent",
    props: [],
    data: function() {
        return {
            version: "v20200522",
            xf: "其它",
            sq: "1,1,1,1,1,1,1,1,1,1,1,1",
            driver: "",
            code: "",

            talent_versions: [
                {
                    version: "v20200522",
                    name: "结庐在江湖",
                },
                {
                    version: "v20200521",
                    name: "结庐江湖(5.21测试服)",
                },
                {
                    version: "v20200309",
                    name: "凌雪藏锋(3.9技改)",
                },
                {
                    version: "v20200217",
                    name: "凌雪藏锋(2.17技改)",
                },
                {
                    version: "v20200113",
                    name: "凌雪藏锋(1.13技改)",
                },
                {
                    version: "v20191128",
                    name: "凌雪藏锋",
                },
                {
                    version: "v20190926",
                    name: "怒海争锋",
                },
            ],
            xfmap,
            schemas,
        };
    },
    computed: {
        schema_group: function() {
            return schemas[this.xf];
        },
    },
    methods: {
        parseSchema: function() {
            this.driver.then((talent) => {
                // 为空不操作
                if(!this.code) return

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
        reload: function(schema) {
            this.driver.then((talent) => {
                talent.load({
                    version: this.version,
                    xf: this.xf,
                    sq: this.sq,
                    editable: true,
                });
            });
        },
        onCopy: function(val) {
            this.$notify({
                title: "复制成功",
                message: "奇穴编码复制成功",
                type: "success",
            });
        },
        onError: function() {
            this.$notify.error({
                title: "复制失败",
                message: "请手动复制",
            });
        },
    },
    filters: {
        xficon: function(id) {
            return __ossMirror + "image/xf/" + id + ".png";
        },
    },
    mounted: function() {
        this.driver = new JX3_QIXUE({ editable: true });
        const vm = this;
        $(document).on("JX3_QIXUE_Change", function(e, ins) {
            let __data = {};
            __data.version = ins.version;
            __data.xf = ins.xf;
            __data.sq = ins.sq.join(",");
            vm.code = JSON.stringify(__data);
            // console.log(ins)
        });
    },
    components: {
        // Info,
        Nav,
        // Extend,
        schema,
    },
};
</script>

<style lang="less">
@import "../../assets/css/talent.less";
</style>
