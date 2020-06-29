<template>
    <div id="app">
        <Header></Header>
        <Breadcrumb
            name="花价查询"
            slug="flower"
            root="/app/flower"
            :feedbackEnable="true"
        >
            <img
                slot="logo"
                svg-inline
                src="../../assets/img/logos/flower.svg"
            />
            <div class="m-info"></div>
        </Breadcrumb>
        <LeftSidebar :open="false">
            <Nav />
        </LeftSidebar>
        <Main :withoutRight="true" :withoutLeft="true">
            <div class="m-flower">

            </div>
            <Footer></Footer>
        </Main>
    </div>
</template>

<script>
import Nav from "@/components/Nav.vue";

export default {
    name: "Flower",
    props: [],
    data: function() {
        return {
        };
    },
    computed: {
    },
    methods: {
    },
    filters: {
    },
    mounted: function() {
    },
    components: {
        Nav,
    },
};
</script>

<style lang="less">
@import "../../assets/css/flower.less";
</style>