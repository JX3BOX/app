<template>
    <div id="app">
        <Header />
        <Breadcrumb>
            <Info :APP_INFO="APP_INFO"/>
        </Breadcrumb>
        <LeftSidebar>
            <Nav />
        </LeftSidebar>
        <Main>
            <div class="m-sudoku">

            </div>
            <RightSidebar>
                <div class="m-sudoku-aside">

                </div>
            </RightSidebar>
            <Footer/>
        </Main>
    </div>
</template>

<script>
import Info from "@/components/Info.vue";
import Nav from "@/components/Nav.vue";

export default {
    name: "Timeline",
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
        Info,
        Nav,
    },
};
</script>

<style lang="less"></style>
