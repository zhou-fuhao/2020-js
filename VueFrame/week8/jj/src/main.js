import Vue from 'vue';
import Store from "./store/index";
// 全部导入
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// 按需引入
// import {
//     Button,
//     Divider,
//     Tag,
// } from 'element-ui';

import App from './App.vue';

// 当在生产环境下运行时，在控制台不会有提示信息
Vue.config.productionTip = false;

// 全部导入注册
Vue.use(ElementUI);

// 按需引入注册
// Vue.use(Button);
// Vue.use(Divider);
// Vue.use(Tag);

new Vue({ // 创建vue根实例
    Store,
    render: h => h(App)
}).$mount('#app');