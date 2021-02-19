import Vue from 'vue';
import App from './App.vue';



/* 导入公共样式 */
import './assets/reset.min.css';
import './assets/font/iconfont.css';




Vue.config.productionTip = false;


new Vue({
  render: h => h(App)
}).$mount('#app');



// console.log('main.js')


