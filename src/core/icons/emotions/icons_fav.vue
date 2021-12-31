<template>
    <div class="m-icons-fav">
    fav
    </div>
</template>
<script>
import { getIconsByName, getMyFavIcons, setMyFavIcons } from "@/service/icons.js";
export default {
    name: 'demo',
    props: ['list'],
    components: {
       //demo
    },
    data: function () {
        return {
            mode: '',
        };
    },
    computed: {},
    watch: {},
    methods: {},
    filters: {},
    created: function () {},
    mounted: function () {},
};
</script>
<style lang='less'>
</style>