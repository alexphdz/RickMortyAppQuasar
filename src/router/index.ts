import {
  createMemoryHistory,
  createRouter,
  createWebHashHistory,
  createWebHistory,
  LandingWelcome,
  route,
  SharedRoutes,
} from '../exports/exports';

export default route(function () {
  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : process.env.VUE_ROUTER_MODE === 'history'
    ? createWebHistory
    : createWebHashHistory;

  const Router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes: [
      {
        path: '',
        name: 'landing-welcome',
        component: LandingWelcome,
      },
      {
        ...SharedRoutes,
      },
    ],
    history: createHistory(process.env.VUE_ROUTER_BASE),
  });

  return Router;
});
