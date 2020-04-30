<template>
  <div id="layout">
    <div class="layout">
    <layoutNav />
    <layoutHeader />
    <layoutContent />
    </div>
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
.layout{
  width: 100%;
  height: 100%;
}
</style>