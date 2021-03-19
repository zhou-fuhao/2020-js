<template>
  <div class="itemBox">
    今天的日期是{{item.date}}
    <div v-for="(itemNews,indexNews) in item.stories" :key="indexNews">{{itemNews.title}}</div>

  </div>
</template>

<script>
export default {
  props: ["item"],
};
</script>

<style lang="less">
.itemBox {
  padding: 0.2rem;
  border-bottom: 1px solid pink;
}
</style>