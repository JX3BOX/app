<template>
    <div id="app">
        <Header />
        1111
        <Breadcrumb APP_NAME="九宫格计算器" />
        <Sidebar />

        <main class="c-main p-app-timeline">

            <div class="m-sudoku">
                应用部分
            </div>

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
