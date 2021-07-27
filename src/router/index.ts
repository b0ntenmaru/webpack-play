import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import CalendarContainer from '@/container/CalendarContainer.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Calendar',
    component: CalendarContainer
  }
];

const router = new VueRouter({
  routes,
});

export default router;
