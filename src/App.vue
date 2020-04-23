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
            <div class="m-app">

            </div>
            <RightSidebar>
                <div class="m-app-aside">

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
    name: "App",
    data: function() {
        return {
            APP_INFO : {
                link : '',
                img : '',
                name : ''
            }
        };
    },
    computed: {},
    methods: {},
    filters: {},
    mounted: function() {
    },
    components: {
        Info,
        Nav,
    },
};
</script>

<style lang="less"></style>
