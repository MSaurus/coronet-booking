import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import StoraCalendar from './views/StoraCalendar.vue'
import LillaCalendar from './views/LillaCalendar.vue'
import Book from './views/Book.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
        path: '/stora',
        name: 'stora',
        component: StoraCalendar
    },
    {
      path: '/lilla',
      name: 'lila',
      component: LillaCalendar
    },
    {
      path: '/boka',
      name: 'boka',
      component: Book
    }


      // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
