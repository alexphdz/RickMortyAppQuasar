import type { RouteRecordRaw } from 'vue-router';
import HomePage from '../pages/HomePage.vue';

export const HomeRoutes: RouteRecordRaw = {
  path: '/home',
  name: 'home-page',
  component: HomePage,
};
