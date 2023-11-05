import { createRouter, createWebHistory } from 'vue-router';
import homeViewRoutes from '@/views/HomeView/HomeView.routes';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    homeViewRoutes
  ]
});

export default router;
