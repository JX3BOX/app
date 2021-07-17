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
        };
    },
    computed: {
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