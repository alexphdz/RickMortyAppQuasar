import { RouteRecordRaw } from 'vue-router';

//Components
import MainLayout from '../../shared/layouts/MainLayout.vue';
import { HomeRoutes } from 'src/modules/home/router';

export const SharedRoutes: RouteRecordRaw = {
  path: '',
  component: MainLayout,
  children: [
    {
      ...HomeRoutes,
    },
  ],
};
