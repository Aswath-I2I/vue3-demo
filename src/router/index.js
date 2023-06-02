import { createRouter, createWebHistory } from 'vue-router'
import About from '../views/About.vue';
import Employees from '../views/Employees.vue';
import Home from "../views/Home.vue"
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:"/",
      name:'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About,
    },
    {
      path: '/employees',
      name: 'Employees',
      component: Employees,
    },
    {
      path: '/demo',
      name: 'demo',
      component:About,
    }
  ]
})

export default router
