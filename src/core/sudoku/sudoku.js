// 第三方UI组件
import Vue from "vue";
Vue.config.productionTip = false;
import ElementUI from "element-ui";
Vue.use(ElementUI);

// 通用UI模块
import JX3BOX_UI from '@jx3box/jx3box-common-ui'
import "@jx3box/jx3box-common/css/element.css";
Vue.use(JX3BOX_UI);

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

