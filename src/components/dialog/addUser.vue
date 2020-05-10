<template>
  <div id="addInfo">
    <el-dialog
      title="新增用户"
      :visible.sync="dialog_flag_status"
      @close="close"
      width="600px"
    >
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="镇名" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="镇编号" prop="num">
          <el-input v-model="ruleForm.num"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="ruleForm.email"></el-input>
        </el-form-item>
        <el-form-item label="用户名" prop="username">
          <el-input v-model="ruleForm.username"></el-input>
        </el-form-item>
        <el-form-item label="用户密码" prop="password">
          <el-input v-model="ruleForm.password"></el-input>
        </el-form-item>
        <el-form-item label="角色选择">
          <el-select v-model="ruleForm.sz" placeholder="请选择角色">
            <el-option label="普通管理员" value="普通管理员"></el-option>
            <el-option label="超级管理员" value="超级管理员"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')"
            >立即创建</el-button
          >
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>
<script>
import { reactive, ref, watchEffect } from "@vue/composition-api";
import {
  validateEmail,
  validatePwd,
  validateUser
} from "../../utils/checkNumber";
import { AddItem } from "../../api/user";
export default {
  name: "addInfo",
  props: {
    flag: {
      type: Boolean,
      default: false
    }
  },
  setup(props, { emit, root, refs }) {
    const dialog_flag_status = ref(false);
    /**
    回调父组件
     */
    const close = () => {
      emit("update:flag", false);
      root.$emit("upUser")
    };
    //form表单
    const ruleForm = reactive({
      name: "",
      email: "",
      username: "",
      password: "",
      sz: []
    });
    //验证email
    var validatemail = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入邮箱"));
      } else if (validateEmail(value)) {
        callback(new Error("请输入正确的邮箱"));
      } else {
        callback();
      }
    };
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

    // 校验规则
    const rules = reactive({
      name: [
        { required: true, message: "请输入姓名", trigger: "blur" },
        { min: 2, max: 5, message: "长度在 2到 5 个字符", trigger: "blur" }
      ],
      email: [{ validator: validatemail, trigger: "blur" }],
      username: [{ validator: validateUsername, trigger: "blur" }],
      password: [{ validator: validatePass, trigger: "blur" }],
      sz: [
        {
          type: "date",
          required: true,
          message: "请选择角色",
          trigger: "change"
        }
      ]
    });

    //提交方法
    const submitForm = formName => {
      refs[formName].validate(valid => {
        if (valid) {
          let requestData = {
            name: ruleForm.name,
            email: ruleForm.email,
            tid: ruleForm.num,
            username: ruleForm.username,
            password: ruleForm.password,
            sz: ruleForm.sz
          };
          AddItem(requestData)
            .then(response => {
              console.log(response);
              root.$message({
                message: response.data.massege,
                type: "success"
              });
             
            })
            .catch(error => {
              console.log(error);
            });

          refs[formName].resetFields();
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    };
    const resetForm = formName => {
      refs[formName].resetFields();
    };

    //监听事件
    watchEffect(() => {
      dialog_flag_status.value = props.flag;
    });
    // 防止多次提交（在接口中调用）
    const submitLoading = ref(false);
    return {
      rules,
      dialog_flag_status,
      close,
      ruleForm,
      submitForm,
      resetForm,
      submitLoading
    };
  }
};
</script>
<style lang="scss" scoped>
</style>