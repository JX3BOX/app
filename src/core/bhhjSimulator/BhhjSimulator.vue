<template>
    <div id="app">
        <Header></Header>
        <Breadcrumb
            name="八荒衡鉴模拟器"
            slug="bhhjSimulator"
            root="/app/bhhjSimulator"
            :feedbackEnable="true"
            :crumbEnable="true"
        >
            <img slot="logo" svg-inline :src="getAppIcon('talent')" />
        </Breadcrumb>
        <LeftSidebar :open="false">
            <Nav />
        </LeftSidebar>
        <Main :withoutRight="true" :withoutLeft="true">
            <div class="m-bahuang">
                <h1 class="m-bahuang-title">八荒衡鉴模拟器</h1>
                <div class="u-my-scheme">
                    <el-button type="primary" @click="updateDrawer(true)" icon="el-icon-setting" size="small">
                        我的预设
                    </el-button>
                </div>
                <!--盒子左中右分栏-->
                <div class="m-bahuang-box" v-loading="loading">
                    <div class="m-bahuang-left">
                        <el-tabs v-model="activeTabName" type="card">
                            <el-tab-pane label="秘术" name="arcane" />
                            <el-tab-pane label="秘技" name="cheats" />
                            <el-tab-pane label="绝学" name="stunt" />
                        </el-tabs>
                        <div class="m-tab-box">
                            <div class="u-box">
                                <div
                                    v-for="(item, i) in leftOptions[activeTabName]"
                                    :key="'a' + i"
                                    class="u-bahuang-l-box"
                                    @click="leftIconClick(item, i, 1)"
                                >
                                    <skill :info="item" :select="item.select" :skillType="false" />
                                    <span class="u-name">{{ item.Name }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="m-bahuang-content" v-loading="rightLoading">
                        <RightBox
                            :selectOptions="selectOptions"
                            :isEdit="isEdit"
                            @skillClick="rightSkill($event)"
                            @saveScheme="openSaveScheme($event)"
                            @icoRemove="icoRightRemove($event)"
                        />
                    </div>
                    <!--<div class="m-bahuang-right" v-if="isLogin">-->
                    <!--<el-button type="primary" @click="schemeDrawer = true" icon="el-icon-setting" size="small">我的预设</el-button>-->
                    <!--</div>-->
                </div>
            </div>
        </Main>
        <Footer></Footer>
        <!--预设方案抽屉-->
        <drawer :drawer="schemeDrawer" @update-drawer="updateDrawer" @use="useScheme($event)"></drawer>
        <!--保存方案弹窗-->
        <el-dialog
            :title="title"
            :visible.sync="dialogFormVisible"
            :close-on-press-escape="false"
            :close-on-click-modal="false"
        >
            <el-form :model="schemeForm">
                <el-form-item label="方案名称">
                    <el-input v-model="schemeForm.title" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="方案描述">
                    <el-input v-model="schemeForm.desc" autocomplete="off" type="textarea"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer">
                <el-button @click="reload">取 消</el-button>
                <el-button type="primary" @click="saveScheme">保 存</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
import Nav from "@/components/Nav.vue";
import { getAppIcon, iconLink } from "@jx3box/jx3box-common/js/utils";
import RightBox from "./components/right";
import skill from "./components/skill";
import drawer from "./components/drawer";
import { getBhhjInfo, savebh, getBh, putBh } from "@/service/bhhjSimulator";
import xf from "@jx3box/jx3box-data/data/xf/school.json";
import User from "@jx3box/jx3box-common/js/user";

export default {
    name: "BhhjSimulator",
    components: {
        Nav,
        RightBox,
        skill,
        drawer,
    },
    data: function () {
        return {
            loading: true,
            schemeLoading: false,
            rightLoading: false,
            activeTabName: "",
            xf_filtrate: [],
            leftOptions: {
                arcane: [],
                cheats: [],
                stunt: [],
            },
            selectOptions: {
                arcane: [],
                cheats: [],
                stunt: [],
                cittaArr: [],
                citta: null,
            }, //选择集合
            //秘术右侧激活数量
            rightArcaneNum: 0,
            schemeList: [],
            schemeDrawer: false,
            dialogFormVisible: false,
            title: "预设方案",
            isEdit: false,
            schemeForm: {
                title: "",
                desc: "",
                client: "origin",
                status: 0,
                content: "",
            },
            editForm: null,
        };
    },
    computed: {
        isLogin() {
            return User.isLogin();
        },
    },
    watch: {
        activeTabName(val) {
            window.history.pushState("", "", location.origin + location.pathname + `?tab=${val}`);
        },
    },
    mounted() {
        const tab = new URLSearchParams(location.search).get("tab");
        this.activeTabName = tab || "arcane";
    },
    created() {
        this.getBhhj();
        //xf筛选
        let xf_filtrate = [],
            xfArr = Object.entries(xf);
        for (let i = 0; i < xfArr.length; i++) {
            if (xfArr[i][1].client.indexOf("origin") !== -1) {
                xf_filtrate.push(xfArr[i]);
            }
        }
        this.xf_filtrate = xf_filtrate;
    },
    methods: {
        getAppIcon,
        getBhhj() {
            getBhhjInfo()
                .then((data) => {
                    this.leftOptions.stunt = data[3];
                    this.leftOptions.arcane = data[4];
                    this.leftOptions.cheats = data[2];
                    //心决处理，0 1下标0 一段效果 1二段效果
                    this.xffiltrate(data[0], data[1]);
                    this.loading = false;
                })
                .finally(() => {
                    this.loading = false;
                });
        },
        /**
         * 心决重排处理
         * @param xj1 1段效果
         * @param xj2 2段效果
         */
        xffiltrate(xj1, xj2) {
            let xf_filtrate = this.xf_filtrate;
            let xjArr = [];
            for (let i = 0; i < xf_filtrate.length; i++) {
                let json = {
                    name: xf_filtrate[i][0],
                    value: i,
                };
                let xjFilter1 = xj1.filter((x) => {
                    return x.Remark.indexOf(json.name) !== -1;
                });
                let xjFilter2 = xj2.filter((x) => {
                    return x.Remark.indexOf(json.name) !== -1;
                });
                json.content = xjFilter1.concat(xjFilter2);
                xjArr.push(json);
            }
            this.selectOptions.cittaArr = xjArr;
        },
        /**
         * 左侧模块图标点击事件处理
         * @param item 图标信息
         * @param i 图标下标
         * @param type 图标所属模块 1秘术 2秘技 3绝学
         */
        leftIconClick(item, i, type) {
            // 秘术最多选择12个，秘技4个，绝学1个
            let json = {
                info: item,
                index: i,
            };
            if (type === 1) {
                //先判断是否取消，若为取消需移除
                if (item.select) {
                    this.iconRemove(i, type);
                } else {
                    if (this.selectOptions.arcane.length === 12) {
                        this.$message({
                            message: "秘术选择最多12个现已达上限！",
                            type: "warning",
                        });
                        return;
                    }
                    if (this.selectOptions.arcane.length < 6) {
                        json.select_r = true;
                        this.rightArcaneNum = this.selectOptions.arcane.length + 1;
                    }
                    this.selectOptions.arcane.push(json);
                }
            } else if (type === 2) {
                // cheats
                if (item.select) {
                    this.iconRemove(i, type);
                } else {
                    if (this.selectOptions.cheats.length === 4) {
                        this.$message({
                            message: "秘技选择最多4个现已达上限！",
                            type: "warning",
                        });
                        return;
                    }
                    this.selectOptions.cheats.push(json);
                }
            } else if (type === 3) {
                // stunt,绝学只有1个 替换模式
                if (item.select) {
                    this.selectOptions.stunt = [];
                } else {
                    //添加是如果原来有需将原来状态置为未选择
                    if (this.selectOptions.stunt.length === 1) {
                        let i = this.selectOptions.stunt[0].index;
                        this.leftOptions.stunt[i].select = false;
                    }
                    this.selectOptions.stunt = [json];
                }
            }
            if (item.select) {
                item.select = false;
            } else {
                item.select = true;
            }
            this.$forceUpdate();
        },
        //选择移除
        iconRemove(index, type) {
            let s = this.selectOptions,
                iconArr = [];
            if (type === 1) {
                let isActive = false,
                    isSubtract = false;
                for (let i = 0; i < s.arcane.length; i++) {
                    if (s.arcane[i].index !== index) {
                        // if(!isActive && isSubtract && !s.arcane[i].select_r){
                        //     s.arcane[i].select_r=true
                        //     isActive=true
                        //     this.rightArcaneNum++
                        // }
                        iconArr.push(s.arcane[i]);
                    } else {
                        if (s.arcane[i].select_r) {
                            isSubtract = true;
                            this.rightArcaneNum--;
                        }
                    }
                }
                this.selectOptions.arcane = iconArr;
            } else if (type === 2) {
                for (let i = 0; i < s.cheats.length; i++) {
                    if (s.cheats[i].index !== index) {
                        iconArr.push(s.cheats[i]);
                    }
                }
                this.selectOptions.cheats = iconArr;
            }
        },
        //右侧模块技能激活调整,只控制激活状态不做移除操作
        rightSkill(e) {
            if (!e.info.select_r && this.rightArcaneNum === 6) {
                this.$message({
                    message: "秘术最多可激活6个！",
                    type: "warning",
                });
                return;
            }
            let info = JSON.parse(JSON.stringify(e.info));
            if (e.info.select_r) {
                info.select_r = false;
                this.rightArcaneNum--;
            } else {
                info.select_r = true;
                this.rightArcaneNum++;
            }
            // this.selectOptions.arcane[e.index]=info
            this.$set(this.selectOptions.arcane, e.index, info);
            this.$forceUpdate();
        },
        reload(type) {
            this.schemeForm = {
                title: "",
                desc: "",
                client: "origin",
                status: 0,
                content: "",
            };
            if (type != 1) {
                this.dialogFormVisible = false;
            }
        },
        icoRightRemove(e) {
            this.leftIconClick(e.item.info, e.item.index, e.type);
        },
        openSaveScheme(e) {
            this.reload(1);
            let s = this.selectOptions;
            this.schemeForm.content = {
                arcane: s.arcane,
                cheats: s.cheats,
                stunt: s.stunt,
                citta: s.citta,
            };
            this.title = "预设方案";
            //处理数据，根据type判断是保存还是另存
            if (e.type === 1 && this.isEdit) {
                this.title = "编辑方案";
                this.$set(this.schemeForm, "id", this.editForm.id);
                this.$set(this.schemeForm, "title", this.editForm.title);
                this.$set(this.schemeForm, "desc", this.editForm.desc);
            } else if (e.type === 2 && this.isEdit) {
                this.$set(this.schemeForm, "title", this.editForm.title);
                this.$set(this.schemeForm, "desc", this.editForm.desc);
            }
            this.dialogFormVisible = true;
        },
        saveScheme() {
            if (this.schemeForm.id) {
                putBh(this.schemeForm.id, this.schemeForm).then((data) => {
                    this.reload();
                    this.$message({
                        message: "编辑成功",
                        type: "success",
                    });
                });
            } else {
                savebh(this.schemeForm).then((data) => {
                    this.reload();
                    this.$message({
                        message: "保存成功",
                        type: "success",
                    });
                });
            }
        },
        updateDrawer: function (val) {
            if (this.isLogin) {
                this.schemeDrawer = val;
            } else {
                this.$alert("请先登录", "提示");
            }
        },
        useScheme(item) {
            this.$confirm("确认使用该方案，操作会覆盖当前?", "提示", {
                confirmButtonText: "确定",
                cancelButtonText: "取消",
                type: "warning",
            })
                .then(() => {
                    this.rightLoading = true;
                    getBh(item.id)
                        .then((data) => {
                            this.$notify({
                                type: "success",
                                title: "成功",
                                message: "方案设置成功",
                            });
                            this.rightLoading = false;
                            this.isEdit = true;
                            let res = data.data.data;
                            this.$set(this.selectOptions, "arcane", res.content.arcane);
                            this.$set(this.selectOptions, "cheats", res.content.cheats);
                            this.$set(this.selectOptions, "stunt", res.content.stunt);
                            this.$set(this.selectOptions, "citta", res.content.citta);
                            this.$set(this, "editForm", res);
                        })
                        .finally(() => {
                            this.rightLoading = false;
                        });
                })
                .catch(() => {});
        },
    },
};
</script>

<style lang="less">
@import "../../assets/css/bhhjSimulator.less";
</style>
