<style lang="less">
header {
  background: #545c64;
  display: flex;
  justify-content: space-between;
  h3 {
    margin-left: 20px;
    width: 20%;
  }
  .menu-demo {
    width: 80%;
  }
}
</style>

<template>
  <div>
    <!-- 头部 -->
    <header>
      <h3>crm客户管理系统</h3>
      <el-menu mode="horizontal" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b"
        class="menu-demo">
        <el-menu-item index="1">
          <router-link to="/organize" tag="li">组织结构</router-link>
        </el-menu-item>
        <el-menu-item index="2">
          <router-link to="/customer" tag="li">客户管理</router-link>
        </el-menu-item>

      </el-menu>
    </header>

    <!-- 内容显示区域 -->
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {};
</script>