<template>
  <div id="app">
    <Header></Header>
    <Breadcrumb
      name="生活技艺助手"
      slug="cooking"
      root="/app/cooking"
      :feedbackEnable="true"
    >
      <img slot="logo" svg-inline :src="getAppIcon('cooking')" />
    </Breadcrumb>
    <LeftSidebar :open="false">
      <Nav />
    </LeftSidebar>
    <Main :withoutRight="true" :withoutLeft="true">
      <div class="m-cooking">
          123
      </div>
      <Footer></Footer>
    </Main>
  </div>
</template>

<script>
import Nav from "@/components/Nav.vue";
import { getAppIcon } from "@jx3box/jx3box-common/js/utils";
export default {
  name: "Cooking",
  props: [],
  data: function () {
    return {};
  },
  computed: {},
  methods: {
    getAppIcon,
  },
  filters: {},
  mounted: function () {},
  components: {
    Nav,
  },
};
</script>

<style lang="less">
@import "../../assets/css/cooking.less";
</style>