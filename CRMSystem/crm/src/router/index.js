import Vue from "vue";
import VueRouter from "vue-router";

import Customer from "../pages/Customer";
import System from "../pages/System";
import Error from "../pages/NotFound/Error.vue";

import CustomerChild from "./customer";
import SystemChild from "./system";

Vue.use(VueRouter);

const router = new VueRouter({
    mode: "hash",
    routes: [
        // 默认登录地址
        {
            path: '/',
            redirect: '/customer'
        },
        {
            path: '/customer',
            name: 'customer',
            component: Customer,
            children: CustomerChild
        },
        {
            path: '/system',
            name: 'system',
            component: System,
            children: SystemChild
        },
        // 当访问路径不存在时，跳转到错误页面
        {
            path: '*',
            name: 'error',
            component: Error,
        },
    ]
});

export default router;