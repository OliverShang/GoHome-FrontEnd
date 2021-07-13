import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/help',
    name: 'Help',
    component: () =>import('../views/Help.vue')
  },
  {
    path: '/coupon',
    name: 'Coupon',
    component: () =>import('../views/Coupon.vue')
  },
  {
    path: '/hostOrder',
    name: 'HostOrder',
    component: () =>import('../views/HostOrder.vue')
  },
  {
    path: '/customerOrder',
    name: 'CustomerOrder',
    component: () =>import('../views/CustomerOrder.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
