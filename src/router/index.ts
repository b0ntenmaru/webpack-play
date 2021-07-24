import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../container/HomeContainer.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
