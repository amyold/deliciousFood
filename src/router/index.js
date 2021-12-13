import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/ChineseFood',
    name: 'chinese',
    component: () => import('../views/foods/index.vue'),
  },
  {
    path: '/ForeignFood',
    name: 'foreign',
    component: () => import('../views/foods/index.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
