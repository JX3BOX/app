<template>
    <div id="app">
        <Breadcrumb />
        <Sidebar />
        <router-view />
    </div>
</template>

<script>
import Breadcrumb from './components/Breadcrumb.vue';
import Sidebar from './components/Sidebar.vue';

export default {
    name: "App",
    data: function() {
        return {};
    },
    computed: {},
    methods: {},
    filters: {},
    mounted: function() {
    },
    components: {
        Breadcrumb,
        Sidebar
    }
};
</script>

<style lang="less">
</style>
