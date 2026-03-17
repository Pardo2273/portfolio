import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/HomeView.vue'
import Projects from '../views/ProjectsView.vue'
import Resume from '../views/ResumeView.vue'

const routes = [
  {path: '/', component: Home},
  {path: '/projects', component: Projects},
  {path: '/resume', component: Resume},
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
})

export default router
