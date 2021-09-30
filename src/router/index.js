import { createRouter, createWebHashHistory } from 'vue-router'
const Home = import('../views/Home.vue')
const HomeSub = import('../views/HomeSub.vue')
const Sub = import('../views/Sub.vue')
const About = import('../views/About.vue')

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    children: [
      {
        path: 'sub',
        component: HomeSub
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    children: [
      {
        path: 'sub',
        component: Sub
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
