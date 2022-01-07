<template>
	<div class="m-icons-fav">
		<el-alert class="m-icons-tips" v-if="!favList.length" title="没有收藏的图标，请搜索图标进行添加。" type="info" center show-icon></el-alert>
		<IconsMatrix :favList="favList" />
	</div>
</template>
<script>
import IconsMatrix from "./icons_matrix.vue";
import { getMyFavIcons, setMyFavIcons } from "@/service/icons.js";
import User from "@jx3box/jx3box-common/js/user.js";
export default {
	name: "fav",
	props: [],
	components: {
		IconsMatrix,
	},
	computed: {
		uid: function () {
			return User.isLogin() ? User.getInfo().uid : 0;
		},
	},
	data: function () {
		return {
			favList: "",
		};
	},
	methods: {
		handleFavorite(val) {
			val = this.iconId(val);
			this.favList.includes(val) ? (this.favList = this.favList.filter((l) => l !== val)) : this.favList.push(val);
			this.setIcons();
		},
		async setIcons() {
			if (this.uid) await setMyFavIcons(this.favList.join(","), this.client);
			this.setFavIcons();
		},
		setFavIcons() {
			let names = this.favList.join(",");
			if (window.localStorage) window.localStorage.setItem("favicons", names);
		},
		async getFavIcons() {
			if (this.uid) {
				// 从服务器读取
				// 旧版数据格式 ’["109","3118","3119","13","316","2179","245","889","2178","5389"]‘
				await getMyFavIcons(this.client)
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
							let list = serverValue.split(",");
							if (this.localFavList) list = list.concat(this.localFavList);
							this.favList = [...new Set(list)];
						} else {
							this.favList = [];
						}
					})
					.catch((e) => {
						this.favList = this.localFavList;
					});
			} else {
				// 本地读取
				this.favList = this.localFavList;
			}
			this.$store.commit("storeFav", this.favList);
		},
		toRef() {
			this.$forceUpdate();
		},
	},
	watch: {
		"$store.state.favList"(val) {
			this.favList = val;
			this.setIcons();
		},
	},
	mounted() {
		this.getFavIcons();
	},
};
</script>
