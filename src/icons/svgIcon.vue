<template>
  <svg :class="svgClass" aria-hidden="true">
    <use :xlink:href="iconName"></use>
  </svg>
</template>
<script>
import { ref, computed, onMounted } from "@vue/composition-api";
export default {
  name: "svgIcon",
  // 接受传过来的值
  props: {
    // 分页
    iconClass: {
      type: String, // 定义接收的值类型
      default: ""
    },
    className: {
      type: String,
      default: ""
    }
  },

  setup(props) {
    const iconName = computed(() => `#icon-${props.iconClass}`);
    const svgClass = computed(() => {
      if (props.className) {
        return `svg-icon ${props.className}`;
      } else {
        return `svg-icon`;
      }
    });

    return {
      iconName,
      svgClass
    };
  }
};
</script>
<style lang="scss" scoped>
.svg-icon {
    width: 1em;
    height: 1em;
    fill: currentColor;
}
</style>