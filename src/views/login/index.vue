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
    <div class="login-box"></div>
  </div>
</template>
<script>

import { Register } from "../../api/login";
import { ref } from "@vue/composition-api";
export default {
  name: "login",
  setup(props) {
    
    return {
      
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
  width: 35%;
  height: 100vh;
}
</style>