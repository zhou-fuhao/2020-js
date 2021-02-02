<template>
  <div>
    <!-- <button @click="addSupper">支持</button>
    <button @click="addOppose">反对</button> -->
    <el-button @click="addSupper" type="success">支持</el-button>
    <el-button @click="addOppose" type="danger">反对</el-button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  methods: {
    ...mapActions(["addSupper", "addOppose"]),
  },
};
</script>


<style lang="less" scoped>
button {
  margin-right: 10px;
  // background: yellowgreen;
}
</style>