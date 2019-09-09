import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'

const Home = () => import('./views/home/Home')
const Category = () => import('./views/category/Category')
const Shop = () => import('./views/shopview/Shop')
const Me = () => import('./views/me/Me')
const Mytest =() => import('./views/Mytest')
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
     redirect:'/home'
    },
    {
      path:'/home',
      component:Home
    },
    {
      path:'/category',
      component:Category
    },
    {
      path:'/me',
      component:Me
    },
    {
      path:'/shop',
      component:Shop
    },
    {
      path:'/my',
      component:Mytest
    }
    // {
    //   path: '/',
    //   name: 'home',
    //   component: Home
    // },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
