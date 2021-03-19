import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../pages/Home/index.vue";
import Detail from "../pages/Detail/index.vue";

Vue.use(VueRouter);

const router = new VueRouter({
    mode: "hash",
    routes: [
        // 默认请求路径跳转到home列表
        {
            path: '/',
            redirect: '/home'
        }, {
            path: '/home',
            component: Home
        }, {
            // 动态路由传参
            path: '/detail/:id',
            component: Detail
        }
    ]
});

export default router;