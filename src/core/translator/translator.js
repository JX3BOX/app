Vue.config.productionTip = false;

// import Vue from "vue";
// import ElementUI from "element-ui";
// import "element-ui/lib/theme-chalk/index.css";
// Vue.use(ElementUI);

import JX3BOX_UI from '@jx3box/jx3box-common-ui'
Vue.use(JX3BOX_UI);

// import router from "../router";
// import store from "../store";


import Translator from "./Translator.vue";

new Vue({
    // router,
    // store,
    render: (h) => h(Translator),
}).$mount("#app");
