import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView, meta: { title: 'advertising agency' } },
  { path: '/privacy', name: 'privacy', component: () => import('../views/PrivacyPage.vue'), meta: { title: 'Privacy Policy' } },
  { path: '/:pathMatch(.*)*', name: 'notfound', component: () => import('../views/NotFound.vue'), meta: { title: 'Page Not Found' } }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth', top: 80 }
    }
    return { top: 0 }
  }
})

router.afterEach((to) => {
  const base = 'Mobilynx'
  document.title = to.meta?.title ? `${base} — ${to.meta.title}` : base
})

export default router
