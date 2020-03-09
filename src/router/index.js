import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import index from '../components/index'
import homePage from '../components/homePage'
import Home from '../views/Home'

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
        path: '/Home',
        name: 'Home',
        component: Home
      },
      // {
      //   path: ''
      // }
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
