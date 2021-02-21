<template>
  <div class="container">
    <div class="leftBox">
      <el-menu class="el-menu-vertical-demo" background-color="#3a3d42" text-color="#fff" active-text-color="#ffd04b"
        @select="changeRouter" :default-active="activeIndex()">
        <el-menu-item index="1">
          <span>我的客户</span>
        </el-menu-item>
        <el-menu-item index="2" v-power="customerAll">
          <span>全部客户</span>
        </el-menu-item>
        <el-menu-item index="3">
          <span>新增客户</span>
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
    // 当页面刷新时，根据hash值显示
    activeIndex() {
      let nowURL = location.href;
      if (nowURL.includes("/customer/list")) {
        let { type } = this.$route.query;
        if (type == "my") return "1";
        if (type == "all") return "2";
      }
      if (nowURL.includes("/customer/handle")) return "3";
    },
    changeRouter(index) {
      let customerArr = [
        "/customer/list?type=my",
        "/customer/list?type=all",
        "/customer/handle",
      ];
      index = parseInt(index);
      if (location.href.includes(customerArr[index - 1])) return;
      this.$router.push(customerArr[index - 1]);

      // 此方法会重复添加路径，每次push前先校验存不存在，若存在则不push，若不存在再push
      // 也可以使用<router-link to="/customer/list?type=my" tag="li">我的客户</router-link>
      // switch (parseInt(index)) {
      //   case 1:
      //     this.$router.push("/customer/list?type=my");
      //     break;
      //   case 2:
      //     this.$router.push("/customer/list?type=all");
      //     break;
      //   case 3:
      //     this.$router.push("/customer/handle");
      //     break;
      // }
    },
  },
};
</script>

<style lang="less" scoped>
.container {
  height: 600px;
  display: flex;
  .leftBox {
    width: 25%;
    background: #3a3d42;
  }
  .rightBox {
    width: 75%;
    background: burlywood;
  }
}
</style>