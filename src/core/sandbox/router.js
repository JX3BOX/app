import Vue from 'vue'
import Router from 'vue-router'

//组件
import Sandbox from './Sandbox.vue'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/Sandbox',
      name: 'Sandbox',
      component: Sandbox,
    },
  ],
})
