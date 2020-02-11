import Vue from 'vue'
import VueRouter from 'vue-router'

import index from '@/components/index.vue'

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: index,
            component: index
        },
        // 使用 Lazy loading 懒加载
        // {
        //     path: 
        // }
    ]
})