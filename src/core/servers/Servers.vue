<template>
    <div id="app" class="p-app-servers">
        <Header></Header>
        <Breadcrumb
            name="开服监控"
            slug="servers"
            root="/app/servers"
            class="m-app-servers-bread"
            :feedbackEnable="true"
            :crumbEnable="true"
        >
            <img class="u-app-servers" slot="logo" svg-inline :src="getIcon('servers')" />
        </Breadcrumb>
        <LeftSidebar :open="false">
            <Nav />
        </LeftSidebar>
        <Main :withoutRight="true" :withoutLeft="true">
            <div class="m-app-servers">
                <!-- 标题 -->
                <h1 class="m-app-servers-title">剑三服务器实时监控面板</h1>

                <!-- 搜索框 -->
                <div class="searchbar-wrapper">
                    <el-input
                        placeholder="搜索服务器"
                        v-model="searchServerName"
                        class="input-with-select"
                    >
                        <template slot="prepend">服务器名</template>
                        <template slot="append">
                            <el-switch
                                style="display: block"
                                v-model="isShowMainServer"
                                active-color="#13ce66"
                                active-text="只看主服"
                            ></el-switch>
                        </template>
                    </el-input>
                </div>

                <!-- 收藏列表 -->
                <el-row
                    :gutter="20"
                    class="server-wrapper server-group-pinned"
                    v-show="
                        pinnedServerName.length > 0 && serverList.length > 0
                    "
                >
                    <template v-for="(server, index) in serverList">
                        <f-server-node
                            :key="index"
                            :server="server"
                            :pinned="true"
                            @toogle-server="clickServer"
                            v-show="
                                pinnedServerName.includes(server.serverName)
                            "
                        />
                    </template>
                </el-row>

                <!-- 全部列表 -->
                <el-row :gutter="20" class="server-wrapper server-group-unpinned">
                    <template v-for="(server, index) in serverList">
                        <f-server-node
                            :key="index"
                            :server="server"
                            :pinned="false"
                            @toogle-server="clickServer"
                            v-show="showUnpinnedServerCondition(server)"
                        />
                    </template>
                </el-row>
            </div>
            <!-- <RightSidebar>
                <div class="m-app-servers-aside">
                    <Github_REPO REPO="app" coder="172,8"></Github_REPO>
                </div>
                <Extend/>
            </RightSidebar>-->
            <Footer></Footer>
        </Main>
    </div>
</template>

<script>
import Nav from "@/components/Nav.vue";
import FServerNode from "./FServerNode.vue";
import { axios } from "@/service/api.js";
import { JX3BOX } from "@jx3box/jx3box-common";
import Extend from "@/components/Extend.vue";
import User from "@jx3box/jx3box-common/js/user";
import { getMyFocusServers, setMyFocusServers } from "@/service/server.js";
import { __imgPath } from "@jx3box/jx3box-common/data/jx3box.json";
export default {
    name: "Servers",
    data: function () {
        return {
            searchServerName: "",
            isShowMainServer: true,
            serverList: [],
            pinnedServerName: [],
            uid: 0,
        };
    },
    computed: {},
    methods: {
        getIcon(key) {
            return __imgPath + "image/box/" + key + ".svg";
        },
        showUnpinnedServerCondition(server) {
            let searchServerNameTrimed = this.searchServerName.replace(
                /\ /g,
                ""
            );
            let isSearchInputEmpty = searchServerNameTrimed === "";
            let isServerNameSearched =
                server.serverName.indexOf(searchServerNameTrimed) !== -1;
            let isMainServer = server.serverName === server.mainServer;
            return (
                !this.pinnedServerName.includes(server.serverName) &&
                ((!isSearchInputEmpty && isServerNameSearched) ||
                    (isSearchInputEmpty && !this.isShowMainServer) ||
                    (isSearchInputEmpty && isMainServer))
            );
        },
        clickServer(serverName) {
            let index = this.pinnedServerName.indexOf(serverName);
            if (index === -1) {
                this.pinnedServerName.push(serverName);
            } else {
                this.pinnedServerName.splice(index, 1);
            }
            this.setSavedServers();
        },
        loadAllServers() {
            // let url = 'http://localhost:3002/jx3servers';
            let url = JX3BOX.__spider + "jx3servers";
            axios(url, "GET")
                .then((response) => {
                    if (response.msg === "success") {
                        let tmpMainServerList = [];
                        let tmpNotMainServerList = response.data.filter(
                            (server) => {
                                if (server.serverName === server.mainServer) {
                                    tmpMainServerList.push(server);
                                }
                                return server.serverName !== server.mainServer;
                            }
                        );
                        this.serverList = tmpMainServerList.concat(
                            tmpNotMainServerList
                        );
                    }
                })
                .catch((e) => {
                    console.log(e);
                })
                .then(() => {});
        },
        getUserId() {
            if (User.isLogin()) {
                this.uid = User.getInfo().uid;
            }
        },
        getSavedServers() {
            // 获取用户储存的服务器列表
            if (this.uid) {
                getMyFocusServers()
                    .then((data) => {
                        let serverValue = data;
                        if (serverValue) {
                            this.pinnedServerName = serverValue.split(",");
                        } else {
                            this.pinnedServerName = [];
                        }
                    })
                    .catch((e) => {
                        this.getFromLocal();
                    });
            } else {
                this.getFromLocal();
            }
        },
        getFromLocal() {
            if (window.localStorage) {
                let current = localStorage.getItem("jx3_servers");
                if (current) {
                    this.pinnedServerName = current.split(",");
                }
            }
        },
        setSavedServers() {
            if (this.uid) {
                setMyFocusServers(this.pinnedServerName.join(","))
                    .then((data) => {})
                    .catch((e) => {
                        this.setToLocal();
                    });
            } else {
                // 储存在本地
                this.setToLocal();
            }
        },
        setToLocal() {
            if (window.localStorage) {
                let names = this.pinnedServerName.join(",");
                localStorage.setItem("jx3_servers", names);
            }
        },
    },
    filters: {},
    mounted: function () {
        this.getUserId();
        this.getSavedServers();
        this.loadAllServers();
    },
    components: {
        Nav,
        FServerNode,
        // Extend
    },
};
</script>

<style lang="less">
@import "../../assets/css/servers.less";
</style>
