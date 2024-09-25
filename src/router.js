import { createRouter, createWebHistory } from 'vue-router'
import HomeView from './views/homePage/homePage.vue'
import bookmarksPage from './views/bookmarksPage.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/bookmarks',
      name: 'bookmark',
      component: bookmarksPage
    },
  ]
})

export default router
