<template>
  <div class="container">
    <!-- 头部结构 -->
    <header class="headerBox">
      <h2>天龙八部</h2>
      <el-button type="success" @click="dialogFormVisible = true"
        >新建任务</el-button
      >
    </header>
    <el-divider content-position="left">左侧分割线</el-divider>
    <!-- 三个tab按钮 -->
    <section>
      <el-tag :type="type === 0 ? 'success' : 'info'" @click="type=0">全部</el-tag>
      <el-tag :type="type === 1 ? 'success' : 'info'" @click="type=1">已完成</el-tag>
      <el-tag :type="type === 2 ? 'success' : 'info'" @click="type=2">未完成</el-tag>
    </section>
    <el-divider content-position="right">右侧分割线</el-divider>
    <el-table :data="taskList" border stripe>
      <el-table-column
        align="center"
        width="100"
        prop="id"
        label="编号"
      ></el-table-column>
      <el-table-column
        align="center"
        width=""
        prop="taskDesc"
        label="任务描述"
      ></el-table-column>
      <el-table-column
        align="center"
        width="100"
        prop="status"
        label="状态"
      ></el-table-column>
      <el-table-column
        align="center"
        width=""
        prop="date"
        label="完成时间"
      ></el-table-column>
      <el-table-column align="center" width="200" prop="" label="操作">
        <el-button size="mini" type="danger">删除</el-button>
        <el-button size="mini" type="primary">完成</el-button>
      </el-table-column>
    </el-table>

    <el-dialog title="新建任务" :visible.sync="dialogFormVisible">
      <el-form :model="form" :rules="rules" ref="form">
        <el-form-item
          label="任务描述"
          prop="taskDesc"
          :label-width="formLabelWidth"
        >
          <el-input
            v-model="form.taskDesc"
            placeholder="请输入任务描述"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="完成时间"
          prop="valueDate"
          :label-width="formLabelWidth"
        >
          <el-date-picker
            v-model="form.valueDate"
            type="datetime"
            placeholder="选择日期时间"
          ></el-date-picker>
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
export default {
  data() {
    return {
      taskList: [
        {
          id: 1,
          taskDesc: "乔峰",
          status: 0,
          date: "2021-02-03",
        },
        {
          id: 2,
          taskDesc: "段誉",
          status: 1,
          date: "2021-02-02",
        },
      ],
      type: 0,
      dialogFormVisible: false,
      form: {
        taskDesc: "",
        valueDate: "",
      },
      // 表单验证
      rules: {
        taskDesc: [
          { required: true, message: "请输入任务描述", trigger: "blur" },
          {
            min: 1,
            max: 10,
            message: "长度在 1 到 10 个字符",
            trigger: "blur",
          },
        ],
        valueDate: [
          { required: true, message: "请选择日期", trigger: "change" },
        ],
      },
      formLabelWidth: "120px",
    };
  },
  methods: {
    // 点击提交按钮进行表单校验
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
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