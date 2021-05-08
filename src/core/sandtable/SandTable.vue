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
            <h1 class="m-sandtable-title">沙盘查询</h1>
        </Main>
    </div>
</template>

<script>
import Nav from "@/components/Nav.vue";
import serverData from "@jx3box/jx3box-data/data/server/server.json";
import User from "@jx3box/jx3box-common/js/user";


export default {
    name: "SandTable.vue",
    data: function () {
        return {
            serverList: {},
        };
    },
    methods:{
        async initMethod(){
            console.log(serverData);
        },
        getUserId() {
            if (User.isLogin()) {
                this.uid = User.getInfo().uid;
            }
        },
    },
    created(){
        this.getUserId();
        this.initMethod();
    },
    components: {
        Nav,
        // Extend,
    },
};
</script>

<style lang="less">
@import "../../assets/css/sandtable.less";
</style>