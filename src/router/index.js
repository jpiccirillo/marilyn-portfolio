import Vue from 'vue'
import VueRouter from 'vue-router'
import AboutMe from '../views/AboutMe.vue'
import FAQ from '../views/FAQ.vue'
import Contact from '../views/Contact.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: AboutMe,
    meta: {
      title: () => 'Home',
    },
  },
  {
    path: '/faq',
    name: 'faq',
    component: FAQ,
    meta: {
      title: () => 'FAQ',
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
  next()
})

export default router
