import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('pages/HomePage.vue'),
  },

  // Always leave this as last one,
  // but you can also remove it

];

export default routes;
