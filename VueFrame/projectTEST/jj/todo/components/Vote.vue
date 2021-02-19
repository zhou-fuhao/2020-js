<template>
  <div class="vote">
    <vote-title></vote-title>
    <vote-content></vote-content>
    <vote-footer></vote-footer>
  </div>
</template>

<script>
import VoteContent from "./VoteContent.vue";
import VoteFooter from "./VoteFooter.vue";
import VoteTitle from "./VoteTitle.vue";

export default {
  components: {
    VoteTitle,
    VoteContent,
    VoteFooter,
  },
};
</script>

// 在style行间写一个scoped，会让当前的样式只对当前的组件生效
<style lang="less" scoped>
.vote {
  border: 2px solid yellowgreen;
  padding: 10px;
  width: 500px;
  margin: 20px auto;
  text-align: center;
}
</style>