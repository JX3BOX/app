<template>
    <div id="app" class="p-app-servers">
        <Header></Header>
        <Breadcrumb name="开服监控" slug="servers" root="/app/servers" class="m-app-servers-bread" :feedbackEnable="true" :crumbEnable="true">
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
                    <el-input placeholder="搜索全部服务器" v-model="searchServerName" class="input-with-select">
                        <template slot="prepend">服务器名</template>
                        <template>
                            <i slot="append" class="el-icon-search"></i>
                        </template>
                    </el-input>
                </div>

                <!-- 全部列表 -->
                <div class="serverbox" v-for="(item, index) in list" :key="index">
                    <template v-if="item && item.length > 0">
                        <h2>[ {{ index | serverName }} ]</h2>
                        <el-row :gutter="20" class="server-wrapper server-group-unpinned">
                            <ServerItem v-for="(server, i) in item" :key="i" :server="server" :pinned="false" @toogle-server="clickServer(server)" />
                        </el-row>
                    </template>
                    <template v-else>
                        <h2>[ {{ index | serverName }} ]</h2>
                        <el-alert class="u-alert" title="没有对应的服务器" type="info" center show-icon></el-alert>
                    </template>
                </div>
            </div>
            <Footer></Footer>
        </Main>
    </div>
</template>

<script>
import Nav from "@/components/Nav.vue";
import FServerNode from "./FServerNode.vue";
import User from "@jx3box/jx3box-common/js/user";
import { getMyFocusServers, setMyFocusServers, getAllServers } from "@/service/server.js";
import { __imgPath } from "@jx3box/jx3box-common/data/jx3box.json";
export default {
    name: "Servers",
    data: function() {
        return {
            searchServerName: "",
            isShowMainServer: true,
            serverData: [],
            searchData: [],
            serverAllList: [],
            uid: 0,
        };
    },
    computed: {
        list: function() {
            return !this.searchServerName ? this.serverData : this.searchData;
        },
    },
    methods: {
        getIcon(key) {
            return __imgPath + "image/box/" + key + ".svg";
        },

        // 点击收藏服务器和取消服务器收藏
        clickServer(server) {
            let list = this.serverData.fav || [];
            let index = JSON.stringify(list).indexOf(JSON.stringify(server));
            if (index !== -1) {
                for (let i = 0; i < list.length; i++) {
                    if (list[i].mainServer == server.mainServer) list.splice(i, 1);
                }
            } else {
                list.push(server);
            }
            this.serverData.fav = list;
            if (!this.searchServerName) this.searchData.fav = list;
            this.setSavedServers();
        },

        // 获取服务器列表
        loadAllServers() {
            getAllServers().then(res => {
                let tmpMainServerList = [];
                let tmpNotMainServerList = res.filter(server => {
                    if (server.serverName === server.mainServer) {
                        tmpMainServerList.push(server);
                    }
                    return server.serverName !== server.mainServer;
                });
                this.sortServer(tmpMainServerList);
                this.serverAllList = tmpMainServerList.concat(tmpNotMainServerList);
            });
        },
        // 将获取的服务器分类 [正式服，怀旧服，其他]
        sortServer(server) {
            let old = [];
            let other = [];
            let fav = this.getFromLocal();
            server = server.filter(server => {
                if (server.zoneName.indexOf("比赛专区") !== -1 || server.zoneName.indexOf("区") == -1) {
                    other.unshift(server);
                } else {
                    if (server.zoneName.indexOf("缘起") !== -1) {
                        old.push(server);
                    } else {
                        return server;
                    }
                }
            });

            this.serverData = {
                fav,
                server,
                old,
                other,
            };
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
                    .then(data => {
                        this.serverData.fav = this.serverFav(data);
                        this.setToLocal();
                    })
                    .catch(e => {
                        this.serverData.fav = this.getFromLocal();
                    });
            } else {
                this.serverData.fav = this.getFromLocal();
            }
        },
        serverFav(serverValue) {
            if (!serverValue) return;
            let list = [];
            serverValue = [...new Set(serverValue.split(","))].filter(l => l !== "");
            this.serverAllList.forEach(e => {
                serverValue.forEach(k => {
                    if (k == e.mainServer && k == e.serverName) list.push(e);
                });
            });
            list = list.concat(this.getFromLocal());
            list = [...new Set(list.map(v => JSON.stringify(v)))].map(v => JSON.parse(v));
            return list;
        },
        getFromLocal() {
            let current = localStorage.getItem("jx3_servers") || "";
            if (current) return (this.serverData.fav = JSON.parse(current));
            return [];
        },
        setSavedServers() {
            if (this.uid) {
                let list = this.serverData.fav;
                list = list.map(l => l.serverName);
                setMyFocusServers(list.join(","))
                    .then(data => {
                        console.log(data, "setSavedServers");
                    })
                    .catch(e => {
                        console.log(e);
                    });
            }
            this.setToLocal();
        },
        setToLocal() {
            try {
                let list = [...new Set(this.serverData.fav)];
                localStorage.setItem("jx3_servers", JSON.stringify(list));
            } catch (e) {
                localStorage.clear();
            }
        },
        searchServer(val) {
            if (!val) return delete this.serverData.search;
            let list = this.serverAllList;
            let obj = [];
            list.forEach(e => {
                if (e.serverName.indexOf(val) !== -1) obj.push(e);
            });
            this.searchData = { fav: this.serverData.fav, search: obj };
        },
    },
    filters: {
        serverName(index) {
            let name = {
                search: "搜索结果",
                server: "正式服",
                old: "怀旧服",
                other: "其他",
                fav: "收藏",
            };
            return name[index];
        },
    },
    mounted: function() {
        this.getUserId();
        this.loadAllServers();
        this.getSavedServers();
    },
    components: {
        Nav,
        ServerItem: FServerNode,
    },
    watch: {
        searchServerName(val) {
            this.searchServer(val);
        },
    },
};
</script>

<style lang="less">
@import "../../assets/css/servers.less";
</style>
