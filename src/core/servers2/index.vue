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
                    <el-input placeholder="搜索全部服务器" v-model="searchServerName" class="input-with-select">
                        <template slot="prepend">服务器名</template>
                        <template>
                            <i slot="append" class="el-icon-search"></i>
                        </template>
                    </el-input>
                </div>
                <!-- 全部列表 -->
                <div class="serverbox">
                    <el-collapse v-model="showCollapse">
                        <el-collapse-item v-if="favList.length" title="收藏" :name="1">
                            <div class="serverbox-list">
                                <div
                                    class="serverbox-item"
                                    v-for="(serverItem, serverIndex) in favList"
                                    :key="serverIndex"
                                >
                                    <server-card
                                        :data="serverItem"
                                        :favList="favList"
                                        @clickServer="clickServer"
                                    ></server-card>
                                </div>
                            </div>
                        </el-collapse-item>
                        <div v-if="list.length">
                            <el-collapse-item
                                v-for="(item, index) in list"
                                :key="index"
                                :title="item.zone_name"
                                :name="index + 2"
                            >
                                <div v-if="item.serverArr" class="serverbox-list">
                                    <div
                                        class="serverbox-item"
                                        v-for="(serverItem, serverIndex) in item.serverArr"
                                        :key="serverIndex"
                                    >
                                        <server-card :data="serverItem" :favList="favList" @clickServer="clickServer"></server-card>
                                    </div>
                                </div>
                                <template v-else>
                                    <el-alert
                                        class="u-alert"
                                        title="没有对应的服务器"
                                        type="info"
                                        center
                                        show-icon
                                    ></el-alert>
                                </template>
                            </el-collapse-item>
                        </div>
                        <template v-else>
                            <el-alert class="u-alert" title="没有对应的服务器" type="info" center show-icon></el-alert>
                        </template>
                    </el-collapse>
                </div>
            </div>
            <Footer></Footer>
        </Main>
    </div>
</template>

<script>
import Nav from "@/components/Nav.vue";
import User from "@jx3box/jx3box-common/js/user";
import { getMyFocusServers, setMyFocusServers, getAllServers } from "@/service/server2.js";
import { __imgPath } from "@jx3box/jx3box-common/data/jx3box.json";
import serverCard from "./components/serverCard/serverCard.vue";
export default {
    name: "Servers2",
    data: function () {
        return {
            searchServerName: "",
            serverData: {},
            searchData: {},
            serverAllList: [],
            serverAllArr: [], //接口获取的服务器参数
            favList: [],
            serverArr: [], //拼接后的服务器参数
            searchArr: [], //搜索到的参数
            showCollapse: [2], //当前展开的栏目
        };
    },
    computed: {
        list: function () {
            return !this.searchServerName ? this.serverArr : this.searchArr;
        },
        uid: function () {
            return User.getInfo().uid || 0;
        },
    },
    methods: {
        getIcon(key) {
            return __imgPath + "image/box/" + key + ".svg";
        },

        // 点击收藏服务器和取消服务器收藏
        clickServer(server) {
            let list = new Set(this.favList);
            let fav = [];
            list.has(server) ? list.delete(server) : list.add(server);
            for (let key of list.keys()) {
                // console.log(list.keys());
                fav.push(key);
            }
            this.favList = fav;
            this.showCollapse = this.setCollapseIndex(1);
            this.setSavedServers();
        },

        // 获取服务器列表
        loadAllServers() {
            getAllServers().then((res) => {
                this.serverAllArr = res.data.map((serverItem) => {
                    return {
                        ...serverItem,
                        connect_state_name: serverItem.connect_state ? "已开服" : "维护中",
                    };
                });
                this.serverArr = this.setItemData(this.serverAllArr);
                this.serverArr.forEach((item, index) => {
                    this.showCollapse = this.setCollapseIndex(index + 2);
                });
                if (this.uid) {
                    getMyFocusServers().then((data) => {
                        this.serverFav(data);
                    });
                }
            });
        },
        //转服务器数据 str转换成obj
        serverFav(data) {
            if (!data) return;
            data = data.split(",");
            this.serverAllArr.forEach((k) => {
                if (data.includes(k.main_server)) this.favList.push(k);
            });
            this.showCollapse = this.setCollapseIndex(1);
        },
        //登录状态存服务器，未登录跳转
        setSavedServers() {
            if (this.uid) {
                let list = this.favList.map((el) => el.main_server);
                setMyFocusServers(list.join(","))
                    .then((data) => {
                        console.log(data);
                    })
                    .catch((e) => {
                        console.log(e);
                    });
            } else {
                return User.toLogin();
            }
        },
        // 搜索查询服务器
        searchServer(val) {
            if (!val) return;
            const list = this.setItemData(this.serverAllArr.filter((item) => item.main_server.indexOf(val) !== -1));
            this.searchArr = list;
            list.forEach((item, index) => {
                this.showCollapse = this.setCollapseIndex(index + 2);
            });
        },
        //设置数据
        setItemData(arr) {
            if (!arr.length) return [];
            let zoneNameArr = [...new Set(arr.map((item) => item.zone_name))];
            return zoneNameArr.map((item) => {
                return {
                    zone_name: item,
                    serverArr: arr.filter((server) => server.zone_name === item),
                };
            });
        },
        //设置展示栏目
        setCollapseIndex(index) {
            return [...new Set([...this.showCollapse, index].map((i) => i))];
        },
    },
    filters: {
        serverName(index) {
            let name = {
                search: "搜索结果",
                server: "重制",
                old: "缘起",
            };
            return name[index];
        },
    },
    created: function () {
        this.loadAllServers();
    },
    components: {
        Nav,
        serverCard,
    },
    watch: {
        searchServerName(val) {
            this.searchServer(val);
        },
    },
};
</script>
<style lang="less">
@import "../../assets/css/servers2.less";
</style>
