import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/hotels',
    name: 'Hotels',
    component: () => import('../views/Hotels.vue')
  },
  {
    path: '/hotel/:ID',
    name: 'Hotel-Room',
    component: () => import('../views/Hotel-Rooms.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
