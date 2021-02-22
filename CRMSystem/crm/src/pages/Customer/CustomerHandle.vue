<template>
  <div>
    <div class="customerBox">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="用户名" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="性别" prop="sex">
          <el-radio-group v-model="ruleForm.sex">
            <el-radio :label="0">男</el-radio>
            <el-radio :label="1">女</el-radio>
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
          <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import customerReg from "../../css/customerReg";
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
      rules: customerReg,
    };
  },
  created() {
    // 获取路由信息
    let customerId = this.$route.query.customerId;
    // 若有值，则是修改
    if (customerId) {
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
          console.log("error submit!!");
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
.customerBox {
  margin: 30px 20px;
}
</style>