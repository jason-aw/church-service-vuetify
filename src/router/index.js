// Composables
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/pages/ServicesPage.vue"),
    },
    {
      path: "/insert",
      name: "insert-schedule",
      component: () => import("@/pages/InsertSchedulePage.vue"),
    },
  ],
});

export default router
