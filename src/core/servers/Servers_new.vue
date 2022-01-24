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
                    <el-input placeholder="搜索服务器" v-model="searchServerName" class="input-with-select">
                        <template slot="prepend">服务器名</template>
                        <template slot="append">
                            <i class="el-icon-search"></i>
                        </template>
                    </el-input>
                </div>

                <!-- 全部列表 -->
                <div class="serverbox" v-for="(list, index) in serverData" :key="index">
                    <template v-if="list.length > 0">
                        <h2>[ {{ index | serverName }} ]</h2>
                        <el-row :gutter="20" class="server-wrapper server-group-unpinned">
                            <ServerItem v-for="(server, i) in list" :key="i" :server="server" :pinned="false" @toogle-server="clickServer(server)" />
                        </el-row>
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
            serverAllList: [],
            uid: 0,
        };
    },
    computed: {},
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
                        let serverValue = data;
                        if (serverValue) {
                            this.getFromLocal();
                            let list = this.serverFav(serverValue);
                            this.serverData.fav = list;
                        } else {
                            this.serverData.fav = [];
                        }
                    })
                    .catch(e => {
                        this.serverData.fav = this.getFromLocal();
                    });
            } else {
                this.serverData.fav = this.getFromLocal();
            }
        },
        serverFav(serverValue) {
            serverValue = [...new Set(serverValue.split(","))].filter(l => l !== "");
            serverValue.forEach(e => {
                e = this.serverAllList.find(l.mainServer == e);
            });
            return serverValue;
        },
        getFromLocal() {
            let current = localStorage.getItem("jx3_servers");
            if (current) return (this.serverData.fav = JSON.parse(current));
            return [];
        },
        setSavedServers() {
            if (this.uid) {
                let list = this.serverData.fav;
                list = list.map(l => l.serverName);
                setMyFocusServers(list.join(","))
                    .then(data => {})
                    .catch(e => {
                        this.setToLocal();
                    });
            } else {
                // 储存在本地
                this.setToLocal();
            }
        },
        setToLocal() {
            let names = JSON.stringify(this.serverData.fav);
            localStorage.setItem("jx3_servers", names);
        },
    },
    filters: {
        serverName(index) {
            let name = {
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
};
</script>

<style lang="less">
@import "../../assets/css/servers.less";
</style>
