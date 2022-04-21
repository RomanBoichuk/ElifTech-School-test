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
    path: '/banks',
    name: 'Banks',
    component: () => import('../views/Banks.vue')
  },
  {
    path: '/anketabank',
    name: 'BankAnketa',
    component: () => import('../views/BankAnketa.vue')
  },
  {
    path: '/loanapplication',
    name: 'LoanApplication',
    component: () => import('../views/LoanApplication.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
