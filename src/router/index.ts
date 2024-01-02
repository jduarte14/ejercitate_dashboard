// Composables
import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue';
import GymPanel from '@/views/GymPanel.vue';
import Login from '@/components/auth/Login.vue';
const routes = [
  {
    path: '/',
    component: Home,
    meta: { transition: 'fade' }
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/',
    meta: { transition: 'fade' }
  },
  {
    path: '/gym',
    component: GymPanel,
    meta: { transition: 'fade' }
  },
  {
    path: "/login",
    component: Login,
    meta: {
      transition: 'fade'
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
