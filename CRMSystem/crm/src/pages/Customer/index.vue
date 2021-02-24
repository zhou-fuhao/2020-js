<template>
  <div class="container">
    <div class="leftBox">
      <el-menu class="el-menu-vertical-demo" style="border-right: solid 1px #3a3d42;" background-color="#3a3d42"
        text-color="#fff" active-text-color="#ffd04b" @select="changeRouter" :default-active="activeIndex()">
        <el-menu-item index="1">
          <i class="el-icon-setting"></i>
          <span>我的客户</span>
        </el-menu-item>
        <el-menu-item index="2" v-power="customerAll">
          <i class="el-icon-document"></i>
          <span>全部客户</span>
        </el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-document-add"></i>
          <span>新增客户</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-help"></i>
          <span>客户画布</span>
        </el-menu-item>
      </el-menu>
    </div>
    <div class="rightBox">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      customerAll: "departcustomer|allcustomer",
    };
  },
  methods: {
    activeIndex() {
      let nowURL = location.href;
      if (nowURL.includes("/customer/list")) {
        let { type } = this.$route.query;
        if (type == "my") return "1";
        if (type == "all") return "2";
      }
      if (nowURL.includes("/customer/handle")) return "3";
      if (nowURL.includes("/customer/canvas")) return "4";
    },
    changeRouter(index) {
      let customerArr = [
        "/customer/list?type=my",
        "/customer/list?type=all",
        "/customer/handle",
        "/customer/canvas",
      ];
      index = parseInt(index);
      if (location.href.includes(customerArr[index - 1])) return;
      this.$router.push(customerArr[index - 1]);
    },
  },
};
</script>

<style lang="less" scoped>
.container {
  width: 100%;
  height: 100%;
  display: flex;

  .leftBox {
    width: 18%;
    height: 100%;
    min-width: 200px;
    background: #3a3d42;
  }

  .rightBox {
    width: 82%;
    height: 100%;
    // background: rgba(0,0,0,.5);
  }
}
</style>
