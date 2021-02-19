import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
// 把当前的store仓库引进来，挂载到vue实例上
import store from "./store/index";

Vue.config.productionTip = false

Vue.use(ElementUI);

// 创建vue根实例
new Vue({
  store,
  render: h => h(App)
}).$mount('#app');


// new Vue({
//   el:'#app',
//   template:'<div>11111</div>'
// })