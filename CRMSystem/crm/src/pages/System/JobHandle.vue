<template>
  <div class="formBox">
    <el-form :model="jobForm" :rules="rules" ref="jobForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="职务名称" prop="jobName">
        <el-input v-model="jobForm.jobName"></el-input>
      </el-form-item>
      <el-form-item label="职务描述" prop="jobDesc">
        <el-input type="textarea" v-model="jobForm.jobDesc"></el-input>
      </el-form-item>
      <el-form-item label="拥有权限" prop="jobPower">
        <el-checkbox-group v-model="jobForm.jobPower">
          <el-checkbox label="userhandle" name="jobPower">员工操作权</el-checkbox>
          <el-checkbox label="departhandle" name="jobPower">部门操作权</el-checkbox>
          <el-checkbox label="jobhandle" name="jobPower">职务操作权</el-checkbox>
          <el-checkbox label="departcustomer" name="jobPower">部门全部客户</el-checkbox>
          <el-checkbox label="allcustomer" name="jobPower">公司全部客户</el-checkbox>
          <el-checkbox label="resetpassword" name="jobPower">重置密码</el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('jobForm')">{{msgSubmit}}</el-button>
        <el-button @click="resetForm('jobForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import jobReg from "../../js/reg/jobReg";
// @符 代表从src路径下
import { queryJobInfo, addJob, updateJob } from "../../api/job";

export default {
  data() {
    return {
      jobForm: {
        jobName: "",
        jobDesc: "",
        jobPower: [],
      },
      msgSubmit: "新增",
      rules: jobReg,
    };
  },
  created() {
    // 获取路由信息
    let { jobId, type } = this.$route.query;
    // jobId 是修改
    if (jobId) {
      this.msgSubmit = "修改";
      queryJobInfo({ jobId })
        .then((jobRes) => {
          let { name, desc, power } = jobRes;
          this.jobForm.jobName = name;
          this.jobForm.jobDesc = desc;
          this.jobForm.jobPower = power.split("|");
        })
        .catch(() => {
          this.$alert("获取职务信息失败，请重试！");
        });
    }
    if (type) {
      this.jobForm = {};
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // 获取表单元素进行提交
          let params = {
            name: this.jobForm.jobName,
            desc: this.jobForm.jobDesc,
            power: this.jobForm.jobPower.join("|"),
          };
          let jobId = this.$route.query.jobId;
          // 修改
          if (jobId) {
            params.jobId = jobId;
            updateJob(params)
              .then(() => {
                this.$alert("数据修改成功，即将跳转到列表~", {
                  callback: () => {
                    this.$router.push({
                      path: "/system/job/list",
                    });
                  },
                });
              })
              .catch(() => {
                this.$alert("数据修改失败，请重试！");
              });
          } else {
            // 新增
            addJob(params)
              .then(() => {
                this.$alert("数据新增成功，即将跳转到列表~", {
                  callback: () => {
                    this.$router.push({
                      path: "/system/job/list",
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