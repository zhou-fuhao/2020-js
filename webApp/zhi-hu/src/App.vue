<template>
  <div class="app">
    <!-- 当前页面由两部分组成，上面显示的大组件，下面显示的导航按钮 -->

    <!-- 上面的组件部分 -->
    <router-view></router-view>

    <!-- 下面的导航按钮 -->
    <my-menu></my-menu>
  </div>
</template>

<script>
import myMenu from "./components/menu";
export default {
  components: {
    myMenu,
  },
};
</script>
<style lang="less">
html,
body {
  margin: 0;
  padding: 0;
}
</style>