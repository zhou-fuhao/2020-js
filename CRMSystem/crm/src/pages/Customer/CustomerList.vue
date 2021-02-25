<template>
  <div class="box">
    <div class="filterBox">
      <el-select v-model="type" placeholder="请选择" @change="change">
        <el-option label="全部客户" value=""></el-option>
        <el-option label="重点客户" value="重点客户"></el-option>
        <el-option label="一般客户" value="一般客户"></el-option>
        <el-option label="放弃客户" value="放弃客户"></el-option>
      </el-select>
      <el-input v-model="search" placeholder="按关键字模糊查询" class="inp" @change="change"></el-input>
    </div>
    <div class="table">
      <el-table v-loading="loading" ref="customerList" border stripe :data="customerList" style="width: 100%"
        :header-cell-style="tableHeaderStyle">
        <el-table-column align="center" prop="name" label="姓名" min-width="8%"></el-table-column>
        <el-table-column align="center" prop="sex" label="性别" min-width="5%" :formatter="handleSex"></el-table-column>
        <el-table-column align="center" prop="email" label="邮箱" min-width="10%" show-overflow-tooltip></el-table-column>
        <el-table-column align="center" prop="phone" label="电话" min-width="10%"></el-table-column>
        <el-table-column align="center" prop="weixin" label="微信" min-width="10%" show-overflow-tooltip>
        </el-table-column>
        <el-table-column align="center" prop="QQ" label="QQ" min-width="12%" show-overflow-tooltip></el-table-column>
        <el-table-column align="center" prop="type" label="类型" min-width="10%"></el-table-column>
        <el-table-column align="center" prop="userName" label="隶属人" min-width="10%"></el-table-column>
        <el-table-column align="center" prop="address" label="地址" min-width="20%" show-overflow-tooltip>
        </el-table-column>
        <el-table-column align="center" label="操作" min-width="15%">
          <template slot-scope="scope">
            <el-button @click="handleEdit(scope.row)" type="text" size="medium">编辑</el-button>
            <el-button @click="handleDelete(scope.row)" type="text" size="medium">删除</el-button>
            <el-button @click="handleVisit(scope.row)" type="text" size="medium">回访记录</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination v-if="total" layout="prev, pager, next" :total="total" :page-size="limit"
        @current-change="pageChange">
      </el-pagination>
    </div>
  </div>
</template>

<script>
import { queryCustomerList, deleteCustomer } from "../../api/customer";
export default {
  data() {
    return {
      loading: true,
      type: "",
      search: "",
      // 总数
      total: 50,
      // 每页显示10条
      limit: 10,
      // 当前页
      page: 1,
      customerList: [],
      tableHeaderStyle: { background: "#a9a9a9", color: "black" },
    };
  },
  created() {
    this.queryData();
  },
  // 监听当前的this实例上的属性
  watch: {
    $route(to, from) {
      this.page = 1;
      this.type = "";
      this.search = "";
      this.queryData();
    },
  },
  methods: {
    // 搜索客户信息
    change() {
      // 按关键字检索时，需从第一页开始
      this.page = 1;
      this.queryData();
    },
    // 0：男/1：女
    handleSex(row) {
      return row.sex == 0 ? "男" : "女";
    },
    // 点击分页页码的时候发送请求数据
    pageChange(index) {
      this.page = index;
      this.queryData();
    },
    // 请求列表数据
    queryData() {
      this.loading = true;
      let { limit, page, type, search } = this;
      queryCustomerList({
        limit,
        page,
        type,
        search,
        lx: this.$route.query.type || "my",
      })
        .then((customerRes) => {
          this.customerList = customerRes.data;
          this.total = customerRes.total;
        })
        .catch(() => {
          this.customerList = [];
          this.total = 0;
        })
        .finally(() => {
          this.loading = false;
        });
    },
    // 编辑数据
    handleEdit(row) {
      let customerId = row.id;
      this.$router.push({
        path: "/customer/handle",
        query: { customerId },
      });
    },
    // 删除数据
    handleDelete(row) {
      let customerId = row.id;
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          deleteCustomer({ customerId })
            .then((result) => {
              if (result.code == 0) {
                this.$alert("数据删除成功，即将跳转到列表~", {
                  callback: () => {
                    this.$router.push({
                      path: "/customer/list",
                      query: {
                        type: "my",
                        btn: "delete",
                      },
                    });
                  },
                });
              }
            })
            .catch(() => {
              this.$alert("数据删除失败，请重试！");
            });
        })
        .catch(() => {});
    },
    // 回访
    handleVisit(row) {
      let customerId = row.id;

      this.$router.push({
        path: "/customer/visitList",
        query: { customerId },
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

.selectBox,
.searchInp,
.deleteAll {
  box-sizing: border-box;
  margin-right: 10px;
  padding: 0 5px;
  width: 100px;
  height: 30px;
  line-height: 30px;
  border: 1px solid #ccc;
  vertical-align: middle;
}

.searchInp {
  padding: 0 10px;
  width: 250px;
}

.deleteAll {
  background: #eee;
  padding: 0;
  cursor: pointer;
}
</style>
