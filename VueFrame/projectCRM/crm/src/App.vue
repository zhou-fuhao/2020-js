// 组件模板
<template>
  <div id="app">
    <login></login>
  </div>
</template>

// 组件逻辑
<script>
import Login from "./Login.vue";
export default {
  components: { Login },
};
</script>

// 组件样式
<style lang='less' scope>
#app {
  height: 100%;
  background: url(./assets/login_bg.jpg) repeat-x;
}
</style>