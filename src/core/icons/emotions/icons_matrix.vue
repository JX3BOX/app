<template>
	<div class="m-icons-matrix" :gutter="2">
		<div class="u-icons-item" :span="1" v-for="(icon, index) in list.list" :key="index" @click="handleAddFavorite(icon)">
			<div class="u-pic">
				<el-image class="u-img" :src="iconPath(icon)">
					<i slot="error" class="el-icon-warning-outline u-error"></i>
				</el-image>
				<el-tooltip class="u-love" :disabled="!icon.id" :content="iconName(icon)" placement="top-start">
					<i class="w-heart" :class="{ 'w-heart-animation': handleHeart(icon) }"></i>
				</el-tooltip>
			</div>
			<span>{{ iconId(icon) }}</span>
		</div>
	</div>
</template>
<script>
import { JX3BOX } from "@jx3box/jx3box-common";
export default {
	name: "demo",
	props: ["list"],
	components: {
		//demo
	},
	data: function () {
		return {};
	},
	computed: {},

	watch: {
		list: {
			deep: true,
			handler: function (newV, oldV) {
				// console.log("watch中：", newV);
			},
		},
	},
	methods: {
		handleAddFavorite(val) {
			val = this.iconId(val);
			this.$emit("onFav", { type: "fav", val });
		},
		iconName(icon) {
			return typeof icon == "object" ? icon.name : String(icon);
		},
		iconId(icon) {
			return typeof icon == "object" ? icon.id : String(icon);
		},
		handleHeart(val) {
			val = this.iconId(val);
			if (this.list.favList.includes(val)) return true;
		},
		iconPath(val) {
			val = this.iconId(val);
			return this.list.type == "origin" ? JX3BOX.__iconPath + "origin_icon/" + val + ".png" : JX3BOX.__iconPath + "icon/" + val + ".png";
		},
	},
	filters: {},
	created: function () {},
	mounted: function () {},
};
</script>
<style lang="less"></style>
