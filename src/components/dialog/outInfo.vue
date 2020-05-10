<template>
  <div id="outInfo">
    <el-dialog
      title="新增外出人员"
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
        <el-form-item label="姓名" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="年龄" prop="age">
          <el-input v-model.number="ruleForm.age"></el-input>
        </el-form-item>
        <el-form-item label="身份证号码" prop="idCard">
          <el-input v-model="ruleForm.idCard"></el-input>
        </el-form-item>
        <el-form-item label="电话号码" prop="phone">
          <el-input v-model="ruleForm.phone"></el-input>
        </el-form-item>
        <el-form-item label="家庭地址" prop="adress">
          <el-input type="textarea" v-model="ruleForm.adress"></el-input>
        </el-form-item>
        <el-form-item label="身体状况">
          <el-select v-model="ruleForm.region" placeholder="请选择身体状况">
            <el-option label="良好" value="良好"></el-option>
            <el-option label="异常" value="异常"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="确诊时间" required>
          <el-col :span="11">
            <el-form-item prop="date">
              <el-date-picker
                type="date"
                placeholder="选择日期"
                v-model="ruleForm.date"
                style="width: 100%;"
                format="yyyy 年 MM 月 dd 日"
                value-format="yyyy-MM-dd"
              ></el-date-picker>
            </el-form-item>
          </el-col>
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
  validateAge,
  validateSfz,
  validatePhone
} from "../../utils/checkNumber";
import { AddOutUserInfo } from "../../api/out";
export default {
  name: "outInfo",
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
    };
    //form表单
    const ruleForm = reactive({
      name: "",
      age: "",
      idCard: "",
      phone: "",
      adress: "",
      date: "",
      adress: "",
      region: ""
    });
    //验证age
    var validateage = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入年龄"));
      } else if (validateAge(value)) {
        callback(new Error("年龄是1-120岁"));
      } else {
        callback();
      }
    };
    //校验身份证号码
    var validateidCard = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入身份证号码"));
      } else if (validateSfz(value)) {
        callback(new Error("请输入正确的身份证号码"));
      } else {
        callback();
      }
    };
    //校验手机号码
    var validatephone = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入电话号码"));
      } else if (validatePhone(value)) {
        callback(new Error("请输入正确的电话号码"));
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
      age: [{ validator: validateage, trigger: "blur" }],
      idCard: [{ validator: validateidCard, trigger: "blur" }],
      phone: [{ validator: validatephone, trigger: "blur" }],
      adress: [{ required: true, message: "请填写家庭地址", trigger: "blur" }]
    });

    //提交方法
    const submitForm = formName => {
      refs[formName].validate(valid => {
        if (valid) {
          let requestData = {
            name: ruleForm.name,
            age: ruleForm.age,
            inb: ruleForm.idCard,
            tnb: ruleForm.phone,
            adress: ruleForm.adress,
            time: ruleForm.date,
            status: ruleForm.region,
            tid: localStorage.getItem("tid")
          };
          AddOutUserInfo(requestData)
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