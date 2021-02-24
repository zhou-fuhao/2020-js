import Vue from 'vue';
import App from './App.vue';
import store from "./store";
import * as types from "./store/store-types";
import router from "./router";
/* 导入UI库中所有的组件和对应的样式 */
import ElementUI from 'element-ui';
import "element-ui/lib/theme-chalk/index.css";
import {
  ApiCheckLogin,
  ApiQueryPower
} from "./api/login";


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

// 检测是否正常登录
ApiCheckLogin().then(result => {

  store.commit(types.CHECK_IS_LOGIN, true);

  return ApiQueryPower();

}).then(power => {
  // store.dispatch(types.QUERY_POWER);
  store.commit(types.QUERY_POWER, power);

  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app');

}).catch(reason => {
  Vue.prototype.$alert('您当前是非法进入，请登录！', {
    callback: action => {
      location.href = location.origin + '/login.html';
    }
  });
});