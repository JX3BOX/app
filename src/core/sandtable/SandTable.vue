<template>
    <div id="app">
        <Header></Header>
        <Breadcrumb
            name="阵营沙盘"
            slug="sandtable"
            root="/app/sandtable"
            :feedbackEnable="true"
            :crumbEnable="true"
        >
            <img slot="logo" svg-inline src="../../assets/img/logos/price.svg"/>
        </Breadcrumb>
        <LeftSidebar :open="false">
            <Nav/>
        </LeftSidebar>
        <Main :withoutRight="true" :withoutLeft="true">

        </Main>
    </div>
</template>

<script>
import Nav from "@/components/Nav.vue";
import serverData from "@jx3box/jx3box-data/data/server/server.json";


export default {
    name: "SandTable.vue",

    components: {
        Nav,
        // Extend,
    },
};
</script>

<style scoped>

</style>