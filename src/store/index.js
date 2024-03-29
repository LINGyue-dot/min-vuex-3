/*
 * @Author: qianlong github:https://github.com/LINGyue-dot
 * @Date: 2021-10-12 10:46:53
 * @LastEditors: qianlong github:https://github.com/LINGyue-dot
 * @LastEditTime: 2021-10-12 10:50:35
 * @Description:
 */

import Vue from 'vue';
import Vuex from '../min-vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    name: '张三',
    age: 21,
  },
  mutations: {
    changeName(state, newName) {
      // 这里简单举个例子 修改个名字
      state.name = newName;
    },
  },
  actions: {
    changeNameAsync(context, newName) {
      // 这里用 setTimeout 模拟异步
      setTimeout(() => {
        // 在这里调用 mutations 中的处理方法
        context.commit('changeName', newName);
      }, 2000);
    },
  },
  getters: {
    decorationName(state) {
      return `大家好我的名字叫${state.name}今年${state.age}岁`;
    },
  },
});

export default store;
