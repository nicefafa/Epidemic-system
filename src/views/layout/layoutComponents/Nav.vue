<template>
  <div id="Nav">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      background-color="transparent"
      text-color="#fff"
      active-text-color="#ffd04b"
      router
    >
      <!-- 一级菜单-->
      <template v-for="(item, index) in routers">
        <el-submenu v-if="!item.hidden" :key="item.id" :index="index + ''">
          <template slot="title">
            <svg-icon :iconClass="item.meta.icon" :className="item.meta.icon" />
            <span>{{ item.meta.name }}</span>
          </template>
          <!-- 子菜单-->
          <el-menu-item
            v-for="childrenItem in item.children"
            :key="childrenItem.id"
            :index="childrenItem.path"
            >{{ childrenItem.meta.name }}
          </el-menu-item>
        </el-submenu>
      </template>
    </el-menu>
  </div>
</template>

<script>
import { ref, reactive, computed } from "@vue/composition-api";
export default {
  name: "navMenu",
  setup(props, { root }) {
    //定义变量
    const collapse= ref(false)
    const routers = reactive(root.$router.options.routes);
    return {
      routers,
      collapse
    };
  },
  
  
};
</script>
<style lang="scss" scoped>
#Nav {
  display: block;
    position: absolute;
    left: 0;
    top: 70px;
    bottom: 0;
  background-color: #283446;
  svg {
    font-size: 25px;
    margin-right: 10px;
  }
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 250px;
    min-height: 400px;
  }
.logo {
  img {
    width: 250px;
    margin: auto;
  }
}
</style>