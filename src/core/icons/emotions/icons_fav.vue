<template>
	<div class="m-icons-fav" v-if="iconData">
		<IconsMatrix :iconData="iconData" @onFav="onFav" />
	</div>
</template>
<script>
import IconsMatrix from "./icons_matrix.vue";
export default {
	name: "fav",
	props: ["iconData"],
	components: {
		IconsMatrix,
	},
	data: function () {
		return {};
	},
	methods: {
		onFav(val) {
			this.$emit("onSearch", val);
		},
	},
};
</script>
