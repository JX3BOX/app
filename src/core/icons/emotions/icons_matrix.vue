script
<template>
	<div class="m-icons-matrix" :gutter="2">
		<el-alert class="m-icons-tips" v-if="isNewbie" title="以下为部分图标展示，请在上方自定义搜索范围，点击图标即可收藏。" type="warning" center show-icon></el-alert>
		<el-alert class="m-icons-tips" v-if="list && !list.length" title="没有找到对应的图标，请重新输入关键词搜索图标。" type="info" center show-icon></el-alert>
		<el-alert class="m-icons-tips" v-if="!list && !favList.length" title="没有收藏的图标，请搜索图标进行添加。" type="info" center show-icon></el-alert>

		<div class="u-icons-item" :span="1" v-for="(icon, index) in lists" :key="index">
			<div class="u-pic" @click="handleFavorite(icon)">
				<el-image class="u-img" :src="iconPath(icon)">
					<i slot="error" class="el-icon-warning-outline u-error"></i>
				</el-image>
				<el-tooltip class="u-love" :disabled="!icon.id" :content="iconName(icon)" placement="top-start" v-if="list">
					<i class="w-heart" :class="{ 'w-heart-animation': handleHeart(icon) }"></i>
				</el-tooltip>
				<span class="u-remove" v-else></span>
			</div>
			<span>{{ iconId(icon) }}</span>
		</div>
	</div>
</template>
<script>
import { JX3BOX } from "@jx3box/jx3box-common";
import { getMyFavIcons, setMyFavIcons } from "@/service/icons.js";
import User from "@jx3box/jx3box-common/js/user.js";
export default {
	name: "matrix",
	props: ["list", "isNewbie"],
	data: function () {
		return {
			favList: "",
		};
	},
	computed: {
		lists: function () {
			return this.list || this.favList;
		},
		localFavList: function () {
			return window.localStorage.getItem("favicons")?.split(",") || [];
		},

		client: function () {
			return this.$store.state.client;
		},
		uid: function () {
			return User.isLogin() ? User.getInfo().uid : 0;
		},
	},
	methods: {
		iconName(icon) {
			return typeof icon == "object" ? icon.name : String(icon);
		},
		iconId(icon) {
			return typeof icon == "object" ? icon.id : String(icon);
		},
		handleHeart(val) {
			val = this.iconId(val);
			return this.favList.includes(val);
		},
		iconPath(val) {
			val = this.iconId(val);
			return this.client == "origin" ? `${JX3BOX.__iconPath}origin_icon/${val}.png` : `${JX3BOX.__iconPath}icon/${val}.png`;
		},
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
							list = list.concat(this.localFavList);
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
		},
	},
	mounted: function () {
		this.getFavIcons();
	},
	created() {},
	watch: {
		"$store.state.favList"(val) {
			console.log(val, "store.state.favList");
		},
	},
};
</script>
