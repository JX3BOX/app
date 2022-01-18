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
                        <el-tab-pane label="图标库" name="icon">
                            <IconsSearch />
                        </el-tab-pane>
                        <el-tab-pane label="收藏图标" name="favicon">
                            <IconsFav />
                        </el-tab-pane>
                        <el-tab-pane label="表情包" name="emoji">
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
import IconsEmo from "./emotions/icons_emo.vue";
import IconsFav from "./emotions/icons_fav.vue";
import IconsSearch from "./emotions/icons_search.vue";
import { getAppIcon } from "@jx3box/jx3box-common/js/utils";
export default {
    name: "Icons",
    data: function() {
        return {
            activeTabName: "icon",
        };
    },
    computed: {},
    methods: {
        getAppIcon,
    },
    filters: {},
    mounted: function() {},
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
