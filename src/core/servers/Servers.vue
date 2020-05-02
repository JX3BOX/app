<template>
    <div id="app">
        <Header />
        <Breadcrumb>
            <Info :APP_INFO="APP_INFO">
                <img slot="logo" class="u-channel-logo" svg-inline src="../../assets/img/sudoku.svg" />
            </Info>
        </Breadcrumb>
        <LeftSidebar>
            <Nav />
        </LeftSidebar>
        <Main>
            <div class="m-servers">
                <f-server-node name="如梦令" :pinned="true" zone="电信五区" main="梦江南" status="offline" @toogle-server="clickServer"></f-server-node>
            </div>
            <RightSidebar>
                <div class="m-servers-aside">

                </div>
            </RightSidebar>
            <Footer/>
        </Main>
    </div>
</template>

<script>
import Info from "@/components/Info.vue";
import Nav from "@/components/Nav.vue";
import FServerNode from '@/components/FServerNode.vue'

export default {
    name: "Servers",
    data: function() {
        return {
            APP_INFO : {
                name : '开服监控',
                link : '/app/servers',
            }
        };
    },
    computed: {},
    methods: {
        clickServer(e) {
            console.log(e)
        }
    },
    filters: {},
    mounted: function() {
    },
    components: {
        Info,
        Nav,
        FServerNode
    },
};
</script>

<style lang="less"></style>
