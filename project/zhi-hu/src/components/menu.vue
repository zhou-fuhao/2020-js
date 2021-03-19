<template>
  <div class="navBox">
    <router-link to="/home">
      <span>首页</span>
    </router-link>
    <router-link to="/my">
      <span>我的</span>
    </router-link>
    <router-link to="/notice">
      <span>通知</span>
    </router-link>
    <router-link to="/personal">
      <span>个人</span>
    </router-link>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.navBox {
  height: 10vh;
  width: 100%;
  position: fixed;
  border-top: 1px solid pink;
  left: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  text-align: center;

  font-size: 0.6rem;
  a {
    flex: 1;
  }
}
// 在router-link组件上，点击的是谁，那他就会给谁加上router-link-active类名
.router-link-active {
  color: pink;
}
</style>