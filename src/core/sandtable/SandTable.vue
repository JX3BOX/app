<template>
    <div id="app">
        <Header></Header>
        <Breadcrumb
            name="阵营沙盘"
            slug="sandtable"
            root="/app/sandtable"
            :feedbackEnable="true"
            :crumbEnable="true"
        >
            <img slot="logo" svg-inline src="../../assets/img/logos/price.svg"/>
        </Breadcrumb>
        <LeftSidebar :open="false">
            <Nav/>
        </LeftSidebar>
        <Main :withoutRight="true" :withoutLeft="true">
            <div class="m-sandtable">
                <!-- 标题 -->
                <h1 class="m-sandtable-title">沙盘查询</h1>

                <div class="m-sandtable-box" v-loading="currentGate === ''">
                    <div class="m-sandtable-header title-wrapper">
                            <span class="title-server-name">
                                {{
                                    currentServer !== ""
                                        ? currentServer
                                        : "请选择一个服务器"
                                }}
                            </span>
                        <p class="title-origin">
                            数据来源：
                            <el-link
                            >xxx
                            </el-link>
                        </p>
                    </div>
                    <!-- 导航 -->
                    <div class="m-sandtable-nav">
                        <el-tabs
                            tab-position="top"
                            v-model="currentGate"
                            @tab-click="changeServer"
                        >
                            <el-tab-pane
                                v-for="(server, key) in serverList"
                                :key="key"
                                :label="server.serverName"
                                :name="server.serverName"
                            ></el-tab-pane>
                        </el-tabs>
                    </div>
                    <!-- 搜索 -->
                    <div class="m-sandtable-search">
                        <!-- 阵营选择-->
                        <div class="m-sandtable-search-camp">
                            <el-col :span="7">
                                <el-select
                                    class="u-camp"
                                    v-model="currentCamp"
                                    filterable
                                    placeholder="阵营选择"
                                >
                                    <el-option
                                        v-for="item in campList"
                                        :key="item"
                                        :label="item"
                                        :value="item"
                                    >
                                    </el-option>
                                </el-select>
                            </el-col>
                        </div>
                        <!--  路线开关-->
                        <div class="m-sandtable-search-route">
                            <el-switch class="route-switch"
                                       v-model="route"
                            >
                            </el-switch>
                            <p class="route-origin">
                                显示进攻路线</p>
                        </div>
                        <!-- 日期选择-->
                        <div class="m-sandtable-search-date">
                            <el-date-picker
                                v-model="currentDate"
                                type="date"
                                placeholder="选择日期">
                            </el-date-picker>
                        </div>
                    </div>
                </div>


            </div>
            <Footer/>
        </Main>
    </div>
</template>

<script>
import Nav from "@/components/Nav.vue";
import serverData from "@jx3box/jx3box-data/data/server/server.json";
import User from "@jx3box/jx3box-common/js/user";
import {axios, realUrl} from "@/service/api";
import {JX3BOX} from "@jx3box/jx3box-common";


export default {
    name: "SandTable.vue",
    data: function () {
        return {
            serverList: {},
            currentGate: "",
            currentServer: "",
            currentCamp: "",
            currentDate: "",
            campList: ['浩气盟', '恶人谷'],
            route: false,
            defaultServer: '蝶恋花'
        };
    },
    methods: {
        async initMethod() {
            let tmpdict = {};
            let getUserServerSaved = this.defaultServer;
            // let sandTableUrl = realUrl(JX3BOX.__helperUrl, "api/sandmap");


            if (this.uid) {
                let userUrl = realUrl(JX3BOX.__cms, "api/cms/user/my/profile");
                getUserServerSaved = axios(userUrl, "GET", true);
            } else {
                getUserServerSaved = this.getFromLocal();
            }

            // let params = {
            //     server: getUserServerSaved
            // };
            // let getSandTableData = axios(sandTableUrl, "GET", false, {}, {}, params);

            let serverName = this.defaultServer;
            let axiosSuccess = false;
            Promise.all([getUserServerSaved])
                .then((result) => {
                    if (serverData && serverData.server_dict) {
                        for (let gate in serverData.server_dict) {
                            tmpdict[gate] = {
                                serverName: serverData.server_dict[gate],
                                isPinned: false,
                                gate: gate,
                            };
                        }
                    }
                    this.serverList = tmpdict;
                    serverName = result[0].data.jx3_server || this.defaultServer;

                    // let priceData = result[1];
                    // if (priceData.code !== undefined && priceData.code === 0) {
                    //     this.allPriceDataRaw = priceData.data;
                    // }
                    this.currentGate = serverName;
                    axiosSuccess = true;
                })
                .then(() => {
                    if (axiosSuccess) {
                        this.showServer();
                    }
                })
                .catch((e) => {
                    console.log(e);
                });
        },
        getUserId() {
            if (User.isLogin()) {
                this.uid = User.getInfo().uid;
            }
        },
        getFromLocal() {
            return new Promise((resolve, reject) => {
                resolve({code: 0, data: {jx3_server: "蝶恋花"}});
            });
        },
        changeServer: function () {
            this.showServer();
        },
        showServer() {
            this.currentServer = this.currentGate;
        },

        disabledDate(time) {
            return time.getTime() > Date.now();
        }

    },

    mounted: function () {
        this.getUserId();
        this.initMethod();
    },
    components: {
        Nav,
        // Extend,
    },
};
</script>

<style lang="less">
@import "../../assets/css/sandtable.less";
</style>