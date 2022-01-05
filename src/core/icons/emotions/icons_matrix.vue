<template>
	<div class="m-icons-matrix" :gutter="2">
		<div class="u-icons-item" :span="1" v-for="(icon, index) in iconData.list" :key="index" @click="handleAddFavorite(icon)">
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
import { __iconPath } from "@jx3box/jx3box-common/data/jx3box.json";
export default {
	name: "matrix",
	props: ["iconData"],
	data: function () {
		return {};
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
			return this.iconData.favList.includes(val);
		},
		iconPath(val) {
			val = this.iconId(val);
			return this.iconData.type == "origin" ? `${__iconPath}origin_icon/${val}.png` : `${__iconPath}icon/${val}.png`;
		},
	},
};
</script>
