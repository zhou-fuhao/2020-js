<template>
  <div id="app">
    <header class="headerBox" ref="headerBox">
      <h1 class="logo">CRM客户管理系统</h1>
      <el-menu mode="horizontal" class="el-menu-demo" background-color="#3a3d42" text-color="#fff"
        active-text-color="#ffd04b" :default-active="activeIndex()">
        <el-menu-item index="1">
          <router-link to="/organize">组织结构</router-link>
        </el-menu-item>
        <el-menu-item index="2">
          <router-link to="/customer">客户管理</router-link>
        </el-menu-item>
      </el-menu>
      <div class="baseBox">
        <span>您好：珠峰培训</span>
        <!-- <a href="javascript:;">修改密码</a> -->
        <a href="javascript:;">安全退出</a>
      </div>
    </header>
    <main class="mainBox" ref="mainBox">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  methods: {
    // 当页面刷新时，根据hash值显示组织结构还是客户管理
    activeIndex() {
      let nowURL = location.href;
      if (nowURL.includes("/organize")) return "1";
      if (nowURL.includes("/customer")) return "2";
    },
  },
  mounted() {
    let winH = document.documentElement.clientHeight,
      headerBox = this.$refs.headerBox,
      mainBox = this.$refs.mainBox;

    mainBox.style.height = winH - headerBox.offsetHeight + "px";
    this.$forceUpdate();
  },
};
</script>

<style lang='less'>
.headerBox {
  display: flex;
  justify-content: space-between;
  // height: 52px;
  background: #3a3d42;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3);
  // overflow: hidden;

  .el-menu.el-menu--horizontal {
    border-bottom: solid 1px #3a3d42;
    // z-index: 9999 !important;
  }

  .logo {
    width: 18%;
    line-height: 52px;
    text-align: center;
    font-size: 20px;
    color: #fff;
    letter-spacing: 3px;
  }

  .baseBox {
    box-sizing: border-box;
    padding-right: 20px;
    width: 18%;
    line-height: 52px;
    text-align: right;
    font-size: 16px;
    span,
    a {
      margin: 0 5px;
      color: #fff;
    }
    a {
      text-decoration: underline;
    }
  }
}
</style>