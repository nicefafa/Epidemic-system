<template>
  <div id="content">
    <div class="main-content">
      <div class="content-wrap">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style lang="scss" scoped>
@import "../../../styles/config.scss";
#content {
  height: 100vh;
}
.main-content {
  width: 100%;
  height: 100%;
  padding-top: 70px;
  padding-right: 0px;
  padding-left: 250px;
  @include webkit(box-sizing, border-box);
  @include webkit(transition, all 0.3s ease 0s);
}
.content-wrap {
  width: 100%;
  height: 100%;
  padding: 30px 30px 0 30px;
  background-color: #ffffff;
  @include webkit(box-sizing, border-box);
}
</style>