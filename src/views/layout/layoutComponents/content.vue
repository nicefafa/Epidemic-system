<template>
  <div id="content">
    <div class="content-wrap">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style lang="scss" scoped>
#content {
  position: fixed;
  left: 250px;
  top: 70px;
  right: 0;
  bottom: 0;
  background-color: #ffffff;
  border-top: red 2px solid;
}
.content-wrap {
  width: 100%;
  height: 100%;
  padding-top: 30px;
  padding-left: 30px;
  background-color: #ffffff;
}
</style>