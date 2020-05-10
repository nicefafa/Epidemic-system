<template>
  <div id="susInfo_edit">
    <el-dialog
      title="修改疑似"
      :visible.sync="dialog_flag_status"
      @close="close"
      width="600px"
      @opened="openDialog"
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

        <el-form-item label="确诊时间" required>
          <el-col :span="11">
            <el-form-item prop="date">
              <el-date-picker
                v-model="ruleForm.date"
                type="date"
                placeholder="选择日期"
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
import { UpdateAddUserInfo, SelectAddUserInfo } from "../../api/addCase";
export default {
  name: "susInfo_edit",
  props: {
    flag: {
      type: Boolean,
      default: false
    },
    id: {
      type: String,
      default: ""
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
      adress: ""
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
            adress: ruleForm.adress,
            tid: localStorage.getItem("tid"),
            tnb: ruleForm.phone,
            time: ruleForm.date,
            sid: 3,
            id: props.id
          };
          UpdateAddUserInfo(requestData)
            .then(response => {
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
    // 获取请求
    const openDialog = () => {
      getOneItem();
    };
    const getOneItem = () => {
      let requestData = { id: props.id };
      SelectAddUserInfo(requestData)
        .then(response => {
          let responseData = response.data.result[0];
          // 写到这里给赋值
          console.log(responseData);
          ruleForm.name = responseData.name;
          ruleForm.age = responseData.age;
          ruleForm.idCard = responseData.inb;
          ruleForm.adress = responseData.adress;
          ruleForm.phone = responseData.tnb;
          // ruleForm.date = responseData.time;
        })
        .catch(error => {
          console.log(error);
        });
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
      submitLoading,
      openDialog,
      getOneItem
    };
  }
};
</script>
<style lang="scss" scoped>
</style>