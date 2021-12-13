import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import * as echarts from 'echarts';
Vue.prototype.$echarts = echarts 
Vue.config.productionTip = false

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import Axios from 'axios';
Vue.prototype.$axios = Axios;
import api from './api/api'
Vue.prototype.$api=api

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
