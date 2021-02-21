import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store/index";

import Customer from "../pages/Customer.vue";
import Organize from "../pages/Organize.vue";
import CustomerArr from "./customer";
import OrganizeArr from "./organize";
Vue.use(VueRouter);

const router = new VueRouter({
    mode: "hash",
    routes: [
        // 一级路由
        {
            // 访问地址如果是127.0.0.1:8080  则默认进入客户组织管理页面
            path: '/',
            redirect: '/customer'
        },
        {
            path: '/organize',
            name: 'organize',
            component: Organize,
            children: OrganizeArr,
            // 组织结构的权限校验
            beforeEnter(to, from, next) {
                let power = store.state.power;
                if (/(userhandle|departhandle|jobhandle)/.test(power)) {
                    next();
                    return;
                }
                Vue.prototype.$alert("暂无权限，请联系管理员！");
            }
        },
        {
            // 访问地址如果是127.0.0.1:8080/customer  则默认进入客户关系列表页面
            // 如果二级路由配置项较多，可以单独抽离一个二级路由文件，然后再导入到children属性中
            // 二级路由文件一般放到router文件夹下
            path: '/customer',
            name: 'customer',
            component: Customer,
            children: CustomerArr
        },
        {
            path: '*',
            redirect: '/organize'
        }
    ]
})

router.beforeEach((to, from, next) => {
    next();
})

export default router;