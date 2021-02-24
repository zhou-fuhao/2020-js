<template>
  <div class="box">
    <div class="filterBox">
      <el-button type="info" size="small" @click="deleteAll()" class="btn">批量删除</el-button>
      <el-select v-model="departmentId" placeholder="全部" size="small" @change="searchSelect">
        <el-option label="全部" value="0"></el-option>
        <el-option v-for="(item,index) in departmentList" :key="index" :label="item.name" :value="item.id">
        </el-option>
      </el-select>
      <el-input v-model="search" placeholder="按姓名/邮箱/手机号模糊查询" size="small" @keyup.enter.native="searchInp" class="inp">
      </el-input>
    </div>

    <el-table ref="userList" :data="userList" style="width: 100%" border stripe :header-cell-style="tableHeaderStyle"
      @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55">
      </el-table-column>
      <el-table-column align="center" prop="name" label="姓名" width="100"></el-table-column>
      <el-table-column align="center" prop="sex" label="性别" width="60" :formatter="handleSex"></el-table-column>
      <el-table-column align="center" prop="department" label="部门" width="80"></el-table-column>
      <el-table-column align="center" prop="job" label="职务" width="100"></el-table-column>
      <el-table-column align="center" prop="email" label="邮箱" width="220"></el-table-column>
      <el-table-column align="center" prop="phone" label="电话" width="120"></el-table-column>
      <el-table-column align="center" prop="desc" label="描述" show-overflow-tooltip></el-table-column>
      <el-table-column align="center" prop="" label="操作" width="200">
        <template slot-scope="scope">
          <el-button @click="handleEdit(scope.row)" type="text" size="medium">编辑</el-button>
          <el-button @click="handleDelete(scope.row)" type="text" size="medium">删除</el-button>
          <el-button @click="handleReset(scope.row)" type="text" size="medium">重置密码</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import {
  queryUserList,
  queryDepartmentList,
  deleteUser,
  resetUserPassword,
} from "../../api/user";
export default {
  data() {
    return {
      departmentId: "0",
      search: "",
      departmentList: [],
      userList: [],
      multipleSelection: [],
      tableHeaderStyle: { background: "#a9a9a9", color: "black" },
    };
  },
  watch: {
    $route(to, from) {
      this.queryData();
    },
  },
  created() {
    // 获取部门信息
    queryDepartmentList().then((depRes) => {
      this.departmentList = depRes;

      // 获取部门成功后，则调用用户列表接口
      this.queryData();
    });
  },
  methods: {
    // 获取用户列表信息
    queryData() {
      queryUserList({ departmentId: this.departmentId, search: this.search })
        .then((userRes) => {
          this.userList = userRes;
        })
        .catch(() => {
          this.userList = [];
        });
    },
    // 判断男女
    handleSex(row) {
      return row.sex == 0 ? "男" : "女";
    },
    // 下拉选择查询
    searchSelect() {
      this.queryData();
    },
    // 输入框查询
    searchInp(e) {
      let code = e.keyCode;
      if (code == 13) {
        this.queryData();
      }
    },
    // 批量删除
    deleteAll() {
      if (this.multipleSelection.length < 1) {
        this.$alert("请至少选择一条数据删除！");
      } else {
        let userArr = this.multipleSelection;
        this.$alert("批量删除有问题！");
        return;

        this.$confirm(`此操作不可逆，您确定要删除吗?`, "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
        })
          .then(() => {
            userArr.forEach((item) => {
              deleteUser({ userId: item.id }).then((result) => {
                let { code } = result;
                if (code == 0) {
                  this.$message({
                    message: "删除成功~",
                    type: "success",
                  });
                } else {
                  this.$message({
                    message: "删除失败~",
                    type: "error",
                  });
                }
                // 重新请求数据
                this.$alert("执行回调函数，返回用户列表");
                // this.$router.push({
                //   path: "/system/user/list",
                // });
              });
            });
          })
          .catch(() => {});
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    // 编辑
    handleEdit(row) {
      let userId = row.id;
      this.$router.push({
        path: "/system/user/handle",
        query: { userId },
      });
    },
    // 删除
    handleDelete(row) {
      this.$confirm(`您确定要删除姓名为：${row.name}  的数据嘛?`, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          deleteUser({ userId: row.id }).then((result) => {
            let { code } = result;
            if (code == 0) {
              this.$message({
                message: "删除成功~",
                type: "success",
              });
            } else {
              this.$message({
                message: "删除失败~",
                type: "error",
              });
            }
            // 重新请求数据
            this.$router.push({
              path: "/system/user/list",
              query: {
                type: "delete",
              },
            });
          });
        })
        .catch(() => {});
    },
    // 重置密码
    handleReset(row) {
      this.$confirm(`您确定要重置姓名为：${row.name}  的密码嘛?`, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          resetUserPassword({ userId: row.id }).then((result) => {
            let { code } = result;
            if (code == 0) {
              this.$message({
                message: "重置成功~",
                type: "success",
              });
            } else {
              this.$message({
                message: "重置失败~",
                type: "error",
              });
            }
            // 重新请求数据
            this.$router.push({
              path: "/system/user/list",
              query: {
                type: "reset",
              },
            });
          });
        })
        .catch(() => {});
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

  .btn {
    margin-right: 20px;
  }
}
</style>