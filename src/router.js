import { createRouter, createWebHistory } from 'vue-router'
import HomeView from './views/homePage/homePage.vue'
import bookmarksPage from './views/bookmarksPage.vue'
import loginPage from './views/loginPage.vue'
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
    {
      path: '/login',
      name: 'login',
      component: loginPage
    },
  ]
})

export default router
