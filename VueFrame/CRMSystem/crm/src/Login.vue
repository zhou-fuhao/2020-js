<template>
  <div class="container">
    登录
    <main class="mainBox">
      <h1 class="title">CRM客户管理系统</h1>
      <p class="tip">为保护企业的数据安全，请妥善保管密码</p>
      <section class="loginBox">
        <div class="form">
          <i class="iconfont icon-yonghuming"></i>
          <input v-model="account" type="text" class="userName" placeholder="请输入用户名/手机号/邮箱">
        </div>
        <div class="form">
          <i class="iconfont icon-mima"></i>
          <input v-model="password" type="password" class="userPass" placeholder="请输入登录密码">
        </div>
        <button class="submit" @click="onLogin">登录</button>
      </section>
    </main>
    <footer class="footerBox">
      <span>北京珠峰世纪技术培训有限公司</span>
      <span>京ICP备09041920号</span>
      <span>京公网安备110108400531号</span>
    </footer>
  </div>
</template>

<script>
import md5 from "blueimp-md5";
import { ApiOnLogin } from "./api/login";

export default {
  data() {
    return {
      account: "",
      password: "",
    };
  },
  methods: {
    checkAccount() {
      let arrReg = [
        /^[\u4E00-\u9FA5]{1,}$/,
        /^1\d{10}$/,
        /^[a-z0-9A-Z]+[- | a-z0-9A-Z . _]+@([a-z0-9A-Z]+(-[a-z0-9A-Z]+)?\\.)+[a-z]{2,}$/,
      ];
      return arrReg.some((item) => {
        return item.test(this.account);
      });
    },
    checkPassword() {
      let pwdReg = /^\w{6,16}$/;
      return pwdReg.test(this.password);
    },
    onLogin() {
      // 表单校验
      if (!this.checkAccount() || !this.checkPassword()) {
        this.$message.error("请输入合法的账号和密码！");
        return;
      }
      // 密码md5加密
      let password = md5(this.password);
      // 调用api登录接口
      ApiOnLogin(this.account, password)
        .then((power) => {
          console.log(power);
          this.$alert("恭喜您，登录成功！", {
            callback: (action) => {
              this.$message({
                type: "info",
                message: `action: ${action}`,
              });
              // location.origin    "http://127.0.0.1:8080"
              location.href = location.origin;
            },
          });
        })
        .catch((reason) => {
          this.$alert("账号或密码不正确！");
        });
    },
  },
};
</script>

<style lang='less'>
html,
body,
.container {
  height: 100%;
  font-size: 14px;
  overflow: hidden;
}

.container {
  font-size: 14px;
  background: url("../src/assets/login_bg.jpg") repeat-x;
  background-size: 100% 350px;
}

/* ==FOOTER== */
.footerBox {
  position: absolute;
  bottom: 10px;
  left: 0;
  width: 100%;
  line-height: 50px;
  text-align: center;
  color: #999;
}

.footerBox span {
  padding: 0 10px;
}

/* ==MAIN== */
.mainBox {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -60%);
  width: 400px;
}

.mainBox .title,
.mainBox .tip {
  font-size: 30px;
  line-height: 50px;
  text-align: center;
  color: #fff;
  font-weight: normal;
}

.mainBox .tip {
  font-size: 18px;
  color: #bebebf;
}

.loginBox {
  box-sizing: border-box;
  margin-top: 20px;
  padding: 25px;
  background: #fff;
  border: 1px solid #f4f4f4;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.3);
}

.loginBox .form {
  position: relative;
  margin: 10px 0;
}

.loginBox .form input {
  box-sizing: border-box;
  padding-left: 40px;
  width: 100%;
  height: 50px;
  line-height: 50px;
  border: 1px solid #aaa;
}

.loginBox .form i {
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 20px;
}

.loginBox .form i.icon-mima {
  left: 7px;
  font-size: 26px;
}

.loginBox .submit {
  box-sizing: border-box;
  margin: 10px 0;
  width: 100%;
  height: 48px;
  line-height: 48px;
  text-align: center;
  font-size: 18px;
  color: #fff;
  background: #2299ee;
  border: none;
  border-radius: 2px;
  cursor: pointer;
}
</style>