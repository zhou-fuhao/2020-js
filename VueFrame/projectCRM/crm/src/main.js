import Vue from 'vue';
import store from "./store";
import router from "./router";
import App from './App.vue';



/* 导入公共样式 */
import './assets/reset.min.css';
import './assets/font/iconfont.css';


/* 导入UI库中所有的组件和对应的样式 */
import ElementUI from 'element-ui';
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);


Vue.config.productionTip = false;


new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app');



// console.log('main.js')