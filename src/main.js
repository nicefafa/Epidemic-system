import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import "../src/icons/index";
import 'element-ui/lib/theme-chalk/index.css';
import VueCompositionApi from "@vue/composition-api"
import "./router/permit"
import global from "./utils/global"
// import echarts from 'echarts'
// Vue.prototype.$echarts = echarts
import VCharts from 'v-charts'
Vue.use(VCharts)
Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(VueCompositionApi);
Vue.use(global);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')