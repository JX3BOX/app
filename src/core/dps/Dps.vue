<template>
    <div id="app">
        <Header></Header>
        <Breadcrumb
            name="DPS模拟器"
            slug="dps"
            root="/app/dps"
            :feedbackEnable="true"
        >
            <img
                slot="logo"
                svg-inline
                src="../../assets/img/logos/xls.svg"
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
import {$cms} from '@jx3box/jx3box-common/js/https'

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
        $cms().get('/api/cms/config').then((res) => {
            res.data.data.forEach((item) => {
                if(item.key == 'dps_url'){
                    location.href = item.val
                }
            })
        })
    },
    components: {
        Nav,
    },
};
</script>

<style lang="less">
</style>