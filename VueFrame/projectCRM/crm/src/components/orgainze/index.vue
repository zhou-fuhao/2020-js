<style lang="less">
.box {
  height: 400px;
  display: flex;
  .leftBox {
    width: 20%;
    background: cadetblue;
  }
  .rightBox {
    width: 80%;
    background: burlywood;
  }
}
</style>

<template>
  <div class="box">
    <div class="leftBox">
      <el-menu class="el-menu-vertical-demo" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-s-custom"></i>
            <span>员工</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1">
              <router-link to="/organize/list" tag="li">列表</router-link>
            </el-menu-item>
            <el-menu-item index="1-2">
              <router-link to="/organize/detail" tag="li">详情</router-link>
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-s-tools"></i>
            <span>职务</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="2-1">
              <router-link to="/organize/list" tag="li">职务列表</router-link>
            </el-menu-item>
            <el-menu-item index="2-2">
              <router-link to="/organize/detail" tag="li">新增职务</router-link>
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
export default {};
</script>