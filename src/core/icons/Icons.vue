<template>
    <div id="app">
        <Header></Header>
        <Breadcrumb name="图标大全" slug="icons" root="/app/icons" :feedbackEnable="true" :crumbEnable="true">
            <img slot="logo" svg-inline :src="getAppIcon('icons')" />
        </Breadcrumb>
        <LeftSidebar :open="false">
            <Nav />
        </LeftSidebar>
        <Main :withoutRight="true" :withoutLeft="true">
            <div class="m-icons">
                <h1 class="m-icons-title">剑三图标库</h1>
                <div class="m-icons-box">
                    <el-tabs v-model="activeTabName" type="card">
                        <el-tab-pane label="图标库" name="list">
                            <IconsSearch />
                        </el-tab-pane>
                        <el-tab-pane label="收藏图标" name="favicon">
                            <IconsFav />
                        </el-tab-pane>
                        <el-tab-pane label="表情包" name="emotion" lazy>
                            <IconsEmo />
                        </el-tab-pane>
                    </el-tabs>
                </div>
            </div>
        </Main>
        <Footer></Footer>
    </div>
</template>

<script>
import Nav from "@/components/Nav.vue";
import IconsEmo from "./components/emotion.vue";
import IconsFav from "./components/fav.vue";
import IconsSearch from "./components/search.vue";
import { getAppIcon } from "@jx3box/jx3box-common/js/utils";
export default {
    name: "Icons",
    data: function() {
        return {
            activeTabName: "",
        };
    },
    watch: {
        activeTabName(val) {
            // window.history.pushState('', '', location.origin + location.pathname + `?tab=${val}`)
        }
    },
    mounted() {
        const tab = new URLSearchParams(location.search).get('tab');
        this.activeTabName = tab || 'list';
    },
    methods: {
        getAppIcon,
    },
    components: {
        Nav,
        IconsEmo,
        IconsFav,
        IconsSearch,
    },
};
</script>

<style lang="less">
@import "../../assets/css/icons.less";
</style>
