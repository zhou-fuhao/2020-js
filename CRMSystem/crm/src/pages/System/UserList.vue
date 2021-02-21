<template>
  <div>
    <div class="headerSearch">
      <el-button type="info" size="small" @click="deleteAll()">批量删除</el-button>
      <el-select v-model="departmentId" placeholder="全部" size="small" @change="searchSelect">
        <el-option label="全部" value="0"></el-option>
        <el-option v-for="(item,index) in departmentList" :key="index" :label="item.name" :value="item.id">
        </el-option>
      </el-select>
      <el-input v-model="search" placeholder="按姓名/邮箱/手机号模糊查询" size="small" @keyup.enter.native="searchInp"></el-input>
    </div>

    <el-table ref="userList" :data="userList" style="width: 100%" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55">
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="100"></el-table-column>
      <el-table-column prop="sex" label="性别" width="60" :formatter="handleSex"></el-table-column>
      <el-table-column prop="department" label="部门" width="80"></el-table-column>
      <el-table-column prop="job" label="职务" width="100"></el-table-column>
      <el-table-column prop="email" label="邮箱" width="220"></el-table-column>
      <el-table-column prop="phone" label="电话" width="120"></el-table-column>
      <el-table-column prop="desc" label="描述" show-overflow-tooltip></el-table-column>
      <el-table-column prop="" label="操作" width="200">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="medium">编辑</el-button>
          <el-button type="text" size="medium">删除</el-button>
          <el-button type="text" size="medium">重置密码</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div style="margin-top: 20px">
      <el-button @click="toggleSelection()">取消选择</el-button>
    </div>
  </div>
</template>

<script>
import { queryUserList, queryDepartmentList } from "../../api/user";
export default {
  data() {
    return {
      departmentId: "0",
      search: "",
      departmentList: [],
      userList: [],
      multipleSelection: [],
    };
  },
  created() {
    // 获取部门信息
    queryDepartmentList().then((depRes) => {
      this.departmentList = depRes;
    });
    // 获取用户列表信息
    queryUserList({ departmentId: this.departmentId, search: this.search })
      .then((userRes) => {
        this.userList = userRes;
      })
      .catch(() => {
        this.$alert("当数据为空时，会提示：：获取用户信息失败，请重试！");
      });
  },
  methods: {
    handleSex(row) {
      return row.sex == 0 ? "男" : "女";
    },
    searchSelect() {
      queryUserList({ departmentId: this.departmentId, search: this.search })
        .then((userRes) => {
          this.userList = userRes;
        })
        .catch(() => {
          this.userList = [];
          // this.$alert("当数据为空时，会提示：：获取用户信息失败，请重试！");
        });
    },
    searchInp(e) {
      let code = e.keyCode;
      if (code == 13) {
        queryUserList({ departmentId: this.departmentId, search: this.search })
          .then((userRes) => {
            this.userList = userRes;
          })
          .catch(() => {
            this.userList = [];
            // this.$alert("当数据为空时，会提示：：获取用户信息失败，请重试！");
          });
      }
    },
    deleteAll() {
      alert(22);
    },
    toggleSelection(rows) {
      if (rows) {
        rows.forEach((row) => {
          this.$refs.userList.toggleRowSelection(row);
        });
      } else {
        this.$refs.userList.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
  },
};
</script>

<style lang="less" scoped>
.headerSearch {
  width: 600px;
  display: flex;
  margin: 10px;
  float: right;
  div,
  button {
    margin-right: 20px;
  }
}
</style>