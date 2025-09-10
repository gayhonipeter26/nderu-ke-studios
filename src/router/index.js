import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import Contact from '../pages/Contact.vue'
import Blog from '../pages/Blog.vue'
import Portfolio from '../pages/Portfolio.vue'   // ⬅️ add this

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/contact', name: 'Contact', component: Contact },
  { path: '/blog', name: 'Blog', component: Blog },
  { path: '/portfolio', name: 'Portfolio', component: Portfolio }  // ⬅️ add this
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
