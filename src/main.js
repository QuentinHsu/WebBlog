import Vue from 'vue'
import VueRouter from 'vue-router'      // 引入 VueRouter
import 'normalize.css/normalize.css'    // 引入 normalize.css
import '@/assets/font/font.css'         // 字体文件引入
// import './styles/index.css'
import router from '@/router/router.js'        // 引入 router.js

import App from './App.vue'
import './plugins/element.js'

Vue.config.productionTip = false
Vue.use(VueRouter)                      // 加载 VueRouter

// 创建和挂载根实例
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
