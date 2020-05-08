<template>
  <div id="login">
    <div class="content">
      <div class="content1">
        <h1>欢迎使用</h1>
        <h1>合川区疫情流动人员管理系统！</h1>
      </div>
      <div class="content2">
        <h1>welcome to use the</h1>
        <h1>information management</h1>
        <h1>system</h1>
      </div>
    </div>
    <div class="login-box">
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        class="login-form"
        size="small"
      >
        <el-form-item prop="username" class="item-form">
          <label>账号</label>
          <el-input v-model="ruleForm.username"></el-input>
        </el-form-item>
        <el-form-item prop="pass" class="item-form">
          <label>密码</label>
          <el-input
            type="password"
            v-model="ruleForm.pass"
            autocomplete="off"
          ></el-input>
        </el-form-item>

        <el-form-item>
          <el-button
            type="submit"
            @click="submitForm('ruleForm')"
            class="login-btn block"
            >登录</el-button
          >
        </el-form-item>
      </el-form>
      <div class="clear"></div>
    </div>
  </div>
</template>
<script>
import { Register } from "../../api/login";
import { ref, reactive } from "@vue/composition-api";
import { validateUser, validatePwd } from "../../utils/checkNumber";
import { Login } from "../../api/login";
export default {
  name: "login",
  setup(props, { root,refs }) {
    // 验证用户名
    var validateUsername = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入用户名"));
      } else if (validateUser(value)) {
        callback(new Error("用户名不正确"));
      } else {
        callback(); //返回的是true
      }
    };
    //验证密码
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else if (validatePwd(value)) {
        callback(new Error("密码为6至20位数字+字母"));
      } else {
        callback();
      }
    };

    const ruleForm = reactive({
      username: "",
      pass: ""
    });
    const rules = reactive({
      pass: [{ validator: validatePass, trigger: "blur" }],
      username: [{ validator: validateUsername, trigger: "blur" }]
    });
    //提交方法 在这里响应登录接口
    const submitForm = formName => {
      refs[formName].validate(valid => {
        if (valid) {
           login()
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    };
    /** 
      登录接口
    */
    const login = () => {
      let requestData = {
        username: ruleForm.username,
        password: ruleForm.pass
      };
     // dispatch是用来调用actions
      // let requestData = JSON.stringify(Data)
      root.$store.dispatch('app/login',requestData).then(response =>{
        console.log("登录成功")
        root.$router.push({
          name:"console"
        })
      }).catch(error=>{
        console.log(error)
      })
    };

    return {
      ruleForm,
      rules,
      submitForm,
    };
  }
  
};
</script>

<style  lang = "scss" scoped>
#login {
  background-color: rgba(36, 41, 46, 0.9);
  display: flex;
  flex-direction: row;
}
.content {
  width: 65%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.content1 {
  h1 {
    color: white;
    font-family: Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica,
      Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
    font-size: 45px;
  }
  margin-bottom: 50px;
}
.content2 {
  h1 {
    color: white;
    font-family: Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica,
      Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
    font-size: 50px;
  }
}

.login-box {
  width: 28%;
  float: right;
  height: 60%;
  background-color: #fafbfc;
  border-radius: 5px;
  margin-top: 200px;
  margin-left: -100px;
}

.login-form {
  margin: 29px;
  label {
    display: block;
    margin-bottom: 5px;
    font-size: 20px;
    color: gray;
  }
  .item-form {
    /* 		margin-bottom: 13px; */
  }
  .block {
    color: #808080;
    font-size: 18px;
  }
  .block {
    background-color: #62da62;
    height: 32px;
    width: 50%;
    display: block;
    margin-left: 80px;
    padding-top: 5px;
  }
  .login-btn {
    margin-top: 19px;
  }
}
</style>