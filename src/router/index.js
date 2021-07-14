import Vue from 'vue'
import VueRouter from 'vue-router'
// import { component } from 'vue/types/umd'
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

// 使用 router.beforeEach 注册一个全局前置守卫，判断用户是否登陆
router.beforeEach((to, from, next) => {
  if (to.path === '/login' 
  || to.path==='/' 
  || to.path==='/hostRegister'
  || to.path==='/license'
  || to.path==='/historyDrawer'
  ) {
    next();
  } else {
    let token = localStorage.getItem('Authorization');
 
    if (token === null || token === '') {
      if (to.path === '/forgetPassword'  
      || to.path==='/register'
      ) {
        
        next();
      }
      else{
        Message({
          message: '您需要先进行登录操作',
          type: 'warning'
        });
        //打开登录界面
        startLogin();
        //前往首页
        next({path: '/'});
      }

    } else {
      //登录状态下无法进入的页面
      if (to.path === '/forgetPassword'  
      || to.path==='/register'
      ) {
        Message({
          message: '请先退出登录',
          type: 'warning'
        });
        //前往首页
        console.log('hi');
        next({path: '/'});
      }
      else{
        next();
      }
      
    }
  }
});

export default router
