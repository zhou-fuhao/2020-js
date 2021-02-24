<template>
  <div class="formBox">
    <el-form :model="userForm" :rules="rules" ref="userForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="用户名" prop="name">
        <el-input v-model="userForm.name"></el-input>
      </el-form-item>
      <el-form-item label="性别" prop="sex">
        <el-radio-group v-model="userForm.sex">
          <el-radio :label=0>男</el-radio>
          <el-radio :label=1>女</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="邮箱" prop="email">
        <el-input v-model="userForm.email"></el-input>
      </el-form-item>
      <el-form-item label="电话" prop="phone">
        <el-input v-model.number="userForm.phone"></el-input>
      </el-form-item>

      <el-form-item label="部门" prop="departmentId">
        <el-select v-model="userForm.departmentId" placeholder="请选择部门">
          <el-option v-for="item in userForm.selectDep" :key="item.departmentId" :label="item.departmentName"
            :value="item.departmentId">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="职务" prop="jobId">
        <el-select v-model="userForm.jobId" placeholder="请选择职务">
          <el-option v-for="item in userForm.selectJob" :key="item.jobId" :label="item.jobName" :value="item.jobId">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="自我介绍" prop="desc">
        <el-input type="textarea" v-model="userForm.desc"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('userForm')">{{msgSubmit}}</el-button>
        <el-button @click="resetForm('userForm')">重置</el-button>
      </el-form-item>
    </el-form>
    {{userForm.selectJob}}
  </div>
</template>

<script>
import userReg from "../../js/reg/userReg";
// @符 代表从src路径下
import { queryUserInfo, addUser, updateUser } from "../../api/user";
import { queryDepartmentList } from "../../api/department";
import { queryJobList } from "../../api/job";

export default {
  data() {
    return {
      userForm: {
        name: "",
        sex: "",
        email: "",
        phone: "",
        type: "",
        // 部门下拉列表
        selectDep: [],
        // 职务下拉列表
        selectJob: [],
        departmentId: "",
        jobId: "",
      },
      msgSubmit: "新增",
      rules: userReg,
    };
  },
  created() {

    // 获取部门列表信息
    this.queryDepartmentData();

    // 获取职务列表信息
    this.queryJobData();

    // 获取路由信息
    let { userId, type } = this.$route.query;

    if (userId) {
      this.msgSubmit = "修改";
      queryUserInfo({ userId })
        .then((userRes) => {
          let {
            name,
            sex,
            email,
            phone,
            departmentId,
            department,
            jobId,
            job,
            desc,
          } = userRes;

          this.userForm = {
            name,
            sex: Number(sex),
            email,
            phone,
            departmentId: Number(departmentId),
            department,
            jobId: Number(jobId),
            job,
            desc,
          };
        })
        .catch(() => {
          this.$alert("获取用户信息失败，请重试！");
        });
    }
    // type 是新增
    if (type) {
      this.userForm = {};
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          let { name, sex, email, phone, departmentId, jobId } = this.userForm;
          let params = { name, sex, email, phone, departmentId, jobId };

          let { userId } = this.$route.query;

          if (userId) {
            console.log("修改");
          } else {
            addUser(params)
              .then(() => {
                this.$alert("新增数据成功，即将跳转到列表~", {
                  callback: () => {
                    this.$router.push({
                      path: "/system/user/list",
                    });
                  },
                });
              })
              .catch(() => {
                this.$alert("新增数据失败，请重试！");
              });
          }
        } else {
          this.$alert("验证失败");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },

    // 获取部门列表信息
    queryDepartmentData() {
      queryDepartmentList()
        .then((departmentRes) => {
          departmentRes.forEach((item) => {
            this.userForm.selectDep.push({
              departmentId: item.id,
              departmentName: item.name,
            });
          });
        })
        .catch(() => {
          this.$alert("获取部门列表数据失败，请重试！");
        });
    },
    // 获取职务列表信息
    queryJobData() {
      queryJobList()
        .then((jobRes) => {
          jobRes.forEach((item) => {
            this.userForm.selectJob.push({
              jobId: item.id,
              jobName: item.name,
            });
          });
        })
        .catch(() => {
          this.$alert("获取职务列表数据失败，请重试！");
        });
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