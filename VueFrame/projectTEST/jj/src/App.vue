<template>
  <div id="container">
    <todo></todo>
    <index></index>
  </div>
</template>

<script>
import Index from "./pages/Index";
import Todo from "./pages/Todo";
export default {
  components: {
    Todo,
    Index,
  },
};
</script>

<style lang="less">
// 当前组件的样式层
</style>
