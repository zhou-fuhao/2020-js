<template>
  <div class="formBox">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="用户名" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="性别" prop="sex">
        <el-radio-group v-model="ruleForm.sex">
          <el-radio :label=0>男</el-radio>
          <el-radio :label=1>女</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="邮箱" prop="email">
        <el-input v-model="ruleForm.email"></el-input>
      </el-form-item>
      <el-form-item label="电话" prop="phone">
        <el-input v-model.number="ruleForm.phone"></el-input>
      </el-form-item>
      <el-form-item label="QQ" prop="QQ">
        <el-input v-model.number="ruleForm.QQ"></el-input>
      </el-form-item>
      <el-form-item label="微信" prop="weixin">
        <el-input v-model="ruleForm.weixin"></el-input>
      </el-form-item>
      <el-form-item label="地址" prop="address">
        <el-input type="textarea" v-model="ruleForm.address"></el-input>
      </el-form-item>
      <el-form-item label="客户类型" prop="type">
        <el-select v-model="ruleForm.type" placeholder="请选择客户类型">
          <el-option label="重点客户" value="重点客户"></el-option>
          <el-option label="一般客户" value="一般客户"></el-option>
          <el-option label="放弃客户" value="放弃客户"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">{{msgSubmit}}</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import customerReg from "../../css/customerReg";
// @符 代表从src路径下
// import { queryCustomer, addCustomer, updateCustomer } from "@/api/customer";
import { queryCustomer, addCustomer, updateCustomer } from "../../api/customer";

export default {
  data() {
    return {
      ruleForm: {
        name: "",
        sex: "",
        email: "",
        phone: "",
        QQ: "",
        weixin: "",
        address: "",
        type: "",
        customerId: "",
      },
      msgSubmit: "新增",
      rules: customerReg,
    };
  },
  created() {
    // 获取路由信息
    let customerId = this.$route.query.customerId;
    // 若有值，则是修改
    if (customerId) {
      this.msgSubmit = "修改";
      queryCustomer({ customerId })
        .then((customerReg) => {
          this.ruleForm = customerReg;
          this.ruleForm.customerId = customerReg.id;
        })
        .catch(() => {
          this.$alert("获取客户信息失败，请重试！");
        });
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (this.ruleForm.id) {
            updateCustomer(this.ruleForm)
              .then((result) => {
                if (result.code == 0) {
                  this.$alert("数据更新成功，即将跳转到列表~", {
                    callback: () => {
                      this.$router.push({
                        path: "/customer/list",
                        query: {
                          type: "my",
                        },
                      });
                    },
                  });
                }
              })
              .catch(() => {
                this.$alert("数据更新失败，请重试！");
              });
          } else {
            addCustomer(this.ruleForm)
              .then((result) => {
                if (result.code == 0) {
                  this.$alert("数据新增成功，即将跳转到列表~", {
                    callback: () => {
                      this.$router.push({
                        path: "/customer/list",
                        query: {
                          type: "my",
                        },
                      });
                    },
                  });
                }
              })
              .catch(() => {
                this.$alert("数据新增失败，请重试！");
              });
          }
        } else {
          this.$alert("*为必填项，请按规则填写信息！");
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

.formBox .form {
  /* margin-bottom: 15px; */
}

.formBox .form > .inpBox {
  display: flex;
}

.formBox .form > .inpBox > span {
  margin-right: 15px;
  width: 100px;
  line-height: 30px;
  text-align: right;
}

.formBox .form > .inpBox > input[type="text"] {
  box-sizing: border-box;
  width: 300px;
  padding: 0 10px;
  height: 30px;
  line-height: 30px;
}

.formBox .form > .inpBox > input[type="radio"],
.formBox .form > .inpBox > input[type="checkbox"],
.formBox .form > .inpBox > label {
  box-sizing: border-box;
  height: 30px;
  line-height: 30px;
  vertical-align: middle;
}

.formBox .form > .inpBox > label {
  margin-right: 20px;
}

.formBox .form > .inpBox > select {
  box-sizing: border-box;
  width: 150px;
  padding: 0 10px;
  height: 30px;
  line-height: 30px;
}

.formBox .form > .inpBox > textarea {
  box-sizing: border-box;
  width: 300px;
  padding: 0 10px;
  height: 90px;
  line-height: 30px;
}

.formBox .form > span {
  display: block;
  padding-left: 115px;
  height: 25px;
  line-height: 25px;
  font-size: 12px;
  color: lightcoral;
}

.formBox .submit {
  margin-left: 110px;
  border: none;
  background: #29e;
  color: #fff;
  width: 150px;
  height: 40px;
  line-height: 40px;
  cursor: pointer;
}
</style>