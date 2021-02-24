import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";

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
            children: SystemChild,
            // 2.第二种：权限校验，只针对当前路由
            beforeEnter(to, from, next) {
                let power = store.state.power;
                if (/(userhandle|departhandle|jobhandle)/.test(power)) {
                    next();
                    return;
                }
                Vue.prototype.$alert("暂无权限，请联系管理员！");
            }
        },
        // 当访问路径不存在时，跳转到错误页面
        {
            path: '*',
            name: 'error',
            component: Error,
        },
    ]
});

// 1.第一种：权限校验，全局校验
router.beforeEach((to, form, next) => {
    next();
});

export default router;