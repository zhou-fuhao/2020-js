<template>
  <div class="swiper">
    <van-swipe class="my-swipe" :loop="true" :autoplay="3000" indicator-color="red">
      <van-swipe-item v-for="(item) in bannerData" :key="item.id">
        <router-link :to="{path:`/detail/${item.id}`}">
          <img :src="item.image" alt="">
        </router-link>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<script>
export default {
  props: ["bannerData"],
  data() {
    return {};
  },
};
</script>
<style lang="less">
.my-swipe .van-swipe-item {
  color: #fff;
  height: 5rem;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
  img {
    display: block;
    width: 100%;
    height: 100%;
  }
}
.swiper {
  .van-swipe__indicators {
    left: 80%;
    z-index: 999;
  }
}
</style>
