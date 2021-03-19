<template>
  <div class="navBox">
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o">
        <router-link to="/home">首页</router-link>
      </van-tabbar-item>
      <van-tabbar-item icon="search">
        <router-link to="/my">我的</router-link>
      </van-tabbar-item>
      <van-tabbar-item icon="friends-o">
        <router-link to="/notice">通知</router-link>
      </van-tabbar-item>
      <van-tabbar-item icon="setting-o">
        <router-link to="/personal">个人</router-link>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
    };
  },
};
</script>

<style lang="less" scoped>
</style>