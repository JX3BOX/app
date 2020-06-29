Vue.config.productionTip = false;

// 第三方UI组件
import Vue from "vue";
import ElementUI from "element-ui";
Vue.use(ElementUI);

// import VueClipboard from 'vue-clipboard2'
// Vue.use(VueClipboard)

// 通用UI模块
import JX3BOX_UI from '@jx3box/jx3box-common-ui'
import "@jx3box/jx3box-common/css/element.css";
Vue.use(JX3BOX_UI);

// 数据与路由
// import router from "../router";
// import store from "../store";

import Furniture from "./Furniture.vue";
new Vue({
    // router,
    // store,
    render: h => h(Furniture),
}).$mount("#app");

