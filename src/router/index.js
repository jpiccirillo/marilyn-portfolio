import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import AboutMe from '../views/AboutMe.vue'
import Contact from '../views/Contact.vue'
import { toggleSidebar } from '../services/sidebar'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: () => 'Home',
    },
  },
  {
    path: '/about-me',
    name: 'About',
    component: AboutMe,
    meta: {
      title: () => 'About Me',
    },
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact,
    meta: {
      title: () => 'Contact Me',
    },
  },
  {
    path: '*',
    redirect: '/',
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior: () => ({ x: 0, y: 0 }),
})

router.beforeEach(async (to, from, next) => {
  document.title =
    `Marilyn Piccirillo :: ${to.meta.title(to)}` || 'Marilyn Piccirillo'
  toggleSidebar()
  next()
})

export default router
