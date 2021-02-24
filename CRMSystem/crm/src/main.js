import Vue from 'vue';
/* 导入UI库中所有的组件和对应的样式 */
import ElementUI from 'element-ui';
import "element-ui/lib/theme-chalk/index.css";

import echarts from 'echarts';
Vue.prototype.$echarts = echarts;

import App from './App.vue';
import router from "./router";
import store from "./store";
import {
  checkLogin,
  queryPower
} from "./api/customer";
import * as types from "./store/store-types";

/* 导入公共样式 */
import './assets/reset.min.css';
import './assets/font/iconfont.css';

Vue.use(ElementUI);

// 全局指令，做权限校验  v-power
Vue.directive("power", {
  inserted(el, binding) {
    let arrVal = binding.value.split("|"),
      power = store.state.power,
      flag = false;
    flag = arrVal.some(item => {
      return power.includes(item);
    });
    !flag ? el.parentNode.removeChild(el) : null;
  }
});

Vue.config.productionTip = false;

// 当前文件是打包编译的入口文件，会最先处理，在这里做登录的接口校验
checkLogin().then(result => {
  // 当登录接口校验成功以后，继续发送power权限接口
  return queryPower();
}).then(resultPower => {
  // 当power请求成功以后，需存储在store中
  store.commit(types.CHANGE_POWER, resultPower.power);

  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app');

}).catch(reason => {
  Vue.prototype.$alert('您当前是非法进入，请登录！', {
    callback() {
      location.href = location.origin + '/login.html';
    }
  });
});