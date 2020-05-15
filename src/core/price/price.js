// 第三方UI组件
import Vue from "vue";
Vue.config.productionTip = false;
import ElementUI from "element-ui";
Vue.use(ElementUI);

// 通用UI模块
import JX3BOX_UI from '@jx3box/jx3box-common-ui'
import "@jx3box/jx3box-common/css/element.css";
Vue.use(JX3BOX_UI);

import ECharts from 'vue-echarts' // 在 webpack 环境下指向 components/ECharts.vue

// 手动引入 ECharts 各模块来减小打包体积
import 'echarts/lib/chart/scatter'
import 'echarts/lib/chart/bar'
import 'echarts/lib/chart/boxplot'
import 'echarts/lib/chart/line'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/markPoint'
import 'echarts/lib/component/markLine'
import 'echarts/lib/component/dataZoom'

Vue.component('v-chart', ECharts)
// import router from "../router";
// import store from "../store";

import Price from "./Price.vue";

new Vue({
    // router,
    // store,
    render: (h) => h(Price),
}).$mount("#app");
