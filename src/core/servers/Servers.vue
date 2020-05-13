<template>
    <div id="app" class="p-app-servers">
        <Header></Header>
        <Breadcrumb name="开服监控" slug="servers" root="/app/servers" class="m-app-servers-bread">
            <img
                slot="logo"
                class="u-app-servers"
                svg-inline
                src="../../assets/img/logos/servers.svg"
            />
            <div class="u-misc">
                常用链接 : 
                <a href="http://zt.xoyo.com/jx3/server/">合服查询</a>
            </div>
        </Breadcrumb>
        <LeftSidebar>
            <Nav />
        </LeftSidebar>
        <Main :withoutRight="false">
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
                <el-row
                    :gutter="20"
                    class="server-wrapper server-group-unpinned"
                >
                    <template v-for="(server, index) in serverList">
                        <f-server-node
                            :key="index"
                            width="200px"
                            :server="server"
                            :pinned="false"
                            @toogle-server="clickServer"
                            v-show="showUnpinnedServerCondition(server)"
                        />
                    </template>
                </el-row>
            </div>
            <RightSidebar>
                <div class="m-app-servers-aside">
                    <Github_REPO REPO="app" coder="172,8"></Github_REPO>
                    <ins class="adsbygoogle"
                        style="display:block;width:100%;overflow:hidden;"
                        data-ad-client="ca-pub-4388499329141185"
                        data-ad-slot="9773281887"
                        data-ad-format="auto"
                        data-full-width-responsive="true"></ins>
                </div>
            </RightSidebar>
            <Footer></Footer>
        </Main>
    </div>
</template>

<script>
import Nav from "@/components/Nav.vue";
import FServerNode from "./FServerNode.vue";
import { axios } from "@/service/api.js";
import { JX3BOX, User } from "@jx3box/jx3box-common";

export default {
    name: "Servers",
    data: function() {
        return {
            searchServerName: "",
            isShowMainServer: true,
            serverList: [],
            pinnedServerName: [],
        };
    },
    computed: {},
    methods: {
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
            let index = $.inArray(serverName, this.pinnedServerName);
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
            let url = JX3BOX.__server + "user/meta";
            if (this.uid) {
                // 从服务器读取
                axios(
                    url,
                    "GET",
                    true,
                    {},
                    {},
                    { uid: this.uid, key: "jx3_servers" }
                )
                    .then((response) => {
                        if (response.code == 10050) {
                            let serverValue = response.data.value;
                            if (serverValue) {
                                this.pinnedServerName = serverValue.split(",");
                            } else {
                                this.pinnedServerName = [];
                            }
                        }
                    })
                    .catch((e) => {
                        switch (e.code) {
                            case -1:
                                // 网络异常
                                this.$message.error(e.msg);
                                this.getFromLocal();
                                break;
                            case 9999:
                                this.$message.error("登录失效, 请重新登录");
                                //1.注销
                                User.destroy();
                                //2.保存未提交成功的信息
                                //请保存至IndexedDB,勿占用localstorage
                                //3.跳转至登录页携带redirect
                                setTimeout(() => {
                                    User.toLogin();
                                }, 2000);
                                //不指定url时则自动跳回当前所在页面
                                break;
                            default:
                                // 服务器错误
                                this.$message.error(`[${e.code}]${e.msg}`);
                                this.getFromLocal();
                        }
                    })
                    .then(() => {});
            } else {
                // 本地读取
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
                // 保存到服务器
                let url = JX3BOX.__server + "user/meta";
                axios(url, "POST", true, {
                    uid: this.uid,
                    key: "jx3_servers",
                    value: this.pinnedServerName.join(","),
                })
                    .then((response) => {
                        if (response.code == 10052) {
                            // 成功
                        }
                    })
                    .catch((e) => {
                        switch (e.code) {
                            case -1:
                                // 网络异常
                                this.$message.error(e.msg);
                                this.setToLocal();
                                break;
                            case 9999:
                                this.$message.error("登录失效, 请重新登录");
                                //1.注销
                                User.destroy();
                                //2.保存未提交成功的信息
                                //请保存至IndexedDB,勿占用localstorage
                                //3.跳转至登录页携带redirect
                                setTimeout(() => {
                                    User.toLogin();
                                }, 2000);
                                //不指定url时则自动跳回当前所在页面
                                break;
                            default:
                                // 服务器错误
                                this.$message.error(`[${e.code}]${e.msg}`);
                                this.setToLocal();
                        }
                    })
                    .then(() => {});
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
    mounted: function() {
        this.getUserId();
        this.getSavedServers();
        this.loadAllServers();
    },
    components: {
        Nav,
        FServerNode,
    },
};
</script>

<style lang="less">
@import "../../assets/css/servers.less";
</style>
