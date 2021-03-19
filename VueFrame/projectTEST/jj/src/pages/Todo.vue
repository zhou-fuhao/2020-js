<template>
  <div class="container">
    <!-- 头部结构 -->
    <header class="headerBox">
      <h2>天龙八部</h2>
      <el-button type="success" @click="dialogFormVisible = true">新建任务</el-button>
    </header>
    <el-divider content-position="left">左侧分割线</el-divider>
    <!-- 三个tab按钮 -->
    <section>
      <el-tag :type="type === 0 ? 'success' : 'info'" @click="type = 0">全部</el-tag>
      <el-tag :type="type === 1 ? 'success' : 'info'" @click="type = 1">未完成</el-tag>
      <el-tag :type="type === 2 ? 'success' : 'info'" @click="type = 2">已完成</el-tag>
    </section>
    <el-divider content-position="right">右侧分割线</el-divider>
    <el-table :data="taskList" border stripe>
      <el-table-column align="center" width="100" prop="id" label="编号"></el-table-column>
      <el-table-column align="center" width="" prop="task" label="任务描述"></el-table-column>
      <el-table-column align="center" width="100" prop="state" label="状态" :formatter="handleStatus"></el-table-column>
      <el-table-column align="center" width="" prop="time" label="完成时间" :formatter="handleDate"></el-table-column>
      <el-table-column label="操作" align="left">
        <template slot-scope="scope">
          <el-button size="mini" type="danger" @click="handleDelete(scope.row)">删除</el-button>
          <el-button size="mini" type="primary" @click="handleEdit(scope.row)" v-if="scope.row.state===1">完成</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage"
      :page-sizes="[10, 20, 30, 40]" :page-size="10" layout="total, sizes, prev, pager, next" :total="taskList.length">
    </el-pagination>

    <el-dialog title="新建任务" :visible.sync="dialogFormVisible">
      <el-form :model="form" :rules="rules" ref="form">
        <el-form-item label="任务描述" prop="task" :label-width="formLabelWidth">
          <el-input v-model="form.task" placeholder="请输入任务描述"></el-input>
        </el-form-item>
        <el-form-item label="完成时间" prop="time" :label-width="formLabelWidth">
          <el-date-picker v-model="form.time" type="datetime" placeholder="选择日期时间"></el-date-picker>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="close()">取 消</el-button>
        <el-button type="info" @click="resetForm('form')">重 置</el-button>
        <el-button type="primary" @click="submitForm('form')">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import moment from "moment";
import { addTask, removeTask, completeTask } from "../api/todo";
export default {
  data() {
    return {
      currentPage: 1,
      pageSize: 10,
      type: 0,
      dialogFormVisible: false,
      form: {
        task: "",
        time: "",
      },
      // 表单验证
      rules: {
        task: [
          { required: true, message: "请输入任务描述", trigger: "blur" },
          {
            min: 1,
            max: 10,
            message: "长度在 1 到 10 个字符",
            trigger: "blur",
          },
        ],
        time: [{ required: true, message: "请选择日期", trigger: "change" }],
      },
      formLabelWidth: "120px",
    };
  },
  methods: {
    // 下拉选择显示多少条
    handleSizeChange(val) {
      this.$store.dispatch("todo/updateTodoListAction", { limit: val, page: this.currentPage, });
    },
    //
    handleCurrentChange(val) {
      this.$store.dispatch("todo/updateTodoListAction", { limit: this.pageSize, page: val, });
    },
    // 点击提交按钮进行表单校验
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          let time = moment(this.form.validate).format("YYYY-MM-DD HH:mm:ss");
          let params = {
            task: this.form.task,
            time,
          };
          addTask(params).then((res) => {
            let { code } = res;
            if (code == 0) {
              this.$message({
                message: "新增成功~",
                type: "success",
              });
            } else {
              this.$message({
                message: "新增失败~",
                type: "error",
              });
            }
            // 关闭模态框
            this.dialogFormVisible = false;
            // 重置表单
            this.$refs.form.resetFields();
            // 重新请求数据
            this.$store.dispatch("todo/updateTodoListAction");
          });
        } else {
          alert("表单验证失败!");
          return false;
        }
      });
    },
    // 重置表单
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    // 取消按钮
    close() {
      this.$confirm("是否确定关闭当前窗口?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.dialogFormVisible = false;
          this.$refs.form.resetFields();
        })
        .catch(() => {
          //   this.$message({
          //     type: "info",
          //     message: "已取消",
          //   });
        });
    },
    // 状态值的处理
    handleStatus(row) {
      return row.state == 1 ? "未完成" : "已完成";
    },
    handleDate(row) {
      let { state, complete, time } = row;
      return state == 1 ? time : complete;
    },
    handleDelete(row) {
      this.$confirm(`您确定要[删除]编号为：${row.id}  的数据嘛?`, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          // 在这里发送删除接口
          removeTask({ id: row.id }).then((res) => {
            let { code } = res;
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
            this.$store.dispatch("todo/updateTodoListAction");
          });
        })
        .catch(() => {});
    },
    handleEdit(row) {
      this.$confirm(`您确定要[修改状态]编号为：${row.id}  的数据嘛?`, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          // 在这里发送完成接口
          completeTask({ id: row.id }).then((res) => {
            let { code } = res;
            if (code == 0) {
              this.$message({
                message: "当前状态修改成功~",
                type: "success",
              });
            } else {
              this.$message({
                message: "当前状态修改失败~",
                type: "error",
              });
            }
            // 重新请求数据
            this.$store.dispatch("todo/updateTodoListAction");
          });
        })
        .catch(() => {});
    },
  },
  computed: {
    taskList() {
      // 每一次计算的时候，都需要按照当前的
      let todoList = this.$store.state.todo.todoList;
      if (this.type == 0) {
        return todoList;
      }
      return todoList.filter((item) => {
        return item.state === this.type;
      });
    },
  },
  created() {
    this.$store.dispatch("todo/updateTodoListAction");
  },
};
</script>

// 组件样式
<style lang="less" scoped>
.container {
  box-sizing: border-box;
  padding: 20px;
  margin: 20px auto;
  width: 1000px;
  border: 2px solid yellowgreen;
  .headerBox {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  section {
    span {
      margin-right: 15px;
    }
  }
}
</style>