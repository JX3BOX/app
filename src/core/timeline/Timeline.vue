<template>
    <div id="app">
        <Header />
        <Breadcrumb APP_NAME="BOSS技能分析" />
        <Sidebar />

        <main class="c-main p-app-timeline">
            Timeline
            <br>
            ---------------
            <input type="file" id="test" />
            ---------------
            <br>
            <aside class="c-sidebar-right c-sidebar">
                右侧边栏，历史存档等
            </aside>
        </main>
    </div>
</template>

<script>
import Breadcrumb from "@/components/Breadcrumb.vue";
import Sidebar from "@/components/Sidebar.vue";
const { LuaReader, LuaData } = require("lua4fe");

export default {
    name: "App",
    data: function() {
        return {};
    },
    computed: {},
    methods: {},
    filters: {},
    mounted: function() {
        const luap = new LuaReader();

        luap.then((it) => {
            it.watch("test", function(data) {
                let result = data.toJSON();
                console.log(result);
            });
        }).catch((err) => {
            console.error(err);
            console.log("not support 浏览器不支持");
        });
    },
    components: {
        Breadcrumb,
        Sidebar,
    },
};
</script>

<style lang="less"></style>
