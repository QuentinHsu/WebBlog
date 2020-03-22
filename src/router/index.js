import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import index from '../views/index.vue'
import homePage from '../components/homePage/homePage.vue'
import documentPage from '../components/documentPage/documentPage.vue'
import aboutPage from '@/components/aboutPage/aboutPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: index,
    children: [
      {
        path: '/',
        name: 'homePage',
        component: homePage
      },
      {
        path: '/document',
        name: 'document',
        component: documentPage
      },
      {
        path: '/about',
        name: 'about',
        component: aboutPage
      }
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
