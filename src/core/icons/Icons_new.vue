<template>
	<div id="app">
		<Header></Header>
		<Breadcrumb name="图标大全" slug="icons" root="/app/icons" :feedbackEnable="true" :crumbEnable="true">
			<img slot="logo" svg-inline :src="getIcon('icons')" />
		</Breadcrumb>
		<LeftSidebar :open="false">
			<Nav />
		</LeftSidebar>
		<Main :withoutRight="true" :withoutLeft="true">
			<div class="m-icons">
				<h1 class="m-icons-title">剑三图标库</h1>
				<div class="m-icons-box">
					<el-tabs v-model="activeTabName" type="card">
						<el-tab-pane label="图标库" name="icon">
							<IconsSearch :list="searchList" :favList="favList" :client="client" @onSearch="onSearch" />
						</el-tab-pane>
						<el-tab-pane label="收藏图标" name="favicon">
							<IconsFav :list="favList" />
						</el-tab-pane>
						<el-tab-pane label="表情包" name="emoji">
							<IconsEmo />
						</el-tab-pane>
					</el-tabs>
				</div>
				<Footer></Footer>
			</div>
		</Main>
	</div>
</template>

<script>
import Nav from "@/components/Nav.vue";
import IconsEmo from "./emotions/icons_emo.vue";
import IconsFav from "./emotions/icons_fav.vue";
import IconsSearch from "./emotions/icons_search.vue";
import User from "@jx3box/jx3box-common/js/user.js";
import { __imgPath } from "@jx3box/jx3box-common/data/jx3box.json";
import { getIconsByName, getMyFavIcons, setMyFavIcons } from "@/service/icons.js";
import default_list from "./default.json";

export default {
	name: "Icons",
	data: function () {
		return {
			activeTabName: "icon",
			searchList: "",
			favList: [],
			searchKey: "",
		};
	},
	computed: {
		client: function () {
			return location.href.includes("origin") ? "origin" : "std";
		},
		uid: function () {
			return User.isLogin() ? User.getInfo().uid : 0;
		},
		localFavList: function () {
			return [];
		},
	},
	methods: {
		getIcon(key) {
			return __imgPath + "image/box/" + key + ".svg";
		},
		onSearch(data) {
			if (!data) return;
			if (!data.type) {
				this.getSearchData(data);
				this.searchKey = data;
			} else {
				this.favList.includes(data.val) ? (this.favList = this.favList.filter((l) => l !== data.val)) : this.favList.push(data.val);
			}
		},
		async getSearchData(query) {
			if (query == this.searchKey) return;
			query = query.replace(/\ /g, "");
			let min = 0;
			let max = 1;
			let range = [];

			let searchList = [];
			let tmpList = [];
			//如果出现全角逗号、顿号、斜杠、飘键进行替换
			query = query.replace(/，|、|\/|\||\\/g, ",");
			query = query.replace(/~/g, "-");

			// 如果没有分隔符，先判断是不是按照名字搜索的文字
			let numberReg = /^[0-9]+$/;
			// 按照名称搜索
			if (!query.includes(",") && !query.includes("-") && !numberReg.test(query)) {
				let results = await this.searchIconByName(query);
				console.log(results, "results");
				return;
			}
			// 如果同时出现逗号和杠，先拆逗号，再拆杠
			let bothExist = query.includes(",") && query.includes("-");
			if (query.includes(",")) tmpList = query.split(",");
			if (tmpList.length === 0) tmpList = [query];

			tmpList.forEach((value) => {
				if (value.includes("-")) {
					range = value.split("-");
					min = parseInt(range[0]);
					max = parseInt(range[range.length - 1]);
					if (!isNaN(min) && !isNaN(max)) {
						if (min > max) {
							for (let i = max; i <= min; ++i) {
								if (!searchList.includes(i)) {
									searchList.push(i);
								}
							}
						} else {
							for (let i = min; i <= max; ++i) {
								if (!searchList.includes(i)) {
									searchList.push(i);
								}
							}
						}
					}
				} else {
					if (!isNaN(parseInt(value))) {
						searchList.push(parseInt(value));
					}
				}
			});

			this.searchList = searchList.slice(0, 500);
		},
		async searchIconByName(name) {
			getIconsByName(name, this.client)
				.then((res) => {
					let tmpList = [];
					let idList = [];
					res.item.forEach((e) => {
						let iconId = e.iconID + "";
						if (!idList.includes(iconId)) {
							idList.push(iconId);
							tmpList.push({ id: iconId, name: e.Name });
						}
					});
					this.searchList = tmpList;
				})
				.catch((e) => {
					// this.getFromLocal();
				});
		},
		getFavIcons() {
			if (this.uid) {
				// 从服务器读取
				// 旧版数据格式 ’["109","3118","3119","13","316","2179","245","889","2178","5389"]‘
				getMyFavIcons(this.client)
					.then((data) => {
						let serverValue = data;
						if (serverValue) {
							// 判断是否是旧版数据
							// like -> '["345", "332", "  303"]'
							if (serverValue.includes("[")) {
								serverValue = serverValue.replace(/[\[\]"\ ]/g, "");
							}
							// // 判断是否是旧版数据
							// if (serverValue.includes("[")) {
							//     this.faviconsList = JSON.parse(serverValue);
							// } else {
							//     this.faviconsList = serverValue.split(",");
							// }
							this.favList = serverValue.split(",");
						} else {
							this.favList = [];
						}
					})
					.catch((e) => {
						this.favList = this.localFaviconsList;
					});
			} else {
				// 本地读取
				this.favList = this.localFaviconsList;
			}
		},
	},
	filters: {},
	mounted: function () {
		this.searchList = default_list;
	},
	components: {
		Nav,
		IconsEmo,
		IconsFav,
		IconsSearch,
	},
};
</script>

<style lang="less">
@import "../../assets/css/icons.less";
</style>
