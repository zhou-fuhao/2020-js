import Vue from 'vue';
/* 导入UI库中所有的组件和对应的样式 */
import ElementUI from 'element-ui';
import "element-ui/lib/theme-chalk/index.css";

import App from './App.vue';
import router from "./router";
import store from "./store";
import {
  checkLogin,
  queryPower
} from "./api/customer";

/* 导入公共样式 */
import './assets/reset.min.css';
import './assets/font/iconfont.css';

Vue.use(ElementUI);

Vue.config.productionTip = false;

// 当前文件是打包编译的入口文件，会最先处理，在这里做登录的接口校验
checkLogin().then(result => {
  
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app');

  // 当登录接口校验成功以后，继续发送power权限接口
  return queryPower();
}).then(resultPower => {
  // 当power请求成功以后，需存储在store中
  store.commit('change_power', resultPower.power);
}).catch(reason => {
  Vue.prototype.$alert('您当前是非法进入，请登录！', {
    callback() {
      location.href = location.origin + '/login.html';
    }
  });
});






// console.log('main.js')