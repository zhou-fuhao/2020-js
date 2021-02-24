<template>
  <div class="container">
    <div class="leftBox">
      <el-menu class="el-menu-vertical-demo" background-color="#3a3d42" text-color="#fff" active-text-color="#ffd04b"
        :default-active="activeIndex()">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-s-custom"></i>
            <span>员工管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1">
              <router-link to="/system/user/list" tag="li">员工列表</router-link>
            </el-menu-item>
            <el-menu-item index="1-2">
              <router-link to="/system/user/handle" tag="li">新增员工</router-link>
            </el-menu-item>
            <el-menu-item index="1-3">
              <router-link to="/system/user/canvas" tag="li">员工报表</router-link>
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-s-tools"></i>
            <span>部门管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="2-1">
              <router-link to="/system/department/list" tag="li">部门列表</router-link>
            </el-menu-item>
            <el-menu-item index="2-2">
              <router-link to="/system/department/handle" tag="li">新增部门</router-link>
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-document"></i>
            <span>职务管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="3-1">
              <router-link to="/system/job/list" tag="li">职务列表</router-link>
            </el-menu-item>
            <el-menu-item index="3-2">
              <router-link to="/system/job/handle" tag="li">新增职务</router-link>
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </div>
    <div class="rightBox">
      <router-view></router-view>
    </div>
  </div>

</template>

<script>
export default {
  methods: {
    // 当页面刷新时，根据hash值显示
    activeIndex() {
      let nowURL = location.href;
      if (nowURL.includes("/system/user/list")) return "1-1";
      if (nowURL.includes("/system/user/handle")) return "1-2";
      if (nowURL.includes("/system/user/canvas")) return "1-3";
      if (nowURL.includes("/system/department/list")) return "2-1";
      if (nowURL.includes("/system/department/handle")) return "2-2";
      if (nowURL.includes("/system/job/list")) return "3-1";
      if (nowURL.includes("/system/job/handle")) return "3-2";
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
