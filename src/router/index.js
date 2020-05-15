import Vue from "vue";
import VueRouter from "vue-router";

import Index from "../views/Index.vue";
import List from "../views/List.vue";
import View from "../views/View.vue";
import Post from "../views/Post.vue";

Vue.use(VueRouter);

const routes = [
    { path: '/', component: Index },
    { path: '/list', component: List },
    { path: '/view', component: View },
    { path: '/post', component: Post },
]

const router = new VueRouter({
    routes
});

export default router;
