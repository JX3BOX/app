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
					<template v-if="index !== 'fav' && item.length == 0">
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
import ServerItem from "./FServerNode.vue";
import User from "@jx3box/jx3box-common/js/user";
import { getMyFocusServers, setMyFocusServers, getAllServers } from "@/service/server.js";
import { __imgPath } from "@jx3box/jx3box-common/data/jx3box.json";
export default {
	name: "Servers",
	data: function () {
		return {
			searchServerName: "",
			isShowMainServer: true,
			serverData: {},
			searchData: {},
			serverList: [],
			serverAllList: [],
		};
	},
	computed: {
		list: function () {
			return !this.searchServerName ? this.serverData : this.searchData;
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
			let list = new Set(this.serverData.fav);
			let fav = [];
			list.has(server) ? list.delete(server) : list.add(server);
			for (let key of list.keys()) {
				fav.push(key);
			}
			this.serverData.fav = fav;
			if (this.searchServerName) this.searchData.fav = fav;
			this.setSavedServers();
		},

		// 获取服务器列表
		loadAllServers() {
			getAllServers().then((res) => {
				let mainServerList = [];
				let list = res.data.data?.filter((server) => {
					if (server.serverName === server.mainServer) {
						mainServerList.push(server);
					}
					return server.serverName !== server.mainServer;
				});

				this.serverList = mainServerList;
				this.serverAllList = mainServerList.concat(list);
				this.sortServer(mainServerList);
			});
		},

		// 将获取的服务器分类 [正式服，怀旧服，其他]
		sortServer(list) {
			let old = [];
			let other = [];
			let server = [];
			let fav = this.serverData.fav || [];
			list.filter((s) => {
				if (s.zoneName.indexOf("比赛专区") !== -1 || s.zoneName.indexOf("区") == -1) {
					other.unshift(s);
				} else {
					if (s.zoneName.indexOf("缘起") !== -1) {
						old.push(s);
					} else {
						server.push(s);
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

		// 获取服务器收藏列表
		getSavedServers() {
			if (this.uid) {
				getMyFocusServers().then((data) => {
					this.data = data;
					this.serverData.fav = this.serverFav(data) || [];
				});
			}
		},

		//转服务器数据 str转换成obj
		serverFav(serverlist) {
			if (!serverlist) return [];

			let list = [];
			serverlist = serverlist.split(",");
			this.serverList.forEach((k) => {
				if (serverlist.includes(k.mainServer)) list.push(k);
			});
			return list;
		},

		//登录状态存服务器，未登录跳转
		setSavedServers() {
			if (this.uid) {
				let list = this.serverData.fav.map((el) => el.serverName);

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
			if (!val) return delete this.serverData.search;
			let list = [];
			this.serverAllList.forEach((k) => {
				if (k.serverName.indexOf(val) !== -1) list.push(k);
			});
			this.searchData = { fav: this.serverData.fav, search: list };
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
	mounted: function () {
		this.loadAllServers();
		this.getSavedServers();
	},
	components: {
		Nav,
		ServerItem,
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
