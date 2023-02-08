import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PremiumPage from '../views/PremiumPage'
import AsistentaPage from '../views/AsistentaPage'
import DescarcaPage from '../views/DescarcaPage'
import LoginPage from '../views/LoginPage'
import RegisterPage from '../views/RegisterPage'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/premium-page',
    name: 'premium',
    component: PremiumPage
  },
  {
    path: '/asistenta-page',
    name: 'asistenta',
    component: AsistentaPage
  },
  {
    path: '/descarca-page',
    name: 'descarca',
    component: DescarcaPage
  },
  {
    path: '/login-page',
    name: 'login',
    component: LoginPage
  },
  {
    path: '/register-page',
    name: 'register',
    component: RegisterPage
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
