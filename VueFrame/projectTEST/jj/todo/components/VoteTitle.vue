<template>
  <div class="header">
    {{ title }}
    <span>{{sum}}</span>
  </div>
</template>

<script>
export default {
  computed: {
    title() {
      return this.$store.state.title;
    },
    sum() {
      return this.$store.state.supperNum + this.$store.state.opposeNum;
    },
  },
};
</script>


<style lang="less" scoped>
.header {
  font-size: 20px;
  color: red;
  text-align: center;
}
</style>