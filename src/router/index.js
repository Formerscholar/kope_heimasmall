import Vue from 'vue'
import VueRouter from 'vue-router'


const Home = () => import('../views/home/Home')
const Cart = () => import('../views/cart/Cart')
const Category = () => import('../views/category/Category')
const User = () => import('../views/user/User')
const Seach = () => import('../views/seach/Seach')



Vue.use(VueRouter)

const routes = [{
  path: '/',
  redirect: '/home'
}, {
  path: '/home',
  component: Home
}, {
  path: '/cart',
  component: Cart
}, {
  path: '/category',
  component: Category
}, {
  path: '/user',
  component: User
}, {
  path: '/seach',
  component: Seach
}]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router