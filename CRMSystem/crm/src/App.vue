<template>
  <div id="app">
    <!-- 头部 -->
    <header class="headerBox" ref="headerBox">
      <h1 class="logo">CRM客户关系管理系统</h1>
      <el-menu mode="horizontal" class="el-menu-demo" background-color="#3a3d42" text-color="#fff"
        active-text-color="#ffd04b" :default-active="activeIndex()">
        <el-menu-item index="1">
          <router-link to="/customer">客户管理</router-link>
        </el-menu-item>
        <el-menu-item index="2">
          <router-link to="/system">系统设置</router-link>
        </el-menu-item>
      </el-menu>
      <div class="baseBox">
        <span class="username">您好：{{userName}}</span>
        <a href="javascript:;" @click="dialogFormVisible = true">修改密码</a>
        <a href="javascript:;" @click="signout">退出登录</a>
      </div>
    </header>

    <!-- 主体部分 -->
    <div class="mainBox" ref="mainBox">
      <router-view></router-view>
    </div>

    <!-- 修改密码 -->
    <el-dialog title="修改密码" :visible.sync="dialogFormVisible" width="500px">
      <el-form :model="resetUserPass" ref="resetUserPass">
        <el-form-item label="请输入新密码" prop="password" :label-width="labelWidth">
          <el-col :span="18">
            <el-input type="password" v-model="resetUserPass.password" autocomplete="off"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="请再次输入密码" prop="againPassword" :label-width="labelWidth">
          <el-col :span="18">
            <el-input type="password" v-model="resetUserPass.againPassword" autocomplete="off"></el-input>
          </el-col>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="handleClose">取 消</el-button>
        <el-button type="primary" @click="updPassword">确 定</el-button>
      </div>
    </el-dialog>

  </div>
</template>

<script>
import md5 from "blueimp-md5";
import { queryUserInfo, userSignout, changeUserPassword } from "./api/customer";
export default {
  data() {
    return {
      userName: "",
      dialogFormVisible: false,
      resetUserPass: {
        password: "",
        againPassword: "",
      },
      labelWidth: "160px",
    };
  },
  // 获取当前以后登录的名称
  created() {
    queryUserInfo().then((result) => {
      this.userName = result.name;
    });
  },
  methods: {
    // 当页面刷新时，根据hash值显示组织结构还是客户管理
    activeIndex() {
      let nowURL = location.href;
      if (nowURL.includes("/customer")) return "1";
      if (nowURL.includes("/system")) return "2";
    },
    // 退出登录
    signout() {
      userSignout()
        .then((result) => {
          this.$alert("退出成功", {
            callback() {
              location.href = location.origin + "/login.html";
            },
          });
        })
        .catch((reason) => {
          this.$alert("退出失败，请重新退出！", reason);
        });
    },
    // 修改密码
    updPassword() {
      let { password, againPassword } = this.resetUserPass;
      let pwdReg = /^\w{6,16}$/;
      if (!pwdReg.test(password)) {
        this.$alert("密码不符合规则！");
        return;
      }
      if (password !== againPassword) {
        this.$alert("您输入的两次密码不一致");
        return;
      }

      changeUserPassword({
        password: md5(password),
      })
        .then(() => {
          this.$message.success("密码修改成功！");
        })
        .catch(() => {
          this.$message.error("密码修改失败！");
        })
        .finally(() => {
          this.$refs.resetUserPass.resetFields();
          this.dialogFormVisible = false;
        });
    },
    handleClose() {
      this.$confirm("确定关闭此窗口吗, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.$refs.resetUserPass.resetFields();
          this.dialogFormVisible = false;
        })
        .catch(() => {
          // 关闭弹出框
          // this.dialogFormVisible = false;
        });
    },
    onResize() {
      let winH = document.documentElement.clientHeight,
        headerBox = this.$refs.headerBox,
        mainBox = this.$refs.mainBox;

      mainBox.style.height = winH - headerBox.offsetHeight + "px";
      this.$forceUpdate();
    },
  },
  mounted() {
    this.onResize();

    window.onresize = () => {
      this.onResize();
    };
  },
};
</script>

<style lang='less'>
html,
body,
#app {
  height: 100%;
  font-size: 14px;
  overflow: hidden;
}

/* ==HEADER== */
@H: 62px;
.headerBox {
  display: flex;
  justify-content: space-between;
  height: @H;
  background: #3a3d42;
  overflow: hidden;

  .logo {
    width: 20%;
    line-height: @H;
    text-align: center;
    font-size: 20px;
    color: #fff;
    letter-spacing: 3px;
  }

  .baseBox {
    box-sizing: border-box;
    padding-right: 10px;
    width: 30%;
    line-height: @H;
    text-align: right;
    font-size: 16px;

    .username {
      color: orange;
    }

    span,
    a {
      margin: 0 5px;
      color: #fff;
    }

    a {
      text-decoration: underline;
    }
  }

  .el-menu-demo {
    box-sizing: border-box;
    width: 46%;

    li {
      font-size: 16px !important;

      a {
        display: block;
        height: 100%;
      }
    }
  }
}

.mainBox {
  display: flex;
  overflow: hidden;
}
</style>