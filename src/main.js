import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import './styles/normalize.css'   // 清除浏览器默认样式
import axios from './axios'

Vue.config.productionTip = false
Vue.prototype.$axios = axios      // 全局注册使用 axios，使用方法为：$this.axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
