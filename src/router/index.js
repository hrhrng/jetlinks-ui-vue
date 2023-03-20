import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: Home
  },
  {
    path: '/about',
    name: 'AboutPage',
    component: About
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
