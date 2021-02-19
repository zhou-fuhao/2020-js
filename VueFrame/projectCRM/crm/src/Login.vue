<template>
  <div class="container">
    <main class="mainBox">
      <h1 class="title">CRM客户管理系统</h1>
      <p class="tip">为保护企业的数据安全，请妥善保管密码</p>
      <section class="loginBox">
        <el-form ref="login" :model="login" label-width="400px">
          <div class="form">
            <i class="el-icon-user"></i>
            <el-input placeholder="请输入用户名/手机号/邮箱" v-model="login.username"></el-input>
          </div>
          <div class="form">
            <i class="el-icon-view"></i>
            <el-input type="password" placeholder="请输入登录密码" v-model="login.password"></el-input>
          </div>
          <el-button class="submit" type="primary" @click="onLogin('login')">登录</el-button>
        </el-form>
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
import { userLogin, login, signout } from "./api/user";
import md5 from "js-md5";
export default {
  data() {
    return {
      login: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    // 点击按钮登录
    onLogin() {
      let account = this.login.username,
        password = this.login.password;
      if (!account || !password) {
        this.$message.error("当前的用户名或密码不能为空！");
        return;
      }

      let params = {
        account,
        password: md5(password),
      };
      userLogin(params).then((res) => {
        let { code, power } = res;
        if (code == 0) {
          this.$alert("恭喜您，登录成功！", "系统提示", {
            callback: (action) => {
              location.href = location.origin;

              // localStorage.setItem("power", encodeURIComponent(power));
            },
          });
        } else {
          this.$alert("用户名或密码不匹配，请重试！", "系统提示");
          this.login.username = "";
          this.login.password = "";
        }
      });
    },
  },
};
</script>

<style lang='less'>
.mainBox {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  .title {
    font-size: 30px;
    line-height: 50px;
    text-align: center;
    color: #fff;
    font-weight: normal;
  }
  .tip {
    font-size: 18px;
    color: #bebebf;
    text-align: center;
  }
  .loginBox {
    box-sizing: border-box;
    margin-top: 20px;
    padding: 25px;
    background: #fff;
    border: 1px solid #f4f4f4;
    box-shadow: 0px 5px 5px rgb(0 0 0 / 30%);
    width: 400px;

    .form {
      position: relative;
      margin: 10px 0;
      i {
        position: absolute;
        left: 20px;
        top: 30%;
        transform: translate(-50%);
        font-size: 20px;
        z-index: 999;
      }
      input {
        box-sizing: border-box;
        padding-left: 40px;
        width: 100%;
        height: 50px;
        line-height: 50px;
        border: 1px solid #aaa;
      }
    }
    .submit {
      width: 100%;
      height: 48px;
      font-size: 18px;
    }
  }
}
.footerBox {
  position: absolute;
  bottom: 10px;
  left: 0;
  width: 100%;
  line-height: 50px;
  text-align: center;
  color: #999;
  font-size: 14px;
  span {
    padding: 0 10px;
  }
}
</style>