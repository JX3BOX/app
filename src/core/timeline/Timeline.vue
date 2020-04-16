<template>
    <div id="app">
        <Breadcrumb />
        <Sidebar />

        <main class="c-main p-app-timeline">
            Timeline
            <aside class="c-sidebar-right c-sidebar">
                右侧边栏，历史存档等
            </aside>
        </main>
    </div>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb.vue';
import Sidebar from '@/components/Sidebar.vue';

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
