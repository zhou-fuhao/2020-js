<template>
  <div class="box">
    <!-- 头部 -->
    <my-header></my-header>

    <!-- 轮播图 -->
    <my-swiper :bannerData="bannerList"></my-swiper>

    <!-- 每一天的数据 -->
    <my-list-item v-for="(item,index) in newsData" :key="index" :item="item"></my-list-item>
  </div>
</template>

<script>
import myHeader from "../../components/header";
import mySwiper from "./swiper";
import myListItem from "./listItem";
import { queryLatest } from "../../api/index";
export default {
  data() {
    return {
      bannerList: [],
      newsData: [
        {
          date: "20210227",
          stories: [{ title: "27号的新闻一" }],
        },
        {
          date: "20210228",
          stories: [{ title: "28号的新闻一" }],
        },
      ],
    };
  },
  components: {
    myHeader,
    mySwiper,
    myListItem,
  },
  async created() {
    let { date, stories, top_stories } = await queryLatest();
    console.log(date);
    console.log(stories);
    this.bannerList = top_stories;
    // this.newsData = stories;
  },
};
</script>

<style lang="less" scoped>
</style>