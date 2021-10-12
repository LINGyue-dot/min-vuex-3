/*
 * @Author: qianlong github:https://github.com/LINGyue-dot
 * @Date: 2021-10-12 10:21:35
 * @LastEditors: qianlong github:https://github.com/LINGyue-dot
 * @LastEditTime: 2021-10-12 10:53:26
 * @Description:
 */
let _Vue = null;

class Store {
  constructor(options) {
    const state = options.state || {};
    const mutations = options.mutations || {};
    const actions = options.actions || {};
    const getters = options.getters || {};

    // state
    // to reactive
    this.state = _Vue.observable(state);

    // getters
    // {} vs object.create(null)
    // former inherit from object {}.constructor.prototype == Object.prototype
    // object.create(null) inherit nothing and hasn't property
    this.getters = Object.create(null);
    // 遍历自身可枚举属性
    Object.keys(getters).forEach((key) => {
      Object.defineProperty(this.getters, key, {
        get: () => getters[key].call(this, this.state),
      });
    });

    // mutations
    this.mutations = {};
    Object.keys(mutations).forEach((key) => {
      this.mutations[key] = (params) => {
        mutations[key].call(this, this.state, params);
      };
    });

    // actions
    this.actions = {};
    Object.keys(actions).forEach((key) => {
      this.actions[key] = (params) => {
        // 传入一个 store 即 this
        actions[key].call(this, this, params);
      };
    });
  }

  // commit method
  commit = (eventName, parmas) => {
    this.mutations[eventName](parmas);
  };

  // dispatch method
  dispatch = (eventName, params) => {
    this.actions[eventName](params);
  };
}

/**
 * 全局注册混入，使得全组件中都可以使用 $store
 * @param {*} Vue
 */
function install(Vue) {
  _Vue = Vue;
  _Vue.mixin({
    beforeCreate() {
      // new Vue 时候将 store 实例传入
      if (this.$options.store) {
        _Vue.prototype.$store = this.$options.store;
      }
    },
  });
}

export default {
  install,
  Store,
};
