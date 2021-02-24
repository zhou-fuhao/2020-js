<template>
  <div class="box">
    <div class="filterBox">
      <el-input v-model="search" placeholder="按职务名称模糊查询" class="inp" @change="change"></el-input>
    </div>
    <div class="table">
      <el-table v-loading="loading" ref="jobList" border stripe :data="jobList" style="width: 100%"
        :header-cell-style="tableHeaderStyle">
        <el-table-column align="center" prop="id" label="编号" min-width="8%"></el-table-column>
        <el-table-column align="center" prop="name" label="名称" min-width="16%"></el-table-column>
        <el-table-column align="center" prop="desc" label="描述" min-width="28%"></el-table-column>
        <el-table-column align="center" prop="power" label="权限"></el-table-column>
        <el-table-column align="center" label="操作" min-width="20%">
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
import { queryJobList, deleteJob } from "../../api/job";
export default {
  data() {
    return {
      loading: true,
      search: "",
      jobList: [],
      tableHeaderStyle: { background: "#a9a9a9", color: "black" },
    };
  },
  created() {
    this.queryData();
  },
  methods: {
    // 按职务名称模糊查询
    change() {
      this.queryData();
    },
    // 请求列表数据
    queryData() {
      this.loading = true;
      queryJobList()
        .then((jobRes) => {
          this.jobList = jobRes;
        })
        .catch(() => {
          this.jobList = [];
        })
        .finally(() => {
          this.loading = false;
        });
    },
    // 编辑数据
    handleEdit(row) {
      let jobId = row.id;
      this.$router.push({
        path: "/system/job/handle",
        query: { jobId },
      });
    },
    // 删除数据
    handleDelete(row) {
      let jobId = row.id;
      deleteJob({ jobId })
        .then((result) => {
          if (result.code == 0) {
            this.$alert("数据删除成功，即将跳转到列表~", {
              callback: () => {
                this.$alert("执行回调函数，返回职务列表");
                // this.$router.push({
                //   path: "/system/department/list",
                // });
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
