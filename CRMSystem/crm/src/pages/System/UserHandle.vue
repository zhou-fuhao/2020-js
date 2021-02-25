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
          <el-option v-for="item in selectDep" :key="item.departmentId" :label="item.departmentName"
            :value="item.departmentId">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="职务" prop="jobId">
        <el-select v-model="userForm.jobId" placeholder="请选择职务">
          <el-option v-for="item in selectJob" :key="item.jobId" :label="item.jobName" :value="item.jobId">
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
  </div>
</template>

<script>
import userReg from "../../js/reg/userReg";
// @符 代表从src路径下
import {
  queryUserInfo,
  addUser,
  updateUser,
  querySelect,
} from "../../api/user";

export default {
  data() {
    return {
      userForm: {
        name: "",
        sex: "",
        email: "",
        phone: "",
        type: "",
        departmentId: "",
        jobId: "",
        desc: "",
      },
      msgSubmit: "新增",
      // 部门下拉列表
      selectDep: [],
      // 职务下拉列表
      selectJob: [],
      rules: userReg,
    };
  },
  watch: {
    $route(to, from) {
      this.queryData();
    },
  },
  created() {
    querySelect()
      .then((resultList) => {
        this.selectDep = resultList[0];
        this.selectJob = resultList[1];

        this.queryData();
      })
      .catch(() => {
        this.$alert("获取下拉数据失败！");
      });
  },
  methods: {
    queryData() {
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
        this.msgSubmit = "新增";
        
        this.userForm.name = "";
        this.userForm.sex = "";
        this.userForm.email = "";
        this.userForm.phone = "";
        this.userForm.type = "";
        this.userForm.departmentId = "";
        this.userForm.jobId = "";
        this.userForm.desc = "";
      }
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          let {
            name,
            sex,
            email,
            phone,
            departmentId,
            jobId,
            desc,
          } = this.userForm;
          let params = { name, sex, email, phone, departmentId, jobId, desc };

          let { userId } = this.$route.query;

          if (userId) {
            params.userId = userId;
            updateUser(params)
              .then(() => {
                this.$alert("修改数据成功，即将跳转到列表~", {
                  callback: () => {
                    this.$router.push({
                      path: "/system/user/list",
                    });
                  },
                });
              })
              .catch(() => {
                this.$alert("数据修改失败，请重试！");
              });
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
          return false;
        }
      });
    },
    // 重置，清空表单
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