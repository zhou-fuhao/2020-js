<template>
  <div>
    <p>支持人数：{{ supperNum }}</p>
    <p>反对人数：{{ opposeNum }}</p>
    <p>支持率：{{ ratio }}%</p>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  computed: {
    ...mapState(["supperNum", "opposeNum"]),
    ...mapGetters(["ratio"]),
  },
};
</script>


<style lang="less" scoped>
</style>