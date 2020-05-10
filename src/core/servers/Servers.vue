<template>
    <div id="app">
        <Header></Header>
        <Breadcrumb name="开服监控" slug="servers" root="/app/servers">
            <img
                slot="logo"
                svg-inline
                src="../../assets/img/servers/servers.svg"
            />
        </Breadcrumb>
        <LeftSidebar>
            <Nav />
        </LeftSidebar>
        <Main :withoutRight="false">
            <div class="m-servers">
                <el-row class="searchbar-wrapper" :gutter="10">
                    <el-col :xl="20" :sm="17" :xs="10">
                        <el-input
                            placeholder="搜索服务器"
                            v-model="searchServerName"
                            class="input-with-select"
                        >
                            <!-- <el-select v-model="select" slot="prepend" placeholder="请选择大区">
                            <el-option label="全部大区" value="1"></el-option>
                            <el-option label="电信一区" value="2"></el-option>
                            <el-option label="电信五区" value="3"></el-option>
                        </el-select> -->
                            <!-- <el-button slot="append" icon="el-icon-search"></el-button> -->
                        </el-input>
                    </el-col>
                    <el-col
                        :xl="4"
                        :sm="7"
                        :xs="14"
                        style="text-align: center;"
                    >
                        <el-switch
                            style="display: block"
                            v-model="isShowMainServer"
                            active-color="#13ce66"
                            active-text="只看主服"
                            inactive-text="所有服务器"
                        ></el-switch>
                    </el-col>
                </el-row>
                <div
                    class="server-wrapper server-group-pinned"
                    v-show="
                        pinnedServerName.length > 0 && serverList.length > 0
                    "
                >
                    <template v-for="(server, index) in serverList">
                        <f-server-node
                            :key="index"
                            width="200px"
                            :server="server"
                            :pinned="true"
                            @toogle-server="clickServer"
                            v-show="
                                pinnedServerName.includes(server.serverName)
                            "
                        />
                        <!-- <f-server-node name="如梦令" :pinned="true" zone="电信五区" main="梦江南" status="online" @toogle-server="clickServer"></f-server-node> -->
                    </template>
                </div>
                <div class="server-wrapper server-group-unpinned">
                    <template v-for="(server, index) in serverList">
                        <f-server-node
                            :key="index"
                            width="200px"
                            :server="server"
                            :pinned="false"
                            @toogle-server="clickServer"
                            v-show="showUnpinnedServerCondition(server)"
                        />
                        <!-- <f-server-node name="如梦令" :pinned="true" zone="电信五区" main="梦江南" status="online" @toogle-server="clickServer"></f-server-node> -->
                    </template>
                </div>
            </div>
            <RightSidebar>
                <div class="m-servers-aside"></div>
            </RightSidebar>
            <Footer></Footer>
        </Main>
    </div>
</template>

<script>
import Info from "@/components/Info.vue";
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
                                this.pinnedServerName = serverValue.split(
                                    ","
                                );
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
.m-servers {
    padding: 10px;
}
.m-servers::after {
    content: "";
    display: table;
    clear: both;
}
.searchbar-wrapper {
    display: flex;
    align-items: center;
    margin: auto 0 !important;
}
.server-wrapper {
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
.server-wrapper::after {
    content: "";
    display: table;
    clear: both;
}
.server-group-pinned {
    background-color: #eeeeee;
    padding-top: 20px;
    border-radius: 10px;
}
</style>
