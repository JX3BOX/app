Vue.config.productionTip = false; 

import Clipboard from 'v-clipboard'
Vue.use(Clipboard)
 

// 第三方UI组件
import Vue from "vue";
import ElementUI from "element-ui";
Vue.use(ElementUI);

// 通用UI模块
import JX3BOX_UI from "@jx3box/jx3box-common-ui";
import "@jx3box/jx3box-common/css/element.css";
import "@jx3box/jx3box-common/css/normalize.css";
Vue.use(JX3BOX_UI);

// import router from "../router";
import store from "./store";

// import Icons from "./Icons.vue";
import Icons from "./Icons.vue";

new Vue({
    // router,
    store,
    render: (h) => h(Icons),
}).$mount("#app");
