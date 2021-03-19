<template>
  <div class="box">
    <div class="filterBox">
      <el-input v-model="search" placeholder="按部门名称模糊查询" class="inp" @change="change"></el-input>
    </div>
    <div class="table">
      <el-table v-loading="loading" ref="departmentList" border stripe :data="departmentList" style="width: 100%"
        :header-cell-style="tableHeaderStyle">
        <el-table-column align="center" prop="id" label="编号" min-width="20%"></el-table-column>
        <el-table-column align="center" prop="name" label="名称"></el-table-column>
        <el-table-column align="center" prop="desc" label="描述"></el-table-column>
        <el-table-column align="center" label="操作">
          <template slot-scope="scope">
            <el-button @click="handleEdit(scope.row)" type="text" size="medium">编辑</el-button>
            <el-button @click="handleDelete(scope.row)" type="text" size="medium">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import * as types from "../../store/store-types";
import { deleteDepartment } from "../../api/department";
export default {
  data() {
    return {
      loading: true,
      search: "",
      tableHeaderStyle: { background: "#a9a9a9", color: "black" },
    };
  },
  created() {
    this.$store.dispatch(types.DEPARTMENT_LIST);
    this.loading = false;
  },
  computed: {
    departmentList() {
      return this.$store.state.departmentList;
    },
  },
  methods: {
    // 按部门名称模糊查询
    change() {
      this.$store.dispatch(types.DEPARTMENT_LIST);
    },
    // 编辑数据
    handleEdit(row) {
      let departmentId = row.id;
      this.$router.push({
        path: "/system/department/handle",
        query: { departmentId },
      });
    },
    // 删除数据
    handleDelete(row) {
      let departmentId = row.id;
      deleteDepartment({ departmentId })
        .then((result) => {
          if (result.code == 0) {
            this.$alert("数据删除成功，即将跳转到列表~", {
              callback: () => {
                this.$store.dispatch(types.DEPARTMENT_LIST);
              },
            });
          }
        })
        .catch(() => {
          this.$alert("数据删除失败，请重试！");
        });
    },
  },
};
</script>

<style lang="less" scoped>
.inp {
  width: 300px;
  margin-left: 20px;
}
.box {
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
}

/* ==filterBox== */
.filterBox {
  padding: 10px;
  text-align: right;
}
</style>
