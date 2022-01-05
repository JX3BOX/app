<template>
	<div class="m-icons-search">
		<!-- 搜索框 -->
		<el-input placeholder="输入搜索条件，例如：3089、1-100、幽月乱花" v-model="search" class="input-with-select" @keyup.enter.native="onSearch" @change.once="useSearchIcon">
			<el-button slot="append" icon="el-icon-search" @click="onSearch"></el-button>
		</el-input>
		<!-- 如何搜索图片（文字） -->
		<div class="m-icon-search-tip">
			<ul>
				<li>输入单个数字，例如1，返回IconID为1的图标；</li>
				<li>输入多个数字，例如2,4,6（支持中英文逗号“,”,顿号“、”,斜杠“/”,竖杠“|”），返回IconID分别为2,4,6的三个图标；</li>
				<li>输入范围区间，例如1~100或1-100，返回IconID从1至100的100个图标；</li>
				<li>可以同时输入多个数字和多个范围，例如2,3,11-14,17，返回IconID分别为2,3,11,12,13,14,17的7个图标；</li>
				<li>输入单个图标名称，可以根据名称模糊搜索相关图标，例如：幽月、幽月乱花。</li>
				<li>每次上限500个</li>
			</ul>
		</div>
		<!-- 提示信息 -->
		<div class="m-icons-tips">
			<el-alert v-if="isNewbie" title="以下为部分图标展示，请在上方自定义搜索范围，点击图标即可收藏。" type="warning" center show-icon></el-alert>
			<el-alert v-if="!iconData.list.length" title="没有找到对应的图标，请重新输入关键词搜索图标。" type="info" center show-icon></el-alert>
		</div>

		<IconsMatrix :iconData="iconData" @onFav="onFav" />
	</div>
</template>
<script>
import IconsMatrix from "./icons_matrix.vue";
export default {
	name: "search",
	props: ["iconData"],
	components: {
		IconsMatrix,
	},
	data: function () {
		return {
			search: "",
			isNewbie: true,
		};
	},
	computed: {},
	methods: {
		onSearch() {
			this.$emit("onSearch", this.search);
		},
		onFav(val) {
			this.$emit("onSearch", val);
		},
		useSearchIcon() {
			this.isNewbie = false;
		},
	},
	watch: {},
	filters: {},
	created: function () {},
	mounted: function () {},
};
</script>
