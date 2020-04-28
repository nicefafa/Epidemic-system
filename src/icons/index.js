import Vue from "vue"
import svgIcon from "./svgIcon"
Vue.component("svg-icon", svgIcon)
// 解析svg文件
const req = require.context('./svg', false, /\.svg$/);
const requireAll = (requireContext) => {
    return requireContext.keys().map(requireContext)
};
requireAll(req);