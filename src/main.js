// import Vue from "vue";
// import ElementUI from "element-ui";
// import "element-ui/lib/theme-chalk/index.css";
// Vue.use(ElementUI);
Vue.config.productionTip = false;

import Header from "../node_modules/@jx3box/jx3box-common/vue/Header.vue";
new Vue({
    render: h => h(Header),
    el: '#c-header'
});

import router from "./router";
import store from "./store";
import App from "./App.vue";
new Vue({
    router,
    store,
    render: h => h(App),
}).$mount("#app");

