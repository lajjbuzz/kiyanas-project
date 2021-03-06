import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
const DefaultContainer = () => import("@/container/defaultContainer");

Vue.use(VueRouter)

const routes = [
  {
    name: "DefaultContainer",
    component: DefaultContainer,
    path: '/',
    redirect: '/Home',
    children: [
      {
        path: '/',
        name: 'Home',
        component: Home
      },
      {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
      }    
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
