Vue.config.productionTip = false;

// 第三方UI组件
// import Vue from "vue";
// import ElementUI from "element-ui";
// import "element-ui/lib/theme-chalk/index.css";
// Vue.use(ElementUI);

// 通用UI模块
import JX3BOX_UI from '@jx3box/jx3box-common-ui'
Vue.use(JX3BOX_UI);

// 扩展UI模块
// import Comments from "@jx3box/jx3box-comment-ui"
// Vue.use(Comments)

// Axios实例
const axios = require('axios');
Vue.prototype.$axios = axios;
Vue.prototype.$http = axios;
// Vue.prototype.$axios.defaults.withCredentials = true;
const _axios = axios.create({
    withCredentials: true,
})
Vue.prototype.$https = _axios;

// 数据与路由
// import router from "../router";
// import store from "../store";

import Sudoku from "./Sudoku.vue";
new Vue({
    // router,
    // store,
    render: h => h(Sudoku),
}).$mount("#app");

