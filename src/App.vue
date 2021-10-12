<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <h1>{{ $store.state.name + '' + $store.state.age }}</h1>
    <button @click="$store.commit('changeName', 'qianlon')">changename</button>
    <button @click="$store.dispatch('changeNameAsync', 'actions 按钮')">
      actions 按钮
    </button>
    {{ age }}
  </div>
</template>

<script>
import { mapState } from './min-vuex/index';
export default {
  name: 'App',
  computed: {
    ...mapState(['age']),
  },
  mounted() {
    console.log(this.$options); // 这里的 $options 和 vue plugin 的 $options 不同
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
