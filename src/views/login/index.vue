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
			<!-- 	
		    <form action="/epcs/login" method="post">
		    <div style="width: 80%; margin: 40px auto">
		        <label class="form-label" for="uname">账号：</label>
		        <input type="text" name="uname" id="uname"/><br/>
		        <label class="form-label" for="pwd">密码：</label>
		        <input type="password" name="pwd" id="pwd"/>
		        <input class="form-label" type="submit" value="登录" >
		    </div>
		    </form>
	 --><el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm"  class="login-form" size="small">
 <el-form-item  prop="username" class="item-form">
	 <label>账号</label>
   <el-input v-model.number="ruleForm.username"></el-input>
 </el-form-item>
  <el-form-item  prop="pass" class="item-form">
	   <label>密码</label>
    <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
  </el-form-item>
  
  
  <el-form-item>
    <el-button type="submit" @click="submitForm('ruleForm')"  class="login-btn block" >登录</el-button>
  
  </el-form-item>
</el-form>
		<div class="clear"></div>
	</div>
  </div>
</template>
<script>
import { Register } from "../../api/login";
import { ref } from "@vue/composition-api";
export default {
  name: "login",
  setup(props) {
    return {};
  }
 ,  data() {
        var checkAge = (rule, value, callback) => {
          if (!value) {
            return callback(new Error('账号不能为空'));
          }
          setTimeout(() => {
            if (!Number.isInteger(value)) {
              callback(new Error('请输入账号'));
            } 
          }, 1000);
        };
        var validatePass = (rule, value, callback) => {
          if (value === '') {
            callback(new Error('请输入密码'));
          } else {
            if (this.ruleForm.checkPass !== '') {
              this.$refs.ruleForm.validateField('checkPass');
            }
            callback();
          }
        };
       
        
        return {
          ruleForm: {
            pass: '',
            username: ''
          },
          rules: {
            pass: [
              { validator: validatePass, trigger: 'blur' }
            ],

            username: [
              { validator: checkAge, trigger: 'blur' }
            ]
          }
        };
      },
      methods: {
        submitForm(formName) {
          this.$refs[formName].validate((valid) => {
            if (valid) {
              alert('submit!');
            } else {
              console.log('error submit!!');
              return false;
            }
          });
        },
        resetForm(formName) {
          this.$refs[formName].resetFields();
        }
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
.login-box{
	
	    width: 28%;
	    float: right;
	    height: 60%;
	    background-color: #fafbfc;
	    border-radius: 5px;
	    margin-top: 130px;
	
}

.login-form{
	margin: 29px;
	label{
	display: block;
	margin-bottom: 5px;
	font-size: 20px;
	color: gray;
	}
	.item-form{
/* 		margin-bottom: 13px; */
	}
	.block{
		color: #808080;
		font-size:18px ;
	}
	.block{
		background-color: #62da62;
		 height: 32px; 
		 width: 50%;
		 display: block;
		 margin-left: 80px;
		 padding-top: 5px;
	}
	.login-btn{
		margin-top: 19px;
	}
}

</style>