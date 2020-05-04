<template>
  <div id="outInfo">
    <el-dialog
      title="新增外出人员"
      :visible.sync="dialog_flag_status"
      @close="close"
      width="600px"
    >
      <el-form ref="form" :model="form" label-width="100px">
        <el-form-item label="姓名">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="年龄">
          <el-input v-model="form.age"></el-input>
        </el-form-item>
        <el-form-item label="身份证号码">
          <el-input v-model="form.idCard"></el-input>
        </el-form-item>
        <el-form-item label="电话号码">
          <el-input v-model="form.phone"></el-input>
        </el-form-item>
        <el-form-item label="家庭地址">
          <el-input type="textarea" v-model="form.adress"></el-input>
        </el-form-item>
        <el-form-item label="身体状况">
          <el-select v-model="form.region" placeholder="请选择身体状况">
            <el-option label="良好" value="shanghai"></el-option>
            <el-option label="异常" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="外出时间">
          <el-col :span="11">
            <el-date-picker
              type="date"
              placeholder="选择日期"
              v-model="form.date"
              style="width: 100%;"
            ></el-date-picker>
          </el-col>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">立即创建</el-button>
          <el-button @click="close">取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>
<script>
import { reactive, ref, watchEffect } from "@vue/composition-api";
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
    const form = reactive({
      name: "",
      age: "",
      idCard: "",
      phone: "",
      adress: "",
      date: "",
      region: ""
    });
    //提交方法
    const onSubmit = () => {
      console.log("submit!");
    };
    //监听事件
    watchEffect(() => {
      dialog_flag_status.value = props.flag;
    });
    return {
      dialog_flag_status,
      close,
      form,
      onSubmit
    };
  }
};
</script>
<style lang="scss" scoped>
</style>