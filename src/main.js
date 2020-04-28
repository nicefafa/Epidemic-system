import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import "../src/icons/index";
import 'element-ui/lib/theme-chalk/index.css';
import VueCompositionApi from "@vue/composition-api"

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(VueCompositionApi);

if (process.env.NODE_ENV==="development"){
  require("./mock/mock")
}
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')