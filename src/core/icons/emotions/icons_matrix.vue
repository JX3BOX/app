script
<template>
	<div class="m-icons-matrix">
		<div class="u-icons-item" v-for="(icon, index) in matrix" :key="index">
			<div class="u-pic" @click="myFavIcons(icon)">
				<el-image class="u-img" :src="iconPath(icon)">
					<i slot="error" class="el-icon-warning-outline u-error"></i>
				</el-image>
				<el-tooltip class="u-love" :disabled="!icon.id" :content="iconName(icon)" placement="top-start" v-if="list">
					<i class="w-heart" :class="{ 'w-heart-animation': handleHeart(icon) }"></i>
				</el-tooltip>
				<span class="u-remove" v-else></span>
			</div>
			<span v-clipboard:copy="iconId(icon)" v-clipboard:success="onCopy" v-clipboard:error="onError" title="点击快速复制">{{ iconId(icon) }}</span>
		</div>
	</div>
</template>
<script>
import { JX3BOX } from "@jx3box/jx3box-common";
export default {
	name: "matrix",
	props: ["list", "favList"],
	data: function () {
		return {};
	},
	computed: {
		matrix: function () {
			return this.list ? this.list : this.favList;
		},
		client: function () {
			return this.$store.state.client;
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
		myFavIcons(val) {
			val = this.iconId(val);
			let list = this.favList;
			list.includes(val) ? (list = list.filter((l) => l !== val)) : list.push(val);
			this.$store.commit("storeFav", list);
		},
		iconPath(val) {
			val = this.iconId(val);
			return this.client == "origin" ? `${JX3BOX.__iconPath}origin_icon/${val}.png` : `${JX3BOX.__iconPath}icon/${val}.png`;
		},
		onCopy: function (val) {
			console.log(val, "?");
			this.$notify({
				title: "复制成功",
				message: "复制内容 : " + val.value,
				type: "success",
			});
		},
		onError: function () {
			this.$notify.error({
				title: "复制失败",
				message: "请手动复制",
			});
		},
	},
	mounted: function () {},
	created() {},
};
</script>
