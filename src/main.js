import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

// vue 实例 可以发送 事件
Vue.prototype.$bus = new Vue();// 事件总线

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app');
