<template>
  <div id="container">
    <!-- 当前组件的视图层 -->
    <my-table></my-table>
    <vote></vote>
  </div>
</template>

<script>
// App.vue是当前项目的根组件

// 当前组件的逻辑层
import Vote from "./components/Vote";
import MyTable from "./components/MyTable.vue";
// import index from "./views";  // 跟上面的写法是一样的，如果引入的是一个文件夹，自动往文件夹离寻找index的文件
// 如果文件名省略不写，只会找index文件

// 组件的引入
// 1.导入组件
// 2.注册组件
// 3.使用组件
export default {
  components: {
    Vote,
    MyTable,
  },
};
</script>

<style lang="less">
// 当前组件的样式层
</style>
