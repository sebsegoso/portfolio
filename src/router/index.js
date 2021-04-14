import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/contacto',
    name: 'Contacto',
    // route level code-splitting
    // this generates a separate chunk (Contacto.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Contacto" */ '../views/Contacto.vue')
  },
  {
    path: '/admin',
    name: 'Admin',
    // route level code-splitting
    // this generates a separate chunk (Admin.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Admin" */ '../views/Admin/Admin.vue'),
    children: [
      {
        path: 'add-project',
        name: 'AddProject',
        // route level code-splitting
        // this generates a separate chunk (Admin.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "Admin" */ '../views/Admin/AddProject.vue'),
      }
    ]
  },
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  next()
  window.scroll({ top: 0, behavior: 'smooth' })
})

export default router
