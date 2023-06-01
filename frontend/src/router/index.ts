import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Kommun from '../pages/Kommun.vue'

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/kommun/:id',
    component: Kommun,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
