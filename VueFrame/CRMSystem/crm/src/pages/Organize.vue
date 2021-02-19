<template>
  <div class="container">
    <div class="leftBox">
      <el-menu class="el-menu-vertical-demo" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b"
        :default-active="activeIndex()">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-s-custom"></i>
            <span>员工管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1">
              <router-link to="/organize/user/list" tag="li">员工列表</router-link>
            </el-menu-item>
            <el-menu-item index="1-2">
              <router-link to="/organize/user/handle" tag="li">新增员工</router-link>
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
              <router-link to="/organize/department/list" tag="li">部门列表</router-link>
            </el-menu-item>
            <el-menu-item index="2-2">
              <router-link to="/organize/department/handle" tag="li">新增部门</router-link>
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
              <router-link to="/organize/job/list" tag="li">职务列表</router-link>
            </el-menu-item>
            <el-menu-item index="3-2">
              <router-link to="/organize/job/handle" tag="li">新增职务</router-link>
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
      if (nowURL.includes("/organize/user/list")) return "1-1";
      if (nowURL.includes("/organize/user/handle")) return "1-2";
      if (nowURL.includes("/organize/department/list")) return "2-1";
      if (nowURL.includes("/organize/department/handle")) return "2-2";
      if (nowURL.includes("/organize/job/list")) return "3-1";
      if (nowURL.includes("/organize/job/handle")) return "3-2";
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