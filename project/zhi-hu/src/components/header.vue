<template>
  <div class="header">
    <div class="base">
      <span class="time">
        <i>{{handleTime(time)[0]}}</i>
        <i>{{handleTime(time)[1]}}</i>
      </span>
      <h1 class="title">知乎日报</h1>
    </div>
    <div class="user">
      <img src="../assets/images/timg.jpg" alt="">
    </div>
  </div>
</template>
<script>
import { formatTime } from "../assets/utils";
export default {
  data() {
    return {
      time: formatTime(new Date()), // '2021/02/26'
    };
  },
  methods: {
    // 从字符串的时间里提取出想要的大写的月份和数字的日
    handleTime(time) {
      // '2021/02/26'
      let day = time.substr(-2); // 获取日
      let month = parseInt(time.substr(4, 2)); // 获取月份 01
      let ary = [
        "",
        "一月",
        "二月",
        "三月",
        "四月",
        "五月",
        "六月",
        "七月",
        "八月",
        "九月",
        "十月",
        "十一月",
        "十二月",
      ];
      return [day, ary[month]]; // 返回的是一个数组，数组的第一项是处理好的日，第二项是处理好的月份
    },
  },
};
</script>
<style lang="less">
.header {
  background: plum;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.2rem;

  // 左边的样式
  .base {
    display: flex;
    align-items: center;
    font-size: 0.34rem;
    .time {
      text-align: center;
      padding-right: 0.2rem;
      i {
        font-style: normal;
        display: block;
        font-weight: bold;
      }
    }
    .title {
      border-left: 1px solid black;
      padding-left: 0.2rem;
    }
  }
  .user {
    width: 0.6rem;
    height: 0.6rem;
    img {
      display: block;
      width: 100%;
      height: 100%;
    }
  }
}
</style>
