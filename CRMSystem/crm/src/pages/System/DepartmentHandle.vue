<template>
  <div class="formBox">
    <el-form :model="departmentForm" :rules="rules" ref="departmentForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="部门名称" prop="departmentName">
        <el-input v-model="departmentForm.departmentName"></el-input>
      </el-form-item>
      <el-form-item label="部门描述" prop="departmentDesc">
        <el-input type="textarea" v-model="departmentForm.departmentDesc"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('departmentForm')">{{msgSubmit}}</el-button>
        <el-button @click="resetForm('departmentForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import departmentReg from "../../js/reg/departmentReg";
// @符 代表从src路径下
import {
  queryDepartmentInfo,
  addDepartment,
  updateDepartment,
} from "../../api/department";

export default {
  data() {
    return {
      departmentForm: {
        departmentName: "",
        departmentDesc: "",
      },
      msgSubmit: "新增",
      rules: departmentReg,
    };
  },
  watch: {
    $route(to, from) {
      this.queryData();
    },
  },
  created() {
    this.queryData();
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // 获取表单元素进行提交
          let params = {
            name: this.departmentForm.departmentName,
            desc: this.departmentForm.departmentDesc,
          };
          let departmentId = this.$route.query.departmentId;
          // 修改
          if (departmentId) {
            params.departmentId = departmentId;
            updateDepartment(params)
              .then(() => {
                this.$alert("数据修改成功，即将跳转到列表~", {
                  callback: () => {
                    this.$router.push({
                      path: "/system/department/list",
                    });
                  },
                });
              })
              .catch(() => {
                this.$alert("数据修改失败，请重试！");
              });
          } else {
            // 新增
            addDepartment(params)
              .then(() => {
                this.$alert("数据新增成功，即将跳转到列表~", {
                  callback: () => {
                    this.$router.push({
                      path: "/system/department/list",
                    });
                  },
                });
              })
              .catch(() => {
                this.$alert("新增数据失败，请重试！");
              });
          }
        } else {
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    queryData() {
      // 获取路由信息
      let { departmentId, type } = this.$route.query;

      // departmentId 是修改
      if (departmentId) {
        this.msgSubmit = "修改";
        queryDepartmentInfo({ departmentId })
          .then((departmentRes) => {
            let { name, desc } = departmentRes;
            this.departmentForm.departmentName = name;
            this.departmentForm.departmentDesc = desc;
          })
          .catch(() => {
            this.$alert("获取部门信息失败，请重试！");
          });
      }
      if (type) {
        this.msgSubmit = "新增";
        this.departmentForm = {};
      }
    },
  },
};
</script>

<style lang="less" scoped>
.formBox {
  box-sizing: border-box;
  height: 100%;
  padding: 30px;
  font-size: 14px;
  overflow-y: auto;
}
</style>