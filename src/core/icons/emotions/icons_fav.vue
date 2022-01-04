<template>
	<div class="m-icons-fav">
		<IconsMatrix :list="list" :favList="favList" @onFav="onFav" v-if="list" />
	</div>
</template>
<script>
import IconsMatrix from "./icons_matrix.vue";
export default {
	name: "fav",
	props: ["list", "favList"],
	components: {
		IconsMatrix,
	},
	data: function () {
		return {
			mode: "",
		};
	},
	computed: {},
	watch: {},
	methods: {
		onFav(val) {
			this.$emit("onSearch", val);
		},
	},
	filters: {},
	created: function () {},
	mounted: function () {},
};
</script> 
