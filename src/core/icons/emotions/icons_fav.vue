<template>
	<div class="m-icons-fav">
		<IconsMatrix />
	</div>
</template>
<script>
import IconsMatrix from "./icons_matrix.vue";
export default {
	name: "fav",
	props: [],
	components: {
		IconsMatrix,
	},
	data: function () {
		return {
			list: [],
		};
	},
	methods: {},
};
</script>
