# min-vuex

## 前置

* 如何进行数据保存的
* 如何全局注入
* 为什么 commit 不能是异步
* 整体的执行流程是如何的
* modules 如何处理



## 3.x

###  核心思路

全局数据管理本质上也就是某一块变量区域脱离项目逻辑，在需要的地方去引入去修改。





### map suger

使用

```js
...mapState(['age',['name']] // 同 mapMutations mapActions mapGetters
computed:...mapState([...])
```

核心思想就是通过传入的参数返回函数，这个函数通过全局挂载的 `$store` 来寻找/执行对应的操作

```js
const mapState = (params) => {
  if (!Array.isArray(params)) {
    return;
  }
  let obj = {};
  params.forEach((item) => {
    obj[item] = function() {
      return this.$store.state[item];
    };
  });
  return obj;
};
```













# Refrence

[快速上手Vuex 到 手写简易 Vuex](https://juejin.cn/post/6994337441314242590#heading-26)
