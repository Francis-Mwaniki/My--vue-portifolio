import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Projects from '../views/Projects.vue'
import Signup from '../views/Signup.vue'
import Login from '../views/Login.vue'
import Resume from '../views/Resume.vue'
import Welcome from '../views/Welcome.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/projects',
    name: 'projects',
    component: Projects
  },
  {
    path: '/sigup',
    name: 'signup',
    component: Signup
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/resume',
    name: 'resume',
    component: Resume
  },
  {
    path: '/welcome',
    name: 'welcome',
    component: Welcome
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
