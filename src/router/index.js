import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/hotels/:hotel_city',
    name: 'Hotels',
    component: () => import('../views/Hotels.vue'),
    props: true,
  },
  {
    path: '/hotel/:hotel_name',
    name: 'Hotel-Room',
    component: () => import('../views/Hotel-Rooms.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
