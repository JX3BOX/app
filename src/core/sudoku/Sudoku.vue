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
    name: "Sudoku",
    data: function() {
        return {
            APP_INFO : {
                name : '九宫格计算器',
                link : '/app/sudoku',
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
