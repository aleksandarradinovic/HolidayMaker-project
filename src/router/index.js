import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/hotels/:hotel_city',
    name: 'Hotels',
    component: () => import('../views/HotelsView.vue'),
    props: true,
  },
  {
    path: '/hotel/:hotel_name',
    name: 'Hotel-Room',
    component: () => import('../views/RoomsView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
