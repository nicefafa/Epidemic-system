<template>
  <div id="layout">
    <layoutHeader />
    <layoutNav />
    <layoutTag/>
    <layoutContent />
  </div>
</template>

<script>
import layoutNav from "./layoutComponents/Nav";
import layoutHeader from "./layoutComponents/header";
import layoutContent from "./layoutComponents/content"

export default {
  name: "layout",
  components: { layoutContent, layoutNav, layoutHeader,},
  setup(props, { root }) {}
};
</script>
<style lang="scss" scoped>
</style>