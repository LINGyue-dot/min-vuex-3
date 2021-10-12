/*
 * @Author: qianlong github:https://github.com/LINGyue-dot
 * @Date: 2021-10-12 10:20:54
 * @LastEditors: qianlong github:https://github.com/LINGyue-dot
 * @LastEditTime: 2021-10-12 10:49:22
 * @Description:
 */
import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;
import store from './store';

new Vue({
  render: (h) => h(App),
  store,
}).$mount('#app');
